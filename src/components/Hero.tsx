"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiLayers } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative lg:min-h-screen flex items-center overflow-hidden pt-32 pb-14 sm:pb-16 lg:pt-28 lg:pb-20 bg-[#040e1b] text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#040e1b] via-[#081a30] to-[#040e1b]" />
      <div className="absolute -top-32 right-0 h-[34rem] w-[34rem] rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Centered on phones/tablets, left-aligned beside the card on desktop */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-5 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-amber-400"
            >
              Certified Tech Company
            </motion.p>

            {/* Not animated: the headline is the LCP element and must be visible before JS hydrates. */}
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 sm:mb-6 leading-[1.12] sm:leading-tight text-balance">
              Building digital products that{" "}
              <span className="bg-gradient-to-r from-sky-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                move business forward.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[15px] sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              From web and mobile applications to cloud-backed systems, NestQuest
              helps turn practical ideas into useful technology for businesses
              in Zambia and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              <Link
                href="/#services"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-7 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/25 flex items-center justify-center space-x-2 group"
              >
                <FiLayers className="text-lg" />
                <span>Explore capabilities</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-[#081a30]/90 hover:bg-[#0b223d] text-white border border-[#163861] px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Discuss a project</span>
                <FiArrowRight className="text-sky-400" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-2 sm:-inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/15 via-sky-500/15 to-transparent blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-[#163861] shadow-2xl bg-[#081a30]">
              {/* aspect-video matches the 16:9 source image so the phone isn't cropped */}
              <div className="relative aspect-video w-full">
                <Image
                  src="/nestquest_app_preview.jpg"
                  alt="Preview of the My Home rental discovery app"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#081a30] to-transparent" />
                <span className="absolute top-3 left-3 sm:top-5 sm:left-5 rounded-full border border-white/20 bg-[#040e1b]/75 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur">
                  A NestQuest product
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
                  Rental discovery app
                </p>
                <h2 className="text-xl font-bold text-white mb-2">
                  My Home
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our own flagship digital product, built to make it easier for people to
                  discover rental homes and for landlords to present their
                  properties.
                </p>
                <Link
                  href="/#work"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Read the case study</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
