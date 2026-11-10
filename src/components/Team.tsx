"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiMail, FiArrowRight, FiShield } from "react-icons/fi";

const teamMembers = [
  {
    name: "Moses Chileshe",
    role: "Human Resource Manager",
    image: "/moses_chileshe.jpg",
    bio: "Moses is a dedicated Human Resource Manager at NestQuest, responsible for overseeing employee relations, talent development, partner alignment, and fostering our collaborative organizational culture.",
    focus: "People & Talent Strategy",
  },
  {
    name: "Aubrey Chilambwe",
    role: "Software Developer & Tech Lead",
    image: "/aubrey.jpg",
    bio: "Aubrey leads the technical development of the NestQuest platform, architecting our mobile applications, Firebase cloud backend, high-speed filtering engines, and user-focused digital experiences.",
    focus: "Product & Architecture",
  },
  {
    name: "Chiko Mwiinga",
    role: "Finance & Accounting Manager",
    image: "/chiko.jpg",
    bio: "Chiko oversees the company’s financial planning, budgeting, and commercial relationships, ensuring sustainable growth, investor confidence, and responsible resource allocation.",
    focus: "Finance & Commercial Growth",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#040e1b] text-white relative overflow-hidden border-t border-[#163861]">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0070f3]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FiShield className="text-amber-400 text-sm" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-white">
            Meet Our Leadership Team
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg font-light leading-relaxed">
            NestQuest Technologies Limited is steered by visionary founders committed to building
            transparent, world-class technology infrastructure for Zambia's property sector.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="bg-[#081a30]/95 border border-[#163861] rounded-3xl p-6 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Executive Portrait Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-[#163861] bg-[#040e1b] shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e1b] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 bg-[#081a30]/90 backdrop-blur-md border border-[#163861] text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {member.focus}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-sans text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#163861]/70 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-400">NestQuest Technologies</span>
                <div className="flex space-x-2">
                  <Link
                    href="/contact"
                    className="p-2 rounded-xl bg-[#0b223d] hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-colors"
                    title="Send message to team"
                  >
                    <FiMail />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership & Investor Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#040e1b] via-[#081a30] to-[#040e1b] border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Shaping the Future of PropTech Together
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            We invite investors, partners, and landlords to join us in revolutionizing the rental
            property search ecosystem. Together, let's create a more efficient, secure, and
            user-friendly experience for all.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center space-x-2"
            >
              <span>Partner With NestQuest</span>
              <FiArrowRight />
            </Link>
            <Link
              href="/about"
              className="bg-[#081a30] hover:bg-[#0b223d] text-white border border-[#163861] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Learn More About Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
