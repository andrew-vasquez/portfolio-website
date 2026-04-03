import type { ImageMetadata } from "astro";

import ciudadanoImage from "@/assets/projects/ciudadano.webp";
import plexusImage from "@/assets/projects/plexus.webp";
import slatedexImage from "@/assets/projects/slatedex.webp";
import daylybreadImage from "@/assets/projects/daylybread.webp";

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
    title: "Ciudadano",
    category: "Featured Work",
    description:
      "A civic infrastructure platform built with the municipal government of Matamoros to help citizens report local issues through a mobile-first experience.",
    summary:
      "A civic platform designed to give residents a real voice on local issues while giving government teams clearer visibility into what needs attention. It combines mobile reporting, geospatial data, and operational tooling to turn infrastructure failures and public safety incidents into trackable, actionable signals at city scale.",
    image: ciudadanoImage,
    icons: [
      "/icons/nextjs.svg",
      "/icons/react.svg",
      "/icons/typescript.svg",
      "/icons/postgresql.svg",
    ],
    iconName: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    stack: [
      "Expo React Native",
      "Next.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL/PostGIS",
      "Drizzle ORM",
      "Supabase Realtime",
      "BullMQ",
      "Upstash Redis",
      "Cloudflare R2",
      "Turborepo",
    ],
    role: "Full-stack design and implementation across mobile, backend, and infrastructure.",
    proofPoints: [
      "Built in direct collaboration with the municipal government of Matamoros around a real public-service workflow.",
      "Uses geospatial data and location-aware reporting to improve issue accuracy and response visibility.",
      "Architected to scale beyond one city into a broader civic platform for municipalities across Mexico.",
    ],
    link: "https://www.ciudadano.app/",
  },
  {
    title: "Plexus",
    category: "AI Tooling",
    description:
      "An AI-powered guitar transcription tool that turns uploaded audio into playable tablature and exports directly to Guitar Pro.",
    summary:
      "A browser-based transcription workflow built for guitarists who need speed without sacrificing usability. It combines source separation, note detection, and tab rendering into a single product flow that moves from raw audio to playable output fast enough to fit real practice and production workflows.",
    image: plexusImage,
    icons: [
      "/icons/nextjs.svg",
      "/icons/python.svg",
      "/icons/react.svg",
      "/icons/typescript.svg",
      "/icons/tailwind.svg",
    ],
    iconName: ["Next.js", "Python", "React", "TypeScript", "Tailwind"],
    stack: [
      "Next.js",
      "FastAPI",
      "Demucs",
      "Basic Pitch",
      "AlphaTab",
      "Modal.com",
    ],
    role: "Full-stack implementation and ML pipeline integration.",
    proofPoints: [
      "Runs stem separation, note detection, and tab rendering as one cohesive browser-first workflow.",
      "Exports to Guitar Pro so the output fits tools musicians already use.",
      "Built around real transcription habits instead of a generic AI demo experience.",
    ],
    link: "https://plexus-sandy.vercel.app/",
  },
  {
    title: "SlateDex",
    category: "Full-Stack App",
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
];
