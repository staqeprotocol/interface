"use client";

import Image from "next/image";

import SectionWrapper from "@/src/components/SectionWrapper";
import LayoutEffect from "@/src/components/LayoutEffect";

import Feature1 from "@/public/images/Feature-1.png";
import Feature2 from "@/public/images/Feature-2.png";
import Feature3 from "@/public/images/Feature-3.png";
import Feature4 from "@/public/images/Feature-4.png";
import Feature5 from "@/public/images/Feature-5.png";

const VisualFeatures = () => {
  const features = [
    {
      title: "Universal ERC20 Token Staking",
      desc: "Expand your portfolio's reach by leveraging our platform's capability to stake an array of ERC20 tokens. This feature offers you a strategic avenue to diversify your investment and harness the potential of various digital assets, enhancing your portfolio's resilience and growth prospects.",
      img: Feature1,
    },
    {
      title: "Unlock Value with NFT Staking",
      desc: "Capitalize on the burgeoning NFT market by staking your ERC721 tokens. Our platform provides a unique opportunity to derive additional value from your NFT holdings, transforming them from mere collectibles to active assets that contribute to your investment goals.",
      img: Feature2,
    },
    {
      title: "Equitable Reward Distribution",
      desc: "Benefit from a transparent and fair reward system that proportionally allocates earnings based on your stake. This ensures that your investment yields returns in alignment with your contribution, reinforcing the principle of equity in your asset growth.",
      img: Feature3,
    },
    {
      title: "Flexible Unstaking Options",
      desc: "Maintain liquidity and adapt to market dynamics with our no-lock-in staking option. The flexibility to unstake at any moment empowers you with the agility to make timely investment decisions, responding effectively to market opportunities or shifts.",
      img: Feature4,
    },
    {
      title: "Continuous Reward Mechanism",
      desc: "Leverage the advantage of a non-capped reward system, allowing your investment to continually accrue earnings. This feature is designed to optimize your stake's earning potential, offering a sustained and scalable reward structure that grows with your investment.",
      img: Feature5,
    },
  ];
  return (
    <SectionWrapper>
      <div className="custom-screen text-gray-300">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
            Futures
          </h2>
          <p className="mt-3">
            With Mailgo's powerful features, you can easily create and send
            beautiful emails that will engage your customers and drive more
            sales.
          </p>
        </div>
        {features.map((item, idx) => (
          <section
            key={idx}
            className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 mt-12"
          >
            <div
              className={`relative z-10 gap-10 items-center lg:flex ${idx % 2 && "sm:flex-row-reverse"}`}
            >
              <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                  trueState: `opacity-1 ${idx % 2 ? "" : ""}`,
                  falseState: `opacity-0 ${idx % 2 ? "lg:-translate-x-12" : "lg:translate-x-12"}`,
                }}
              >
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-white-800 font-semibold md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mt-3">
                    {item.desc}
                  </p>
                  <a
                    className="mt-5 px-4 py-2 text-white-600 font-medium bg-slate-700 rounded-full inline-flex items-center"
                    href="#"
                  >
                    Try it out
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-1 duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </LayoutEffect>
              <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                  trueState: `opacity-1 ${idx % 2 ? "" : ""}`,
                  falseState: `opacity-0 ${idx % 2 ? "lg:translate-x-12" : "lg:-translate-x-12"}`,
                }}
              >
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                  <Image
                    src={item.img}
                    className="w-full ml-auto rounded-2xl"
                    alt={item.title}
                  />
                </div>
              </LayoutEffect>
            </div>
          </section>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VisualFeatures;
