import Image from "next/image";

import { useWriteStaqeProtocolUnstake } from "@/src/generated";
import { usePoolData } from "@/src/hooks/usePools";
import { useTimestamp } from "@/src/hooks/useTimestamps";
import {
  IMetadata,
  IPoolExtendedDetails,
  IStakeDetails,
} from "@/src/interfaces";
import { useMemo } from "react";
import { PiBatteryVerticalFullDuotone, PiHandDuotone } from "react-icons/pi";
import { TOKEN_LOGO } from "@/src/constants";

const Action = ({
  pool,
  action: stake,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IStakeDetails;
}) => {
  return (
    <td className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-2 h-full">
        <PiBatteryVerticalFullDuotone className="text-8xl text-neutral-700 opacity-30" />
      </div>
      <div className="font-bold text-3xl text-neutral-500 flex justify-center items-center h-full">
        Stake&nbsp;#{stake.id + 1}
      </div>
    </td>
  );
};

const Token = ({
  pool,
  action: stake,
  metadata,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IStakeDetails;
  metadata: IMetadata;
}) => {
  const logoERC20 = useMemo(() => {
    return metadata?.logoURIs && pool?.stakeERC20?.tokenAddress
      ? metadata?.logoURIs[pool?.stakeERC20?.tokenAddress]
      : TOKEN_LOGO;
  }, [metadata?.logoURIs, pool?.stakeERC20]);
  const logoERC721 = useMemo(() => {
    return metadata?.logoURIs && pool?.stakeERC721?.tokenAddress
      ? metadata?.logoURIs[pool?.stakeERC721?.tokenAddress]
      : TOKEN_LOGO;
  }, [metadata?.logoURIs, pool?.stakeERC721]);

  const erc20 = useMemo(
    () => stake.amountERC20 > 0n && pool.stakeERC20,
    [stake]
  );
  const erc721 = useMemo(
    () => stake.idERC721 > 0n && pool.stakeERC721,
    [stake]
  );

  return (
    <td className="w-60">
      <div className="flex items-center justify-center gap-4">
        <div className="flex">
          {erc20 && (
            <Image
              src={logoERC20 || TOKEN_LOGO}
              alt="ERC20"
              width={0}
              height={0}
              className="w-12 h-12 rounded-full"
              priority={false}
            />
          )}
          {erc721 && (
            <Image
              src={logoERC721 || TOKEN_LOGO}
              alt="ERC721"
              width={0}
              height={0}
              className={`w-12 h-12 rounded-full ${erc20 ? `-ml-5` : ``}`}
              priority={false}
            />
          )}
        </div>
        <div className="text-neutral-400 flex flex-col">
          {erc20 && (
            <div>
              <a className="link decoration-dotted underline-offset-4 text-xl">
                {erc20.symbol}
              </a>
            </div>
          )}
          {erc721 && (
            <div>
              <a className="link decoration-dotted underline-offset-4 text-xl">
                {erc721.symbol}
              </a>
            </div>
          )}
        </div>
      </div>
    </td>
  );
};

const Amount = ({
  pool,
  action: stake,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IStakeDetails;
}) => {
  const amount = useMemo(() => {
    const result = {
      erc20: "",
      erc721: "",
    };

    if (stake.amountERC20 > 0n) {
      const scaledAmount = stake.amountERC20 * BigInt(1_000);
      const rawAmount = scaledAmount / 10n ** pool.stakeERC20.decimals;
      const amount = Number(rawAmount) / 1_000;
      if (amount > 1_000) {
        result.erc20 = amount.toLocaleString("en-US");
      } else {
        result.erc20 = amount
          .toFixed(3)
          .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
      }
    }

    if (stake.idERC721 > 0n) {
      result.erc721 = stake.idERC721.toString();
    }

    return result;
  }, [stake]);

  const percentage = useMemo(() => {
    const result = {
      erc20: "",
      erc721: "",
    };

    if (
      pool.totalStakedERC20 > 0n &&
      stake.amountERC20 > 0n &&
      stake.unstakeBlock <= 0n
    ) {
      const scaledAmount = stake.amountERC20 * BigInt(100_000);
      const rawPercentage = scaledAmount / pool.totalStakedERC20;
      const percentage = Number(rawPercentage) / 1_000;
      result.erc20 = percentage
        .toFixed(3)
        .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
    }

    if (
      pool.totalStakedERC721 > 0n &&
      stake.idERC721 > 0n &&
      stake.unstakeBlock <= 0n
    ) {
      const scaledAmount = BigInt(100_000);
      const rawPercentage = scaledAmount / pool.totalStakedERC721;
      const percentage = Number(rawPercentage) / 1_000;
      result.erc721 = percentage
        .toFixed(3)
        .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
    }

    return result;
  }, [stake]);

  const l = amount.erc20.length;
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
        : `6xl`
      : `7xl`;

  return (
    <td className="relative overflow-hidden">
      <div className="flex flex-col items-center text-neutral-400">
        {amount?.erc20 && (
          <div>
            <span
              className={`absolute inset-x-0 top-0 font-bold text-${xl} opacity-10 flex justify-center items-center h-full`}
            >
              {amount.erc20}
            </span>
            {percentage.erc20 && (
              <span className="text-xs">{percentage.erc20}% of pool</span>
            )}
          </div>
        )}
        {amount?.erc721 && (
          <div>
            <span className="text-xs text-neutral-600 mr-2">NFT#</span>
            <span className="text-xl">{amount.erc721}</span>
            {percentage.erc721 && (
              <span className="text-xs text-neutral-600 ml-2">
                {percentage.erc721}% of pool
              </span>
            )}
          </div>
        )}
      </div>
    </td>
  );
};

const Date = ({
  pool,
  action: stake,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IStakeDetails;
}) => {
  const stakeDate = useTimestamp(stake?.stakeBlock);

  return (
    <td className="text-center">
      <div className="font-bold mb-2">{stakeDate}</div>
      <span className="text-xs text-neutral-600">
        Block #{stake.stakeBlock.toString()}
      </span>
    </td>
  );
};

const Btn = ({
  pool,
  action: stake,
}: {
  pool: IPoolExtendedDetails;
  action: { id: number } & IStakeDetails;
}) => {
  const { writeContract } = useWriteStaqeProtocolUnstake();

  return (
    <td className="text-center w-68">
      <a
        className={`btn btn-block relative overflow-hidden btn-warning ${stake.unstakeBlock > 0n ? `btn-disabled` : ``}`}
        onClick={() => {
          writeContract({
            args: [BigInt(pool.id), [BigInt(stake.id)]],
          });
        }}
      >
        <PiHandDuotone className="absolute -right-3 -top-1 text-6xl opacity-40 pointer-events-none scale-x-[-1]" />
        {stake.unstakeBlock > 0n ? (
          <span className="text-md">
            Unstaked in #{stake.unstakeBlock.toString()} block
          </span>
        ) : (
          <span className="text-2xl">Unstake</span>
        )}
      </a>
    </td>
  );
};

export const StakeRow: React.FC<{
  action: { id: number } & IStakeDetails;
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
