"use client";

import Link from "next/link";
import { Building2, Search } from "lucide-react";

export default function ViewAllProjectsCard({ href, title, subtitle, buttonLabel }) {
  return (
    <article className="view-all-projects-card">
      <div className="view-all-projects-card__icon" aria-hidden>
        <Building2 size={36} strokeWidth={1.5} className="view-all-projects-card__icon-building" />
        <Search size={22} strokeWidth={2} className="view-all-projects-card__icon-search" />
      </div>

      <h3 className="view-all-projects-card__title">{title}</h3>
      <p className="view-all-projects-card__subtitle">{subtitle}</p>

      <Link href={href} className="view-all-projects-card__button">
        {buttonLabel}
      </Link>
    </article>
  );
}
