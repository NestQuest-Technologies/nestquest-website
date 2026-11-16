"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiMapPin, FiTarget } from "react-icons/fi";
import { company, differentiators, facts, mission } from "@/data/company";

// Homepage teaser for the About page. The full story, values and credentials live on /about;
// this section only gives the headline facts so the two don't repeat each other.
export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-3">
            About NestQuest
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance">
            Local understanding. Modern technology.
          </h2>
          <p className="text-slate-600 mt-5 text-[15px] md:text-lg leading-relaxed text-pretty">
            We are a Zambian technology company creating digital products and
            services for the way people and businesses work today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-[#040e1b] p-6 sm:p-8 text-white"
          >
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200">
                <FiMapPin className="text-amber-400" />
                {company.location}
              </p>
              <div className="mt-6 flex items-start gap-3">
                <FiTarget className="mt-1 shrink-0 text-xl text-amber-400" />
                <p className="text-lg font-semibold leading-relaxed text-pretty">
                  {mission}
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col rounded-2xl border border-[#163861] bg-[#081a30] px-4 py-4"
                  >
                    <dt className="order-2 mt-1 text-xs leading-snug text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-amber-400">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug mb-3">
              Why businesses work with us
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-pretty">
              We bring product thinking and software development together across
              web, mobile, and connected systems.
            </p>
            <ul className="space-y-4 mb-8">
              {differentiators.slice(0, 3).map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-amber-100 p-1.5 text-amber-800">
                    <FiCheck className="text-sm" />
                  </span>
                  <span>
                    <span className="block font-bold text-slate-900">{item.title}</span>
                    <span className="block text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-auto inline-flex w-full sm:w-auto items-center justify-center gap-2 self-start rounded-xl bg-[#0a2540] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#12385d]"
            >
              <span>More about NestQuest</span>
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
