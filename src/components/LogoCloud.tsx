import React from "react";
import Image from "next/image";

export function LogoCloud() {
  const logos = [
    { name: "Logoipsum 1", src: "/figma/logo-1.png", width: 140, height: 34 },
    { name: "Logoipsum 2", src: "/figma/logo-2.png", width: 140, height: 34 },
    { name: "Logoipsum 3", src: "/figma/logo-3.png", width: 140, height: 34 },
    { name: "Logoipsum 4", src: "/figma/logo-4.png", width: 140, height: 34 },
    { name: "Logoipsum 5", src: "/figma/logo-5.png", width: 140, height: 34 },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-10 w-32 sm:w-36 select-none"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-8 sm:max-h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
