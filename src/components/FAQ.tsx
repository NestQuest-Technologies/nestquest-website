"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "What kind of technology work does NestQuest take on?",
    answer:
      "We work across web and mobile applications, cloud and backend systems, product design, and workflow automation. Get in touch with a short description of your need and we can discuss whether it is a fit.",
  },
  {
    question: "Do you only work on property technology?",
    answer:
      "No. My Home is a NestQuest product focused on rental discovery, but our technology services are for organisations with digital product and software needs across different sectors.",
  },
  {
    question: "Can I bring an early-stage idea?",
    answer:
      "Yes. We can start by understanding the problem, users, and goals, then discuss possible scope and next steps before development begins.",
  },
  {
    question: "Who owns the code and design?",
    answer:
      "Ownership and licensing are agreed as part of each project’s scope and contract. We recommend discussing those requirements before work starts.",
  },
  {
    question: "How do we get started?",
    answer:
      "Contact us by email, phone, or WhatsApp with a little context about your project. We can arrange a conversation to understand what you need.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            <FiHelpCircle />
            <span>Good to know</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-slate-600">
            A few answers about working with NestQuest.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 transition-colors hover:border-amber-400"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="flex w-full items-center justify-between bg-slate-50/70 px-6 py-5 text-left hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-bold sm:text-lg">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`flex-shrink-0 text-xl text-amber-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-slate-100 px-6 py-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
