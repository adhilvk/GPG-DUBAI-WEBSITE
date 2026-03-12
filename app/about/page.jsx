import Navbar from "@/components/Navbar/Navbar";
import AboutUsHero from "@/components/AboutUsHero/AboutUsHero";
import CEOMessage from "@/components/CEOMessage/CEOMessage";
import About from "@/components/About/About";
import StatsBar from "@/components/StatsBar/StatsBar";
import BeliefMissionVision from "@/components/BeliefMissionVision/BeliefMissionVision";
import Records from "@/components/Records/Records";
import AwardsTimeline from "@/components/AwardsTimeline/AwardsTimeline";
import InvestorCaseStudies from "@/components/InvestorCaseStudies/InvestorCaseStudies";
import TrustedBrokerage from "@/components/TrustedBrokerage/TrustedBrokerage";
import Footer from "@/components/Footer/Footer";
import GPGInstitutionalOutlook from "@/components/GPGInstitutionalOutlook/GPGInstitutionalOutlook";
import BuyRentCTA from "@/components/BuyRentCTA/BuyRentCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
            <CEOMessage />

      <BeliefMissionVision />
      <Records />
      <AwardsTimeline />
      <InvestorCaseStudies />
      <Footer />
    </>
  );
}