import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { ExportMap } from "@/src/components/sections/export-map";
import { TestimonialCarousel } from "@/src/components/carousel/testimonial-carousel";
import { exportRegions } from "@/src/data/countries";
import { exportsMetadata } from "@/src/seo/metadata";
import {
  ArrowRight,
  Ship,
  Package,
  FileText,
  MessageSquare,
  MapPin,
  CheckCircle,
} from "lucide-react";

export const metadata = exportsMetadata;

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Inquiry & Consultation",
    desc: "Share your requirements — product type, volume, quality specifications, packaging, and destination port.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Quotation & Samples",
    desc: "Receive competitive pricing, product samples for quality validation, and complete shipping documentation details.",
  },
  {
    icon: Package,
    step: "03",
    title: "Order & Processing",
    desc: "Confirm your order, and we begin production with quality testing at every stage, plus custom branding if needed.",
  },
  {
    icon: Ship,
    step: "04",
    title: "Shipment & Delivery",
    desc: "Your shipment is dispatched via the optimal route with full documentation for seamless customs clearance.",
  },
];

const exportAdvantages = [
  "Direct farm-to-port supply chain",
  "Custom packaging & private labeling",
  "Full export documentation support",
  "Competitive FOB & CIF pricing",
  "Dedicated export manager per client",
  "Sample dispatch within 48 hours",
];

export default function ExportsPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/shipping-hero.png"
          alt="Global Shipping Routes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

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
                Global Exports
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "720px",
            }}>
              Delivering Spices to{" "}
              <span style={{ color: "#D4AF37" }}>Global Markets</span>
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
              Our robust supply chain and logistics network ensures reliable delivery
              of premium Indian spices to markets worldwide.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "32px" }}
            >
              Get Export Quote <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── EXPORT MAP (existing component) ── */}
      <ExportMap />

      {/* ── REGION CARDS ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          {/* Section header */}
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
                  Our Markets
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
                Regions We{" "}
                <span style={{ color: "#1F7A6E" }}>Serve</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
            </FadeUp>
          </div>

          {/* Region grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1px",
              background: "rgba(10,10,10,0.06)",
              border: "1px solid rgba(10,10,10,0.06)",
            }}
            className="max-lg:!grid-cols-3 max-md:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {exportRegions.map((region, i) => (
              <FadeUp key={region.id} delay={i * 0.06}>
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "32px 24px",
                    transition: "background 0.3s",
                  }}
                  className="hover:!bg-[#F8F9F8] group"
                >
                  {/* Region indicator */}
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: region.color === "#D4AF37" ? "rgba(212,175,55,0.1)" : "rgba(31,122,110,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    transition: "transform 0.3s",
                  }} className="group-hover:!scale-110">
                    <MapPin style={{ width: 18, height: 18, color: region.color }} />
                  </div>

                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    margin: "0 0 14px 0",
                    lineHeight: 1.3,
                  }}>
                    {region.name}
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {region.countries.map((country) => (
                      <div key={country} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        color: "#6B7280",
                      }}>
                        <div style={{
                          width: "3px",
                          height: "3px",
                          borderRadius: "50%",
                          background: region.color,
                          flexShrink: 0,
                        }} />
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT PROCESS — Horizontal Timeline ── */}
      <section style={{ background: "#F8F9F8", padding: "clamp(64px, 8vw, 120px) 0" }}>
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
                  How We Export
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
                Seamless{" "}
                <span style={{ color: "#1F7A6E" }}>Export Process</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
            </FadeUp>
          </div>

          {/* Steps as horizontal timeline */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              position: "relative",
            }}
            className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: "35px",
                left: "calc(12.5%)",
                right: "calc(12.5%)",
                height: "1px",
                background: "linear-gradient(90deg, #D4AF37 0%, rgba(31,122,110,0.4) 100%)",
              }}
              className="max-lg:!hidden"
            />

            {processSteps.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.08}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "0 24px",
                    position: "relative",
                  }}
                >
                  {/* Step circle */}
                  <div style={{
                    width: "70px",
                    height: "70px",
                    border: "2px solid rgba(212,175,55,0.3)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    background: "#F8F9F8",
                    position: "relative",
                    zIndex: 1,
                    transition: "border-color 0.3s, background 0.3s",
                  }} className="hover:!border-[#D4AF37] hover:!bg-[#D4AF37]/5 group">
                    <step.icon style={{ width: 26, height: 26, color: "#D4AF37" }} />
                  </div>

                  {/* Step number */}
                  <div style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#D4AF37",
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}>
                    Step {step.step}
                  </div>

                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    margin: "0 0 12px 0",
                    lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h4>

                  <p style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: "260px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}>
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EXPORT WITH US — Split layout ── */}
      <section style={{
        background: "#0F2F2A",
        padding: "clamp(64px, 8vw, 100px) 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background: "radial-gradient(ellipse at 80% 80%, rgba(212,175,55,0.05) 0%, transparent 60%)",
        }} />

        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "center",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Image + overlay text */}
            <FadeUp>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "relative",
                  height: "480px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                }} className="max-lg:!h-[360px]">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200"
                    alt="Container Ship Export"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,47,42,0.8) 0%, transparent 50%)",
                  }} />
                  {/* Bottom overlay stats */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px",
                    display: "flex",
                    gap: "32px",
                    flexWrap: "wrap",
                  }}>
                    {[
                      { val: "50+", lbl: "Shipments" },
                      { val: "2025", lbl: "Established" },
                      { val: "100%", lbl: "Lab Tested" },
                    ].map((s) => (
                      <div key={s.lbl}>
                        <div style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "24px",
                          fontWeight: 700,
                          color: "#D4AF37",
                          lineHeight: 1,
                        }}>
                          {s.val}
                        </div>
                        <div style={{
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.4)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 600,
                          marginTop: "4px",
                        }}>
                          {s.lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — Advantages list */}
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
                    Why Export With Us
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-heading)",
                  color: "#FFFFFF",
                  margin: "0 0 20px 0",
                  lineHeight: 1.12,
                }}>
                  Your Trusted{" "}
                  <span style={{ color: "#D4AF37" }}>Export Partner</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p style={{
                  color: "rgba(255,255,255,0.42)",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  marginBottom: "36px",
                  maxWidth: "440px",
                }}>
                  From sourcing to shipping, we handle every step of the export journey so you can
                  focus on growing your business.
                </p>
              </FadeUp>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {exportAdvantages.map((advantage, i) => (
                  <FadeUp key={advantage} delay={0.2 + i * 0.05}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 0",
                      borderBottom: i < exportAdvantages.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}>
                      <CheckCircle style={{ width: 16, height: 16, color: "#D4AF37", flexShrink: 0 }} />
                      <span style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.55)",
                        fontWeight: 500,
                      }}>
                        {advantage}
                      </span>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.5}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "36px" }}
                >
                  Start Exporting <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{
        background: "#F8F9F8",
        padding: "clamp(64px, 8vw, 100px) 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(10,10,10,0.06) 50%, transparent 100%)",
        }} />

        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <FadeUp>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span style={{
                  color: "#D4AF37",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}>
                  Client Testimonials
                </span>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                color: "#0A0A0A",
                margin: "0 0 16px 0",
                lineHeight: 1.12,
              }}>
                What Our{" "}
                <span style={{ color: "#D4AF37" }}>Partners Say</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ width: "40px", height: "2px", background: "#D4AF37", margin: "0 auto" }} />
            </FadeUp>
          </div>

          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
}
