import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { ProductGrid } from "@/src/components/products/product-grid";
import { productsMetadata } from "@/src/seo/metadata";

export const metadata = productsMetadata;

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0F2F2A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Our Products</span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h1 className="text-white max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              Premium Indian <span className="gradient-text">Spice Collection</span>
            </h1>
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50 max-w-2xl text-lg">
              Explore our comprehensive range of export-grade Indian spices, sourced from the finest farms and processed to international standards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-[#F8F9F8]">
        <div className="container-main">
          <ProductGrid />
        </div>
      </section>

      {/* Packaging Info */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeUp><span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Export Packaging</span></FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                Customized <span className="text-[#1F7A6E]">Packaging Solutions</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}><div className="gold-line-center mt-6" /></FadeUp>
            <FadeUp delay={0.3}>
              <p className="mt-6 text-[#6B7280]">
                We offer flexible packaging options to suit your market requirements — from bulk bags to retail-ready and private label solutions.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bulk Packaging", desc: "25kg & 50kg PP bags, jute bags, and paper sacks for industrial buyers.", sizes: "25kg – 50kg" },
              { title: "Retail Ready", desc: "Small consumer packs with custom branding, barcodes, and nutritional labels.", sizes: "100g – 1kg" },
              { title: "Private Label", desc: "Complete white-label solutions with your branding, design, and specifications.", sizes: "Custom" },
            ].map((pkg, i) => (
              <FadeUp key={pkg.title} delay={0.1 * i}>
                <div className="p-8 rounded-xl border border-[#0A0A0A]/5 bg-[#F8F9F8] text-center hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500">
                  <h4 className="text-[#0A0A0A] font-semibold text-xl mb-3">{pkg.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{pkg.desc}</p>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#0F2F2A]/5 text-[#1F7A6E] text-xs font-medium">{pkg.sizes}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
