"use client";

import { useRef } from "react";
import { Sprout, Wind, Cog, FlaskConical, Package, Ship } from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    icon: Sprout,
    title: "Farm Sourcing",
    description:
      "Direct partnerships with farmers across India's finest spice-growing regions.",
    step: "01",
  },
  {
    icon: Wind,
    title: "Cleaning",
    description:
      "Multi-stage cleaning process removes impurities and ensures purity.",
    step: "02",
  },
  {
    icon: Cog,
    title: "Processing",
    description:
      "State-of-the-art facilities with temperature-controlled environments.",
    step: "03",
  },
  {
    icon: FlaskConical,
    title: "Quality Testing",
    description:
      "NABL-accredited lab testing for purity, moisture, and safety.",
    step: "04",
  },
  {
    icon: Package,
    title: "Packaging",
    description:
      "Food-grade, export-standard packaging with custom branding.",
    step: "05",
  },
  {
    icon: Ship,
    title: "Global Shipping",
    description:
      "Reliable logistics ensuring on-time delivery to ports worldwide.",
    step: "06",
  },
];

export function QualityProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#FFFFFF",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container-main">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
              marginBottom: "16px",
            }}
          >
            Our Process
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#0A0A0A",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
              maxWidth: "520px",
            }}
          >
            From Farm to{" "}
            <span style={{ color: "#1F7A6E" }}>Global Markets</span>
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
          <p
            style={{
              color: "#6B7280",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "20px 0 0 0",
              maxWidth: "500px",
            }}
          >
            Our rigorous 6-step quality process ensures every shipment meets
            international food safety and quality standards.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(10,10,10,0.07)",
            border: "1px solid rgba(10,10,10,0.07)",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                padding: "40px 36px",
                background: "#FFFFFF",
                transition: "background 0.3s",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#F8F9F8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#FFFFFF")
              }
            >
              {/* Step row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(31,122,110,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <step.icon
                    style={{ width: 22, height: 22, color: "#1F7A6E" }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "clamp(2.2rem, 3vw, 2.8rem)",
                    fontWeight: 800,
                    fontFamily: "var(--font-heading)",
                    color: "rgba(10,10,10,0.05)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step.step}
                </span>
              </div>

              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  margin: "0 0 10px 0",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h4>

              <p
                style={{
                  fontSize: "13px",
                  color: "#6B7280",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
