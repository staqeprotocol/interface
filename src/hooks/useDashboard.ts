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
import { useEffect, useMemo, useState } from "react";
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

export function useDashboard(account: `0x${string}`): IDashboard | undefined {
  const { data: totalPools = 0n } = useReadStaqeProtocolGetTotalPools();
  const [totalPoolsProcessed, setTotalPoolsProcessed] = useState(0n);

  const perPage = 1;

  const [page, setPage] = useState(1);
  const total = useMemo(() => totalPools / BigInt(perPage), [totalPools]);
  const { pools: getPools } = usePools(page, perPage, account);
  const pools = useMemo(
    () =>
      JSON.stringify(getPools, (_, v) =>
        typeof v === "bigint" ? v.toString() : v
      ),
    [getPools]
  );

  const [stakedPools, setStakedPools] = useState<IPoolExtendedDetails[]>([]);
  const [launchedPools, setLaunchedPools] = useState<IPoolExtendedDetails[]>(
    []
  );

  const [completed, setCompleted] = useState<boolean>();

  const stakedStakes = useStakes(completed ? stakedPools : []);
  const stakedRewards = useRewards(completed ? stakedPools : []);
  const stakedMetadata = useMetadata(completed ? stakedPools : []);

  const launchedStakes = useStakes(completed ? launchedPools : []);
  const launchedRewards = useRewards(completed ? launchedPools : []);
  const launchedMetadata = useMetadata(completed ? launchedPools : []);

  useEffect(() => {
    setStakedPools([]);
    setLaunchedPools([]);
  }, []);

  useEffect(() => {
    if (page >= total) return;
    console.log("Page:", page, "/", total);
    const timer = setTimeout(() => setPage((page) => page + 1), 1000);
    return () => clearTimeout(timer);
  }, [page, total]);

  useEffect(() => {
    if (totalPools > 0n && totalPoolsProcessed < totalPools) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  }, [totalPools, totalPoolsProcessed]);

  useEffect(() => {
    if (!getPools) return;

    getPools.forEach((pool) => {
      if (pool.owner === account) {
        setLaunchedPools((prev) => [...(prev ?? []), pool]);
      }
      if (pool.totalStakerStakes > 0n) {
        setStakedPools((prev) => [...(prev ?? []), pool]);
      }
    });

    setTotalPoolsProcessed((prev) => prev + BigInt(getPools.length));
  }, [pools, account]);

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
