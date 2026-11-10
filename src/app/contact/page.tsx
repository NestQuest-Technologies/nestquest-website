import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { FiCheckCircle, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Us | NestQuest Technologies Limited",
  description:
    "Reach out to NestQuest Technologies Limited in Lusaka, Zambia. Phone: +260 775113623, Email: chikondejunior@gmail.com. We assist tenants, landlords, and partners.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-slate-950 text-white">
        {/* Banner */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <FiCheckCircle className="text-amber-400" />
              <span>Dedicated Zambian Support</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Get in Touch with NestQuest
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Have questions or need help? We're here to assist you. Reach out to NestQuest for
              inquiries, property listings, partnerships, or support.
            </p>
          </div>
        </section>

        {/* Core Contact Component */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
