import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import About from "@/components/About/About";
import WhyInvest from "@/components/WhyInvest/WhyInvest";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrackRecord from "@/components/TrackRecord/TrackRecord";
import InstagramGallery from "@/components/InstagramGallery/InstagramGallery";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider/>
      <About/>
      <WhyInvest/>
      <Testimonials/>
      <TrackRecord/>
      <InstagramGallery/>
      <Footer/>
    </>
  );
}