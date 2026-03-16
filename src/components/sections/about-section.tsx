"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { Award, Globe, Leaf, Shield } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Exporting to 40+ countries across 5 continents with reliable logistics.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "FSSAI, ISO 22000, and HACCP certified with rigorous lab testing.",
  },
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Direct sourcing from premium Indian farms ensures freshness and authenticity.",
  },
  {
    icon: Award,
    title: "15+ Years",
    description: "Over a decade of trusted partnerships in international spice trade.",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <FadeUp>
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
                About Mova Logistics
              </span>
            </FadeUp>

            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                A Legacy of{" "}
                <span className="text-[#1F7A6E]">Premium Quality</span>{" "}
                Spice Exports
              </h2>
            </TextReveal>

            <FadeUp delay={0.2}>
              <div className="gold-line mt-6" />
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 text-[#6B7280] leading-relaxed">
                Mova Logistics is a premier Indian spice export company
                headquartered in Mumbai, India. With over 15 years of experience
                in the global spice trade, we bridge the gap between India&apos;s
                finest spice farms and businesses worldwide.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="mt-4 text-[#6B7280] leading-relaxed">
                Our commitment to quality, transparency, and reliability has made
                us a trusted partner for importers, distributors, and food
                manufacturers across 40+ countries.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <a
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-[#1F7A6E] font-medium text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors group"
              >
                Learn More About Us
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </FadeUp>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <FadeUp key={value.title} delay={0.1 * i}>
                <div className="p-6 rounded-xl border border-[#0A0A0A]/5 bg-[#F8F9F8] hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-lg bg-[#0F2F2A] flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors duration-500">
                    <value.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors duration-500" />
                  </div>
                  <h4 className="text-[#0A0A0A] font-semibold text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
