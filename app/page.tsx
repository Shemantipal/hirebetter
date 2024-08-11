import CTA from "@/components/LandingPage/CTA";
import FeaturedVideoSection from "@/components/LandingPage/FeaturedVideoSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import FrequentlyAskedQuestionSection from "@/components/LandingPage/FrequentlyAskedQuestionSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import PricingSection from "@/components/LandingPage/PricingSection";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";
import ToolSection from "@/components/LandingPage/ToolSection";
import TrustedSection from "@/components/LandingPage/TrustedSection";
import { TypographyH1 } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full container mx-auto py-10">
      <TypographyH1 className="font-schoolbell">Home</TypographyH1>
      <HeroSection />
      <FeaturedVideoSection />
      <FeatureSection />
      <ToolSection />
      <PricingSection />
      <TrustedSection />
      <TestimonialSection />
      <CTA />
      <FrequentlyAskedQuestionSection />
    </main>
  );
}
