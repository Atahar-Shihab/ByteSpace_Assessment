import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/courses";

export function Testimonials() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden bg-white">
      {/* Figma Ambient Glow Shapes */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0">
        <Image
          src="/figma/shape-1.3dpfb2gt8sioj.png"
          alt=""
          width={735}
          height={675}
          className="w-auto h-auto max-w-none opacity-80"
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 h-full w-auto">
        <Image
          src="/figma/shape-2.44f6xft5oazuu.png"
          alt=""
          width={752}
          height={574}
          className="w-auto h-full max-w-none opacity-80"
        />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none z-0">
        <Image
          src="/figma/shape-3.3tozbxua2s88_.png"
          alt=""
          width={638}
          height={784}
          className="w-auto h-auto max-w-none opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Grid */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:gap-12 mb-12 sm:mb-16">
          <div className="w-full lg:flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight font-heading max-w-xl">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>
          <p className="w-full max-w-2xl text-base sm:text-lg text-gray-500 font-normal leading-relaxed font-sans lg:flex-1">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100/90 shadow-xl shadow-gray-200/30 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Avatar & Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-base sm:text-lg font-heading">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#0052FF] font-sans">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed font-sans">
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
