import { useContext, useMemo } from "react";
import { useChainId, useReadContracts } from "wagmi";

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
  IPoolWagmi,
  IPools,
} from "@/src/interfaces";

import PoolData from "../contexts/PoolData";

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

export function usePool(id: string, account: `0x${string}`): IPoolResult {
  const args = useMemo(
    () => (id ? ([account, BigInt(id)] as const) : undefined),
    [id, account]
  );

  const { data: dataPool, refetch }: IPoolWagmi = useReadStaqeProtocolGetPool({
    args,
  });

  const pools = useMemo<IPools>(
    () => (dataPool ? [{ id, account, ...dataPool }] : undefined),
    [dataPool]
  );

  return { pool: pools?.[0], pools, refetch };
}

export function usePools(
  page: number = 1,
  size: number = 2,
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
  const hasNext = !!total && page * size < Number(total);

  const contracts = useMemo(() => {
    const endIndex = Number(total || "0") - 1 - (page - 1) * size;
    const startIndex = Math.max(endIndex - size + 1, 0);

    const poolIds = Array.from(
      { length: endIndex - startIndex + 1 },
      (_, i) => endIndex - i + 1
    );

    return poolIds.flatMap((id) => [
      {
        abi,
        address,
        functionName: "getPool",
        args: [account, BigInt(id)],
      },
    ]);
  }, [total, page, size, account]);

  const { data: dataPools } = useReadContracts({ contracts });

  const pools = useMemo(() => {
    if (!dataPools || dataPools.length <= 0) return undefined;

    return dataPools.reduce<IPoolExtendedDetails[]>((acc, _, index, array) => {
      acc.push({
        id: String(contracts[index].args[1]),
        account,
        ...((array[index].result || {}) as IPoolDetails),
      });

      return acc;
    }, []);
  }, [dataPools, contracts]);

  return { pools, hasPrev, hasNext };
}
