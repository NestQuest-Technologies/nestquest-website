import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiShield, FiLock, FiDatabase, FiUsers, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Privacy Policy | NestQuest Technologies Limited",
  description:
    "Privacy Policy for NestQuest Technologies Limited and the NestQuest mobile application. How we securely collect, protect, and manage your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-slate-950 text-white">
        {/* Banner */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <FiShield className="text-amber-400" />
              <span>Legal & Privacy Compliance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Last updated: June 2025 • NestQuest Technologies Limited
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white text-slate-900">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                <strong>NestQuest Technologies Limited</strong> ("NestQuest", "we", "our", or "us")
                respects your privacy and is deeply committed to protecting your personal information.
                This Privacy Policy explains how we collect, store, utilize, and safeguard your data
                when you use our website, mobile application, and related rental search services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600">
                  <FiDatabase className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                NestQuest only collects essential information required to deliver a seamless, secure,
                and personalized property search experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-2">
                <li>
                  <strong>Email Address:</strong> Used for account creation, communication, and secure
                  login verification.
                </li>
                <li>
                  <strong>Username & Full Name:</strong> Used to personalize your account and
                  facilitate direct communication between tenants and verified landlords.
                </li>
                <li>
                  <strong>Property Specifications (for Landlords):</strong> Information submitted by
                  property owners to list houses, including rental pricing, photos, and location
                  coordinates.
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4 italic">
                This information is collected when you create an account, sign in to the app, or list
                a property.
              </p>
            </div>

            {/* Section 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600">
                  <FiLock className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. How We Use Your Information
                </h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                The information collected is used strictly for legitimate business and operational
                purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 pl-2">
                <li>Creating, maintaining, and managing user accounts</li>
                <li>Authenticating users securely to protect against unauthorized access</li>
                <li>Improving app functionality, filter precision, and user experience</li>
                <li>
                  Enabling direct, transparent communication for rental inquiries and property
                  availability
                </li>
                <li>Sending critical account notifications and service updates</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600">
                  <FiShield className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Data Storage & Security
                </h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                All user data, authentication credentials, and property records are securely stored
                and managed using enterprise-grade <strong>Google Firebase</strong> cloud services.
                We implement strict cryptographic and administrative measures to protect your
                information against unauthorized access, loss, or disclosure.
              </p>
            </div>

            {/* Section 4 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600">
                  <FiUsers className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">4. Zero Data Sharing & Selling</h2>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                NestQuest Technologies Limited does not sell, trade, rent, or share your personal
                information with third-party advertisers or unauthorized external entities.
              </p>
            </div>

            {/* Section 5 & 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">5. Children's Privacy</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  NestQuest is not intended for use by children under the age of 13. We do not
                  knowingly collect or solicit personal information from children.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">6. Policy Updates</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  This Privacy Policy may be updated periodically to reflect evolving technology or
                  legal requirements. Any updates will be promptly posted on this page.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Questions Regarding Privacy?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                If you have questions, feedback, or concerns regarding this policy or how your data is
                handled, please reach out to our compliance team:
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-amber-400" />
                  <span>NestQuest Technologies Limited, Lusaka, Zambia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-amber-400" />
                  <a href="tel:+260775113623" className="hover:text-amber-300 transition-colors">
                    +260 775113623
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="text-amber-400" />
                  <a
                    href="mailto:chikondejunior@gmail.com"
                    className="hover:text-amber-300 transition-colors"
                  >
                    chikondejunior@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
