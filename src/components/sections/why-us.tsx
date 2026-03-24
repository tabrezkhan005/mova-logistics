"use client";

import { useRef } from "react";
import { CheckCircle, Truck, ShieldCheck, Handshake, BarChart3, Headphones } from "lucide-react";
import { motion, useInView } from "framer-motion";

const reasons = [
  { icon: ShieldCheck, title: "Certified Quality", description: "FSSAI, ISO 22000, HACCP, and Spice Board certified. Every batch undergoes rigorous lab testing." },
  { icon: Truck, title: "Reliable Logistics", description: "End-to-end supply chain management with on-time delivery to ports worldwide." },
  { icon: Handshake, title: "Trusted Partnerships", description: "Long-term relationships with farmers, processors, and global buyers built on transparency." },
  { icon: BarChart3, title: "Competitive Pricing", description: "Direct farm sourcing eliminates middlemen, delivering the best value for premium quality." },
  { icon: CheckCircle, title: "Custom Packaging", description: "Flexible packaging options — bulk, retail-ready, private label, and custom solutions." },
  { icon: Headphones, title: "Dedicated Support", description: "A dedicated export manager for every client, ensuring seamless communication and service." },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0F2F2A",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", background: "rgba(212,175,55,0.04)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "300px", height: "300px", background: "rgba(31,122,110,0.06)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
        >
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
            Why Choose Us
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, margin: 0 }}>
            The Mova Logistics{" "}
            <span className="gradient-text">Advantage</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #D4AF37, #e0c55e)", margin: "24px auto 0" }} />
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.75, margin: "20px auto 0" }}>
            What makes us the preferred export partner for businesses worldwide
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              style={{
                padding: "36px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                transition: "border-color 0.5s, background 0.5s",
              }}
              className="hover:!bg-[rgba(255,255,255,0.05)] hover:!border-[rgba(212,175,55,0.2)]"
            >
              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <reason.icon style={{ width: 24, height: 24, color: "#D4AF37" }} />
              </div>

              {/* Title */}
              <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 10px 0", lineHeight: 1.3 }}>
                {reason.title}
              </h4>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
