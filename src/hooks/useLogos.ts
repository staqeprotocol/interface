import { useEffect, useMemo, useState } from "react";
import { ZERO_ADDRESS } from "@/src/constants";
import { ILogos, IPoolExtendedDetails, IRewardDetails } from "@/src/interfaces";
import { getLogo } from "@/src/logo";

export function useLogo(token: `0x${string}`) {
  return useMemo(() => getLogo(token), [token]);
}

export function useLogos({
  pools,
  rewards
}: {
  pools: IPoolExtendedDetails[] | undefined,
  rewards: IRewardDetails[] | undefined
}): ILogos {
  const [logos, setLogos] = useState<ILogos>({});

  const tokens = useMemo(() => {
    const uniqueTokens = new Set<`0x${string}`>();

    pools?.forEach(pool => {
      if (pool?.stakeERC20?.tokenAddress && pool.stakeERC20.tokenAddress !== ZERO_ADDRESS) {
        uniqueTokens.add(pool.stakeERC20.tokenAddress);
      }

      if (pool?.stakeERC721?.tokenAddress && pool.stakeERC721.tokenAddress !== ZERO_ADDRESS) {
        uniqueTokens.add(pool.stakeERC721.tokenAddress);
      }

      if (pool?.rewardToken?.tokenAddress && pool.rewardToken.tokenAddress !== ZERO_ADDRESS) {
        uniqueTokens.add(pool.rewardToken.tokenAddress);
      }
    });

    rewards?.forEach(reward => {
      if (reward?.rewardToken?.tokenAddress && reward.rewardToken.tokenAddress !== ZERO_ADDRESS) {
        uniqueTokens.add(reward.rewardToken.tokenAddress);
      }
    });

    return Array.from(uniqueTokens);
  }, [pools, rewards]);

  useEffect(() => {
    if (!tokens || !tokens.length) return;

    const getLogos: ILogos = {};

    tokens.forEach(token => {
      getLogos[token] = getLogo(token);
    });

    setLogos(getLogos);
  }, [tokens]);

  return logos;
}
