import { IToken } from ".";

export interface IPool {
  stakeERC20: IToken;
  stakeERC721: IToken;
  rewardToken: IToken;
  totalMax: bigint;
  totalStakedERC20: bigint;
  totalStakedERC721: bigint;
  launchBlock: bigint;
}

export interface IPoolDetails extends IPool {
  owner: `0x${string}`;
  tokenURI: string;
  totalRewards: bigint;
  totalStakerStakes: bigint;
}

export interface IPoolExtendedDetails extends IPoolDetails {
  id: string;
  account: `0x${string}`;
}

export type IPools = IPoolExtendedDetails[] | undefined;

export interface IPoolWagmi {
  data: IPoolDetails | undefined;
  refetch: () => void;
}

export interface IPoolResult {
  pool: IPoolExtendedDetails | undefined;
  pools: IPoolExtendedDetails[] | undefined;
  refetch: () => void;
}

export interface IPoolData {
  id: string;
  pool: IPoolExtendedDetails | undefined;
  pools: IPoolExtendedDetails[] | undefined;
  refetch: () => void;
}
