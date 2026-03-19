import type { ImageMetadata } from "astro";

import slatedexImage from "@/assets/projects/slatedex.webp";
import daylybreadImage from "@/assets/projects/daylybread.webp";
import alfaImage from "@/assets/projects/alfa.webp";

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  summary: string;
  image: ImageMetadata;
  icons: string[];
  iconName: string[];
  stack: string[];
  role: string;
  proofPoints: string[];
  link: string;
}

export const projectData: ProjectData[] = [
  {
    title: "SlateDex",
    category: "Featured Work",
    description:
      "A full-stack Pokemon team builder with matchup visibility, saved teams, and a cleaner way to plan around specific mainline games.",
    summary:
      "A productized Pokemon team builder that turns a niche workflow into a polished full-stack experience. It combines structured team planning, authenticated saves, and clear matchup feedback inside a UI designed to stay calm even when the data gets dense.",
    image: slatedexImage,
    icons: [
      "/icons/nextjs.svg",
      "/icons/react.svg",
      "/icons/typescript.svg",
      "/icons/tailwind.svg",
      "/icons/hono.svg",
      "/icons/prisma.svg",
      "/icons/postgresql.svg",
    ],
    iconName: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Hono",
      "Prisma",
      "PostgreSQL",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Hono",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
    ],
    role: "Product design, frontend systems, and full-stack implementation.",
    proofPoints: [
      "Builds around a real team-planning workflow instead of a toy demo surface.",
      "Keeps matchup information and team composition readable without feeling cluttered.",
      "Treats dense product interactions as a design problem, not just an engineering one.",
    ],
    link: "https://slatedex.vercel.app/",
  },
  {
    title: "DaylyBread",
    category: "Commerce Build",
    description:
      "An e-commerce website for NFC tap devices sold to churches and community organizations.",
    summary:
      "A focused commerce experience built to explain a physical product clearly, create trust quickly, and move visitors toward action without unnecessary friction.",
    image: daylybreadImage,
    icons: [
      "/icons/nextjs.svg",
      "/icons/typescript.svg",
      "/icons/tailwind.svg",
    ],
    iconName: ["Next.js", "TypeScript", "Tailwind"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend implementation and conversion-focused landing page design.",
    proofPoints: [
      "Explains the product clearly for a non-technical audience.",
      "Uses a direct structure built around trust, clarity, and action.",
    ],
    link: "https://daylybread.com",
  },
  {
    title: "ALFA Inmobiliaria",
    category: "Marketing Site",
    description:
      "A real estate landing page for showcasing listings and creating a cleaner property-browsing experience.",
    summary:
      "A marketing site built to present listings with more clarity, stronger hierarchy, and a more polished first impression for prospective buyers.",
    image: alfaImage,
    icons: ["/icons/react.svg", "/icons/typescript.svg", "/icons/tailwind.svg"],
    iconName: ["React", "TypeScript", "Tailwind"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    role: "Responsive UI design and frontend delivery.",
    proofPoints: [
      "Balances visual presentation and readability for listing-driven content.",
      "Gives the brand a more credible, modern web presence.",
    ],
    link: "https://alfa-inmobiliaria.vercel.app/",
  },
];
