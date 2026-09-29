"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { COURSES } from "@/data/courses";
import { CREATORS } from "@/data/creators";
import { SlidersHorizontal, BarChart2, FolderTree, ChevronDown } from "lucide-react";

export default function CreatorProfilePage() {
  const creator = CREATORS["purepearl-studio"];
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creator.followersCount);

  const creatorCourses = COURSES.filter((c) =>
    c.instructor.toLowerCase().includes("pure")
  );

  const toggleFollow = () => {
    if (isFollowing) {
      setFollowers((prev) => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowers((prev) => prev + 1);
      setIsFollowing(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar theme="blue" />

      {/* Blue Header Section */}
      <section className="bg-[#0052FF] text-white pt-28 pb-16 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Creator Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-white/10 border-2 border-white/40 shrink-0 shadow-xl">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Creator Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {creator.name}
                </h1>
                <span className="bg-[#D4F82D] text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-sm sm:text-base text-white/90 font-medium">
                {creator.role}
              </p>
            </div>
          </div>

          {/* Bio text */}
          <p className="mt-6 text-sm sm:text-base text-white/85 max-w-4xl leading-relaxed">
            {creator.bio}
          </p>

          {/* Stats & Follow Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="bg-white text-gray-900 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
              <span className="text-[#0052FF]">{creatorCourses.length}</span> Products
            </div>

            <div className="bg-white text-gray-900 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
              <span className="text-[#0052FF]">{followers}</span> Followers
            </div>

            <button
              onClick={toggleFollow}
              className={`px-7 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                isFollowing
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* Main Course Listing by this Creator */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
              </button>

              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <BarChart2 className="w-4 h-4" />
                <span>Level</span>
              </button>

              <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <FolderTree className="w-4 h-4" />
                <span>Category</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200 px-4 py-2 rounded-full">
              <span>Most relevant</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Grid of Courses */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {creatorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
