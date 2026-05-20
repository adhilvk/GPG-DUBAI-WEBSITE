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
    title: "How to Resell Property in Dubai",
    href: "/HOWTORESELL",
    image: "/images/palmcentral.jpg",
  },
  {
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/grandpolo.webp",
  },
  {
    title: "Real Estate Guides Hub",
    href: "/guides",
    image: "/images/heightsbyemaar.webp",
  },
];

const faqs = [
  {
    q: "Is buying off-plan in Dubai safe for foreign investors?",
    a: "Dubai offers a regulated framework through RERA and the Dubai Land Department. When you work with reputable developers on registered projects and use institutional escrow protections, foreign investors benefit from transparency comparable to mature markets. Always verify permits, escrow compliance, and consult a licensed broker.",
  },
  {
    q: "What payment plans are typical for off-plan purchases?",
    a: "Schedules vary by developer and project phase. Common structures include instalments aligned to construction milestones, with a proportion due on handover. Your agent should provide a timeline that maps payments to escrow rules and contractual obligations.",
  },
  {
    q: "Can I sell my off-plan unit before completion?",
    a: "Reassignment policies depend on developer terms, SPA conditions, DLD eligibility, and any mortgage registration. Institutional buyers often pursue strategic exits via reassignment subject to approvals and fees. Legal review before any transfer is critical.",
  },
];

export default function HowToBuyOffPlanGuide() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-neutral-900">
      {/* subtle top divider in brand red */}
      <div className="h-[3px] w-full" style={{ backgroundColor: ACCENT }} aria-hidden />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pb-28">
        {/* Breadcrumb */}
        <nav className="mb-12 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
          <Link href="/" className="hover:text-neutral-600 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <Link href="/guides" className="hover:text-neutral-600 transition-colors">
            Guides
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <span style={{ color: ACCENT }}>How to Buy Off-Plan</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          {/* Article column */}
          <article className="lg:col-span-8">
            <header className="mb-10">
              <p
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em]"
                style={{ color: ACCENT }}
              >
                Investor guide
              </p>
              <h1 className="font-serif text-[2.15rem] font-normal leading-[1.15] tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.1]">
                How to Buy Off-Plan Property in Dubai
              </h1>
              <time
                dateTime="2024-05-01"
                className="mt-6 block text-sm font-medium tracking-wide text-neutral-500"
              >
                May 1, 2024
              </time>
            </header>

            <div className="relative mb-12 aspect-[21/9] min-h-[200px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/palmcentral.jpg"
                alt="Dubai skyline at dusk"
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

            <div className="prose prose-neutral max-w-none font-serif text-[17px] leading-[1.75] text-neutral-700 prose-p:mb-6 prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-a:no-underline hover:prose-a:underline">
              <p className="text-lg leading-relaxed text-neutral-800">
                <span className="font-serif font-normal" style={{ color: ACCENT }}>
                  Dubai{" "}
                </span>
                remains one of the world&apos;s most dynamic off-plan markets. Whether you are an end-user planning
                your next home or an investor building institutional-grade exposure, understanding the lifecycle of an
                off-plan purchase protects capital and simplifies decisions.
              </p>
              <p>
                This guide explains what off-plan means in the UAE context, why buyers allocate to pre-completion inventory, and the practical sequence from shortlisting developers to registering your interest with Dubai Land Department-compliant documentation.
              </p>

              <h2 id="what" className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  What is off-plan property?
                </span>
              </h2>
              <p>
                Off-plan property is purchased from a developer before construction is finished — often directly from blueprint and payment-plan marketing. Contracts are anchored in a{' '}
                <Link href="https://dubailand.gov.ae" className="font-medium text-[inherit]" style={{ color: ACCENT }}>
                  SPA registered with oversight from DLD-aligned processes
                </Link>
                , with buyer funds typically routed through escrow to align disbursements with verified construction progress.
              </p>

              <h2 id="why" className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Why buy off-plan in Dubai?
                </span>
              </h2>
              <ul className="list-none space-y-4 pl-0">
                <li className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white" style={{ backgroundColor: ACCENT }} />
                  <span>
                    <strong className="font-semibold text-neutral-900">Structured payment plans</strong> — Milestone-based instalments can improve cash-flow efficiency versus paying the majority upfront for ready stock.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white" style={{ backgroundColor: ACCENT }} />
                  <span>
                    <strong className="font-semibold text-neutral-900">Early positioning</strong> — Entering at launch or early tranches can offer preferential pricing in master developments with long-term delivery narratives.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white" style={{ backgroundColor: ACCENT }} />
                  <span>
                    <strong className="font-semibold text-neutral-900">New product quality</strong> — Contemporary building systems, warranties, and community amenities aligned to current lifestyle expectations.
                  </span>
                </li>
              </ul>

              <h2 id="steps" className="mt-14 mb-6 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Steps to buy off-plan property
                </span>
              </h2>
              <ol className="list-none space-y-8 counter-reset-none pl-0 [counter-reset:step]">
                {[
                  {
                    title: "Research the market",
                    body: "Map macro themes — supply pipelines, corridor connectivity, developer track records — before narrowing to communities that match liquidity and occupancy objectives.",
                  },
                  {
                    title: "Choose the right developer",
                    body: "Institutional diligence means reviewing delivery history, financial stability, escrow compliance, and after-sales governance — not campaign imagery alone.",
                  },
                  {
                    title: "Inspect the project fundamentals",
                    body: "Unit mix, completion timeline, payment schedule, service-charge benchmarks, and handover assumptions should align with your investment memo or residency plan.",
                  },
                  {
                    title: "Formalise SPA and escrow",
                    body: "Execute with licensed representation; deposits and instalments move through approved escrow channels aligned to RERA-registered disclosures.",
                  },
                  {
                    title: "Mortgage readiness (if applicable)",
                    body: "Off-plan mortgages have distinct contours—stage of construction, borrower profile, and bank policy. Coordinate early so financing does not bottleneck booking.",
                  },
                  {
                    title: "Track construction & handover",
                    body: "Monitor milestone reporting, snag lists, utilities, DLD registrations, and any service-charge confirmations before acceptance.",
                  },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-6">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white font-serif text-lg text-neutral-900 shadow-sm"
                      style={{ borderColor: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-2 text-xl text-neutral-950">{step.title}</h3>
                      <p className="m-0 text-neutral-700">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className="mt-14 mb-4 text-xl text-neutral-950">Best areas to consider</h3>
              <p>
                Institutional buyers often diversify across corridors — from established masterplans with schools and hospitals to emerging districts with differentiated supply stories. Speak with our team about alignment to your mandate; no single postcode fits every portfolio.
              </p>
              <ul className="list-disc pl-6 marker:text-neutral-300">
                <li><strong>Dubai Hills Estate</strong> — Integrated retail, wellness, golf, schools.</li>
                <li><strong>MBR City &amp; Sobha Hartland</strong> — Central connectivity plus green corridors.</li>
                <li><strong>Dubai Marina &amp; Coastal</strong> — Premium lifestyle and maritime adjacency themes.</li>
              </ul>

              <h3 className="mt-10 mb-4 text-xl text-neutral-950">Top tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{ color: ACCENT }} className="mt-2 font-serif text-lg leading-none">
                    ◆
                  </span>
                  <span>Budget all-in: DLD allocation, trustee and registration costs, brokerage where applicable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: ACCENT }} className="mt-2 font-serif text-lg leading-none">
                    ◆
                  </span>
                  <span>Favour phased payments that mirror escrow release mechanics you can independently verify.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: ACCENT }} className="mt-2 font-serif text-lg leading-none">
                    ◆
                  </span>
                  <span>Use a regulated broker whose incentives align with long-term fiduciary standards.</span>
                </li>
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
          </article>

          {/* Sidebar — recent articles only, no contact form */}
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
                          <p className="mt-1 line-clamp-3 font-serif text-base leading-snug text-neutral-900 group-hover:underline decoration-2 underline-offset-4" style={{ textDecorationColor: ACCENT }}>
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
                  Ready to evaluate off-plan allocations with fiduciary discipline?
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
