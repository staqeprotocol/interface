import { useEffect, useState } from "react";
import { getAddress } from 'viem';

import { IMetadata, IMetadataMap, IPools } from "@/src/interfaces";

import { getMetadata } from "@/src/metadata";
import mtdt from "../../public/metadata.json";
import { GATEWAY_URL } from "../constants";

export function useMetadata(pools: IPools): IMetadataMap {
  const [metadata, setMetadata] = useState<IMetadataMap>({});

  useEffect(() => {
    if (!pools || pools.length === 0) return;

    const fetchMetadata = async () => {
      const metadataPromises = pools.map(pool => getMetadata(pool.tokenURI));
      const metadataResults = await Promise.all(metadataPromises);

      const metadataObject: IMetadataMap = {};
      pools.forEach((pool, index) => {
        if (pool.id === "0") {
          const metadata = mtdt as IMetadata;
          metadata.image = /^ipfs/.test(metadata.image)
            ? `${GATEWAY_URL}${metadata.image.replace(/ipfs:\/\//g, "")}`
            : metadata.image;
          metadata.banner_image = /^ipfs/.test(metadata.banner_image ?? "")
            ? `${GATEWAY_URL}${(metadata.banner_image ?? "").replace(/ipfs:\/\//g, "")}`
            : metadata.banner_image;

          if (metadata.tokens && metadata.tokens.length) {
            metadata.tokens.forEach(token => {
              if (token.address && token.logoURI) {
                if (!metadata.logoURIs) {
                  metadata.logoURIs = {}
                }
                metadata.logoURIs[getAddress(token.address)] = `${GATEWAY_URL}${(token.logoURI ?? "").replace(/ipfs:\/\//g, "")}`;
              }
            })
          }

          metadataObject[pool.id] = mtdt as IMetadata;
        } {
          if (metadataResults && metadataResults[index] !== undefined) {
            metadataObject[pool.id] = metadataResults[index] as IMetadata;
          }
        }
      });

      setMetadata(metadataObject);
    };

    fetchMetadata();
  }, [JSON.stringify(pools, (_, v) => typeof v === 'bigint' ? v.toString() : v)
  ]);

  return metadata;
}
