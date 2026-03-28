import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { blogPosts } from "@/src/data/blog";
import { blogMetadata } from "@/src/seo/metadata";
import { Clock, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = blogMetadata;

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
          alt="World of Spices"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

        <div className="relative z-10 container-main pb-16 md:pb-20">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{
                color: "#D4AF37",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}>
                Blog &amp; Insights
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "720px",
            }}>
              Insights from the{" "}
              <span style={{ color: "#D4AF37" }}>World of Spices</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "16px",
              marginTop: "20px",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}>
              Stay updated with market trends, quality practices, and industry knowledge from our expert team.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURED ARTICLE — Full-bleed editorial ── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-main">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{
                color: "#D4AF37",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}>
                Featured Article
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.3s",
                }}
                className="max-lg:!grid-cols-1 group hover:!border-[rgba(212,175,55,0.2)]"
              >
                {/* Image */}
                <div style={{ position: "relative", height: "420px", overflow: "hidden" }}
                  className="max-lg:!h-[280px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, transparent 60%, rgba(10,10,10,0.6) 100%)",
                  }} className="max-lg:!bg-gradient-to-b max-lg:!from-transparent max-lg:!to-[rgba(10,10,10,0.5)]" />
                  <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                    <span style={{
                      padding: "5px 14px",
                      background: "#D4AF37",
                      color: "#0A0A0A",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}>
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  background: "#111111",
                  padding: "clamp(32px, 4vw, 56px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "20px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                      <Clock style={{ width: 11, height: 11 }} />
                      <span>{featured.readTime}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                      <Calendar style={{ width: 11, height: 11 }} />
                      <span>
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <h2 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.25,
                    margin: "0 0 20px 0",
                    transition: "color 0.3s",
                  }} className="group-hover:!text-[#D4AF37]">
                    {featured.title}
                  </h2>

                  <div style={{ width: "32px", height: "2px", background: "#D4AF37", marginBottom: "20px" }} />

                  <p style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.85,
                    margin: "0 0 28px 0",
                    maxWidth: "440px",
                  }}>
                    {featured.excerpt}
                  </p>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <span style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.25)",
                      fontWeight: 500,
                    }}>
                      By {featured.author}
                    </span>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#D4AF37",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>
                      Read Article <ArrowUpRight style={{ width: 13, height: 13 }} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── BENTO GRID — Magazine Layout ── */}
      <section style={{ background: "#F8F9F8", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          {/* Section header */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "clamp(40px, 5vw, 64px)",
          }}>
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}>
                    All Articles
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-heading)",
                  color: "#0A0A0A",
                  margin: "0 0 16px 0",
                  lineHeight: 1.12,
                }}>
                  Latest from the{" "}
                  <span style={{ color: "#1F7A6E" }}>Spice World</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37" }} />
              </FadeUp>
            </div>

            {/* Category pills */}
            <FadeUp delay={0.2}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["All", ...Array.from(new Set(blogPosts.map(p => p.category)))].map((cat) => (
                  <span
                    key={cat}
                    style={{
                      padding: "6px 16px",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: cat === "All" ? "1px solid #D4AF37" : "1px solid rgba(10,10,10,0.1)",
                      color: cat === "All" ? "#D4AF37" : "#6B7280",
                      background: cat === "All" ? "rgba(212,175,55,0.06)" : "transparent",
                      cursor: "pointer",
                      transition: "all 0.25s",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── ROW 1: Large horizontal card + tall vertical card ── */}
          <FadeUp>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr",
                gap: "24px",
                marginBottom: "24px",
              }}
              className="max-lg:!grid-cols-1"
            >
              {/* Large horizontal card */}
              <Link href={`/blog/${rest[0].slug}`} style={{ textDecoration: "none", display: "block" }}>
                <article
                  style={{
                    background: "#FFFFFF",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    overflow: "hidden",
                    border: "1px solid rgba(10,10,10,0.07)",
                    height: "100%",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  className="group hover:!border-[rgba(212,175,55,0.25)] hover:!shadow-[0_12px_48px_rgba(0,0,0,0.06)] max-md:!grid-cols-1"
                >
                  <div style={{ position: "relative", minHeight: "320px", overflow: "hidden" }}
                    className="max-md:!min-h-[220px]">
                    <Image
                      src={rest[0].image}
                      alt={rest[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(10,10,10,0.3) 0%, transparent 60%)",
                    }} />
                    <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                      <span style={{
                        padding: "5px 14px",
                        background: "#D4AF37",
                        color: "#0A0A0A",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}>
                        {rest[0].category}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#9CA3AF" }}>
                        <Clock style={{ width: 11, height: 11 }} />
                        <span>{rest[0].readTime}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#9CA3AF" }}>
                        <Calendar style={{ width: 11, height: 11 }} />
                        <span>{new Date(rest[0].date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      lineHeight: 1.3,
                      margin: "0 0 16px 0",
                      transition: "color 0.3s",
                    }} className="group-hover:!text-[#1F7A6E]">
                      {rest[0].title}
                    </h3>
                    <div style={{ width: "28px", height: "2px", background: "#D4AF37", marginBottom: "16px" }} />
                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.8, margin: "0 0 24px 0" }}>
                      {rest[0].excerpt}
                    </p>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(10,10,10,0.06)",
                    }}>
                      <span style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>By {rest[0].author}</span>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#D4AF37",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                        Read <ArrowRight style={{ width: 11, height: 11 }} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* Tall vertical card */}
              <Link href={`/blog/${rest[1].slug}`} style={{ textDecoration: "none", display: "block" }}>
                <article
                  style={{
                    background: "#0F2F2A",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.06)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  className="group hover:!border-[rgba(212,175,55,0.25)] hover:!shadow-[0_12px_48px_rgba(0,0,0,0.1)]"
                >
                  <div style={{ position: "relative", height: "200px", overflow: "hidden", flexShrink: 0 }}>
                    <Image
                      src={rest[1].image}
                      alt={rest[1].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 35vw"
                    />
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(15,47,42,0.6) 0%, transparent 60%)",
                    }} />
                    <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                      <span style={{
                        padding: "4px 12px",
                        background: "#D4AF37",
                        color: "#0A0A0A",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}>
                        {rest[1].category}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    padding: "28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                        <Clock style={{ width: 11, height: 11 }} />
                        <span>{rest[1].readTime}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                        <Calendar style={{ width: 11, height: 11 }} />
                        <span>{new Date(rest[1].date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.35,
                      margin: "0 0 12px 0",
                      transition: "color 0.3s",
                    }} className="group-hover:!text-[#D4AF37]">
                      {rest[1].title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0, flex: 1 }}>
                      {rest[1].excerpt}
                    </p>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "24px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>By {rest[1].author}</span>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "#D4AF37",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                        Read <ArrowRight style={{ width: 11, height: 11 }} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </FadeUp>

          {/* ── ROW 2: Three equal columns ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {rest.slice(2).map((post, i) => (
              <FadeUp key={post.id} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <article
                    style={{
                      background: "#FFFFFF",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      border: "1px solid rgba(10,10,10,0.07)",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    className="group hover:!border-[rgba(212,175,55,0.25)] hover:!shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)",
                      }} />
                      <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                        <span style={{
                          padding: "4px 12px",
                          background: "#D4AF37",
                          color: "#0A0A0A",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div style={{
                      padding: "28px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      borderTop: "3px solid transparent",
                      transition: "border-color 0.3s",
                    }} className="group-hover:!border-[#D4AF37]">
                      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#9CA3AF" }}>
                          <Clock style={{ width: 11, height: 11 }} />
                          <span>{post.readTime}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#9CA3AF" }}>
                          <Calendar style={{ width: 11, height: 11 }} />
                          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                      </div>

                      <h3 style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        fontFamily: "var(--font-heading)",
                        color: "#0A0A0A",
                        lineHeight: 1.35,
                        margin: "0 0 12px 0",
                        transition: "color 0.3s",
                      }} className="group-hover:!text-[#1F7A6E]">
                        {post.title}
                      </h3>

                      <p style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        lineHeight: 1.75,
                        margin: 0,
                        flex: 1,
                      }}>
                        {post.excerpt}
                      </p>

                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "24px",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(10,10,10,0.06)",
                      }}>
                        <span style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>
                          By {post.author}
                        </span>
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "#D4AF37",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}>
                          Read <ArrowRight style={{ width: 11, height: 11 }} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section style={{
        background: "#0F2F2A",
        padding: "clamp(64px, 8vw, 100px) 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }} />

        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "center",
            }}
            className="max-lg:!grid-cols-1"
          >
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}>
                    Stay Informed
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-heading)",
                  color: "#FFFFFF",
                  margin: "0 0 20px 0",
                  lineHeight: 1.12,
                }}>
                  Get Market Insights{" "}
                  <span style={{ color: "#D4AF37" }}>Delivered</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "20px" }} />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p style={{
                  color: "rgba(255,255,255,0.42)",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  margin: 0,
                  maxWidth: "440px",
                }}>
                  Join importers and distributors from 40+ countries who receive our monthly
                  market reports, pricing trends, and export insights.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.15}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "40px",
              }}>
                <div style={{ marginBottom: "24px" }}>
                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}>
                    Subscribe to Our Newsletter
                  </h4>
                  <p style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.3)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
                <div style={{
                  display: "flex",
                  gap: "0",
                }} className="max-sm:!flex-col max-sm:!gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={{
                      flex: 1,
                      padding: "14px 18px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRight: "none",
                      background: "rgba(255,255,255,0.04)",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    className="max-sm:!border-r max-sm:!border-[rgba(255,255,255,0.1)]"
                  />
                  <Link
                    href="/contact"
                    className="btn-primary"
                    style={{
                      borderRadius: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Subscribe <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
                <div style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                }}>
                  {["Monthly reports", "Market trends", "Export tips"].map((item) => (
                    <div key={item} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                    }}>
                      <div style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#D4AF37",
                      }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
