"use client";

import React, { useState } from "react";
import { Newspaper, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    image:
      "https://framerusercontent.com/images/WDztmzosHAlnKBN8tZHj9RANipw.png?width=1400&height=1050",
    author: "David Lee",
    date: "Apr 22, 2025",
    title: "10 Ways Automation Can Transform Your Sales Workflow",
  },
  {
    image:
      "https://framerusercontent.com/images/nJExD7SZ0hxQVjIQw2Ny94gsMs.png?width=1400&height=1050",
    author: "Amina Torres",
    date: "Apr 22, 2025",
    title: "The Ultimate Guide to Improving Team Communication and Workflow",
  },
  {
    image:
      "https://framerusercontent.com/images/hvZyHhITB8puLAnuKvtMjYdWBt0.png?width=1400&height=1050",
    author: "Amina Torres",
    date: "Apr 22, 2025",
    title: "Why Your CRM Should Do More Than Just Manage Contacts",
  },
  {
    image:
      "https://framerusercontent.com/images/PfmQH0VkPYOTdoD8aVcIZ7FgWo.png?scale-down-to=1024&width=1400&height=1050",
    author: "Liam Chen",
    date: "Apr 22, 2025",
    title: "How a Unified Communication System Improves Team Output",
  },
];

const News = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mx-4 w-auto py-12 md:py-16 lg:mx-1 lg:px-6 xl:px-36 lg:py-20">
      <div className="mx-auto w-full">
        <div className="pb-4 flex flex-col items-center text-center md:mb-12 lg:mb-16">
          <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-3 py-1.5">
            <Newspaper className="h-3.5 w-3.5 text-[#0B0C2B]" />
            <span className="font-sans text-[13px] font-medium text-[#0B0C2B]">
              News
            </span>
          </div>

          <h2 className="font-sans text-[32px] font-medium tracking-tighter text-[#0B0C2B] md:text-[48px]">
            From the Qarin Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-sm border border-[#E4E7EC] bg-white p-4 transition-all ${
                index === 3 ? "md:block xl:hidden" : ""
              }`}
            >
              <div className="relative mb-3 overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className={`h-[240px] w-full object-cover transition-all duration-500 ${
                    hoveredIndex === index ? "scale-105 blur-sm" : ""
                  }`}
                />

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100"
                      : "scale-75 opacity-0"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4F46E5]">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-3">
                <div className="mb-6 flex items-center gap-2 text-[14px] text-[#667085]">
                  <span className="font-inter font-medium">{post.author}</span>
                  <span>|</span>
                  <span className="font-inter">{post.date}</span>
                </div>

                <h3 className="mb-9 font-inter text-[18px] font-semibold leading-snug text-[#0B0C2B]">
                  {post.title}
                </h3>

                <button
                  type="button"
                  className="group/btn flex items-center gap-2 pt-3 font-inter text-[16px] font-medium text-[#4F46E5] transition-transform hover:translate-x-1"
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
