"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ByteSpaceLogo } from "./ByteSpaceLogo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const col1 = [
    { name: "Featured Courses", href: "/courses" },
    { name: "Featured Categories", href: "/courses" },
    { name: "Business", href: "/courses?category=Business" },
    { name: "IT", href: "/courses?category=Data+Science" },
    { name: "Design", href: "/courses?category=UI%2FUX+Design" },
  ];

  const col2 = [
    { name: "Development", href: "/courses?category=Web+Development" },
    { name: "Marketing", href: "/courses?category=Marketing" },
    { name: "Photography", href: "/courses?category=Photography" },
    { name: "Finance", href: "/courses?category=Finance" },
    { name: "Sport", href: "/courses" },
  ];

  const col3 = [
    { name: "Become a Creator", href: "/register" },
    { name: "Affiliate Program", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Help", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gray-100">
          {/* Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <ByteSpaceLogo variant="dark" size="md" />

            <p className="mt-5 text-sm text-gray-600 max-w-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#0052FF] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#D4F82D] hover:bg-[#c4ea21] text-gray-950 font-bold px-7 py-3 rounded-full text-sm transition-all shadow-sm active:scale-95 shrink-0"
              >
                {subscribed ? "Subscribed!" : "Search"}
              </button>
            </form>

            <p className="mt-3 text-[11px] text-gray-400 max-w-sm leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-gray-700">
                {col1.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#0052FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-gray-700">
                {col2.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#0052FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3.5 text-xs sm:text-sm font-medium text-gray-700">
                {col3.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#0052FF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>@ 2026 ByteSpace. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
