import Navbar from "@/components/Navbar/Navbar";
import TeamHero from "@/components/TeamHero/TeamHero";
import WhyWorkWithUs from "@/components/WhyWorkWithUs/WhyWorkWithUs";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Footer from "@/components/Footer/Footer";

export default function TeamPage() {
  return (
    <>
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