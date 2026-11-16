"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiPenTool, FiCode, FiRefreshCw } from "react-icons/fi";

const steps = [
  {
    icon: FiMessageCircle,
    number: "01",
    title: "Understand",
    description:
      "We listen, ask questions, and get clear on the problem, users, and desired outcome.",
  },
  {
    icon: FiPenTool,
    number: "02",
    title: "Shape the solution",
    description:
      "We agree on the scope and map out an approach before development begins.",
  },
  {
    icon: FiCode,
    number: "03",
    title: "Design & build",
    description:
      "We develop the product in focused steps, sharing progress and gathering feedback.",
  },
  {
    icon: FiRefreshCw,
    number: "04",
    title: "Launch & improve",
    description:
      "We prepare for release and discuss the right next steps as your product grows.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Our approach
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Clear steps. Shared progress.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            Good technology starts with a good understanding of what needs to
            change. We work with you from the first conversation through
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl bg-[#0a2540] p-3 text-amber-300">
                  <step.icon className="text-xl" />
                </div>
                <span className="text-xs font-black tracking-widest text-slate-300">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
