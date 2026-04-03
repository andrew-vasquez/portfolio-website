export const siteUrl = "https://avasquez.dev";
export const siteTitle = "Andrew Vasquez | Software Engineer";
export const siteDescription =
  "Portfolio of Andrew Vasquez, a software engineer building product-grade interfaces with React, TypeScript, Astro, and modern web tooling.";
export const siteName = "Andrew Vasquez Portfolio";
export const socialImage = "/projects/ciudadano.webp";

export function buildCanonical(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function buildSocialImage(pathname = socialImage) {
  return new URL(pathname, siteUrl).toString();
}
