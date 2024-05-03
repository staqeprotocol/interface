"use client";

import Image from "next/image";
import { useAccount } from "wagmi";

import GradientWrapper from "@/src/components/GradientWrapper";
import { ZERO_ADDRESS } from "@/src/constants";
import { useDashboard } from "@/src/hooks/useDashboard";
import { useTimestamps } from "@/src/hooks/useTimestamps";
import { IToken } from "@/src/interfaces";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  PiCoinsDuotone,
  PiHandCoinsDuotone,
  PiStackDuotone,
  PiVaultDuotone,
} from "react-icons/pi";

type ITokenMap = { [address: string]: { total: bigint; token: IToken } };

const amnt = (
  amount: number | bigint | undefined = 0n,
  decimals: number | bigint | undefined = 0n
) => {
  const total =
    Number(((BigInt(amount) * 1_000n) / 10n ** BigInt(decimals)).toString()) /
    1_000;
  return total;
};

const AddFirstStake = () => (
  <div className="timeline-start md:text-end mb-10 w-full">
    <a
      href="/pools?size=4"
      className="link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white"
    >
      <div className="rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/20">
        Add First Stake
      </div>
    </a>
  </div>
);

const LaunchFirstPool = () => (
  <div className="timeline-end md:text-end mb-10 w-full">
    <a
      href="/launch"
      className="link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white"
    >
      <div className="rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/20">
        Launch First Pool
      </div>
    </a>
  </div>
);

function User() {
  const { address: accountAddress = ZERO_ADDRESS } = useAccount();

  const [account, setAccount] = useState<`0x${string}`>(accountAddress);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setAccount((queryParams.get("account") || accountAddress) as `0x${string}`);
  }, []);

  const { completed, pools, staked, launched } = useDashboard(account);

  const stakedTs = useMemo(() => {
    return {
      pools: staked.pools,
      rewards: Object.values(staked.rewards ?? {}).flat(),
      stakes: Object.values(staked.stakes ?? {}).flat(),
    };
  }, [staked]);

  const launchedTs = useMemo(() => {
    return {
      pools: launched.pools,
      rewards: Object.values(launched.rewards ?? {}).flat(),
      stakes: Object.values(launched.stakes ?? {}).flat(),
    };
  }, [launched]);

  const stakedDate = useTimestamps(stakedTs);
  const launchedDate = useTimestamps(launchedTs);

  const accountStakes = useMemo(() => {
    const stakes: ITokenMap = {};

    staked.pools &&
      staked.pools.forEach((pool) => {
        staked.stakes &&
          staked.stakes[pool.id] &&
          staked.stakes[pool.id].forEach((stake) => {
            if (stake.amountERC20 > 0n) {
              const tokenAddress = pool.stakeERC20.tokenAddress;
              if (!stakes[tokenAddress]) {
                stakes[tokenAddress] = {
                  total: 0n,
                  token: {
                    ...pool.stakeERC20,
                    logo: staked?.metadata?.[pool.id]?.logoURIs?.[tokenAddress],
                  },
                };
              }
              stakes[tokenAddress].total += stake.amountERC20;
            }
            if (stake.idERC721 > 0n) {
              const tokenAddress = pool.stakeERC721.tokenAddress;
              if (!stakes[tokenAddress]) {
                stakes[tokenAddress] = {
                  total: 0n,
                  token: {
                    ...pool.stakeERC721,
                    logo: staked?.metadata?.[pool.id]?.logoURIs?.[tokenAddress],
                  },
                };
              }
              stakes[tokenAddress].total += stake.idERC721;
            }
          });
      });

    return Object.values(stakes);
  }, [staked]);

  const accountRewards = useMemo(() => {
    const rewards: ITokenMap = {};

    staked.pools &&
      staked.pools.forEach((pool) => {
        staked.rewards &&
          staked.rewards[pool.id] &&
          staked.rewards[pool.id].forEach((reward) => {
            const tokenAddress = reward.rewardToken.tokenAddress;
            if (!rewards[tokenAddress]) {
              rewards[tokenAddress] = {
                total: 0n,
                token: {
                  ...reward.rewardToken,
                  logo: staked?.metadata?.[pool.id]?.logoURIs?.[tokenAddress],
                },
              };
            }
            rewards[tokenAddress].total += reward.stakerRewardAmount;
          });
      });

    return Object.values(rewards);
  }, [staked]);

  const accountAddedRewards = useMemo(() => {
    const pools: ITokenMap = {};

    launched.pools &&
      launched.pools.forEach((pool) => {
        launched.rewards &&
          launched.rewards[pool.id] &&
          launched.rewards[pool.id].forEach((reward) => {
            const tokenAddress = reward.rewardToken.tokenAddress;
            if (!pools[tokenAddress]) {
              pools[tokenAddress] = {
                total: 0n,
                token: {
                  ...reward.rewardToken,
                  logo: launched?.metadata?.[pool.id]?.logoURIs?.[tokenAddress],
                },
              };
            }
            pools[tokenAddress].total += reward.rewardAmount;
          });
      });

    return Object.values(pools);
  }, [launched]);

  const timeline = useMemo(() => {
    if (
      !staked?.pools ||
      !staked?.stakes ||
      !staked?.rewards ||
      !staked?.metadata ||
      !launched?.pools ||
      !launched?.stakes ||
      !launched?.rewards ||
      !launched?.metadata
    )
      return;

    let combined: any[] = [];

    launched.pools.forEach((pool) => {
      combined.push({
        pool,
        rewards: launched.rewards[pool.id],
        metadata: launched.metadata[pool.id],
        block: pool.launchBlock,
        type: "launchPool" as const,
      });

      if (!launched.rewards[pool.id]) return;

      launched.rewards[pool.id].forEach((reward) => {
        combined.push({
          pool,
          reward,
          metadata: launched?.metadata?.[pool.id],
          block: reward.rewardBlock,
          type: "addReward" as const,
        });
      });
    });

    staked.pools.forEach((pool) => {
      if (!staked.stakes[pool.id]) return;

      staked.stakes[pool.id].forEach((stake) => {
        combined.push({
          pool,
          stake,
          metadata: staked.metadata[pool.id],
          block: stake.stakeBlock,
          type: "stake" as const,
        });

        if (stake.unstakeBlock > 0n) {
          combined.push({
            pool,
            stake,
            metadata: staked.metadata[pool.id],
            block: stake.unstakeBlock,
            type: "unstake" as const,
          });
        }
      });
    });

    staked.pools.forEach((pool) => {
      if (!staked.rewards[pool.id]) return;

      staked.rewards[pool.id].forEach((reward) => {
        if (reward.stakerRewardAmount > 0n) {
          combined.push({
            pool,
            reward,
            metadata: staked?.metadata?.[pool.id],
            block: reward.rewardBlock,
            type: "reward" as const,
          });
        }
      });
    });

    return combined.sort((a, b) =>
      a.block > b.block ? 1 : Number(a.pool.id) < Number(b.pool.id) ? 1 : -1
    );
  }, [staked, launched]);

  if (account === ZERO_ADDRESS) {
    return (
      <section className="custom-screen text-center m-10">Loading ...</section>
    );
  }

  return (
    <section className="custom-screen">
      <GradientWrapper wrapperclassname="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
        <div className="w-full">
          <div className="bg-slate-200/10 h-24 w-24 mask mask-hexagon-2 mx-auto">
            <Image
              src={`/staqe.svg`}
              width={0}
              height={0}
              alt="Pool Image"
              className="h-24 w-24 mask mask-hexagon-2"
            />
          </div>
        </div>
        <div className="divider">
          <h1 className="text-l link font-mono">{account}</h1>
        </div>
        {!completed && pools.total > 0n && (
          <div className="absolute inset-0 w-full h-full z-20">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 w-full h-full opacity-80 bg-black"></div>
              <div className="w-full h-20 py-20 mx-auto text-center">
                <div
                  className="radial-progress text-white"
                  style={
                    {
                      "--value": (
                        (pools.processed * 100n) /
                        pools.total
                      ).toString(),
                    } as any
                  }
                  role="progressbar"
                >
                  {((pools.processed * 100n) / pools.total).toString()}%
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-2 mt-2">
          <div>
            <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-2">
              <div className="p-1 pb-2 bg-stone-900/40 rounded-xl text-center">
                <div className="w-full">
                  <PiCoinsDuotone className="text-7xl w-full" />
                </div>
                <div className="text-2xl pb-2">Your Stakes</div>
                <div>
                  {accountStakes?.length ? (
                    <div className="flex justify-center items-center">
                      {accountStakes.map((tkn, i) => (
                        <div
                          key={tkn.token.tokenAddress}
                          className={`tooltip ${i > 0 && "-ml-4"}`}
                          data-tip={`${amnt(tkn.total, tkn.token.decimals)} ${tkn.token.symbol}`}
                        >
                          <Image
                            src={`${tkn.token.logo ? tkn.token.logo : `/images/token.svg`}`}
                            width={0}
                            height={0}
                            alt="Reward"
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full text-gray-400 h-10">NONE</div>
                  )}
                </div>
              </div>
              <div className="p-1 pb-2 bg-stone-900/40 rounded-xl text-center">
                <div className="w-full">
                  <PiHandCoinsDuotone className="text-7xl w-full" />
                </div>
                <div className="text-2xl pb-2">Your Rewards</div>
                <div>
                  {accountRewards?.length ? (
                    <div className="flex justify-center items-center">
                      {accountRewards.map((tkn, i) => (
                        <div
                          key={tkn.token.tokenAddress}
                          className={`tooltip ${i > 0 && "-ml-4"}`}
                          data-tip={`${amnt(tkn.total, tkn.token.decimals)} ${tkn.token.symbol}`}
                        >
                          <Image
                            src={`${tkn.token.logo ? tkn.token.logo : `/images/token.svg`}`}
                            width={0}
                            height={0}
                            alt="Reward"
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full text-gray-400 h-10">NONE</div>
                  )}
                </div>
              </div>
            </div>
            <div className="divider">
              <h2 className="text-xl">Stakes</h2>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-2">
              <div className="p-1 pb-2 bg-stone-900/40 rounded-xl text-center">
                <div className="w-full">
                  <PiVaultDuotone className="text-7xl w-full" />
                </div>
                <div className="text-2xl pb-2">Launched Pools</div>
                {launched?.pools?.length && launched?.metadata ? (
                  <div>
                    <div className="flex justify-center items-center">
                      {launched.pools.map(
                        (pool, i) =>
                          launched.metadata[pool.id] && (
                            <div
                              key={`${pool.id}-${i}`}
                              className={`tooltip ${i > 0 && "-ml-4"}`}
                              data-tip={launched?.metadata?.[pool.id].name}
                            >
                              <Image
                                src={launched?.metadata?.[pool.id].image ?? ""}
                                width={0}
                                height={0}
                                alt={launched?.metadata?.[pool.id].name}
                                className="w-10 h-10 rounded-full"
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="w-full text-gray-400 h-10">NONE</div>
                )}
              </div>
              <div className="p-1 pb-2 bg-stone-900/40 rounded-xl text-center">
                <div className="w-full">
                  <PiStackDuotone className="text-7xl w-full" />
                </div>
                <div className="text-2xl pb-2">Added Rewards</div>
                <div>
                  {accountAddedRewards?.length ? (
                    <div className="flex justify-center items-center">
                      {accountAddedRewards.map((tkn, i) => (
                        <div
                          key={tkn.token.tokenAddress}
                          className={`tooltip ${i > 0 && "-ml-4"}`}
                          data-tip={`${amnt(tkn.total, tkn.token.decimals)} ${tkn.token.symbol}`}
                        >
                          <Image
                            src={`${tkn.token.logo ? tkn.token.logo : `/images/token.svg`}`}
                            width={0}
                            height={0}
                            alt="Reward"
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full text-gray-400 h-10">NONE</div>
                  )}
                </div>
              </div>
            </div>
            <div className="divider">
              <h2 className="text-xl">Launches</h2>
            </div>
          </div>
        </div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {timeline?.length ? (
            timeline.map((data: any, i: number) => {
              if (!data?.pool || !data?.metadata) return;
              return (
                <li key={data.type + "-" + data.pool.id + "-" + i}>
                  {i !== 0 && <hr />}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {(data.type === "stake" ||
                    data.type === "unstake" ||
                    data.type === "reward") && (
                    <>
                      <div className="timeline-start md:text-end mb-10 w-full">
                        <div className="rounded-2xl bg-neutral-800/40 mx-auto py-10 text-center w-full">
                          {data.type === "reward" && (
                            <>
                              Your Reward:{" "}
                              <Link
                                href={`/pool?id=${data.pool.id}`}
                                className="link underline underline-offset-4 decoration-dotted"
                              >
                                {amnt(
                                  data.reward.rewardAmount,
                                  data.reward.rewardToken.decimals
                                )}{" "}
                                {data.reward.rewardToken.symbol}
                              </Link>
                            </>
                          )}
                          {(data.type === "stake" ||
                            data.type === "unstake") && (
                            <>
                              {data.type === "stake"
                                ? `Your Stake: `
                                : `Your Unstake: `}
                              <Link
                                href={`/pool?id=${data.pool.id}`}
                                className="link underline underline-offset-4 decoration-dotted"
                              >
                                {data.stake.amountERC20 > 0n && (
                                  <>
                                    {amnt(
                                      data.stake.amountERC20,
                                      data.pool.stakeERC20.decimals
                                    )}{" "}
                                    {data.pool.stakeERC20.symbol}
                                  </>
                                )}{" "}
                                {data.stake.idERC721 > 0n && (
                                  <>
                                    {data.stake.amountERC20 > 0n && "| "}#
                                    {data.stake.idERC721.toString()}{" "}
                                    {data.pool.stakeERC721.symbol}
                                  </>
                                )}
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="timeline-end mb-10">
                        {stakedDate && stakedDate[data.block.toString()]}
                        <div className="text-xs text-gray-500">
                          Block #{data.block.toString()}
                        </div>
                      </div>
                    </>
                  )}
                  {(data.type === "launchPool" ||
                    data.type === "addReward") && (
                    <>
                      <div className="timeline-start mb-10">
                        {launchedDate && launchedDate[data.block.toString()]}
                        <div className="text-xs text-gray-500">
                          Block #{data.block.toString()}
                        </div>
                      </div>
                      <div className="timeline-end md:text-end mb-10 w-full">
                        <div className="rounded-2xl bg-neutral-800/40 mx-auto py-10 text-center w-full">
                          {data.type === "launchPool" && (
                            <>
                              Launched Pool:{" "}
                              <Link
                                href={`/pool?id=${data.pool.id}`}
                                className="link underline underline-offset-4 decoration-dotted"
                              >
                                {data.metadata.name}
                              </Link>
                            </>
                          )}
                          {data.type === "addReward" && (
                            <>
                              Added Reward:{" "}
                              <Link
                                href={`/pool?id=${data.pool.id}`}
                                className="link underline underline-offset-4 decoration-dotted"
                              >
                                {amnt(
                                  data.reward.rewardAmount,
                                  data.reward.rewardToken.decimals
                                )}{" "}
                                {data.reward.rewardToken.symbol}
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {i !== timeline.length - 1 && <hr />}
                </li>
              );
            })
          ) : (
            <li>
              <AddFirstStake />
              <LaunchFirstPool />
            </li>
          )}
        </ul>
      </GradientWrapper>
    </section>
  );
}

export default User;
