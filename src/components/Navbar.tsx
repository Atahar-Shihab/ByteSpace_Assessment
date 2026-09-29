"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { ByteSpaceLogo } from "./ByteSpaceLogo";

interface NavbarProps {
  theme?: "blue" | "white";
}

export function Navbar({ theme = "blue" }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlue = theme === "blue";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators/purepearl-studio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isBlue
            ? "bg-[#0052FF]/95 backdrop-blur-md shadow-lg shadow-blue-950/20 py-3.5"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ByteSpaceLogo variant={isBlue ? "light" : "dark"} size="md" />
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors relative py-1 ${
                    isBlue
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                      : isActive
                      ? "text-[#0052FF] font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                        isBlue ? "bg-[#D4F82D]" : "bg-[#0052FF]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/login"
              className={`text-[15px] font-medium transition-colors ${
                isBlue
                  ? "text-white/90 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className={`text-[15px] font-medium px-4 py-2 rounded-full transition-all ${
                isBlue
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  : "bg-[#0052FF] hover:bg-[#0045D8] text-white"
              }`}
            >
              Join Us
            </Link>

            {/* Shopping Bag */}
            <Link
              href="/courses"
              aria-label="Shopping Cart"
              className={`relative p-2 rounded-full transition-colors ${
                isBlue
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4F82D] rounded-full" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              href="/courses"
              aria-label="Shopping Cart"
              className={`p-2 rounded-full ${
                isBlue ? "text-white" : "text-gray-700"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isBlue
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-3 pb-6 border-t ${
            isBlue
              ? "bg-[#0047E0] border-blue-400/20 text-white"
              : "bg-white border-gray-100 text-gray-900 shadow-xl"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium rounded-lg hover:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium rounded-xl border border-white/20 hover:bg-white/10"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold rounded-xl bg-[#D4F82D] text-[#111827] hover:bg-[#c6ec22]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
