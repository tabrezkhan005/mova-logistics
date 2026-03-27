import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { ProductGrid } from "@/src/components/products/product-grid";
import { productsMetadata } from "@/src/seo/metadata";
import { ArrowRight } from "lucide-react";

export const metadata = productsMetadata;

const packagingOptions = [
  { title: "Bulk & Industrial", desc: "Perfect for wholesale distributors and food manufacturers. Available in 25kg & 50kg PP bags, multi-wall paper sacks, and premium jute bags with inner poly-lining.", sizes: "25kg – 50kg", highlighted: false },
  { title: "Retail Ready", desc: "Shelf-ready customized packaging directly for supermarkets. Branded pouches, PET jars, and glass bottles with complete regulatory nutritional labels.", sizes: "100g – 1kg", highlighted: true },
  { title: "Custom Private Label", desc: "End-to-end white labeling services. We process, pack, and label the spices under your brand name, ensuring global compliance.", sizes: "Custom Specs", highlighted: false },
];

const qualityPillars = [
  { id: "01", title: "Ethical Sourcing", desc: "Direct partnerships with verified farm collectives ensuring pesticide-free raw materials." },
  { id: "02", title: "Sterile Processing", desc: "Cryogenic grinding, metal detection, and UV sterilization in an ISO 22000 facility." },
  { id: "03", title: "Export Ready", desc: "SGS/Bureau Veritas inspection certified prior to stuffing in fumigated containers." },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070"
          alt="Premium Spices Collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0F2F2A]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        
        <div className="relative z-10 container-main pb-16 md:pb-20">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Product Catalog
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", lineHeight: 1.08, margin: 0, maxWidth: "780px" }}>
              The Finest Indian{" "}
              <span style={{ color: "#D4AF37" }}>Spices</span>
              <br />Exported Worldwide
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", marginTop: "24px", maxWidth: "560px", lineHeight: 1.7 }}>
              From aromatic whole seeds to rich ground blends, explore our export-grade collection, meticulously sourced and processed to international standards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section style={{ background: "#F5F7F5", padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-main">
          <ProductGrid />
        </div>
      </section>

      {/* ── PACKAGING EXPERTISE ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 120px) 0", borderTop: "1px solid rgba(10,10,10,0.05)" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textContent: "center", textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <FadeUp>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                  Export Packaging
                </span>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-heading)", color: "#0A0A0A", margin: "0 0 20px 0", lineHeight: 1.15 }}>
                Packaged for <span style={{ color: "#1F7A6E" }}>Global Retail</span> & Bulk
              </h2>
              <p style={{ color: "#6B7280", maxWidth: "600px", lineHeight: 1.8, fontSize: "15px", margin: 0 }}>
                Our packaging solutions preserve flavor, prevent moisture ingress, and comply strictly with food safety regulations of the destination country.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagingOptions.map((pkg, i) => (
              <FadeUp key={pkg.title} delay={i * 0.1}>
                <div style={{ 
                  padding: "48px 40px", 
                  background: pkg.highlighted ? "#0F2F2A" : "#F8F9F8",
                  color: pkg.highlighted ? "#FFFFFF" : "#0A0A0A",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: pkg.highlighted ? "none" : "1px solid rgba(10,10,10,0.04)",
                  boxShadow: pkg.highlighted ? "0 20px 40px rgba(15, 47, 42, 0.15)" : "none"
                }}>
                  <span style={{ 
                    display: "inline-block", 
                    padding: "6px 12px", 
                    background: pkg.highlighted ? "rgba(212,175,55,0.15)" : "rgba(31,122,110,0.1)", 
                    color: pkg.highlighted ? "#D4AF37" : "#1F7A6E", 
                    fontSize: "11px", 
                    fontWeight: 700, 
                    letterSpacing: "0.1em",
                    textTransform: "uppercase", 
                    marginBottom: "32px",
                    alignSelf: "flex-start",
                    border: pkg.highlighted ? "1px solid rgba(212,175,55,0.3)" : "1px solid rgba(31,122,110,0.2)"
                  }}>
                    {pkg.sizes}
                  </span>
                  
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>
                    {pkg.title}
                  </h4>
                  
                  <p style={{ color: pkg.highlighted ? "rgba(255,255,255,0.6)" : "#6B7280", fontSize: "14px", lineHeight: 1.8, flex: 1, margin: 0 }}>
                    {pkg.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY PILLARS (Dark Strip) ── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-24">
            {qualityPillars.map((pillar, i) => (
              <FadeUp key={pillar.id} delay={i * 0.1} className="relative">
                {i !== 2 && <div className="hidden md:block absolute top-[28px] -right-[3rem] lg:-right-[6rem] w-[4rem] lg:w-[8rem] h-[1px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />}
                
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "48px", fontWeight: 700, color: "rgba(212,175,55,0.15)", lineHeight: 1, marginBottom: "20px" }}>
                  {pillar.id}.
                </div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", color: "#FFFFFF", fontWeight: 700, marginBottom: "12px" }}>
                  {pillar.title}
                </h4>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                  {pillar.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "#F5F7F5", padding: "80px 0" }}>
        <div className="container-main">
          <FadeUp>
            <div style={{ background: "#0F2F2A", padding: "clamp(48px, 6vw, 72px)", display: "flex", flexDirection: "column", alignItems: "center", textContent: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070")', backgroundSize: "cover", backgroundPosition: "center" }} />
              
              <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", color: "#FFFFFF", margin: "0 0 24px 0", lineHeight: 1.15 }}>
                  Require a Specific <span style={{ color: "#D4AF37" }}>Spice Blend?</span>
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px" }}>
                  Our R&D team works closely with commercial kitchens and FMCG brands to create proprietary blends at scale. Contact us with your specifications.
                </p>
                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  Request Custom Blend <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
