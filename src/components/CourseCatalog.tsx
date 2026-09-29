"use client";

import React, { useState } from "react";
import { COURSES, CATEGORIES } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { motion, AnimatePresence } from "framer-motion";

export function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("Featured");

  // Filter courses based on active category
  const filteredCourses =
    activeCategory === "Featured"
      ? COURSES.filter((c) => c.featured)
      : COURSES.filter(
          (c) =>
            c.category.toLowerCase() === activeCategory.toLowerCase() ||
            c.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  // If no courses match the filter, fall back to featured to keep UI lively
  const displayCourses =
    filteredCourses.length > 0 ? filteredCourses : COURSES.slice(0, 6);

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none ${
                  isActive
                    ? "bg-[#D4F82D] text-gray-950 font-semibold shadow-sm scale-105"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 sm:mt-16">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence>
              {displayCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
