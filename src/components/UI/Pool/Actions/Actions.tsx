import React, { useMemo } from "react";

import {
  IActionType,
  IActionsMap,
  IRewardDetails,
  IStakeDetails,
} from "@/src/interfaces";

import {
  RewardRow,
  StakeRow,
  UnstakeRow,
} from "@/src/components/UI/Pool/Actions/Rows";
import { useMetadata } from "@/src/hooks/useMetadata";
import { usePoolData } from "@/src/hooks/usePools";
import { useRewards } from "@/src/hooks/useRewards";
import { useStakes } from "@/src/hooks/useStakes";
import { PiTableDuotone } from "react-icons/pi";

const actionsMap: IActionsMap = {
  reward: RewardRow,
  stake: StakeRow,
  unstake: UnstakeRow,
};

type CombinedDetails = { id: number; block: bigint; type: IActionType } & (
  | IRewardDetails
  | IStakeDetails
);

export const Actions = () => {
  const { id, pools } = usePoolData();

  const { [id]: metadata = {} } = useMetadata(pools);
  const { [id]: rewards = [] } = useRewards(pools);
  const { [id]: stakes = [] } = useStakes(pools);

  const actions = useMemo(() => {
    let combined: CombinedDetails[] = [];

    combined = [
      ...rewards.map((reward, id) => ({
        ...reward,
        id,
        block: reward.rewardBlock,
        type: "reward" as const,
      })),
      ...stakes.map((stake, id) => ({
        ...stake,
        id,
        block: stake.stakeBlock,
        type: "stake" as const,
      })),
    ];

    return combined.sort((a, b) =>
      a.block > b.block
        ? 1
        : a.type === b.type && Number(a.id) > Number(b.id)
          ? 1
          : -1
    );
  }, [rewards, stakes]);

  return (
    <div className="flex flex-col gap-2 mt-2 h-full w-full">
      <h1 className="text-4xl text-neutral-700 -mb-2">Actions</h1>
      {actions?.length ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-base-200">
                <th className="text-center rounded-ss-2xl">Action</th>
                <th className="text-center">Token</th>
                <th className="text-center">Amount</th>
                <th className="text-center">Date</th>
                <th className="rounded-se-2xl"></th>
              </tr>
            </thead>
            <tbody>
              {actions.map((action, idx) =>
                React.createElement(actionsMap[action.type], {
                  action: action,
                  metadata: metadata,
                  key: `${idx}-${action.type}`,
                })
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-full w-full bg-base-200 text-neutral-600 rounded-xl p-4 text-center text-sm">
          <div>
            <PiTableDuotone className="w-full text-center text-8xl mb-2" />
          </div>
          The pool has no rewards, add stake to get reward.
        </div>
      )}
    </div>
  );
};
