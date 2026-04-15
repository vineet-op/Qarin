"use client";
import React from "react";

const cardsData = [
  {
    id: "instant-setup",
    title: "Start with instant setup",
    description:
      "Connect your database and pipelines to create a clean, ready to use pipeline.",
  },
  {
    id: "manage-deals",
    title: "Manage every deal seamlessly",
    description:
      "Track conversations, assign tasks, and follow up on time, all from one organized workspace.",
  },
  {
    id: "review-close",
    title: "Review, close, and repeat",
    description:
      "Measure results, learn from insights, and keep improving your sales process with every cycle.",
  },
];

const HowItWorks = () => {
  const renderCardContent = (index: number) => {
    if (index === 0) {
      return (
        <div className="relative overflow-hidden rounded-xl">
          <div className="flex flex-col gap-2 md:gap-1.5 xl:gap-3">
            <div className="flex items-center justify-between rounded-lg bg-white p-3 md:p-2 xl:p-4">
              <div className="flex items-center gap-2 md:gap-1.5 xl:gap-3">
                <div className="flex h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5 md:h-3 md:w-3 xl:h-4 xl:w-4"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span
                  className="font-sans text-[15px] md:text-[12px] xl:text-[16px] font-medium"
                  style={{ color: "var(--heading-color)" }}
                >
                  Google Analytics
                </span>
              </div>
              <button className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-[12px] md:px-2 md:text-[10px] xl:px-4 xl:py-1.5 xl:text-[14px] font-inter font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-3 md:p-2 xl:p-4">
              <div className="flex items-center gap-2 md:gap-1.5 xl:gap-3">
                <div className="flex h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5 md:h-3 md:w-3 xl:h-4 xl:w-4"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span
                  className="font-inter text-[14px] md:text-[12px] xl:text-[14px] font-medium"
                  style={{ color: "var(--heading-color)" }}
                >
                  Beta Pixel
                </span>
              </div>
              <button className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-[12px] md:px-2 md:text-[10px] xl:px-4 xl:py-1.5 xl:text-[14px] font-inter font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-3 md:p-2 xl:p-4">
              <div className="flex items-center gap-2 md:gap-1.5 xl:gap-3">
                <div className="flex h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5 md:h-3 md:w-3 xl:h-4 xl:w-4"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span
                  className="font-inter text-[14px] md:text-[12px] xl:text-[14px] font-medium"
                  style={{ color: "var(--heading-color)" }}
                >
                  InkedIn Conversion
                </span>
              </div>
              <button className="rounded-md bg-black px-3 py-1 text-[12px] md:px-2 md:text-[10px] xl:px-4 xl:py-1.5 xl:text-[14px] font-inter font-medium text-white transition-colors hover:bg-neutral-800">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-3 md:p-2 xl:p-4 opacity-50">
              <div className="flex items-center gap-2 md:gap-1.5 xl:gap-3">
                <div className="flex h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5 md:h-3 md:w-3 xl:h-4 xl:w-4"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span
                  className="font-inter text-[14px] md:text-[12px] xl:text-[14px] font-medium"
                  style={{ color: "var(--heading-color)" }}
                >
                  Mailchimp campaigns
                </span>
              </div>
              <button className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-[12px] md:px-2 md:text-[10px] xl:px-4 xl:py-1.5 xl:text-[14px] font-inter font-medium text-neutral-600">
                Connect
              </button>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-white p-3 md:p-2 xl:p-4 opacity-30">
              <div className="flex items-center gap-2 md:gap-1.5 xl:gap-3">
                <div className="flex h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-3.5 w-3.5 md:h-3 md:w-3 xl:h-4 xl:w-4"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                </div>
                <span
                  className="font-inter text-[14px] md:text-[12px] xl:text-[14px] font-medium"
                  style={{ color: "var(--heading-color)" }}
                >
                  YouDube Analytics
                </span>
              </div>
              <button className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-[12px] md:px-2 md:text-[10px] xl:px-4 xl:py-1.5 xl:text-[14px] font-inter font-medium text-neutral-600">
                Connect
              </button>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>
      );
    }

    if (index === 1) {
      return (
        <div className="space-y-3 md:space-y-2 xl:space-y-4">
          <div className="rounded-xl bg-white p-3 md:p-2 xl:p-4">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <div
                  className="font-sans text-[17px] md:text-[14px] xl:text-[18px] font-semibold"
                  style={{ color: "var(--heading-color)" }}
                >
                  $ 251,000.00
                </div>
                <div
                  className="mt-1 font-inter text-[12px] md:text-[10px] xl:text-[13px]"
                  style={{ color: "var(--subheading-color)" }}
                >
                  Purchasing for CRM Products
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 overflow-hidden rounded-full bg-neutral-200">
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-400 to-purple-500 font-inter text-[11px] md:text-[9px] xl:text-[12px] font-semibold text-white">
                    AW
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded p-1 md:p-0.5 hover:bg-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 md:h-3 md:w-3 xl:h-4 xl:w-4 text-neutral-600"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>
              <button className="rounded p-1 md:p-0.5 hover:bg-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 md:h-3 md:w-3 xl:h-4 xl:w-4 text-neutral-600"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-white p-3 md:p-2 xl:p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1 md:px-2 md:text-[10px] font-inter text-[12px] font-medium text-white xl:px-3 xl:text-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3 w-3 md:h-2.5 md:w-2.5 xl:h-3 xl:w-3"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Progress
              </span>
              <div className="ml-auto flex items-center gap-1 font-inter text-[13px] md:text-[10px] xl:text-[13px] text-neutral-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 md:h-3 md:w-3 xl:h-4 xl:w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                21 Day
              </div>
            </div>
            <div
              className="mb-2 font-sans text-[20px] md:text-[17px] xl:text-[22px] font-semibold"
              style={{ color: "var(--heading-color)" }}
            >
              $251,000
            </div>
            <div
              className="mb-4 font-inter text-[12px] md:text-[10px] xl:text-[13px]"
              style={{ color: "var(--subheading-color)" }}
            >
              Develop CRM Product
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 md:h-6 md:w-6 xl:h-8 xl:w-8 overflow-hidden rounded-full bg-neutral-200">
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-purple-400 to-pink-500 font-inter text-[11px] md:text-[9px] xl:text-[12px] font-semibold text-white">
                  RB
                </div>
              </div>
              <div>
                <div
                  className="font-inter text-[12px] md:text-[10px] xl:text-[13px] font-medium"
                  style={{ color: "var(--heading-color)" }}
                >
                  Raymond Baratheon
                </div>
                <div className="font-inter text-[11px] md:text-[9px] xl:text-[12px] text-neutral-500">
                  Sales Executive Manager
                </div>
              </div>
              <button className="ml-auto rounded p-1 md:p-0.5 hover:bg-neutral-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 md:h-4 md:w-4 xl:h-5 xl:w-5 text-neutral-600"
                >
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (index === 2) {
      return (
        <div className="rounded-xl">
          <div
            className="mb-2 font-sans text-[15px] md:text-[13px] xl:text-[16px] font-semibold"
            style={{ color: "var(--heading-color)" }}
          >
            Statistics
          </div>
          <div
            className="mb-3 md:mb-2 xl:mb-4 font-inter text-[12px] md:text-[10px] xl:text-[13px]"
            style={{ color: "var(--subheading-color)" }}
          >
            From your income and outcome
          </div>

          <div className="relative mt-6 mb-4 md:mt-4 md:mb-3 xl:mt-10 xl:mb-6 h-32 md:h-24 xl:h-40">
            <svg
              viewBox="0 0 368 166"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0 83C30.67 83 30.67 20 61.33 20C92 20 92 50 122.67 50C153.33 50 153.33 10 184 10C214.67 10 214.67 70 245.33 70C276 70 276 40 306.67 40C337.33 40 337.33 83 368 83"
                fill="none"
                stroke="rgb(51, 85, 255)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M184 10 L184 166"
                stroke="rgb(216, 216, 223)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle cx="184" cy="10" r="4" fill="rgb(51, 85, 255)" />
              <rect
                x="160"
                y="0"
                width="70"
                height="24"
                rx="4"
                fill="rgb(21, 22, 60)"
              />
              <text
                x="195"
                y="16"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
              >
                $6,582.00
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-2 xl:gap-4">
            <div className="flex items-start gap-2 md:gap-1.5 xl:gap-2">
              <div className="mt-1 flex h-5 w-5 md:h-4 md:w-4 xl:h-5 xl:w-5 items-center justify-center rounded-full bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                  preserveAspectRatio="none"
                  className="h-[22px] w-[22px] md:h-[16px] md:w-[16px] xl:h-[22px] xl:w-[22px]"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="9"
                    fill="none"
                    stroke="rgb(51, 85, 255)"
                    strokeWidth="2"
                  />
                  <path
                    d="M11 7v4l3 3"
                    fill="none"
                    stroke="rgb(51, 85, 255)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="font-inter text-[10px] md:text-[8px] xl:text-[11px] uppercase tracking-wide"
                  style={{ color: "var(--subheading-color)" }}
                >
                  Product
                </div>
                <div
                  className="font-sans text-[15px] md:text-[12px] xl:text-[16px] font-semibold"
                  style={{ color: "var(--heading-color)" }}
                >
                  $18,495.00
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 md:gap-1.5 xl:gap-2">
              <div className="mt-1 flex h-5 w-5 md:h-4 md:w-4 xl:h-5 xl:w-5 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                  preserveAspectRatio="none"
                  className="h-[22px] w-[22px] md:h-[16px] md:w-[16px] xl:h-[22px] xl:w-[22px]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="16"
                    height="16"
                    rx="2"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 11l3 3 5-5"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div
                  className="font-inter text-[10px] md:text-[8px] xl:text-[11px] uppercase tracking-wide"
                  style={{ color: "var(--subheading-color)" }}
                >
                  Project
                </div>
                <div
                  className="font-sans text-[15px] md:text-[12px] xl:text-[16px] font-semibold"
                  style={{ color: "var(--heading-color)" }}
                >
                  $8,850.00
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1296px]">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5">
            <div
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--brand-color)" }}
            />
            <span
              className="font-inter text-[12px] font-medium"
              style={{ color: "var(--heading-color)" }}
            >
              How it works
            </span>
          </div>

          <h2
            className="font-sans text-[28px] md:text-[34px] lg:text-[48px] font-medium leading-[1.1] tracking-tighter"
            style={{ color: "var(--heading-color)" }}
          >
            A smarter way to manage your work
          </h2>

          <p
            className="mx-auto mt-4 font-inter text-[16px]"
            style={{ color: "var(--subheading-color)" }}
          >
            Everything flows through one connected workspace. Qarin captures
            leads, organizes conversations, automates follow-ups, and guides
            your team.
          </p>
        </div>

        <div className="relative mt-8 md:mt-16 hidden md:flex md:justify-center xl:mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 884 51"
            className="w-full md:w-[480px] xl:w-full"
            style={{ height: "26px" }}
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M.548 50S-2.372 1.454 37.128.94c39.5-.515 326.5-.003 365.5 0S441.048 50 441.048 50s-2.92-48.071 39.08-49.06c42-.99 365.5 0 365.5 0S884.548 8 883.048 50"
              stroke="rgb(216, 216, 223)"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="transparent"
            />
            <path
              className="animate-dash-flow"
              strokeDasharray="5 100"
              d="M.548 50S-2.372 1.454 37.128.94c39.5-.515 326.5-.003 365.5 0S441.048 50 441.048 50s-2.92-48.071 39.08-49.06c42-.99 365.5 0 365.5 0S884.548 8 883.048 50"
              stroke="rgb(51, 85, 255)"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="transparent"
              pathLength="100"
              opacity="1"
              style={{ strokeDashoffset: 105 }}
            />
          </svg>
        </div>

        {/* Mobile Layout - Card with text below each */}
        <div className="flex flex-col gap-12 mt-8 md:mt-0 md:hidden">
          {cardsData.map((card, index) => (
            <div key={card.id} className="mx-auto w-full max-w-[416px]">
              <article
                className="rounded-2xl p-4 flex flex-col"
                style={{
                  background:
                    "linear-gradient(180deg, #f2f2ff 0%, rgba(242, 242, 255, 0) 100%)",
                  minHeight: "473px",
                }}
              >
                <div className="flex-1">{renderCardContent(index)}</div>

                <div className="mt-6">
                  <h3
                    className="mb-3 font-sans text-[20px] font-medium leading-tight"
                    style={{ color: "var(--heading-color)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="font-inter text-[14px] leading-relaxed"
                    style={{ color: "var(--subheading-color)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop Layout - Cards in grid with text inside */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 xl:gap-[23px] ">
            {cardsData.map((card, index) => (
              <div key={card.id} className="w-full">
                <article
                  className="rounded-2xl p-3 md:p-3 xl:p-6 flex flex-col overflow-hidden w-full md:h-[393px] xl:w-[416px] xl:h-auto"
                  style={{
                    background:
                      "linear-gradient(180deg, #f2f2ff 0%, rgba(242, 242, 255, 0) 100%)",
                  }}
                >
                  <div className="flex-1 overflow-hidden">
                    {renderCardContent(index)}
                  </div>

                  <div className="mt-2 md:mt-1 xl:mt-6 shrink-0">
                    <h3
                      className="mb-2 font-sans text-[16px] lg:text-[20px] font-medium leading-tight"
                      style={{ color: "var(--heading-color)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-inter text-[12px] lg:text-[14px] leading-relaxed line-clamp-3"
                      style={{ color: "var(--subheading-color)" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
