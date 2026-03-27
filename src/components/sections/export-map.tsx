"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { exportRegions, exportStats } from "@/src/data/countries";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function ExportMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });
  const indiaCoords: [number, number] = [78.9629, 20.5937];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0A0A0A",
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.2) 50%, transparent 100%)",
        }}
      />

      <div
        className="container-main"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span
            style={{
              color: "#D4AF37",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Global Presence
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Exporting to{" "}
              <span style={{ color: "#D4AF37" }}>40+ Countries</span>
            </h2>
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#D4AF37",
                flexShrink: 0,
                marginBottom: "8px",
              }}
            />
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: "16px",
              lineHeight: 1.8,
              margin: "20px 0 0 0",
              maxWidth: "500px",
            }}
          >
            Our spices reach kitchens, restaurants, and food manufacturers
            across five continents.
          </p>
        </motion.div>

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "2/1",
            minHeight: "380px",
            marginBottom: "64px",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <ComposableMap
            projectionConfig={{ scale: 140, center: [20, 10] }}
            width={800}
            height={400}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.04)"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "rgba(255,255,255,0.07)" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Lines from India */}
            {exportRegions.map((region, idx) => (
              <motion.g
                key={`line-${region.id}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.15 }}
              >
                <Line
                  from={indiaCoords}
                  to={region.coordinates}
                  stroke={region.color}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  style={{
                    opacity: 0.45,
                    strokeDasharray: "3 3",
                  }}
                />
              </motion.g>
            ))}

            {/* India source dot */}
            <Marker coordinates={indiaCoords}>
              <circle r={5} fill="#FFFFFF" opacity={0.95} />
              <circle r={12} fill="rgba(255,255,255,0.08)" />
            </Marker>

            {/* Destination dots */}
            {exportRegions.map((region, i) => (
              <Marker key={`marker-${region.id}`} coordinates={region.coordinates}>
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                >
                  <circle r={10} fill={region.color} opacity={0.1} />
                  <circle r={4} fill={region.color} opacity={0.9} />
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>
        </motion.div>

        {/* ── Stats row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
          className="max-md:!grid-cols-2"
        >
          {exportStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                padding: "36px 28px",
                background: "#0A0A0A",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  color: "#D4AF37",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "11px",
                  marginTop: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
