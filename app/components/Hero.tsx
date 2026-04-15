"use client";

import RollButton from "@/components/ui/AnimatedButton";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const DASHBOARD_IMG =
  "https://framerusercontent.com/images/rxbjs0K0wdBGS4vAounN8YZpJuM.png?scale-down-to=2048&width=2160&height=1536";

const brandLogos = [
  "https://framerusercontent.com/images/HUjVylf8pqC22c2YOTgt1e7wc4.svg?width=143&height=33",
  "https://framerusercontent.com/images/YMzIwJwfCJKx60sxjNICLsykiUI.svg?width=162&height=33",
  "https://framerusercontent.com/images/oluNq85ynU7bPDENeL6CRmMiTdo.svg?width=115&height=32",
  "https://framerusercontent.com/images/MNnLutmwBJlcfD5sExJMo0nSwk.svg?width=120&height=26",
  "https://framerusercontent.com/images/Fl1TyCMcOJCgNvQSSZxD7VnlCc.svg?width=161&height=32",
  "https://framerusercontent.com/images/FyHHpxlScNKG087Y8lDC5iB3M.svg?width=169&height=23",
];

const Hero = () => {
  const marqueeLogos = [...brandLogos, ...brandLogos];

  const { scrollY } = useScroll();

  // Scroll-driven 3D — md+ (tablet through wide desktop, e.g. 1440px). Mobile uses a static image below.
  const rawRotateX = useTransform(scrollY, [0, 720], [14, 0]);
  const rawTranslateY = useTransform(scrollY, [0, 720], [52, 0]);
  const rawScale = useTransform(scrollY, [0, 720], [0.993, 1]);

  const springOpts = {
    stiffness: 92,
    damping: 28,
    mass: 0.9,
  } as const;

  const rotateX = useSpring(rawRotateX, springOpts);
  const translateY = useSpring(rawTranslateY, springOpts);
  const scale = useSpring(rawScale, springOpts);

  return (
    <section className="font-inter mx-auto mt-[60px] flex w-full flex-col items-center justify-center px-4 md:mt-[70px] md:px-6 lg:mt-[76px] lg:px-20">
      {/* Version Badge */}
      <div className="mb-4 flex items-center gap-1.5 rounded-sm border border-neutral-200 bg-white px-3 py-1.5 md:mb-6 lg:mb-[27px]">
        <span
          className="text-xs font-medium"
          style={{ color: "var(--heading-color)" }}
        >
          Version 2.0 out now
        </span>
        <ArrowRight
          className="h-3 w-3"
          style={{ color: "var(--heading-color)" }}
        />
      </div>

      {/* Main Heading */}
      <h1
        className="mb-4 max-w-[900px] px-2 text-center font-sans text-[40px] font-medium leading-[1.1] tracking-tighter md:mb-5 md:text-[48px] lg:mb-6 lg:text-[64px]"
        style={{ color: "var(--heading-color)" }}
      >
        Manage Your Sales Process <br className="hidden md:block" /> with
        Clarity and Control
      </h1>

      {/* Subheading */}
      <p
        className="mb-6 max-w-[340px] px-2 text-center text-[14px] leading-relaxed md:mb-7 md:max-w-[500px] md:text-[15px] lg:mb-8 lg:max-w-[600px] lg:text-[16px]"
        style={{ color: "var(--subheading-color)" }}
      >
        Deliver exceptional customer support at scale with AI-powered tools that
        delight customers and empower your team.
      </p>

      {/* CTA Buttons */}
      <div className="mb-8 flex w-full flex-row items-center justify-center gap-3 px-4 md:mb-12 md:gap-4 md:px-0 lg:mb-16">
        <RollButton
          label="Book a Demo"
          background="var(--card-linear-bg)"
          color="#ffffff"
          padding="12px 22px"
          borderRadius="12px"
          border="none"
          labelClassName="text-[14px] md:text-[15px] font-medium"
          className="w-auto rounded-xl border-0"
        />
        <RollButton
          label="Contact Sales"
          background="#ffffff"
          color="var(--heading-color)"
          padding="12px 22px"
          borderRadius="12px"
          border="1px solid #e5e5e5"
          labelClassName="text-[14px] md:text-[15px] font-medium"
          className="group w-auto rounded-xl bg-white transition-all"
          suffix={
            <ArrowRight
              className="h-4 w-4 -rotate-45 transition-transform duration-100 group-hover:rotate-0"
              style={{ color: "var(--heading-color)" }}
            />
          }
        />
      </div>

      {/* Hero Image Section */}
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 w-full overflow-hidden rounded-2xl md:rounded-3xl"
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/N5RFLbxO4vAoymPSuRfOaxSZJ5o.png?scale-down-to=2048&width=2752&height=2642)",
            backgroundSize: "cover",
            backgroundPosition:
              typeof window !== "undefined"
                ? window.innerWidth >= 1440
                  ? // Large screens
                    "center top -500px"
                  : window.innerWidth >= 768
                    ? // Medium screens
                      "center top -140px"
                    : // Mobile screens (add more mobile-specific adjustments here)
                      "center top -50px"
                : // SSR fallback
                  "center top -140px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative flex w-full items-start justify-center rounded-2xl px-4 py-6 md:px-4 md:py-6 lg:px-6 lg:py-6">
          {/* Mobile: static */}
          <img
            src={DASHBOARD_IMG}
            alt="Qarin Dashboard"
            className="-mt-6 h-auto w-full max-w-[1150px] rounded-xl object-contain p-3 shadow-2xl md:hidden"
          />

          {/* md+: scroll-driven 3D (includes 1024px, 1440px, and up) */}
          <motion.div
            className="mx-auto hidden w-full max-w-[min(100%,820px)] md:block lg:max-w-[1150px] min-[1440px]:w-[971px]! min-[1440px]:max-w-[971px]!"
            style={{
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              rotateX,
              y: translateY,
              scale,
              willChange: "transform",
            }}
          >
            <img
              src={DASHBOARD_IMG}
              alt="Qarin Dashboard"
              className="-mt-4 h-auto w-full max-h-[min(500px,58vh)] rounded-xl object-contain p-3 md:rounded-2xl md:p-3 max-lg:shadow-2xl lg:-mt-6 lg:max-h-[min(820px,78vh)] lg:rounded-2xl lg:p-6 lg:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.06),0_12px_28px_-14px_rgba(15,23,42,0.08)] xl:shadow-[0_3px_10px_-2px_rgba(15,23,42,0.05),0_10px_22px_-12px_rgba(15,23,42,0.07)] min-[1440px]:box-border min-[1440px]:h-[658px]! min-[1440px]:w-[971px]! min-[1440px]:max-h-[658px]! min-[1440px]:shrink-0 min-[1440px]:p-4"
            />
          </motion.div>
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="mt-12 w-full md:mt-20 lg:mt-32">
        <h2
          className="px-4 text-center text-[14px] font-medium md:text-[15px] lg:text-[16px]"
          style={{ color: "var(--heading-color)" }}
        >
          Trusted by 12,000+ founders & business owners
        </h2>

        <div className="relative mt-6 overflow-hidden md:mt-8 lg:mt-[30px]">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-linear-to-r from-white to-transparent md:w-20 lg:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-linear-to-l from-white to-transparent md:w-20 lg:w-24" />

          <div className="brand-marquee-track flex w-max items-center gap-8 py-4 md:gap-12 lg:gap-16">
            {marqueeLogos.map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={logo}
                alt="Brand logo"
                className="h-6 object-contain md:h-7 lg:h-8"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
