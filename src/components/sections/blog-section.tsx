"use client";

import { useRef } from "react";
import { blogPosts } from "@/src/data/blog";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function BlogSection() {
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
        {/* ── Header Row ── */}
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
              Insights & Updates
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
              Latest from the{" "}
              <span style={{ color: "#1F7A6E" }}>Spice World</span>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
          </div>
          <Link
            href="/blog"
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
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(10,10,10,0.07)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
              className="group"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,175,55,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(10,10,10,0.07)")
              }
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.35) 0%, transparent 50%)",
                  }}
                />

                {/* Category badge */}
                <div
                  style={{ position: "absolute", top: "16px", left: "16px" }}
                >
                  <span
                    style={{
                      padding: "4px 12px",
                      background: "#D4AF37",
                      color: "#0A0A0A",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category}
                  </span>
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
                {/* Meta */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11px",
                      color: "#9CA3AF",
                    }}
                  >
                    <Clock style={{ width: 11, height: 11 }} />
                    <span>{post.readTime}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11px",
                      color: "#9CA3AF",
                    }}
                  >
                    <Calendar style={{ width: 11, height: 11 }} />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "#0A0A0A",
                    lineHeight: 1.4,
                    margin: "0 0 10px 0",
                  }}
                >
                  {post.title}
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
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "20px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(10,10,10,0.06)",
                    color: "#D4AF37",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Read More <ArrowRight style={{ width: 12, height: 12 }} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
