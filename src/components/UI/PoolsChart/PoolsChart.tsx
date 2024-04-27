"use client";

import {
  IPoolRemoteDetails,
  IRewardRemoteDetails,
  IStakeDetails,
} from "@/src/interfaces";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

interface IPoolChart {
  pool: IPoolRemoteDetails | undefined;
  rewards: IRewardRemoteDetails[] | undefined;
  stakes: IStakeDetails[] | undefined;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const rewardBlock = payload[0].payload.rewardBlock;
    const rewardAmount = payload[0].payload.rewardAmount;
    const symbol = payload[0].payload.rewardToken.symbol;
    return (
      <div className="text-slate-300">
        <p>{`Block #${rewardBlock} : ${rewardAmount} ${symbol}`}</p>
      </div>
    );
  }

  return null;
};

const PoolsChart = ({ pool, rewards, stakes }: IPoolChart) => {
  const data = (rewards ?? []).map((reward) => {
    return {
      rewardToken: reward.rewardToken,
      rewardBlock: Number(reward.rewardBlock.toString()),
      rewardAmount: (
        reward.rewardAmount /
        10n ** reward.rewardToken.decimals
      ).toString(),
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip
          contentStyle={{
            margin: 0,
            padding: 0,
            border: 0,
            background: "none",
          }}
          itemStyle={{
            margin: 0,
            padding: 0,
            border: 0,
            background: "none",
          }}
          labelStyle={{
            margin: 0,
            padding: 0,
            border: 0,
            background: "none",
          }}
          cursorStyle={{
            margin: 0,
            padding: 0,
            border: 0,
            background: "none",
          }}
          wrapperStyle={{
            margin: 0,
            padding: 0,
            border: 0,
            background: "none",
          }}
          content={<CustomTooltip />}
          cursor={false}
        />
        <Area
          type="monotone"
          dataKey="rewardAmount"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={{ stroke: "#8884d8", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PoolsChart;
