import { TOKEN_LOGO } from "@/src/constants";
import { useWriteStaqeProtocolStake } from "@/src/generated";
import { usePoolData } from "@/src/hooks/usePools";
import { useTimestamp } from "@/src/hooks/useTimestamps";
import { IMetadata, IStakeDetails } from "@/src/interfaces";
import { addressLink, amountStr } from "@/src/util";
import Image from "next/image";
import { useMemo } from "react";

export const UnstakeRow: React.FC<{
  action: { id: number } & IStakeDetails;
  metadata: IMetadata;
}> = ({ action: stake, metadata }) => {
  const { pool } = usePoolData();
  const unstakeDate = useTimestamp(stake?.unstakeBlock);
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
  const { writeContract } = useWriteStaqeProtocolStake();

  if (!pool) return null;

  const renderRow = (tokenType: "ERC20" | "ERC721") => {
    const isERC20 = tokenType === "ERC20";
    const stakeAmount = isERC20 ? stake.amountERC20 : stake.idERC721;
    const tokenData = isERC20 ? pool.stakeERC20 : pool.stakeERC721;
    const totalStaked = isERC20
      ? pool.totalStakedERC20
      : pool.totalStakedERC721;

    if (stakeAmount > 0n) {
      return (
        <tr key={tokenType}>
          <td>
            <div className="font-bold mb-2">Unstake</div>
            <span className="text-xs opacity-50">
              {isERC20 ? "Token" : "NFT"}
            </span>
          </td>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <Image
                    src={
                      isERC20
                        ? logoERC20 || TOKEN_LOGO
                        : logoERC721 || TOKEN_LOGO
                    }
                    alt={tokenData.symbol}
                    width={0}
                    height={0}
                    className="w-12 h-12"
                    priority={false}
                  />
                </div>
              </div>
              <div>
                <div className="font-bold mb-2">{tokenData.symbol}</div>
                <div className="text-xs opacity-50">
                  <a
                    href={addressLink(tokenData.tokenAddress).link}
                    className="link"
                    target="_blank"
                  >
                    {addressLink(tokenData.tokenAddress).address}
                  </a>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className="font-bold mb-2 text-l">
              <span className="text-xs opacity-50">Total:</span>{" "}
              {amountStr(totalStaked, tokenData.decimals)}{" "}
              <span className="text-xs opacity-50">{tokenData.symbol}</span>
            </div>
            <span className="text-xs opacity-50">
              {isERC20 ? "Your Stake" : "Your NFT ID"}
            </span>
            <span className="text-sm py-1 px-2 mx-2 bg-slate-800 rounded-lg">
              {isERC20
                ? amountStr(stakeAmount, tokenData.decimals)
                : `#${stake.idERC721.toString()}`}
            </span>
          </td>
          <td className="text-center">
            <div className="font-bold mb-2">{unstakeDate}</div>
            <span className="text-xs opacity-50">
              Block #{stake.unstakeBlock.toString()}
            </span>
          </td>
          <td className="text-center">
            <button
              className="btn btn-block btn-info"
              onClick={() => {
                writeContract({
                  args: [
                    BigInt(pool.id),
                    isERC20 ? stake.amountERC20 : 0n,
                    isERC20 ? 0n : stake.idERC721,
                  ],
                });
              }}
            >
              Stake Again
            </button>
          </td>
        </tr>
      );
    }
    return null;
  };

  return (
    <>
      {renderRow("ERC20")}
      {renderRow("ERC721")}
    </>
  );
};
