import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiCompass,
  FiShield,
  FiHeart,
  FiUsers,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us | NestQuest Technologies Limited",
  description:
    "Learn about NestQuest Technologies Limited, certified according to the Zambia Companies Act, our mission, core values, and founding leadership team.",
};

const teamMembers = [
  {
    name: "Moses Chileshe",
    role: "Human Resource Manager",
    image: "/moses_chileshe.jpg",
    bio: "Moses is a dedicated Human Resource Manager at NestQuest, responsible for overseeing employee relations, talent development, and organizational culture.",
    focus: "People & Talent Development",
  },
  {
    name: "Aubrey Chilambwe",
    role: "Software Developer & Tech Lead",
    image: "/aubrey.jpg",
    bio: "Aubrey leads the technical development of the NestQuest platform, ensuring speed, reliability, and user-focused features.",
    focus: "Engineering & Architecture",
  },
  {
    name: "Chiko Mwiinga",
    role: "Finance & Accounting Manager",
    image: "/chiko.jpg",
    bio: "Chiko oversees the company’s finances and budgeting, ensuring sustainable growth and responsible spending.",
    focus: "Finance & Corporate Governance",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-slate-950 text-white">
        {/* Hero Banner */}
        <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <FiCheckCircle className="text-amber-400" />
              <span>Certified on June 17th, 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              About NestQuest Technologies Limited
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Certified according to the Zambia Companies Act and driven by an unwavering passion for
              harnessing technology to solve real-world rental property problems.
            </p>
          </div>
        </section>

        {/* Company Background & Story */}
        <section className="py-20 bg-white text-slate-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  Our Background & Certification
                </h2>
                <p className="text-slate-700 leading-relaxed font-normal text-base">
                  <strong>NestQuest Technologies Limited</strong> was founded by a visionary quartet:{" "}
                  <strong>Chiko Mwiinga</strong>, <strong>Aubrey Chilambwe</strong>, and{" "}
                  <strong>Moses Chileshe</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed font-light text-base">
                  Certified according to the <strong>Zambia Companies Act</strong> and operating in full
                  accordance with national laws and regulations, NestQuest ensures the highest
                  standards of quality, transparency, and integrity. Our commitment to compliance and
                  certification underscores our dedication to customer satisfaction and investor trust.
                </p>
                <p className="text-slate-600 leading-relaxed font-light text-base">
                  Our flagship product, the <strong>NestQuest mobile application</strong>, is designed
                  to revolutionize the rental property search experience—making it more efficient,
                  secure, and user-friendly for everyone in Zambia.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <Image
                    src="/lusaka_modern_property.jpg"
                    alt="NestQuest Modern Property in Lusaka"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Lusaka, Zambia
                    </p>
                    <p className="text-sm font-semibold">
                      Revolutionizing PropTech & Rental Living
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 mb-20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-slate-200 mb-6">
                "At NestQuest, our mission is to empower individuals and families to find their ideal
                rental properties with ease, while providing landlords with a platform to showcase
                their properties to a vast audience. We strive to build trust, foster growth, and
                create value through innovative technology solutions that exceed expectations."
              </p>
              <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold">
                <FiCheckCircle />
                <span>NestQuest Technologies Executive Mandate</span>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-20">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                  Market Strategy
                </h3>
                <h2 className="text-3xl font-extrabold text-slate-900">What Sets Us Apart</h2>
                <p className="text-slate-600 mt-2 text-sm font-light">
                  NestQuest is poised to capture a significant share of the growing rental market,
                  with a dedicated focus on:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Young Professionals and Students",
                    desc: "Seeking convenient and affordable rental options that meet their lifestyle needs and commuting routes.",
                  },
                  {
                    title: "Families",
                    desc: "Looking for suitable accommodation with ease, prioritizing comfort, safety, reliable amenities, and community.",
                  },
                  {
                    title: "Landlords",
                    desc: "Wanting to advertise their properties efficiently, maximizing visibility, reducing vacancies, and boosting rental income.",
                  },
                  {
                    title: "Business Personnel & Enterprises",
                    desc: "Seeking office spaces and commercial hubs that meet their operational needs, prioritizing functionality, accessibility, and productivity.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors"
                  >
                    <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                Executive Leadership
              </h3>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Meet Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-900">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                      {member.bio}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    <span>{member.focus}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Invitation */}
            <div className="bg-slate-950 border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Us in Shaping the Future
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                We invite investors, partners, and users to join us in shaping the future of rental
                property search. Together, let's create a more efficient, secure, and user-friendly
                experience for all. With NestQuest, the future of rental property search is brighter
                than ever.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
              >
                <span>Get in Touch</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
