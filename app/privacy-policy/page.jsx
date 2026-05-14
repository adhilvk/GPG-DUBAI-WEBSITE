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

        <h1 className="font-semibold mt-6 mb-4 text-center border-b border-white/20 pb-4 ">
          PRIVACY POLICY
        </h1>

        <p className="text-white/70 mb-2 text-center">
          <strong>GPG Global Real Estate</strong>
        </p>
        <p className="text-white/70 mb-8 text-center">
          Effective Date: February 13, 2026
        </p>

        {/* 1. INTRODUCTION */}
        <h2 className="font-semibold mt-10 mb-2">
          1. Introduction
        </h2>

        <p className="text-white/80 leading-relaxed mb-6">
          GPG Global Real Estate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website or interact with our services. We are a real estate brokerage
          company based in Business Bay, Dubai, United Arab Emirates.
        </p>

        <p className="text-white/80 leading-relaxed mb-6">
          By using our website or providing us with your personal information, you agree to the terms
          outlined in this Privacy Policy. If you do not agree with our policies and practices,
          please do not use our services.
        </p>

        {/* 2. INFORMATION WE COLLECT */}
        <h2 className="font-semibold mt-10 mb-2">
          2. Information We Collect
        </h2>

        <h3 className="font-semibold mt-6 mb-2">
          2.1 Personal Information
        </h3>

        <p className="text-white/80 mb-4">
          We may collect personal information that you voluntarily provide to us when you:
        </p>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li>Fill out forms on our website or social media platforms</li>
          <li>Respond to advertisements on Meta (Facebook/Instagram) or other platforms</li>
          <li>Contact us via WhatsApp, phone, email, or other channels</li>
          <li>Request property information or schedule viewings</li>
          <li>Subscribe to newsletters or marketing communications</li>
        </ul>

        <p className="text-white/80 mb-3">
          This personal information may include:
        </p>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>WhatsApp contact details</li>
          <li>Property preferences and requirements</li>
          <li>Budget and financial information related to property transactions</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3 className="font-semibold mt-6 mb-2">
          2.2 Technical Information
        </h3>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent on our website</li>
          <li>Referring website</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        {/* 3. HOW WE USE YOUR INFORMATION */}
        <h2 className="font-semibold mt-10 mb-2">
          3. How We Use Your Information
        </h2>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li>To respond to inquiries and provide property information</li>
          <li>To contact you via phone, WhatsApp, or email</li>
          <li>To schedule property viewings and facilitate negotiations</li>
          <li>To provide personalized real estate services</li>
          <li>To send marketing communications and newsletters</li>
          <li>To improve our website and customer experience</li>
          <li>To analyze user behavior and optimize marketing campaigns</li>
          <li>To comply with legal obligations</li>
        </ul>

        {/* 4. DATA SHARING */}
        <h2 className="font-semibold mt-10 mb-2">
          4. Data Sharing and Disclosure
        </h2>

        <p className="text-white/80 mb-4">
          We do not sell, rent, or share your personal information with third parties
          for marketing purposes.
        </p>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li><strong>With Property Owners:</strong> To facilitate property transactions.</li>
          <li><strong>Service Providers:</strong> Trusted third-party providers assisting operations.</li>
          <li><strong>Legal Requirements:</strong> When required by law or governmental request.</li>
        </ul>

        {/* 5. DATA SECURITY */}
        <h2 className="font-semibold mt-10 mb-2">
          5. Data Security
        </h2>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li>Secure servers and encrypted data storage</li>
          <li>Access controls for authorized personnel only</li>
          <li>Regular security assessments</li>
          <li>Confidentiality agreements with staff and agents</li>
        </ul>

        <p className="text-white/80 mb-6">
          No method of transmission or electronic storage is completely secure,
          and we cannot guarantee absolute security.
        </p>

        {/* 6. DATA RETENTION */}
        <h2 className="font-semibold mt-10 mb-2">
          6. Data Retention
        </h2>

        <p className="text-white/80 mb-6">
          We retain personal information only as long as necessary to fulfill
          the purposes outlined in this Privacy Policy or as required by law.
        </p>

        {/* 7. YOUR RIGHTS */}
        <h2 className="font-semibold mt-10 mb-2">
          7. Your Rights
        </h2>

        <ul className="list-disc list-inside text-white/80 mb-6 space-y-1">
          <li>Right to Access</li>
          <li>Right to Correction</li>
          <li>Right to Deletion</li>
          <li>Right to Opt-Out</li>
          <li>Right to Object</li>
        </ul>

        {/* 8. COOKIES */}
        <h2 className="font-semibold mt-10 mb-2">
          8. Cookies and Tracking Technologies
        </h2>

        <p className="text-white/80 mb-6">
          Our website uses cookies and similar technologies to enhance your browsing
          experience, analyze traffic, and improve marketing effectiveness.
        </p>

        {/* 9. THIRD PARTY LINKS */}
        <h2 className="font-semibold mt-10 mb-2">
          9. Third-Party Links
        </h2>

        <p className="text-white/80 mb-6">
          Our website may contain links to third-party websites. We are not responsible
          for their privacy practices and encourage you to review their policies.
        </p>

        {/* 10. CHANGES */}
        <h2 className="font-semibold mt-10 mb-2">
          10. Changes to This Privacy Policy
        </h2>

        <p className="text-white/80 mb-6">
          We may update this Privacy Policy periodically.
        </p>

        {/* 11. CONTACT */}
        <h2 className="font-semibold mt-10 mb-2">
          11. Contact Us
        </h2>

        <p className="text-white/80 mb-2">
          enquiries@globalpropertygroup.co
        </p>

        <p className="text-white/80 mb-6">
          GPG Global Real Estate<br />
          Business Bay, Dubai, United Arab Emirates
        </p>

        {/* 12. GOVERNING LAW */}
        <h2 className="font-semibold mt-10 mb-2">
          12. Governing Law
        </h2>

        <p className="text-white/80 mb-6">
          This Privacy Policy is governed by the laws of the United Arab Emirates
          and the regulations of the Dubai International Financial Centre (DIFC).
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
