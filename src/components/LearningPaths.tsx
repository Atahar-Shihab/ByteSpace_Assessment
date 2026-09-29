import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Code, Laptop, Building2, Megaphone, Camera } from "lucide-react";

export function LearningPaths() {
  const paths = [
    {
      title: "Design",
      slug: "UI/UX Design",
      customIcon: "/assets/Frame 4.png",
    },
    {
      title: "Development",
      slug: "Web Development",
      icon: <Code className="w-6 h-6 text-gray-900" />,
    },
    {
      title: "IT & Software",
      slug: "Data Science",
      icon: <Laptop className="w-6 h-6 text-gray-900" />,
    },
    {
      title: "Business",
      slug: "Business",
      icon: <Building2 className="w-6 h-6 text-gray-900" />,
    },
    {
      title: "Marketing",
      slug: "Marketing",
      icon: <Megaphone className="w-6 h-6 text-gray-900" />,
    },
    {
      title: "Photography",
      slug: "Photography",
      icon: <Camera className="w-6 h-6 text-gray-900" />,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring
            there&apos;s something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={`/courses?category=${encodeURIComponent(path.slug)}`}
              className="group bg-white rounded-2xl border border-gray-200/70 hover:border-gray-300 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1.5"
            >
              {/* Lime Circular Icon */}
              <div className="w-14 h-14 rounded-full bg-[#D4F82D] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                {path.customIcon ? (
                  <div className="relative w-8 h-8">
                    <Image
                      src={path.customIcon}
                      alt={path.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  path.icon
                )}
              </div>

              {/* Title */}
              <span className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#0052FF] transition-colors">
                {path.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
