"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HeadingRedLines } from "@/components/SectionHeader/SectionHeader";

const WA_NUMBER = "971542068414";
const PHONE_DISPLAY = "+971 54 206 8414";
const EMAIL = "enquiries@globalpropertygroup.co";

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

function ContactCard({ href, external, onClick, icon, label, detail, value }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(onClick ? { onClick } : {})}
      className="group flex min-w-[220px] items-center gap-4 rounded-xl border border-red-100 bg-white px-5 py-4 shadow-sm transition-all hover:border-[#E31E24]/30 hover:shadow-md"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50 text-[#E31E24] transition-all group-hover:bg-[#E31E24] group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-slate-900">{value}</p>
        <p className="mt-0.5 text-xs text-slate-500">{detail}</p>
      </div>

      <ArrowUpRight
        size={16}
        className="shrink-0 text-slate-300 transition-all group-hover:text-[#E31E24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

const SubscriptionBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="border-y border-red-50 bg-white px-6 py-10 text-black md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
            {t("subscription.eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
            {t("subscription.title")}{" "}
            <span className="text-[#E31E24]">{t("subscription.accent")}</span>
          </h2>
          <HeadingRedLines align="left" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <p className="sr-only">{t("subscription.reachOut")}</p>

          <ContactCard
            href={`https://wa.me/${WA_NUMBER}`}
            external
            icon={<WhatsAppGlyph className="h-5 w-5" />}
            label={t("subscription.whatsappLabel")}
            value={PHONE_DISPLAY}
            detail={t("subscription.whatsappDetail")}
          />

          <ContactCard
            href={`mailto:${EMAIL}`}
            onClick={(event) => {
              event.preventDefault();
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`,
                "_blank",
                "noopener,noreferrer"
              );
            }}
            icon={<Mail size={20} strokeWidth={2} />}
            label={t("subscription.emailLabel")}
            value={EMAIL}
            detail={t("subscription.emailDetail")}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
