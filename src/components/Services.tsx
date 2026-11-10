"use client";

import { motion } from "framer-motion";
import {
  FiHome,
  FiShare2,
  FiMessageSquare,
  FiSliders,
  FiBell,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

export default function Services() {
  const offerings = [
    {
      id: 1,
      icon: FiHome,
      badge: "Comprehensive",
      title: "Verified Property Listings",
      desc: "An extensive, verified database of rental properties in Lusaka and beyond, complete with high-resolution photos, verified prices, and detailed amenities.",
    },
    {
      id: 2,
      icon: FiShare2,
      badge: "Landlords",
      title: "Advertisement Platform",
      desc: "Landlords and property managers can list their properties on the app for a transparent fee, increasing their reach and securing reliable tenants quickly.",
    },
    {
      id: 3,
      icon: FiMessageSquare,
      badge: "Support",
      title: "Direct In-App Contact",
      desc: "Direct communication with our support team and verified property managers for inquiries, questions, or assistance right through the app interface.",
    },
    {
      id: 4,
      icon: FiSliders,
      badge: "Smart Search",
      title: "Advanced Filtering Options",
      desc: "Search properties by price range (ZMW/USD), Lusaka suburb, bedroom counts, borehole water, solar power backup, and security features.",
    },
    {
      id: 5,
      icon: FiBell,
      badge: "Real-Time",
      title: "Availability Notifications",
      desc: "The app clearly signals in real time when a house has been rented, ensuring house hunters have accurate information and never waste time on taken units.",
    },
    {
      id: 6,
      icon: FiShield,
      badge: "Security",
      title: "Google Firebase Cloud Security",
      desc: "All user accounts, authentication tokens, and listings are securely managed using industry-standard Google Firebase services with strict privacy compliance.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#040e1b] text-white relative overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>PropTech Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-white">
            What We Offer
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg font-light leading-relaxed">
            Our NestQuest platform is engineered to eliminate friction in the rental property search
            experience, offering state-of-the-art features for both house hunters and landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-[#081a30]/90 border border-[#163861] rounded-2xl p-8 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300">
                    <offering.icon className="text-2xl" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-300 transition-colors bg-[#0b223d] px-2.5 py-1 rounded-md">
                    {offering.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 font-sans text-white group-hover:text-amber-300 transition-colors">
                  {offering.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  {offering.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1.5"
                >
                  <span>Inquire about this feature</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
