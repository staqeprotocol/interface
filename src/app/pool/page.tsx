"use client";

import { useEffect, useMemo, useState } from "react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

import { ZERO_ADDRESS } from "@/src/constants";

import { usePool } from "@/src/hooks/usePools";

import { Actions } from "@/src/components/UI/Pool/Actions";
import { Chart } from "@/src/components/UI/Pool/Chart";
import { Details } from "@/src/components/UI/Pool/Details";
import { Hero } from "@/src/components/UI/Pool/Hero";
import { Interaction } from "@/src/components/UI/Pool/Interaction";
import PoolData from "@/src/contexts/PoolData";

function PoolPage() {
  const { address: accountAddress = ZERO_ADDRESS, chainId } = useAccount();
  const { switchChain }: any = useSwitchChain();
  const currentId = useChainId();

  const [id, setId] = useState<string>("0");
  const [chain, setChain] = useState<number>(0);
  const [account, setAccount] = useState<`0x${string}`>(accountAddress);

  useEffect(() => {
    const queryParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : { get: () => null };
    setId(queryParams.get("id") || "0");
    setChain(parseInt(queryParams.get("chain") || "0"));
    setAccount((queryParams.get("account") || accountAddress) as `0x${string}`);
  }, [accountAddress]);

  const { pool, pools, refetch } = usePool(id, chain, account);

  const needSwitch = currentId && chainId && currentId !== chainId;

  useMemo(() => {
    if (!chainId || !currentId || !chain) return;
    switchChain({ chainId: chain });
  }, [currentId, chainId, switchChain, chain]);

  return (
    <PoolData.Provider value={{ id, chain, pool, pools, refetch }}>
      <section className="custom-screen">
        <div className="flex flex-col gap-2 w-full h-full">
          <div className="w-full h-[40rem]">
            <Hero />
          </div>
          <div className="flex flex-row gap-2 w-full h-80 -mt-48">
            <div className="w-3/5 h-full">
              <Chart />
            </div>
            <div className="w-2/5 h-full">
              <Interaction />
            </div>
          </div>
          <div className="w-full h-full">
            <Details />
          </div>
          <div className="w-full h-full">
            <Actions />
          </div>
        </div>
      </section>
    </PoolData.Provider>
  );
}

export default PoolPage;
