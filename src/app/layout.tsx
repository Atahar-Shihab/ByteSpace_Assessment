import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace - Unlock Your Potential with Hundreds of Courses",
  description:
    "ByteSpace is a modern educational platform connecting over 10,000 creators and learners worldwide with courses in UI/UX Design, Development, Business, and more.",
  keywords: [
    "ByteSpace",
    "online courses",
    "creators",
    "UI/UX Design",
    "web development",
    "learning platform",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#111827]">
        {children}
      </body>
    </html>
  );
}
