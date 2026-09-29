import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar theme="blue" />

      {/* 404 Hero Section */}
      <section className="bg-[#0052FF] text-white pt-32 pb-24 flex-1 flex items-center justify-center relative overflow-hidden text-center">
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

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 py-12">
          {/* Giant Gradient Lime 404 */}
          <div className="text-[140px] sm:text-[200px] md:text-[240px] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#E2FD42] to-[#8BC34A] select-none drop-shadow-xl">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">
            The page you are looking <br className="hidden sm:inline" />
            for doesn&apos;t exist
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-md mx-auto">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-xl active:scale-95"
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
