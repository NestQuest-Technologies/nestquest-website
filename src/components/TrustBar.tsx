"use client";

import { motion } from "framer-motion";
import { FiAward, FiShield, FiCheckCircle, FiMapPin, FiHome } from "react-icons/fi";

const locations = [
  "Kabulonga",
  "Woodlands",
  "Ibex Hill",
  "Roma",
  "Rhodes Park",
  "Olympia",
  "Avondale",
  "Mass Media",
];

const trustBadges = [
  { icon: FiAward, label: "Certified Zambia Companies Act (June 17, 2025)" },
  { icon: FiShield, label: "Zero-Fraud Verified Landlords" },
  { icon: FiHome, label: "Accurate Real-Time Property Availability" },
  { icon: FiCheckCircle, label: "Google Firebase Secure Cloud Storage" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#040e1b] py-10 border-y border-[#163861] text-white relative z-20">
      <div className="container mx-auto px-4">
        {/* Prime Locations Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-8 border-b border-[#163861]/80">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider flex-shrink-0">
            <FiMapPin className="text-base" />
            <span>Active Lusaka Neighborhoods:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {locations.map((loc, idx) => (
              <span
                key={idx}
                className="bg-[#081a30] border border-[#163861] text-slate-300 text-xs px-3.5 py-1.5 rounded-full hover:border-amber-400/60 hover:text-amber-300 transition-colors"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Core Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#081a30]/80 border border-[#163861]/80 hover:border-amber-400/50 transition-colors"
            >
              <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0">
                <badge.icon className="text-xl" />
              </div>
              <span className="text-xs font-semibold text-slate-300 leading-snug">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
