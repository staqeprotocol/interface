"use client";

import { Suspense } from "react";

import { usePools } from "@/src/hooks/usePools";
import PoolCard from "@/src/components/UI/PoolCard";
import Pagination from "@/src/components/UI/Pagination";

interface IPoolCards {
  total: number;
  page: number;
  size: number;
  user: `0x${string}`;
}

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

const PoolCards = ({ total, page, size, user }: IPoolCards) => {
  const rawPools = usePools(total, page, size, user);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {rawPools &&
          rawPools.map((rawPool) => {
            return (
              <div key={rawPool.id} className="w-1/2 h-40 min-w-60">
                <div className="rounded-box px-2 m-2 border-slate-200/5 border-2 h-full">
                  <Suspense fallback={<Card />}>
                    {/* <PoolCard rawPool={rawPool} /> */}
                  </Suspense>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-20">
        {rawPools && <Pagination total={total} page={page} size={size} />}
      </div>
    </div>
  );
};

export default PoolCards;
