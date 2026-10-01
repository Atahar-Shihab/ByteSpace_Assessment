import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ByteSpaceLogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function ByteSpaceLogo({
  variant = "light",
  className = "",
  size = "md",
  showText = true,
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
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <Image
          src="/assets/bytespace_icon.png"
          alt="ByteSpace Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-extrabold tracking-tight ${textColor} font-heading`}>
          ByteSpace
        </span>
      )}
    </Link>
  );
}
