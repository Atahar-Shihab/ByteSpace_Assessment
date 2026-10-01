"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0052FF] text-white pt-24 sm:pt-28 pb-0">
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

      {/* Floating 3D Geometric Accents */}
      {/* Top Left Lime Spiral */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 -left-4 sm:top-16 sm:left-4 md:left-10 w-28 sm:w-40 md:w-48 pointer-events-none z-10"
      >
        <Image
          src="/assets/Mask Group.png"
          alt="3D Spiral"
          width={190}
          height={190}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Mid Left White Zigzag */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-48 left-6 sm:top-56 sm:left-16 md:left-24 w-18 sm:w-24 md:w-30 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Spiral"
          width={120}
          height={120}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Bottom Left White Torus */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-10 -left-6 sm:-bottom-8 sm:left-4 md:left-10 w-36 sm:w-48 md:w-60 pointer-events-none z-10"
      >
        <Image
          src="/assets/Torus_White.png"
          alt="3D White Torus"
          width={220}
          height={220}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Top Right Lime Cone/Cylinder */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-12 -right-4 sm:top-16 sm:right-6 md:right-12 w-32 sm:w-44 md:w-52 pointer-events-none z-10"
      >
        <Image
          src="/assets/Cone.png"
          alt="3D Lime Cone"
          width={210}
          height={210}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Mid Right White Pyramid / Tetrahedron */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-52 right-8 sm:top-60 sm:right-20 md:right-32 w-20 sm:w-28 md:w-36 pointer-events-none z-10"
      >
        <Image
          src="/assets/Pyramid_White.png"
          alt="3D White Pyramid"
          width={150}
          height={150}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Bottom Right White Zigzag */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -bottom-6 right-2 sm:bottom-0 sm:right-10 md:right-16 w-28 sm:w-40 md:w-48 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Accent"
          width={180}
          height={180}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold tracking-tight leading-[1.12] font-heading"
          >
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-normal font-sans"
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </motion.p>

          {/* Search Form Pill */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-8 max-w-xl mx-auto bg-white rounded-full p-1.5 pl-5 sm:pl-6 shadow-2xl flex items-center justify-between transition-shadow hover:shadow-cyan-500/10"
          >
            <div className="flex items-center flex-1 mr-2">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full ml-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none font-sans"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4F82D] hover:bg-[#c2e620] text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-sm shrink-0 font-sans"
            >
              Search
            </button>
          </motion.form>
        </div>

        {/* Center Visual: Model with Large Lime Circle Anchored to Bottom */}
        <div className="mt-8 sm:mt-10 relative max-w-5xl mx-auto flex items-end justify-center overflow-visible">
          {/* Lime Green Circle Backdrop - Anchored to bottom with negative margin */}
          <div className="relative w-[440px] h-[440px] sm:w-[600px] sm:h-[600px] md:w-[720px] md:h-[720px] lg:w-[820px] lg:h-[820px] -mb-28 sm:-mb-40 md:-mb-52 lg:-mb-60 rounded-full bg-[#D4F82D] flex items-center justify-center shadow-2xl shadow-yellow-400/25 overflow-visible">
            {/* Young Man with Laptop Image */}
            <div className="relative w-[360px] sm:w-[500px] md:w-[600px] lg:w-[680px] h-[360px] sm:h-[500px] md:h-[600px] lg:h-[680px] -mt-16 sm:-mt-24 pointer-events-none">
              <Image
                src="/assets/Image (1).png"
                alt="Student learning on ByteSpace"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Badge 1: Top Left - UI/UX Design (level with cheek/ear) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-[28%] -left-2 sm:top-[28%] sm:left-[4%] md:left-[8%] lg:left-[10%] bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100/70 z-30 select-none hidden sm:flex flex-col"
            >
              <span className="font-bold text-sm sm:text-base text-gray-900 font-heading">
                UI/UX Design
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 font-sans">
                200 Courses • 1000+ Students
              </span>
            </motion.div>

            {/* Badge 2: Top Right - Learning Progress (level with chest/shoulder) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[32%] -right-2 sm:top-[32%] sm:right-[4%] md:right-[8%] lg:right-[10%] bg-white text-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100/70 z-30 select-none min-w-[155px] hidden sm:block"
            >
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium font-sans">
                Learning Progress
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-0.5 font-heading">
                55%
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#D4F82D] h-full w-[55%] rounded-full" />
              </div>
            </motion.div>

            {/* Badge 3: Bottom Left - Happy Students (overlapping lower circle and forearm) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-[36%] -left-2 sm:bottom-[34%] sm:left-[2%] md:left-[6%] lg:left-[8%] bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100/70 z-30 select-none flex flex-col min-w-[190px]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-xs sm:text-sm text-gray-900">
                  Happy Students
                </span>
                <span className="flex items-center text-xs font-semibold text-gray-700">
                  4.5 (240){" "}
                  <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308] ml-1" />
                </span>
              </div>
              {/* Avatar Stack */}
              <div className="flex items-center mt-2 -space-x-2">
                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/Ellipse.png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/Ellipse (1).png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/Ellipse (2).png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <Image
                    src="/assets/Ellipse (3).png"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full bg-[#111827] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  2K+
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
