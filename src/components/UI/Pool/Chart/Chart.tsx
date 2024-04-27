import {
  Bar,
  ComposedChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "@/src/components/UI/Pool/Chart/CustomTooltip";
import { usePoolData } from "@/src/hooks/usePools";
import { useRewards } from "@/src/hooks/useRewards";
import { LuBarChartBig } from "react-icons/lu";

const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const Chart = () => {
  const { id, pools } = usePoolData();
  const { [id]: rewards = [] } = useRewards(pools);

  return (
    <div className="rounded-2xl w-full h-full bg-base-200 pt-4 pr-4">
      {rewards?.length ? (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={rewards}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64e70c" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#64e70c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey={(data) => {
                const rewardBlock = (data?.rewardBlock ?? "").toString();

                return rewardBlock;
              }}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              domain={[
                "0",
                (dataMax: number) =>
                  dataMax && dataMax > 0 ? dataMax + Math.abs(dataMax / 10) : 0,
              ]}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey={(data) => {
                const rewardAmount = (
                  (data?.rewardAmount ?? 1n) /
                  10n ** (data?.rewardToken?.decimals ?? 0n)
                ).toString();

                return rewardAmount;
              }}
              fillOpacity={1}
              fill="url(#colorUv)"
              minPointSize={5}
              name={`Reward Amount`}
              stackId="a"
            >
              <LabelList dataKey="rewardToken.symbol" position="top" />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center content-center justify-center h-full w-full p-4 text-sm text-neutral-600">
          <div>
            <LuBarChartBig className="w-full text-center text-8xl mb-2" />
            <div>The pool has no rewards, add stake to get reward.</div>
          </div>
        </div>
      )}
    </div>
  );
};
