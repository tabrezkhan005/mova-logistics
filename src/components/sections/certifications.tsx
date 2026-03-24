"use client";

import { useRef } from "react";
import { Shield } from "lucide-react";
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
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0F2F2A 0%, #0A0A0A 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top/bottom separator lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />

      {/* Decorative glows */}
      <div style={{ position: "absolute", top: "15%", right: 0, width: "350px", height: "350px", background: "rgba(212,175,55,0.04)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: 0, width: "280px", height: "280px", background: "rgba(31,122,110,0.05)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
        >
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
            Certifications & Compliance
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, margin: 0 }}>
            Internationally{" "}
            <span className="gradient-text">Certified Quality</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #D4AF37, #e0c55e)", margin: "24px auto 0" }} />
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.75, margin: "20px auto 0" }}>
            Our products meet the highest international food safety and quality standards.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="max-lg:!grid-cols-3 max-md:!grid-cols-2"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              style={{
                padding: "32px 24px",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.03)",
                textAlign: "center",
                transition: "border-color 0.5s, background 0.5s, transform 0.3s",
                cursor: "default",
              }}
              className="hover:!bg-[rgba(255,255,255,0.06)] hover:!border-[rgba(212,175,55,0.25)]"
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Shield style={{ width: 22, height: 22, color: "#D4AF37" }} />
              </div>

              {/* Name */}
              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 8px 0", lineHeight: 1.3 }}>
                {cert.name}
              </h4>

              {/* Description */}
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
