import { staqeProtocolAbi as abi, staqeProtocolAddress } from "@/src/generated";
import { IPools, IStakesMap } from "@/src/interfaces";
import { useMemo } from 'react';
import { useChainId, useReadContracts } from "wagmi";

export function useStakes(pools: IPools = []) {
  const chainId = useChainId();
  const { [chainId]: address } = staqeProtocolAddress as any;

  const stakesDependencies = useMemo(() => {
    return pools.map(pool => ({
      totalStakerStakes: pool.totalStakerStakes,
      account: pool.account,
      id: pool.id,
    }));
  }, [pools]);

  const contracts = useMemo(() => {
    return pools.flatMap(pool =>
      Array.from({ length: Number(pool.totalStakerStakes || 0) }, (_, index) => ({
        abi, address,
        functionName: "getStake",
        args: [pool.account, BigInt(pool.id), BigInt(index)],
      }))
    );
  }, [stakesDependencies]);

  const { data: dataStakes } = useReadContracts({ contracts });

  return useMemo(() => {
    if (!dataStakes || dataStakes.length === 0) return {};

    return dataStakes.reduce<IStakesMap>((acc, stakeData, index) => {
      const poolId = String(contracts[index].args[1]);
      const stake = stakeData.result as any;

      acc[poolId] = acc[poolId] ? [...acc[poolId], stake] : [stake];
      return acc;
    }, {});
  }, [dataStakes, contracts]);
}
