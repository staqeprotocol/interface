import Image from "next/image";
import { useCallback, useMemo } from "react";

import { TOKEN_LOGO, ZERO_ADDRESS as ZERO } from "@/src/constants";
import { useMetadata } from "@/src/hooks/useMetadata";
import { IMetadata, IPoolExtendedDetails, IToken } from "@/src/interfaces";
import Link from "next/link";
import { Address } from "viem";
import { useChainId, useChains } from "wagmi";

const Stake = ({
  erc20,
  erc721,
  metadata,
}: {
  erc20: IToken | undefined;
  erc721?: IToken | undefined;
  metadata: IMetadata | undefined;
}) => {
  const logoERC20 = useMemo(() => {
    if (!metadata || !erc20) return TOKEN_LOGO;
    return metadata?.logoURIs?.[erc20.tokenAddress];
  }, [metadata?.tokens]);
  const logoERC721 = useMemo(() => {
    if (!metadata || !erc721) return TOKEN_LOGO;
    return metadata?.logoURIs?.[erc721.tokenAddress];
  }, [metadata?.tokens]);

  const hasERC20 = erc20 && !!erc20.symbol;
  const hasERC721 = erc721 && !!erc721.symbol;

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

  const STK = hasERC20 && (
    <span>
      <span className="text-white bg-gray-700 px-2 py-1 rounded-lg">
        {erc20.symbol}
      </span>
      <a
        href={getExplorer(erc20.tokenAddress)}
        target="_blank"
        className="link decoration-dotted underline-offset-2 font-mono text-gray-400 ml-1"
      >
        {erc20.tokenAddress.slice(0, 5)}..
        {erc20.tokenAddress.slice(erc20.tokenAddress.length - 3)}
      </a>
    </span>
  );

  const NFT = hasERC721 && (
    <span>
      <span className="text-white bg-gray-700 px-2 py-1 rounded-lg">
        {erc721.symbol}
      </span>
      <a
        href={getExplorer(erc721.tokenAddress)}
        target="_blank"
        className="link decoration-dotted underline-offset-2 font-mono text-gray-400 ml-1"
      >
        {erc721.tokenAddress.slice(0, 5)}..
        {erc721.tokenAddress.slice(erc721.tokenAddress.length - 3)}
      </a>
    </span>
  );

  return (
    <div className="flex justify-center items-center">
      {hasERC20 && (
        <div className="tooltip" data-tip={erc20.symbol}>
          <Image
            src={logoERC20 || `/images/STK.svg`}
            width={0}
            height={0}
            alt="ERC20"
            className="w-10 h-10 rounded-full bg-gray-700"
          />
        </div>
      )}
      {hasERC721 && (
        <div
          className={`tooltip ${hasERC20 && "-ml-4"}`}
          data-tip={erc721?.symbol}
        >
          <Image
            src={logoERC721 || `/images/NFT.svg`}
            width={0}
            height={0}
            alt="ERC721"
            className="w-10 h-10 rounded-full bg-gray-700"
          />
        </div>
      )}
      <div className="lg:flex flex-col gap-2 ml-2 hidden">
        {hasERC20 && (
          <div className={`${hasERC721 ? "text-xs" : "text-l"}`}>{STK}</div>
        )}
        {hasERC721 && (
          <div className={`${hasERC20 ? "text-xs" : "text-l"}`}>{NFT}</div>
        )}
      </div>
    </div>
  );
};

const Reward = ({
  erc20,
  metadata,
}: {
  erc20: IToken | undefined;
  metadata: IMetadata | undefined;
}) => {
  const logoReward = useMemo(() => {
    if (!metadata || !erc20) return TOKEN_LOGO;
    return metadata?.logoURIs?.[erc20.tokenAddress];
  }, [metadata?.tokens]);

  const hasReward = erc20 && !!erc20.symbol;

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

  const RWD = hasReward ? (
    <span>
      <span className="text-white bg-gray-700 px-2 py-1 rounded-lg">
        {erc20.symbol}
      </span>
      <a
        href={getExplorer(erc20.tokenAddress)}
        target="_blank"
        className="link decoration-dotted underline-offset-2 font-mono text-gray-400 ml-1"
      >
        {erc20.tokenAddress.slice(0, 5)}..
        {erc20.tokenAddress.slice(erc20.tokenAddress.length - 3)}
      </a>
    </span>
  ) : (
    <span>
      <span className="decoration-dotted underline-offset-2 text-gray-400 ml-1">
        Any Tokens
      </span>
    </span>
  );

  return (
    <div className="flex justify-center items-center">
      {hasReward ? (
        <div className="tooltip" data-tip={erc20.symbol}>
          <Image
            src={logoReward || `/images/STK.svg`}
            width={0}
            height={0}
            alt="Reward"
            className="w-10 h-10 rounded-full bg-gray-700"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={`/images/NFT.svg`}
              width={0}
              height={0}
              alt="Reward"
              className="w-10 h-10 rounded-full bg-gray-700"
            />
          </div>
          <div className="-ml-4">
            <Image
              src={`/images/STK.svg`}
              width={0}
              height={0}
              alt="Reward"
              className="w-10 h-10 rounded-full bg-gray-700"
            />
          </div>
          <div className="-ml-4">
            <Image
              src={`/images/RWD.svg`}
              width={0}
              height={0}
              alt="Reward"
              className="w-10 h-10 rounded-full bg-gray-700"
            />
          </div>
        </div>
      )}
      <div className="lg:flex flex-col gap-2 ml-2 hidden">
        <div className="text-l">{RWD}</div>
      </div>
    </div>
  );
};

function formatNumber(
  number: bigint | number | undefined = 0,
  decimals: bigint | number | undefined = 0
): string {
  const bigNum = (BigInt(number) * 1_000n) / 10n ** BigInt(decimals);
  const floatNum = parseFloat((parseInt(bigNum.toString()) / 1_000).toString());
  if (floatNum > 10_000 && floatNum < 1_000_000) {
    return (floatNum / 10_000).toFixed(0) + "K";
  } else if (floatNum >= 1_000_000) {
    return (floatNum / 1_000_000).toFixed(0) + "M";
  } else {
    return floatNum.toString();
  }
}

function Card({ pool, chain }: { pool: IPoolExtendedDetails; chain?: number }) {
  const { [pool.id]: metadata } = useMetadata([pool]);

  const totalStakedERC20 = formatNumber(
    pool?.totalStakedERC20,
    pool?.stakeERC20?.decimals
  );

  const totalStakedERC721 = formatNumber(pool?.totalStakedERC721, 0n);

  const totalRewards = pool?.totalRewards ? pool?.totalRewards.toString() : "0";

  const erc20 = useMemo(() => pool?.stakeERC20, [pool]);
  const erc721 = useMemo(() => pool?.stakeERC721, [pool]);

  const hasERC20 = useMemo(() => erc20?.tokenAddress !== ZERO, [erc20]);
  const hasERC721 = useMemo(() => erc721?.tokenAddress !== ZERO, [erc721]);

  return (
    <div className="bg-neutral-900 rounded-2xl p-2 hover:bg-slate-950">
      <div>
        <div className="grid grid-rows-2 gap-2 relative">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="h-24 w-24 mask mask-hexagon-2 bg-neutral-500"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
            <Image
              src={metadata?.image ?? "/images/token.jpg"}
              width={0}
              height={0}
              alt={metadata?.name ?? ""}
              className="h-20 w-20 mask mask-hexagon-2"
              priority={true}
            />
          </div>
          <div className="w-full h-full rounded-xl p-2 pb-10 text-center relative">
            <span
              className="absolute inset-0 opacity-5 rounded-xl pointer-events-none"
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${metadata?.banner_image})`,
              }}
            ></span>
            <div className="text-white text-xl z-20">
              <Link
                href={`/pool?id=${pool.id}${chain ? `&chain=${chain}` : ``}`}
                className="link decoration-dotted underline-offset-4"
              >
                {metadata?.name}
              </Link>
            </div>
          </div>
          <div className="bg-neutral-600 rounded-2xl p-2">
            <div className="grid grid-cols-2 gap-20">
              <div className="">
                <div>
                  <div className="text-center mb-1">Stake</div>
                  <Stake
                    erc20={pool.stakeERC20}
                    erc721={pool.stakeERC721}
                    metadata={metadata}
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <div className="text-center mb-1">Reward</div>
                  <Reward erc20={pool.rewardToken} metadata={metadata} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="w-full h-full">
            <div className="grid grid-cols-11 gap-2 items-center content-center justify-center">
              {hasERC20 && (
                <div
                  className={`${hasERC721 ? `col-span-4` : `col-span-8`} text-center w-full bg-base-300 rounded-2xl p-2`}
                >
                  <div className="text-gray-400">Token Staked</div>
                  <div>
                    {totalStakedERC20} {pool?.stakeERC20?.symbol}
                  </div>
                </div>
              )}
              {hasERC721 && (
                <div
                  className={`${hasERC20 ? `col-span-4` : `col-span-8`} text-center w-full bg-base-300 rounded-2xl p-2`}
                >
                  <div className="text-gray-400">NFT Staked</div>
                  <div>
                    {totalStakedERC721} {pool?.stakeERC721?.symbol}
                  </div>
                </div>
              )}
              <div className="col-span-3 w-full text-center bg-base-300 rounded-2xl p-2">
                <div className="text-gray-400">Rewards</div>
                <div>{totalRewards}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
