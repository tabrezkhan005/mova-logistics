"use client";

import { useRef } from "react";
import { Shield, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

const certifications = [
  { name: "FSSAI", description: "Food Safety & Standards Authority of India" },
  { name: "ISO 22000", description: "Food Safety Management System" },
  { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
  { name: "Spice Board", description: "Spice Board of India Certified" },
  { name: "Organic", description: "USDA & EU Organic Certified" },
  { name: "Halal", description: "Halal Certified Products" },
  { name: "Kosher", description: "Kosher Certification Available" },
  { name: "GMP", description: "Good Manufacturing Practices" },
];

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#F8F9F8",
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top rule */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(10,10,10,0.08) 50%, transparent 100%)",
        }}
      />

      <div
        className="container-main"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
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
            Certifications & Compliance
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#0A0A0A",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Internationally{" "}
              <span style={{ color: "#D4AF37" }}>Certified Quality</span>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#D4AF37", flexShrink: 0, marginBottom: "8px" }} />
          </div>
          <p
            style={{
              color: "#6B7280",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "20px 0 0 0",
              maxWidth: "480px",
            }}
          >
            Our products meet the highest international food safety and quality
            standards, backed by globally recognized certifications.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(10,10,10,0.06)",
            border: "1px solid rgba(10,10,10,0.06)",
          }}
          className="max-lg:!grid-cols-3 max-md:!grid-cols-2"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
              style={{
                padding: "36px 28px",
                background: "#FFFFFF",
                transition: "background 0.3s",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#F0F1F0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#FFFFFF")
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <CheckCircle
                  style={{ width: 16, height: 16, color: "#D4AF37", flexShrink: 0 }}
                />
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {cert.name}
                </h4>
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Trust statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            marginTop: "48px",
            padding: "28px 36px",
            border: "1px solid rgba(10,10,10,0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <Shield style={{ width: 20, height: 20, color: "#D4AF37", flexShrink: 0 }} />
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              All certifications are renewed annually and independently audited.
              Documentation available upon request.
            </p>
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "#D4AF37",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Request Documents →
          </span>
        </motion.div>
      </div>
    </section>
  );
}
