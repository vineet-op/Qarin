import { HelpCircle, ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="mx-4 w-auto py-12 md:py-16 lg:mx-6 lg:px-28 lg:py-20">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-col lg:w-[620px] lg:shrink-0">
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
                className="lg:h-full lg:w-full h-[450px] w-full object-cover"
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

          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="flex flex-1 flex-col gap-2 lg:mt-16"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-lg border border-[#E4E7EC] bg-white px-4 xl:px-6 lg:py-4"
              >
                <AccordionTrigger className="cursor-pointer font-inter text-[17px] font-semibold text-[#0B0C2B] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 font-inter text-[16px] leading-relaxed text-[#667085]">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Questions;
