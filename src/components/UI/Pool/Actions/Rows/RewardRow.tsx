import Image from "next/image";
import { useCallback, useMemo } from "react";

import { TOKEN_LOGO } from "@/src/constants";
import { useLogo } from "@/src/hooks/useLogos";
import { usePoolData } from "@/src/hooks/usePools";
import { useTimestamp } from "@/src/hooks/useTimestamps";
import {
  IMetadata,
  IPoolExtendedDetails,
  IRewardDetails,
} from "@/src/interfaces";
import {
  PiBatteryPlusVerticalDuotone,
  PiHandCoinsDuotone,
} from "react-icons/pi";
import { Address } from "viem";
import { useBlockNumber, useChainId, useChains } from "wagmi";
import { RewardDialog } from "../RewardDialog";

const Action = ({
  pool,
  action: reward,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IRewardDetails;
}) => {
  return (
    <td className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-2 h-full">
        <PiBatteryPlusVerticalDuotone className="text-8xl text-neutral-700 opacity-30" />
      </div>
      <div className="font-bold text-3xl text-neutral-500 flex justify-center items-center h-full">
        Reward&nbsp;#{reward.id + 1}
      </div>
    </td>
  );
};

const Token = ({
  pool,
  action: reward,
  metadata,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IRewardDetails;
  metadata: IMetadata;
}) => {
  const logo = useLogo(reward?.rewardToken?.tokenAddress);

  const chainId = useChainId();
  const chains = useChains();

  const getExplorer = useCallback(
    (address?: Address) => {
      const c = chains.filter((chain) => chain.id === chainId);
      return c && c.length && address
        ? c[0].blockExplorers?.default.url + "/address/" + address
        : "";
    },
    [chainId]
  );

  return (
    <td className="w-60">
      <div className="flex items-center justify-center gap-4">
        <div>
          <Image
            src={
              metadata?.logoURIs && pool?.rewardToken?.tokenAddress
                ? metadata?.logoURIs[pool?.rewardToken?.tokenAddress] ||
                  TOKEN_LOGO
                : TOKEN_LOGO
            }
            alt={reward.rewardToken.symbol}
            width={0}
            height={0}
            className="w-12 h-12 rounded-full"
            priority={false}
          />
        </div>
        <div className="text-neutral-400">
          <div className="flex justify-center items-center h-full text-xl">
            <a
              href={getExplorer(reward.rewardToken.tokenAddress)}
              target="_blank"
              className="link decoration-dotted underline-offset-8"
            >
              {reward.rewardToken.symbol}
            </a>
          </div>
        </div>
        {/* <div className="relative text-neutral-400">
      <div className="absolute inset-x-0 top-0 left-10 font-bold mb-2 text-5xl text-neutral-500 flex justify-center items-center h-full">
        <a className="link decoration-dotted underline-offset-8">
          {reward.rewardToken.symbol}
        </a>
      </div>
    </div> */}
      </div>
    </td>
  );
};

const Amount = ({
  pool,
  action: reward,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IRewardDetails;
}) => {
  const amount = useMemo(() => {
    let result = {
      total: "",
      reward: "",
    };

    if (reward.rewardAmount > 0n) {
      const scaledAmount = reward.rewardAmount * BigInt(1_000);
      const rawAmount = scaledAmount / 10n ** reward.rewardToken.decimals;
      const amount = Number(rawAmount) / 1_000;
      if (amount > 1_000) {
        result.total = amount.toLocaleString("en-US");
      } else {
        result.total = amount
          .toFixed(3)
          .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
      }
    }

    if (reward.stakerRewardAmount > 0n) {
      const scaledAmount = reward.stakerRewardAmount * BigInt(1_000);
      const rawAmount = scaledAmount / 10n ** reward.rewardToken.decimals;
      const amount = Number(rawAmount) / 1_000;
      if (amount > 1_000) {
        result.reward = amount.toLocaleString("en-US");
      } else {
        result.reward = amount
          .toFixed(3)
          .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
      }
    }

    return result;
  }, [reward]);

  const l = amount.reward.length;
  const xl =
    l > 3
      ? l > 5
        ? l > 7
          ? l > 9
            ? l > 11
              ? `2xl`
              : `3xl`
            : `4xl`
          : `5xl`
        : `5xl`
      : `5xl`;

  return (
    <td className="relative text-center">
      <div
        className={`absolute inset-x-0 top-0 font-bold mb-2 text-${xl} text-neutral-400 flex justify-center items-center h-full pointer-events-none`}
      >
        {amount.reward || amount.total}
      </div>
      {amount.reward && (
        <div className={`absolute inset-x-0 bottom-0 text-neutral-700 text-xs`}>
          Total&nbsp;{amount.total}&nbsp;{reward.rewardToken.symbol}
        </div>
      )}
    </td>
  );
};

const Date = ({
  pool,
  action: reward,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IRewardDetails;
}) => {
  const rewardDate = useTimestamp(reward?.rewardBlock);

  return (
    <td className="text-center">
      <div className="font-bold mb-2">{rewardDate}</div>
      <span className="text-xs text-neutral-600">
        Block #{reward.rewardBlock.toString()}
      </span>
    </td>
  );
};

const Btn = ({
  pool,
  action: reward,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IRewardDetails;
}) => {
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const claimAfterBlocks = useMemo(() => {
    return (
      (reward?.rewardBlock ?? 0n) +
      (reward?.claimAfterBlocks ?? 0n) -
      (blockNumber ?? 0n)
    );
  }, [reward, blockNumber]);
  const isClaimable = useMemo(
    () =>
      reward.stakerRewardAmount > 0n &&
      !reward.isClaimed &&
      claimAfterBlocks <= 0n,
    [reward, claimAfterBlocks]
  );
  return (
    <td className="text-center w-68">
      <a
        className={`btn btn-block relative overflow-hidden btn-success ${isClaimable ? `` : `btn-disabled`}`}
        onClick={() => {
          const modal: any = document.getElementById(`reward-${reward.id + 1}`);
          modal?.showModal();
        }}
      >
        <PiHandCoinsDuotone className="absolute -right-3 -top-1 text-6xl opacity-40 pointer-events-none scale-x-[-1]" />
        {claimAfterBlocks > 0n ? (
          <span className="text-md">
            Claim Reward After {claimAfterBlocks.toString()} Blocks
          </span>
        ) : (
          <span className="text-2xl">Claim Reward</span>
        )}
      </a>

      <RewardDialog
        poolId={BigInt(pool.id)}
        rewardId={BigInt(reward.id)}
        handle={() => {
          const modal: any = document.getElementById(`reward-${reward.id + 1}`);
          modal?.close();
        }}
      />
    </td>
  );
};

export const RewardRow: React.FC<{
  action: { id: number } & IRewardDetails;
  metadata: IMetadata;
}> = ({ action, metadata }) => {
  const { pool } = usePoolData();

  if (!pool) return null;

  return (
    <tr>
      <Action pool={pool} action={action} />
      <Token pool={pool} action={action} metadata={metadata} />
      <Amount pool={pool} action={action} />
      <Date pool={pool} action={action} />
      <Btn pool={pool} action={action} />
    </tr>
  );
};
