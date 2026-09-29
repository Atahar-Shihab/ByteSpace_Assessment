"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  // Check if image already has the stats overlay baked into it (Frame 1 and Frame 2)
  const hasBakedInOverlay =
    course.image.includes("Frame (1)") || course.image.includes("Frame (2)");

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200/80 p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
      <div>
        {/* Course Thumbnail Image */}
        <Link
          href={`/courses/${course.slug}`}
          className="relative block aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100"
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Frosted Glass Stat Overlay (rendered dynamically if not already in PNG) */}
          {!hasBakedInOverlay && (
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center justify-between text-[11px] font-medium text-gray-700 shadow-sm border border-white/50">
              <span>{course.lessonsCount} Lessons</span>
              <span className="text-gray-300">•</span>
              <span>{course.duration}</span>
              <span className="text-gray-300">•</span>
              <span>{course.commentsCount} Comments</span>
            </div>
          )}
        </Link>

        {/* Course Info */}
        <div className="pt-3.5 pb-2">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/courses/${course.slug}`}
              className="font-bold text-gray-900 text-base sm:text-[17px] leading-snug group-hover:text-[#0052FF] transition-colors line-clamp-1"
              title={course.title}
            >
              {course.title}
            </Link>
            <div className="flex items-center gap-1 shrink-0 text-sm font-semibold text-gray-800">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
            </div>
          </div>

          {/* Author */}
          <div className="mt-1">
            <Link
              href="/creators/purepearl-studio"
              className="text-xs text-gray-500 hover:text-[#0052FF] transition-colors"
            >
              by <span className="underline decoration-gray-300 hover:decoration-[#0052FF]">{course.instructor}</span>
            </Link>
          </div>

          {/* Meta Level & Student Avatars Stack */}
          <div className="mt-3.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
              <span>{course.level}</span>
            </div>

            {/* Avatars Stack with 26+ Badge */}
            <div className="flex items-center -space-x-1.5">
              <div className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-100">
                <Image
                  src="/assets/Ellipse.png"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-100">
                <Image
                  src="/assets/Ellipse (1).png"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-100">
                <Image
                  src="/assets/Ellipse (2).png"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-100">
                <Image
                  src="/assets/Ellipse (3).png"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full bg-[#D4F82D] text-[#111827] text-[9px] font-bold flex items-center justify-center border border-white">
                26+
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing / Lifetime Access */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-extrabold text-[#0052FF]">
            ${course.price}
          </span>
          <span className="text-xs font-normal text-gray-500">
            {course.billingType}
          </span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="text-xs font-semibold text-gray-700 group-hover:text-[#0052FF] transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
