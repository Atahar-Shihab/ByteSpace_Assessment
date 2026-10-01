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
    <section className="relative overflow-hidden bg-[#0052FF] text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
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
        animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 left-4 md:left-12 w-28 md:w-44 pointer-events-none z-10"
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
        animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-48 left-6 md:left-24 w-20 md:w-28 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Spiral"
          width={120}
          height={120}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Bottom Left Lime Torus */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-10 md:left-32 w-24 md:w-36 pointer-events-none z-10"
      >
        <Image
          src="/assets/Cone (1).png"
          alt="3D Lime Torus"
          width={140}
          height={140}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Top Right Lime Pyramid/Cone */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-12 right-6 md:right-28 w-24 md:w-40 pointer-events-none z-10"
      >
        <Image
          src="/assets/Cone.png"
          alt="3D Lime Cone"
          width={160}
          height={160}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Bottom Right White Zigzag */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-16 right-4 md:right-20 w-24 md:w-36 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Accent"
          width={140}
          height={140}
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.12]"
          >
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-normal"
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
            className="mt-8 sm:mt-10 max-w-xl mx-auto bg-white rounded-full p-1.5 pl-5 sm:pl-6 shadow-2xl flex items-center justify-between transition-shadow hover:shadow-cyan-500/10"
          >
            <div className="flex items-center flex-1 mr-2">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full ml-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4F82D] hover:bg-[#c2e620] text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-sm shrink-0"
            >
              Search
            </button>
          </motion.form>
        </div>

        {/* Center Visual: Model with Lime Circle & Floating Badge Cards */}
        <div className="mt-12 sm:mt-16 relative max-w-3xl mx-auto flex items-center justify-center">
          {/* Lime Green Circle Backdrop */}
          <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] rounded-full bg-[#D4F82D] flex items-center justify-center shadow-2xl shadow-yellow-400/20 overflow-visible">
            {/* Young Man with Laptop Image */}
            <div className="relative w-[340px] sm:w-[480px] md:w-[520px] h-[340px] sm:h-[480px] md:h-[520px] -mt-10 sm:-mt-14 pointer-events-none">
              <Image
                src="/assets/Image (1).png"
                alt="Student learning on ByteSpace"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Badge 1: Top Left - UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-3 -left-4 sm:top-2 sm:-left-12 md:-left-16 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100/60 z-30 select-none hidden sm:flex flex-col"
            >
              <span className="font-bold text-sm sm:text-base text-gray-900">
                UI/UX Design
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5">
                200 Courses • 1000+ Students
              </span>
            </motion.div>

            {/* Badge 2: Top Right - Learning Progress */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-2 -right-4 sm:top-6 sm:-right-8 md:-right-12 bg-white text-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100/60 z-30 select-none min-w-[150px] hidden sm:block"
            >
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium">
                Learning Progress
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-0.5">
                55%
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#D4F82D] h-full w-[55%] rounded-full" />
              </div>
            </motion.div>

            {/* Badge 3: Bottom Left - Happy Students */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-10 md:-left-16 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl border border-gray-100/60 z-30 select-none flex flex-col min-w-[190px]"
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
