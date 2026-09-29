"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { COURSES, CATEGORIES } from "@/data/courses";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  BarChart2,
  FolderTree,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "Featured";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [showLevelFilter, setShowLevelFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter & Search logic
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Category match
      const matchesCategory =
        selectedCategory === "Featured"
          ? true
          : course.category.toLowerCase() === selectedCategory.toLowerCase() ||
            course.category.toLowerCase().includes(selectedCategory.toLowerCase());

      // Level match
      const matchesLevel =
        selectedLevel === "All" ? true : course.level === selectedLevel;

      // Query match
      const matchesQuery =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesLevel && matchesQuery;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filterCategories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar theme="blue" />

      {/* Blue Header Section */}
      <section className="bg-[#0052FF] text-white pt-32 pb-16 relative overflow-hidden">
        {/* Grid pattern */}
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar with Courses Dropdown Button */}
          <div className="mt-8 max-w-xl mx-auto bg-white rounded-full p-1.5 pl-5 shadow-2xl flex items-center justify-between text-gray-800">
            <div className="flex items-center flex-1 mr-2">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full ml-3 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
              />
            </div>
            <div className="relative">
              <button
                type="button"
                className="bg-[#D4F82D] hover:bg-[#c4ea21] text-gray-950 font-bold px-5 py-2.5 rounded-full text-sm transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Listing Section */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
            {/* Filter Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedCategory("Featured")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowLevelFilter(!showLevelFilter)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-colors ${
                    selectedLevel !== "All"
                      ? "border-[#0052FF] text-[#0052FF] bg-blue-50"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <BarChart2 className="w-4 h-4" />
                  <span>Level: {selectedLevel}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {showLevelFilter && (
                  <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-20">
                    {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                      <button
                        key={level}
                        onClick={() => {
                          setSelectedLevel(level);
                          setShowLevelFilter(false);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg ${
                          selectedLevel === level
                            ? "bg-[#0052FF] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedCategory("Featured")}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FolderTree className="w-4 h-4" />
                <span>Category</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200 px-4 py-2 rounded-full">
              <span>Most relevant</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {filterCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#D4F82D] text-gray-950 font-bold shadow-sm"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/60"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Course Grid */}
          <div className="mt-10">
            {displayedCourses.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-base font-semibold text-gray-700">
                  No courses found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Featured");
                    setSelectedLevel("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#0052FF] text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <AnimatePresence>
                  {displayedCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <CourseCard course={course} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition-colors ${
                      isCurrent
                        ? "bg-[#D4F82D] text-gray-950 shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-40"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CoursesContent />
    </Suspense>
  );
}
