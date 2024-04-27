"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { IPoolExtendedDetails } from "@/src/interfaces";
import { useRemote } from "@/src/hooks/useRemote";
import { useRewards } from "@/src/hooks/useRewards";
import { useStakes } from "@/src/hooks/useStakes";

interface IPoolRaw {
  rawPool: IPoolExtendedDetails | undefined;
}

const PoolCard = ({ rawPool }: IPoolRaw) => {
  const pools = useMemo<IPoolExtendedDetails[] | undefined>(() => {
    return rawPool ? [rawPool] : undefined;
  }, [rawPool]);

  const [pool] = useRemote(pools);
  const { [pool?.id]: rewards = [] } = useRewards(pools);
  const { [pool?.id]: stakes = [] } = useStakes(pools);

  // return (
  //   pool && (
  //     <div className="flex flex-col w-full h-full gap-2">
  //       <div className="flex w-full h-1/5">
  //         <div className="h-full w-full text-center">{pool.metadata.name}</div>
  //       </div>
  //       <div className="flex w-full h-4/5">
  //         <div className="flex flex-col w-3/5 gap-2">
  //           <div className="flex flex-col w-full h-1/3 gap-2">
  //             <div className="h-full w-full">{pool.metadata.description}</div>
  //           </div>
  //           <div className="flex flex-col w-full h-1/3 gap-2">
  //             <div className="h-1/2 w-full">
  //               Total Staked ERC20: {pool.totalStakedERC20}
  //             </div>
  //             <div className="h-1/2 w-full">
  //               Total Staked ERC721: {pool.totalStakedERC721}
  //             </div>
  //           </div>
  //           <div className="flex flex-col w-full h-1/3 gap-2">
  //             <div className="h-1/2 w-full">
  //               Your Stakes: {stakes?.length ?? 0}
  //             </div>
  //             <div className="h-1/2 w-full">
  //               Total Rewards: {rewards?.length ?? 0}
  //             </div>
  //           </div>
  //         </div>
  //         <div className="flex flex-col w-2/5 gap-2">
  //           <div className="flex flex-row h-1/3">
  //             <div className="flex w-2/5">
  //               <div className="mask mask-hexagon-2 w-full h-full">
  //                 <Image
  //                   src={pool.metadata.image}
  //                   width={0}
  //                   height={0}
  //                   alt="Pool Image"
  //                   className="w-full h-full"
  //                 ></Image>
  //               </div>
  //             </div>
  //             <div className="flex flex-col w-3/5 gap-2">
  //               <div className="h-1/2">Launch Pool</div>
  //               <div className="h-1/2">
  //                 <span className="text-xs">
  //                   Block #{pool.launchBlock.toString()}
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex flex-row h-1/3">
  //             <div className="w-2/5">
  //               <div className="mask mask-squircle w-full h-full bg-yellow-500"></div>
  //             </div>
  //             <div className="flex flex-col w-3/5 gap-2">
  //               <div className="h-full">
  //                 <Link className="btn btn-sm" href={`/pool?id=${pool.id}`}>
  //                   Stake Now
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex flex-row h-1/3">
  //             <div className="w-2/5">
  //               <div className="mask mask-heart w-full h-full bg-slate-500"></div>
  //             </div>
  //             <div className="flex flex-col w-3/5 gap-2">
  //               <div className="h-1/2">
  //                 <div>Reward #1</div>
  //               </div>
  //               <div className="h-1/2">
  //                 <span className="text-xs">Coming soon</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // );
};

export default PoolCard;
