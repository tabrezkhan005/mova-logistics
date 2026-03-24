import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/navbar/navbar";
import { Footer } from "@/src/components/footer/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mova Logistics | Premium Indian Spice Exporters",
  description:
    "Mova Logistics exports premium Indian spices including turmeric, cumin, black pepper, and cardamom to global markets with strict quality control.",
  icons: {
    icon: "/mova_logistics_favicon.png",
    apple: "/mova_logistics_favicon.png",
  },
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
