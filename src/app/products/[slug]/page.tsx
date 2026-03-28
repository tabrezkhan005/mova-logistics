import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeUp } from "@/src/components/animations/fade-up";
import { products } from "@/src/data/products";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Package,
  FlaskConical,
  CheckCircle,
} from "lucide-react";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Mova Logistics`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

        <div className="relative z-10 container-main pb-14 md:pb-18">
          <FadeUp>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.5)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                marginBottom: "20px",
                transition: "color 0.3s",
              }}
              className="hover:!text-[#D4AF37]"
            >
              <ArrowLeft style={{ width: 14, height: 14 }} /> Back to Products
            </Link>
          </FadeUp>
          <FadeUp delay={0.05}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{
                color: "#D4AF37",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}>
                {product.tagline}
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "600px",
            }}>
              {product.name}
            </h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              marginTop: "16px",
            }}>
              <MapPin style={{ width: 13, height: 13, color: "#D4AF37" }} />
              {product.origin}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SPECS STRIP ── */}
      <section style={{ background: "#0A0A0A", padding: "0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${product.specs.length}, 1fr)`,
              gap: "0",
            }}
            className="max-md:!grid-cols-2"
          >
            {product.specs.map((spec, i) => (
              <FadeUp key={spec.label} delay={i * 0.06}>
                <div
                  style={{
                    padding: "32px 28px",
                    borderRight: i < product.specs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    textAlign: "center",
                  }}
                  className="max-md:even:!border-r-0"
                >
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#D4AF37",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}>
                    {spec.value}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 600,
                  }}>
                    {spec.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "start",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Description */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}>
                    Product Details
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-heading)",
                  color: "#0A0A0A",
                  margin: "0 0 16px 0",
                  lineHeight: 1.15,
                }}>
                  About Our{" "}
                  <span style={{ color: "#1F7A6E" }}>{product.name}</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "28px" }} />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.9,
                  margin: 0,
                }}>
                  {product.longDescription}
                </p>
              </FadeUp>
            </div>

            {/* Right — Info panels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Certifications */}
              <FadeUp delay={0.1}>
                <div style={{
                  background: "#F8F9F8",
                  border: "1px solid rgba(10,10,10,0.05)",
                  padding: "32px",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "20px",
                  }}>
                    <ShieldCheck style={{ width: 18, height: 18, color: "#D4AF37" }} />
                    <h4 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      margin: 0,
                    }}>
                      Certifications
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {product.certifications.map((cert) => (
                      <div key={cert} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(10,10,10,0.05)",
                      }}>
                        <CheckCircle style={{ width: 14, height: 14, color: "#1F7A6E", flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "#6B7280", fontWeight: 500 }}>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Export Packaging */}
              <FadeUp delay={0.15}>
                <div style={{
                  background: "#0F2F2A",
                  padding: "32px",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "20px",
                  }}>
                    <Package style={{ width: 18, height: 18, color: "#D4AF37" }} />
                    <h4 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                    }}>
                      Export Packaging
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {product.exportPackaging.map((pkg) => (
                      <div key={pkg} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}>
                        <div style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "#D4AF37",
                          flexShrink: 0,
                        }} />
                        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{pkg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* CTA */}
              <FadeUp delay={0.2}>
                <div style={{
                  background: "#F8F9F8",
                  border: "1px solid rgba(10,10,10,0.05)",
                  padding: "32px",
                  textAlign: "center",
                }}>
                  <FlaskConical style={{ width: 24, height: 24, color: "#D4AF37", margin: "0 auto 14px" }} />
                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    margin: "0 0 8px 0",
                  }}>
                    Request Lab Report
                  </h4>
                  <p style={{
                    fontSize: "13px",
                    color: "#9CA3AF",
                    lineHeight: 1.6,
                    margin: "0 0 20px 0",
                  }}>
                    Get a sample along with a Certificate of Analysis for this product.
                  </p>
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="btn-primary"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", width: "100%", justifyContent: "center" }}
                  >
                    Get Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT NAVIGATION ── */}
      <section style={{ background: "#F8F9F8", padding: "0", borderTop: "1px solid rgba(10,10,10,0.06)" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
          >
            {/* Previous */}
            <div style={{
              borderRight: "1px solid rgba(10,10,10,0.06)",
              padding: "32px 0",
            }}>
              {prevProduct ? (
                <Link href={`/products/${prevProduct.slug}`} style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }} className="group">
                  <ArrowLeft style={{ width: 16, height: 16, color: "#9CA3AF", transition: "color 0.3s" }} className="group-hover:!text-[#D4AF37]" />
                  <div>
                    <div style={{ fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "4px" }}>
                      Previous
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#0A0A0A", fontFamily: "var(--font-heading)", transition: "color 0.3s" }} className="group-hover:!text-[#1F7A6E]">
                      {prevProduct.name}
                    </div>
                  </div>
                </Link>
              ) : (
                <div style={{ opacity: 0.3 }}>
                  <div style={{ fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>—</div>
                </div>
              )}
            </div>

            {/* Next */}
            <div style={{ padding: "32px 0", textAlign: "right" }}>
              {nextProduct ? (
                <Link href={`/products/${nextProduct.slug}`} style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }} className="group">
                  <div>
                    <div style={{ fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "4px" }}>
                      Next
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#0A0A0A", fontFamily: "var(--font-heading)", transition: "color 0.3s" }} className="group-hover:!text-[#1F7A6E]">
                      {nextProduct.name}
                    </div>
                  </div>
                  <ArrowRight style={{ width: 16, height: 16, color: "#9CA3AF", transition: "color 0.3s" }} className="group-hover:!text-[#D4AF37]" />
                </Link>
              ) : (
                <div style={{ opacity: 0.3 }}>
                  <div style={{ fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>—</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-main">
          <div style={{ marginBottom: "clamp(40px, 5vw, 56px)" }}>
            <FadeUp>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span style={{
                  color: "#D4AF37",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}>
                  More Products
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                color: "#0A0A0A",
                margin: "0 0 16px 0",
                lineHeight: 1.12,
              }}>
                Explore Our{" "}
                <span style={{ color: "#1F7A6E" }}>Collection</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
            </FadeUp>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {relatedProducts.map((rp) => (
              <FadeUp key={rp.id}>
                <Link href={`/products/${rp.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{
                    background: "#F8F9F8",
                    border: "1px solid rgba(10,10,10,0.05)",
                    overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }} className="group hover:!border-[rgba(212,175,55,0.2)] hover:!shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
                    <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)",
                      }} />
                    </div>
                    <div style={{ padding: "24px" }}>
                      <div style={{ fontSize: "10px", color: "#D4AF37", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                        {rp.tagline}
                      </div>
                      <h4 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#0A0A0A",
                        margin: "0 0 6px 0",
                        transition: "color 0.3s",
                      }} className="group-hover:!text-[#1F7A6E]">
                        {rp.name}
                      </h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#9CA3AF" }}>
                        <MapPin style={{ width: 10, height: 10, color: "#D4AF37" }} />
                        {rp.origin}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
