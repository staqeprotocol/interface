import { IPoolData } from "@/src/interfaces";
import { createContext } from "react";

const PoolData = createContext<IPoolData>({
  id: "",
  pool: undefined,
  pools: undefined,
  refetch: () => {},
});

export default PoolData;
