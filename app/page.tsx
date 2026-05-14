import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ExclusiveProjects from "@/components/ExclusiveProjects/ExclusiveProjects";
import Slider from "@/components/Slider/Slider";
import StatsBar from "@/components/StatsBar/StatsBar";
import WhyInvest from "@/components/WhyInvest/WhyInvest";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyWorkWithUs from "@/components/WhyWorkWithUs/WhyWorkWithUs";
import InstagramGallery from "@/components/InstagramGallery/InstagramGallery";
import SubscriptionBanner from "@/components/SubscriptionBanner/SubscriptionBanner";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <ExclusiveProjects />
      <StatsBar />
      <WhyInvest />
      <WhyWorkWithUs />
      <Testimonials />
      <InstagramGallery />
      <SubscriptionBanner/>
      <Footer showCeoLink />
    </>
  );
}