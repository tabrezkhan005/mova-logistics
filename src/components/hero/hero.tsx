"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "@/src/lib/gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 80, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070')",
          }}
        />
      </div>

      {/* Dark Overlay with Gradient */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]/90"
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1F7A6E]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main text-center flex flex-col items-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-wider uppercase">
            Trusted Global Spice Exporter
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] max-w-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Exporting Premium{" "}
          <span className="gradient-text">Indian Spices</span>{" "}
          Worldwide
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
        >
          Delivering authenticity, quality, and reliability across global
          markets. From India&apos;s finest farms to your business.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link href="/products" className="btn-primary group">
            Explore Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Request Quote
          </Link>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
        >
          {[
            { value: "40+", label: "Countries" },
            { value: "5000+", label: "Tons/Year" },
            { value: "15+", label: "Years" },
            { value: "100%", label: "Quality" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]" style={{ fontFamily: "var(--font-heading)" }}>
                {stat.value}
              </div>
              <div className="text-white/40 text-sm mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-[#D4AF37]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
