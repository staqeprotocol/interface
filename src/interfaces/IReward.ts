import { IToken } from ".";

export interface IReward {
    isForERC721Stakers: boolean;
    rewardToken: IToken;
    rewardAmount: bigint;
    totalStaked: bigint;
    claimAfterBlocks: bigint;
    rewardBlock: bigint;
}

export interface IRewardDetails extends IReward {
    stakerRewardAmount: bigint;
    isClaimed: boolean;
}

export type IRewards = IRewardDetails[];

export type IRewardsMap = { [poolId: string]: IRewards };