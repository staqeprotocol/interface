"use client";

import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/logo.svg"
    alt="logo"
    {...props}
    width={0}
    height={0}
    className="w-14 h-auto"
    priority
  />
);
export default Brand;
