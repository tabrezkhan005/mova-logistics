"use client";

import { useMemo } from "react";
import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { motion } from "framer-motion";
import { exportRegions, exportStats } from "@/src/data/countries";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function ExportMap() {
  const indiaCoords: [number, number] = [78.9629, 20.5937]; // India coordinates

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
        <FadeUp delay={0.2} className="relative w-full aspect-[2/1] min-h-[400px] mb-16 px-4">
          <ComposableMap
            projectionConfig={{
              scale: 140,
              center: [20, 10], // Adjusting center to properly show India and destinations
            }}
            width={800}
            height={400}
            className="w-full h-full object-contain drop-shadow-2xl"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "rgba(255,255,255,0.1)" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Arcs from India to regions */}
            {exportRegions.map((region, idx) => (
              <motion.g
                key={`line-${region.id}`}
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 + idx * 0.2 }}
              >
                <Line
                  from={indiaCoords}
                  to={region.coordinates}
                  stroke={region.color}
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="opacity-50"
                  style={{ strokeDasharray: "4 4" }}
                />
              </motion.g>
            ))}

            {/* India Marker */}
            <Marker coordinates={indiaCoords}>
              <circle r={4} fill="#FFFFFF" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <circle r={10} fill="#FFFFFF" opacity={0.3} className="animate-ping origin-center" />
            </Marker>

            {/* Destination Markers */}
            {exportRegions.map((region, i) => (
              <Marker key={`marker-${region.id}`} coordinates={region.coordinates}>
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                >
                  {/* Glow ring */}
                  <circle
                    r={12}
                    fill={region.color}
                    opacity="0.2"
                    className="glow-marker"
                  />
                  {/* Dot */}
                  <circle
                    r={5}
                    fill={region.color}
                    className="shadow-[0_0_15px_rgba(currentColor,0.6)]"
                  />
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>

          {/* HTML Overlay for Tooltips since it's hard inside SVG */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* We will rely on simple HTML text overlay below or keep tooltips integrated in a custom way. To keep things clean, the regions list is below. */}
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
