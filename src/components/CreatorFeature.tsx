"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export function CreatorFeature() {
  const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="pt-4 sm:pt-6 pb-20 sm:pb-28 bg-gradient-to-bl from-white via-white to-[#F4F8EB]/30 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4F82D]/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Visual Composition with Depth Layering */}
          <div className="md:col-span-1 relative flex justify-center items-center order-2 md:order-1">
            <div className="relative w-full max-w-[480px] h-[500px] sm:h-[550px]">

              {/* BEHIND LAYER (z-10): Total Revenue Card reaching higher than shoulder */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 sm:-top-6 left-0 sm:left-2 bg-[#0052FF] text-white rounded-2xl p-4 shadow-xl border border-blue-400/30 z-10 min-w-[150px]"
              >
                <div className="text-[11px] text-blue-100 font-medium font-sans">Total Revenue</div>
                <div className="text-[10px] text-blue-200 font-sans">July 1-28</div>
                <div className="text-xl font-bold mt-1 text-white font-heading">$120.29</div>
                <div className="w-full bg-blue-400/40 h-1.5 rounded-full mt-2.5 overflow-hidden">
                  <div className="bg-[#D4F82D] h-full w-[70%] rounded-full" />
                </div>
              </motion.div>

              {/* BEHIND LAYER (z-10): Year to Date Card tucked behind right arm/jacket */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-36 sm:top-40 left-0 sm:left-2 bg-[#0038B8] text-white rounded-2xl p-4 shadow-xl border border-blue-400/20 z-10 min-w-[165px]"
              >
                <div className="text-[11px] text-blue-200 font-medium font-sans">Year to Date</div>
                <div className="text-[10px] text-blue-300 font-sans">2023</div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <span className="text-lg font-bold text-white font-heading">$1,200.38</span>
                  <span className="bg-[#D4F82D] text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full font-sans">
                    +128
                  </span>
                </div>
              </motion.div>

              {/* BEHIND LAYER (z-10): Lime 3D Spiral tucked behind left arm */}
              <motion.div
                animate={{ rotate: [0, -8, 0], y: [0, 7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 sm:top-36 right-6 sm:right-10 w-24 h-24 pointer-events-none z-10"
              >
                <Image
                  src="/assets/Frame.png"
                  alt="3D Spiral"
                  width={96}
                  height={96}
                  className="object-contain drop-shadow-md"
                />
              </motion.div>

              {/* MIDDLE LAYER (z-20): Creator Model Woman Image */}
              <div className="relative w-full h-full z-20 pointer-events-none">
                <Image
                  src="/assets/Image.png"
                  alt="Create and Manage Courses"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* FOREGROUND LAYER (z-30): Happy Students Badge sits in front overlapping lower right body */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-4 sm:bottom-6 right-0 sm:right-4 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 z-30 min-w-[185px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-xs text-gray-900 font-heading">Happy Students</span>
                  <span className="flex items-center text-xs font-semibold text-gray-700 font-sans">
                    4.5 (240){" "}
                    <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308] ml-1" />
                  </span>
                </div>
                {/* Avatars */}
                <div className="flex items-center mt-2 -space-x-2">
                  <div className="relative w-6 h-6 rounded-full border border-white overflow-hidden bg-gray-100">
                    <Image src="/assets/Ellipse.png" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative w-6 h-6 rounded-full border border-white overflow-hidden bg-gray-100">
                    <Image src="/assets/Ellipse (1).png" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="relative w-6 h-6 rounded-full border border-white overflow-hidden bg-gray-100">
                    <Image src="/assets/Ellipse (2).png" alt="Student" fill className="object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#111827] text-white text-[9px] font-bold flex items-center justify-center border border-white">
                    2K+
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="md:col-span-1 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              <span className="font-semibold text-gray-900">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="rounded-full bg-blue-50 p-1 text-[#0052FF]">
                    <CheckCircle2 className="w-5 h-5 fill-[#0052FF] text-white" />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
