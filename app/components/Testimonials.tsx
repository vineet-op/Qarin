"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Parses "364%" → { value: 364, suffix: "%" } or "21X" → { value: 21, suffix: "X" }
const parseStatValue = (raw: string) => {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { value: 0, suffix: raw };
  return { value: parseFloat(match[1]), suffix: match[2] };
};

const CountUp = ({
  target,
  suffix,
  duration = 1.6,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || !ref.current) return;
    const el = ref.current;
    const isFloat = target % 1 !== 0;
    const start = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = `${isFloat ? current.toFixed(1) : Math.round(current)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [hasStarted, target, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

const testimonials = [
  {
    image:
      "https://framerusercontent.com/images/SjL4CTijLaOWG3EN57UHWVvcdo.png?width=668&height=782",
    quote:
      "Qarin keeps our growing team aligned and productive. From task tracking to smart insights, everything just works, it feels like the future of sales",
    name: "David Lee",
    position: "Head of Operations",
    companyLogo:
      "https://framerusercontent.com/images/N52BE4iPruvrOE3Fu7Fm8FqeRwo.svg?width=116&height=34",
    revenueBoost: "364%",
    revenueText: "Revenue Boost in Last 30 Days",
    teamEfficiency: "21X",
    teamEfficiencyText: "Team Efficiency",
  },
  {
    image:
      "https://framerusercontent.com/images/yvXelzfzNHVhipQoEbbHWtVXMc.png?width=668&height=782",
    quote:
      "Qarin completely transformed how our small firm operates. After implementing the platform, our sales grew by 30%.",
    name: "Stefan Persson",
    position: "Product Manager",
    companyLogo:
      "https://framerusercontent.com/images/r31mYETPYerh45WS4fgLlw4FP0.svg?width=98&height=28",
    revenueBoost: "3%",
    revenueText: "Revenue Boost in Last 30 Days",
    teamEfficiency: "15X",
    teamEfficiencyText: "Team Efficiency",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => {
  const rev = parseStatValue(testimonial.revenueBoost);
  const eff = parseStatValue(testimonial.teamEfficiency);

  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col lg:flex-row overflow-hidden">
      <div className="flex flex-col md:flex-row lg:flex-1">
        {/* Image Section */}
        <div className="shrink-0 mb-6 md:mb-0 md:mr-8 lg:mr-[60px]">
          <div className="relative w-full h-[300px] md:w-[280px] md:h-[350px] lg:w-[330px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col lg:py-9 lg:pr-[60px]">
          <p className="text-[16px] md:text-[18px] font-inter text-[#0B0C2B] tracking-tight font-medium mb-6 md:mb-8 lg:mb-auto">
            {testimonial.quote}
          </p>

          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-[16px] font-semibold font-inter text-[#0B0C2B]">
                {testimonial.name}
              </h4>
              <p className="text-[14px] font-inter text-[#66677D]">
                {testimonial.position}
              </p>
            </div>

            <div className="relative w-[90px] h-[26px] md:w-[116px] md:h-[34px]">
              <Image
                src={testimonial.companyLogo}
                alt="Company logo"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 pt-6 border-t border-[#E8E6FA] flex flex-row lg:flex-col justify-between gap-8 md:gap-12 lg:mt-0 lg:border-t-0 lg:border-l lg:pl-[60px] lg:py-12 lg:min-w-[220px]">
        <div>
          <div className="text-[28px] md:text-[40px] lg:text-[48px] lg:font-medium font-normal font-sans text-[#0B0C2B] leading-none mb-2">
            <CountUp target={rev.value} suffix={rev.suffix} />
          </div>
          <p className="text-[12px] md:text-[16px] font-inter font-medium text-[#66677d] max-w-[180px]">
            {testimonial.revenueText}
          </p>
        </div>

        <div>
          <div className="text-[28px] md:text-[40px] lg:text-[48px] font-normal font-sans lg:font-medium text-[#0B0C2B] leading-none mb-2">
            <CountUp target={eff.value} suffix={eff.suffix} />
          </div>
          <p className="text-[12px] md:text-[16px] font-medium font-inter text-[#66677D] max-w-[180px]">
            {testimonial.teamEfficiencyText}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F9F9FB] py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-full mx-auto px-4 md:px-8 lg:px-8 xl:px-28">
        {/* Trustpilot Rating */}
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-inter font-semibold text-[#0B0C2B]">
              Excellent
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="https://framerusercontent.com/images/rpWTfrMmJpbzf0YbudAHVOy6Z8.svg?width=20&height=20"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
          <p className="text-sm font-inter font-medium text-[#0B0C2B]">
            Trustpilot Score 4.9 | 32,758 reviews
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium font-sans text-[#0B0C2B] text-center mb-8 md:mb-12 lg:mb-16 tracking-tighter px-4">
          Trusted by 10 million users worldwide
        </h2>

        {/* Sticky overlapping cards */}
        <div className="flex flex-col gap-6">
          {/* First card — becomes sticky on scroll */}
          <div className="sticky top-24 z-10">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>

          {/* Second card — naturally below, scrolls up to overlap the first */}
          <div className="sticky z-20" style={{ top: "calc(6rem + 24px)" }}>
            <TestimonialCard testimonial={testimonials[1]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
