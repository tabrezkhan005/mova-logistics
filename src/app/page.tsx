import { Hero } from "@/src/components/hero/hero";
import { AboutSection } from "@/src/components/sections/about-section";
import { ProductsSection } from "@/src/components/sections/products-section";
import { WhyUs } from "@/src/components/sections/why-us";
import { QualityProcess } from "@/src/components/sections/quality-process";
import { ExportMap } from "@/src/components/sections/export-map";
import { Certifications } from "@/src/components/sections/certifications";
import { BlogSection } from "@/src/components/sections/blog-section";
import { CTASection } from "@/src/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyUs />
      <QualityProcess />
      <ExportMap />
      <Certifications />
      <BlogSection />
      <CTASection />
    </>
  );
}
