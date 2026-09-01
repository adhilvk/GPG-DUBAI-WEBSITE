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
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata = staticPageMetadata("/");

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
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
