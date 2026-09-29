"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real auth latency
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
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top Left Return to Home */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-20 my-auto py-8">
        {/* Left Side: Brand Narrative & 3D Visuals */}
        <div className="lg:col-span-6 text-white flex flex-col justify-center">
          {/* Yellow Logo Mark */}
          <Link href="/" className="inline-block mb-6 w-12 h-12">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 drop-shadow-md"
            >
              <rect width="40" height="40" rx="10" fill="transparent" />
              <path
                d="M12 8C12 6.89543 12.8954 6 14 6H19C20.1046 6 21 6.89543 21 8V18.2C22.6 16.8 24.7 16 27 16C32.5228 16 37 20.4772 37 26C37 31.5228 32.5228 36 27 36C21.4772 36 17 31.5228 17 26V23H14C12.8954 23 12 22.1046 12 21V8Z"
                fill="#D4F82D"
              />
              <circle cx="27" cy="26" r="4.5" fill="#0052FF" />
            </svg>
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Sign in with ease
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/85 max-w-md font-normal leading-relaxed">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          {/* Floating Composition Mockup */}
          <div className="mt-8 relative max-w-md h-[300px] hidden sm:block">
            {/* 3D Torus */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-6 w-16 h-16 z-20 pointer-events-none"
            >
              <Image
                src="/assets/Cone (1).png"
                alt="3D Torus"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>

            {/* Main Course Card */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-16 bg-white text-gray-900 rounded-2xl p-3 shadow-2xl border border-white/60 max-w-[270px] z-10"
            >
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-900 mb-2">
                <Image
                  src="/assets/luke-chesser-JKUTrJ4vK00-unsplash.jpg"
                  alt="Big Data"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center justify-between text-[9px] font-medium text-gray-800">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs">the Power of Big Data</span>
                <span className="text-[10px] font-bold text-yellow-500 flex items-center">
                  4.5 ★
                </span>
              </div>
              <div className="text-[9px] text-gray-400">by purepearl studio</div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0052FF]">$25/lifetime</span>
                <div className="flex items-center -space-x-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300 border border-white" />
                  <div className="w-4 h-4 rounded-full bg-gray-400 border border-white" />
                  <div className="w-4 h-4 rounded-full bg-[#D4F82D] text-[7px] font-bold flex items-center justify-center">
                    26+
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Happy Students Yellow Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute bottom-4 left-32 bg-[#D4F82D] text-gray-900 rounded-2xl px-4 py-2.5 shadow-xl z-20 min-w-[190px]"
            >
              <div className="flex items-center justify-between text-xs font-bold">
                <span>Happy Students</span>
                <span className="flex items-center text-[10px]">
                  4.5 (240){" "}
                  <Star className="w-3 h-3 fill-blue-600 text-blue-600 ml-1" />
                </span>
              </div>
              <div className="flex items-center mt-1.5 -space-x-1.5">
                <div className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-100">
                  <Image src="/assets/Ellipse.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-gray-100">
                  <Image src="/assets/Ellipse (1).png" alt="Student" fill className="object-cover" />
                </div>
                <div className="w-5 h-5 rounded-full bg-[#111827] text-white text-[8px] font-bold flex items-center justify-center">
                  2K+
                </div>
              </div>
            </motion.div>

            {/* 3D Cone Bottom Left */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-2 w-16 h-16 z-20 pointer-events-none"
            >
              <Image
                src="/assets/Cone.png"
                alt="3D Cone"
                width={64}
                height={64}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Login Card */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[460px] bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl">
            <span className="text-sm font-semibold text-[#0052FF]">Sign In</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Welcome Back
            </h2>

            {success && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl">
                Signed in successfully! Redirecting...
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] transition-all pr-10"
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

              {/* Sign In Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#D4F82D] hover:bg-[#c4ea21] text-gray-950 font-bold px-7 py-2.5 rounded-full text-sm transition-all active:scale-95 shadow-sm disabled:opacity-50"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs text-gray-400">
                <span className="bg-white px-3">or</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook */}
              <button
                type="button"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Sign in with Facebook"
              >
                <Image
                  src="/assets/Vector.png"
                  alt="Facebook"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </button>

              {/* Google */}
              <button
                type="button"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Sign in with Google"
              >
                <Image
                  src="/assets/Vector-1.png"
                  alt="Google"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </button>
            </div>

            {/* Switch to Register */}
            <div className="mt-8 text-center text-xs text-gray-500">
              New user?{" "}
              <Link
                href="/register"
                className="text-[#0052FF] font-semibold hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
