import { staticPageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar/Navbar";
import TeamHero from "@/components/TeamHero/TeamHero";
import WhyWorkWithUs from "@/components/WhyWorkWithUs/WhyWorkWithUs";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Footer from "@/components/Footer/Footer";

export const metadata = staticPageMetadata("/our-teams");

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Our Team", path: "/our-teams" },
        ])}
      />
      <Navbar />
      <div className="home-page">
        <TeamHero />
        <WhyWorkWithUs />
        <TeamMembers />
      </div>
      <Footer />
    </>
  );
}