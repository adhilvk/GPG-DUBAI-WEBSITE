import Navbar from "@/components/Navbar/Navbar";
import ContactUsHero from "@/components/ContactUsHero/ContactUsHero";
import ContactFormSection from "@/components/ContactFormSection/ContactFormSection";
import GPGInstitutionalOutlook from "@/components/GPGInstitutionalOutlook/GPGInstitutionalOutlook";
import Footer from "@/components/Footer/Footer";



export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ContactUsHero/>
      <ContactFormSection/>
      <GPGInstitutionalOutlook/>
      <Footer />
    </>
  );
}