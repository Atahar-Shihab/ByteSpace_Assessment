"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function CreatorFeature() {
  const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 lg:pb-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Figma Ambient Glow Shapes */}
      <div className="absolute bottom-0 left-0 pointer-events-none hidden lg:block z-0">
        <Image
          src="/figma/shape-2.300qx7q3-h4og.png"
          alt=""
          width={425}
          height={554}
          className="w-auto h-auto max-w-none opacity-80"
        />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <Image
          src="/figma/shape-3.0c7xdd966gpi1.png"
          alt=""
          width={758}
          height={712}
          className="w-auto h-auto max-w-none opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-10 md:gap-14 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Visual: Exact Figma Layered Composition */}
          <div className="w-full lg:order-1 lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-[577px]"
            >
              <Image
                src="/figma/featured-2.png"
                alt="Create & Manage Courses Easily"
                width={577}
                height={540}
                priority
                className="h-auto w-full object-cover drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="w-full lg:order-2 lg:flex-1">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight font-heading max-w-xl">
                Create &amp; Manage <br className="hidden sm:inline" />
                Courses Easily.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed font-sans max-w-2xl">
                <span className="font-semibold text-gray-950">ByteSpace</span> supports
                individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>

              {/* Checklist */}
              <ul className="space-y-4 pt-2">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base sm:text-lg font-medium text-gray-900 font-sans">
                    <CheckCircle2 className="w-6 h-6 fill-[#0052FF] text-white shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
