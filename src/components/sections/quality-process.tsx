"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { ScrollReveal } from "@/src/components/animations/scroll-reveal";
import { Sprout, Wind, Cog, FlaskConical, Package, Ship } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Farm Sourcing",
    description: "Direct partnerships with farmers across India's finest spice-growing regions.",
    step: "01",
  },
  {
    icon: Wind,
    title: "Cleaning",
    description: "Multi-stage cleaning process removes impurities and ensures purity standards.",
    step: "02",
  },
  {
    icon: Cog,
    title: "Processing",
    description: "State-of-the-art processing facilities with temperature-controlled environments.",
    step: "03",
  },
  {
    icon: FlaskConical,
    title: "Quality Testing",
    description: "NABL-accredited lab testing for purity, moisture, and microbiological safety.",
    step: "04",
  },
  {
    icon: Package,
    title: "Packaging",
    description: "Food-grade, export-standard packaging with custom branding options.",
    step: "05",
  },
  {
    icon: Ship,
    title: "Global Shipping",
    description: "Reliable logistics network ensuring on-time delivery to ports worldwide.",
    step: "06",
  },
];

export function QualityProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
              Our Process
            </span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
              From Farm to{" "}
              <span className="text-[#1F7A6E]">Global Markets</span>
            </h2>
          </TextReveal>
          <FadeUp delay={0.2}>
            <div className="gold-line-center mt-6" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-[#6B7280]">
              Our rigorous 6-step quality process ensures every shipment meets
              international food safety and quality standards.
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal
                  key={step.title}
                  delay={0.1 * i}
                  direction={isEven ? "left" : "right"}
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i > 0 ? "lg:mt-16" : ""}`}>
                    {/* Content */}
                    <div className={`${isEven ? "lg:text-right lg:order-1" : "lg:order-2"}`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:justify-end" : ""}`}>
                        <span
                          className="text-5xl font-bold text-[#0A0A0A]/5"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {step.step}
                        </span>
                        <h3 className="text-[#0A0A0A] font-semibold text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[#6B7280] text-sm leading-relaxed max-w-md lg:max-w-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className={`hidden lg:flex ${isEven ? "lg:order-2 justify-start" : "lg:order-1 justify-end"} relative`}>
                      {/* Dot on timeline */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                      <div className={`w-20 h-20 rounded-2xl bg-[#F8F9F8] border border-[#0A0A0A]/5 flex items-center justify-center ${isEven ? "ml-16" : "mr-16"}`}>
                        <step.icon className="w-8 h-8 text-[#1F7A6E]" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
