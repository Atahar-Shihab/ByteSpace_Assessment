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
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("all");

  const reviewsData = [
    {
      id: 1,
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/Ellipse.png",
      rating: 5,
      content:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      id: 2,
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/Ellipse (1).png",
      rating: 5,
      content:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: 3,
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/Ellipse (2).png",
      rating: 5,
      content:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/Ellipse (3).png",
      rating: 5,
      content:
        "An absolutely exceptional learning journey. Clear explanations, practical examples, and engaging structure throughout.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar theme="blue" />

      {/* Blue Header Section */}
      <section className="bg-[#0052FF] text-white pt-24 pb-32 sm:pt-28 sm:pb-36 relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-tight font-heading">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2.5 text-base sm:text-lg text-white/90 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <div className="mt-2 text-sm text-white/80">
                by{" "}
                <Link
                  href="/creators/purepearl-studio"
                  className="text-[#D4F82D] hover:underline font-semibold"
                >
                  purepearl studio
                </Link>
              </div>

              {/* Badges Row */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <BarChart2 className="w-4 h-4 text-[#0052FF]" />
                  <span>Intermediate</span>
                </div>

                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (172 reviews)</span>
                </div>

                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                  <Users className="w-4 h-4 text-[#0052FF]" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Button (Lime pill button) */}
            <div className="shrink-0">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Build Digital Asset: A Comprehensive Guide",
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
        </div>
      </section>

      {/* Main 2-Column Content Area with Video & Sidebar Alignment */}
      <section className="relative -mt-20 sm:-mt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column (8 cols): Video Player + Tabs + Tab Content */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Video Player Box */}
              <div className="relative aspect-[16/10] w-full rounded-[28px] overflow-hidden bg-gray-900 shadow-2xl border-4 border-white">
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
                      src="/assets/course_video_preview.png"
                      alt="Build Digital Asset Preview"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Play Button Overlay */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-xs hover:bg-black/60 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
                      aria-label="Play course preview"
                    >
                      <Play className="w-8 h-8 fill-white ml-1 text-white" />
                    </button>
                  </div>
                )}
              </div>

              {/* Tab Navigation: About, Lessons, Reviews */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { key: "about", label: "About" },
                  { key: "lessons", label: "Lesson" },
                  { key: "reviews", label: "Reviews" },
                ].map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                        isActive
                          ? "bg-[#D4F82D] text-gray-950 shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: About Content */}
              {activeTab === "about" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 font-heading">
                      Description
                    </h3>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed font-sans">
                      Embark on an enlightening exploration into the world of
                      digital creation with our comprehensive course, &ldquo;Build
                      Digital Assets: A Comprehensive Guide.&rdquo; This
                      transformative learning experience invites you to delve deep
                      into the intricacies of crafting impactful digital content.
                      From laying the groundwork with foundational concepts to
                      mastering advanced techniques, this guide is meticulously
                      curated to empower you with the skills essential for
                      navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed font-sans">
                      In the initial modules, you&apos;ll establish a solid
                      foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation.
                      Understand the fundamental elements that constitute
                      compelling digital content and gain proficiency in
                      leveraging these elements to communicate effectively in the
                      digital realm.
                    </p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed font-sans">
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
                    <h4 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                      Sneak Peak
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                        <Image
                          src="/assets/Frame (1).png"
                          alt="Sneak Peak 1"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                        <Image
                          src="/assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
                          alt="Sneak Peak 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                        <Image
                          src="/assets/markus-winkler-IrRbSND5EUc-unsplash.jpg"
                          alt="Sneak Peak 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
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
                    <h4 className="text-xl font-bold text-gray-900 mb-4 font-heading">
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
                          <span className="text-base font-medium text-gray-800 font-sans">
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
                    <h3 className="text-2xl font-extrabold text-gray-900 font-heading">
                      Explore the Modules
                    </h3>
                    <p className="mt-2 text-base text-gray-600 font-sans">
                      Immerse yourself in the course content as we break down each
                      module into comprehensive lessons, providing practical
                      insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 font-heading">
                      Lesson List
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          moduleNumber: 1,
                          title: "Introduction to Digital Assets",
                          description:
                            "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
                        },
                        {
                          moduleNumber: 2,
                          title: "Design Principles for Impact",
                          description:
                            "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                        },
                        {
                          moduleNumber: 4,
                          title: "User-Centric Design Strategies",
                          description:
                            "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                        },
                        {
                          moduleNumber: 5,
                          title: "Interactive Media and Engagement",
                          description:
                            "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                        },
                        {
                          moduleNumber: 6,
                          title: "Project Showcase and Critique",
                          description:
                            "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                        },
                        {
                          moduleNumber: 7,
                          title: "Optimizing Digital Assets for Various Platforms",
                          description:
                            "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                        },
                      ].map((mod) => (
                        <div
                          key={mod.moduleNumber}
                          className="p-5 rounded-2xl border border-gray-200/80 hover:border-gray-300 flex items-start gap-4 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#D4F82D] flex items-center justify-center shrink-0 text-gray-900 shadow-sm">
                            <Video className="w-6 h-6 text-gray-900" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-base font-heading">
                              Module {mod.moduleNumber}: {mod.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed font-sans">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Content Description */}
                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                      Lesson Content
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      Engage with each lesson through captivating video content, detailed textual explanations, and
                      interactive elements. Download resources, complete assignments, and test your understanding with
                      quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-gray-900 font-heading">
                      Lesson Progress Tracking
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 font-sans">
                      Witness your growth as you complete lessons, with an
                      intuitive progress tracking feature guiding you through your
                      learning journey.
                    </p>

                    <div className="mt-4 bg-white border border-gray-200/80 p-6 rounded-2xl max-w-lg shadow-sm">
                      <span className="text-xs font-semibold text-gray-500 font-sans">
                        Learning Progress
                      </span>
                      <div className="text-3xl font-extrabold text-gray-900 mt-1 font-heading">
                        55%
                      </div>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full mt-3 overflow-hidden">
                        <div className="bg-[#D4F82D] h-full w-[55%] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Reviews Content */}
              {activeTab === "reviews" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 font-heading">
                      What Learners Are Saying
                    </h3>
                    <p className="mt-2 text-base text-gray-600 leading-relaxed font-sans">
                      Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
                      Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
                      transformative journey of mastering digital asset creation.
                    </p>
                  </div>

                  {/* Rating Breakdown Card matching Figma */}
                  <div className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-8">
                    {/* Lime Ratings Box */}
                    <div className="w-32 h-32 rounded-2xl bg-[#D4F82D] flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="text-xs font-semibold text-gray-800 font-sans">Ratings</span>
                      <span className="text-4xl font-extrabold text-gray-950 font-heading mt-0.5">4.7</span>
                    </div>

                    {/* Star Breakdown Rows */}
                    <div className="flex-1 w-full space-y-2.5">
                      {[
                        { stars: 5, count: 720, percent: "95%" },
                        { stars: 4, count: 120, percent: "35%" },
                        { stars: 3, count: 21, percent: "15%" },
                        { stars: 2, count: 12, percent: "8%" },
                        { stars: 1, count: 16, percent: "10%" },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-4 text-xs font-medium text-gray-600">
                          {/* Progress Bar */}
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#D4F82D] rounded-full"
                              style={{ width: row.percent }}
                            />
                          </div>
                          {/* Stars */}
                          <div className="flex items-center gap-0.5 text-gray-800 shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                            ))}
                          </div>
                          {/* Count */}
                          <span className="w-8 text-right font-semibold text-gray-700 font-sans shrink-0">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews Section */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 font-heading">
                      Individual Reviews:
                    </h4>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {[
                        { key: "all", label: "All rating" },
                        { key: "5", label: "★ 5" },
                        { key: "4", label: "★ 4" },
                        { key: "3", label: "★ 3" },
                        { key: "2", label: "★ 2" },
                        { key: "1", label: "★ 1" },
                      ].map((filter) => (
                        <button
                          key={filter.key}
                          onClick={() => setSelectedRatingFilter(filter.key)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                            selectedRatingFilter === filter.key
                              ? "bg-[#D4F82D] text-gray-950"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>

                    {/* Review Cards List */}
                    <div className="space-y-4">
                      {reviewsData.map((review) => (
                        <div
                          key={review.id}
                          className="p-6 rounded-3xl border border-gray-200/80 bg-white shadow-sm space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                <Image
                                  src={review.avatar}
                                  alt={review.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 text-sm font-heading">
                                  {review.name}
                                </h5>
                                <span className="text-xs text-gray-500 font-sans">
                                  {review.role}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-400 font-sans">
                              {review.time}
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-3.5 h-3.5 fill-gray-900 text-gray-900"
                              />
                            ))}
                          </div>

                          <p className="text-sm text-gray-600 leading-relaxed font-sans">
                            &ldquo;{review.content}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Sticky Course Details Sidebar Card */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100/90 space-y-6">
                <div>
                  <h4 className="text-lg font-extrabold text-gray-900 font-heading">
                    112 Lessons (24 hours)
                  </h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold font-sans">
                        01 Introduction to Digital Assets
                      </span>
                      <span className="text-blue-600 font-medium font-sans">12 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold font-sans">
                        02 Design Principles for Impacts
                      </span>
                      <span className="text-blue-600 font-medium font-sans">21 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold font-sans">
                        03 Advanced Techniques in Digital Creation
                      </span>
                      <span className="text-blue-600 font-medium font-sans">16 mins</span>
                    </div>
                    <span className="text-xs text-gray-400 block pt-1 font-sans">
                      99 more videos
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#0052FF] font-heading">
                      $25
                    </span>
                    <span className="text-xs text-gray-500 font-sans">
                      /lifetime
                    </span>
                  </div>

                  <button
                    onClick={() => setEnrolled(true)}
                    className="w-full mt-4 bg-[#D4F82D] hover:bg-[#c2e620] text-gray-950 font-bold py-3.5 rounded-full text-base transition-all active:scale-95 shadow-md font-sans"
                  >
                    {enrolled ? "Enrolled Successfully! 🎉" : "Enroll Now"}
                  </button>
                </div>

                {/* This course include */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-heading">
                    This course include
                  </h5>
                  <div className="space-y-2.5 text-xs text-gray-600 font-sans">
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
                      <h5 className="font-bold text-gray-900 text-sm font-heading">
                        PurePearl Studio
                      </h5>
                      <span className="text-xs text-gray-500 font-sans">
                        Professional Creator
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed font-sans">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  <Link
                    href="/creators/purepearl-studio"
                    className="mt-3 block text-center py-2 px-4 rounded-full border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors font-sans"
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
