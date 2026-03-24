"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, Leaf } from "lucide-react";
import { motion, useInView } from "framer-motion";

const trustBadges = [
  { icon: ShieldCheck, label: "ISO & HACCP Certified" },
  { icon: Globe, label: "40+ Countries" },
  { icon: Leaf, label: "Organic Options" },
];

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0F2F2A 0%, #0A0A0A 50%, #0F2F2A 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top separator */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)" }} />

      {/* Decorative glows */}
      <div style={{ position: "absolute", top: "20%", right: "20%", width: "400px", height: "400px", background: "rgba(212,175,55,0.04)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "20%", width: "300px", height: "300px", background: "rgba(31,122,110,0.06)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: "650px", margin: "0 auto" }}
        >
          {/* Label */}
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
            Partner With Us
          </span>

          {/* Heading */}
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, margin: 0 }}>
            Ready to Source{" "}
            <span className="gradient-text">Premium Indian Spices</span>?
          </h2>

          {/* Subtext */}
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 1.75, margin: "24px auto 0", maxWidth: "480px" }}>
            Get in touch with our export team for product catalogs, pricing,
            samples, and customized packaging solutions.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <Link href="/contact" className="btn-primary" style={{ borderRadius: "12px" }}>
              Request a Quote <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link href="/products" className="btn-secondary" style={{ borderRadius: "12px" }}>
              Browse Products
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "32px",
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <badge.icon style={{ width: 18, height: 18, color: "#D4AF37" }} />
                </div>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 500 }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
