import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { aboutMetadata } from "@/src/seo/metadata";
import {
  ArrowRight,
  Shield,
  Leaf,
  Globe,
  Users,
  Award,
  Target,
} from "lucide-react";

export const metadata = aboutMetadata;

const stats = [
  { value: "2025", label: "Established" },
  { value: "10+", label: "Countries Served" },
  { value: "50+", label: "Shipments Completed" },
  { value: "100%", label: "Quality Commitment" },
];

const milestones = [
  {
    year: "Step 1",
    title: "Direct Farm Sourcing",
    description:
      "We partner with vetted farmers across Andhra Pradesh and major spice hubs to source the freshest raw materials.",
  },
  {
    year: "Step 2",
    title: "Quality Grading",
    description:
      "Every batch is graded by experts to ensure only premium, export-quality produce enters our processing line.",
  },
  {
    year: "Step 3",
    title: "Hygienic Processing",
    description:
      "Our facility follows strict ISO protocols for cleaning, drying, and grinding to preserve natural volatile oils.",
  },
  {
    year: "Step 4",
    title: "Lab Verification",
    description:
      "Final products undergo rigorous testing for purity, moisture content, and contamination to meet global standards.",
  },
  {
    year: "Step 5",
    title: "Secure Packaging",
    description:
      "Customized, moisture-proof packaging ensures that the aroma and flavor remain intact during long-distance transit.",
  },
  {
    year: "Step 6",
    title: "Efficient Logistics",
    description:
      "Seamless export documentation and multi-modal logistics reach our clients with speed and reliability.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Every shipment meets strict internal benchmarks before it ever reaches a port.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent pricing, honest reporting, and ethical sourcing at every touchpoint.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our network spans 40+ countries — with last-mile delivery expertise.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Certified organic options, minimal waste processing, and farmer-first ethics.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We grow when our clients grow. Long-term relationships over short-term gains.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "Continuous investment in processing technology and quality assurance systems.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Farm Sourcing",
    body: "We partner directly with vetted farmers across 12 spice-growing states in India.",
  },
  {
    num: "02",
    title: "Incoming QC",
    body: "Every batch is tested for moisture, volatile oils, and contaminants on arrival.",
  },
  {
    num: "03",
    title: "Processing",
    body: "Grading, cleaning, and milling under ISO-certified, hygienic conditions.",
  },
  {
    num: "04",
    title: "Lab Testing",
    body: "Third-party lab analysis for pesticide residue, heavy metals, and microbial limits.",
  },
  {
    num: "05",
    title: "Export Packaging",
    body: "Customized bulk or retail packing with full traceability documentation.",
  },
  {
    num: "06",
    title: "Global Delivery",
    body: "On-time shipment with complete EXIM documentation and port-to-port tracking.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/about-hero.png"
          alt="Assorted Indian Spices"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        <div className="relative z-10 container-main pb-16 md:pb-20">
          <FadeUp>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "32px", height: "1px", background: "#D4AF37" }}
              />
              <span
                style={{
                  color: "#D4AF37",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                About Mova Logistics
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                color: "#FFFFFF",
                lineHeight: 1.08,
                margin: 0,
                maxWidth: "720px",
              }}
            >
              Connecting India&apos;s{" "}
              <span style={{ color: "#D4AF37" }}>Finest Spices</span>
              <br />
              to the World
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "16px",
                marginTop: "20px",
                maxWidth: "520px",
                lineHeight: 1.7,
              }}
            >
              A premier export company built on quality, transparency, and a 
              deep commitment to India's spice-growing heritage.
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
            className="max-md:!grid-cols-2"
          >
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "36px 24px",
                    borderRight:
                      i < 3
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                  className="max-md:even:!border-r-0"
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                      fontWeight: 700,
                      color: "#D4AF37",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 600,
                      marginTop: "10px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY — Split Layout ── */}
      <section
        style={{
          background: "#FFFFFF",
          padding: "clamp(64px, 8vw, 120px) 0",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "center",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Text */}
            <div>
              <FadeUp>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#D4AF37",
                    }}
                  />
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Our Story
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#0A0A0A",
                    margin: "0 0 16px 0",
                    lineHeight: 1.12,
                  }}
                >
                  Built on the{" "}
                  <span style={{ color: "#1F7A6E" }}>Belief That</span>
                  <br />
                  Quality Has No Compromise
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: "#D4AF37",
                    marginBottom: "28px",
                  }}
                />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p
                  style={{
                    color: "#6B7280",
                    lineHeight: 1.85,
                    marginBottom: "20px",
                    fontSize: "15px",
                  }}
                >
                  Founded in 2025 in Guntur, Mova Logistics was born from a simple 
                  realization — that the world deserves India's freshest spices 
                  directly from the source. What sets us apart is our 
                  unflinching commitment to purity.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p
                  style={{
                    color: "#6B7280",
                    lineHeight: 1.85,
                    marginBottom: "32px",
                    fontSize: "15px",
                  }}
                >
                  Today, we leverage local expertise to process in certified 
                  facilities and ship to global markets. Every gram carries our 
                  promise: sourced right, processed clean, delivered on time.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <blockquote
                  style={{
                    borderLeft: "2px solid #D4AF37",
                    paddingLeft: "20px",
                    marginBottom: "40px",
                    fontFamily: "var(--font-heading)",
                    fontStyle: "italic",
                    color: "#0F2F2A",
                    fontSize: "18px",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;Quality is not a department. It&apos;s the only way we
                  know how to work.&rdquo;
                  <footer
                    style={{
                      fontFamily: "var(--font-body)",
                      fontStyle: "normal",
                      fontSize: "12px",
                      color: "#D4AF37",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginTop: "10px",
                      fontWeight: 600,
                    }}
                  >
                    — Mova Logistics Founder
                  </footer>
                </blockquote>
              </FadeUp>
              <FadeUp delay={0.35}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Partner With Us <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>

            {/* Right — Image with overlaid stat card */}
            <FadeUp delay={0.15}>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    height: "520px",
                    overflow: "hidden",
                    border: "1px solid rgba(10,10,10,0.06)",
                  }}
                  className="max-lg:!h-[360px]"
                >
                  <Image
                    src="/images/turmeric.png"
                    alt="Premium Turmeric"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.5))",
                    }}
                  />
                </div>

                {/* Floating stat card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-28px",
                    left: "-28px",
                    background: "#0F2F2A",
                    padding: "28px 32px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px 32px",
                    minWidth: "260px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                  }}
                  className="max-sm:!hidden"
                >
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "28px",
                          fontWeight: 700,
                          color: "#D4AF37",
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 600,
                          marginTop: "6px",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK — Process grid ── */}
      <section
        style={{
          background: "#F8F9F8",
          padding: "clamp(64px, 8vw, 120px) 0",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "clamp(40px, 5vw, 64px)",
            }}
          >
            <div>
              <FadeUp>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#D4AF37",
                    }}
                  />
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    How We Work
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#0A0A0A",
                    margin: "0 0 16px 0",
                    lineHeight: 1.12,
                  }}
                >
                  From Farm to{" "}
                  <span style={{ color: "#1F7A6E" }}>Your Market</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: "#D4AF37",
                  }}
                />
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  maxWidth: "380px",
                  margin: 0,
                }}
              >
                Six meticulous steps ensure every shipment leaves our facility
                with uncompromising quality.
              </p>
            </FadeUp>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(10,10,10,0.08)",
              border: "1px solid rgba(10,10,10,0.08)",
            }}
            className="max-md:!grid-cols-1"
          >
            {processSteps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.06}>
                <div
                  style={{
                    background: "#FFFFFF",
                    padding: "40px 36px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "background 0.3s",
                  }}
                  className="group hover:!bg-[#0F2F2A]"
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "64px",
                      fontWeight: 700,
                      color: "rgba(10,10,10,0.04)",
                      lineHeight: 1,
                      position: "absolute",
                      top: "16px",
                      right: "24px",
                      transition: "color 0.3s",
                    }}
                    className="group-hover:!text-white/5"
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      width: "32px",
                      height: "2px",
                      background: "#D4AF37",
                      marginBottom: "24px",
                    }}
                  />
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      marginBottom: "12px",
                      transition: "color 0.3s",
                    }}
                    className="group-hover:!text-white"
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      color: "#6B7280",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      margin: 0,
                      transition: "color 0.3s",
                    }}
                    className="group-hover:!text-white/55"
                  >
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR FACILITY — Image + Text side-by-side ── */}
      <section
        style={{
          background: "#FFFFFF",
          padding: "clamp(64px, 8vw, 120px) 0",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "center",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Image */}
            <FadeUp>
              <div
                style={{
                  position: "relative",
                  height: "440px",
                  overflow: "hidden",
                  border: "1px solid rgba(10,10,10,0.06)",
                }}
                className="max-lg:!h-[320px]"
              >
                <Image
                  src="/images/facility.png"
                  alt="Mova Logistics Processing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 40%)",
                  }}
                />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "24px",
                    padding: "8px 18px",
                    background: "rgba(10,10,10,0.75)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                    }}
                  >
                    ISO 22000 Certified Facility
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Right — Text */}
            <div>
              <FadeUp>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#D4AF37",
                    }}
                  />
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Our Facility
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#0A0A0A",
                    margin: "0 0 16px 0",
                    lineHeight: 1.12,
                  }}
                >
                  Where Science Meets{" "}
                  <span style={{ color: "#1F7A6E" }}>Tradition</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: "#D4AF37",
                    marginBottom: "28px",
                  }}
                />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p
                  style={{
                    color: "#6B7280",
                    lineHeight: 1.85,
                    marginBottom: "20px",
                    fontSize: "15px",
                  }}
                >
                  Our state-of-the-art processing facility in Guntur combines
                  traditional spice expertise with modern food safety technology.
                  Strategically located in one of India's largest spice hubs, we
                  ensure minimal time between farm harvest and processing.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p
                  style={{
                    color: "#6B7280",
                    lineHeight: 1.85,
                    marginBottom: "32px",
                    fontSize: "15px",
                  }}
                >
                  Every square foot is designed around zero-contamination
                  protocols, with dedicated zones for receiving, processing,
                  testing, and packing — ensuring complete traceability from farm
                  gate to shipping container.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(10,10,10,0.06)",
                  }}
                >
                  {[
                    { val: "50,000 sq ft", lbl: "Facility Area" },
                    { val: "5,000+ MT", lbl: "Annual Capacity" },
                    { val: "100+", lbl: "Team Members" },
                    { val: "12 States", lbl: "Farm Network" },
                  ].map((item) => (
                    <div key={item.lbl}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#0F2F2A",
                          lineHeight: 1,
                          marginBottom: "4px",
                        }}
                      >
                        {item.val}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#9CA3AF",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 600,
                        }}
                      >
                        {item.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section
        style={{
          background: "#F8F9F8",
          padding: "clamp(64px, 8vw, 120px) 0",
        }}
      >
        <div className="container-main">
          <div style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <FadeUp>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "#D4AF37",
                  }}
                />
                <span
                  style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Journey
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#0A0A0A",
                  margin: "0 0 16px 0",
                  lineHeight: 1.12,
                }}
              >
                Milestones That{" "}
                <span style={{ color: "#1F7A6E" }}>Define Us</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#D4AF37",
                }}
              />
            </FadeUp>
          </div>

          {/* Timeline — Horizontal steps with line */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "0",
              position: "relative",
            }}
            className="max-lg:!grid-cols-3 max-md:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.06}>
                <div
                  style={{
                    padding: "0 20px",
                    textAlign: "center",
                    position: "relative",
                  }}
                  className="max-sm:!text-left max-sm:!px-0 max-sm:!pb-8 max-sm:!mb-8 max-sm:!border-b max-sm:!border-[rgba(10,10,10,0.06)]"
                >
                  {/* Year dot */}
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      border: "2px solid #D4AF37",
                      borderRadius: "50%",
                      background: "#F8F9F8",
                      margin: "0 auto 20px",
                      position: "relative",
                      zIndex: 1,
                    }}
                    className="max-sm:!mx-0"
                  />

                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "rgba(10,10,10,0.08)",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {m.year}
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {m.title}
                  </h4>

                  <p
                    style={{
                      color: "#6B7280",
                      fontSize: "12px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {m.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        style={{
          background: "#0F2F2A",
          padding: "clamp(64px, 8vw, 120px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background:
              "radial-gradient(ellipse at 80% 80%, rgba(212,175,55,0.04) 0%, transparent 60%)",
          }}
        />

        <div
          className="container-main"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "clamp(48px, 6vw, 72px)",
            }}
          >
            <div>
              <FadeUp>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#D4AF37",
                    }}
                  />
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Our Values
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#FFFFFF",
                    margin: "0 0 16px 0",
                    lineHeight: 1.12,
                  }}
                >
                  Principles That
                  <br />
                  <span style={{ color: "#D4AF37" }}>Guide Every Decision</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: "#D4AF37",
                  }}
                />
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  maxWidth: "380px",
                  margin: 0,
                }}
              >
                These aren&apos;t slogans on a wall. They&apos;re the principles
                our team applies every day — from the farms where we source to the
                ships that carry our cargo.
              </p>
            </FadeUp>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(255,255,255,0.06)",
            }}
            className="max-md:!grid-cols-1"
          >
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.06}>
                <div
                  style={{
                    background: "#0F2F2A",
                    padding: "40px 36px",
                    borderBottom: "2px solid transparent",
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                  className="hover:!border-[#D4AF37] hover:!bg-[#153633]"
                >
                  <v.icon
                    style={{
                      width: "22px",
                      height: "22px",
                      color: "#D4AF37",
                      marginBottom: "20px",
                    }}
                  />
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    {v.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: "#F8F9F8", padding: "80px 0" }}>
        <div className="container-main">
          <FadeUp>
            <div
              style={{
                background: "#0A0A0A",
                padding: "clamp(48px, 6vw, 72px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50%",
                  height: "100%",
                  background:
                    "radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "520px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#D4AF37",
                    }}
                  />
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Let&apos;s Work Together
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: "#D4AF37",
                    }}
                  />
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#FFFFFF",
                    margin: "0 0 16px 0",
                    lineHeight: 1.12,
                  }}
                >
                  Ready to Import
                  <br />
                  <span style={{ color: "#D4AF37" }}>Premium Spices?</span>
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    marginBottom: "36px",
                  }}
                >
                  Whether you need a sample, a quote, or an entire supply chain
                  partnership — we&apos;re ready to deliver.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href="/contact"
                    className="btn-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/products"
                    className="hover:!text-[#D4AF37] hover:!border-[#D4AF37]"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "14px 32px",
                      background: "transparent",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,0.15)",
                      textDecoration: "none",
                      transition: "border-color 0.3s, color 0.3s",
                    }}
                  >
                    View Products <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
