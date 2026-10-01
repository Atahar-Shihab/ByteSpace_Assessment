"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0052FF] text-white py-16 sm:py-20 lg:py-24">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "115px 115px",
        }}
      />

      {/* Floating 3D Shapes Left */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute left-0 top-0 w-48 lg:w-60 hidden lg:block">
          <Image
            src="/figma/shape-1.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="absolute left-[10%] top-[10%] w-24 lg:w-32 hidden lg:block">
          <Image
            src="/figma/shape-2.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="absolute left-0 bottom-[10%] w-16 lg:w-20">
          <Image
            src="/figma/shape-3.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="absolute left-[3%] bottom-0 w-44 lg:w-60">
          <Image
            src="/figma/shape-4.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Floating 3D Shapes Right */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute right-[10%] top-[2%] w-24 lg:w-32 hidden lg:block">
          <Image
            src="/figma/shape-5.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="absolute right-0 top-[6%] w-32 lg:w-44 hidden lg:block">
          <Image
            src="/figma/shape-6.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="absolute right-[1%] bottom-0 w-44 lg:w-60">
          <Image
            src="/figma/shape-7.png"
            alt=""
            width={200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-heading max-w-2xl"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-white/85 max-w-3xl leading-relaxed font-sans"
        >
          Experience the collaboration of numerous creators and an expanding selection
          of courses. Register now and become a part of a community comprising over
          10,000 local and international creators. Utilize our Course Editor, and
          showcase your expertise by publishing your finest course on the ByteSpace
          Course Library.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/register"
            className="inline-block bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base transition-all duration-200 active:scale-95 shadow-lg shadow-black/10 font-sans cursor-pointer"
          >
            Join as Creator
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
