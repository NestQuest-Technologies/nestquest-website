"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  FiExternalLink,
  FiMapPin,
  FiCheckCircle,
  FiUsers,
  FiBriefcase,
  FiHome,
  FiSmile,
} from "react-icons/fi";

const targetMarkets = [
  {
    icon: FiSmile,
    title: "Young Professionals & Students",
    desc: "Seeking convenient and affordable rental options that match modern lifestyle needs, rapid transit, and high-speed fiber connectivity.",
    badge: "Affordable & Trendy",
  },
  {
    icon: FiHome,
    title: "Families",
    desc: "Looking for suitable accommodation with ease, prioritizing safety, private yards, reliable borehole water, solar backup, and quiet neighborhoods.",
    badge: "Comfort & Security",
  },
  {
    icon: FiCheckCircle,
    title: "Landlords & Property Managers",
    desc: "Wanting to advertise their properties efficiently, maximize visibility, eliminate vacant months, and collect steady rental income with vetted tenants.",
    badge: "Maximum Visibility",
  },
  {
    icon: FiBriefcase,
    title: "Business Personnel & Corporates",
    desc: "Seeking office spaces and executive serviced apartments prioritizing functionality, prime accessibility, and productivity.",
    badge: "Commercial & Executive",
  },
];

const sampleProperties = [
  {
    id: 1,
    src: "/lusaka_modern_property.jpg",
    title: "Executive 4-Bedroom Villa with Solar Backup",
    category: "Families",
    location: "Ibex Hill, Lusaka",
    price: "ZMW 35,000 / mo",
    desc: "Paved driveway, manicured garden, 24/7 solar inverter, borehole water, and electric perimeter security.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    title: "Luxury Modern Apartment Suite",
    category: "Young Professionals",
    location: "Kabulonga, Lusaka",
    price: "ZMW 18,500 / mo",
    desc: "Fully fitted European kitchen, high-speed WiFi ready, backup generator, gym, and swimming pool access.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    title: "Prime Commercial Corporate Office",
    category: "Business",
    location: "Rhodes Park, Lusaka",
    price: "ZMW 42,000 / mo",
    desc: "Modern open-plan office layout, dedicated parking bays, CCTV monitoring, and fiber optic backbone.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Serene 3-Bedroom Gated Townhouse",
    category: "Families",
    location: "Woodlands, Lusaka",
    price: "ZMW 24,000 / mo",
    desc: "Spacious master en-suite, secure family complex, children's play area, and proximity to shopping malls.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    title: "Modern Loft Studio for Graduates",
    category: "Young Professionals",
    location: "Olympia, Lusaka",
    price: "ZMW 9,500 / mo",
    desc: "Compact, stylish, fully furnished studio with prepaid ZESCO meter, borehole water, and access to taxi hubs.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title: "Turnkey Co-Working & Executive Suite",
    category: "Business",
    location: "Mass Media, Lusaka",
    price: "ZMW 28,000 / mo",
    desc: "Boardroom facilities, secure reception, air conditioning, and seamless access to central diplomatic zones.",
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Young Professionals", "Families", "Business"];
  const filteredProperties =
    filter === "All"
      ? sampleProperties
      : sampleProperties.filter((item) => item.category === filter);

  const slides = sampleProperties.map((item) => ({ src: item.src }));

  return (
    <section id="audience" className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiUsers className="text-sky-600" />
            <span>Target Audiences & Market Fit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg font-light leading-relaxed">
            NestQuest is poised to capture a significant share of the rapidly growing Zambian rental
            market by delivering tailored, zero-friction solutions for distinct community needs.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {targetMarkets.map((market, idx) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-800 border border-amber-300/40 px-2.5 py-1 rounded-full inline-block mb-4">
                  {market.badge}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xl mb-4">
                  <market.icon />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{market.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{market.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Sample Property Listings Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 pt-10 border-t border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            Live Database Preview
          </h3>
          <p className="text-2xl md:text-3xl font-bold font-sans text-slate-900">
            Featured Verified Properties in Lusaka
          </p>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Every property listed on the NestQuest mobile app is inspected and verified.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-slate-100"
                  onClick={() => setIndex(sampleProperties.findIndex((p) => p.id === item.id))}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center space-x-1">
                      <span>View Photos</span>
                      <FiExternalLink className="text-xs" />
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded-full shadow">
                    VERIFIED
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
                        <FiMapPin className="text-amber-500 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        {item.price}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-sans mb-2 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </section>
  );
}
