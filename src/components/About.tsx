"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiCompass, FiShield, FiHeart, FiUsers, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const coreValues = [
  {
    icon: FiCompass,
    title: "Innovation",
    desc: "We cultivate a culture of creativity and innovation, constantly seeking new ways to improve our PropTech products and rental search services.",
  },
  {
    icon: FiShield,
    title: "Integrity",
    desc: "We operate with unwavering transparency, honesty, and integrity, building lasting trust with property seekers, homeowners, and real estate partners.",
  },
  {
    icon: FiHeart,
    title: "Customer-Centricity",
    desc: "We prioritize user experience above all, ensuring that our mobile and web solutions meet the evolving, real-life needs of our customers.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    desc: "We believe in the power of teamwork and strong partnerships, working together to achieve common goals and drive market-wide success.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiCheckCircle className="text-amber-600" />
            <span>Certified PropTech Pioneers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
            About NestQuest Technologies
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed font-light">
            Certified according to the Zambia Companies Act, we are driven by an unwavering passion
            for harnessing technology to solve real-world rental housing challenges.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Visual Property Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full h-[340px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 group">
              <Image
                src="/lusaka_modern_property.jpg"
                alt="Modern Zambian Rental Architecture"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 650px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floating Highlight Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-slate-950/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/10 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Official Certification
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                  Certified on June 17th, 2025 under the Zambia Companies Act. Transforming the rental
                  experience for tenants and landlords across Lusaka.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 leading-snug">
              Solving the Rental Struggle with Modern Technology
            </h3>

            <p className="text-base text-slate-700 leading-relaxed mb-6 font-normal">
              Founded by a quartet of visionary Zambian leaders—<strong>Chiko Mwiinga</strong>,{" "}
              <strong>Aubrey Chilambwe</strong>, and <strong>Moses Chileshe</strong>—NestQuest
              was born out of first-hand frustration with the disorganized, scam-prone rental housing
              search in Zambia.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8 font-normal">
              Our flagship product, the <strong>NestQuest mobile application</strong>, provides a
              transparent digital ecosystem where property hunters easily discover verified homes with
              accurate pricing, while property owners and landlords gain direct exposure to dependable
              tenants without middleman exploitation.
            </p>

            {/* Mission Highlight Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                Our Mission Statement
              </h4>
              <p className="text-sm text-slate-800 font-medium italic leading-relaxed">
                "At NestQuest, our mission is to empower individuals and families to find their ideal
                rental properties with ease, while providing landlords with a platform to showcase
                their properties to a vast audience. We strive to build trust, foster growth, and
                create value through innovative technology solutions that exceed expectations."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-[#0a2540] hover:bg-[#081a30] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider shadow-md"
              >
                <span>Read Full Company Story</span>
                <FiArrowRight className="text-sm" />
              </Link>
              <Link
                href="/#team"
                className="inline-flex items-center space-x-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 border border-amber-300 font-bold px-6 py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                <span>Meet the Founders</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Guiding Principles
            </h3>
            <p className="text-2xl md:text-3xl font-bold font-sans text-slate-900">
              Our Four Core Values
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors flex items-center justify-center mb-5 text-2xl">
                    <val.icon />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
