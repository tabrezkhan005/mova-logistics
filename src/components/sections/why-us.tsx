"use client";

import { useRef } from "react";
import { CheckCircle, Truck, ShieldCheck, Handshake, BarChart3, Headphones } from "lucide-react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "FSSAI, ISO 22000, HACCP, and Spice Board certified. Every batch undergoes rigorous lab testing.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "End-to-end supply chain management with on-time delivery to ports worldwide.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Long-term relationships with farmers, processors, and global buyers built on transparency.",
  },
  {
    icon: BarChart3,
    title: "Competitive Pricing",
    description:
      "Direct farm sourcing eliminates middlemen, delivering the best value for premium quality.",
  },
  {
    icon: CheckCircle,
    title: "Custom Packaging",
    description:
      "Flexible packaging options — bulk, retail-ready, private label, and custom solutions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A dedicated export manager for every client, ensuring seamless communication and service.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

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
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
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
            Why Choose Us
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
                color: "#FFFFFF",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              The Mova Logistics{" "}
              <span style={{ color: "#D4AF37" }}>Advantage</span>
            </h2>
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#D4AF37",
                flexShrink: 0,
                marginBottom: "8px",
              }}
            />
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "20px 0 0 0",
              maxWidth: "520px",
            }}
          >
            What makes us the preferred export partner for businesses worldwide
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              style={{
                padding: "40px 36px",
                background: "#0F2F2A",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#1a4a42")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#0F2F2A")
              }
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <reason.icon
                  style={{ width: 20, height: 20, color: "#D4AF37" }}
                />
              </div>

              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 10px 0",
                  lineHeight: 1.3,
                }}
              >
                {reason.title}
              </h4>

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
