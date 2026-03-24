"use client";

import { useRef } from "react";
import { products } from "@/src/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function ProductsSection() {
  const featured = products.slice(0, 6);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#F8F9F8",
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
          style={{ textAlign: "center", marginBottom: "64px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
        >
          <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
            Our Premium Range
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.2, margin: 0 }}>
            Finest Indian Spices for{" "}
            <span style={{ color: "#1F7A6E" }}>Global Markets</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #D4AF37, #e0c55e)", margin: "24px auto 0" }} />
          <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.75, margin: "20px auto 0" }}>
            We source, process, and export a comprehensive range of premium Indian
            spices, meeting international quality standards for every shipment.
          </p>
        </motion.div>

        {/* ── Product Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#FFFFFF",
                border: "1px solid rgba(10,10,10,0.06)",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.5s, border-color 0.5s",
              }}
              className="group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:!border-[rgba(212,175,55,0.2)]"
            >
              {/* Image */}
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)" }} />

                {/* Cert badges */}
                <div style={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {product.certifications.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        background: "rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: product.color, flexShrink: 0 }} />
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0A0A0A", margin: 0, lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                </div>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(10,10,10,0.06)",
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
                    {product.origin}
                  </span>
                  <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                    Details <ArrowRight style={{ width: 13, height: 13 }} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── View All Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ textAlign: "center", marginTop: "56px" }}
        >
          <Link
            href="/products"
            className="btn-primary"
            style={{ background: "#0F2F2A", borderRadius: "12px" }}
          >
            View All Products
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
