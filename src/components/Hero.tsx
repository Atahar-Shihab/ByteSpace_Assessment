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
    <section className="relative overflow-hidden bg-[#0052FF] text-white pt-24 sm:pt-28 md:pt-32 pb-0 min-h-[780px] sm:min-h-[850px] lg:min-h-[900px] flex flex-col justify-between">
      {/* Background Grid Pattern - 115px exact Figma grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "115px 115px",
        }}
      />

      {/* Floating 3D Geometric Accents matching Figma prototype placements */}
      {/* 1. Top Left Lime Spiral */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[16%] sm:top-[18%] left-0 hidden lg:block w-[200px] xl:w-[266px] z-10"
      >
        <Image
          src="/figma/shape-1.2i3d3rp3jlv8o.png"
          alt="3D Lime Spiral"
          width={266}
          height={387}
          priority
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* 2. Top Right Lime Cylinder */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="pointer-events-none absolute top-[16%] sm:top-[18%] right-0 hidden lg:block w-[160px] xl:w-[213px] z-10"
      >
        <Image
          src="/figma/shape-2.0al3zppc5iam1.png"
          alt="3D Lime Cylinder"
          width={213}
          height={372}
          priority
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* 3. Mid Left White Zigzag */}
      <motion.div
        animate={{ y: [0, 6, 0], rotate: [-4, 2, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute top-[48%] left-[6%] xl:left-[11%] hidden md:block w-[130px] xl:w-[176px] z-10"
      >
        <Image
          src="/figma/shape-3.2t5j_khpgyytc.png"
          alt="3D White Spiral"
          width={176}
          height={176}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* 4. Mid Right White Pyramid */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [2, -3, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-none absolute top-[48%] right-[5%] xl:right-[8%] hidden md:block w-[140px] xl:w-[189px] z-10"
      >
        <Image
          src="/figma/shape-4.077dmlym5vyaa.png"
          alt="3D White Pyramid"
          width={189}
          height={189}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* 5. Bottom Left White Torus */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-4, 3, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="pointer-events-none absolute bottom-0 left-[8%] xl:left-[14%] z-10 hidden lg:block w-[240px] xl:w-[346px]"
      >
        <Image
          src="/figma/shape-5.1wfd399ri8mjt.png"
          alt="3D White Torus"
          width={346}
          height={343}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* 6. Bottom Right White Zigzag */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [3, -4, 3] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="pointer-events-none absolute right-[10%] xl:right-[15%] bottom-0 z-10 hidden lg:block w-[220px] xl:w-[317px]"
      >
        <Image
          src="/figma/shape-6.0wr9koqszbvku.png"
          alt="3D White Accent"
          width={317}
          height={332}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* Top Section: Text and Search Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.12] font-heading"
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
            className="mt-6 sm:mt-8 max-w-2xl mx-auto bg-white rounded-full p-1.5 pl-6 shadow-2xl flex items-center justify-between transition-shadow hover:shadow-cyan-500/10"
          >
            <div className="flex items-center flex-1 mr-2">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full ml-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 bg-transparent outline-none font-sans"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold px-7 sm:px-9 py-3 sm:py-3.5 rounded-full text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-sm shrink-0 font-sans cursor-pointer"
            >
              Search
            </button>
          </motion.form>
        </div>
      </div>

      {/* Bottom Section: Giant Lime Circle + Centered Person + Floating Metric Cards */}
      <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[530px] z-10 mt-auto flex justify-center items-end pointer-events-none">
        {/* Giant Lime Circle Backdrop anchored behind him, lower portion clipped by overflow-hidden */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 translate-y-[62%] sm:translate-y-[64%]">
          <div className="h-[620px] w-[620px] sm:h-[820px] sm:w-[820px] lg:h-[960px] lg:w-[960px] rounded-full bg-[#D4F82D]" />
        </div>

        {/* Young Man with Laptop Image - Cutout sits flush at bottom-0 */}
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 w-[340px] sm:w-[440px] md:w-[490px] lg:w-[540px] pointer-events-none">
          <Image
            src="/figma/hero.png"
            alt="Student learning on ByteSpace"
            width={540}
            height={540}
            priority
            className="h-auto w-full object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Card 1: UI/UX Design (Level with left shoulder/cheek, fixed translation from center) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-[240px] sm:bottom-[260px] md:bottom-[270px] left-1/2 -translate-x-[260px] sm:-translate-x-[290px] md:-translate-x-[310px] z-20 hidden md:inline-flex flex-col rounded-2xl bg-white p-4 shadow-xl border border-gray-100 pointer-events-auto"
        >
          <h4 className="font-bold text-sm sm:text-base text-gray-950 font-heading">
            UI/UX Design
          </h4>
          <p className="text-xs text-gray-500 font-sans mt-0.5">
            200 Courses • 1000+ Students
          </p>
        </motion.div>

        {/* Card 2: Learning Progress (Level with right chest/arm, fixed translation from center) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-[180px] sm:bottom-[195px] md:bottom-[205px] left-1/2 translate-x-[90px] sm:translate-x-[110px] md:translate-x-[125px] z-20 hidden md:inline-flex w-full max-w-[195px] flex-col rounded-2xl bg-white p-4 shadow-xl border border-gray-100 pointer-events-auto"
        >
          <h4 className="text-xs font-semibold text-gray-500 font-sans mb-1">
            Learning Progress
          </h4>
          <h5 className="text-2xl sm:text-3xl font-extrabold text-gray-950 font-heading mb-2">
            55%
          </h5>
          <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-[#D4F82D] rounded-full" style={{ width: "55%" }} />
          </div>
        </motion.div>

        {/* Card 3: Happy Students (Bottom left, overlapping lower circle, fixed translation from center) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-[35px] sm:bottom-[45px] md:bottom-[50px] left-1/2 -translate-x-[300px] sm:-translate-x-[345px] md:-translate-x-[375px] z-20 hidden sm:inline-flex w-full max-w-[240px] flex-col rounded-2xl bg-white p-4 shadow-xl border border-gray-100 pointer-events-auto"
        >
          <h4 className="font-bold text-xs sm:text-sm text-gray-950 font-heading">
            Happy Students
          </h4>
          <p className="text-xs text-gray-500 font-sans flex items-center gap-1 mb-2 mt-0.5">
            <span className="text-gray-950 font-bold">4.5</span> (240)
            <Star className="w-3.5 h-3.5 fill-[#D4F82D] text-[#c2ea20]" />
          </p>
          <div className="flex items-center -space-x-2 overflow-hidden">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
              <Image src="/figma/user-1.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
              <Image src="/figma/user-2.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
              <Image src="/figma/user-3.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
              <Image src="/figma/user-4.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4F82D] text-[10px] font-bold text-gray-950 ring-2 ring-white">
              26+
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
