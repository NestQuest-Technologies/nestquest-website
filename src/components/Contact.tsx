import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

const contactOptions = [
  {
    icon: FiMail,
    title: "Email",
    detail: "chikondejunior@gmail.com",
    href: "mailto:chikondejunior@gmail.com",
  },
  {
    icon: FiPhone,
    title: "Call",
    detail: "+260 775 113 623",
    href: "tel:+260775113623",
  },
  {
    icon: FiMessageCircle,
    title: "WhatsApp",
    detail: "Message our team",
    href: "https://wa.me/260775113623",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#163861] bg-slate-900 py-24 text-white"
    >
      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            Let’s talk
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            Tell us what you’re working on or what you’d like to improve. We’ll
            start with a conversation.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target={option.title === "WhatsApp" ? "_blank" : undefined}
              rel={option.title === "WhatsApp" ? "noreferrer" : undefined}
              className="group rounded-2xl border border-slate-700 bg-slate-950/80 p-6 transition-colors hover:border-amber-400/60"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-xl bg-amber-500/10 p-3 text-xl text-amber-300">
                  <option.icon />
                </span>
                <FiArrowUpRight className="text-slate-500 transition-colors group-hover:text-amber-300" />
              </div>
              <h3 className="mb-1 font-bold text-white">{option.title}</h3>
              <p className="break-all text-sm text-slate-400">{option.detail}</p>
            </a>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
          <FiMapPin className="text-amber-400" />
          <span>Lusaka, Zambia</span>
        </p>
      </div>
    </section>
  );
}
