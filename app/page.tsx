import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import ExclusiveProjects from "@/components/ExclusiveProjects/ExclusiveProjects";
import Slider from "@/components/Slider/Slider";
import StatsBar from "@/components/StatsBar/StatsBar";
import WhyInvest from "@/components/WhyInvest/WhyInvest";
import GPGCoffeeTableBook from "@/components/GPGCoffeeTableBook/GPGCoffeeTableBook";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyWorkWithUs from "@/components/WhyWorkWithUs/WhyWorkWithUs";
import SignatureProperties from "@/components/SignatureProperties/SignatureProperties";
import TrackRecord from "@/components/TrackRecord/TrackRecord";
import InstagramGallery from "@/components/InstagramGallery/InstagramGallery";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <ExclusiveProjects />
      <StatsBar/>
      <WhyInvest />
      <GPGCoffeeTableBook/>
      <Testimonials />
      <WhyWorkWithUs/>
      <SignatureProperties/>
      <TrackRecord />
      <InstagramGallery />
      <Footer />
    </>
  );
}