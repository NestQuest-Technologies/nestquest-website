"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import TeamGrid from "@/components/TeamGrid";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#040e1b] text-white relative overflow-hidden border-t border-[#163861]">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0070f3]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiLayers className="text-amber-400 text-sm" />
            <span>The People Behind NestQuest</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-white">
            Meet Our Leadership Team
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg font-light leading-relaxed">
            A multidisciplinary team bringing together technology, people, and
            business operations to build useful digital products.
          </p>
        </div>

        {/* Team cards: shared with the About page, data in src/data/team.ts */}
        <div className="mb-14 sm:mb-16">
          <TeamGrid />
        </div>

        {/* Partnership & Investor Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#040e1b] via-[#081a30] to-[#040e1b] border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Have a digital challenge to solve?
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            Talk to NestQuest about a web platform, mobile product, connected
            system, or another technology need. We’ll start by understanding
            what you’re trying to achieve.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-7 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center space-x-2"
            >
              <span>Start a conversation</span>
              <FiArrowRight />
            </Link>
            <Link
              href="/about"
              className="bg-[#081a30] hover:bg-[#0b223d] text-white border border-[#163861] px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
            >
              <span>Learn More About Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
