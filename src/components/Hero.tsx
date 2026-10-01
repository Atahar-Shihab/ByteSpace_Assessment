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

      {/* Floating 3D Geometric Accents matching Figma Prototype Placements */}
      {/* Top Left Lime Spiral */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-0 sm:top-28 sm:left-4 md:left-8 w-24 sm:w-36 md:w-44 pointer-events-none z-10"
      >
        <Image
          src="/assets/Mask Group.png"
          alt="3D Spiral"
          width={180}
          height={180}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Mid Left White Zigzag */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [-30, -25, -30] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[44%] left-4 sm:top-[46%] sm:left-12 md:left-18 w-16 sm:w-22 md:w-28 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Spiral"
          width={110}
          height={110}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Bottom Left White Torus */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-15, -10, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 left-0 sm:bottom-2 sm:left-6 md:left-12 w-28 sm:w-40 md:w-52 pointer-events-none z-10"
      >
        <Image
          src="/assets/Torus_White.png"
          alt="3D White Torus"
          width={200}
          height={200}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Top Right Lime Cone/Cylinder */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [15, 20, 15] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-20 -right-2 sm:top-24 sm:right-4 md:right-8 w-28 sm:w-40 md:w-48 pointer-events-none z-10"
      >
        <Image
          src="/assets/Cone.png"
          alt="3D Lime Cone"
          width={200}
          height={200}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Mid Right White Pyramid / Tetrahedron */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [10, 15, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-[42%] right-6 sm:top-[44%] sm:right-16 md:right-24 w-18 sm:w-26 md:w-32 pointer-events-none z-10"
      >
        <Image
          src="/assets/Pyramid_White.png"
          alt="3D White Pyramid"
          width={130}
          height={130}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Bottom Right White Zigzag */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [15, 20, 15] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -bottom-4 right-0 sm:bottom-2 sm:right-6 md:right-12 w-24 sm:w-36 md:w-44 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Accent"
          width={170}
          height={170}
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.12] font-heading"
          >
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3.5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-normal font-sans"
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
            className="mt-6 sm:mt-7 max-w-xl mx-auto bg-white rounded-full p-1.5 pl-5 sm:pl-6 shadow-2xl flex items-center justify-between transition-shadow hover:shadow-cyan-500/10"
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

        {/* Center Visual: Model with Lime Circle Framing Torso, Head Popping Above into Blue */}
        <div className="mt-6 sm:mt-8 relative max-w-4xl mx-auto flex items-end justify-center">
          
          {/* Lime Green Circle Backdrop - Anchored to bottom, top curve passes behind his headphones */}
          <div className="absolute -bottom-20 sm:-bottom-28 md:-bottom-36 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] lg:w-[620px] lg:h-[620px] rounded-full bg-[#D4F82D] z-0 shadow-2xl shadow-yellow-400/25 pointer-events-none" />

          {/* Young Man with Laptop Image - Head rises above circle into blue background */}
          <div className="relative z-10 w-[300px] sm:w-[420px] md:w-[500px] lg:w-[540px] h-[360px] sm:h-[480px] md:h-[560px] lg:h-[600px] pointer-events-none">
            <Image
              src="/assets/Image (1).png"
              alt="Student learning on ByteSpace"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Badge 1: Top Left - UI/UX Design (level with right cheek/ear, half on circle arc) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-[32%] left-[1%] sm:top-[34%] sm:left-[4%] md:left-[8%] bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100/70 z-20 select-none hidden sm:flex flex-col"
          >
            <span className="font-bold text-sm sm:text-base text-gray-900 font-heading">
              UI/UX Design
            </span>
            <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 font-sans">
              200 Courses • 1000+ Students
            </span>
          </motion.div>

          {/* Badge 2: Top Right - Learning Progress (level with left ear/chest, half on circle arc) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-[36%] right-[1%] sm:top-[38%] sm:right-[4%] md:right-[8%] bg-white text-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100/70 z-20 select-none min-w-[155px] hidden sm:block"
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
            className="absolute bottom-6 left-[1%] sm:bottom-8 sm:left-[2%] md:left-[6%] bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100/70 z-20 select-none flex flex-col min-w-[190px]"
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
    </section>
  );
}
