"use client";

import { motion } from "framer-motion";
import type { Product } from "@/src/data/products";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="h-full"
    >
      <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <article
          style={{
            background: "#FFFFFF",
            overflow: "hidden",
            border: "1px solid rgba(10,10,10,0.07)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
          className="group hover:!border-[rgba(212,175,55,0.25)] hover:!shadow-[0_12px_48px_rgba(0,0,0,0.06)]"
        >
          {/* Image */}
          <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 50%)",
            }} />

            {/* Category badge */}
            <div style={{ position: "absolute", top: "16px", left: "16px" }}>
              <span style={{
                padding: "5px 14px",
                background: "#D4AF37",
                color: "#0A0A0A",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}>
                {product.category.replace("-", " ")}
              </span>
            </div>

            {/* Arrow on hover */}
            <div style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              width: "36px",
              height: "36px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              opacity: 0,
              transform: "translateY(8px)",
              transition: "opacity 0.3s, transform 0.3s",
            }} className="group-hover:!opacity-100 group-hover:!translate-y-0">
              <ArrowUpRight style={{ width: 16, height: 16, color: "#FFFFFF" }} />
            </div>
          </div>

          {/* Content */}
          <div style={{
            padding: "28px 24px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderTop: "3px solid transparent",
            transition: "border-color 0.3s",
          }} className="group-hover:!border-t-[#D4AF37]">
            {/* Tagline */}
            <div style={{
              fontSize: "10px",
              color: "#D4AF37",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              {product.tagline}
            </div>

            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0A0A0A",
              margin: "0 0 8px 0",
              lineHeight: 1.3,
              transition: "color 0.3s",
            }} className="group-hover:!text-[#1F7A6E]">
              {product.name}
            </h3>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11px",
              color: "#9CA3AF",
              marginBottom: "14px",
              fontWeight: 500,
            }}>
              <MapPin style={{ width: 11, height: 11, color: "#D4AF37" }} />
              {product.origin}
            </div>

            <p style={{
              fontSize: "13px",
              color: "#6B7280",
              lineHeight: 1.75,
              margin: 0,
              flex: 1,
            }}>
              {product.description}
            </p>

            {/* Specs preview */}
            <div style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(10,10,10,0.06)",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}>
              {product.specs.slice(0, 2).map((spec) => (
                <div key={spec.label}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F2F2A", fontFamily: "var(--font-heading)" }}>
                    {spec.value}
                  </div>
                  <div style={{ fontSize: "10px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
