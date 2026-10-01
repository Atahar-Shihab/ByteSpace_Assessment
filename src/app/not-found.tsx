import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar theme="blue" />

      {/* 404 Hero Section */}
      <section className="bg-[#0052FF] text-white pt-36 pb-28 md:pt-44 md:pb-36 flex-1 flex items-center justify-center relative overflow-hidden text-center">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
          {/* Giant Vibrant Lime Gradient 404 */}
          <div
            aria-hidden="true"
            className="relative z-0 select-none font-heading font-black text-[180px] sm:text-[260px] md:text-[320px] lg:text-[380px] leading-none tracking-tight bg-gradient-to-b from-[#D4F82D] via-[#D4F82D]/85 to-transparent bg-clip-text text-transparent -mb-20 sm:-mb-28 md:-mb-36 lg:-mb-44"
          >
            404
          </div>

          {/* Heading overlapping on top of 404 */}
          <h1 className="relative z-10 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.2] max-w-3xl mx-auto">
            The page you are looking <br />
            for doesn&apos;t exist
          </h1>

          {/* Small description text */}
          <p className="relative z-10 mt-6 text-sm sm:text-base text-white/80 max-w-md mx-auto font-sans">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Action button */}
          <div className="relative z-10 mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 active:scale-95 shadow-lg shadow-black/10 font-sans"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
