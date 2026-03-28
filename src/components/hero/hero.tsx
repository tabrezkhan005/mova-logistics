"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Award, Ship, Calendar } from "lucide-react";
import { gsap } from "@/src/lib/gsap";
import Image from "next/image";
import { SpiceCarousel } from "./spice-carousel";

const HERO_STATS = [
  { icon: Calendar, value: "2025", label: "Established" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Ship, value: "50+", label: "Shipments" },
  { icon: Award, value: "4", label: "Certifications" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current?.children || [],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.3,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-start overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070"
          alt="Premium Indian Spices"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-[#0A0A0A]/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* Content — two-column layout */}
      <div
        className="relative z-10 container-main w-full h-full flex flex-col"
        style={{
          paddingTop: "clamp(88px, 10vw, 130px)",
          paddingBottom: "clamp(28px, 4vw, 48px)",
        }}
      >
        <div className="flex flex-col xl:flex-row xl:items-center justify-center xl:justify-between gap-8 xl:gap-16 flex-1">

          {/* ── Left Content ── */}
          <div
            ref={leftRef}
            className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left w-full mx-auto xl:mx-0 z-20"
            style={{ maxWidth: "680px" }}
          >

            {/* Heading */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                maxWidth: "780px",
                margin: 0,
              }}
            >
              Exporting{" "}
              <span style={{ color: "#D4AF37" }}>Premium</span>
              <br />
              <span style={{ color: "#D4AF37" }}>Indian Spices</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                to the World
              </span>
            </h1>

            {/* Rule */}
            <div
              style={{
                width: "64px",
                height: "1px",
                background: "rgba(212,175,55,0.5)",
                marginTop: "clamp(16px, 2.5vw, 28px)",
                marginBottom: "clamp(12px, 2vw, 24px)",
              }}
            />

            {/* Subtext */}
            <p
              style={{
                fontSize: "clamp(13px, 1.2vw, 15px)",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: "500px",
                margin: 0,
              }}
            >
              Sourced from India&apos;s finest farmlands, certified to
              international standards, and delivered to{" "}
              <span style={{ color: "#D4AF37" }}>growing global markets</span> — with
              uncompromising quality.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "clamp(20px, 3vw, 36px)",
              }}
              className="justify-center xl:justify-start w-full sm:w-auto"
            >
              <Link
                href="/products"
                className="w-full sm:w-auto justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  fontSize: "11px",
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
                Explore Our Range
                <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "transparent",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
              >
                Request a Quote
              </Link>
            </div>

            {/* Stats strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, auto)",
                gap: "0",
                marginTop: "clamp(20px, 3.5vw, 44px)",
                paddingTop: "clamp(16px, 2.5vw, 28px)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                maxWidth: "600px",
                width: "100%",
              }}
              className="max-sm:!grid-cols-2"
            >
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    paddingRight: i < 3 ? "20px" : "0",
                    borderRight:
                      i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    paddingLeft: i > 0 ? "20px" : "0",
                  }}
                  className="max-sm:!px-0 max-sm:!border-0 max-sm:!pb-4"
                >
                  <div
                    style={{
                      fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading)",
                      color: "#D4AF37",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      marginTop: "8px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Side — Spice Carousel (exactly as before) ── */}
          <div className="hidden xl:flex items-center justify-center" style={{ minWidth: "420px" }}>
            <SpiceCarousel />
          </div>

        </div>
      </div>

      {/* Vertical side label */}
      <div
        className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-10"
        style={{ writingMode: "vertical-rl" }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.12)",
            fontSize: "9px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Premium Spice Exports — From India
        </span>
      </div>
    </section>
  );
}
