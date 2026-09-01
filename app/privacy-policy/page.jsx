import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { staticPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = staticPageMetadata("/privacy-policy");

const sectionTitle = "mb-2 mt-10 text-lg font-semibold text-[#E31E24]";
const subTitle = "mb-2 mt-6 font-semibold text-slate-900";
const bodyText = "mb-6 leading-relaxed text-slate-600";
const listClass = "mb-6 list-inside list-disc space-y-1.5 text-slate-600 marker:text-[#E31E24]";

export default function PrivacyPolicy() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <main className="relative bg-white px-6 pt-32 pb-20 text-slate-900">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#E31E24]/60 to-transparent" />

        <div className="fixed left-6 top-6 z-50">
          <Link
            href="/"
            className="rounded-lg border-2 border-[#E31E24] bg-white px-5 py-2.5 text-sm font-bold tracking-[0.08em] text-[#E31E24] shadow-[0_4px_20px_rgba(227,30,36,0.15)] transition hover:bg-[#E31E24] hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="legal-page mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
              Legal
            </p>
            <h1 className="mb-4 text-3xl font-semibold uppercase tracking-[0.12em] text-slate-900 md:text-4xl">
              Privacy <span className="text-[#E31E24]">Policy</span>
            </h1>
            <div className="mx-auto mb-6 flex items-center justify-center gap-2">
              <span className="h-px w-10 bg-[#E31E24]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#E31E24]" />
              <span className="h-px w-10 bg-[#E31E24]" />
            </div>
            <p className="mb-2 text-slate-700">
              <strong className="text-[#E31E24]">GPG Global Real Estate</strong>
            </p>
            <p className="text-sm text-slate-500">Effective Date: February 13, 2026</p>
          </div>

          <h2 className={sectionTitle}>1. Introduction</h2>
          <p className={bodyText}>
            GPG Global Real Estate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or
            interact with our services. We are a real estate brokerage company based in Business Bay, Dubai, United Arab
            Emirates.
          </p>
          <p className={bodyText}>
            By using our website or providing us with your personal information, you agree to the terms outlined in this
            Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
          </p>

          <h2 className={sectionTitle}>2. Information We Collect</h2>

          <h3 className={subTitle}>2.1 Personal Information</h3>
          <p className="mb-4 text-slate-600">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className={listClass}>
            <li>Fill out forms on our website or social media platforms</li>
            <li>Respond to our advertisements on Meta (Facebook/Instagram) and other social media channels</li>
            <li>Contact us via WhatsApp, phone, email, or other communication channels</li>
            <li>Request property information or schedule viewings</li>
            <li>Subscribe to our newsletters or marketing communications</li>
          </ul>
          <p className="mb-3 text-slate-600">This personal information may include, but is not limited to:</p>
          <ul className={listClass}>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>WhatsApp contact details</li>
            <li>Property preferences and requirements</li>
            <li>Budget and financial information related to property transactions</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className={subTitle}>2.2 Technical Information</h3>
          <p className="mb-4 text-slate-600">
            When you visit our website, we may automatically collect certain technical information, including:
          </p>
          <ul className={listClass}>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className={sectionTitle}>3. How We Use Your Information</h2>
          <p className="mb-4 text-slate-600">We use the information we collect for the following purposes:</p>
          <ul className={listClass}>
            <li>To respond to your inquiries and provide requested information about properties</li>
            <li>To contact you via phone, WhatsApp, email, or other communication channels regarding real estate opportunities</li>
            <li>To schedule property viewings and facilitate negotiations</li>
            <li>To provide personalized real estate services based on your preferences</li>
            <li>To send marketing communications, newsletters, and promotional materials about our properties and services</li>
            <li>To improve our website, services, and customer experience</li>
            <li>To analyze user behavior and trends to optimize our marketing campaigns</li>
            <li>To comply with legal obligations and protect our legal rights</li>
          </ul>

          <h2 className={sectionTitle}>4. Data Sharing and Disclosure</h2>
          <p className="mb-4 text-slate-600">
            We do not sell, rent, or share your personal information with third parties for their marketing purposes. Your
            data is kept confidential and is only used internally by our authorized agents and staff to provide you with
            real estate services.
          </p>
          <p className="mb-4 text-slate-600">We may share your information only in the following limited circumstances:</p>
          <ul className={listClass}>
            <li>
              <strong className="text-[#E31E24]">With Property Owners:</strong> When you express interest in a specific property, we may share relevant
              information with the property owner or their authorized representatives to facilitate the transaction.
            </li>
            <li>
              <strong className="text-[#E31E24]">Service Providers:</strong> We may engage trusted third-party service providers (such as IT support,
              email service providers, or CRM systems) who assist us in operating our business. These providers have access
              to your information only to perform services on our behalf and are obligated to protect your data.
            </li>
            <li>
              <strong className="text-[#E31E24]">Legal Requirements:</strong> We may disclose your information if required by law, regulation, legal
              process, or governmental request, or to protect our rights, property, or safety.
            </li>
          </ul>

          <h2 className={sectionTitle}>5. Data Security</h2>
          <p className="mb-4 text-slate-600">
            We take the security of your personal information seriously and implement appropriate technical and organizational
            measures to protect it from unauthorized access, disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className={listClass}>
            <li>Secure servers and encrypted data storage</li>
            <li>Access controls limiting data access to authorized personnel only</li>
            <li>Regular security assessments and updates</li>
            <li>Confidentiality agreements with our employees and agents</li>
          </ul>
          <p className={bodyText}>
            However, please note that no method of transmission over the internet or electronic storage is 100% secure. While
            we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className={sectionTitle}>6. Data Retention</h2>
          <p className="mb-4 text-slate-600">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy
            Policy, unless a longer retention period is required or permitted by law. When determining the appropriate retention
            period, we consider:
          </p>
          <ul className={listClass}>
            <li>The nature and sensitivity of the information</li>
            <li>The purposes for which we collected the information</li>
            <li>Our ongoing business relationship with you</li>
            <li>Legal and regulatory requirements</li>
          </ul>

          <h2 className={sectionTitle}>7. Your Rights</h2>
          <p className="mb-4 text-slate-600">
            Under applicable data protection laws, you have certain rights regarding your personal information:
          </p>
          <ul className={listClass}>
            <li>
              <strong className="text-[#E31E24]">Right to Access:</strong> You have the right to request access to the personal information we hold about
              you.
            </li>
            <li>
              <strong className="text-[#E31E24]">Right to Correction:</strong> You have the right to request that we correct any inaccurate or incomplete
              personal information.
            </li>
            <li>
              <strong className="text-[#E31E24]">Right to Deletion:</strong> You have the right to request that we delete your personal information,
              subject to certain legal exceptions.
            </li>
            <li>
              <strong className="text-[#E31E24]">Right to Opt-Out:</strong> You have the right to opt out of receiving marketing communications from us
              at any time. You can unsubscribe by clicking the unsubscribe link in our emails or by contacting us directly.
            </li>
            <li>
              <strong className="text-[#E31E24]">Right to Object:</strong> You have the right to object to the processing of your personal information in
              certain circumstances.
            </li>
          </ul>
          <p className={bodyText}>
            To exercise any of these rights, please contact us using the information provided in Section 11 below.
          </p>

          <h2 className={sectionTitle}>8. Cookies and Tracking Technologies</h2>
          <p className="mb-4 text-slate-600">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website
            traffic. Cookies are small text files stored on your device that help us understand how you use our website.
          </p>
          <p className="mb-4 text-slate-600">We use cookies for the following purposes:</p>
          <ul className={listClass}>
            <li>To remember your preferences and settings</li>
            <li>To analyze website usage and improve our services</li>
            <li>To deliver targeted advertising through platforms like Meta Ads</li>
            <li>To measure the effectiveness of our marketing campaigns</li>
          </ul>
          <p className={bodyText}>
            You can control cookies through your browser settings and opt out of certain tracking technologies. However,
            disabling cookies may limit your ability to use certain features of our website.
          </p>

          <h2 className={sectionTitle}>9. Third-Party Links</h2>
          <p className={bodyText}>
            Our website and social media pages may contain links to third-party websites, including property listing platforms
            and partner services. We are not responsible for the privacy practices or content of these third-party sites. We
            encourage you to review the privacy policies of any third-party websites you visit.
          </p>

          <h2 className={sectionTitle}>10. Changes to This Privacy Policy</h2>
          <p className="mb-4 text-slate-600">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
            requirements, or other factors. When we make changes, we will update the &quot;Effective Date&quot; at the top of this
            policy and post the revised policy on our website.
          </p>
          <p className={bodyText}>
            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your
            information. Your continued use of our services after any changes to this Privacy Policy constitutes your
            acceptance of the updated policy.
          </p>

          <h2 className={sectionTitle}>11. Contact Us</h2>
          <p className="mb-4 text-slate-600">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
            contact us:
          </p>
          <p className="mb-2">
            <a
              href="mailto:enquiries@globalpropertygroup.co"
              className="font-medium text-[#E31E24] transition hover:text-[#ff4d52]"
            >
              enquiries@globalpropertygroup.co
            </a>
          </p>
          <p className="mb-2 text-slate-600">
            <strong className="text-slate-900">GPG Global Real Estate</strong>
            <br />
            Business Bay, Dubai, United Arab Emirates
          </p>
          <p className={bodyText}>
            We are committed to addressing your concerns and protecting your privacy rights.
          </p>

          <h2 className={sectionTitle}>12. Governing Law</h2>
          <p className="mb-4 text-slate-600">
            This Privacy Policy is governed by and construed in accordance with the laws of the United Arab Emirates and the
            regulations of the Dubai International Financial Centre (DIFC) where applicable. Any disputes arising from this
            Privacy Policy shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
          </p>
          <p className={bodyText}>
            By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#E31E24]/40 to-transparent" />
      </main>

      <Footer />
    </>
  );
}
