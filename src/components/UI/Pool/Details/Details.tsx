import { ZERO_ADDRESS } from "@/src/constants";
import { staqeProtocolAddress } from "@/src/generated";
import { useMetadata } from "@/src/hooks/useMetadata";
import { usePoolData } from "@/src/hooks/usePools";
import { useTimestamp } from "@/src/hooks/useTimestamps";
import { Manage } from "@toqen/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import {
  PiCoinsDuotone,
  PiHandCoinsDuotone,
  PiImagesSquareDuotone,
  PiInfoDuotone,
  PiNotebookDuotone,
  PiRocketLaunchDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import { SiOpensea } from "react-icons/si";
import { Address } from "viem";
import { useAccount, useChainId, useChains } from "wagmi";

export const Details = () => {
  const { id, pool, pools } = usePoolData();

  const { [id]: metadata } = useMetadata(pools);

  const launchBlock = useTimestamp(pool?.launchBlock);

  const chainId = useChainId();
  const chains = useChains();

  const { address: accountAddress = ZERO_ADDRESS } = useAccount();

  const isOwner = useMemo(
    () => pool && pool.owner === accountAddress,
    [pool, accountAddress]
  );

  const getName = (chainId: number) => {
    switch (chainId) {
      case 80002:
        return "amoy";
      case 43113:
        return "avalanche-fuji";
      case 97:
        return "bsc-testnet";
      default:
        return "";
    }
  };

  const getExplorer = useCallback(
    (address?: Address) => {
      const c = chains.filter((chain) => chain.id === chainId);
      console.log(c);
      return c && c.length && address
        ? c[0].blockExplorers?.default.url + "/address/" + address
        : "";
    },
    [chainId]
  );

  const [manage, setManage] = useState(<></>);

  return (
    <div className="relative flex flex-row mt-2 h-full w-full">
      <div className="flex flex-row gap-2 w-full h-full">
        <div className="flex flex-col w-3/5">
          <h1 className="text-4xl text-neutral-700">Details</h1>
          <div className="grid grid-cols-2 grid-rows-3 grid-flow-row gap-2 h-60">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <PiInfoDuotone className="absolute inset-y-0 right-0 top-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              <div className="flex flex-col justify-center items-left w-full h-full rounded-2xl bg-base-200 p-2 overflow-hidden border-8 border-base-200">
                <div className="text-xs text-neutral-600 mb-2">Pool NFT:</div>
                <div className="flex">
                  <div className="flex text-sm items-center">
                    Pool #{pool?.id}{" "}
                    {getName(chainId) ? (
                      <a
                        href={`https://testnets.opensea.io/assets/${getName(chainId)}/${staqeProtocolAddress[chainId]}/${pool?.id}`}
                        className="link underline-offset-4 decoration-dotted ml-2"
                        target="_blank"
                      >
                        <SiOpensea />
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="text-xs text-neutral-500 ml-auto">
                    <a
                      href={`${pool?.tokenURI}`}
                      target="_blank"
                      className="link underline-offset-4 decoration-dotted"
                    >
                      IPFS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <PiCoinsDuotone className="absolute inset-y-0 right-0 top-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              <div className="flex flex-col justify-center items-left w-full h-full rounded-2xl bg-base-200 p-2 overflow-hidden border-8 border-base-200">
                <div className="text-xs text-neutral-600 flex flex-row justify-between p-0 m-0">
                  <span>Stake Token:</span>
                  {pool?.stakeERC20.tokenAddress !== ZERO_ADDRESS &&
                    isOwner && (
                      <button
                        className="btn btn-xs btn-success"
                        onClick={() => {
                          const modal: any = document.getElementById("modal");
                          setManage(
                            <Manage
                              address={pool?.stakeERC20?.tokenAddress}
                              dark
                            />
                          );
                          modal?.showModal();
                        }}
                      >
                        manage
                      </button>
                    )}
                </div>
                {pool?.stakeERC20.tokenAddress === ZERO_ADDRESS ? (
                  <div className="text-xs text-neutral-500">NONE</div>
                ) : (
                  <div className="flex text-sm items-center justify-center">
                    <Image
                      src={
                        metadata?.logoURIs && pool?.stakeERC20?.tokenAddress
                          ? metadata?.logoURIs[
                              pool?.stakeERC20?.tokenAddress
                            ] ?? `/images/token.svg`
                          : `/images/token.svg`
                      }
                      alt="Token Logo"
                      width={0}
                      height={0}
                      className="w-4 h-4 rounded-full"
                      priority={false}
                    />
                    <div className="mx-2">{pool?.stakeERC20.symbol}</div>
                    <div className="text-xs text-neutral-500 ml-auto overflow-hidden">
                      <a
                        href={getExplorer(pool?.stakeERC20.tokenAddress)}
                        target="_blank"
                        className="link underline-offset-4 decoration-dotted"
                      >
                        {pool?.stakeERC20.tokenAddress}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <PiRocketLaunchDuotone className="absolute inset-y-0 right-0 top-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              <div className="flex flex-col justify-center items-left w-full h-full rounded-2xl bg-base-200 p-2 overflow-hidden border-8 border-base-200">
                <div className="text-xs text-neutral-600 mb-2">Launched:</div>
                <div className="flex text-sm">
                  <div>{launchBlock}</div>
                  <div className="text-xs text-neutral-500 ml-auto">
                    Block #{pool?.launchBlock.toString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <PiImagesSquareDuotone className="absolute inset-y-0 right-0 top-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              <div className="flex flex-col justify-center items-left w-full h-full rounded-2xl bg-base-200 p-2 overflow-hidden border-8 border-base-200">
                <div className="text-xs text-neutral-600 flex flex-row justify-between p-0 m-0">
                  <span>Stake NFT:</span>
                  {pool?.stakeERC721.tokenAddress !== ZERO_ADDRESS &&
                    isOwner && (
                      <button
                        className="btn btn-xs btn-success"
                        onClick={() => {
                          const modal: any = document.getElementById("modal");
                          setManage(
                            <Manage
                              address={pool?.stakeERC721?.tokenAddress}
                              dark
                            />
                          );
                          modal?.showModal();
                        }}
                      >
                        manage
                      </button>
                    )}
                </div>
                {pool?.stakeERC721.tokenAddress === ZERO_ADDRESS ? (
                  <div className="text-xs text-neutral-500">NONE</div>
                ) : (
                  <div className="flex text-sm items-center justify-center">
                    <Image
                      src={
                        metadata?.logoURIs && pool?.stakeERC721?.tokenAddress
                          ? metadata?.logoURIs[
                              pool?.stakeERC721?.tokenAddress
                            ] ?? `/images/token.svg`
                          : `/images/token.svg`
                      }
                      alt="Token Logo"
                      width={0}
                      height={0}
                      className="w-4 h-4 rounded-full"
                      priority={false}
                    />
                    <div className="mx-2">{pool?.stakeERC721.symbol}</div>
                    <div className="text-xs text-neutral-500 ml-auto overflow-hidden">
                      <a
                        href={getExplorer(pool?.stakeERC721.tokenAddress)}
                        target="_blank"
                        className="link underline-offset-4 decoration-dotted"
                      >
                        {pool?.stakeERC721.tokenAddress}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <PiUserDuotone className="absolute inset-y-0 right-0 top-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              <div className="flex flex-col justify-center items-left w-full h-full rounded-2xl bg-base-200 p-2 overflow-hidden border-8 border-base-200">
                <div className="text-xs text-neutral-600 mb-2">Owner:</div>
                <div className="text-sm">
                  {pool?.owner && pool?.owner === ZERO_ADDRESS ? (
                    <>NONE</>
                  ) : (
                    <Link
                      href={`/dashboard?account=${pool?.owner}`}
                      target="_blank"
                      className="link underline-offset-4 decoration-dotted"
                    >
                      {pool?.owner && pool?.owner === ZERO_ADDRESS
                        ? `NONE`
                        : pool?.owner}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl">
              <PiHandCoinsDuotone className="absolute inset-y-0 right-0 top-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              <div className="flex flex-col justify-center items-left w-full h-full rounded-2xl bg-base-200 p-2 overflow-hidden border-8 border-base-200">
                <div className="text-xs text-neutral-600 mb-2">
                  Reward Token:
                </div>
                {pool?.rewardToken.tokenAddress === ZERO_ADDRESS ? (
                  <div className="flex text-sm">
                    <Image
                      src="/images/STK.svg"
                      alt="Token Logo"
                      width={0}
                      height={0}
                      className="w-4 h-4 rounded-full"
                      priority={false}
                    />
                    <Image
                      src="/images/RWD.svg"
                      alt="Token Logo"
                      width={0}
                      height={0}
                      className="w-4 h-4 rounded-full -ml-2"
                      priority={false}
                    />
                    <Image
                      src="/images/NFT.svg"
                      alt="Token Logo"
                      width={0}
                      height={0}
                      className="w-4 h-4 rounded-full -ml-2"
                      priority={false}
                    />
                    <div className="text-neutral-500 ml-4">Any Tokens</div>
                  </div>
                ) : (
                  <div className="flex text-sm items-center justify-center">
                    <Image
                      src={
                        metadata?.logoURIs && pool?.rewardToken?.tokenAddress
                          ? metadata?.logoURIs[
                              pool?.rewardToken?.tokenAddress
                            ] ?? `/images/token.svg`
                          : `/images/token.svg`
                      }
                      alt="Token Logo"
                      width={0}
                      height={0}
                      className="w-4 h-4 rounded-full"
                      priority={false}
                    />
                    <div className="mx-2">{pool?.rewardToken.symbol}</div>
                    <div className="text-xs text-neutral-500 ml-auto overflow-hidden">
                      <a
                        href={getExplorer(pool?.rewardToken.tokenAddress)}
                        target="_blank"
                        className="link underline-offset-4 decoration-dotted"
                      >
                        {pool?.rewardToken.tokenAddress}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <h1 className="text-4xl text-neutral-700">Description</h1>
          <div className="overflow-x-auto w-full h-60 rounded-2xl bg-base-200 p-4 text-justify">
            <div className="relative w-full h-full">
              <PiNotebookDuotone className="absolute right-0 bottom-0 text-8xl opacity-5 pointer-events-none scale-x-[-1]" />
              {metadata?.description}
            </div>
          </div>
        </div>
      </div>
      <dialog id="modal" className="modal w-full">
        <div className="modal-box m-0 p-0">
          <div className="relative">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-0">
                ✕
              </button>
            </form>
            <h3 className="text-lg font-extrabold ml-4 my-4">Manage</h3>
            <hr className="border-0 border-slate-200 dark:border-slate-700" />
          </div>
          <div className="flex justify-center items-center m-4 p-4 mt-1 pt-1">
            {manage}
          </div>
        </div>
      </dialog>
    </div>
  );
};
