import { staqeProtocolAbi as abi, staqeProtocolAddress } from "@/src/generated";
import { IPools, IRewardsMap } from "@/src/interfaces";
import { useMemo } from 'react';
import { useChainId, useReadContracts } from "wagmi";

export function useRewards(pools: IPools = []) {
  const chainId = useChainId();
  const { [chainId]: address } = staqeProtocolAddress as any;

  const rewardsDependencies = useMemo(() => {
    return pools.map(pool => ({
      totalRewards: pool.totalRewards,
      account: pool.account,
      id: pool.id,
    }));
  }, [pools]);

  const contracts = useMemo(() => {
    return pools.flatMap(pool =>
      Array.from({ length: Number(pool.totalRewards || 0) }, (_, index) => ({
        abi, address,
        functionName: "getReward",
        args: [pool.account, BigInt(pool.id), BigInt(index)],
      }))
    );
  }, [rewardsDependencies]);

  const { data: dataRewards } = useReadContracts({ contracts });

  return useMemo(() => {
    if (!dataRewards || dataRewards.length === 0) return {};

    return dataRewards.reduce<IRewardsMap>((acc, rewardData, index) => {
      const poolId = String(contracts[index].args[1]);
      const reward = rewardData.result as any;

      acc[poolId] = acc[poolId] ? [...acc[poolId], reward] : [reward];
      return acc;
    }, {});
  }, [dataRewards, contracts]);
}
