"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiHome } from "react-icons/fi";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
            Our work
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Products built by NestQuest
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            We build our own products as well as digital solutions for business.
            My Home is our first showcase.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl lg:grid-cols-2"
        >
          <div className="relative min-h-[280px] bg-[#040e1b] sm:min-h-[420px]">
            <Image
              src="/nestquest_app_preview.jpg"
              alt="My Home app preview showing rental search in Lusaka"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-900">
              <FiHome />
              A NestQuest product · Rental discovery
            </span>
            <h3 className="mb-4 text-2xl font-extrabold sm:text-3xl">
              My Home
            </h3>
            <p className="mb-7 leading-relaxed text-slate-600">
              My Home brings rental discovery and property advertising into a
              digital experience designed for the Zambian market. It reflects
              how NestQuest applies product design and software development to
              a practical local challenge.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/my-home"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a2540] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#12385d]"
              >
                <span>Explore My Home</span>
                <FiArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors hover:bg-white"
              >
                <span>Build with NestQuest</span>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
