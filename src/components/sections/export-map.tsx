"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { motion } from "framer-motion";
import { exportRegions, exportStats } from "@/src/data/countries";

export function ExportMap() {
  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#1F7A6E] rounded-full blur-[100px]" />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
              Global Presence
            </span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h2 className="text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Exporting to{" "}
              <span className="gradient-text">40+ Countries</span>
            </h2>
          </TextReveal>
          <FadeUp delay={0.2}>
            <div className="gold-line-center mt-6" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50">
              Our spices reach kitchens, restaurants, and food manufacturers
              across five continents.
            </p>
          </FadeUp>
        </div>

        {/* Map Visualization */}
        <FadeUp delay={0.2}>
          <div className="relative w-full aspect-[2/1] rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden mb-16">
            {/* Simplified world map outline using SVG */}
            <svg viewBox="0 0 100 50" className="w-full h-full opacity-20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.2">
              {/* Simplified continent outlines */}
              <path d="M15,15 Q20,10 25,12 L28,15 Q30,18 27,22 L22,25 Q18,28 15,25 Z" /> {/* North America */}
              <path d="M22,28 Q24,30 23,35 L21,40 Q19,42 20,38 L18,32 Z" /> {/* South America */}
              <path d="M42,12 Q48,10 55,12 L58,15 Q52,16 48,14 L44,15 Z" /> {/* Europe */}
              <path d="M42,20 Q50,18 58,22 L56,30 Q52,35 48,38 L44,35 Q40,28 42,20 Z" /> {/* Africa */}
              <path d="M58,12 Q65,10 75,14 L78,18 Q80,24 76,28 L70,30 Q64,28 60,22 Z" /> {/* Asia */}
              <path d="M76,36 Q82,34 86,38 L84,42 Q80,44 76,40 Z" /> {/* Australia */}
            </svg>

            {/* Glowing Markers */}
            {exportRegions.map((region, i) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="absolute group cursor-pointer"
                style={{ left: `${region.x}%`, top: `${region.y}%` }}
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-3 rounded-full glow-marker"
                  style={{ background: `${region.color}20` }}
                />
                {/* Dot */}
                <div
                  className="w-3 h-3 rounded-full relative z-10 shadow-lg"
                  style={{
                    background: region.color,
                    boxShadow: `0 0 15px ${region.color}60`,
                  }}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass-dark rounded-lg px-4 py-3 text-center whitespace-nowrap">
                    <p className="text-white text-sm font-semibold">{region.name}</p>
                    <p className="text-white/50 text-xs mt-1">
                      {region.countries.slice(0, 3).join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {exportStats.map((stat, i) => (
            <FadeUp key={stat.label} delay={0.1 * i}>
              <div className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                <div
                  className="text-3xl md:text-4xl font-bold gradient-text"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <p className="text-white/40 text-sm mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
