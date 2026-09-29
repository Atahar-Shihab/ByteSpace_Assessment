"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COURSES } from "@/data/courses";
import {
  Share2,
  Star,
  Users,
  BarChart2,
  Play,
  CheckCircle2,
  FileText,
  Video,
  Award,
  MessageSquare,
  Clock,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const courseSlug = resolvedParams.id;

  const course =
    COURSES.find((c) => c.slug === courseSlug || c.id === courseSlug) ||
    COURSES[1]; // default to Build Digital Asset matching Figma

  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [isPlaying, setIsPlaying] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar theme="blue" />

      {/* Blue Header Section */}
      <section className="bg-[#0052FF] text-white pt-28 pb-20 relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}: A Comprehensive Guide
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <div className="mt-2 text-sm text-white/80">
                by{" "}
                <Link
                  href="/creators/purepearl-studio"
                  className="underline hover:text-white font-medium"
                >
                  {course.instructor}
                </Link>
              </div>

              {/* Badges Row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <BarChart2 className="w-4 h-4 text-blue-600" />
                  <span>{course.level}</span>
                </div>

                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {course.rating.toFixed(1)} ({course.reviewsCount} reviews)
                  </span>
                </div>

                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{course.studentsCount || 199} Students</span>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <div className="shrink-0">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: course.title,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Course link copied to clipboard!");
                  }
                }}
                className="inline-flex items-center gap-2 bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-md active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Video Preview Hero Container */}
          <div className="mt-12 relative w-full aspect-[16/9] max-h-[500px] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border-4 border-white/20">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Course Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                {/* Large Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
                  aria-label="Play course preview"
                >
                  <Play className="w-8 h-8 fill-gray-900 ml-1 group-hover:text-blue-600 transition-colors" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Course Details Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Area */}
            <div className="lg:col-span-8">
              {/* Tab Navigation */}
              <div className="flex items-center gap-3 pb-8">
                {(["about", "lessons", "reviews"] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  const labels = {
                    about: "About",
                    lessons: "Lessons",
                    reviews: "Reviews",
                  };
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                        isActive
                          ? "bg-[#D4F82D] text-gray-950 shadow-sm"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {labels[tab]}
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: About Content */}
              {activeTab === "about" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Description
                    </h3>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                      Embark on an enlightening exploration into the world of
                      digital creation with our comprehensive course, &ldquo;
                      {course.title}: A Comprehensive Guide.&rdquo; This
                      transformative learning experience invites you to delve deep
                      into the intricacies of crafting impactful digital content.
                      From laying the groundwork with foundational concepts to
                      mastering advanced techniques, this guide is meticulously
                      curated to empower you with the skills essential for
                      navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                      In the initial modules, you&apos;ll establish a solid
                      foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation.
                      Understand the fundamental elements that constitute
                      compelling digital content and gain proficiency in
                      leveraging these elements to communicate effectively in the
                      digital realm.
                    </p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                      As you progress through the course, you&apos;ll ascend to
                      higher levels of expertise, delving into the nuances of
                      design principles that drive impactful creations. Uncover the
                      secrets behind effective visual communication, exploring
                      color theory, typography, and layout strategies that elevate
                      your digital assets to new heights.
                    </p>
                  </div>

                  {/* Sneak Peak Preview Images */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Sneak Peak
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                          src="/assets/Frame (1).png"
                          alt="Sneak Peak 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                          src="/assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
                          alt="Sneak Peak 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                          src="/assets/markus-winkler-IrRbSND5EUc-unsplash.jpg"
                          alt="Sneak Peak 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                          src="/assets/dalton-ngangi-ZCztndOWdjs-unsplash.jpg"
                          alt="Sneak Peak 4"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Points Checklist */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Key Points
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Foundational Concepts",
                        "Design Principles Mastery",
                        "Advanced Techniques in Digital Creation",
                        "Project Showcase and Critique",
                        "Optimizing for Various Platforms",
                        "Digital Asset Management Best Practices",
                        "Monetization Strategies",
                        "Capstone Project: Building Your Portfolio",
                      ].map((point, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 fill-[#0052FF] text-white shrink-0" />
                          <span className="text-base font-medium text-gray-800">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Lessons Content */}
              {activeTab === "lessons" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Explore the Modules
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      Immerse yourself in the course content as we break down each
                      module into comprehensive lessons, providing practical
                      insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Modules List */}
                  <div className="space-y-4">
                    {(course.lessonsList || [
                      {
                        moduleNumber: 1,
                        title: "Introduction to Digital Assets",
                        description:
                          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'.",
                      },
                      {
                        moduleNumber: 2,
                        title: "Design Principles for Impact",
                        description:
                          "Master the principles that drive impactful designs with lessons such as 'Color Theory' and 'Typography Essentials'.",
                      },
                      {
                        moduleNumber: 3,
                        title: "User-Centric Design Strategies",
                        description:
                          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.'",
                      },
                      {
                        moduleNumber: 4,
                        title: "Interactive Media and Engagement",
                        description:
                          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.'",
                      },
                      {
                        moduleNumber: 5,
                        title: "Project Showcase and Critique",
                        description:
                          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration.",
                      },
                      {
                        moduleNumber: 6,
                        title: "Optimizing Digital Assets for Various Platforms",
                        description:
                          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.'",
                      },
                    ]).map((mod) => (
                      <div
                        key={mod.moduleNumber}
                        className="p-5 rounded-2xl border border-gray-200/80 hover:border-gray-300 flex items-start gap-4 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#D4F82D] flex items-center justify-center shrink-0">
                          <Video className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">
                            Module {mod.moduleNumber}: {mod.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                            {mod.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900">
                      Lesson Progress Tracking
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Witness your growth as you complete lessons, with an
                      intuitive progress tracking feature guiding you through your
                      learning journey.
                    </p>

                    <div className="mt-4 bg-gray-50 border border-gray-200 p-6 rounded-2xl max-w-lg">
                      <span className="text-xs font-semibold text-gray-500">
                        Learning Progress
                      </span>
                      <div className="text-3xl font-extrabold text-gray-900 mt-1">
                        55%
                      </div>
                      <div className="w-full bg-gray-200 h-2.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-[#D4F82D] h-full w-[55%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Reviews Content */}
              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    Student Reviews & Feedback
                  </h3>
                  <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="text-4xl font-extrabold text-[#0052FF]">
                      4.8
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">
                        Based on 172 student ratings
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xl space-y-6">
                <div>
                  <h4 className="text-lg font-extrabold text-gray-900">
                    112 Lessons (24 hours)
                  </h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold">
                        01 Introduction to Digital Assets
                      </span>
                      <span className="text-gray-400">12 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold">
                        02 Design Principles for Impacts
                      </span>
                      <span className="text-gray-400">21 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold">
                        03 Advanced Techniques in Digital Creation
                      </span>
                      <span className="text-gray-400">16 mins</span>
                    </div>
                    <span className="text-xs text-gray-400 block pt-1">
                      99 more videos
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#0052FF]">
                      ${course.price}
                    </span>
                    <span className="text-xs text-gray-500">
                      {course.billingType}
                    </span>
                  </div>

                  <button
                    onClick={() => setEnrolled(true)}
                    className="w-full mt-4 bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold py-3.5 rounded-full text-base transition-all active:scale-95 shadow-md"
                  >
                    {enrolled ? "Enrolled Successfully! 🎉" : "Enroll Now"}
                  </button>
                </div>

                {/* This course include */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    This course include
                  </h5>
                  <div className="space-y-2.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Learning Resources</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Quality Lesson Videos</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Private Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Creator Card */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src="/assets/charlesdeluvio-cZr2sgaxy3Q-unsplash.jpg"
                        alt="Creator"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">
                        PurePearl Studio
                      </h5>
                      <span className="text-xs text-gray-500">
                        Professional Creator
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  <Link
                    href="/creators/purepearl-studio"
                    className="mt-3 block text-center py-2 px-4 rounded-full border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
