"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize2, Phone, Mail } from "lucide-react";
import DeveloperIcon from "@/components/icons/DeveloperIcon";

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.888 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function ContactIconButton({ href, label, children, compact = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-full bg-[#E31E24] text-white transition-colors hover:bg-[#c81b20] ${
        compact ? "h-8 w-8" : "h-9 w-9"
      }`}
    >
      {children}
    </a>
  );
}

export default function LuxuryProjectCard({ project, compact = false, href }) {
  const priceLabel = project.priceDisplay ?? `From AED ${project.price}`;
  const inquiryText = `Hi, I'm interested in ${project.title} at ${project.location} (${priceLabel}).`;
  const waHref = `https://wa.me/971542068414?text=${encodeURIComponent(inquiryText)}`;
  const phoneHref = "tel:+971542068414";
  const emailHref = `mailto:enquiries@globalpropertygroup.co?subject=${encodeURIComponent(
    `Inquiry: ${project.title}`
  )}&body=${encodeURIComponent(inquiryText)}`;
  const hasSpecs = project.beds != null && project.baths != null && project.sqft != null;
  const detailHref = href === undefined ? `/luxury-properties/${project.id}` : href;

  const contactIcons = (
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
      <ContactIconButton href={phoneHref} label={`Call about ${project.title}`} compact={compact}>
        <Phone size={compact ? 14 : 16} />
      </ContactIconButton>
      <ContactIconButton href={emailHref} label={`Email about ${project.title}`} compact={compact}>
        <Mail size={compact ? 14 : 16} />
      </ContactIconButton>
      <ContactIconButton href={waHref} label={`WhatsApp about ${project.title}`} compact={compact}>
        <WhatsAppGlyph className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </ContactIconButton>
    </div>
  );

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {detailHref ? (
        <Link
          href={detailHref}
          className="absolute inset-0 z-0 rounded-xl"
          aria-label={`View details for ${project.title}`}
        />
      ) : null}

      <div className={`relative bg-slate-100 ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div
        className={`relative z-10 flex flex-1 flex-col pointer-events-none ${
          compact ? "gap-1.5 p-3" : "gap-2 p-4"
        } ${hasSpecs ? "" : compact ? "pb-12" : "pb-16"}`}
      >
        {project.propertyType ? (
          <p className="text-xs text-slate-500">{project.propertyType}</p>
        ) : null}

        {project.developer ? (
          <p className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <DeveloperIcon className="h-3.5 w-3.5 shrink-0" />
            <span>{project.developer}</span>
          </p>
        ) : null}

        {hasSpecs ? (
          <p
            className={`font-bold text-[#E31E24] ${compact ? "text-base" : "text-xl md:text-2xl"}`}
          >
            {priceLabel}
          </p>
        ) : null}

        <h3
          className={`font-bold leading-snug text-slate-900 ${
            compact ? "line-clamp-2 text-sm" : "text-base"
          }`}
        >
          {project.title}
        </h3>

        {project.subtitle ? (
          <p className="text-sm leading-relaxed text-slate-500">{project.subtitle}</p>
        ) : null}

        <p className="flex items-start gap-1.5 text-sm text-slate-500">
          <MapPin size={14} className="mt-0.5 shrink-0 text-slate-400" />
          <span className={compact ? "line-clamp-2" : undefined}>{project.location}</span>
        </p>

        {hasSpecs ? (
          <div
            className={`pointer-events-auto mt-auto border-t border-slate-100 ${
              compact ? "flex flex-col gap-2 pt-2" : "flex items-center justify-between gap-2 pt-3"
            }`}
          >
            <div
              className={`flex text-xs text-slate-600 ${
                compact
                  ? "flex-wrap items-center gap-x-2 gap-y-1"
                  : "min-w-0 flex-nowrap items-center gap-x-2"
              }`}
            >
              <span className="inline-flex shrink-0 items-center gap-1">
                <BedDouble size={14} className="text-slate-400" />
                {project.beds}
              </span>
              <span className="h-4 w-px shrink-0 bg-slate-200" aria-hidden />
              <span className="inline-flex shrink-0 items-center gap-1">
                <Bath size={14} className="text-slate-400" />
                {project.baths}
              </span>
              <span className="h-4 w-px shrink-0 bg-slate-200" aria-hidden />
              <span className="inline-flex shrink-0 items-center gap-1">
                <Maximize2 size={14} className="text-slate-400" />
                {project.sqft.toLocaleString()} {project.sqftLabel ?? "sqft"}
              </span>
            </div>
            <div className={compact ? "flex justify-end" : undefined}>{contactIcons}</div>
          </div>
        ) : (
          <>
            <p className="mt-1 text-sm font-bold text-[#E31E24]">From AED {project.price}</p>
            <div className="pointer-events-auto absolute bottom-4 right-4">{contactIcons}</div>
          </>
        )}
      </div>
    </article>
  );
}
