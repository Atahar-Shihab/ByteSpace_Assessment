import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/courses";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#F9FCF5] to-white relative overflow-hidden">
      {/* Soft pastel ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8F8B6]/40 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Avatar & Info */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-100">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#0052FF]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
