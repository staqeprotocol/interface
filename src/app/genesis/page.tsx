"use client";

import { Suspense, createContext } from "react";
import { useAccount } from "wagmi";

import { IPoolData } from "@/src/interfaces";
import { ZERO_ADDRESS } from "@/src/constants";

import { useSearchParams } from "next/navigation";
import { usePool } from "@/src/hooks/usePools";

import { Hero } from "@/src/components/UI/Pool/Hero";
import { Chart } from "@/src/components/UI/Pool/Chart";
import { Interaction } from "@/src/components/UI/Pool/Interaction";
import { Details } from "@/src/components/UI/Pool/Details";
import { Actions } from "@/src/components/UI/Pool/Actions";

export const PoolData = createContext<IPoolData | undefined>(undefined);

function App() {
  const { address: accountAddress = ZERO_ADDRESS } = useAccount();
  const { get } = useSearchParams();

  const id = (get("id") || "0") as string;
  const account = (get("account") || accountAddress) as `0x${string}`;

  const { pool, pools } = usePool(id, account);

  console.log("pool", pool);

  return (
    <PoolData.Provider value={{ id, pool, pools }}>
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
