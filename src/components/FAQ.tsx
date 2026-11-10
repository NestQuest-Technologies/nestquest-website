"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "Is NestQuest Technologies Limited legally registered and certified in Zambia?",
    answer:
      "Yes. NestQuest Technologies Limited was officially certified on June 17th, 2025 according to the Zambia Companies Act. We operate in full accordance with national laws and regulations, upholding the highest standards of transparency and integrity.",
  },
  {
    question: "How does NestQuest protect house hunters from rental scams and fake agents?",
    answer:
      "Unlike unverified social media groups or roadside middlemen, every property listing on NestQuest undergoes a verification process. We ensure legitimate ownership, accurate pricing in Kwacha/USD, verified GPS coordinates, and real photographs before any home goes live.",
  },
  {
    question: "Does it cost anything for tenants or students to search for properties?",
    answer:
      "No! Searching for rental properties, using our advanced filters (such as borehole water and solar backup power), viewing property specs, and contacting verified property managers is completely free for tenants.",
  },
  {
    question: "How can landlords and property managers list on the platform?",
    answer:
      "Landlords can sign up, enter property specifications, upload photos, and list their properties for a transparent, nominal fee. Once submitted, our team verifies the details and publishes the listing to thousands of active seekers.",
  },
  {
    question: "What is the Real-Time Availability Notification feature?",
    answer:
      "One of the biggest frustrations in rental housing is calling about a property only to find out it was rented weeks ago. On NestQuest, the moment a tenancy is secured, the listing is updated to 'Rented', preventing wasted time and unnecessary searches.",
  },
  {
    question: "How is my personal data and account privacy protected?",
    answer:
      "All account authentication and user data are securely stored and managed using enterprise-grade Google Firebase services. NestQuest Technologies does not sell, trade, or share your personal information with third parties.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiHelpCircle className="text-amber-600 text-sm" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-4 text-base font-light">
            Everything you need to know about NestQuest, our mobile app, and listing verification in
            Zambia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors hover:border-amber-400 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center bg-slate-50/60 hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-sans text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`text-xl text-amber-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white font-light">
                        {faq.answer}
                      </div>
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
