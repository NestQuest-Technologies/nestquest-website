"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "/#services" },
    { name: "Our Approach", href: "/#approach" },
    { name: "Our Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#040e1b]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#163861]/80"
          : "bg-gradient-to-b from-[#040e1b]/95 via-[#040e1b]/80 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo & Exact Lockup */}
        <Link href="/" className="flex items-center space-x-3.5 group">
          <div className="relative w-16 h-16 rounded-full overflow-hidden p-1 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
            <Image
              src="/logo.png"
              alt="NestQuest Technologies Official Logo"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center text-xl sm:text-2xl font-black tracking-wide font-sans leading-none">
              <span className="text-white">NEST</span>
              <span className="text-amber-500">QUEST</span>
            </div>
            <div className="flex items-center space-x-1 mt-1">
              <span className="h-[1.5px] w-2.5 sm:w-3 bg-sky-400 inline-block" />
              <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase font-bold text-sky-400">
                TECHNOLOGIES
              </span>
              <span className="h-[1.5px] w-2.5 sm:w-3 bg-sky-400 inline-block" />
            </div>
          </div>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md shadow-amber-500/20 flex items-center space-x-1.5 group"
          >
            <span>Start a project</span>
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl text-white focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX className="text-amber-400" /> : <FiMenu className="text-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl border-b border-[#163861] shadow-2xl flex flex-col py-4 px-6 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2.5 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors border-b border-[#163861]/60"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full text-center block bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:from-amber-400 hover:to-amber-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
