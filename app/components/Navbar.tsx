"use client";

import RollButton from "@/components/ui/AnimatedButton";
import Link from "next/link";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const TOP_ALWAYS_VISIBLE = 80;
const SCROLL_DELTA = 10;

const Navbar = () => {
  const NavbarOptions = ["All Pages", "Features", "Pricing"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y < TOP_ALWAYS_VISIBLE) {
        setVisible(true);
        return;
      }
      if (delta > SCROLL_DELTA) {
        setVisible(false);
        setIsMenuOpen(false);
      } else if (delta < -SCROLL_DELTA) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="font-inter fixed left-0 right-0 top-4 z-50 mx-auto w-full max-w-[1296px] px-4 sm:px-6"
        initial={false}
        animate={{ y: visible ? 0 : "-130%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          pointerEvents: visible ? "auto" : "none",
          willChange: "transform",
        }}
        aria-hidden={!visible}
      >
        <div className="rounded-3xl bg-neutral-50 px-6 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-neutral-200/80">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation Links - Left Side */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 28 28"
                  className="h-14 w-14 shrink-0"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 8 28 C 3.582 28 0 24.418 0 20 L 0 8 C 0 3.582 3.582 0 8 0 L 20 0 C 24.418 0 28 3.582 28 8 L 28 20 C 28 24.418 24.418 28 20 28 Z" />
                  <path
                    d="M 10.945 6.004 C 9.592 6.087 8.322 6.685 7.395 7.674 C 6.476 8.655 5.976 9.955 6.001 11.298 C 6.029 12.643 6.579 13.923 7.536 14.868 C 8.5 15.821 9.793 16.369 11.148 16.4 L 15.428 16.4 C 15.694 16.401 15.95 16.296 16.14 16.11 C 16.328 15.925 16.434 15.672 16.434 15.408 L 16.434 11.204 C 16.435 10.503 16.292 9.809 16.014 9.164 C 15.735 8.517 15.327 7.934 14.816 7.449 C 14.301 6.963 13.694 6.585 13.03 6.337 C 12.364 6.089 11.655 5.976 10.945 6.004 Z"
                    fill="rgb(133,153,255)"
                  />
                  <path
                    d="M 16.989 21.895 C 18.342 21.812 19.612 21.216 20.539 20.227 C 21.458 19.246 21.958 17.946 21.933 16.602 C 21.905 15.258 21.355 13.977 20.398 13.032 C 19.433 12.079 18.141 11.531 16.786 11.5 L 12.506 11.5 C 12.239 11.5 11.983 11.604 11.794 11.79 C 11.606 11.975 11.5 12.228 11.5 12.492 L 11.5 16.696 C 11.499 17.398 11.642 18.092 11.92 18.736 C 12.199 19.383 12.606 19.967 13.118 20.451 C 13.631 20.937 14.238 21.315 14.904 21.563 C 15.57 21.811 16.279 21.924 16.989 21.895 Z"
                    fill="rgb(51,85,255)"
                  />
                  <path
                    d="M 16.368 11.504 L 16.368 15.312 C 16.368 15.576 16.262 15.829 16.074 16.014 C 15.885 16.2 15.629 16.304 15.362 16.304 L 11.5 16.304 L 11.5 12.496 C 11.5 12.244 11.596 12.001 11.771 11.816 C 11.946 11.632 12.186 11.521 12.441 11.504 L 12.506 11.5 L 16.368 11.5 Z"
                    fill="rgb(0,71,186)"
                  />
                </svg>
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
              <RollButton
                label="Get Started Now"
                background="var(--btn-bg)"
                color="#ffffff"
                fontSize="15px"
                fontWeight={500}
                padding="16px 16px"
                borderRadius="8px"
                border="none"
                className="rounded-sm border-0 text-[15px] font-medium text-white"
              />
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
              <RollButton
                label="Get Started Now"
                background="var(--btn-bg)"
                color="#ffffff"
                fontSize="15px"
                fontWeight={500}
                padding="24px 16px"
                borderRadius="2px"
                border="none"
                className="mt-2 w-full rounded-sm border-0 text-[15px] font-medium text-white"
              />
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Reserves space so content does not sit under the fixed bar */}
      <div className="h-[104px] shrink-0" aria-hidden />
    </>
  );
};

export default Navbar;
