"use client";

import { useState } from "react";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiShield,
  FiMessageSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [userRole, setUserRole] = useState("House Hunter / Tenant");

  const roles = [
    "House Hunter / Tenant",
    "Landlord / Property Owner",
    "Real Estate Agency",
    "Investor / Partner",
    "Other Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiMessageSquare className="text-amber-400" />
            <span>Connect With NestQuest</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white tracking-tight">
            Contact Our Team
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg font-light leading-relaxed">
            Have questions about our mobile app, want to list a property, or explore partnership
            opportunities? We are here to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl"
            >
              <h3 className="text-xl font-bold font-sans mb-2 text-white">
                Visit or Reach Us
              </h3>
              <p className="text-xs text-slate-400 mb-8 font-light">
                Direct communication with the NestQuest Technologies team in Lusaka.
              </p>

              <div className="space-y-6 text-sm">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 flex-shrink-0">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5">Headquarters</h4>
                    <p className="text-slate-300">Lusaka, Zambia</p>
                    <p className="text-slate-500 text-xs mt-0.5">Zambia Companies Act Certified</p>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 flex-shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5">Direct Line & WhatsApp</h4>
                    <a
                      href="tel:+260775113623"
                      className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                    >
                      +260 775113623
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">Mon–Sat: 8:00 AM – 6:00 PM CAT</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400 flex-shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5">Official Email</h4>
                    <a
                      href="mailto:chikondejunior@gmail.com"
                      className="text-slate-300 hover:text-amber-400 transition-colors break-all"
                    >
                      chikondejunior@gmail.com
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">Fast inquiries & support response</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/260775113623"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:w-2/3"
          >
            <div className="bg-slate-950 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-800">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm mb-6 font-light">
                    Thank you for reaching out to NestQuest Technologies. A representative from our team
                    will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-amber-400 font-bold hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Role / Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      I am reaching out as a:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((r) => (
                        <button
                          type="button"
                          key={r}
                          onClick={() => setUserRole(r)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                            userRole === r
                              ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                              : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Chileshe Mwape"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-amber-400 text-white text-sm placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-amber-400 text-white text-sm placeholder-slate-500"
                      />
                    </div>
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Phone / WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+260 97X XXX XXX"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-amber-400 text-white text-sm placeholder-slate-500"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      How can we help you? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about the property you want to find, list, or partner on..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-amber-400 text-white text-sm placeholder-slate-500"
                    />
                  </div>

                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <FiSend className="text-base" />
                    </button>
                    <p className="text-xs text-slate-400 mt-4 flex items-center space-x-1.5">
                      <FiShield className="text-amber-400 text-base flex-shrink-0" />
                      <span>We respect your privacy. User data is never sold or shared.</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
