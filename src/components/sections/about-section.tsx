"use client";
import { useRef } from "react";
import {
  Globe,
  Shield,
  Leaf,
  Box,
  Award,
  Truck,
  ArrowRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Exporting premium spices to growing markets across multiple continents with reliable logistics.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "FSSAI, ISO 22000, and HACCP certified — every batch passes rigorous lab testing.",
  },
  {
    icon: Leaf,
    title: "Farm Fresh",
    description:
      "Direct sourcing from premium Indian farms, preserving authentic aroma and natural oils.",
  },
  {
    icon: Box,
    title: "Custom Packaging",
    description:
      "Bulk, retail-ready, private label, and custom packaging tailored to your market.",
  },
  {
    icon: Award,
    title: "Built on Expertise",
    description:
      "Founded by professionals with deep roots in India's spice-growing regions.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    description:
      "Complete supply chain management — sourcing to customs to final delivery.",
  },
];

const stats = [
  { value: "2025", label: "Established" },
  { value: "10+", label: "Countries Served" },
  { value: "50+", label: "Shipments Completed" },
  { value: "100%", label: "Quality Commitment" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="about-section"
      ref={sectionRef}
      style={{ background: "#FFFFFF" }}
    >
      {/* ── Intro Strip ── */}
      <div
        style={{
          borderTop: "1px solid rgba(10,10,10,0.06)",
          borderBottom: "1px solid rgba(10,10,10,0.06)",
          background: "#F8F9F8",
          padding: "20px 0",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {["ISO 22000 Certified", "HACCP Certified", "FSSAI Licensed", "Spice Board of India"].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#D4AF37",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#6B7280",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {badge}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div
        className="container-main"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "72px" }}
        >
          <span
            style={{
              color: "#D4AF37",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "20px",
            }}
          >
            About Mova Logistics
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#0A0A0A",
              lineHeight: 1.15,
              margin: "0 0 20px 0",
              maxWidth: "560px",
            }}
          >
            Your Trusted Partner for{" "}
            <span style={{ color: "#1F7A6E" }}>Premium Spices</span>
          </h2>
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#D4AF37",
            }}
          />
          <p
            style={{
              color: "#6B7280",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "24px 0 0 0",
            }}
          >
            Based in Guntur, Andhra Pradesh — the heart of India&apos;s spice
            country — we connect premium Indian farms with businesses worldwide,
            delivering authentic flavor and rigorous quality in every shipment.
          </p>
        </motion.div>

        {/* ── Two-Column: Image + Features ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "72px",
            alignItems: "start",
          }}
          className="lg:!grid-cols-[480px_1fr]"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div style={{ position: "relative" }}>
              {/* Main image */}
              <div
                style={{
                  borderRadius: "4px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/about-spices-tall.png"
                  alt="Premium Indian Spices"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 55%)",
                  }}
                />
                {/* Overlay CTA */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "28px",
                    left: "28px",
                    right: "28px",
                  }}
                >
                  <Link
                    href="/products"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      background: "#D4AF37",
                      color: "#0A0A0A",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      borderRadius: "4px",
                      textDecoration: "none",
                    }}
                  >
                    Our Products{" "}
                    <ArrowRight style={{ width: 13, height: 13 }} />
                  </Link>
                </div>
              </div>

              {/* Gold accent border */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  right: "-16px",
                  bottom: "-16px",
                  border: "1px solid rgba(212,175,55,0.18)",
                  borderRadius: "4px",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
              }}
              className="max-sm:!grid-cols-1"
            >
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  style={{
                    padding: "32px",
                    borderBottom: i < features.length - 2 ? "1px solid rgba(10,10,10,0.06)" : "none",
                    borderRight: i % 2 === 0 ? "1px solid rgba(10,10,10,0.06)" : "none",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "#F8F9F8")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "transparent")
                  }
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(212,175,55,0.25)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <feature.icon
                      style={{ width: 18, height: 18, color: "#D4AF37" }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      margin: "0 0 8px 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(10,10,10,0.07)",
            borderLeft: "1px solid rgba(10,10,10,0.07)",
          }}
          className="max-md:!grid-cols-2"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "40px 32px",
                borderRight: "1px solid rgba(10,10,10,0.07)",
                borderBottom: "1px solid rgba(10,10,10,0.07)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  color: "#0F2F2A",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#9CA3AF",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginTop: "12px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            marginTop: "80px",
            background: "#0F2F2A",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            padding: "56px 56px",
          }}
          className="max-md:!p-10 max-sm:!p-8"
        >
          {/* Gold top strip */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "#D4AF37",
            }}
          />

          <div style={{ flex: "1", minWidth: "280px" }}>
            <span
              style={{
                color: "#D4AF37",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Start Your Journey
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Ready to Export Premium Spices Globally?
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "#D4AF37",
                color: "#0A0A0A",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Get Started <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.2)",
                textDecoration: "none",
              }}
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
