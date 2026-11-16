"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiSmartphone } from "react-icons/fi";

const capabilities = [
  { icon: FiCode, label: "Web platforms" },
  { icon: FiSmartphone, label: "Mobile applications" },
  { icon: FiLayers, label: "Cloud & backend systems" },
  { icon: FiCpu, label: "Automation & AI" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#040e1b] py-8 border-y border-[#163861] text-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">
          Digital capabilities
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300"
            >
              <capability.icon className="text-amber-400 text-base flex-shrink-0" />
              <span>{capability.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
