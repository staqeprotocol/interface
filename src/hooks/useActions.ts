import { useMemo } from "react";

import { IActionType, IRewardDetails, IStakeDetails } from "@/src/interfaces";

type CombinedDetails = { id: number, block: bigint; type: IActionType } & (
    | IRewardDetails
    | IStakeDetails
);

export const useActions = (
    rewards: IRewardDetails[] | undefined = [],
    stakes: IStakeDetails[] | undefined = [],
): CombinedDetails[] => useMemo(() => {
    let combined: CombinedDetails[] = [];

    combined = [
        ...rewards.map((reward, id) => ({
            ...reward,
            id,
            block: reward.rewardBlock,
            type: "reward" as const,
        })),
        ...stakes.flatMap((stake, id) => [
            { ...stake, id, block: stake.stakeBlock, type: "stake" as const },
            ...(stake.unstakeBlock > 0n
                ? [{ ...stake, id, block: stake.unstakeBlock, type: "unstake" as const }]
                : []),
        ]),
    ];

    return combined.sort((a, b) => (a.block > b.block ? 1 : -1));
}, [rewards, stakes]);
