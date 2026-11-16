import Image from "next/image";
import { team, type TeamMember } from "@/data/team";

// Portraits have transparent backgrounds, so every card gets the same backdrop
// and all five people line up at the same head height regardless of the original photo.
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full gap-4 rounded-2xl border border-[#163861] bg-[#081a30] p-3 transition-colors duration-300 hover:border-amber-400/60 sm:flex-col sm:gap-0 sm:p-0 sm:overflow-hidden">
      <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_50%_35%,#16406b_0%,#0b223d_45%,#06152a_100%)] sm:w-full sm:rounded-none">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-500/10 to-transparent" />
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}, ${member.role}`}
          fill
          sizes="(max-width: 640px) 96px, (max-width: 1024px) 45vw, 300px"
          className="object-cover object-top transition-transform duration-500 sm:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col pt-1 sm:p-5">
        <p className="mb-1 hidden text-[10px] font-bold uppercase tracking-wider text-amber-400 sm:block">
          {member.focus}
        </p>
        <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-0.5 text-[11px] font-bold uppercase leading-snug tracking-wider text-sky-300 sm:text-xs">
          {member.role}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-300 sm:mt-3 sm:text-sm">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

// Phones: compact horizontal rows. Tablet: 2 columns. Desktop: 3 columns.
// The last row is centered, so five cards sit as 3 + 2 rather than leaving a gap.
export default function TeamGrid() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 sm:gap-6">
      {team.map((member) => (
        <div
          key={member.image}
          className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <TeamCard member={member} />
        </div>
      ))}
    </div>
  );
}
