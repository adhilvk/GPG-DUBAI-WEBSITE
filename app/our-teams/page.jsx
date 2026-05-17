import Navbar from "@/components/Navbar/Navbar";
import TeamHero from "@/components/TeamHero/TeamHero";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Footer from "@/components/Footer/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <TeamHero />
      <TeamMembers />
      <Footer />
    </>
  );
}