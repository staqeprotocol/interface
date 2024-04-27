"use client";

import GradientWrapper from "@/src/components/GradientWrapper";
import LayoutEffect from "@/src/components/LayoutEffect";

import Link from "next/link";

const Hero = () => (
  <section>
    <div className="custom-screen py-28">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          <GradientWrapper wrapperclassname="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
            <div className="space-y-5 max-w-3xl mx-auto text-center">
              <div className="text-5xl font-extrabold ...">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-violet-200">
                  Staqe Protocol<br></br>
                  Stake ✹ Reward ✹ Claim
                </h1>
              </div>
              <p className="max-w-xl mx-auto text-gray-300">
                Fully decentralized non-custodial staking protocol for creating
                pools, ERC20/NFT staking and claiming rewards.
              </p>
              <div className="flex justify-center font-medium text-sm">
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                  <Link
                    href="/dashboard"
                    className="block py-2 px-4 text-white hover:text-gray-100 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/launch"
                    className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                  >
                    Launch Pool
                  </Link>
                </div>
              </div>
            </div>
          </GradientWrapper>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
