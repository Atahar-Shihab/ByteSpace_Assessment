import React from "react";
import Image from "next/image";

export function LogoCloud() {
  const logos = [
    {
      name: "Logoipsum 1",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm0 28c-6.627 0-12-5.373-12-12S13.373 8 20 8s12 5.373 12 12-5.373 12-12 12z" />
          <path d="M20 12c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 2",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
          <path d="M12 10h16v4H12zm0 8h16v4H12zm0 8h10v4H12z" />
          <rect x="4" y="4" width="32" height="32" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 3",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 6l-10 14h8v14l12-16h-10l8-12z" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 4",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
          <circle cx="14" cy="14" r="6" />
          <circle cx="26" cy="14" r="6" />
          <circle cx="14" cy="26" r="6" />
          <circle cx="26" cy="26" r="6" />
        </svg>
      ),
    },
    {
      name: "Logoipsum 5",
      isImage: true,
      src: "/assets/Vector (1).png",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] border-y border-gray-100 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-90 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-700 font-semibold text-lg tracking-tight select-none"
            >
              {logo.isImage && logo.src ? (
                <div className="relative w-8 h-8">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                logo.icon
              )}
              <span>Logoipsum</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
