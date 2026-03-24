"use client";

import { useRef } from "react";
import { Sprout, Wind, Cog, FlaskConical, Package, Ship } from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  { icon: Sprout, title: "Farm Sourcing", description: "Direct partnerships with farmers across India's finest spice-growing regions.", step: "01", color: "#4ADE80" },
  { icon: Wind, title: "Cleaning", description: "Multi-stage cleaning process removes impurities and ensures purity.", step: "02", color: "#60A5FA" },
  { icon: Cog, title: "Processing", description: "State-of-the-art facilities with temperature-controlled environments.", step: "03", color: "#F59E0B" },
  { icon: FlaskConical, title: "Quality Testing", description: "NABL-accredited lab testing for purity, moisture, and safety.", step: "04", color: "#A78BFA" },
  { icon: Package, title: "Packaging", description: "Food-grade, export-standard packaging with custom branding.", step: "05", color: "#F472B6" },
  { icon: Ship, title: "Global Shipping", description: "Reliable logistics ensuring on-time delivery to ports worldwide.", step: "06", color: "#D4AF37" },
];

export function QualityProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#FFFFFF",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="container-main">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "80px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
        >
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
            Our Process
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.2, margin: 0 }}>
            From Farm to{" "}
            <span style={{ color: "#1F7A6E" }}>Global Markets</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #D4AF37, #e0c55e)", margin: "24px auto 0" }} />
          <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.75, margin: "20px auto 0" }}>
            Our rigorous 6-step quality process ensures every shipment meets international food safety and quality standards.
          </p>
        </motion.div>

        {/* ── Steps Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              style={{
                padding: "36px 32px",
                borderRadius: "20px",
                border: "1px solid rgba(10,10,10,0.06)",
                background: "#F8F9F8",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "box-shadow 0.5s, border-color 0.5s",
              }}
              className="hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:!border-[rgba(212,175,55,0.2)]"
            >
              {/* Step number + icon row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(10,10,10,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <step.icon style={{ width: 26, height: 26, color: "#1F7A6E" }} />
                </div>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: step.color,
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 4px 12px ${step.color}40`,
                  }}
                >
                  {step.step}
                </span>
              </div>

              {/* Title */}
              <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0A0A0A", margin: "0 0 10px 0", lineHeight: 1.3 }}>
                {step.title}
              </h4>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
