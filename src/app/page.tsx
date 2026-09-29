import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { CourseCatalog } from "@/components/CourseCatalog";
import { LearningPaths } from "@/components/LearningPaths";
import { GrowthFeature } from "@/components/GrowthFeature";
import { CreatorFeature } from "@/components/CreatorFeature";
import { CtaBanner } from "@/components/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar theme="blue" />

      {/* Hero with 3D floating decorations and search */}
      <Hero />

      {/* Brand Logos Bar */}
      <LogoCloud />

      {/* Discover Your Passion Course Grid */}
      <CourseCatalog />

      {/* Learning Paths Categories */}
      <LearningPaths />

      {/* Feature 1: Professional Growth */}
      <GrowthFeature />

      {/* Feature 2: Create & Manage Courses */}
      <CreatorFeature />

      {/* CTA Banner */}
      <CtaBanner />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}
