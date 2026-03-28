import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { QualityProcess } from "@/src/components/sections/quality-process";
import { Certifications } from "@/src/components/sections/certifications";
import { qualityMetadata } from "@/src/seo/metadata";
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Award,
  Target,
  Boxes,
  Globe,
} from "lucide-react";

export const metadata = qualityMetadata;

const labTests = [
  {
    icon: Microscope,
    title: "Microbiological Testing",
    desc: "Complete microbial analysis including E.coli, Salmonella, yeast, and mold counts per international limits.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Analysis",
    desc: "Aflatoxin levels, pesticide residue, heavy metals, and moisture content — tested in NABL-accredited labs.",
  },
  {
    icon: ShieldCheck,
    title: "Physical Quality",
    desc: "Color value, particle size, volatile oil content, and foreign matter inspection against buyer specs.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    desc: "Certificate of Analysis, phytosanitary certificates, and origin certificates for every shipment.",
  },
];

const stats = [
  { number: "100%", label: "Lab Tested", icon: FlaskConical },
  { number: "8+", label: "Certifications", icon: Award },
  { number: "99.7%", label: "Purity Rate", icon: Target },
  { number: "40+", label: "Countries Served", icon: Globe },
];

export default function QualityPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
          alt="Quality Control Laboratory"
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
                Quality Assurance
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
              Uncompromising{" "}
              <span style={{ color: "#D4AF37" }}>Quality Standards</span>
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
              Every spice we export undergoes rigorous quality testing in NABL-accredited
              laboratories to meet international food safety standards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "#0A0A0A", padding: "0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
            className="max-md:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.08}>
                <div
                  style={{
                    padding: "40px 32px",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    transition: "background 0.3s",
                  }}
                  className="max-md:even:!border-r-0 max-sm:!border-r-0 max-sm:!border-b max-sm:!border-[rgba(255,255,255,0.06)] hover:!bg-[rgba(255,255,255,0.02)] group"
                >
                  <div style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "border-color 0.3s, background 0.3s",
                  }} className="group-hover:!border-[#D4AF37]/50 group-hover:!bg-[#D4AF37]/5">
                    <stat.icon style={{ width: 20, height: 20, color: "#D4AF37" }} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY PROCESS (existing component) ── */}
      <QualityProcess />

      {/* ── LAB TESTING — Split layout ── */}
      <section style={{ background: "#F8F9F8", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "start",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Intro */}
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
                    Laboratory Testing
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
                  Rigorous{" "}
                  <span style={{ color: "#1F7A6E" }}>Quality Testing</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p style={{
                  color: "#6B7280",
                  lineHeight: 1.85,
                  fontSize: "15px",
                  marginBottom: "32px",
                }}>
                  Every batch undergoes comprehensive laboratory analysis before it leaves our facility.
                  Our NABL-accredited testing ensures compliance with FDA, EU, FSSAI, and other
                  international food safety regulations.
                </p>
              </FadeUp>

              {/* Image */}
              <FadeUp delay={0.25}>
                <div style={{
                  position: "relative",
                  height: "300px",
                  overflow: "hidden",
                  border: "1px solid rgba(10,10,10,0.07)",
                }} className="max-lg:!h-[240px]">
                  <Image
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200"
                    alt="Laboratory Quality Testing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,47,42,0.3) 0%, transparent 60%)",
                  }} />
                </div>
              </FadeUp>
            </div>

            {/* Right — Test cards with numbered indicators */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {labTests.map((test, i) => (
                <FadeUp key={test.title} delay={0.1 + i * 0.08}>
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      padding: "32px 0",
                      borderBottom: i < labTests.length - 1 ? "1px solid rgba(10,10,10,0.07)" : "none",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Number + icon */}
                    <div style={{ flexShrink: 0, position: "relative" }}>
                      <div style={{
                        width: "56px",
                        height: "56px",
                        background: "#0F2F2A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "2px",
                      }}>
                        <test.icon style={{ width: 24, height: 24, color: "#D4AF37" }} />
                      </div>
                      <div style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        width: "22px",
                        height: "22px",
                        background: "#D4AF37",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <span style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#0A0A0A",
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#0A0A0A",
                        margin: "0 0 8px 0",
                        lineHeight: 1.3,
                      }}>
                        {test.title}
                      </h4>
                      <p style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        lineHeight: 1.8,
                        margin: 0,
                      }}>
                        {test.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY OUR QUALITY MATTERS — Dark feature section ── */}
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
              gridTemplateColumns: "1fr 1.2fr",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Text */}
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
                    Why It Matters
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
                  Quality That Speaks{" "}
                  <span style={{ color: "#D4AF37" }}>For Itself</span>
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
                  marginBottom: "32px",
                  maxWidth: "440px",
                }}>
                  Our commitment to quality isn&apos;t just a promise — it&apos;s a measurable standard
                  backed by independent audits, lab reports, and certifications that are recognized
                  in over 40 countries.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Request Quality Reports <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>

            {/* Right — Feature cards */}
            <FadeUp delay={0.15}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  background: "rgba(255,255,255,0.05)",
                }}
                className="max-sm:!grid-cols-1"
              >
                {[
                  {
                    icon: Boxes,
                    title: "Batch Traceability",
                    desc: "Every shipment is traceable back to the farm of origin with full documentation.",
                  },
                  {
                    icon: Microscope,
                    title: "NABL Labs",
                    desc: "Testing conducted in nationally accredited laboratories with ISO 17025.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Zero-Tolerance Policy",
                    desc: "Any batch failing quality parameters is immediately rejected — no exceptions.",
                  },
                  {
                    icon: Award,
                    title: "Buyer Spec Match",
                    desc: "Custom specifications are matched and verified before every single shipment.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      padding: "32px 28px",
                      transition: "background 0.3s",
                    }}
                    className="hover:!bg-[rgba(255,255,255,0.04)] group"
                  >
                    <div style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      transition: "border-color 0.3s, background 0.3s",
                    }} className="group-hover:!border-[#D4AF37]/50 group-hover:!bg-[#D4AF37]/5">
                      <feature.icon style={{ width: 20, height: 20, color: "#D4AF37" }} />
                    </div>
                    <h4 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "0 0 8px 0",
                      lineHeight: 1.3,
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.3)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS (existing component) ── */}
      <Certifications />
    </>
  );
}
