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
    <section className="font-inter flex flex-col items-center justify-center mx-auto mt-[76px] w-full max-w-[1296px] px-4">
      {/* Version Badge */}
      <div className="flex items-center gap-1.5 mb-[27px] px-3 py-1.5 rounded-sm bg-white border border-neutral-200">
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
        className=" text-[40px] lg:text-[64px] font-sans font-medium text-center leading-[1.1] tracking-tighter max-w-[900px] mb-6"
        style={{ color: "var(--heading-color)" }}
      >
        Manage Your Sales Process <br /> with Clarity and Control
      </h1>

      {/* Subheading */}
      <p
        className="text-[16px] text-center max-w-[600px] mb-8 leading-relaxed"
        style={{ color: "var(--subheading-color)" }}
      >
        Deliver exceptional customer support at scale with AI-powered tools that
        delight customers and empower your team.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 items-center mb-16">
        <Button
          className="text-white font-medium text-[15px] px-6 py-6 rounded-xl border-0"
          style={{ background: "var(--brand-color)" }}
        >
          Book a Demo
        </Button>
        <Button
          variant="outline"
          className="font-medium text-[15px] px-6 py-6 rounded-xl bg-white border border-neutral-200 flex items-center gap-2"
          style={{ color: "var(--heading-color)" }}
        >
          Contact Sales
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Hero Image Section */}
      <div className="relative  -mt-10  w-full h-full">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/N5RFLbxO4vAoymPSuRfOaxSZJ5o.png?scale-down-to=2048&width=2752&height=2642)",
            backgroundSize: "cover",
            backgroundPosition: "center top -300px",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dashboard Image */}
        <div className="relative w-full h-full flex items-start justify-center px-8 py-8 lg:py-16">
          <img
            src="https://framerusercontent.com/images/rxbjs0K0wdBGS4vAounN8YZpJuM.png?scale-down-to=2048&width=2160&height=1536"
            alt="Qarin Dashboard"
            className="w-full max-w-[950px] p-5 h-full lg:h-[650px] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="w-full mt-32">
        <h2
          className="text-[16px] font-medium text-center"
          style={{ color: "var(--heading-color)" }}
        >
          Trusted by 12,000+ founders & business owners
        </h2>

        <div className="relative mt-[30px] overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

          <div className="brand-marquee-track flex w-max items-center gap-16 py-4">
            {marqueeLogos.map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={logo}
                alt="Brand logo"
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
