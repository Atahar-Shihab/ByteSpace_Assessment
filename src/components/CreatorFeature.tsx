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
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition (Creator Model with Revenue Badges) */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] h-[480px] sm:h-[540px]">
              {/* Creator with Tablet Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/assets/Image.png"
                  alt="Create and Manage Courses"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Badge 1: Total Revenue (Top Left) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -left-2 sm:-left-6 bg-[#0052FF] text-white rounded-2xl p-4 shadow-xl border border-blue-400/30 z-20 min-w-[140px]"
              >
                <div className="text-[11px] text-blue-100 font-medium">Total Revenue</div>
                <div className="text-[10px] text-blue-200">July 1-28</div>
                <div className="text-xl font-bold mt-1 text-white">$120.29</div>
              </motion.div>

              {/* Floating Badge 2: Year to Date (Mid Left) */}
              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-36 -left-4 sm:-left-8 bg-[#0038B8] text-white rounded-2xl p-4 shadow-xl border border-blue-400/20 z-20 min-w-[160px]"
              >
                <div className="text-[11px] text-blue-200 font-medium">Year to Date</div>
                <div className="text-[10px] text-blue-300">2023</div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <span className="text-lg font-bold text-white">$1,200.38</span>
                  <span className="bg-[#D4F82D] text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +128
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Happy Students (Bottom Center-Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-6 left-2 sm:left-4 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 z-20 min-w-[180px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-xs text-gray-900">Happy Students</span>
                  <span className="flex items-center text-xs font-semibold text-gray-700">
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

              {/* Lime 3D Spiral Decoration */}
              <motion.div
                animate={{ rotate: [0, -8, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-28 -right-2 sm:-right-6 w-24 h-24 pointer-events-none z-10"
              >
                <Image
                  src="/assets/Frame.png"
                  alt="3D Spiral"
                  width={96}
                  height={96}
                  className="object-contain drop-shadow-md"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
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
