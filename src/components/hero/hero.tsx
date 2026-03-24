"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "@/src/lib/gsap";
import { SpiceCarousel } from "./spice-carousel";

/* ─── Deterministic particle data to avoid hydration mismatch ─── */
const PARTICLE_DATA = [
  { w: 3, h: 4, l: 10, t: 15, o: 0.25, dy: -150, dx: 20, dur: 8, del: 0 },
  { w: 2, h: 3, l: 25, t: 80, o: 0.15, dy: -200, dx: -30, dur: 10, del: 1 },
  { w: 4, h: 3, l: 45, t: 60, o: 0.3, dy: -120, dx: 10, dur: 7, del: 2 },
  { w: 3, h: 5, l: 65, t: 30, o: 0.2, dy: -180, dx: -20, dur: 9, del: 0.5 },
  { w: 2, h: 2, l: 80, t: 70, o: 0.35, dy: -160, dx: 25, dur: 11, del: 3 },
  { w: 5, h: 4, l: 15, t: 45, o: 0.18, dy: -140, dx: -15, dur: 8.5, del: 1.5 },
  { w: 3, h: 3, l: 55, t: 90, o: 0.22, dy: -190, dx: 35, dur: 12, del: 2.5 },
  { w: 4, h: 5, l: 35, t: 20, o: 0.28, dy: -110, dx: -40, dur: 7.5, del: 0.8 },
  { w: 2, h: 4, l: 90, t: 50, o: 0.15, dy: -170, dx: 15, dur: 9.5, del: 3.5 },
  { w: 3, h: 3, l: 5, t: 35, o: 0.32, dy: -130, dx: -10, dur: 10.5, del: 4 },
  { w: 5, h: 5, l: 72, t: 10, o: 0.2, dy: -145, dx: 30, dur: 8, del: 1.2 },
  { w: 2, h: 3, l: 50, t: 75, o: 0.25, dy: -185, dx: -25, dur: 11.5, del: 2.8 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_DATA.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w,
            height: p.h,
            left: `${p.l}%`,
            top: `${p.t}%`,
            background: `radial-gradient(circle, rgba(212,175,55,${p.o}), transparent)`,
          }}
          animate={{
            y: [0, p.dy],
            x: [0, p.dx],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.3],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.del,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      )
        .fromTo(
          accentRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1, ease: "power3.inOut" },
          "-=0.6"
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          headingRef.current?.querySelectorAll(".word-reveal") || [],
          { opacity: 0, y: 100, rotateX: 40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.5"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Background Image ─── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070')",
            transform: "scale(1.1)",
          }}
        />
      </div>

      {/* ─── Cinematic Overlays ─── */}
      <div ref={overlayRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1F7A6E]/5 rounded-full blur-[100px]" />
      </div>

      {/* ─── Floating Particles ─── */}
      <FloatingParticles />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 container-main w-full pt-40 pb-28 xl:pt-48 xl:pb-36">
        <div className="flex flex-col xl:flex-row xl:items-center justify-center xl:justify-between gap-16 xl:gap-24">

          {/* ─── Left Content Block ─── */}
          <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left w-full mx-auto xl:mx-0 z-20" style={{ maxWidth: "700px" }}>
            {/* Accent Line + Tagline */}
            <div className="flex items-center justify-center xl:justify-start" style={{ gap: "16px", marginBottom: "40px" }}>
              <div
                ref={accentRef}
                className="hidden xl:block"
                style={{ width: "2px", height: "48px", background: "linear-gradient(to bottom, #D4AF37, rgba(212,175,55,0.1))" }}
              />
              <div
                className="xl:hidden"
                style={{ width: "48px", height: "2px", background: "linear-gradient(to right, #D4AF37, rgba(212,175,55,0.1))" }}
              />
              <div ref={taglineRef} className="flex flex-col items-center xl:items-start">
                <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", display: "block" }}>
                  Est. 2009 — India
                </span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginTop: "6px" }}>
                  Premium Spice Exporters
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                perspective: "800px",
                margin: 0,
              }}
            >
              <span className="word-reveal inline-block">Exporting</span>{" "}
              <span className="word-reveal inline-block gradient-text">Premium</span>
              <br />
              <span className="word-reveal inline-block gradient-text">Indian</span>{" "}
              <span className="word-reveal inline-block">Spices</span>{" "}
              <span className="word-reveal inline-block" style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
                to the World
              </span>
            </h1>

            {/* Divider */}
            <div style={{
              width: "64px",
              height: "2px",
              background: "linear-gradient(to right, rgba(212,175,55,0.7), transparent)",
              marginTop: "40px",
              marginBottom: "32px",
            }} />

            {/* Subtext */}
            <p
              ref={subtextRef}
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                fontWeight: 400,
                maxWidth: "520px",
                margin: 0,
              }}
            >
              Sourced from India&apos;s finest farmlands, processed under the strictest
              international certifications, and delivered to{" "}
              <span style={{ color: "#D4AF37", fontWeight: 600 }}>40+ countries</span> —
              we bring the world the purest spices, consistently.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start w-full sm:w-auto"
              style={{ gap: "20px", marginTop: "48px" }}
            >
              <Link
                href="/products"
                className="btn-primary group w-full sm:w-auto justify-center"
                style={{ padding: "16px 36px", fontSize: "13px", letterSpacing: "0.15em", borderRadius: "8px" }}
              >
                <span>Explore Our Range</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary w-full sm:w-auto justify-center"
                style={{ padding: "16px 36px", fontSize: "13px", letterSpacing: "0.15em", borderRadius: "8px" }}
              >
                Request a Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap items-center justify-center xl:justify-start w-full"
              style={{
                gap: "24px",
                marginTop: "56px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {["ISO 22000 Certified", "HACCP Certified", "FSSAI Approved"].map((badge) => (
                <div key={badge} className="flex items-center" style={{ gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Side — 3D Spice Carousel ─── */}
          <div className="hidden xl:flex items-center justify-center" style={{ minWidth: "420px" }}>
            <SpiceCarousel />
          </div>
        </div>
      </div>

      {/* ─── Bottom Edge Fade ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-medium">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#D4AF37]/50" />
        </motion.div>
      </motion.div>

      {/* ─── Vertical Side Text ─── */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-white/15 text-[10px] tracking-[0.4em] uppercase font-medium"
          style={{ writingMode: "vertical-rl" }}
        >
          Since 2009 — Trusted Worldwide
        </motion.span>
      </div>
    </section>
  );
}
