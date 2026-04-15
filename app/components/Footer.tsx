import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="mx-4 w-auto py-12 md:py-16 lg:mx-6 lg:px-6 lg:py-1 xl:px-36">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#4F46E5] via-[#5B52E8] to-[#6B63EB] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="flex h-full animate-slide-rtl">
              <img
                src="https://framerusercontent.com/images/lIMUUhh5AyHhFkGWzaQ8FEmJAk.png?scale-down-to=2048&width=2432&height=1120"
                alt="Background pattern"
                className="h-full min-w-full shrink-0 object-cover"
              />
              <img
                src="https://framerusercontent.com/images/lIMUUhh5AyHhFkGWzaQ8FEmJAk.png?scale-down-to=2048&width=2432&height=1120"
                alt="Background pattern"
                className="h-full min-w-full shrink-0 object-cover"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mb-[35px] font-sans text-[32px] font-semibold leading-tight leading-tighter tracking-tight text-white md:text-[40px] lg:text-[48px] lg:leading-tighter">
              Get started today and unlock the power of our solutions.
            </h2>

            <p className="mb-[35px] max-w-2xl font-inter text-[16px] leading-relaxed text-white/90 lg:max-w-xl md:text-[18px]">
              Qarin is the ultimate SaaS & startup Framer templates designed for
              startups and fast-growing teams.
            </p>

            <Button
              className="rounded-2xl bg-white px-6 py-6 font-inter text-[16px] font-semibold text-[#4F46E5] transition-all hover:bg-white/95 hover:shadow-lg"
              size="lg"
            >
              Start 14 Days Free Trial
            </Button>
          </div>
        </div>

        <footer className="bg-[#FAFBFA] h-auto px-6 py-12 text-[#66677D] lg:px-6 lg:py-16 lg:pt-0 xl:pt-32">
          <div className="mx-auto flex max-w-7xl flex-col">
            {/* Copyright Section - Top */}
            <div className="order-2 mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E8EAF0] pt-8 md:order-0 md:mt-0 md:flex-row md:border-t-0 md:border-b md:border-white/10 md:pb-12 lg:flex-row lg:items-center lg:pt-18">
              <div className="flex items-center gap-4">
                <img
                  src="https://framerusercontent.com/images/OZ1NO0sjJhpkaaZFpnJzs7B2nM.svg?width=587&height=207"
                  alt="Qarin Logo"
                  className="w-[180px] lg:w-[280px] lg:[81px] h-auto md:w-[230px]"
                />
              </div>
              <div className="text-left lg:text-right md:text-right text-sm">
                <p>All Rights Reserved.</p>
                <p>© 2026 Qarin by Creefty, a premium SaaS template</p>
              </div>
            </div>

            {/* Footer Links Section */}
            <div className="order-1 flex flex-col gap-12 xl:flex-row xl:justify-between lg:py-18">
              {/* Logo and Description */}
              <div className="xl:max-w-[350px]">
                <p className="mb-6 font-inter text-sm leading-relaxed md:max-w-sm lg:max-w-sm">
                  Qarin gives you the blocks needed to create a truly solutions
                  that help your Saas to stand out and generate revenue.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-[#4338CA]"
                    aria-label="Facebook"
                  >
                    <img
                      src="https://framerusercontent.com/images/obDY9BcotKeEMKzrFEDwPVR54hE.svg?width=32&height=32"
                      alt="Facebook"
                      className="h-[32px] w-[32px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-[#4338CA]"
                    aria-label="Instagram"
                  >
                    <img
                      src="https://framerusercontent.com/images/JTnvfLXFxHDY28PuMIlXt9GvLM.svg?width=32&height=32"
                      alt="Instagram"
                      className="h-[32px] w-[32px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-[#4338CA]"
                    aria-label="X"
                  >
                    <img
                      src="https://framerusercontent.com/images/zqRs4JQCeu7XXTCUUyJKTHKkLCg.svg?width=32&height=32"
                      alt="X"
                      className="h-[32px] w-[32px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-[#4338CA]"
                    aria-label="Telegram"
                  >
                    <img
                      src="https://framerusercontent.com/images/kbTmYOhGUG58FSyO2atsE7lbKw.svg?width=32&height=32"
                      alt="Telegram"
                      className="h-[32px] w-[32px]"
                    />
                  </a>
                </div>
              </div>

              {/* Right Side - Three Columns */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 lg:gap-64">
                <div>
                  <h3 className="mb-6 font-sans text-base font-semibold">
                    Product
                  </h3>
                  <ul className="space-y-3 font-inter text-sm">
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Landing Page
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Changelog
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 font-sans text-base font-semibold">
                    Company
                  </h3>
                  <ul className="space-y-3 font-inter text-sm">
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Error - 404
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-6 font-sans text-base font-semibold">
                    Support
                  </h3>
                  <ul className="space-y-3 font-inter text-sm">
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Request Demo
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Integration
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        Case Study
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
