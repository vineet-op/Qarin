import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

  return (
    <section className="font-inter flex flex-col items-center justify-center mx-auto mt-[60px] md:mt-[70px] lg:mt-[76px] w-full max-w-[1296px] px-4 md:px-6 lg:px-4">
      {/* Version Badge */}
      <div className="flex items-center gap-1.5 mb-4 md:mb-6 lg:mb-[27px] px-3 py-1.5 rounded-sm bg-white border border-neutral-200">
        <span
          className="text-xs font-medium"
          style={{ color: "var(--heading-color)" }}
        >
          Version 2.0 out now
        </span>
        <ArrowRight
          className="w-3 h-3"
          style={{ color: "var(--heading-color)" }}
        />
      </div>

      {/* Main Heading */}
      <h1
        className="text-[32px] md:text-[48px] lg:text-[64px] font-sans font-medium text-center leading-[1.1] tracking-tighter max-w-[900px] mb-4 md:mb-5 lg:mb-6 px-2"
        style={{ color: "var(--heading-color)" }}
      >
        Manage Your Sales Process <br className="hidden md:block" /> with
        Clarity and Control
      </h1>

      {/* Subheading */}
      <p
        className="text-[14px] md:text-[15px] lg:text-[16px] text-center max-w-[340px] md:max-w-[500px] lg:max-w-[600px] mb-6 md:mb-7 lg:mb-8 leading-relaxed px-2"
        style={{ color: "var(--subheading-color)" }}
      >
        Deliver exceptional customer support at scale with AI-powered tools that
        delight customers and empower your team.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center mb-8 md:mb-12 lg:mb-16 w-full md:w-auto px-4 md:px-0">
        <Button
          className="text-white font-medium text-[14px] md:text-[15px] px-6 py-5 md:py-6 rounded-xl border-0 w-full md:w-auto"
          style={{ background: "var(--brand-color)" }}
        >
          Book a Demo
        </Button>
        <Button
          variant="outline"
          className="font-medium text-[14px] md:text-[15px] px-6 py-5 md:py-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-center gap-2 w-full md:w-auto"
          style={{ color: "var(--heading-color)" }}
        >
          Contact Sales
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-full">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden"
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/N5RFLbxO4vAoymPSuRfOaxSZJ5o.png?scale-down-to=2048&width=2752&height=2642)",
            backgroundSize: "cover",
            backgroundPosition: "center top -100px",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dashboard Image */}
        <div className="relative w-full h-full flex items-start justify-center px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-16">
          <img
            src="https://framerusercontent.com/images/rxbjs0K0wdBGS4vAounN8YZpJuM.png?scale-down-to=2048&width=2160&height=1536"
            alt="Qarin Dashboard"
            className="w-full max-w-[950px] p-3 md:p-4 lg:p-5 h-auto -mt-6 md:h-[400px] lg:h-[650px] object-contain rounded-xl md:rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="w-full mt-12 md:mt-20 lg:mt-32">
        <h2
          className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-center px-4"
          style={{ color: "var(--heading-color)" }}
        >
          Trusted by 12,000+ founders & business owners
        </h2>

        <div className="relative mt-6 md:mt-8 lg:mt-[30px] overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 md:w-20 lg:w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 md:w-20 lg:w-24 bg-linear-to-l from-white to-transparent" />

          <div className="brand-marquee-track flex w-max items-center gap-8 md:gap-12 lg:gap-16 py-4">
            {marqueeLogos.map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={logo}
                alt="Brand logo"
                className="h-6 md:h-7 lg:h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
