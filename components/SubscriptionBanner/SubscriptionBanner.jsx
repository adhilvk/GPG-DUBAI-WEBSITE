"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HeadingRedLines } from "@/components/SectionHeader/SectionHeader";

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
            {t("subscription.title")} <span className="text-[#E31E24]">{t("subscription.accent")}</span>
          </h2>
          <HeadingRedLines align="left" />
        </div>

        <div className="w-full flex-1 lg:max-w-2xl">
          <form className="mb-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder={t("subscription.namePlaceholder")}
              className="flex-1 rounded-lg border border-red-100 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20"
              required
            />
            <input
              type="email"
              placeholder={t("subscription.emailPlaceholder")}
              className="flex-1 rounded-lg border border-red-100 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-[#E31E24] px-10 py-3 font-bold text-white shadow-sm transition-all hover:bg-[#c81b20]"
            >
              {t("subscription.subscribe")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
