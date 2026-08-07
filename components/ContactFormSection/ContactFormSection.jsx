"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";

const WA_NUMBER = "971542068414";
const PHONE_DISPLAY = "+971 54 206 8414";
const EMAIL = "enquiries@globalpropertygroup.co";
const OFFICE_ADDRESS = "#1109, Regal Tower, Business Bay - Dubai";
const MAPS_URL =
  "https://www.google.com/maps?q=Regal%20Tower%20Business%20Bay%20Dubai";

function WhatsAppGlyph({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.888 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-8 bg-[#E31E24]/70" />
      <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
        {children}
      </span>
      <span className="h-px w-8 bg-[#E31E24]/70" />
    </div>
  );
}

function ContactChannel({
  href,
  external,
  icon,
  label,
  value,
  detail,
  accentClass,
  delay,
}) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_32px_64px_-28px_rgba(0,0,0,0.18)]"
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accentClass}`}
        aria-hidden
      />

      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-inner transition-all duration-500 group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:shadow-lg">
        {icon}
      </div>

      <div className="relative min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
          {label}
        </p>
        <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
          {value}
        </p>
        <p className="mt-1 text-sm font-light text-slate-500">{detail}</p>
      </div>

      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-500 group-hover:border-[#E31E24]/30 group-hover:bg-[#E31E24] group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-900/20">
        <ArrowUpRight size={18} strokeWidth={2} />
      </div>
    </motion.a>
  );
}

const ContactFormSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-neutral-50 via-white to-neutral-50 px-5 py-24 md:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#E31E24]/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative min-h-112.5 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-[0_32px_80px_-32px_rgba(15,23,42,0.35)]"
          >
            <div className="absolute inset-x-0 top-0 z-10 bg-linear-to-b from-slate-950/80 via-slate-950/40 to-transparent px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                    Visit Our Office
                  </p>
                  <p className="mt-2 max-w-xs text-sm font-medium leading-relaxed text-white">
                    {OFFICE_ADDRESS}
                  </p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-[#E31E24] hover:border-[#E31E24]"
                  aria-label="Open location in Google Maps"
                >
                  <MapPin size={16} />
                </a>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps?q=Regal%20Tower%20Business%20Bay%20Dubai&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GPG Real Estate Location"
              className="h-full w-full grayscale-[20%] contrast-[1.05]"
            />

            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          {/* Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <SectionLabel>Direct Contact</SectionLabel>

            <h2 className="text-3xl font-light tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Connect with our{" "}
              <span className="font-semibold text-[#E31E24]">advisory team</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 md:text-[15px]">
              Speak directly with GPG&apos;s property specialists. We respond to WhatsApp
              and email enquiries with the same discretion and urgency reserved for our
              private clients.
            </p>

            <div className="mt-8 inline-flex w-max items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm">
              <Clock size={13} className="text-[#E31E24]" />
              Typical response within 6 hours
            </div>

            <div className="mt-10 space-y-4">
              <ContactChannel
                href={`https://wa.me/${WA_NUMBER}`}
                external
                label="WhatsApp"
                value={PHONE_DISPLAY}
                detail="Instant messaging with our consultants"
                delay={0.1}
                accentClass="bg-linear-to-r from-[#E31E24]/8 via-transparent to-transparent"
                icon={
                  <WhatsAppGlyph className="h-8 w-8 text-[#E31E24] transition-transform duration-500 group-hover:scale-110" />
                }
              />

              <ContactChannel
                href={`mailto:${EMAIL}`}
                label="Email"
                value={EMAIL}
                detail="For detailed enquiries and portfolio requests"
                delay={0.2}
                accentClass="bg-linear-to-r from-[#E31E24]/8 via-transparent to-transparent"
                icon={
                  <Mail
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#E31E24] transition-transform duration-500 group-hover:scale-110"
                  />
                }
              />
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-slate-200/80 pt-8">
              <span className="h-1 w-1 rounded-full bg-[#E31E24]" aria-hidden />
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400">
                G P G Global Real Estate Brokerage L.L.C
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
