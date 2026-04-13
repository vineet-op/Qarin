"use client";

import React, { useMemo, useState } from "react";
import { BarChart3, DollarSign, ListChecks } from "lucide-react";

const growthTabs = [
  {
    id: "cost",
    label: "Cost Breakdown",
    icon: DollarSign,
    image:
      "https://framerusercontent.com/images/q888bVcrHy2niF2QnBLluc5v8c.png?width=1714&height=1220",
  },
  {
    id: "reports",
    label: "Reports & Insights",
    icon: BarChart3,
    image:
      "https://framerusercontent.com/images/hIQPcbg6zFScLGQZX2xBdzPtyI.png?scale-down-to=4096&width=4320&height=3072",
  },
  {
    id: "tasks",
    label: "Task Management",
    icon: ListChecks,
    image:
      "https://framerusercontent.com/images/TRxLmsYOQ0FXIqzs7U7AUxptcA.png?width=4320&height=3072",
  },
] as const;

const growthBackgroundImage =
  "https://framerusercontent.com/images/ZxOyyJAFShwS72ziT9LIPScyiA.png?scale-down-to=2048&width=2592&height=1104";

const Growth = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof growthTabs)[number]["id"]>("cost");

  const activeImage = useMemo(
    () =>
      growthTabs.find((tab) => tab.id === activeTab)?.image ??
      growthTabs[0].image,
    [activeTab],
  );

  return (
    <section className="mx-auto mt-24 w-full max-w-[1296px] px-4 font-inter">
      <div className="mx-auto max-w-[760px] text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--brand-color)" }}
          />
          <span
            className="text-[12px] font-medium"
            style={{ color: "var(--heading-color)" }}
          >
            Growth Engine by Qarin
          </span>
        </div>

        <h2
          className="font-sans text-[36px] font-medium leading-[1.1] tracking-tighter sm:text-[48px]"
          style={{ color: "var(--heading-color)" }}
        >
          AI-Powered growth stack
        </h2>

        <p
          className="mx-auto mt-4 max-w-[620px] text-[16px] leading-relaxed"
          style={{ color: "var(--subheading-color)" }}
        >
          Qarin brings intelligence, automation, and customer management
          together giving your team everything to close deals faster and grow
          smarter.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-[28px] px-[10px] pb-[10px] pt-6 sm:pt-7">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="brand-marquee-track flex h-full w-max">
            {[0, 1].map((item) => (
              <div
                key={item}
                className="h-full w-[900px] shrink-0 sm:w-[1200px] lg:w-[1296px]"
                style={{
                  backgroundImage: `url("${growthBackgroundImage}")`,
                  backgroundPosition: "top right",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: "auto 100%",
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[58%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.92) 62%, #ffffff 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3 px-3 sm:flex-row sm:flex-wrap sm:justify-center lg:pt-14">
          {growthTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="flex w-fit items-center gap-2 rounded-lg border-2 border-white px-[16px] py-[6px] text-[16px] font-inter font-medium transition-colors cursor-pointer"
                style={{
                  background: isActive
                    ? "rgba(255, 255, 255, 0.98)"
                    : "transparent",
                  color: isActive
                    ? "var(--heading-color)"
                    : "rgba(255, 255, 255, 0.92)",
                  boxShadow: isActive
                    ? "0px 6px 18px rgba(11, 12, 43, 0.12)"
                    : "0px 4px 14px rgba(11, 12, 43, 0.08)",
                }}
              >
                <Icon className="h-[19px] w-[19px] shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          className="relative z-10 mx-auto mt-8 w-full max-w-[880px] rounded-[24px] p-[10px] shadow-[0px_24px_60px_rgba(51,85,255,0.12)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, var(--token-2dec387a-3ef3-4470-89cb-9d86ed53611b, rgb(216, 216, 223)) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <img
            src={activeImage}
            alt="Growth dashboard preview"
            className="h-auto w-full rounded-[18px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Growth;
