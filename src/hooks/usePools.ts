import { readContracts } from "@wagmi/core";
import { useContext, useEffect, useMemo, useState } from "react";
import { useChainId } from "wagmi";

import {
  staqeProtocolAbi as abi,
  staqeProtocolAddress,
  useReadStaqeProtocolGetPool,
  useReadStaqeProtocolGetTotalPools,
} from "@/src/generated";
import {
  IPoolData,
  IPoolDetails,
  IPoolExtendedDetails,
  IPoolResult,
  IPools,
  IPoolWagmi,
} from "@/src/interfaces";

import PoolData from "../contexts/PoolData";

import { config } from "../wagmi";

export const usePoolData = (): IPoolData => {
  const context = useContext(PoolData);
  return (
    context ?? {
      id: "",
      pool: undefined,
      pools: undefined,
      refetch: () => null,
    }
  );
};

export function usePool(
  id: string,
  chain: number,
  account: `0x${string}`
): IPoolResult {
  const args = useMemo(
    () => (id ? ([account, BigInt(id)] as const) : undefined),
    [id, account]
  );

  const { data: dataPool, refetch }: IPoolWagmi = useReadStaqeProtocolGetPool({
    chainId: (chain ? chain : undefined) as any,
    args,
  });

  const pools = useMemo<IPools>(
    () => (dataPool ? [{ id, account, ...dataPool }] : undefined),
    [id, account, dataPool]
  );

  return { pool: pools?.[0], pools, refetch };
}

export function usePools(
  page: number = 1,
  size: number = 4,
  account: `0x${string}`
): {
  hasPrev: boolean;
  hasNext: boolean;
  pools: IPoolExtendedDetails[] | undefined;
} {
  const chainId = useChainId();
  const { [chainId]: address } = staqeProtocolAddress as any;

  const { data: total } = useReadStaqeProtocolGetTotalPools();

  const hasPrev = page > 1;

  const [pools, setPools] = useState<IPoolExtendedDetails[] | undefined>(
    undefined
  );
  const [allValidPools, setAllValidPools] = useState<IPoolExtendedDetails[]>(
    []
  );

  useEffect(() => {
    let isMounted = true;

    if (!total) return;

    const fetchPools = async () => {
      let fetchedPools: IPoolExtendedDetails[] = [];
      let validPools: IPoolExtendedDetails[] = [];
      let endIndex = Number(total) - 1;
      let attempts = 0;

      while (validPools.length < page * size && attempts < Number(total)) {
        const startIndex = Math.max(endIndex - size + 1, 0);
        const poolIds = Array.from(
          { length: endIndex - startIndex + 1 },
          (_, i) => endIndex - i + 1
        );

        const contracts = poolIds.map((id) => ({
          address,
          abi,
          functionName: "getPool",
          args: [account, BigInt(id)],
        }));

        const dataPools = await readContracts(config, {
          contracts,
        });

        fetchedPools = (dataPools || []).reduce<IPoolExtendedDetails[]>(
          (acc, pool, index) => {
            const poolData = (pool.result || {}) as IPoolDetails;
            if (/^ipfs/.test(poolData.tokenURI)) {
              acc.push({
                id: String(contracts[index].args[1]),
                account,
                ...poolData,
              });
            }
            return acc;
          },
          []
        );

        validPools = [...validPools, ...fetchedPools];
        endIndex -= size;
        attempts += size;
      }

      if (isMounted) {
        setAllValidPools(validPools);
        const start = (page - 1) * size;
        setPools(validPools.slice(start, start + size));
      }
    };

    fetchPools();

    return () => {
      isMounted = false;
    };
  }, [total, page, size, account, address]);

  const hasNext = useMemo(() => {
    const nextPageStartIndex = page * size;
    return allValidPools.length > nextPageStartIndex;
  }, [allValidPools, page, size]);

  return { pools, hasPrev, hasNext };
}
