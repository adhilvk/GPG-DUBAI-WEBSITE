"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const ACCENT = "#C8102E";
const ACCENT_SOFT = "#C8102E15";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border border-neutral-200/80 bg-neutral-50/50 rounded-xl overflow-hidden transition-shadow"
      style={{ boxShadow: isOpen ? `0 0 0 1px ${ACCENT_SOFT}` : undefined }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium tracking-wide text-neutral-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: isOpen ? ACCENT : undefined }}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 text-[15px] leading-relaxed text-neutral-600 border-t border-neutral-100 bg-white">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

function SectionImage({ src, alt }) {
  return (
    <div className="relative my-8 aspect-[21/9] min-h-[180px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.1)]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, transparent 50%)` }}
      />
    </div>
  );
}

const recentArticles = [
  {
    title: "How to Buy Off-Plan Property in Dubai",
    href: "/HOWTOBUYOFFPLAN",
    image: "/images/palmcentral.jpg",
  },
  {
    title: "Guide to Reselling Off-Plan Property in Dubai",
    href: "/HOWTORESELL",
    image: "/images/grandpolo.webp",
  },
  {
    title: "Off Plan Properties in Dubai: A Beginner's Guide",
    href: "/guides",
    image: "/images/heightsbyemaar.webp",
  },
];

const relatedPosts = [
  {
    title: "How to Buy Off-Plan Property in Dubai",
    href: "/HOWTOBUYOFFPLAN",
    image: "/images/palmcentral.jpg",
  },
  {
    title: "Guide to Reselling Off-Plan Property in Dubai",
    href: "/HOWTORESELL",
    image: "/images/Riverside.jpg",
  },
  {
    title: "Off Plan Properties in Dubai: A Beginner's Guide",
    href: "/guides",
    image: "/images/heightsbyemaar.webp",
  },
];

const faqs = [
  {
    q: "What is a good rental yield in Dubai?",
    a: "Yields vary by product and corridor—apartments in high-liquidity districts often benchmark differently from villas or off-plan pre-handover assets. Model net yield after service charges, vacancy, and management rather than gross marketing figures.",
  },
  {
    q: "Should I invest off-plan or ready property?",
    a: "Off-plan can offer payment-plan efficiency and earlier basis; ready stock delivers immediate income and tangible inspection. Many institutional portfolios blend both based on cash-flow needs and cycle positioning.",
  },
  {
    q: "Can foreigners own property in Dubai?",
    a: "Freehold ownership is available to foreign nationals in designated zones. Your broker should confirm title type, developer registration, and any community-specific rules before booking.",
  },
  {
    q: "How do I finance an investment purchase?",
    a: "UAE banks offer mortgages for eligible residents and non-residents subject to LTV caps, stress tests, and property eligibility. Off-plan financing has distinct policies—coordinate early with your broker and mortgage adviser.",
  },
];

export default function HowToInvestGuide() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-neutral-900">
      <div className="h-[3px] w-full" style={{ backgroundColor: ACCENT }} aria-hidden />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pb-28">
        <nav className="mb-12 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
          <Link href="/" className="hover:text-neutral-600 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <Link href="/guides" className="hover:text-neutral-600 transition-colors">
            Guides
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <span style={{ color: ACCENT }}>How to Invest</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <article className="lg:col-span-8">
            <header className="mb-10">
              <p
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em]"
                style={{ color: ACCENT }}
              >
                Investor guide
              </p>
              <h1 className="font-serif text-[2.15rem] font-normal leading-[1.15] tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.1]">
                How to Invest in Dubai Real Estate
              </h1>
              <time
                dateTime="2024-07-08"
                className="mt-6 block text-sm font-medium tracking-wide text-neutral-500"
              >
                July 8, 2024
              </time>
            </header>

            <div className="relative mb-12 aspect-[21/9] min-h-[200px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/palmcentral.jpg"
                alt="Dubai Marina skyline at night"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, transparent 55%)`,
                }}
              />
            </div>

            <div className="max-w-none font-serif text-[17px] leading-[1.75] text-neutral-700">
              <p className="text-lg leading-relaxed text-neutral-800">
                <span className="font-serif font-normal" style={{ color: ACCENT }}>
                  Dubai{" "}
                </span>
                continues to attract global capital seeking yield, currency stability, and long-term
                urban growth. Whether you are building a first investment unit or scaling an
                institutional portfolio, success depends on corridor selection, product type, and
                disciplined underwriting—not headlines alone.
              </p>
              <p className="mb-6">
                This guide outlines how to approach Dubai real estate as an investor: market context,
                return drivers, portfolio construction, and risk controls—without the noise of
                speculative marketing.
              </p>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Why Dubai remains an investment destination
                </span>
              </h2>
              <p className="mb-4">
                Population growth, business migration, tourism recovery, and infrastructure expansion
                support recurring demand for residential and commercial stock. Freehold ownership for
                foreign nationals in designated zones, regulated escrow for off-plan, and mature
                brokerage standards provide a framework many emerging markets cannot replicate.
              </p>
              <SectionImage src="/images/heightsbyemaar.webp" alt="Modern Dubai business district" />

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Yield vs capital appreciation
                </span>
              </h2>
              <p className="mb-4">
                Investment theses usually anchor on rental income, price appreciation, or a blend.
                Apartments in high-liquidity districts often prioritise lettability; villas and
                off-plan positions may emphasise basis and long-term scarcity.
              </p>
              <ul className="list-none space-y-4 pl-0 mb-6">
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Income focus</strong> — Model
                    net yield after service charges, vacancy, furnishing, and management.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Growth focus</strong> —
                    Evaluate supply pipeline, developer delivery, and corridor employment drivers.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Blended mandate</strong> —
                    Combine ready income units with selective off-plan for payment-plan efficiency.
                  </span>
                </li>
              </ul>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Building your investment portfolio
                </span>
              </h2>
              <p className="mb-4">
                Institutional investors rarely concentrate in a single tower or developer. Diversify
                across corridors, product types, and completion stages to balance liquidity, cash
                flow, and construction risk.
              </p>
              <SectionImage src="/images/grandpolo.webp" alt="Green residential community in Dubai" />
              <ol className="list-none space-y-6 pl-0 mb-6">
                {[
                  "Define mandate: hold period, currency exposure, target net yield or IRR.",
                  "Set ticket size and leverage policy before shortlisting stock.",
                  "Underwrite all-in costs: DLD, trustee, furnishing, service charges, exit fees.",
                  "Select developers and communities with proven delivery and resale depth.",
                  "Review exit paths—ready resale, assignment, or hold-through-handover.",
                ].map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-white font-serif text-base text-neutral-900"
                      style={{ borderColor: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1 text-neutral-700">{item}</span>
                  </li>
                ))}
              </ol>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Top corridors for investors
                </span>
              </h2>
              <p className="mb-4">
                Corridor choice should match your mandate. The list below is illustrative—not
                exhaustive—and should be validated against live comparables.
              </p>
              <SectionImage src="/images/Riverside.jpg" alt="Dubai waterfront and lifestyle district" />
              <ul className="list-disc pl-6 marker:text-neutral-300 space-y-2 mb-6">
                <li>
                  <strong>Dubai Marina &amp; JBR</strong> — Strong rental demand and resale liquidity.
                </li>
                <li>
                  <strong>Business Bay &amp; Downtown</strong> — Corporate tenant pool and premium
                  branding.
                </li>
                <li>
                  <strong>Dubai Hills &amp; Arabian Ranches</strong> — Family end-user depth and villa
                  scarcity themes.
                </li>
                <li>
                  <strong>JVC &amp; Dubailand</strong> — Value apartments with volume-driven yields.
                </li>
                <li>
                  <strong>DIFC &amp; commercial nodes</strong> — Office and retail for income-led
                  mandates.
                </li>
              </ul>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Risk management and due diligence
                </span>
              </h2>
              <p className="mb-4">
                Protect capital with process, not optimism. Every acquisition should pass a written
                checklist before booking.
              </p>
              <SectionImage src="/images/prop2.jpg" alt="Investment and wealth planning concept" />
              <ul className="space-y-3 mb-6">
                {[
                  "Verify RERA registration, escrow, and SPA terms for off-plan.",
                  "Stress-test vacancy and service-charge inflation on income assets.",
                  "Confirm mortgage eligibility and repayment capacity before commitment.",
                  "Document assignment rules if you may exit pre-handover.",
                  "Engage licensed representation aligned to fiduciary standards.",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <span style={{ color: ACCENT }} className="mt-2 font-serif text-lg leading-none">
                      ◆
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <section className="mt-16 border-t border-neutral-100 pt-16">
              <h2 className="font-serif text-3xl tracking-tight text-neutral-950 mb-8">
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((item, i) => (
                  <FAQItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                ))}
              </div>
            </section>

            <section className="mt-16 rounded-2xl border border-neutral-100 bg-neutral-50/80 px-8 py-12 text-center">
              <h2 className="font-serif text-2xl text-neutral-950">Ready to build your mandate?</h2>
              <p className="mt-3 text-neutral-600 max-w-md mx-auto text-base">
                Our advisers model yield, basis, and exit scenarios across Dubai&apos;s key corridors.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center justify-center px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Contact us
              </Link>
            </section>

            <section id="related-posts" className="mt-16 border-t border-neutral-100 pt-16 scroll-mt-28">
              <h2 className="font-serif text-3xl tracking-tight text-neutral-950 mb-10">Related posts</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((card) => (
                  <article
                    key={card.href}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Link href={card.href} className="flex flex-col flex-1">
                      <div className="relative aspect-[16/10] bg-neutral-200">
                        <Image
                          src={card.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-serif text-lg leading-snug text-neutral-900 group-hover:underline decoration-2 underline-offset-4 flex-1">
                          {card.title}
                        </h3>
                        <span
                          className="mt-5 inline-flex w-max items-center justify-center border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-90"
                          style={{ backgroundColor: ACCENT, borderColor: ACCENT }}
                        >
                          Read more
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">
              <div>
                <h2
                  className="mb-8 border-b pb-4 font-serif text-2xl font-normal tracking-tight text-neutral-950"
                  style={{ borderBottomColor: `${ACCENT}33` }}
                >
                  Recent articles
                </h2>
                <ul className="space-y-8">
                  {recentArticles.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="group flex gap-4 rounded-xl outline-none ring-offset-2 ring-offset-white transition-colors hover:bg-neutral-50 p-2 -m-2 focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                      >
                        <div className="relative h-24 w-[5.75rem] shrink-0 overflow-hidden rounded-lg bg-neutral-100 shadow-inner">
                          <Image
                            src={a.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="120px"
                          />
                        </div>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <span
                            className="text-[13px] font-semibold uppercase tracking-wider"
                            style={{ color: ACCENT }}
                          >
                            Guide
                          </span>
                          <p
                            className="mt-1 line-clamp-3 font-serif text-base leading-snug text-neutral-900 group-hover:underline decoration-2 underline-offset-4"
                            style={{ textDecorationColor: ACCENT }}
                          >
                            {a.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl border px-8 py-10 font-serif shadow-[0_20px_50px_-24px_rgba(200,16,46,0.35)] bg-gradient-to-br from-neutral-50 to-white"
                style={{ borderColor: `${ACCENT}44` }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
                  GPG
                </p>
                <p className="mt-4 text-xl leading-snug text-neutral-900">
                  We help investors underwrite Dubai assets with institutional discipline.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-8 inline-flex items-center justify-center rounded-none border-b-2 border-transparent pb-1 text-[11px] font-bold uppercase tracking-[0.35em] text-neutral-950 transition-colors hover:border-current"
                  style={{ borderBottomColor: ACCENT, color: ACCENT }}
                >
                  Speak with an adviser →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
