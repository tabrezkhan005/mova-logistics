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
      "Exporting to 40+ countries across 5 continents with flawless international logistics.",
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
    title: "15+ Years Legacy",
    description:
      "Over a decade of unbroken trust in the international spice trade.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    description:
      "Complete supply chain management — sourcing to customs to final delivery.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "40+", label: "Countries Served" },
  { value: "500+", label: "Annual Shipments" },
  { value: "98%", label: "Client Retention" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8F9F8 0%, #FFFFFF 100%)" }}
    >
      <div className="container-main" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

        {/* ── Section Header ── */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "80px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            style={{
              color: "#D4AF37",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.2em",
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
              lineHeight: 1.2,
              margin: "0 auto",
              maxWidth: "650px",
            }}
          >
            A Legacy of{" "}
            <span style={{ color: "#1F7A6E" }}>Premium Spices</span>
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, #D4AF37, #e0c55e)",
              margin: "24px auto 0",
            }}
          />
          <p
            style={{
              color: "#6B7280",
              fontSize: "16px",
              lineHeight: 1.75,
              maxWidth: "620px",
              margin: "24px auto 0",
            }}
          >
            Headquartered in Mumbai, we bridge India&apos;s finest farms and businesses
            worldwide — delivering authentic flavor, rigorous quality, and
            unbroken trust in every shipment.
          </p>
        </motion.div>

        {/* ── Two-Column: Image + Features ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="lg:!grid-cols-2"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div style={{ position: "relative", maxWidth: "480px", width: "100%" }}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "4/5",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src="/images/about-spices-tall.png"
                  alt="Premium Indian Spices"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)",
                  }}
                />

                {/* Button overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "28px",
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="/products"
                    style={{
                      background: "#FFFFFF",
                      color: "#0A0A0A",
                      padding: "12px 28px",
                      borderRadius: "100px",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                      transition: "all 0.3s",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    }}
                  >
                    Our Products <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              </div>

              {/* Decorative border */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  border: "2px solid rgba(212,175,55,0.15)",
                  borderRadius: "32px",
                  zIndex: -1,
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
              className="max-sm:!grid-cols-1"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <feature.icon style={{ width: 22, height: 22, color: "#D4AF37" }} />
                  </div>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
          className="max-md:!grid-cols-2"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "32px 16px",
                borderRadius: "16px",
                background: "#FFFFFF",
                border: "1px solid rgba(10,10,10,0.05)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  color: "#0A0A0A",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#9CA3AF",
                  letterSpacing: "0.1em",
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            marginTop: "80px",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #0F2F2A 0%, #0A0A0A 100%)",
              padding: "64px 40px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Gold top line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

            <span
              style={{
                color: "#D4AF37",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.25em",
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
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 auto",
                maxWidth: "500px",
                lineHeight: 1.3,
              }}
            >
              Ready to Export Premium Spices Globally?
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "440px",
                margin: "16px auto 0",
              }}
            >
              Partner with Mova Logistics for uncompromised quality and reliable worldwide delivery.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px",
                marginTop: "32px",
              }}
            >
              <Link href="/contact" className="btn-primary" style={{ borderRadius: "12px" }}>
                Get Started <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link href="/products" className="btn-secondary" style={{ borderRadius: "12px" }}>
                View Products
              </Link>
            </div>

            {/* Trust row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "24px",
                marginTop: "40px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {["ISO 22000", "HACCP", "FSSAI", "Spice Board"].map((cert) => (
                <div key={cert} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
