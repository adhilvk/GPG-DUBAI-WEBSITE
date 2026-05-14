import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-20">
      
      {/* BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-sm text-white font-medium tracking-[0.08em]
                     bg-blue-500 hover:bg-blue-600 transition
                     border border-blue-400
                     px-5 py-2.5 rounded-lg shadow-sm"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto legal-page">

        <h1 className="font-semibold mt-6 mb-4 text-center border-b border-white/20 pb-4">
          PRIVACY POLICY
        </h1>

        <p className="text-white/70 mb-2 text-center">
          <strong>GPG Global Real Estate</strong>
        </p>

        <p className="text-white/70 mb-8 text-center">
          Effective Date: February 13, 2026
        </p>

        <h2 className="font-semibold mt-10 mb-2">
          1. Introduction
        </h2>

        <p className="text-white/80 leading-relaxed mb-6">
          GPG Global Real Estate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website or interact with our services.
        </p>

      </div>

      <footer className="mt-16 pt-6 pb-6 border-t border-white/10">
        <div className="text-center text-sm mb-2">
          <Link
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </Link>

          <span className="mx-2 text-white/40">|</span>

          <Link
            href="/terms"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>

        <p className="text-center text-xs text-white/60 tracking-wide">
          All Rights Reserved. © 2026 G P G GLOBAL REAL ESTATE BROKERAGE L.L.C
        </p>
      </footer>

      <Footer />
    </main>
  );
}