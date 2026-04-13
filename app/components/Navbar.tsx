"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const NavbarOptions = ["All Pages", "Features", "Pricing"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-inter mx-auto mt-4 w-full max-w-[1296px] bg-neutral-50 px-6 py-4 rounded-3xl">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation Links - Left Side */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-neutral-50" />
            <span
              className="font-sans text-3xl font-bold tracking-tight"
              style={{ color: "var(--heading-color)" }}
            >
              Qarin
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center pl-10 lg:mt-2 gap-8 lg:flex">
            {NavbarOptions.map((option, index) => (
              <div key={option} className="flex items-center gap-8">
                {index > 0 && (
                  <div className="-ml-8 h-1 w-1 rounded-full bg-neutral-200" />
                )}
                <Link
                  className="text-[15px] font-medium transition-opacity hover:opacity-70"
                  style={{ color: "var(--heading-color)" }}
                  href={`/${option.toLowerCase().replace(" ", "-")}`}
                >
                  {option}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Button - Right Side */}
        <div className="hidden lg:block">
          <Button
            className="rounded-sm border-0 px-4 py-6 text-[15px] font-medium text-white"
            style={{ background: "var(--btn-bg)" }}
          >
            Get Started Now
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{ backgroundColor: "var(--heading-color)" }}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: "var(--heading-color)" }}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            style={{ backgroundColor: "var(--heading-color)" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pb-4 pt-6">
          {NavbarOptions.map((option) => (
            <Link
              key={option}
              className="text-[15px] font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--heading-color)" }}
              href={`/${option.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {option}
            </Link>
          ))}
          <Button
            className="mt-2 w-full rounded-sm border-0 px-4 py-6 text-[15px] font-medium text-white"
            style={{ background: "var(--btn-bg)" }}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
