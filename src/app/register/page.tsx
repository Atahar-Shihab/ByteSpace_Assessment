"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/courses");
      }, 1000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0052FF] relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-12">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "115px 115px",
        }}
      />

      {/* Return to Home */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-20 my-auto py-8">
        {/* Left Side: Brand Narrative & 1:1 Figma Visual Composition */}
        <div className="lg:col-span-6 text-white flex flex-col justify-center">
          {/* ByteSpace Yellow Logo Mark */}
          <Link href="/" className="inline-block mb-6 w-11 h-11">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 h-11 drop-shadow-md"
            >
              <rect width="40" height="40" rx="10" fill="transparent" />
              <path
                d="M12 8C12 6.89543 12.8954 6 14 6H19C20.1046 6 21 6.89543 21 8V18.2C22.6 16.8 24.7 16 27 16C32.5228 16 37 20.4772 37 26C37 31.5228 32.5228 36 27 36C21.4772 36 17 31.5228 17 26V23H14C12.8954 23 12 22.1046 12 21V8Z"
                fill="#D4F82D"
              />
              <circle cx="27" cy="26" r="4.5" fill="#0052FF" />
            </svg>
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-heading">
            Sign up and come in
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-md font-normal leading-relaxed font-sans">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>

          {/* 1:1 Figma Auth Composition */}
          <div className="mt-8 sm:mt-10 max-w-[420px] lg:max-w-[460px] hidden sm:block">
            <Image
              src="/figma/auth.png"
              alt="ByteSpace Cards and Shapes"
              width={530}
              height={586}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Register Card */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[460px] bg-white rounded-3xl sm:rounded-[32px] p-7 sm:p-10 shadow-2xl">
            <span className="text-sm font-semibold text-[#0052FF]">
              Create an Account
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1 font-heading">
              Welcome to ByteSpace
            </h2>

            {success && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl">
                Account created successfully! Redirecting...
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-950 placeholder-gray-400 outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all font-sans"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-950 placeholder-gray-400 outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all font-sans"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 font-sans">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-950 placeholder-gray-400 outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all pr-10 font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Continue Button Aligned to Right */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#D4F82D] hover:bg-[#c4ea21] text-gray-950 font-bold px-8 py-3 rounded-full text-sm transition-all active:scale-95 shadow-sm disabled:opacity-50 cursor-pointer font-sans"
                >
                  {loading ? "Creating account..." : "Continue"}
                </button>
              </div>
            </form>

            {/* Switch to Login */}
            <div className="mt-12 text-center text-xs text-gray-500 font-sans">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#0052FF] font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
