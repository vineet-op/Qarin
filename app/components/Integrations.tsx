"use client";

import React from "react";
import { motion } from "motion/react";

const centerGraphic =
  "https://framerusercontent.com/images/8EfXwYMdeIcoK7P5dKeYTkYH8.svg?width=79&height=80";

const leftIntegrations = [
  {
    src: "https://framerusercontent.com/images/Hbk5OyP41Wqc0x6whItOo8H9x4.svg?width=42&height=42",
    alt: "Slack integration",
    desktop: "left-[6%] top-[10%]",
    tablet: "left-[5%] top-[12%]",
    mobile: "left-[4%] top-[16%]",
  },
  {
    src: "https://framerusercontent.com/images/CIV5DdOOVDaWDlrXpMNKfMEsAs.svg?width=42&height=42",
    alt: "Purple integration",
    desktop: "left-[30%] top-[12%]",
    tablet: "left-[27%] top-[14%]",
    mobile: "left-[27%] top-[18%]",
  },
  {
    src: "https://framerusercontent.com/images/ZSVCbl9nF0XPXek5W8Oiauw4.svg?width=42&height=42",
    alt: "Intercom integration",
    desktop: "left-[18%] top-[50%]",
    tablet: "left-[16%] top-[50%]",
    mobile: "left-[13%] top-[51%]",
  },
  {
    src: "https://framerusercontent.com/images/ycLihvpvlluGLEU8S7YtTWOLXWQ.svg?width=42&height=42",
    alt: "Green integration",
    desktop: "left-[30%] top-[88%]",
    tablet: "left-[27%] top-[86%]",
    mobile: "left-[27%] top-[84%]",
  },
  {
    src: "https://framerusercontent.com/images/vsn04MqGj7lu7vzar939v54PZ8.svg?width=42&height=42",
    alt: "Workflow integration",
    desktop: "left-[6%] top-[88%]",
    tablet: "left-[5%] top-[88%]",
    mobile: "left-[4%] top-[86%]",
  },
];

const rightIntegrations = [
  {
    src: "https://framerusercontent.com/images/F92BDgaFOEooaAxazYkfXhu9LA.svg?width=42&height=42",
    alt: "Zapier integration",
    desktop: "left-[70%] top-[14%]",
    tablet: "left-[73%] top-[14%]",
    mobile: "left-[73%] top-[18%]",
  },
  {
    src: "https://framerusercontent.com/images/rfFoD2pAiewwXTTDnmlogKhFgjE.svg?width=42&height=42",
    alt: "Orange integration",
    desktop: "left-[95%] top-[12%]",
    tablet: "left-[95%] top-[12%]",
    mobile: "left-[96%] top-[16%]",
  },
  {
    src: "https://framerusercontent.com/images/ojoTVz6MHIhC6mpTKumsCpW0gI.svg?width=42&height=42",
    alt: "AI integration",
    desktop: "left-[84%] top-[50%]",
    tablet: "left-[84%] top-[50%]",
    mobile: "left-[87%] top-[51%]",
  },
  {
    src: "https://framerusercontent.com/images/qAAa7NF18bopTKeFZfE3ufPUs.svg?width=42&height=42",
    alt: "Commerce integration",
    desktop: "left-[70%] top-[88%]",
    tablet: "left-[73%] top-[86%]",
    mobile: "left-[73%] top-[84%]",
  },
  {
    src: "https://framerusercontent.com/images/VmRid9GatapPOqDNB5kmP1qHaM.svg?width=42&height=42",
    alt: "Spark integration",
    desktop: "left-[95%] top-[88%]",
    tablet: "left-[95%] top-[88%]",
    mobile: "left-[96%] top-[86%]",
  },
];

const integrationNodes = [...leftIntegrations, ...rightIntegrations];
const nodeAnimationTimings = [
  { duration: 5.4, delay: 0 },
  { duration: 6.1, delay: 0.35 },
  { duration: 5.8, delay: 0.7 },
  { duration: 6.6, delay: 0.2 },
  { duration: 5.1, delay: 0.95 },
  { duration: 6.4, delay: 0.4 },
  { duration: 5.6, delay: 1.05 },
  { duration: 6.9, delay: 0.15 },
  { duration: 5.3, delay: 0.8 },
  { duration: 6.2, delay: 0.55 },
];

type LayoutMode = "desktop" | "tablet" | "mobile";

const renderIntegrationIcon = (
  integration: (typeof integrationNodes)[number],
  index: number,
  sizeClassName: string,
  iconClassName: string,
) => (
  <motion.div
    key={`${integration.alt}-${index}`}
    className={`flex items-center justify-center rounded-[20px] border border-[#eef0f7] bg-white shadow-[0px_20px_40px_rgba(17,24,39,0.08)] will-change-transform ${sizeClassName}`}
    animate={{ scale: [0.98, 1.05, 1.2, 1, 0.98] }}
    transition={{
      duration:
        nodeAnimationTimings[index % nodeAnimationTimings.length].duration,
      delay: nodeAnimationTimings[index % nodeAnimationTimings.length].delay,
      ease: "easeOut",
      repeat: Number.POSITIVE_INFINITY,
    }}
  >
    <img
      src={integration.src}
      alt={integration.alt}
      className={iconClassName}
      loading="lazy"
    />
  </motion.div>
);

const renderNetworkLines = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const leftOuterX = width * 0.085;
  const leftInnerX = width * 0.245;
  const rightInnerX = width * 0.755;
  const rightOuterX = width * 0.915;
  const topY = height * 0.12;
  const middleY = centerY;
  const bottomY = height * 0.88;
  const middleLeftX = width * 0.17;
  const middleRightX = width * 0.83;
  const leftCurveControlX = width * 0.365;
  const rightCurveControlX = width * 0.635;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="none"
      shapeRendering="geometricPrecision"
    >
      <g
        fill="none"
        stroke="#E7E7ED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={`M ${leftOuterX} ${topY} H ${leftInnerX}`} />
        <path
          d={`M ${leftInnerX} ${topY} C ${leftCurveControlX} ${topY}, ${centerX - width * 0.12} ${centerY - height * 0.08}, ${centerX} ${centerY}`}
        />
        <path d={`M ${middleLeftX} ${middleY} H ${centerX}`} />
        <path d={`M ${leftOuterX} ${bottomY} H ${leftInnerX}`} />
        <path
          d={`M ${leftInnerX} ${bottomY} C ${leftCurveControlX} ${bottomY}, ${centerX - width * 0.12} ${centerY + height * 0.08}, ${centerX} ${centerY}`}
        />
        <path
          d={`M ${centerX} ${centerY} C ${centerX + width * 0.12} ${centerY - height * 0.08}, ${rightCurveControlX} ${topY}, ${rightInnerX} ${topY}`}
        />
        <path d={`M ${rightInnerX} ${topY} H ${rightOuterX}`} />
        <path d={`M ${centerX} ${middleY} H ${middleRightX}`} />
        <path
          d={`M ${centerX} ${centerY} C ${centerX + width * 0.12} ${centerY + height * 0.08}, ${rightCurveControlX} ${bottomY}, ${rightInnerX} ${bottomY}`}
        />
        <path d={`M ${rightInnerX} ${bottomY} H ${rightOuterX}`} />
      </g>
    </svg>
  );
};

const renderNetworkLayout = ({
  mode,
  wrapperClassName,
  canvasWidth,
  canvasHeight,
  iconCardSizeClassName,
  iconImageSizeClassName,
  hubSizeClassName,
  hubRadiusClassName,
  centerIconClassName,
}: {
  mode: LayoutMode;
  wrapperClassName: string;
  canvasWidth: number;
  canvasHeight: number;
  iconCardSizeClassName: string;
  iconImageSizeClassName: string;
  hubSizeClassName: string;
  hubRadiusClassName: string;
  centerIconClassName: string;
}) => (
  <div className={wrapperClassName}>
    <div
      className="relative mx-auto w-full"
      style={{
        maxWidth: `${canvasWidth}px`,
        aspectRatio: `${canvasWidth} / ${canvasHeight}`,
      }}
    >
      {renderNetworkLines({ width: canvasWidth, height: canvasHeight })}

      {integrationNodes.map((integration, index) => (
        <div
          key={`${integration.alt}-${mode}-${index}`}
          className={`absolute ${integration[mode]} -translate-x-1/2 -translate-y-1/2`}
        >
          {renderIntegrationIcon(
            integration,
            index,
            iconCardSizeClassName,
            iconImageSizeClassName,
          )}
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`relative flex items-center justify-center ${hubSizeClassName}`}
        >
          <span
            className={`absolute inset-0 ${hubRadiusClassName} shadow-[0px_20px_45px_rgba(51,85,255,0.10)]`}
            style={{ backgroundColor: "var(--brand-color)" }}
          />
          <span
            className={`absolute inset-0 animate-ping ${hubRadiusClassName}`}
            style={{ backgroundColor: "var(--brand-color)", opacity: 0.1 }}
          />
          <span
            className={`absolute inset-0 animate-ping ${hubRadiusClassName}`}
            style={{
              backgroundColor: "var(--brand-color)",
              opacity: 0.04,
              animationDelay: "200ms",
            }}
          />
          <img
            src={centerGraphic}
            alt="Qarin integrations hub"
            className={`relative z-10 ${centerIconClassName}`}
          />
        </div>
      </div>
    </div>
  </div>
);

const Integrations = () => {
  return (
    <section className="mx-auto py-24 w-full px-4 font-inter pb-24">
      <div className="mx-auto  text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--brand-color)" }}
          />
          <span
            className="text-[12px] font-medium"
            style={{ color: "var(--heading-color)" }}
          >
            Integrations
          </span>
        </div>

        <h2
          className="mx-auto max-w-[720px] font-sans text-[34px] font-medium leading-[1.08] tracking-tighter sm:text-[40px] lg:text-[48px]"
          style={{ color: "var(--heading-color)" }}
        >
          Powerful integrations with your essential business tools
        </h2>

        <p
          className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed sm:text-[16px]"
          style={{ color: "var(--subheading-color)" }}
        >
          With Qarin task management solution, simplify project planning,
          streamline team collaboration, and boost overall productivity.
        </p>

        <button
          className="mt-7 rounded-xl px-5 py-3 text-[14px] font-medium text-white shadow-[0px_14px_40px_rgba(51,85,255,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: "var(--btn-bg)" }}
          type="button"
        >
          Explore all integration
        </button>
      </div>

      <div className="mt-12 md:mt-16 px-6">
        {renderNetworkLayout({
          mode: "mobile",
          wrapperClassName: "sm:hidden",
          canvasWidth: 456,
          canvasHeight: 135,
          iconCardSizeClassName: "h-[30px] w-[30px] p-[1px] rounded-sm",
          iconImageSizeClassName: "h-[22px] w-[22px]",
          hubSizeClassName: "h-[64px] w-[64px]",
          hubRadiusClassName: "rounded-[20px]",
          centerIconClassName: "h-[42px] w-[42px]",
        })}

        {renderNetworkLayout({
          mode: "tablet",
          wrapperClassName: "hidden sm:block lg:hidden",
          canvasWidth: 848,
          canvasHeight: 251,
          iconCardSizeClassName: "h-[60px] w-[60px] p-[15px] rounded-[18px]",
          iconImageSizeClassName: "h-[30px] w-[30px]",
          hubSizeClassName: "h-[112px] w-[112px]",
          hubRadiusClassName: "rounded-[32px]",
          centerIconClassName: "h-[64px] w-[64px]",
        })}

        {renderNetworkLayout({
          mode: "desktop",
          wrapperClassName: "hidden lg:block",
          canvasWidth: 1078,
          canvasHeight: 320,
          iconCardSizeClassName: "h-[72px] w-[72px] p-[15px] rounded-[20px]",
          iconImageSizeClassName: "h-[42px] w-[42px]",
          hubSizeClassName: "h-[122px] w-[122px]",
          hubRadiusClassName: "rounded-[34px]",
          centerIconClassName: "h-[72px] w-[72px]",
        })}
      </div>
    </section>
  );
};

export default Integrations;
