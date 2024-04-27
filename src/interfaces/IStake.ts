export interface IStake {
    amountERC20: bigint;
    idERC721: bigint;
    stakeBlock: bigint;
    unstakeBlock: bigint;
}

export interface IStakeDetails extends IStake {
}

export type IStakes = IStakeDetails[];

export type IStakesMap = { [poolId: string]: IStakes };