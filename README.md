# 🚀 ByteSpace - Frontend Assessment for Doin Tech Limited

> **Candidate:** Atahar Shihab  
> **Position:** Jr. Software Engineer (Frontend)  
> **Live Demo:** *[Paste Your Live Vercel URL Here after deploying]*  
> **Repository:** [https://github.com/Atahar-Shihab/ByteSpace_Assessment](https://github.com/Atahar-Shihab/ByteSpace_Assessment)

---

## 📖 Overview

**ByteSpace** is a high-performance, modern online learning and creator education platform. This repository contains the complete frontend implementation created as part of the technical assessment for **Doin Tech Limited**.

Every section, component, color token, typography, and responsive breakpoint was built to faithfully translate the Figma specifications into a production-ready web application with smooth micro-interactions.

---

## 🌟 What Was Built

### 1. 🏠 Landing Page *(Required - 100% Pixel-Conscious)*
- **Header & Navigation:** Responsive navbar with blur-on-scroll, mobile drawer, active page indicators, and cart badge.
- **Hero Section:** Royal blue background with fine grid pattern, floating 3D geometric shapes (spiral, cone, torus, zigzag), search pill input, and student model hero with real-time floating badges (*UI/UX Design*, *Learning Progress 55%*, *Happy Students 4.5★*).
- **Brand Partner Showcase:** Grayscale Logoipsum brand strip with subtle hover transitions.
- **Course Catalog & Filter:** Interactive category pills (*Featured, Music, Marketing, UI/UX, etc.*) and responsive course cards with frosted glass statistics overlay, ratings, instructor attribution, level badges, and lifetime pricing.
- **Learning Paths:** 6 curated category cards with vibrant lime circular icon badges.
- **Feature Split 1 (Professional Growth):** Metric stats (*12K Students, 70+ Courses, 16 Creators*) and floating preview card composition.
- **Feature Split 2 (Creator Tools):** Course publication workflow, creator earnings badges (*Total Revenue, Year to Date*), and feature checklist.
- **Creator CTA Banner:** High-energy royal blue call-to-action banner with floating 3D elements and *"Join as Creator"* interactive pill button.
- **Community Testimonials:** Review cards with learner and creator stories on a soft pastel gradient background.
- **Footer:** Full newsletter subscription form with validation, multi-column navigation sitemap, and copyright/legal links.

### 2. 🔐 Authentication Pages *(Bonus / Extra Credit)*
- **Login Page (`/login`):** Split layout featuring 3D brand assets, email & password inputs with show/hide password toggle, social authentication buttons (Google, Facebook), and seamless link to registration.
- **Registration Page (`/register`):** User onboarding flow with full name, email, password validation, and direct routing.

### 3. 🔍 Extended Pages *(Beyond Requirements)*
- **Courses Search & Exploration (`/courses`):** Search input, level filter dropdown (*Beginner, Intermediate, Advanced*), category pills, and multi-page pagination controls.
- **Course Details & Curriculum (`/courses/[id]`):** Interactive video player preview, tabbed content switching (*About*, *Lessons*, *Reviews*), module breakdown with duration timestamps, progress tracking, and sticky enrollment sidebar.
- **Creator Profile (`/creators/[id]`):** Creator bio, follower count with interactive Follow/Unfollow toggle, product metrics, and portfolio course listings.
- **Custom 404 Page (`/_not-found`):** Distinctive 404 page featuring the giant gradient 404 numeral and *"Back to Home"* navigation.

---

## 🛠️ Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **Next.js (App Router)** | Modern React framework with hybrid static generation, server components, and dynamic routing |
| **React 19 & TypeScript** | Fully typed components, interfaces, and props for enterprise-level code quality |
| **Tailwind CSS v4** | Utility-first styling with design system color tokens, arbitrary grid patterns, and responsive breakpoints |
| **Framer Motion** | Subtle floating ambient physics for 3D geometric shapes and animated transitions |
| **Lucide React** | Clean, accessible vector icons |

### 📂 Directory Structure

```text
src/
├── app/
│   ├── layout.tsx              # Root layout with Plus Jakarta Sans & SEO metadata
│   ├── globals.css             # Tailwind v4 configuration and custom patterns
│   ├── page.tsx                # Main Landing Page
│   ├── login/page.tsx          # Login Page (Bonus)
│   ├── register/page.tsx       # Signup Page (Bonus)
│   ├── courses/
│   │   ├── page.tsx            # Courses Catalogue & Search
│   │   └── [id]/page.tsx       # Course Details & Curriculum
│   ├── creators/[id]/page.tsx  # Creator Profile Page
│   └── not-found.tsx           # Custom 404 Not Found Page
├── components/
│   ├── Navbar.tsx              # Responsive navigation with mobile menu
│   ├── Hero.tsx                # Hero banner with search and 3D shapes
│   ├── ByteSpaceLogo.tsx       # SVG brand glyph and typography
│   ├── LogoCloud.tsx           # Brand partners strip
│   ├── CourseCard.tsx          # Reusable course card component
│   ├── CourseCatalog.tsx       # Category pills filter and course grid
│   ├── LearningPaths.tsx       # 6 Category cards
│   ├── GrowthFeature.tsx       # Metric split section
│   ├── CreatorFeature.tsx      # Revenue & earnings split section
│   ├── CtaBanner.tsx           # Creator call-to-action
│   ├── Testimonials.tsx        # Community reviews
│   └── Footer.tsx              # Newsletter and links
├── data/
│   ├── courses.ts              # Course, category, and testimonial datasets
│   └── creators.ts             # Creator profile datasets
└── types/
    └── index.ts                # TypeScript interfaces and models
```

---

## 🌿 Git Branching Strategy

As required by the assessment guidelines:
- **`main`**: Production-ready code.
- **`feature/bytespace-full-platform`**: Dedicated feature branch containing all modular commits and pull request.

---

## 💻 Local Setup & Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Atahar-Shihab/ByteSpace_Assessment.git
   cd ByteSpace_Assessment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the application.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Submissions

- **Candidate:** Atahar Shihab
- **Email:** [shihabatahar@gmail.com](mailto:shihabatahar@gmail.com)
- **Role:** Jr. Software Engineer (Frontend) at **Doin Tech Limited**
