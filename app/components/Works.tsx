"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, easeIn, easeInOut, motion } from "motion/react";

const worksData = [
  {
    id: "analytics",
    title: "Advanced Analytics",
    description:
      "Transform every customer interaction into actionable insights that drive smarter, faster, and data-informed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-12 w-12"
        style={{ opacity: 1 }}
      >
        <path
          d="M 13 35 L 13 29 M 23 35 L 23 17 M 33 35 L 33 27"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
        />
        <path
          d="M 43 11 C 43 14.314 40.314 17 37 17 C 33.686 17 31 14.314 31 11 C 31 7.686 33.686 5 37 5 C 40.314 5 43 7.686 43 11 Z"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeMiterlimit="10"
        />
        <path
          d="M 42.991 22 C 42.991 22 43 22.679 43 24 C 43 32.957 43 37.435 40.218 40.218 C 37.435 43 32.957 43 24 43 C 15.043 43 10.565 43 7.782 40.218 C 5 37.435 5 32.957 5 24 C 5 15.043 5 10.565 7.782 7.783 C 10.565 5 15.043 5 24 5 L 26 5"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image:
      "https://framerusercontent.com/images/UD0XC7qnqhSMxobDNARqyJnmgTw.png?scale-down-to=1024&width=1494&height=1058",
  },
  {
    id: "marketing",
    title: "Marketing & Engagement",
    description:
      "Automate personalized campaigns, boost engagement, and build stronger customer relationships.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-12 w-12"
        style={{ opacity: 1 }}
      >
        <path
          d="M 9 35 L 9 27 C 9 25.343 10.343 24 12 24 L 18 24 L 18 18 C 18 16.343 19.343 15 21 15 L 27 15 L 27 9 C 27 7.343 28.343 6 30 6 L 36 6 C 37.657 6 39 7.343 39 9 L 39 39 C 39 40.657 37.657 42 36 42 L 30 42 C 28.343 42 27 40.657 27 39 L 27 33 L 21 33 C 19.343 33 18 31.657 18 30 L 18 24 L 12 24 C 10.343 24 9 22.657 9 21 L 9 35 Z"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image:
      "https://framerusercontent.com/images/lG9HLK9NY6VvvpkbY7QyOz5WuQ.png?scale-down-to=1024&width=2880&height=2048",
  },
  {
    id: "crm",
    title: "Integrated CRM",
    description:
      "Unify all customer data, streamline collaboration, and simplify workflows for a truly connected.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-12 w-12"
        style={{ opacity: 1 }}
      >
        <rect
          x="6"
          y="6"
          width="16"
          height="16"
          rx="2"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="26"
          y="6"
          width="16"
          height="16"
          rx="2"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="6"
          y="26"
          width="16"
          height="16"
          rx="2"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="26"
          y="26"
          width="16"
          height="16"
          rx="2"
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image:
      "https://framerusercontent.com/images/4h5pHIcHiGYIKKhUCdef1KMsc.png?scale-down-to=1024&width=2880&height=2048",
  },
];

const Works = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  const activeWork = worksData.find((work) => work.id === activeTab);

  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1296px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 lg:mb-16 lg:flex-row lg:items-end">
          <h2 className="max-w-[500px] font-sans text-[32px] font-medium leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-[40px] lg:text-[48px]">
            Designed for how sales teams actually work
          </h2>
          <p className="max-w-[420px] font-inter text-[16px] leading-relaxed text-[#6B6B6B]">
            Qarin simplifies complex sales workflows by combining visibility,
            automation, and collaboration—so teams stay aligned and focused on
            closing deals.
          </p>
        </div>

        {/* Desktop & Tablet Layout */}
        <div className="hidden lg:block overflow-hidden border border-[#E5E5E5] rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr]">
            {/* Left Side - Cards */}
            <div className="flex flex-col border-r border-r-[#E5E5E5]">
              {worksData.map((work, index) => {
                const isFirst = index === 0;
                const isLast = index === worksData.length - 1;
                const isActive = activeTab === work.id;
                return (
                  <button
                    key={work.id}
                    onClick={() => setActiveTab(work.id)}
                    className={`group relative flex flex-1 w-full items-start gap-0 text-left transition-all duration-300 overflow-hidden ${
                      isFirst ? "rounded-tl-2xl" : ""
                    } ${isLast ? "rounded-bl-2xl" : ""} ${
                      isActive ? "bg-[#FAFBFA]" : "bg-white"
                    }`}
                  >
                    {/* Animated Bottom Border */}
                    <motion.div
                      className="absolute bottom-0 left-0 z-10 h-[2px] w-full bg-[#3355FF]"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{
                        duration: 0.4,
                        ease: easeInOut,
                      }}
                      style={{ transformOrigin: "left" }}
                    />

                    {!isLast && (
                      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[#E5E5E5]" />
                    )}

                    {/* Icon Column with Right Border */}
                    <div
                      className={`flex shrink-0 items-center justify-center border-r border-r-[#E5E5E5] px-6 py-6 transition-colors duration-300 self-stretch ${
                        isActive ? "text-[#3355FF]" : "text-black"
                      }`}
                    >
                      {work.icon}
                    </div>

                    {/* Text Content Column */}
                    <div className="flex flex-1 flex-col px-6 py-6">
                      <h3 className="mb-2 font-sans text-[16px] font-medium leading-tight text-[#0A0A0A]">
                        {work.title}
                      </h3>
                      <p className="font-inter text-[14px] leading-relaxed text-[#6B6B6B]">
                        {work.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side - Image */}
            <div className="relative flex items-center justify-center rounded-tr-2xl rounded-br-2xl overflow-hidden  p-8">
              {activeWork && (
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-[#E5E5E5]"
                  style={{ aspectRatio: "1494 / 1058" }}
                >
                  <motion.div
                    key={activeTab}
                    className="relative h-full w-full"
                    initial={{ scale: 1.12, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      ease: easeInOut,
                    }}
                  >
                    <Image
                      src={activeWork.image}
                      alt={activeWork.title}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden overflow-hidden border border-[#E5E5E5] rounded-2xl">
          <div className="flex flex-col">
            {/* Cards Container */}
            <div className="flex flex-col">
              {worksData.map((work) => {
                const isActive = activeTab === work.id;
                return (
                  <button
                    key={work.id}
                    onClick={() => setActiveTab(work.id)}
                    className={`group relative flex w-full items-start gap-0 overflow-hidden border-b border-b-[#E5E5E5] text-left transition-all duration-300 ${
                      isActive ? "bg-[#FAFBFA]" : "bg-white"
                    }`}
                  >
                    {/* Animated Bottom Border */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-[#3355FF]"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ transformOrigin: "left" }}
                    />

                    {/* Icon Column with Right Border */}
                    <div
                      className={`flex shrink-0 items-center justify-center border-r border-r-[#E5E5E5] px-4 py-5 transition-colors duration-300 self-stretch ${
                        isActive ? "text-[#3355FF]" : "text-black"
                      }`}
                    >
                      {work.icon}
                    </div>

                    {/* Text Content Column */}
                    <div className="flex flex-1 flex-col px-4 py-5">
                      <h3 className="mb-2 font-sans text-[16px] font-medium leading-tight text-[#0A0A0A]">
                        {work.title}
                      </h3>
                      <p className="font-inter text-[14px] leading-relaxed text-[#6B6B6B]">
                        {work.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Image Container - Inside same border */}
            <div className="relative flex items-center justify-center overflow-hidden p-4 sm:p-8 bg-white">
              {activeWork && (
                <div
                  className="relative w-full overflow-hidden rounded-xl border border-[#E5E5E5]"
                  style={{ aspectRatio: "1494 / 1058" }}
                >
                  <motion.div
                    key={activeTab}
                    className="relative h-full w-full"
                    initial={{ scale: 1.12, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={activeWork.image}
                      alt={activeWork.title}
                      fill
                      sizes="(max-width: 1023px) 100vw, 48vw"
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
