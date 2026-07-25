"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/teamMembers";

function ContactButton({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E31E24]/40 bg-[#E31E24]/75 text-white shadow-lg shadow-red-900/25 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#E31E24]/60 hover:bg-[#E31E24]/90 hover:shadow-xl hover:shadow-red-900/35"
    >
      {children}
    </a>
  );
}

function TeamMemberCard({ member, className = "" }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden border border-neutral-200/80 bg-white shadow-[0_20px_50px_-28px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1.5 hover:border-neutral-300/80 hover:shadow-[0_32px_64px_-28px_rgba(0,0,0,0.2)] ${className}`}
    >
      <div
        className={`relative aspect-[3/4] overflow-hidden ${member.imageContainerClassName ?? "bg-neutral-100"}`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] ${member.imageClassName ?? "object-cover object-top"}`}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-end gap-2 p-4">
          {member.phone && (
            <ContactButton href={`tel:${member.phone}`} label={`Call ${member.name}`}>
              <Phone size={16} strokeWidth={2} />
            </ContactButton>
          )}
          <ContactButton href={`mailto:${member.email}`} label={`Email ${member.name}`}>
            <Mail size={16} strokeWidth={2} />
          </ContactButton>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 pb-7 pt-6 text-center">
        <div className="mb-4 flex items-center gap-3" aria-hidden>
          <span className="h-px w-6 bg-[#E31E24]/70" />
          <span className="h-1 w-1 rounded-full bg-[#E31E24]" />
          <span className="h-px w-6 bg-[#E31E24]/70" />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-900 md:text-[15px]">
          {member.name}
        </h3>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E31E24] md:text-[11px]">
          {member.title}
        </p>
        <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px]">
          {member.languages}
        </p>
      </div>
    </article>
  );
}

export default function TeamMembers() {
  return (
    <section
      className="bg-linear-to-b from-neutral-50 via-white to-neutral-50 py-16 md:py-24"
      aria-label="Team members"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
          {TEAM_MEMBERS.map((member, index) => {
            const isSecondLast = index === TEAM_MEMBERS.length - 2;
            const isLast = index === TEAM_MEMBERS.length - 1;

            return (
              <TeamMemberCard
                key={member.id}
                member={member}
                className={
                  isSecondLast
                    ? "xl:col-start-2"
                    : isLast
                      ? "xl:col-start-3"
                      : ""
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
