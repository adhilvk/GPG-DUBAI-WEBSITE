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
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/prop2.jpg",
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
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/prop2.jpg",
  },
];

const allGuides = [
  ...relatedPosts,
  {
    title: "Luxury Properties in Dubai",
    href: "/luxury-properties",
    image: "/images/prop2.jpg",
  },
  {
    title: "Ready Properties in Dubai",
    href: "/ready-properties",
    image: "/images/prop5.webp",
  },
];

const faqs = [
  {
    q: "What does off-plan mean in Dubai?",
    a: "Off-plan refers to purchasing a property from a developer before construction is complete. Your contract is typically a Sale and Purchase Agreement (SPA) registered through DLD processes, with payments often tied to construction milestones and escrow protection.",
  },
  {
    q: "Is off-plan only for investors?",
    a: "No. End-users frequently buy off-plan to secure newer stock, payment plans, and preferred unit positions. Investors add off-plan for capital appreciation potential and portfolio diversification—objectives should drive product selection.",
  },
  {
    q: "How long does handover usually take?",
    a: "Timelines vary by project and developer, commonly ranging from two to four years from launch depending on construction phase, permits, and market conditions. Always rely on contractual completion dates—not marketing brochures alone.",
  },
  {
    q: "Where should beginners start?",
    a: "Start with developer credibility, escrow registration, payment schedule clarity, and corridor fundamentals. Engage a licensed broker to shortlist communities aligned to budget, residency goals, and exit strategy.",
  },
];

export default function RealEstateGuidesGuide() {
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
          <span style={{ color: ACCENT }}>Real Estate Guides</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <article className="lg:col-span-8">
            <header className="mb-10">
              <p
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em]"
                style={{ color: ACCENT }}
              >
                Beginner&apos;s guide
              </p>
              <h1 className="font-serif text-[2.15rem] font-normal leading-[1.15] tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.1]">
                Off Plan Properties in Dubai: A Beginner&apos;s Guide
              </h1>
              <time
                dateTime="2024-04-18"
                className="mt-6 block text-sm font-medium tracking-wide text-neutral-500"
              >
                April 18, 2024
              </time>
            </header>

            <div className="relative mb-12 aspect-[21/9] min-h-[200px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/heightsbyemaar.webp"
                alt="Dubai skyline and professionals reviewing property opportunities"
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
                  Dubai&apos;s{" "}
                </span>
                real estate market combines global liquidity, transparent regulation, and a deep pipeline of
                master-planned communities. For first-time buyers, off-plan inventory is often the entry point—offering
                payment flexibility, new product, and long-term lifestyle or investment optionality.
              </p>
              <p className="mb-6">
                This guide introduces the market landscape, explains why off-plan matters, and gives you a practical
                framework before you speak with an adviser or tour a sales centre.
              </p>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Understanding Dubai&apos;s property market landscape
                </span>
              </h2>
              <p className="mb-4">
                Dubai is structured around master developers, freehold zones, and corridor-specific demand drivers.
                Established communities—Dubai Hills, Marina, Palm, and MBR City—compete with emerging districts tied to
                logistics, aviation, and new lifestyle infrastructure.
              </p>
              <ul className="list-none space-y-4 pl-0 mb-6">
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Ready vs off-plan</strong> — Ready stock offers
                    immediate occupation; off-plan trades time for payment plans and earlier pricing dynamics.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Regulation</strong> — RERA and DLD frameworks
                    govern escrow, advertising, and registration—reducing opaque practices when you buy registered
                    projects.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Buyer profile</strong> — End-users, regional
                    investors, and global UHNW capital coexist; your strategy should dictate community and product type.
                  </span>
                </li>
              </ul>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Why invest in off-plan properties?
                </span>
              </h2>
              <ul className="list-disc pl-6 marker:text-neutral-300 space-y-2 mb-6">
                <li>
                  <strong>Payment plans</strong> — Spread capital over construction milestones instead of a single
                  upfront ready purchase.
                </li>
                <li>
                  <strong>Product newness</strong> — Contemporary layouts, smart-home readiness, and community amenities
                  aligned to current demand.
                </li>
                <li>
                  <strong>Entry pricing</strong> — Early tranches in reputable developments can offer advantageous basis
                  versus later phases—subject to market cycle.
                </li>
                <li>
                  <strong>Portfolio flexibility</strong> — Assignments and eventual handover support exit or hold
                  strategies depending on SPA terms.
                </li>
              </ul>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Key terms every buyer should know
                </span>
              </h2>
              <ul className="space-y-4 mb-6">
                {[
                  {
                    term: "SPA",
                    def: "Sale and Purchase Agreement—the binding contract between buyer and developer.",
                  },
                  {
                    term: "Oqood / DLD registration",
                    def: "Registration of your interest with Dubai Land Department for off-plan units.",
                  },
                  {
                    term: "Escrow account",
                    def: "Developer project account where buyer payments are held and released per construction progress.",
                  },
                  {
                    term: "Handover",
                    def: "Physical completion and key release after snagging and final payments.",
                  },
                  {
                    term: "Service charges",
                    def: "Annual community and building maintenance fees after handover.",
                  },
                ].map((item) => (
                  <li key={item.term} className="flex items-start gap-3">
                    <span style={{ color: ACCENT }} className="mt-2 font-serif text-lg leading-none">
                      ◆
                    </span>
                    <span>
                      <strong className="text-neutral-900">{item.term}</strong> — {item.def}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  How off-plan payment plans work
                </span>
              </h2>
              <p className="mb-4">
                Typical structures include a booking deposit, instalments during construction (often linked to
                milestones), and a final payment on handover. Percentages vary by developer and project phase—always
                reconcile marketing schedules with your registered SPA and escrow disclosures.
              </p>
              <p className="mb-6">
                Budget for ancillary costs: DLD fees, trustee charges, agency commission where applicable, and future
                service charges. A complete model avoids surprise erosion of expected returns.
              </p>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Due diligence checklist
                </span>
              </h2>
              <ol className="list-none space-y-6 pl-0 mb-6">
                {[
                  "Confirm RERA registration and project escrow status.",
                  "Review developer delivery history in the target corridor.",
                  "Compare unit mix, sizes, and service-charge assumptions.",
                  "Validate payment schedule vs personal cash-flow or mortgage pre-approval.",
                  "Understand assignment rules if you may exit before handover.",
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
                  Top communities for first-time buyers
                </span>
              </h2>
              <p className="mb-4">
                No single address fits every buyer. These corridors frequently appear in beginner conversations for
                balance of lifestyle, schools, and liquidity:
              </p>
              <ul className="list-disc pl-6 marker:text-neutral-300 space-y-2">
                <li>
                  <strong>Dubai Hills Estate</strong> — Integrated mall, healthcare, golf, family amenities.
                </li>
                <li>
                  <strong>Dubai Marina &amp; JBR</strong> — Waterfront lifestyle with strong rental demand.
                </li>
                <li>
                  <strong>JVC &amp; Town Square</strong> — Value-oriented apartments and townhouses.
                </li>
                <li>
                  <strong>MBR City / Sobha Hartland</strong> — Central positioning and green masterplan narrative.
                </li>
              </ul>
              <p className="mt-6">
                Explore our dedicated guides for step-by-step buying, reselling, and investment frameworks linked below.
              </p>
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

            {/* Related posts — no contact form */}
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
              <div className="mt-12 text-center">
                <a
                  href="#all-guides"
                  className="inline-flex items-center justify-center border-2 px-10 py-3 text-[11px] font-bold uppercase tracking-[0.3em] transition-colors hover:bg-neutral-50"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  View all
                </a>
              </div>
            </section>

            <section id="all-guides" className="mt-16 scroll-mt-28">
              <h2 className="font-serif text-2xl tracking-tight text-neutral-950 mb-8 text-center">
                All GPG guides &amp; property hubs
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {allGuides.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="group flex gap-4 rounded-xl border border-neutral-100 p-4 hover:border-neutral-200 hover:shadow-sm transition-all"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                      <Image src={g.image} alt="" fill className="object-cover" sizes="112px" />
                    </div>
                    <span
                      className="self-center font-serif text-base text-neutral-900 group-hover:underline decoration-2 underline-offset-4"
                      style={{ textDecorationColor: ACCENT }}
                    >
                      {g.title}
                    </span>
                  </Link>
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
                  New to Dubai off-plan? Our team can shortlist communities aligned to your budget and goals.
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
