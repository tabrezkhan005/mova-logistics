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
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#F8F9F8",
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
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          <div>
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
              Our Premium Range
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#0A0A0A",
                lineHeight: 1.15,
                margin: "0 0 16px 0",
              }}
            >
              Finest Indian Spices for{" "}
              <span style={{ color: "#1F7A6E" }}>Global Markets</span>
            </h2>
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#D4AF37",
              }}
            />
          </div>
          <Link
            href="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#0F2F2A",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "1px solid #0F2F2A",
              transition: "color 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#D4AF37";
              (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#0F2F2A";
              (e.currentTarget as HTMLElement).style.borderColor = "#0F2F2A";
            }}
          >
            View All Products <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </motion.div>

        {/* ── Product Grid ── */}
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
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
              style={{
                background: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
              className="group"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "240px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.45) 0%, transparent 55%)",
                  }}
                />
                {/* Cert badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                  }}
                >
                  {product.certifications.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      style={{
                        padding: "3px 10px",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: "rgba(10,10,10,0.55)",
                        color: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "28px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "3px solid transparent",
                  transition: "border-color 0.3s",
                }}
                className="group-hover:!border-[#D4AF37]"
              >
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "#0A0A0A",
                    margin: "0 0 8px 0",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: product.color,
                      flexShrink: 0,
                    }}
                  />
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    lineHeight: 1.75,
                    margin: 0,
                    flex: 1,
                  }}
                >
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
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#9CA3AF",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 500,
                    }}
                  >
                    {product.origin}
                  </span>
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "12px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Details <ArrowRight style={{ width: 12, height: 12 }} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
