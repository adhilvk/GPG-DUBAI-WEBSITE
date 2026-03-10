import Navbar from "@/components/Navbar/Navbar";
import CEOMessage from "@/components/CEOMessage/CEOMessage";
import About from "@/components/About/About";

import BeliefMissionVision from "@/components/BeliefMissionVision/BeliefMissionVision";
import Records from "@/components/Records/Records";
import AwardsTimeline from "@/components/AwardsTimeline/AwardsTimeline";
import InvestorCaseStudies from "@/components/InvestorCaseStudies/InvestorCaseStudies";
import TrustedBrokerage from "@/components/TrustedBrokerage/TrustedBrokerage";
import Footer from "@/components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <CEOMessage />
      <About />
      <BeliefMissionVision />
      <Records />
      <AwardsTimeline />
      <InvestorCaseStudies />
      <TrustedBrokerage />
      <Footer />
    </>
  );
}