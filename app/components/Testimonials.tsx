import React from "react";
import Image from "next/image";

const Testimonials = () => {
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

  return (
    <section className="w-full bg-[#F9F9FB] py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-28">
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

        {/* Testimonials Grid */}
        <div className="flex flex-col gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-[60px]">
                <div className="relative w-full h-[300px] md:h-[350px] lg:w-[330px] lg:h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col lg:flex-row lg:gap-[60px]">
                {/* Quote and Details */}
                <div className="flex-1 flex flex-col mb-6 md:mb-8 lg:mb-0 lg:py-9 lg:pr-[60px]">
                  <p className="text-[16px] md:text-[18px] font-inter text-[#0B0C2B] tracking-tight font-medium mb-6 md:mb-8 lg:mb-auto">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-end justify-between lg:mt-8">
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

                {/* Stats Section */}
                <div className="pt-6 border-t lg:border-t-0 lg:border-l border-[#E8E6FA] flex flex-row lg:flex-col justify-between gap-8 lg:pl-[60px] lg:py-12">
                  <div>
                    <div className="text-[28px] lg:text-[48px] lg:font-medium font-normal font-sans text-[#0B0C2B] leading-none mb-2">
                      {testimonial.revenueBoost}
                    </div>
                    <p className="text-[12px] md:text-[14px] font-inter font-medium text-[#66677D] max-w-[140px]">
                      {testimonial.revenueText}
                    </p>
                  </div>

                  <div>
                    <div className="text-[28px] lg:text-[48px] font-normal font-sans lg:font-medium text-[#0B0C2B] leading-none mb-2">
                      {testimonial.teamEfficiency}
                    </div>
                    <p className="text-[12px] md:text-[14px] font-medium font-inter text-[#66677D]">
                      {testimonial.teamEfficiencyText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
