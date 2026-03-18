import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

const plexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
  preload: true,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Andrew Vasquez | Full-Stack Developer",
    template: "%s | Andrew Vasquez",
  },
  description:
    "Portfolio of Andrew Vasquez, a full-stack developer building product-grade interfaces with React, TypeScript, Next.js, and modern web tooling.",
  authors: [{ name: "Andrew Vasquez" }],
  creator: "Andrew Vasquez",
  keywords: [
    "Andrew Vasquez",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "UI Engineer",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Andrew Vasquez Portfolio",
    title: "Andrew Vasquez | Full-Stack Developer",
    description:
      "Full-stack developer focused on product-grade interfaces, calm motion, and modern frontend systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Vasquez | Full-Stack Developer",
    description:
      "Full-stack developer focused on product-grade interfaces, calm motion, and modern frontend systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plexSans.variable} ${plexSansCondensed.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
