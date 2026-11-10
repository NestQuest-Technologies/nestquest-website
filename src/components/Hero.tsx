"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiMapPin,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#040e1b] text-white"
    >
      {/* Background Ambience & Lighting matching new logo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040e1b] via-[#081a30]/90 to-[#040e1b] z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/lusaka_modern_property.jpg')",
        }}
      />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-[#0070f3]/15 rounded-full blur-[140px] pointer-events-none z-10" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 text-left">
            {/* Certification Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/15 to-[#0070f3]/15 border border-amber-500/30 rounded-full py-1.5 px-4 mb-6 text-xs sm:text-sm text-slate-200 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-semibold text-amber-300">Certified June 17, 2025</span>
              <span className="text-slate-400">•</span>
              <span className="text-sky-300">Zambia Companies Act</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
            >
              Pioneering Innovative Solutions for the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Modern World
              </span>
            </motion.h1>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2 mb-5"
            >
              <span className="w-8 h-[2px] bg-amber-400 inline-block" />
              <p className="text-base sm:text-lg font-bold text-amber-400 tracking-wide uppercase">
                Unfolding Your Household Settlement
              </p>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light"
            >
              <strong className="text-white font-semibold">NestQuest Technologies Limited</strong> is a
              trailblazing Zambian PropTech enterprise engineered to transform rental property discovery.
              We eliminate ghost listings, stop viewing scams, and connect verified tenants with top
              landlords across Lusaka with total confidence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/#services"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-7 py-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center justify-center space-x-2 group"
              >
                <FiSearch className="text-lg" />
                <span>Explore Platform</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-[#081a30]/90 hover:bg-[#0b223d] text-white border border-[#163861] px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
              >
                <FiSmartphone className="text-lg text-sky-400" />
                <span>List Your Property</span>
              </Link>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#163861]/80 text-xs text-slate-300"
            >
              <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-amber-400 text-base flex-shrink-0" />
                <span>Verified Listings Only</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiShield className="text-sky-400 text-base flex-shrink-0" />
                <span>Secure Google Firebase</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-amber-400 text-base flex-shrink-0" />
                <span>Lusaka Suburb Coverage</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Mockup Showcase with New Logo Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-[#0070f3]/20 to-transparent rounded-3xl blur-2xl transform rotate-3" />

            {/* Card Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-[#163861] shadow-2xl bg-[#081a30]/95 backdrop-blur-xl group">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/nestquest_app_preview.jpg"
                  alt="NestQuest Mobile Application Mockup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040e1b] via-[#040e1b]/20 to-transparent" />
              </div>

              {/* Floating Logo Badge on Mockup */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white/40 flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/nestquest_new_logo.jpg"
                    alt="NestQuest Brand Mark"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col pr-1">
                  <span className="text-[10px] font-black leading-none text-[#0a2540]">
                    NEST<span className="text-amber-500">QUEST</span>
                  </span>
                  <span className="text-[7px] font-bold tracking-wider text-sky-600">
                    OFFICIAL APP
                  </span>
                </div>
              </div>

              {/* Float Overlay Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Flagship Mobile Platform
                    </span>
                  </div>
                  <span className="text-xs bg-[#0b223d] text-slate-300 px-2.5 py-1 rounded-full border border-[#163861]">
                    iOS & Android
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Smart Rental Search & Landlord Portal
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time occupancy alerts, verified borehole & solar backup filters, map pins, and
                  direct support in one modern app.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
