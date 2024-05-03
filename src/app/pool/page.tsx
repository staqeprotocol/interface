"use client";

import { Suspense, createContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { ZERO_ADDRESS } from "@/src/constants";
import { IPoolData } from "@/src/interfaces";

import { usePool } from "@/src/hooks/usePools";

import { Actions } from "@/src/components/UI/Pool/Actions";
import { Chart } from "@/src/components/UI/Pool/Chart";
import { Details } from "@/src/components/UI/Pool/Details";
import { Hero } from "@/src/components/UI/Pool/Hero";
import { Interaction } from "@/src/components/UI/Pool/Interaction";

export const PoolData = createContext<IPoolData | undefined>(undefined);

function App() {
  const { address: accountAddress = ZERO_ADDRESS } = useAccount();

  const [id, setId] = useState<string>("0");
  const [account, setAccount] = useState<`0x${string}`>(accountAddress);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setId(queryParams.get("id") || "0");
    setAccount((queryParams.get("account") || accountAddress) as `0x${string}`);
  }, [accountAddress]);

  const { pool, pools, refetch } = usePool(id, account);

  return (
    <PoolData.Provider value={{ id, pool, pools, refetch }}>
      <section className="custom-screen">
        <div className="flex flex-col gap-2 w-full h-full">
          <div className="w-full h-[40rem]">
            <Suspense fallback={`Loading Hero ...`}>
              <Hero />
            </Suspense>
          </div>
          <div className="flex flex-row gap-2 w-full h-80 -mt-48">
            <div className="w-3/5 h-full">
              <Suspense fallback={`Loading Chart ...`}>
                <Chart />
              </Suspense>
            </div>
            <div className="w-2/5 h-full">
              <Suspense fallback={`Loading Interaction ...`}>
                <Interaction />
              </Suspense>
            </div>
          </div>
          <div className="w-full h-full">
            <Suspense fallback={`Loading Details ...`}>
              <Details />
            </Suspense>
          </div>
          <div className="w-full h-full">
            <Suspense fallback={`Loading Actions ...`}>
              <Actions />
            </Suspense>
          </div>
        </div>
      </section>
    </PoolData.Provider>
  );
}

export default App;
