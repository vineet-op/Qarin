"use client";

import React, { useState } from "react";
import { Check, CircleDollarSign } from "lucide-react";

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

        <div className="lg:mb-10 mb-4 inline-flex rounded-2xl border border-white/30 bg-white p-1.5 shadow-sm md:mb-12">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-xl px-5 py-3 font-inter text-[14px] font-medium transition-colors md:text-[16px] ${
              billingCycle === "monthly"
                ? "bg-[#3E5BFF] text-white"
                : "bg-transparent text-[#0B0C2B]"
            }`}
          >
            Pay Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-xl px-5 py-3 font-inter text-[14px] font-medium transition-colors md:text-[16px] ${
              billingCycle === "yearly"
                ? "bg-[#3E5BFF] text-white"
                : "bg-transparent text-[#0B0C2B]"
            }`}
          >
            Pay Yearly (-5%)
          </button>
        </div>

        <div className="flex w-full flex-col gap-3 md:flex-row md:flex-wrap lg:justify-center lg:flex-wrap xl:flex-nowrap">
          {plans.map((plan) => {
            const price =
              billingCycle === "yearly"
                ? (plan.monthlyPrice * 12 * 0.8) / 12
                : plan.monthlyPrice;

            const isPopular = Boolean(plan.popular);

            return (
              <article
                key={plan.name}
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

                <div className="mb-4 flex items-end gap-1">
                  <span className="font-sans text-[32px] font-semibold leading-none">
                    ${price.toFixed(2)}
                  </span>
                  <span
                    className={`font-inter text-[16px] ${
                      isPopular ? "text-white/70" : "text-[#667085]"
                    }`}
                  >
                    /billed {billingCycle}
                  </span>
                </div>

                <p
                  className={`mb-9 font-inter text-[14px] leading-6 ${
                    isPopular ? "text-white/75" : "text-[#667085]"
                  }`}
                >
                  {plan.description}
                </p>

                <button
                  type="button"
                  className={` rounded-xl px-4 py-3 font-inter text-[16px] font-medium transition-transform hover:scale-[1.01] ${
                    isPopular
                      ? "bg-[#3E5BFF] text-white"
                      : "bg-[#16163C] text-white"
                  }`}
                >
                  Select Plan
                </button>

                <div className="flex flex-col gap-3 mt-9">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isPopular
                            ? "text-white bg-neutral-800 rounded-sm p-1"
                            : "text-[#0B0C2B] bg-neutral-100 rounded-sm p-1"
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
