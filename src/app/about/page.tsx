import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamGrid from "@/components/TeamGrid";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCompass,
  FiEye,
  FiMapPin,
  FiPackage,
  FiTarget,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import {
  company,
  credentials,
  differentiators,
  facts,
  mission,
  story,
  vision,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About NestQuest | Zambian Technology Company",
  description:
    "Learn about NestQuest Technologies, a Lusaka-based technology company building digital products and software services for businesses in Zambia and beyond.",
};

const differentiatorIcons = [FiPackage, FiCompass, FiUsers, FiTool];

const eyebrow = "mb-3 text-xs font-bold uppercase tracking-[0.2em]";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-900">
        {/* Intro. Dark background runs behind the fixed header, so there's no light strip at the top on phones. */}
        <section className="relative overflow-hidden bg-[#040e1b] pb-14 pt-36 text-white sm:pb-20 lg:pt-40">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="container relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className={`${eyebrow} text-amber-300`}>About NestQuest</p>
              <h1 className="mb-6 text-balance text-[2.25rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Technology with purpose, built in Zambia.
              </h1>
              <p className="mx-auto max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-300 sm:text-lg">
                {company.legalName} is a Lusaka-based technology company
                building digital products and software services for businesses
                and communities.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200">
                <FiMapPin className="text-amber-400" />
                {company.location}
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col rounded-2xl border border-[#163861] bg-[#081a30]/80 px-4 py-5 text-center"
                >
                  <dt className="order-2 mt-1 text-xs leading-snug text-slate-400 sm:text-sm">
                    {fact.label}
                  </dt>
                  <dd className="order-1 text-2xl font-extrabold text-amber-400 sm:text-3xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto grid max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className={`${eyebrow} text-amber-700`}>Our story</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Why NestQuest exists
              </h2>
            </div>
            <div className="space-y-5 text-pretty leading-relaxed text-slate-600 sm:text-lg lg:col-span-8">
              {story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & vision */}
        <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto grid max-w-5xl gap-5 px-5 sm:px-6 md:grid-cols-2 md:gap-6">
            {[
              { icon: FiTarget, label: "Our mission", text: mission },
              { icon: FiEye, label: "Our vision", text: vision },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="mb-5 inline-flex rounded-xl bg-amber-100 p-3 text-amber-800">
                  <item.icon className="text-xl" />
                </div>
                <p className={`${eyebrow} text-amber-700`}>{item.label}</p>
                <p className="text-pretty text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* What makes us different */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className={`${eyebrow} text-amber-700`}>Why work with us</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                What makes NestQuest different
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {differentiators.map((item, i) => {
                const Icon = differentiatorIcons[i % differentiatorIcons.length];
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-6"
                  >
                    <div className="h-fit rounded-xl bg-[#0a2540] p-3 text-amber-400">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-lg font-bold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {credentials.length > 0 && (
              <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 sm:mt-12 sm:p-8">
                <h3 className="mb-4 text-lg font-bold">
                  Registration &amp; credentials
                </h3>
                <ul className="grid gap-3 md:grid-cols-3">
                  {credentials.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-amber-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#040e1b] py-16 text-white sm:py-20">
          <div className="container mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className={`${eyebrow} text-amber-300`}>
                The people behind the work
              </p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet the NestQuest team
              </h2>
            </div>
            <TeamGrid />
          </div>
        </section>

        {/* Closing call to action */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-5 text-center sm:px-6">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-slate-600 sm:text-lg">
              Tell us what you&apos;re trying to achieve. We&apos;ll start by
              listening, then help you work out the right next step.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:from-amber-400 hover:to-amber-500"
              >
                <span>Discuss a project</span>
                <FiArrowRight />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors hover:bg-slate-50"
              >
                <span>Explore capabilities</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
