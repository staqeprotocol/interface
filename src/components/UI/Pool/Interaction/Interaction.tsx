import { ZERO_ADDRESS } from "@/src/constants";
import { useMemo } from "react";
import { useAccount } from "wagmi";

import { Reward } from "@/src/components/UI/Pool/Interaction/Reward";
import { Stake } from "@/src/components/UI/Pool/Interaction/Stake";
import { usePoolData } from "@/src/hooks/usePools";

export const Interaction = () => {
  const { address: accountAddress = ZERO_ADDRESS } = useAccount();
  const { pool } = usePoolData();

  const isOwner = useMemo(
    () => pool && pool.owner === accountAddress,
    [pool, accountAddress]
  );

  if (isOwner === true) {
    return <Reward />;
  } else if (isOwner === false) {
    return <Stake />;
  } else {
    return (
      <div className="flex flex-col justify-evenly gap-2 rounded-2xl bg-base-200 p-4 h-full">
        <div className="flex justify-center">
          <div className="skeleton w-1/2 h-10"></div>
        </div>
        <div className="flex-1 content-center">
          <div className="skeleton w-full h-20"></div>
        </div>
        <div className="flex-none content-center">
          <div className="skeleton w-full h-12"></div>
        </div>
      </div>
    );
  }
};
