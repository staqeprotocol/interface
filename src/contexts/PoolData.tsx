import { IPoolData } from "@/src/interfaces";
import { createContext } from "react";

const PoolData = createContext<IPoolData>({
  id: "",
  chain: undefined,
  pool: undefined,
  pools: undefined,
  refetch: () => {},
});

export default PoolData;
