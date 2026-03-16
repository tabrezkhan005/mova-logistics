"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2F2A] via-[#0A0A0A] to-[#0F2F2A]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1F7A6E]/10 rounded-full blur-[100px]" />

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container-main relative z-10 text-center">
        <FadeUp>
          <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
            Partner With Us
          </span>
        </FadeUp>

        <TextReveal className="mt-4 max-w-4xl mx-auto">
          <h2
            className="text-white text-3xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Source{" "}
            <span className="gradient-text">Premium Indian Spices</span>?
          </h2>
        </TextReveal>

        <FadeUp delay={0.3}>
          <p className="mt-8 text-white/50 text-lg max-w-2xl mx-auto">
            Get in touch with our export team for product catalogs, pricing,
            samples, and customized packaging solutions.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/contact" className="btn-primary group">
              Request a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/products" className="btn-secondary">
              Browse Products
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
