"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCpu,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import Link from "next/link";

const capabilities = [
  {
    icon: FiLayout,
    category: "Web",
    title: "Websites & digital platforms",
    description:
      "From a strong company website to a custom web application, we create responsive experiences for customers and teams.",
  },
  {
    icon: FiSmartphone,
    category: "Mobile",
    title: "Mobile applications",
    description:
      "Plan and build mobile products that make services and information easier to access on the go.",
  },
  {
    icon: FiServer,
    category: "Cloud & backend",
    title: "Connected systems",
    description:
      "Develop the APIs, data flows, and backend foundations that help digital products work together.",
  },
  {
    icon: FiCpu,
    category: "Automation",
    title: "Workflow automation & AI",
    description:
      "Identify repetitive tasks and explore practical automation or AI integrations that support the way your team works.",
  },
  {
    icon: FiTrendingUp,
    category: "Product design",
    title: "UX & product design",
    description:
      "Turn early ideas into clear user journeys, prototypes, and product experiences ready for development.",
  },
  {
    icon: FiShield,
    category: "Engineering",
    title: "Modernisation & integration",
    description:
      "Improve an existing digital product, connect tools, or plan a measured move from manual processes to software.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#040e1b] text-white relative overflow-hidden">
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-3">
            What we do
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Digital services for real business needs
          </h2>
          <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed">
            Bring us a challenge, an early idea, or an existing product. We can
            help you work out the right next step and build toward it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group rounded-2xl border border-[#163861] bg-[#081a30]/90 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-amber-300 transition-colors group-hover:bg-amber-400 group-hover:text-slate-950">
                  <capability.icon className="text-2xl" />
                </div>
                <span className="rounded-full bg-[#0b223d] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {capability.category}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-amber-300">
                {capability.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {capability.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-t border-slate-800 pt-4 text-xs font-bold text-amber-400 transition-colors hover:text-amber-300"
              >
                <span>Talk to us</span>
                <FiArrowRight />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
