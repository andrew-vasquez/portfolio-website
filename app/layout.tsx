import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Andrew Vasquez | Full-Stack Developer",
    template: "%s | Andrew Vasquez",
  },
  description:
    "Full-Stack Developer specializing in React, TypeScript, and modern web technologies. View my portfolio and projects.",
  authors: [{ name: "Andrew Vasquez" }],
  creator: "Andrew Vasquez",
  keywords: [
    "Andrew Vasquez",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "Web Developer",
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
      "Full-Stack Developer specializing in React, TypeScript, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Vasquez | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, TypeScript, and modern web technologies.",
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
  themeColor: "#202023",
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
    <html lang="en" className={lora.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[#202023] antialiased">{children}</body>
    </html>
  );
}
