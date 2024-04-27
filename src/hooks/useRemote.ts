import { useEffect, useMemo, useState } from "react";
import { getBlock } from '@wagmi/core'
import { IPools, IPoolExtendedDetails } from "@/src/interfaces";
import { getMetadata } from "@/src/metadata";
import { getLogoAsync } from "@/src/logo";
import { config } from "../wagmi";

function bigintTimestampToHumanDate(bigintTimestamp: bigint): string {
  const timestamp = Number(bigintTimestamp);
  const date = new Date(timestamp);
  return date.toLocaleString();
}

export function useRemote(pools: IPoolExtendedDetails[] | undefined = []) {
  const [poolsRemote, setPoolsRemote] = useState<IPoolExtendedDetails[]>([]);

  const poolsDependencies = useMemo(() => {
    return pools.map(pool => ({
      stakeERC20: pool.stakeERC20,
      stakeERC721: pool.stakeERC721,
      rewardToken: pool.rewardToken,
      tokenURI: pool.tokenURI,
    }));
  }, [pools]);

  useEffect(() => {
    if (!pools || !pools.length) {
      console.log("setPoolsRemote([])")
      // setPoolsRemote([]);
      return;
    }

    const fetchRemoteDetails = async (pool: IPoolExtendedDetails): Promise<any> => {
      const { timestamp } = await getBlock(config, {
        blockNumber: pool.launchBlock
      })

      return {
        ...pool,
        totalMax: pool.totalMax.toString(),
        totalStakedERC20: (pool.totalStakedERC20 / 10n ** (pool.stakeERC20.decimals || 0n)).toString(),
        totalStakedERC721: pool.totalStakedERC721.toString(),
        launchBlock: pool.launchBlock.toString(),
        launchBlockDate: bigintTimestampToHumanDate(timestamp),
        totalRewards: (pool.totalRewards / 10n ** (pool.rewardToken.decimals || 0n)).toString(),
        totalStakerStakes: pool.totalStakerStakes.toString(),
        stakeERC20: { logo: await getLogoAsync(pool.stakeERC20.tokenAddress), ...pool.stakeERC20 },
        stakeERC721: { logo: await getLogoAsync(pool.stakeERC721.tokenAddress), ...pool.stakeERC721 },
        rewardToken: { logo: await getLogoAsync(pool.rewardToken.tokenAddress), ...pool.rewardToken },
        metadata: await getMetadata(pool.tokenURI),
      };
    };

    const fetchAllPoolDetails = async () => {
      const detailsPromises = pools.map(pool => fetchRemoteDetails(pool));
      const results = await Promise.all(detailsPromises);

      setPoolsRemote(results);
    };

    fetchAllPoolDetails();
  }, [poolsDependencies]);

  return poolsRemote;
}
