"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { CheckCircle, Truck, ShieldCheck, Handshake, BarChart3, Headphones } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description: "FSSAI, ISO 22000, HACCP, and Spice Board certified. Every batch undergoes rigorous lab testing.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "End-to-end supply chain management with on-time delivery to ports worldwide.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Long-term relationships with farmers, processors, and global buyers built on transparency.",
  },
  {
    icon: BarChart3,
    title: "Competitive Pricing",
    description: "Direct farm sourcing eliminates middlemen, delivering the best value for premium quality.",
  },
  {
    icon: CheckCircle,
    title: "Custom Packaging",
    description: "Flexible packaging options — bulk, retail-ready, private label, and custom solutions available.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "A dedicated export manager for every client, ensuring seamless communication and service.",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding bg-[#0F2F2A] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1F7A6E]/10 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h2 className="text-white" style={{ fontFamily: "var(--font-heading)" }}>
              The Mova Logistics{" "}
              <span className="gradient-text">Advantage</span>
            </h2>
          </TextReveal>
          <FadeUp delay={0.2}>
            <div className="gold-line-center mt-6" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50">
              What makes us the preferred export partner for businesses worldwide
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <FadeUp key={reason.title} delay={0.1 * i}>
              <div className="p-8 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#D4AF37]/20 transition-all duration-500 group h-full">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-500">
                  <reason.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-3">
                  {reason.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
