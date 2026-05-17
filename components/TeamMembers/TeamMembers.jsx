"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/teamMembers";

function TeamMemberCard({ member }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          title={member.email}
          className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#E31E24] text-white shadow-md transition-transform hover:scale-110 hover:bg-[#c81b20]"
        >
          <Mail size={18} strokeWidth={2} />
        </a>
      </div>
      <div className="pt-5 text-center md:pt-6 md:text-left">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#E31E24] md:text-base">
          {member.name}
        </h3>
        <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-800 md:text-xs">
          {member.title}
        </p>
        <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500 md:text-[10px]">
          {member.languages}
        </p>
      </div>
    </article>
  );
}

export default function TeamMembers() {
  return (
    <section className="bg-white py-16 md:py-24" aria-label="Team members">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
