"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiShield, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/40 bg-slate-900 flex-shrink-0">
                <Image
                  src="/nestquest_logo.png"
                  alt="NestQuest Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-sans leading-tight">
                  <span className="text-amber-400">NEST</span>
                  <span className="text-sky-400">QUEST</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                  Technologies Ltd.
                </span>
              </div>
            </Link>

            <p className="text-amber-400/90 text-xs font-semibold tracking-wider uppercase">
              Unfolding Your Household Settlement
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-light">
              NestQuest Technologies Limited is a certified technology company dedicated to
              transforming the rental property search experience in Zambia through verified listings,
              landlord advertising, and secure cloud infrastructure.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Certified on June 17th, 2025 • Zambia Companies Act</span>
            </div>
          </div>

          {/* Platform Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              {[
                { name: "Verified Property Listings", href: "/#services" },
                { name: "Landlord Advertising", href: "/#services" },
                { name: "Advanced Search Filters", href: "/#services" },
                { name: "Availability Alerts", href: "/#services" },
                { name: "Direct Support", href: "/#services" },
                { name: "Firebase Cloud Security", href: "/#services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-amber-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              {[
                { name: "About NestQuest", href: "/about" },
                { name: "Target Markets", href: "/#audience" },
                { name: "Leadership Team", href: "/#team" },
                { name: "Listing Pricing", href: "/#pricing" },
                { name: "Frequently Asked Questions", href: "/#faq" },
                { name: "Contact & Inquiries", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-amber-300 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <div className="flex items-start space-x-2">
                <FiMapPin className="text-amber-400 text-sm mt-0.5 flex-shrink-0" />
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-start space-x-2">
                <FiPhone className="text-amber-400 text-sm mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+260775113623"
                  className="hover:text-amber-300 transition-colors"
                >
                  +260 775113623
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <FiMail className="text-amber-400 text-sm mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:chikondejunior@gmail.com"
                  className="hover:text-amber-300 transition-colors break-all"
                >
                  chikondejunior@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/privacy"
                  className="inline-flex items-center space-x-1.5 text-[11px] text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <FiShield className="text-amber-400" />
                  <span>Privacy Policy & Legal Compliance</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>Pioneering Innovative Solutions for the Modern World</span>
          </div>

          <div className="text-center sm:text-right">
            <p className="tracking-wide uppercase font-semibold text-[11px] text-slate-400">
              COPYRIGHT &copy; {new Date().getFullYear()} BY NESTQUEST TECHNOLOGIES LTD. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
