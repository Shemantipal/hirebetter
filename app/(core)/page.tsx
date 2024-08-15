import CTA from "@/components/LandingPage/CTA";
import FeaturedVideoSection from "@/components/LandingPage/FeaturedVideoSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import FrequentlyAskedQuestionSection from "@/components/LandingPage/FrequentlyAskedQuestionSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import PricingSection from "@/components/LandingPage/PricingSection";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";
import ToolSection from "@/components/LandingPage/ToolSection";
import TrustedSection from "@/components/LandingPage/TrustedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <FeaturedVideoSection /> */}
      {/* <FeatureSection /> */}
      <ToolSection />
      {/* <PricingSection /> */}
      {/* <TrustedSection /> */}
      <TestimonialSection />
      {/* <CTA /> */}
      <FrequentlyAskedQuestionSection />
    </>
  );
}
