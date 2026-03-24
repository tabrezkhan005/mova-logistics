"use client";

import { useRef } from "react";
import { blogPosts } from "@/src/data/blog";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function BlogSection() {
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
        {/* ── Header Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
            <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
              Insights & Updates
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.2, margin: 0 }}>
              Latest from the{" "}
              <span style={{ color: "#1F7A6E" }}>Spice World</span>
            </h2>
            <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #D4AF37, #e0c55e)", marginTop: "20px" }} />
          </div>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#1F7A6E",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            View All Articles <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </motion.div>

        {/* ── Blog Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
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
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)" }} />

                {/* Category badge */}
                <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "100px",
                      background: "#D4AF37",
                      color: "#0A0A0A",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      boxShadow: "0 2px 10px rgba(212,175,55,0.3)",
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Meta */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#9CA3AF" }}>
                    <Clock style={{ width: 12, height: 12 }} />
                    <span>{post.readTime}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#9CA3AF" }}>
                    <Calendar style={{ width: 12, height: 12 }} />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.4, margin: "0 0 10px 0" }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7, margin: 0, flex: 1 }}>
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "20px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(10,10,10,0.06)",
                    color: "#D4AF37",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Read More <ArrowRight style={{ width: 13, height: 13 }} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
