export const siteUrl = "https://avasquez.dev";
export const siteTitle = "Andrew Vasquez | Full-Stack Developer";
export const siteDescription =
  "Portfolio of Andrew Vasquez, a full-stack developer building product-grade interfaces with React, TypeScript, Astro, and modern web tooling.";
export const siteName = "Andrew Vasquez Portfolio";
export const socialImage = "/projects/slatedex.webp";

export function buildCanonical(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function buildSocialImage(pathname = socialImage) {
  return new URL(pathname, siteUrl).toString();
}
