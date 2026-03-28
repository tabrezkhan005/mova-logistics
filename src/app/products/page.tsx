import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { products } from "@/src/data/products";
import { productsMetadata } from "@/src/seo/metadata";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

export const metadata = productsMetadata;

const packagingOptions = [
  {
    title: "Bulk & Industrial",
    desc: "25kg & 50kg PP bags, multi-wall paper sacks, and premium jute bags with inner poly-lining for wholesale distributors.",
    sizes: "25kg – 50kg",
    highlighted: false,
  },
  {
    title: "Retail Ready",
    desc: "Branded pouches, PET jars, and glass bottles with regulatory nutritional labels — shelf-ready for supermarkets.",
    sizes: "100g – 1kg",
    highlighted: true,
  },
  {
    title: "Private Label",
    desc: "End-to-end white labeling. We process, pack, and brand the spices under your name with global compliance.",
    sizes: "Custom",
    highlighted: false,
  },
];

export default function ProductsPage() {
  // Split products into featured (first 2) and rest
  const featured = products.slice(0, 2);
  const remaining = products.slice(2);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070"
          alt="Premium Spices Collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0F2F2A]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

        <div className="relative z-10 container-main pb-16 md:pb-20">
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
                Product Catalog
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "780px",
            }}>
              The Finest Indian{" "}
              <span style={{ color: "#D4AF37" }}>Spices</span>
              <br />Exported Worldwide
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "16px",
              marginTop: "20px",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}>
              From aromatic whole seeds to rich ground blends, explore our export-grade collection,
              meticulously sourced and processed to international standards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS — Large bento cards ── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-main">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{
                color: "#D4AF37",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}>
                Featured Products
              </span>
            </div>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
            className="max-lg:!grid-cols-1"
          >
            {featured.map((product, i) => (
              <FadeUp key={product.id} delay={i * 0.1}>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <article
                    style={{
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "border-color 0.3s",
                    }}
                    className="group hover:!border-[rgba(212,175,55,0.2)]"
                  >
                    {/* Image */}
                    <div style={{ position: "relative", height: "320px", overflow: "hidden" }}
                      className="max-md:!h-[240px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)",
                      }} />

                      {/* Category */}
                      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                        <span style={{
                          padding: "5px 14px",
                          background: "#D4AF37",
                          color: "#0A0A0A",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}>
                          {product.category.replace("-", " ")}
                        </span>
                      </div>

                      {/* Hover arrow */}
                      <div style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        width: "40px",
                        height: "40px",
                        background: "rgba(212,175,55,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        opacity: 0,
                        transform: "translateY(8px)",
                        transition: "opacity 0.3s, transform 0.3s",
                      }} className="group-hover:!opacity-100 group-hover:!translate-y-0">
                        <ArrowUpRight style={{ width: 18, height: 18, color: "#0A0A0A" }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{
                      padding: "32px 28px",
                      background: "#111111",
                    }}>
                      <div style={{
                        fontSize: "10px",
                        color: "#D4AF37",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "10px",
                      }}>
                        {product.tagline}
                      </div>

                      <h3 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        margin: "0 0 8px 0",
                        lineHeight: 1.3,
                        transition: "color 0.3s",
                      }} className="group-hover:!text-[#D4AF37]">
                        {product.name}
                      </h3>

                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: "16px",
                      }}>
                        <MapPin style={{ width: 11, height: 11, color: "#D4AF37" }} />
                        {product.origin}
                      </div>

                      <p style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.8,
                        margin: "0 0 20px 0",
                      }}>
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div style={{
                        display: "flex",
                        gap: "24px",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        flexWrap: "wrap",
                      }}>
                        {product.specs.slice(0, 3).map((spec) => (
                          <div key={spec.label}>
                            <div style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "16px",
                              fontWeight: 700,
                              color: "#D4AF37",
                              lineHeight: 1,
                              marginBottom: "4px",
                            }}>
                              {spec.value}
                            </div>
                            <div style={{
                              fontSize: "9px",
                              color: "rgba(255,255,255,0.25)",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              fontWeight: 600,
                            }}>
                              {spec.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PRODUCTS — Clean editorial grid ── */}
      <section style={{ background: "#F8F9F8", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}>
            <div>
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
                    Complete Catalog
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
                  <span style={{ color: "#1F7A6E" }}>Spice Collection</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <p style={{
                color: "#6B7280",
                fontSize: "14px",
                lineHeight: 1.7,
                maxWidth: "400px",
                margin: 0,
              }}>
                Click on any product to view detailed specifications, lab reports, and export packaging options.
              </p>
            </FadeUp>
          </div>

          {/* Product list — horizontal cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {remaining.map((product, i) => (
              <FadeUp key={product.id} delay={i * 0.06}>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <article
                    style={{
                      display: "grid",
                      gridTemplateColumns: "280px 1fr",
                      gap: "0",
                      background: "#FFFFFF",
                      border: "1px solid rgba(10,10,10,0.06)",
                      borderBottom: i < remaining.length - 1 ? "none" : "1px solid rgba(10,10,10,0.06)",
                      overflow: "hidden",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    className="group hover:!border-[rgba(212,175,55,0.2)] hover:!shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:relative hover:z-[2] max-md:!grid-cols-1"
                  >
                    {/* Image */}
                    <div style={{ position: "relative", minHeight: "220px", overflow: "hidden" }}
                      className="max-md:!min-h-[200px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(10,10,10,0.3) 0%, transparent 60%)",
                      }} />
                      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                        <span style={{
                          padding: "4px 12px",
                          background: "#D4AF37",
                          color: "#0A0A0A",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}>
                          {product.category.replace("-", " ")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{
                      padding: "36px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderLeft: "3px solid transparent",
                      transition: "border-color 0.3s",
                    }} className="group-hover:!border-l-[#D4AF37] max-md:!border-l-0 max-md:!border-t-[3px] max-md:!border-t-transparent max-md:group-hover:!border-t-[#D4AF37] max-md:!p-6">
                      <div style={{
                        fontSize: "10px",
                        color: "#D4AF37",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}>
                        {product.tagline}
                      </div>

                      <h3 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#0A0A0A",
                        margin: "0 0 8px 0",
                        lineHeight: 1.3,
                        transition: "color 0.3s",
                      }} className="group-hover:!text-[#1F7A6E]">
                        {product.name}
                      </h3>

                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "11px",
                        color: "#9CA3AF",
                        marginBottom: "14px",
                      }}>
                        <MapPin style={{ width: 11, height: 11, color: "#D4AF37" }} />
                        {product.origin}
                      </div>

                      <p style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        lineHeight: 1.8,
                        margin: "0 0 20px 0",
                        maxWidth: "500px",
                      }}>
                        {product.description}
                      </p>

                      {/* Specs + CTA */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(10,10,10,0.06)",
                        flexWrap: "wrap",
                        gap: "16px",
                      }}>
                        <div style={{ display: "flex", gap: "24px" }}>
                          {product.specs.slice(0, 3).map((spec) => (
                            <div key={spec.label}>
                              <div style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "15px",
                                fontWeight: 700,
                                color: "#0F2F2A",
                                lineHeight: 1,
                                marginBottom: "3px",
                              }}>
                                {spec.value}
                              </div>
                              <div style={{
                                fontSize: "9px",
                                color: "#9CA3AF",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                fontWeight: 600,
                              }}>
                                {spec.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#D4AF37",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}>
                          View Details <ArrowRight style={{ width: 13, height: 13 }} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGING ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
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
                  Export Packaging
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
                Packaged for{" "}
                <span style={{ color: "#1F7A6E" }}>Global Markets</span>
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
              gap: "1px",
              background: "rgba(10,10,10,0.06)",
              border: "1px solid rgba(10,10,10,0.06)",
            }}
            className="max-md:!grid-cols-1"
          >
            {packagingOptions.map((pkg, i) => (
              <FadeUp key={pkg.title} delay={i * 0.08}>
                <div style={{
                  padding: "48px 36px",
                  background: pkg.highlighted ? "#0F2F2A" : "#FFFFFF",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <span style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    background: pkg.highlighted ? "rgba(212,175,55,0.12)" : "rgba(31,122,110,0.08)",
                    color: pkg.highlighted ? "#D4AF37" : "#1F7A6E",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "28px",
                    alignSelf: "flex-start",
                    border: pkg.highlighted ? "1px solid rgba(212,175,55,0.25)" : "1px solid rgba(31,122,110,0.15)",
                  }}>
                    {pkg.sizes}
                  </span>

                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: pkg.highlighted ? "#FFFFFF" : "#0A0A0A",
                    marginBottom: "16px",
                  }}>
                    {pkg.title}
                  </h4>

                  <p style={{
                    color: pkg.highlighted ? "rgba(255,255,255,0.5)" : "#6B7280",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    flex: 1,
                    margin: 0,
                  }}>
                    {pkg.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: "#F8F9F8", padding: "80px 0" }}>
        <div className="container-main">
          <FadeUp>
            <div style={{
              background: "#0A0A0A",
              padding: "clamp(48px, 6vw, 72px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
              }} />

              <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}>
                    Custom Orders
                  </span>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  color: "#FFFFFF",
                  margin: "0 0 20px 0",
                  lineHeight: 1.15,
                }}>
                  Require a Specific{" "}
                  <span style={{ color: "#D4AF37" }}>Spice Blend?</span>
                </h3>
                <p style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}>
                  Our R&D team works closely with commercial kitchens and FMCG brands
                  to create proprietary blends at scale.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
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
