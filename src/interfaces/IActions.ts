import { ILogos, IPoolExtendedDetails, IRewardDetails, IStakeDetails, ITimestamps } from ".";

export interface IActionsProps {
    pools: IPoolExtendedDetails[] | undefined;
    rewards: IRewardDetails[] | undefined;
    stakes: IStakeDetails[] | undefined;
}

export interface IActionContextType {
    timestamps: ITimestamps | undefined;
    logos: ILogos | undefined;
}

export type IActionType = 'stake' | 'reward' | 'unstake';

export type IActionsMap = { [Action in IActionType]: React.ElementType<any> };