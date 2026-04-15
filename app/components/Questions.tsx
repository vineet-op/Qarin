"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { easeIn, easeOut, motion } from "motion/react";

const faqs = [
  {
    question: "What is Qarin?",
    answer:
      "Qarin is an AI-powered sales management platform that helps teams automate workflows, track pipelines, forecast revenue, and close deals faster using intelligent insights",
  },
  {
    question: "Does Qarin integrate with CRM tools?",
    answer: "Yes, Qarin connects seamlessly with popular CRM platforms.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can start with a free trial to explore all features.",
  },
  {
    question: "How does Qarin use AI?",
    answer:
      "Qarin analyzes sales data, recommends actions, and automates routine workflows using AI.",
  },
  {
    question: "What kind of support does Qarin provide?",
    answer: "We offer email, chat, and knowledge-base support.",
  },
  {
    question: "How does Qarin help teams collaborate?",
    answer:
      "Qarin brings all deal updates, tasks, and conversations into one workspace. This helps teams stay aligned, reduce manual follow-ups, and work together more efficiently.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mx-4 w-auto overflow-x-hidden border-b-2 border-[#E4E7EC] py-12 md:py-16 lg:px-4 lg:py-20 xl:px-24">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:gap-16">
          <div className="flex flex-col xl:w-[620px] xl:shrink-0">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-3 py-1.5">
              <HelpCircle className="h-3.5 w-3.5 text-[#0B0C2B]" />
              <span className="font-sans text-[13px] font-medium text-[#0B0C2B]">
                FAQs
              </span>
            </div>

            <h2 className="font-sans text-[32px] font-medium tracking-tighter text-[#0B0C2B] md:text-[48px]">
              Got Questions?
            </h2>

            <p className="mb-8 font-inter text-[14px] leading-relaxed text-[#667085] md:mb-12 md:text-[16px] lg:mb-10">
              Everything you need to know about <br /> using Qarin, from plans
              and integrations to AI-powered features.
            </p>

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://framerusercontent.com/images/sxuVdy12b8gcN2NXWA2bhDEMo0.png?scale-down-to=512&width=1458&height=996"
                alt="Support representative"
                className="h-[450px] w-full object-cover lg:h-full lg:w-full"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-3 font-inter text-[14px] leading-relaxed text-white md:text-[15px]">
                  Still have questions or need help setting up? Our support team
                  is always ready to help you set up, learn, and grow with
                  Qarin.
                </p>

                <button
                  type="button"
                  className="group flex items-center gap-2 font-inter text-[16px] font-medium text-white transition-transform hover:translate-x-1"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="flex flex-1 flex-col gap-2 xl:mt-16"
            role="region"
            aria-label="Frequently asked questions"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.article
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.3,
                    ease: easeOut,
                  }}
                  className="overflow-hidden rounded-lg border border-[#E4E7EC] bg-white px-4 lg:py-4 xl:px-6"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={`faq-trigger-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => toggle(index)}
                      className="group relative flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg border border-transparent py-2.5 text-left text-sm font-medium outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#0B0C2B]/20 focus-visible:ring-offset-2"
                    >
                      <span className="font-inter text-[17px] font-medium text-[#0B0C2B]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`pointer-events-none mt-0.5 h-4 w-4 shrink-0 text-[#667085] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-6 font-inter text-[16px] leading-relaxed text-[#667085] [&_p:not(:last-child)]:mb-4">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
