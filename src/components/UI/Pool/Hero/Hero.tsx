import { TOKEN_LOGO, ZERO_ADDRESS as ZERO } from "@/src/constants";
import { useMetadata } from "@/src/hooks/useMetadata";
import { usePoolData } from "@/src/hooks/usePools";
import { useTimestamp } from "@/src/hooks/useTimestamps";
import Image from "next/image";
import { useMemo } from "react";

export const Hero = () => {
  const { id, pool, pools } = usePoolData();

  const { [id]: metadata } = useMetadata(pools);
  const launchBlock = useTimestamp(pool?.launchBlock);

  console.log("metadata", metadata);

  const hasERC20 = useMemo(
    () => (pool?.stakeERC20.tokenAddress ?? ZERO) !== ZERO,
    [pool]
  );
  const hasERC721 = useMemo(
    () => (pool?.stakeERC721.tokenAddress ?? ZERO) !== ZERO,
    [pool]
  );

  const erc20 = useMemo(() => pool?.stakeERC20, [pool]);
  const erc721 = useMemo(() => pool?.stakeERC721, [pool]);

  const logoERC20 = useMemo(() => {
    if (!metadata || !erc20) return TOKEN_LOGO;
    return metadata?.logoURIs?.[erc20.tokenAddress] ?? `/images/token.svg`;
  }, [metadata?.logoURIs]);
  const logoERC721 = useMemo(() => {
    if (!metadata || !erc721) return TOKEN_LOGO;
    return metadata?.logoURIs?.[erc721.tokenAddress] ?? `/images/token.svg`;
  }, [metadata?.logoURIs]);

  const total = useMemo(() => {
    const result = {
      erc20: "0",
      erc721: "0",
      max: "",
    };

    if (pool?.totalMax) {
      if (hasERC20) {
        const scaledAmount = pool.totalMax * BigInt(1_000);
        const rawAmount = scaledAmount / 10n ** pool.stakeERC20.decimals;
        const amount = Number(rawAmount) / 1_000;
        if (amount > 1_000) {
          result.max = amount.toLocaleString("en-US");
        } else {
          result.max = amount
            .toFixed(3)
            .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
        }
      } else if (hasERC721) {
        result.max = pool?.totalMax.toString();
      }
    }

    if (pool?.totalStakedERC20) {
      const scaledAmount = pool.totalStakedERC20 * BigInt(1_000);
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

    if (pool?.totalStakedERC721) {
      result.erc721 = pool?.totalStakedERC721.toString();
    }

    return result;
  }, [pool]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center overflow-hidden rounded-2xl w-full h-3/5 relative bg-slate-200/10">
        {metadata?.banner_image ? (
          <span
            className="absolute bg-slate-200/10 inset-0 w-full h-full -z-10"
            style={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${metadata?.banner_image})`,
            }}
          ></span>
        ) : (
          <span
            className="absolute bg-slate-200/10 inset-0 w-full h-full -z-10"
            style={
              metadata?.background_color
                ? { backgroundColor: `#${metadata?.background_color}` }
                : {}
            }
          ></span>
        )}
      </div>
      <div className="flex flex-row items-center p-4 mx-6 mb-2 -mt-16 overflow-hidden break-words rounded-2xl backdrop-blur-2xl backdrop-saturate-200 shadow-blur border-0 bg-slate-200/10 w-auto h-1/5">
        <div className="w-auto">
          <div className="bg-slate-200/10 h-24 w-24 mask mask-hexagon-2">
            {metadata && (
              <Image
                src={metadata?.image}
                width={0}
                height={0}
                alt="Pool Image"
                className="h-24 w-24 mask mask-hexagon-2"
                priority={false}
              />
            )}
          </div>
        </div>
        <div className="w-auto px-3 my-auto">
          <div className="">
            <div className="text-3xl text-white">{metadata?.name}</div>
            <div className="mt-1">{pool && `Launched ${launchBlock}`}</div>
          </div>
        </div>
        <div className="flex gap-2 w-auto my-auto ml-auto">
          <div className="flex flex-col break-words border-0 p-2 text-white">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex">
                {hasERC20 && (
                  <Image
                    src={logoERC20 ?? ""}
                    width={0}
                    height={0}
                    alt={""}
                    className="h-14 w-14 rounded-full backdrop-blur-2xl backdrop-saturate-200 shadow-blur bg-slate-950/10 shadow-md"
                    priority={false}
                  />
                )}
                {hasERC721 && (
                  <Image
                    src={logoERC721 ?? ""}
                    width={0}
                    height={0}
                    alt={""}
                    className={`h-14 w-14 rounded-full backdrop-blur-2xl backdrop-saturate-200 shadow-blur bg-slate-950/10 shadow-md ${hasERC20 ? `-ml-7` : ``}`}
                    priority={false}
                  />
                )}
              </div>
              <div className="flex flex-col">
                {hasERC20 && (
                  <div className="text-2xl">
                    <span className="font-mono">{total.erc20}</span>
                    {total.max ? (
                      <>
                        {" / "}
                        <small className="text-xs text-neutral-200">
                          {total.max}
                        </small>
                      </>
                    ) : (
                      <>
                        {" "}
                        <small className="text-xs text-neutral-200">
                          tokens
                        </small>
                      </>
                    )}
                  </div>
                )}
                {hasERC721 && (
                  <div className="text-2xl">
                    <span className="font-mono">{total.erc721} </span>
                    <small className="text-xs text-neutral-200">NFTs</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
