import { FeaturedCourses } from "@/components/FeaturedCourses";
import { HeroPage } from "@/components/HeroPage";
import { OurInstructor } from "@/components/OurInstructor";
import { Testomonial } from "@/components/Testomonial";
import { Webinors } from "@/components/Webinors";
import { WhyChoiesUs } from "@/components/WhyChoiesUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroPage />
      <FeaturedCourses />
      <WhyChoiesUs />
      <Testomonial />
      <Webinors />
      <OurInstructor/>
    </main>
  );
}
