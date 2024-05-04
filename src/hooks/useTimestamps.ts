import {
  IPoolExtendedDetails,
  IRewardDetails,
  IStake,
  IStakeDetails,
} from "@/src/interfaces";
import { config } from "@/src/wagmi";
import { getBlock } from "@wagmi/core";
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { ITimestamps } from "../interfaces/ITimestamps";

export function useDates(
  blockNumbers: Array<bigint | undefined>
): Array<string | undefined> {
  const [timestamps, setTimestamps] = useState<Array<string | undefined>>([]);

  useEffect(() => {
    // Filter out invalid block numbers and create a fetch promise for each valid block number
    const fetchPromises = blockNumbers
      .filter((blockNumber) => blockNumber !== undefined && blockNumber > 0n)
      .map(async (blockNumber) => {
        try {
          const block = await getBlock(config, { blockNumber });
          return block?.timestamp
            ? format(new Date(Number(block.timestamp * 1000n)), "PP")
            : undefined;
        } catch (error) {
          console.error("Error fetching block timestamp:", error);
          return undefined;
        }
      });

    // Use Promise.all to wait for all fetch promises to resolve
    Promise.all(fetchPromises).then((fetchedTimestamps) => {
      setTimestamps(fetchedTimestamps);
    });
  }, [blockNumbers]); // Dependency array now depends on blockNumbers

  return timestamps;
}

export function useTimestamp(
  blockNumber: bigint | undefined
): string | undefined {
  const [timestamp, setTimestamp] = useState<string | undefined>();

  useEffect(() => {
    if (blockNumber === undefined || blockNumber <= 0n) return;

    const fetchTimestamp = async () => {
      try {
        const block = await getBlock(config, { blockNumber });
        if (block?.timestamp) {
          setTimestamp(format(new Date(Number(block.timestamp * 1000n)), "PP"));
        }
      } catch (error) {
        console.error("Error fetching block timestamp:", error);
        setTimestamp(undefined);
      }
    };

    fetchTimestamp();
  }, [blockNumber]);

  return timestamp;
}

export function useTimestamps({
  pools,
  rewards,
  stakes,
}: {
  pools?: IPoolExtendedDetails[] | undefined;
  rewards?: IRewardDetails[] | undefined;
  stakes?: IStake[] | IStakeDetails[] | undefined;
}): ITimestamps | undefined {
  const [timestamps, setTimestamps] = useState<ITimestamps | undefined>();

  const blockNumbers = useMemo(() => {
    const extractBlocks = (items: any[], keys: string[]): Set<bigint> => {
      const blocks = new Set<bigint>();
      items?.forEach((item) => {
        keys.forEach((key) => {
          const value: bigint = item[key];
          if (value && value > 0n) {
            blocks.add(value);
          }
        });
      });
      return blocks;
    };

    const poolBlocks = extractBlocks(pools || [], ["launchBlock"]);
    const rewardBlocks = extractBlocks(rewards || [], ["rewardBlock"]);
    const stakeBlocks = extractBlocks(stakes || [], [
      "stakeBlock",
      "unstakeBlock",
    ]);

    const allBlocks = new Set([...poolBlocks, ...rewardBlocks, ...stakeBlocks]);
    return Array.from(allBlocks);
  }, [pools?.length, rewards?.length, stakes?.length]);

  useEffect(() => {
    if (!blockNumbers.length) return;

    const fetchTimestamps = async () => {
      try {
        const timestampPromises = blockNumbers.map((blockNumber) =>
          getBlock(config, { blockNumber }).catch(() => null)
        );
        const timestampResults: ({ timestamp: bigint } | null)[] =
          await Promise.all(timestampPromises);

        const newTimestamps = timestampResults.reduce<ITimestamps>(
          (acc, result, index) => {
            if (result) {
              const blockNumberStr = blockNumbers[index].toString();
              acc[blockNumberStr] = format(
                new Date(Number(result.timestamp * 1000n)),
                "PP"
              );
            }
            return acc;
          },
          {}
        );

        setTimestamps(newTimestamps);
      } catch (error) {
        console.error("Error fetching timestamps:", error);
      }
    };

    fetchTimestamps();
  }, [blockNumbers]);

  return timestamps;
}
