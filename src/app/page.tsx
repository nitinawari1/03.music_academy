import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructures from "@/components/Instructures";
import Navbar from "@/components/Navbar";
import TestiMonialCards from "@/components/TestiMonialCards";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]  text-white ">
     <Navbar />
      <HeroSection />
      <FeaturedCourses />
     <WhyChooseUs />
     <TestiMonialCards/>
     <UpComingWebinar />
     <Instructures />
      </main>
      </>
  );
}
  