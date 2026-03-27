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
        background: "#0F2F2A",
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
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
        }}
      />

      <div
        className="container-main"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="lg:!grid-cols-[1fr_auto]"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
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
              Partner With Us
            </span>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: "0 0 20px 0",
                maxWidth: "680px",
              }}
            >
              Ready to Source{" "}
              <span style={{ color: "#D4AF37" }}>Premium Indian Spices</span>?
            </h2>

            <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />

            <p
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "16px",
                lineHeight: 1.8,
                maxWidth: "520px",
                margin: "0 0 40px 0",
              }}
            >
              Get in touch with our export team for product catalogs, pricing,
              samples, and customized packaging solutions.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px 36px",
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#b8961f")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#D4AF37")
                }
              >
                Request a Quote{" "}
                <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
              <Link
                href="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px 36px",
                  background: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  textDecoration: "none",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.7)";
                }}
              >
                Browse Products
              </Link>
            </div>
          </motion.div>

          {/* Right: Trust badges (vertical) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "1px solid rgba(255,255,255,0.07)",
              minWidth: "260px",
            }}
            className="max-lg:!flex-row max-lg:!flex-wrap max-lg:!border-0 max-lg:!gap-4"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                style={{
                  padding: "28px 32px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
                className="max-lg:!border max-lg:!border-white/10 max-lg:!rounded max-lg:!p-4"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <badge.icon style={{ width: 18, height: 18, color: "#D4AF37" }} />
                </div>
                <span
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "13px",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
