"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, lazy } from "react";
import { ZERO_ADDRESS } from "@/src/constants";
import { useReadStaqeProtocolGetTotalPools } from "@/src/generated";
// import PoolCards from "@/src/components/UI/PoolCards";
const PoolCards = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => import("@/src/components/UI/PoolCards")
  )
);

function Card() {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <div className="flex w-full h-1/5">
        <div className="skeleton h-full w-full"></div>
      </div>
      <div className="flex w-full h-4/5">
        <div className="flex flex-col w-3/5 gap-2">
          <div className="flex flex-col w-full h-1/3 gap-2">
            <div className="skeleton h-full w-full"></div>
          </div>
          <div className="flex flex-col w-full h-1/3 gap-2">
            <div className="skeleton h-1/2 w-full"></div>
            <div className="skeleton h-1/2 w-full"></div>
          </div>
          <div className="flex flex-col w-full h-1/3 gap-2">
            <div className="skeleton h-1/2 w-full"></div>
            <div className="skeleton h-1/2 w-full"></div>
          </div>
        </div>
        <div className="flex flex-col w-2/5 gap-2">
          <div className="flex flex-row h-1/3">
            <div className="flex w-2/5">
              <div className="skeleton mask mask-hexagon-2 w-full h-full"></div>
            </div>
            <div className="flex flex-col w-3/5 gap-2">
              <div className="skeleton h-1/2"></div>
              <div className="skeleton h-1/2"></div>
            </div>
          </div>
          <div className="flex flex-row h-1/3">
            <div className="w-2/5">
              <div className="skeleton mask mask-squircle w-full h-full"></div>
            </div>
            <div className="flex flex-col w-3/5 gap-2">
              <div className="skeleton h-1/2"></div>
              <div className="skeleton h-1/2"></div>
            </div>
          </div>
          <div className="flex flex-row h-1/3">
            <div className="w-2/5">
              <div className="skeleton mask mask-heart w-full h-full"></div>
            </div>
            <div className="flex flex-col w-3/5 gap-2">
              <div className="skeleton h-1/2"></div>
              <div className="skeleton h-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        <div className="w-1/2 h-40 min-w-60">
          <div className="rounded-box px-2 m-2 border-slate-200/5 border-2 h-full">
            <Card></Card>
          </div>
        </div>
        <div className="w-1/2 h-40 min-w-60">
          <div className="rounded-box px-2 m-2 border-slate-200/5 border-2 h-full">
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const Pools = () => {
  const { get } = useSearchParams();
  const { data: totalPools } = useReadStaqeProtocolGetTotalPools();

  const total = Number(totalPools || "0");
  const page = Number(get("page") || "1");
  const size = Number(get("size") || "2");
  const staker = (get("staker") || ZERO_ADDRESS) as `0x${string}`;

  return (
    <section className="custom-screen">
      <Suspense fallback={<div>Loadng</div>}>
        <PoolCards total={total} page={page} size={size} user={staker} />
      </Suspense>
    </section>
  );
};

export default Pools;
