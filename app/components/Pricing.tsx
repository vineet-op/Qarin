"use client";

import RollButton from "@/components/ui/AnimatedButton";
import React, { useState } from "react";
import { Check, CircleDollarSign } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 10.99,
    description: "Our plan is designed for teams ready to scale.",
    features: [
      "Up to 10 users",
      "5 Tasks & Projects",
      "Task and project tracking",
      "Basic Task Board & Calendar View",
      "Real-Time Notifications",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 19.99,
    description: "Our plan is designed for teams ready to scale.",
    features: [
      "Up to 20 users",
      "20 Tasks & Projects",
      "Task and project tracking",
      "Basic Task Board & Calendar View",
      "Real-Time Notifications",
    ],
    popular: true,
  },
  {
    name: "Professional",
    monthlyPrice: 49.99,
    description: "Our plan is designed for teams ready to scale.",
    features: [
      "Unlimited users",
      "Unlimited Tasks & Projects",
      "Task and project tracking",
      "Basic Task Board & Calendar View",
      "Real-Time Notifications",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section
      className="mx-4 w-auto rounded-lg px-4 py-12 md:px-2 md:py-16 lg:mx-6 lg:px-10 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, var(--token-feba9233-ee7b-4bb1-94cc-f6d4001e7b9c, #35f) 0%, var(--token-9c0f6d3a-77a4-4864-b64d-ce1ef8294b64, #8599ff) 100%)",
      }}
    >
      <div className="mx-auto flex w-full flex-col items-center">
        <div className="mb-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-1.5">
          <CircleDollarSign className="h-4 w-4 text-[#0B0C2B]" />
          <span className="font-inter text-xs font-medium text-[#0B0C2B]">
            Pricing
          </span>
        </div>

        <h2 className="mb-8 text-center font-sans text-[32px] font-medium tracking-tighter md:text-[34px] text-white md:mb-10">
          Simple plans. Smarter growth.
        </h2>

        <motion.div
          layout
          className="relative mb-4 inline-flex rounded-2xl border border-white/30 bg-white p-1.5 shadow-sm md:mb-12 lg:mb-10"
        >
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`relative z-10 rounded-xl px-5 py-3 font-inter text-[14px] font-medium transition-colors md:text-[16px] ${
              billingCycle === "monthly" ? "text-white" : "text-[#0B0C2B]"
            }`}
          >
            {billingCycle === "monthly" && (
              <motion.div
                layoutId="pricing-billing-tab"
                className="absolute inset-0 rounded-xl bg-[#3E5BFF] shadow-sm"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10">Pay Monthly</span>
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`relative z-10 rounded-xl px-5 py-3 font-inter text-[14px] font-medium transition-colors md:text-[16px] ${
              billingCycle === "yearly" ? "text-white" : "text-[#0B0C2B]"
            }`}
          >
            {billingCycle === "yearly" && (
              <motion.div
                layoutId="pricing-billing-tab"
                className="absolute inset-0 rounded-xl bg-[#3E5BFF] shadow-sm"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10">Pay Yearly (-5%)</span>
          </button>
        </motion.div>

        <div className="flex w-full flex-col gap-3 md:flex-row md:flex-wrap lg:justify-center lg:flex-wrap xl:flex-nowrap">
          {plans.map((plan) => {
            const price =
              billingCycle === "yearly"
                ? (plan.monthlyPrice * 12 * 0.8) / 12
                : plan.monthlyPrice;

            const isPopular = Boolean(plan.popular);

            return (
              <motion.article
                key={plan.name}
                layout
                transition={{
                  layout: { type: "spring", stiffness: 350, damping: 35 },
                }}
                className={`relative flex min-h-[485px] flex-1 flex-col rounded-[24px] border p-6 md:max-w-[calc(50%-12px)] md:flex-auto lg:max-w-[400px] ${
                  isPopular
                    ? "border-white/10 bg-[#17181D] text-white"
                    : "border-[#E4E7EC] bg-white text-[#0B0C2B]"
                }`}
              >
                {isPopular && (
                  <span className="absolute right-4 top-4 rounded-sm bg-[#6D7CFF] px-3 py-1 font-inter text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-4 font-sans text-[18px] font-semibold">
                  {plan.name}
                </div>

                <div className="mb-4 flex min-h-[40px] items-end gap-1 overflow-hidden md:min-h-[44px]">
                  <span className="font-sans text-[32px] font-semibold leading-none tabular-nums">
                    {/* <AnimatePresence mode="popLayout" initial={false}> */}
                    <motion.span
                      key={`${plan.name}-${billingCycle}-${price.toFixed(2)}`}
                      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block"
                    >
                      ${price.toFixed(2)}
                    </motion.span>
                    {/* </AnimatePresence> */}
                  </span>
                  <motion.span
                    layout
                    className={`font-inter text-[16px] ${
                      isPopular ? "text-white/70" : "text-[#667085]"
                    }`}
                  >
                    {/* <AnimatePresence mode="popLayout" initial={false}> */}
                    <motion.span
                      key={billingCycle}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 4 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                    >
                      /billed {billingCycle}
                    </motion.span>
                    {/* </AnimatePresence> */}
                  </motion.span>
                </div>

                <p
                  className={`mb-9 font-inter text-[14px] leading-6 ${
                    isPopular ? "text-white/75" : "text-[#667085]"
                  }`}
                >
                  {plan.description}
                </p>

                <RollButton
                  type="button"
                  label="Select Plan"
                  background={isPopular ? "#3E5BFF" : "#16163C"}
                  color="#ffffff"
                  padding="18px 18px"
                  borderRadius="12px"
                  border="none"
                  labelClassName="font-inter text-[16px] font-medium"
                  className="rounded-xl transition-transform hover:scale-[1.01]"
                />

                <div className="mt-9 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isPopular
                            ? "rounded-sm bg-neutral-800 p-1 text-white"
                            : "rounded-sm bg-neutral-100 p-1 text-[#0B0C2B]"
                        }`}
                      />
                      <span
                        className={`font-inter text-[16px] leading-6 ${
                          isPopular ? "text-white/90" : "text-[#344054]"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
