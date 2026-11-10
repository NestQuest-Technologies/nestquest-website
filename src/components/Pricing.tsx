"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiZap } from "react-icons/fi";
import Link from "next/link";

export default function Pricing() {
  const [currency, setCurrency] = useState<"zmw" | "usd">("zmw");

  const plans = [
    {
      name: "House Hunter",
      desc: "For young professionals, students, and families searching for their next home in Lusaka.",
      priceZMW: "Free",
      periodZMW: "always free for tenants",
      priceUSD: "Free",
      periodUSD: "always free for tenants",
      popular: false,
      features: [
        "Unlimited property searches across Lusaka",
        "Advanced filters (bedrooms, borehole, solar)",
        "Direct contact with verified landlords & managers",
        "Real-time property availability alerts",
        "Accurate map pins & neighborhood details",
        "Zero broker search commissions",
      ],
      ctaText: "Start Searching Now",
      ctaLink: "/#audience",
    },
    {
      name: "Landlord Standard",
      desc: "Ideal for individual landlords listing an apartment, cottage, or family house.",
      priceZMW: "K250",
      periodZMW: "per 30 days active",
      priceUSD: "$10",
      periodUSD: "per 30 days active",
      popular: true,
      badge: "Most Popular For Landlords",
      features: [
        "1 Verified property listing on NestQuest app",
        "Up to 10 high-resolution photos",
        "Accurate Google Maps GPS pin location",
        "Direct tenant inquiry notifications",
        "One-click 'Rented' status toggle",
        "Instant support from the NestQuest team",
      ],
      ctaText: "List Your Property",
      ctaLink: "/contact",
    },
    {
      name: "Featured Landlord Pro",
      desc: "Maximum visibility for high-value villas, multi-unit complexes, and real estate agencies.",
      priceZMW: "K650",
      periodZMW: "per listing with boost",
      priceUSD: "$25",
      periodUSD: "per listing with boost",
      popular: false,
      features: [
        "Top placement on NestQuest home feed",
        "Featured Golden Badge on listing card",
        "Unlimited high-resolution photos",
        "Priority tenant inquiry routing via WhatsApp",
        "Social media spotlight to 10,000+ seekers",
        "Dedicated NestQuest account assistance",
      ],
      ctaText: "Boost Your Listing",
      ctaLink: "/contact",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-slate-900 tracking-tight">
            Plans for Tenants & Landlords
          </h2>
          <p className="text-slate-600 mt-4 text-base font-light">
            Free for tenants. Fair, high-ROI advertising for homeowners and property managers.
          </p>
        </div>

        {/* Currency Switch */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <span
            className={`text-sm font-semibold cursor-pointer ${
              currency === "zmw" ? "text-slate-900 font-bold" : "text-slate-500"
            }`}
            onClick={() => setCurrency("zmw")}
          >
            Zambian Kwacha (ZMW)
          </span>
          <button
            onClick={() => setCurrency(currency === "zmw" ? "usd" : "zmw")}
            className="w-14 h-8 bg-slate-900 rounded-full p-1 relative transition-colors focus:outline-none shadow-inner"
            aria-label="Toggle currency"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-amber-400 rounded-full"
              style={{
                marginLeft: currency === "usd" ? "auto" : "0",
              }}
            />
          </button>
          <span
            className={`text-sm font-semibold cursor-pointer flex items-center space-x-1.5 ${
              currency === "usd" ? "text-slate-900 font-bold" : "text-slate-500"
            }`}
            onClick={() => setCurrency("usd")}
          >
            <span>US Dollar (USD)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-slate-950 text-white shadow-2xl scale-105 border-2 border-amber-400"
                  : "bg-white text-slate-900 shadow-md border border-slate-200 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider py-1 px-4 rounded-full flex items-center shadow-md">
                  <FiZap className="mr-1 text-sm" />
                  {plan.badge}
                </div>
              )}

              <div>
                <h3
                  className={`text-2xl font-bold font-sans mb-2 ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs mb-6 leading-relaxed font-light ${
                    plan.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mb-8 pb-6 border-b border-slate-200/40">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold font-sans">
                      {currency === "zmw" ? plan.priceZMW : plan.priceUSD}
                    </span>
                    <span
                      className={`text-xs ml-2 ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      / {currency === "zmw" ? plan.periodZMW : plan.periodUSD}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      plan.popular ? "text-amber-400" : "text-slate-900"
                    }`}
                  >
                    What's Included:
                  </p>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start text-xs leading-relaxed">
                      <FiCheck
                        className={`mr-2.5 text-base flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-amber-400" : "text-amber-600"
                        }`}
                      />
                      <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <FiArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
