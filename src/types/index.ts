export interface Course {
  id: string;
  title: string;
  slug: string;
  instructor: string;
  instructorAvatar?: string;
  rating: number;
  reviewsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  billingType: string; // e.g. "/lifetime"
  duration: string;
  lessonsCount: number;
  commentsCount: number;
  image: string;
  category: string;
  featured?: boolean;
  description?: string;
  overview?: string;
  studentsCount?: number;
  lessonsList?: {
    moduleNumber: number;
    title: string;
    description?: string;
    duration?: string;
  }[];
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  role: string;
  bio: string;
  avatar: string;
  productsCount: number;
  followersCount: number;
  isFollowing?: boolean;
  socialLinks?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
