"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const certifications = [
  { name: "FSSAI", description: "Food Safety & Standards Authority of India" },
  { name: "ISO 22000", description: "Food Safety Management System" },
  { name: "HACCP", description: "Hazard Analysis Critical Control Points" },
  { name: "Spice Board", description: "Spice Board of India Certified" },
  { name: "Organic", description: "USDA & EU Organic Certified" },
  { name: "Halal", description: "Halal Certified Products" },
  { name: "Kosher", description: "Kosher Certification Available" },
  { name: "GMP", description: "Good Manufacturing Practices" },
];

export function Certifications() {
  return (
    <section className="section-padding bg-[#F8F9F8]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
              Certifications & Compliance
            </span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
              Internationally{" "}
              <span className="text-[#1F7A6E]">Certified Quality</span>
            </h2>
          </TextReveal>
          <FadeUp delay={0.2}>
            <div className="gold-line-center mt-6" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-[#6B7280]">
              Our products meet the highest international food safety and quality
              standards, backed by globally recognized certifications.
            </p>
          </FadeUp>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <FadeUp key={cert.name} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-white border border-[#0A0A0A]/5 text-center hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#0F2F2A]/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                  <Shield className="w-6 h-6 text-[#1F7A6E] group-hover:text-[#D4AF37] transition-colors duration-500" />
                </div>
                <h4 className="text-[#0A0A0A] font-bold text-lg mb-1">
                  {cert.name}
                </h4>
                <p className="text-[#6B7280] text-xs leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
