// Framework
import { Metadata } from "next";

// Sections
import { HeroSection } from "./sections/hero.section";
import { VendorsSection } from "./sections/vendors.section";

export const metadata: Metadata = {
  title: "Home | Padisquare",
  description: "Discover curated vendors and premium products on Padisquare.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VendorsSection />
    </>
  );
}
