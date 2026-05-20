import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Real Estate Guides | GPG",
  description: "Guides for buying, investing, and reselling property in Dubai.",
};

const accent = "#C8102E";

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 pb-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em]" style={{ color: accent }}>
            Guides
          </p>
          <h1 className="mt-4 font-serif text-4xl text-neutral-950">Real estate guides</h1>
          <p className="mt-6 text-neutral-600 leading-relaxed">
            Curated institutional guidance for Dubai property decisions. More guides are added regularly.
          </p>
          <ul className="mt-14 space-y-4 text-left border-t border-neutral-100 pt-10">
            <li>
              <Link
                href="/HOWTOBUYOFFPLAN"
                className="group flex items-center justify-between font-serif text-lg text-neutral-900 border-b border-neutral-100 pb-4 hover:text-[#C8102E]"
              >
                How to Buy Off-Plan Property in Dubai
                <span className="text-xs font-sans font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent }}>
                  Read
                </span>
              </Link>
            </li>
            <li className="font-serif text-lg text-neutral-400 border-b border-neutral-100 pb-4">
              How to Resell Property in Dubai <span className="text-sm font-sans text-neutral-400">(coming soon)</span>
            </li>
            <li className="font-serif text-lg text-neutral-400 border-b border-neutral-100 pb-4">
              How to Invest in Dubai <span className="text-sm font-sans text-neutral-400">(coming soon)</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
