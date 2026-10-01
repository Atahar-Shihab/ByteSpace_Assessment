import React from "react";
import Link from "next/link";
import Image from "next/image";

export function LearningPaths() {
  const paths = [
    {
      title: "Design",
      slug: "UI/UX Design",
      iconSrc: "/figma/icon-1.png",
    },
    {
      title: "Development",
      slug: "Web Development",
      iconSrc: "/figma/icon-2.png",
    },
    {
      title: "IT & Software",
      slug: "Data Science",
      iconSrc: "/figma/icon-3.png",
    },
    {
      title: "Business",
      slug: "Business",
      iconSrc: "/figma/icon-4.png",
    },
    {
      title: "Marketing",
      slug: "Marketing",
      iconSrc: "/figma/icon-5.png",
    },
    {
      title: "Photography",
      slug: "Photography",
      iconSrc: "/figma/icon-6.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight font-heading">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-normal leading-relaxed font-sans">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring
            there&apos;s something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={`/courses?category=${encodeURIComponent(path.slug)}`}
              className="group bg-white rounded-3xl border border-gray-200/80 hover:border-gray-300 p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1.5"
            >
              {/* Figma Lime Circular Icon */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={path.iconSrc}
                  alt={path.title}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title */}
              <span className="font-semibold text-gray-950 text-sm sm:text-base group-hover:text-[#0052FF] transition-colors font-sans">
                {path.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
