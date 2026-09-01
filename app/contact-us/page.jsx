import { staticPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar/Navbar";
import ContactUsHero from "@/components/ContactUsHero/ContactUsHero";
import ContactFormSection from "@/components/ContactFormSection/ContactFormSection";
import GPGInstitutionalOutlook from "@/components/GPGInstitutionalOutlook/GPGInstitutionalOutlook";
import Footer from "@/components/Footer/Footer";



export const metadata = staticPageMetadata("/contact-us");

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact-us" },
        ])}
      />
      <Navbar />
      <ContactUsHero/>
      <ContactFormSection/>
      <GPGInstitutionalOutlook/>
      <Footer />
    </>
  );
}