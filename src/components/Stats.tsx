"use client";

import CountUp from "react-countup";
import { FiHome, FiUsers, FiAward, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: FiHome,
      prefix: "",
      count: 500,
      suffix: "+",
      label: "Verified Rental Listings",
      sub: "Across prime Lusaka suburbs",
    },
    {
      id: 2,
      icon: FiUsers,
      prefix: "",
      count: 5000,
      suffix: "+",
      label: "Active House Hunters",
      sub: "Finding homes without middleman fraud",
    },
    {
      id: 3,
      icon: FiAward,
      prefix: "",
      count: 100,
      suffix: "%",
      label: "Certified Compliance",
      sub: "Registered under Zambia Companies Act",
    },
    {
      id: 4,
      icon: FiZap,
      prefix: "",
      count: 3,
      suffix: "x",
      label: "Faster Placement Velocity",
      sub: "For landlords and verified tenants",
    },
  ];

  return (
    <section className="py-20 bg-[#040e1b] text-white relative overflow-hidden border-t border-[#163861]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span>Market Traction</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold font-sans text-white">
            Measurable Impact on Zambian PropTech
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center p-8 bg-[#081a30]/80 backdrop-blur-sm border border-[#163861] rounded-2xl hover:border-amber-400/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-3xl" />
              </div>
              <div className="text-4xl lg:text-5xl font-black font-sans text-white mb-2 flex items-center">
                <span>{stat.prefix}</span>
                <CountUp end={stat.count} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-slate-200 font-bold text-sm mb-1">{stat.label}</h3>
              <p className="text-slate-400 text-xs font-light">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
