"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function GrowthFeature() {
  const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#EEF2FF] via-white to-white relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4F82D]/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="md:col-span-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Row */}
            <div className="mt-10 sm:mt-12 flex items-center gap-8 sm:gap-14">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-gray-600 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Composition with Depth Layering */}
          <div className="md:col-span-1 relative flex justify-center items-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[480px] h-[500px] sm:h-[540px]">
              
              {/* BEHIND LAYER (z-10): Course Card tucked behind right shoulder */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-0 sm:left-2 bg-white rounded-2xl p-3.5 shadow-xl border border-gray-100/90 w-[230px] sm:w-[250px] z-10"
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100 mb-2">
                  <Image
                    src="/assets/Frame (1).png"
                    alt="Learn Figma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs font-bold text-gray-900 truncate font-heading">
                  Learn Figma from Basic
                </div>
                <div className="text-[10px] text-gray-400 font-sans">by purepearl studio</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0052FF] font-sans">$25/lifetime</span>
                  <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Beginner</span>
                </div>
              </motion.div>

              {/* BEHIND LAYER (z-10): Learning Progress Badge tucked behind left arm */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-44 right-0 sm:right-2 bg-white rounded-2xl p-4 shadow-xl border border-gray-100/90 min-w-[160px] z-10"
              >
                <span className="text-[11px] text-gray-500 font-medium font-sans">Learning Progress</span>
                <div className="text-2xl font-extrabold text-gray-900 mt-0.5 font-heading">55%</div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#D4F82D] h-full w-[55%] rounded-full" />
                </div>
              </motion.div>

              {/* BEHIND LAYER (z-10): Floating 3D Lime Spiral tucked behind left shoulder */}
              <motion.div
                animate={{ rotate: [0, 8, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-6 sm:right-10 w-24 h-24 pointer-events-none z-10"
              >
                <Image
                  src="/assets/Frame.png"
                  alt="Lime 3D Spiral"
                  width={96}
                  height={96}
                  className="object-contain drop-shadow-md"
                />
              </motion.div>

              {/* FOREGROUND LAYER (z-20): Young Man with Laptop Image sits IN FRONT */}
              <div className="relative w-full h-full z-20 pointer-events-none">
                <Image
                  src="/assets/Image (1).png"
                  alt="Professional Growth"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
