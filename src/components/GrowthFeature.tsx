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
    <section className="pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-14 bg-[#FAFAFA] relative overflow-hidden">
      {/* Figma Ambient Glow Shapes */}
      <div className="absolute top-0 left-[10%] pointer-events-none z-0">
        <Image
          src="/figma/shape-1.1tg3v3txbi1hq.png"
          alt=""
          width={1025}
          height={711}
          className="w-auto h-auto max-w-none opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-10 md:gap-14 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Text Column */}
          <div className="w-full lg:flex-1">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight font-heading max-w-xl">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed font-sans max-w-2xl">
                Explore our curated selection of courses tailored to enhance your
                capabilities and accelerate your career journey. Whether you are
                looking to sharpen specific skills, gain industry expertise, or
                embark on a new career path entirely, we have the resources you
                need.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 sm:gap-14 pt-2">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0052FF] tracking-tight font-heading">
                      {stat.value}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-gray-600 mt-1 font-sans">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Composition: Exact Figma Layered Composition */}
          <div className="w-full lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-[577px]"
            >
              <Image
                src="/figma/featured-1.png"
                alt="Your Path to Professional Growth"
                width={577}
                height={540}
                priority
                className="h-auto w-full object-cover drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
