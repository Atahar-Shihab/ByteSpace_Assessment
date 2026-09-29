import React from "react";
import Link from "next/link";

interface ByteSpaceLogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ByteSpaceLogo({
  variant = "light",
  className = "",
  size = "md",
}: ByteSpaceLogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#111827]";
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none transition-opacity hover:opacity-90 ${className}`}
    >
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        {/* ByteSpace custom folded 'b' brandmark */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <rect width="40" height="40" rx="10" fill="transparent" />
          <path
            d="M12 8C12 6.89543 12.8954 6 14 6H19C20.1046 6 21 6.89543 21 8V18.2C22.6 16.8 24.7 16 27 16C32.5228 16 37 20.4772 37 26C37 31.5228 32.5228 36 27 36C21.4772 36 17 31.5228 17 26V23H14C12.8954 23 12 22.1046 12 21V8Z"
            fill="#D4F82D"
          />
          <circle cx="27" cy="26" r="4.5" fill={variant === "light" ? "#0052FF" : "#ffffff"} />
        </svg>
      </div>
      <span className={`${textSizes[size]} font-bold tracking-tight ${textColor}`}>
        Byte<span className="font-extrabold">Space</span>
      </span>
    </Link>
  );
}
