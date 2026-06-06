# YOLO Trips

A modern, fully responsive travel website built with **React + Vite + Tailwind CSS**.

## Stack

- **Vite** — lightning-fast dev server & build
- **React 18** with React Router v6
- **Tailwind CSS** with custom brand palette
- **react-helmet-async** for per-page SEO
- **@emailjs/browser** for inquiry forms
- **react-icons** for iconography

## Project structure

```
src/
├── Assets/                  # Images, PDFs, fonts
├── components/
│   ├── forms/InquiryForm.jsx   # Unified Holiday / Villa / Flight / Visa form
│   ├── layout/                 # Navbar, Footer, mobile BottomNav
│   ├── sections/               # Home page sections
│   ├── ui/                     # Modal, Counter, StarRating, SectionHeading
│   └── PackageCard.jsx
├── data/                    # Destinations, packages, testimonials, site config
├── hooks/                   # useInquiry, useLockBodyScroll
├── pages/                   # Home, Category, Contact, About, Testimonials, NotFound
├── App.jsx
├── main.jsx
└── index.css                # Tailwind + global styles
```

## Scripts

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build into ./dist
npm run preview  # preview the production build
```

## Design highlights

- Sticky glass navbar with mobile drawer + persistent bottom navigation
- Hero with gradient overlay, animated badges, dual CTAs
- Horizontal-snap destination carousel
- Service tiles for Flights & Visa with modal forms
- Bento-style Luxury Villas grid
- Vacation grid + dark testimonials strip
- Gradient CTA banner
- Polished category & contact pages
- Unified, validated EmailJS-powered inquiry form with success / error states
- Fully responsive (mobile-first) with Tailwind breakpoints
