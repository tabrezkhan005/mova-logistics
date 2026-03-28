import type { Metadata } from "next";

const siteUrl = "https://movalogistics.com";

export const siteMetadata = {
  siteName: "Mova Logistics",
  siteUrl,
  description:
    "Mova Logistics exports premium Indian spices including turmeric, cumin, black pepper, and cardamom to global markets with strict quality control.",
  keywords: [
    "Indian spice exporters",
    "premium spices",
    "spice export company",
    "turmeric export",
    "cumin seeds export",
    "black pepper wholesale",
    "cardamom export India",
    "bulk spice suppliers",
    "Mova Logistics",
    "spice trading company",
    "Indian food exports",
    "FSSAI certified spices",
    "organic spices India",
    "Guntur spice exporters",
    "Andhra Pradesh chilli export",
    "Guntur turmeric exporters",
  ],
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  const fullTitle = `${title} | ${siteMetadata.siteName}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: siteMetadata.keywords,
    authors: [{ name: siteMetadata.siteName }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteMetadata.siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const homeMetadata: Metadata = generatePageMetadata(
  "Premium Indian Spice Exporters",
  siteMetadata.description
);

export const aboutMetadata: Metadata = generatePageMetadata(
  "About Us",
  "Learn about Mova Logistics — a premier Indian spice export company delivering high-quality spices from Guntur to global markets.",
  "/about"
);

export const productsMetadata: Metadata = generatePageMetadata(
  "Our Products",
  "Browse our premium range of Indian spices — turmeric, cumin, black pepper, cardamom, and more, available for global export.",
  "/products"
);

export const exportsMetadata: Metadata = generatePageMetadata(
  "Global Exports",
  "Mova Logistics exports premium Indian spices to North America, Europe, Middle East, Asia, and Africa with reliable logistics.",
  "/exports"
);

export const qualityMetadata: Metadata = generatePageMetadata(
  "Quality Assurance",
  "Our rigorous quality control process — from farm sourcing to global shipping — ensures every spice meets international standards.",
  "/quality"
);

export const blogMetadata: Metadata = generatePageMetadata(
  "Blog & Insights",
  "Stay updated with the latest trends in the global spice trade, quality practices, and market insights from Mova Logistics.",
  "/blog"
);

export const contactMetadata: Metadata = generatePageMetadata(
  "Contact Us",
  "Get in touch with Mova Logistics for export inquiries, product samples, and partnership opportunities.",
  "/contact"
);
