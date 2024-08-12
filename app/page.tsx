import CTA from "@/components/LandingPage/CTA";
import FeaturedVideoSection from "@/components/LandingPage/FeaturedVideoSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import FrequentlyAskedQuestionSection from "@/components/LandingPage/FrequentlyAskedQuestionSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import PricingSection from "@/components/LandingPage/PricingSection";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";
import ToolSection from "@/components/LandingPage/ToolSection";
import TrustedSection from "@/components/LandingPage/TrustedSection";
import { TypographyH2 } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full container mx-auto py-10 bg-[#dffd6e]">
      <TypographyH2 className="font-schoolbell">HireBetter</TypographyH2>
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
