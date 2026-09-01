import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { staticPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = staticPageMetadata("/terms");

const sectionTitle = "mb-2 mt-10 text-lg font-semibold text-[#E31E24]";
const subTitle = "mb-2 mt-6 font-semibold text-slate-900";
const bodyText = "mb-6 leading-relaxed text-slate-600";
const listClass = "mb-6 list-inside list-disc space-y-1.5 text-slate-600 marker:text-[#E31E24]";

export default function TermsAndConditions() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
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
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">Legal</p>
            <h1 className="mb-4 text-3xl font-semibold uppercase tracking-[0.12em] text-slate-900 md:text-4xl">
              Terms & <span className="text-[#E31E24]">Conditions</span>
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

          <h2 className={sectionTitle}>1. Introduction and Acceptance</h2>
          <p className={bodyText}>
            Welcome to GPG Global Real Estate. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
            our website, landing pages, and services. GPG Global Real Estate (&quot;we,&quot; &quot;our,&quot; &quot;us,&quot; or &quot;Company&quot;) is a
            real estate brokerage company based in Business Bay, Dubai, United Arab Emirates.
          </p>
          <p className={bodyText}>
            By accessing or using our website, submitting information through our forms, responding to our advertisements,
            or engaging with our services through any channel (including WhatsApp, Meta platforms, or other social media),
            you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not
            use our services.
          </p>

          <h2 className={sectionTitle}>2. Definitions</h2>
          <p className="mb-4 text-slate-600">For the purposes of these Terms:</p>
          <ul className={listClass}>
            <li>
              <strong className="text-[#E31E24]">&quot;Services&quot;</strong> means all real estate brokerage services, property
              listings, consultations, viewings, negotiations, and related services provided by GPG Global Real Estate.
            </li>
            <li>
              <strong className="text-[#E31E24]">&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to any individual or entity
              accessing our website or using our services.
            </li>
            <li>
              <strong className="text-[#E31E24]">&quot;Website&quot;</strong> includes our main website, landing pages, and any
              digital platforms we operate.
            </li>
            <li>
              <strong className="text-[#E31E24]">&quot;Property&quot;</strong> refers to any real estate listed, marketed, or
              facilitated through our services.
            </li>
          </ul>

          <h2 className={sectionTitle}>3. Use of Website and Services</h2>

          <h3 className={subTitle}>3.1 Eligibility</h3>
          <p className={bodyText}>
            You must be at least 18 years old to use our services. By using our website or services, you represent and
            warrant that you are of legal age and have the legal capacity to enter into these Terms.
          </p>

          <h3 className={subTitle}>3.2 Permitted Use</h3>
          <p className="mb-4 text-slate-600">
            You may use our website and services only for lawful purposes and in accordance with these Terms. You agree
            not to:
          </p>
          <ul className={listClass}>
            <li>Use our services for any illegal, fraudulent, or unauthorized purpose</li>
            <li>Provide false, misleading, or inaccurate information</li>
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Transmit viruses, malware, or any harmful code</li>
            <li>Interfere with or disrupt the operation of our website or services</li>
            <li>Scrape, copy, or reproduce content from our website without authorization</li>
          </ul>

          <h3 className={subTitle}>3.3 Account Security</h3>
          <p className={bodyText}>
            If you create an account or provide contact information, you are responsible for maintaining the
            confidentiality of your information and for all activities that occur under your account. You agree to notify
            us immediately of any unauthorized use of your account.
          </p>

          <h2 className={sectionTitle}>4. Property Information and Listings</h2>

          <h3 className={subTitle}>4.1 Accuracy of Information</h3>
          <p className={bodyText}>
            We strive to provide accurate and up-to-date information about properties listed on our website and in our
            marketing materials. However, property information, including prices, availability, specifications, images, and
            descriptions, is subject to change without notice. We do not guarantee the accuracy, completeness, or
            reliability of any property information.
          </p>

          <h3 className={subTitle}>4.2 Third-Party Listings</h3>
          <p className={bodyText}>
            Some properties listed on our website may be owned or managed by third parties. We act as a broker and
            facilitator and are not responsible for the accuracy of third-party listings or the conduct of property owners,
            developers, or other third parties.
          </p>

          <h3 className={subTitle}>4.3 No Guarantee of Availability</h3>
          <p className={bodyText}>
            Property availability is subject to change. We do not guarantee that any property advertised will be available
            at the time of your inquiry or viewing. Properties may be sold, rented, or withdrawn from the market at any
            time.
          </p>

          <h2 className={sectionTitle}>5. Lead Generation and Communication</h2>

          <h3 className={subTitle}>5.1 Consent to Contact</h3>
          <p className={bodyText}>
            By submitting your contact information through our website, landing pages, advertisements (including Meta
            Ads), or any other channel, you consent to being contacted by our agents via phone, WhatsApp, email, SMS, or
            other communication methods regarding real estate opportunities, property viewings, and related services.
          </p>

          <h3 className={subTitle}>5.2 Marketing Communications</h3>
          <p className={bodyText}>
            By providing your contact information, you also consent to receive marketing communications, newsletters,
            promotional materials, and updates about our services and properties. You may opt out of marketing
            communications at any time by following the unsubscribe instructions in our emails or by contacting us
            directly.
          </p>

          <h3 className={subTitle}>5.3 Response Time</h3>
          <p className={bodyText}>
            We aim to respond to all inquiries promptly, but we do not guarantee any specific response time. Our business
            hours and response times may vary.
          </p>

          <h2 className={sectionTitle}>6. Brokerage Services</h2>

          <h3 className={subTitle}>6.1 Role as Broker</h3>
          <p className={bodyText}>
            GPG Global Real Estate acts as a real estate broker facilitating transactions between buyers, sellers,
            landlords, and tenants. We are not party to any transaction unless explicitly stated in a separate written
            agreement.
          </p>

          <h3 className={subTitle}>6.2 Commission and Fees</h3>
          <p className={bodyText}>
            Our brokerage services are typically compensated through commissions paid by property owners, sellers, or
            developers. In some cases, additional fees may apply and will be disclosed to you before you enter into any
            transaction. All fees and commission structures comply with UAE real estate regulations.
          </p>

          <h3 className={subTitle}>6.3 Independent Verification</h3>
          <p className="mb-4 text-slate-600">
            You are solely responsible for conducting your own due diligence, inspections, and verification of any
            property before entering into any transaction. We strongly recommend that you:
          </p>
          <ul className={listClass}>
            <li>Conduct independent property inspections</li>
            <li>Verify property ownership and legal status</li>
            <li>Consult with legal and financial advisors</li>
            <li>Review all contracts and agreements carefully</li>
          </ul>

          <h2 className={sectionTitle}>7. Intellectual Property Rights</h2>

          <h3 className={subTitle}>7.1 Ownership</h3>
          <p className={bodyText}>
            All content on our website, including but not limited to text, graphics, logos, images, videos, software, and
            design elements, is the property of GPG Global Real Estate or its licensors and is protected by intellectual
            property laws. The &quot;GPG Global Real Estate&quot; name, logo, and all related marks are trademarks of our company.
          </p>

          <h3 className={subTitle}>7.2 Limited License</h3>
          <p className="mb-4 text-slate-600">
            We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal,
            non-commercial purposes. You may not:
          </p>
          <ul className={listClass}>
            <li>Reproduce, distribute, modify, or create derivative works from our content</li>
            <li>Use our content for commercial purposes without written permission</li>
            <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            <li>Use our trademarks or branding without authorization</li>
          </ul>

          <h2 className={sectionTitle}>8. Disclaimer of Warranties</h2>
          <p className="mb-4 text-slate-600">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          <p className="mb-4 text-slate-600">We disclaim all warranties, including but not limited to:</p>
          <ul className={listClass}>
            <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
            <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
            <li>Warranties that our website will be uninterrupted, secure, or error-free</li>
            <li>Warranties regarding the outcome of any real estate transaction</li>
          </ul>
          <p className={bodyText}>
            We do not warrant that property information is accurate, current, or complete. Property values, market
            conditions, and availability can change rapidly and without notice.
          </p>

          <h2 className={sectionTitle}>9. Limitation of Liability</h2>
          <p className="mb-4 text-slate-600">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, GPG GLOBAL REAL ESTATE, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS,
            AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF OUR WEBSITE OR
            SERVICES.
          </p>
          <p className="mb-4 text-slate-600">
            This limitation applies regardless of the legal theory upon which the claim is based, including negligence,
            contract, tort, or otherwise, and even if we have been advised of the possibility of such damages.
          </p>
          <p className="mb-4 text-slate-600">We shall not be liable for:</p>
          <ul className={listClass}>
            <li>Any errors, inaccuracies, or omissions in property information</li>
            <li>Any disputes between you and property owners, sellers, or third parties</li>
            <li>Any financial losses resulting from real estate transactions</li>
            <li>Any unauthorized access to or alteration of your data</li>
            <li>Any interruption or cessation of our services</li>
          </ul>

          <h2 className={sectionTitle}>10. Indemnification</h2>
          <p className="mb-4 text-slate-600">
            You agree to indemnify, defend, and hold harmless GPG Global Real Estate, its directors, officers, employees,
            agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses
            (including reasonable attorney&apos;s fees) arising out of or related to:
          </p>
          <ul className={listClass}>
            <li>Your use of our website or services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable laws or third-party rights</li>
            <li>Any information or content you submit or transmit through our services</li>
          </ul>

          <h2 className={sectionTitle}>11. Third-Party Links and Services</h2>
          <p className={bodyText}>
            Our website and marketing materials may contain links to third-party websites, services, or content. We do
            not endorse, control, or assume responsibility for any third-party sites or services. Your use of third-party
            websites is at your own risk and subject to their terms and conditions.
          </p>
          <p className={bodyText}>
            We are not responsible for the content, privacy policies, or practices of third-party websites. We encourage
            you to review the terms and privacy policies of any third-party sites you visit.
          </p>

          <h2 className={sectionTitle}>12. Modification and Termination</h2>

          <h3 className={subTitle}>12.1 Modifications to Terms</h3>
          <p className={bodyText}>
            We reserve the right to modify, update, or replace these Terms at any time at our sole discretion. When we
            make changes, we will update the &quot;Effective Date&quot; at the top of this document and post the revised Terms on
            our website. Your continued use of our website or services after any changes constitutes your acceptance of
            the modified Terms. It is your responsibility to review these Terms periodically.
          </p>

          <h3 className={subTitle}>12.2 Modifications to Services</h3>
          <p className={bodyText}>
            We reserve the right to modify, suspend, or discontinue any aspect of our website or services at any time
            without prior notice or liability.
          </p>

          <h3 className={subTitle}>12.3 Termination</h3>
          <p className={bodyText}>
            We may terminate or suspend your access to our website or services at any time, without prior notice or
            liability, for any reason, including if you breach these Terms.
          </p>

          <h2 className={sectionTitle}>13. Dispute Resolution</h2>

          <h3 className={subTitle}>13.1 Informal Resolution</h3>
          <p className={bodyText}>
            In the event of any dispute, controversy, or claim arising out of or relating to these Terms or our services,
            you agree to first attempt to resolve the dispute informally by contacting us directly.
          </p>

          <h3 className={subTitle}>13.2 Arbitration</h3>
          <p className={bodyText}>
            If informal resolution is unsuccessful, any dispute shall be resolved through binding arbitration in
            accordance with the arbitration rules of the Dubai International Arbitration Centre (DIAC) or another
            mutually agreed arbitration body in Dubai, UAE.
          </p>

          <h2 className={sectionTitle}>14. Governing Law and Jurisdiction</h2>
          <p className={bodyText}>
            These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates and the
            regulations applicable in the Emirate of Dubai. Any legal proceedings arising from these Terms shall be
            subject to the exclusive jurisdiction of the courts of Dubai, UAE.
          </p>

          <h2 className={sectionTitle}>15. Regulatory Compliance</h2>
          <p className={bodyText}>
            GPG Global Real Estate operates in compliance with the regulations of the Dubai Land Department (DLD) and the
            Real Estate Regulatory Agency (RERA). Our brokerage activities are conducted in accordance with UAE real
            estate laws and regulations.
          </p>
          <p className={bodyText}>
            All property transactions facilitated by our company must comply with applicable laws, including but not
            limited to regulations regarding property ownership, transfer, leasing, and registration.
          </p>

          <h2 className={sectionTitle}>16. Severability</h2>
          <p className={bodyText}>
            If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions
            shall continue in full force and effect. The invalid provision shall be modified to the minimum extent
            necessary to make it valid and enforceable.
          </p>

          <h2 className={sectionTitle}>17. Entire Agreement</h2>
          <p className={bodyText}>
            These Terms, together with our{" "}
            <Link href="/privacy-policy" className="font-medium text-[#E31E24] transition hover:text-[#ff4d52]">
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and GPG Global Real Estate regarding your use of our website and
            services, and supersede all prior or contemporaneous communications and proposals.
          </p>

          <h2 className={sectionTitle}>18. Waiver</h2>
          <p className={bodyText}>
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or
            provision. No waiver shall be effective unless made in writing and signed by an authorized representative of
            GPG Global Real Estate.
          </p>

          <h2 className={sectionTitle}>19. Assignment</h2>
          <p className={bodyText}>
            You may not assign or transfer these Terms or any of your rights or obligations under these Terms without our
            prior written consent. We may assign these Terms at any time without notice or consent.
          </p>

          <h2 className={sectionTitle}>20. Contact Information</h2>
          <p className="mb-4 text-slate-600">
            If you have any questions, concerns, or complaints regarding these Terms, please contact us:
          </p>
          <p className="mb-2">
            <a
              href="mailto:enquiries@globalpropertygroup.co"
              className="font-medium text-[#E31E24] transition hover:text-[#ff4d52]"
            >
              enquiries@globalpropertygroup.co
            </a>
          </p>
          <p className={bodyText}>
            <strong className="text-slate-900">GPG Global Real Estate</strong>
            <br />
            Business Bay, Dubai, United Arab Emirates
          </p>

          <h2 className={sectionTitle}>21. Acknowledgment</h2>
          <p className="mb-4 text-slate-600">
            BY USING OUR WEBSITE OR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY
            THESE TERMS AND CONDITIONS.
          </p>
          <p className="text-sm text-slate-500">Last Updated: February 13, 2026</p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#E31E24]/40 to-transparent" />
      </main>

      <Footer />
    </>
  );
}
