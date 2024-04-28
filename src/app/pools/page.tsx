"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useAccount, useSwitchChain } from "wagmi";

import GradientWrapper from "@/src/components/GradientWrapper";
import Scroll from "@/src/components/Icons/Scroll";
import Card from "@/src/components/UI/Pools/Card";
import { ZERO_ADDRESS } from "@/src/constants";
import { usePools } from "@/src/hooks/usePools";
import { BinanceSmartChain, Ethereum, Polygon } from "cryptocons";
import Link from "next/link";
import { GiFoundryBucket } from "react-icons/gi";

const App = () => {
  const account = useAccount();
  const { chains, switchChain } = useSwitchChain();

  const getIcon = (chainId: number) => {
    switch (chainId) {
      case 1:
        return <Ethereum size={30} />;
      case 56:
        return <BinanceSmartChain size={30} />;
      case 137:
        return <Polygon size={30} />;
      case 534351:
        return (
          <div className="w-30 pt-1">
            <Scroll />
          </div>
        );
      default:
        return <GiFoundryBucket size={30} className="text-white" />;
    }
  };

  const { get } = useSearchParams();
  const page = Number(get("page") || "1") as number;
  const size = Number(get("size") || "2") as number;
  const user = (get("user") || ZERO_ADDRESS) as `0x${string}`;

  const { pools, hasPrev, hasNext } = usePools(page, size, user);

  return (
    <section className="custom-screen">
      <GradientWrapper wrapperclassname="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
        <div role="tablist" className="tabs tabs-boxed opacity-80">
          {chains.map((chain) => {
            const isActive =
              account.isConnected && account.chainId === chain.id;
            return (
              <a
                key={chain.id}
                role="tab"
                className={`tab z-10 ${isActive ? `tab-active bg-black/70 !important` : `tooltip hover:scale-110`}`}
                data-tip={chain.name}
                onClick={() => switchChain({ chainId: chain.id })}
              >
                <div className="flex w-full justify-center">
                  <div>{getIcon(chain.id)}</div>
                  {isActive && (
                    <div className="text-xl text-white ml-5">{chain.name}</div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-2">
          <div className="grid grid-cols-2 gap-2">
            <Suspense fallback={`Loadng Page #${page} ...`}>
              {pools &&
                pools.map((pool, i) => <Card pool={pool} key={pool.id} />)}
            </Suspense>
          </div>
        </div>
        {pools && pools.length > 0 ? (
          <div className="w-full mt-4 text-center">
            <div className="join">
              <Link
                href={`/pools?page=${page - 1}&size=${size}`}
                className={
                  hasPrev
                    ? "join-item btn"
                    : "join-item btn btn-disabled pointer-events-none"
                }
                aria-disabled={!hasPrev}
                tabIndex={hasPrev ? undefined : -1}
              >
                «
              </Link>
              <button className="join-item btn pointer-events-none">
                Page {page}
              </button>
              <Link
                href={`/pools?page=${page + 1}&size=${size}`}
                className={
                  hasNext
                    ? "join-item btn"
                    : "join-item btn btn-disabled pointer-events-none"
                }
                aria-disabled={!hasNext}
                tabIndex={hasNext ? undefined : -1}
              >
                »
              </Link>
            </div>
          </div>
        ) : (
          <div className="timeline-end md:text-end mb-10 w-full">
            <a
              href="/launch"
              className="link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white"
            >
              <div className="rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/40">
                Launch First Pool
              </div>
            </a>
          </div>
        )}
      </GradientWrapper>
    </section>
  );
};

export default App;
