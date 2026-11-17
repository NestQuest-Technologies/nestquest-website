import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  FiArrowRight,
  FiBell,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiHome,
  FiImage,
  FiKey,
  FiLock,
  FiMap,
  FiMessageCircle,
  FiSearch,
  FiSliders,
} from "react-icons/fi";
import {
  faqs,
  features,
  landlordSteps,
  myHome,
  tenantSteps,
  trustPoints,
} from "@/data/myhome";

export const metadata: Metadata = {
  title: "My Home | Rental Discovery App for Zambia | NestQuest",
  description:
    "My Home is a NestQuest app for finding rental homes in Zambia: browse listings, compare properties, and contact verified landlords directly.",
  openGraph: {
    title: "My Home: find your next rental in Zambia",
    description: myHome.summary,
    images: [{ url: myHome.previewImage, alt: myHome.previewAlt }],
  },
};

const featureIcons = [FiMap, FiSliders, FiCheckCircle, FiMessageCircle, FiImage, FiLock];
const eyebrow = "mb-3 text-xs font-bold uppercase tracking-[0.2em]";
const isLive = Boolean(myHome.appStoreUrl || myHome.playStoreUrl);

// Store buttons when the app is live; otherwise a "Get notified" button to the contact page.
function GetTheApp({ align = "center" }: { align?: "center" | "start" }) {
  const justify = align === "center" ? "justify-center" : "justify-center lg:justify-start";
  const storeButton =
    "inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-left text-white transition-colors hover:bg-white/15";

  if (!isLive) {
    return (
      <div className={`mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap ${justify} lg:mx-0`}>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:from-amber-400 hover:to-amber-500"
        >
          <FiBell />
          <span>Get notified at launch</span>
        </Link>
        <span className="inline-flex items-center justify-center whitespace-nowrap px-2 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 sm:py-4">
          <FaApple className="mr-1.5 text-sm" />
          <FaGooglePlay className="mr-2 text-xs" />
          Coming soon to Android &amp; iPhone
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${justify}`}>
      {myHome.playStoreUrl && (
        <a href={myHome.playStoreUrl} target="_blank" rel="noopener noreferrer" className={storeButton}>
          <FaGooglePlay className="text-2xl" />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wider text-slate-300">Get it on</span>
            <span className="block text-base font-bold">Google Play</span>
          </span>
        </a>
      )}
      {myHome.appStoreUrl && (
        <a href={myHome.appStoreUrl} target="_blank" rel="noopener noreferrer" className={storeButton}>
          <FaApple className="text-2xl" />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wider text-slate-300">Download on the</span>
            <span className="block text-base font-bold">App Store</span>
          </span>
        </a>
      )}
    </div>
  );
}

function Steps({
  icon: Icon,
  label,
  title,
  steps,
}: {
  icon: typeof FiSearch;
  label: string;
  title: string;
  steps: { title: string; description: string }[];
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-[#0a2540] p-3 text-amber-400">
          <Icon className="text-xl" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">{label}</p>
          <h3 className="text-xl font-extrabold">{title}</h3>
        </div>
      </div>
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-black text-amber-800">
              {i + 1}
            </span>
            <span>
              <span className="block font-bold text-slate-900">{step.title}</span>
              <span className="block text-sm leading-relaxed text-slate-600">{step.description}</span>
            </span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function MyHomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-slate-900">
        {/* Hero. Dark background runs behind the fixed header. */}
        <section className="relative overflow-hidden bg-[#040e1b] pb-16 pt-32 text-white sm:pb-20 lg:pt-36">
          <div className="absolute -top-32 right-0 h-[34rem] w-[34rem] rounded-full bg-sky-500/10 blur-[140px]" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="text-center lg:col-span-6 lg:text-left">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                <FiHome />
                A NestQuest product
              </p>
              <h1 className="mb-5 text-balance text-[2.25rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                {myHome.tagline}
              </h1>
              <p className="mx-auto mb-8 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
                {myHome.summary}
              </p>
              <GetTheApp align="start" />
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-amber-500/15 via-sky-500/15 to-transparent blur-2xl sm:-inset-4" />
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-[#163861] shadow-2xl">
                <Image
                  src={myHome.previewImage}
                  alt={myHome.previewAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className={`${eyebrow} text-amber-700`}>How it works</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Built for both sides of renting
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <Steps icon={FiSearch} label="For tenants" title="Find a place" steps={tenantSteps} />
              <Steps icon={FiKey} label="For landlords" title="Fill a vacancy" steps={landlordSteps} />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <p className={`${eyebrow} text-amber-700`}>Features</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Everything you need to rent with confidence
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {features.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <article key={feature.title} className="rounded-2xl border border-slate-200 p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-800">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mb-1.5 text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="relative overflow-hidden bg-[#040e1b] py-16 text-white sm:py-20">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
          <div className="container relative z-10 mx-auto grid max-w-5xl items-center gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <p className={`${eyebrow} text-amber-300`}>Trust &amp; safety</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Renting works better when you can trust who&apos;s on the other side
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-300">
                Read how we handle your information in our{" "}
                <Link href="/privacy" className="font-semibold text-amber-400 underline-offset-4 hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <ul className="grid gap-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-[#163861] bg-[#081a30] p-4"
                >
                  <span className="mt-0.5 rounded-full bg-amber-500/15 p-1.5 text-amber-400">
                    <FiCheck className="text-sm" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-200 sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ: native <details>, so it works without JavaScript */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-5 sm:px-6">
            <div className="mb-10 text-center">
              <p className={`${eyebrow} text-amber-700`}>FAQ</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Questions about My Home
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200 bg-white open:bg-slate-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <FiChevronDown className="shrink-0 text-amber-700 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing: get the app, plus a nudge for businesses */}
        <section className="pb-16 sm:pb-20">
          <div className="container mx-auto max-w-5xl px-5 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#040e1b] px-6 py-12 text-center text-white sm:px-12">
              <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
              <div className="relative">
                <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {isLive ? "Get My Home today" : "Be first to know when My Home launches"}
                </h2>
                <p className="mx-auto mb-8 mt-4 max-w-xl text-pretty leading-relaxed text-slate-300">
                  {isLive
                    ? "Download the app and start your search, or list your property in minutes."
                    : "Leave your details and we'll tell you as soon as the app is available."}
                </p>
                <GetTheApp />
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-slate-600">
              My Home is built by NestQuest Technologies.{" "}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800"
              >
                Need a product like this for your business? <FiArrowRight />
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
