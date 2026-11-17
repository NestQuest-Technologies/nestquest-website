import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const capabilityLinks = [
  { name: "Web platforms", href: "/#services" },
  { name: "Mobile applications", href: "/#services" },
  { name: "Cloud & backend", href: "/#services" },
  { name: "Automation & AI", href: "/#services" },
];

const companyLinks = [
  { name: "Our approach", href: "/#approach" },
  { name: "Our work", href: "/#work" },
  { name: "My Home app", href: "/my-home" },
  { name: "About NestQuest", href: "/about" },
  { name: "Privacy policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full border border-amber-400/40 bg-slate-900">
                <Image
                  src="/nestquest_logo.png"
                  alt="NestQuest logo"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-xl font-black tracking-wide">
                <span className="text-white">NEST</span>
                <span className="text-amber-400">QUEST</span>
              </span>
            </Link>
            <p className="mb-5 max-w-md text-sm leading-relaxed text-slate-400">
              A Zambian technology company building digital products and
              software services for businesses and communities.
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">
              Local understanding. Modern technology.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-amber-300">
              Capabilities
            </h2>
            <ul className="space-y-3 text-sm text-slate-400">
              {capabilityLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-amber-300">
              Company
            </h2>
            <ul className="mb-5 space-y-3 text-sm text-slate-400">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-slate-800 pt-4 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <FiMapPin className="text-amber-400" />
                Lusaka, Zambia
              </p>
              <a href="tel:+260775113623" className="flex items-center gap-2 hover:text-white">
                <FiPhone className="text-amber-400" />
                +260 775 113 623
              </a>
              <a
                href="mailto:chikondejunior@gmail.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <FiMail className="text-amber-400" />
                Email NestQuest
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-center text-[11px] text-slate-500 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} NestQuest Technologies Limited</span>
          <span>Built in Zambia.</span>
        </div>
      </div>
    </footer>
  );
}
