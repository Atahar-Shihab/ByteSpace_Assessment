"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0052FF] text-white py-24 sm:py-28">
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

      {/* Floating 3D Shapes */}
      {/* Top Left Lime Spiral */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -left-4 sm:left-4 w-28 sm:w-44 pointer-events-none z-10"
      >
        <Image
          src="/assets/Mask Group.png"
          alt="3D Shape"
          width={180}
          height={180}
          className="object-contain"
        />
      </motion.div>

      {/* Mid Left White Zigzag */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-20 left-12 sm:left-32 w-16 sm:w-24 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame (3).png"
          alt="3D White Spiral"
          width={100}
          height={100}
          className="object-contain"
        />
      </motion.div>

      {/* Bottom Left Lime Torus */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -bottom-10 left-6 sm:left-24 w-28 sm:w-40 pointer-events-none z-10"
      >
        <Image
          src="/assets/Cone (1).png"
          alt="3D Torus"
          width={160}
          height={160}
          className="object-contain"
        />
      </motion.div>

      {/* Top Right Lime Pyramid */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-6 sm:right-28 w-24 sm:w-36 pointer-events-none z-10"
      >
        <Image
          src="/assets/Cone.png"
          alt="3D Lime Cone"
          width={150}
          height={150}
          className="object-contain"
        />
      </motion.div>

      {/* Bottom Right Lime Spiral */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-8 right-6 sm:right-20 w-28 sm:w-44 pointer-events-none z-10"
      >
        <Image
          src="/assets/Frame.png"
          alt="3D Lime Spiral"
          width={180}
          height={180}
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-9 flex justify-center">
          <Link
            href="/register"
            className="inline-block bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
