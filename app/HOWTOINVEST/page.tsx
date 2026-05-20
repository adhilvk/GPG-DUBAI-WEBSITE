import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const accent = "#C8102E";

export const metadata: Metadata = {
  title: "How to Invest in Dubai | GPG",
  description: "Guide to investing in Dubai real estate — coming soon.",
};

export default function HowToInvestPlaceholder() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-32 pb-28 px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em]" style={{ color: accent }}>
            Guides
          </p>
          <h1 className="mt-4 font-serif text-3xl text-neutral-950">How to Invest in Dubai</h1>
          <p className="mt-6 text-neutral-600">This guide is being prepared. Speak with us for portfolio construction, yield analysis, and corridor selection.</p>
          <Link href="/contact-us" className="mt-10 inline-block text-[11px] font-bold uppercase tracking-[0.3em] underline underline-offset-8" style={{ color: accent }}>
            Contact GPG
          </Link>
          <p className="mt-8">
            <Link href="/guides" className="text-sm text-neutral-500 hover:text-neutral-800">
              ← Back to guides
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
