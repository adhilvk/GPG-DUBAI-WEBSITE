import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ExclusiveProjects from "@/components/ExclusiveProjects/ExclusiveProjects";
import Slider from "@/components/Slider/Slider";
import WhyInvest from "@/components/WhyInvest/WhyInvest";
import HashScroll from "@/components/HashScroll/HashScroll";
import Testimonials from "@/components/Testimonials/Testimonials";
import InstagramGallery from "@/components/InstagramGallery/InstagramGallery";
import SubscriptionBanner from "@/components/SubscriptionBanner/SubscriptionBanner";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HashScroll />
      <div className="home-page">
        <Hero />
        <Slider />
        <WhyInvest />
        <ExclusiveProjects />
        <Testimonials />
        <InstagramGallery />
        <SubscriptionBanner />
      </div>
      <Footer />
    </>
  );
}