import { ZERO_ADDRESS } from "@/src/constants";
import { useReadStaqeProtocolGetTotalPools } from "@/src/generated";
import { usePools } from "@/src/hooks/usePools";
import { useRewards } from "@/src/hooks/useRewards";
import { useStakes } from "@/src/hooks/useStakes";
import {
  IMetadataMap,
  IPoolExtendedDetails,
  IRewardsMap,
  IStakesMap,
} from "@/src/interfaces";
import { useEffect, useState } from "react";
import { useMetadata } from "./useMetadata";

interface IDashboard {
  completed: boolean | undefined;
  pools: {
    total: bigint;
    processed: bigint;
  };
  staked: {
    pools: IPoolExtendedDetails[];
    stakes: IStakesMap;
    rewards: IRewardsMap;
    metadata: IMetadataMap;
  };
  launched: {
    pools: IPoolExtendedDetails[];
    stakes: IStakesMap;
    rewards: IRewardsMap;
    metadata: IMetadataMap;
  };
}

export function useDashboard(user: `0x${string}` = ZERO_ADDRESS): IDashboard {
  const { data: totalPools = 0n } = useReadStaqeProtocolGetTotalPools();
  const [totalPoolsProcessed, setTotalPoolsProcessed] = useState(0n);

  const [page, setPage] = useState(1);
  const { pools: getPools } = usePools(page, 10, user);

  const [stakedPools, setStakedPools] = useState<IPoolExtendedDetails[]>([]);
  const [launchedPools, setLaunchedPools] = useState<IPoolExtendedDetails[]>(
    []
  );

  const [completed, setCompleted] = useState<boolean | undefined>();

  const stakedStakes = useStakes(completed ? stakedPools : []);
  const stakedRewards = useRewards(completed ? stakedPools : []);
  const stakedMetadata = useMetadata(completed ? stakedPools : []);

  const launchedStakes = useStakes(completed ? launchedPools : []);
  const launchedRewards = useRewards(completed ? launchedPools : []);
  const launchedMetadata = useMetadata(completed ? launchedPools : []);

  useEffect(() => {
    if (totalPoolsProcessed <= 0n) {
      setLaunchedPools([]);
    }

    if (!getPools?.length || totalPools <= 0n || completed) return;

    getPools.forEach((pool) => {
      if (pool.owner === user) {
        setLaunchedPools((prev) => [...(prev ?? []), pool]);
      }
      if (pool.totalStakerStakes > 0n) {
        setStakedPools((prev) => [...(prev ?? []), pool]);
      }
    });

    setTotalPoolsProcessed((prev) => prev + BigInt(getPools.length));
  }, [completed, getPools, totalPools, totalPoolsProcessed, user]);

  useEffect(() => {
    if (totalPools <= 0n) return;
    if (totalPoolsProcessed < totalPools) {
      if (completed === undefined) setCompleted(false);
      const timer = setTimeout(() => setPage(page + 1), 100);
      return () => clearTimeout(timer);
    } else {
      setCompleted(true);
    }
  }, [completed, page, totalPools, totalPoolsProcessed]);

  return {
    completed,
    pools: {
      total: totalPools,
      processed: totalPoolsProcessed,
    },
    staked: {
      pools: stakedPools,
      stakes: stakedStakes,
      rewards: stakedRewards,
      metadata: stakedMetadata,
    },
    launched: {
      pools: launchedPools,
      stakes: launchedStakes,
      rewards: launchedRewards,
      metadata: launchedMetadata,
    },
  };
}
