"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const spices = [
  { src: "/images/spices/turmeric-top.png", label: "Turmeric", color: "#E8B931" },
  { src: "/images/spices/chili-top.png", label: "Red Chili", color: "#C0392B" },
  { src: "/images/spices/cardamom-top.png", label: "Cardamom", color: "#27AE60" },
  { src: "/images/spices/cumin-top.png", label: "Cumin", color: "#A67C52" },
  { src: "/images/spices/coriander-top.png", label: "Coriander", color: "#C4A35A" },
  { src: "/images/spices/pepper-top.png", label: "Black Pepper", color: "#2C2C2C" },
];

const WHEEL_SIZE = 400;
const BOWL_SIZE = 110;
const RADIUS = 140;

export function SpiceCarousel() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = spices.length;
  const angleStep = 360 / count;

  const goTo = useCallback(
    (index: number) => {
      // Calculate the rotation needed to bring the item to the top (12 o'clock)
      const targetAngle = -(index * angleStep);
      // Find shortest path
      let diff = targetAngle - rotation;
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      setRotation(rotation + diff);
      setActiveIndex(index);
    },
    [rotation, angleStep]
  );

  const next = useCallback(() => {
    const nextIndex = (activeIndex + 1) % count;
    goTo(nextIndex);
  }, [activeIndex, count, goTo]);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ width: `${WHEEL_SIZE + 40}px`, height: `${WHEEL_SIZE + 80}px` }}
    >
      {/* Outer decorative ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${WHEEL_SIZE + 20}px`,
          height: `${WHEEL_SIZE + 20}px`,
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          border: "1px solid rgba(212,175,55,0.12)",
          background: "radial-gradient(circle, rgba(212,175,55,0.03), transparent 70%)",
        }}
      />

      {/* Center hub */}
      <div
        className="absolute z-20 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          width: "80px",
          height: "80px",
          top: `${WHEEL_SIZE / 2 - 40}px`,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(212,175,55,0.15), rgba(10,10,10,0.9))",
          border: "1px solid rgba(212,175,55,0.25)",
          boxShadow: "0 0 40px rgba(212,175,55,0.1), inset 0 0 20px rgba(212,175,55,0.05)",
        }}
      >
        <Image
          src="/mova_logistics_favicon.png"
          alt="MOVA"
          width={50}
          height={50}
          className="object-contain"
          style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))" }}
        />
      </div>

      {/* Rotating wheel */}
      <motion.div
        className="relative"
        style={{
          width: `${WHEEL_SIZE}px`,
          height: `${WHEEL_SIZE}px`,
        }}
        animate={{ rotate: rotation }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Connecting lines from center to bowls */}
        {spices.map((_, i) => {
          const angle = (i * angleStep - 90) * (Math.PI / 180);
          const x1 = WHEEL_SIZE / 2;
          const y1 = WHEEL_SIZE / 2;
          const x2 = WHEEL_SIZE / 2 + Math.cos(angle) * (RADIUS - 20);
          const y2 = WHEEL_SIZE / 2 + Math.sin(angle) * (RADIUS - 20);

          return (
            <svg
              key={`line-${i}`}
              className="absolute top-0 left-0 pointer-events-none"
              width={WHEEL_SIZE}
              height={WHEEL_SIZE}
            >
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(212,175,55,0.08)"
                strokeWidth="1"
              />
            </svg>
          );
        })}

        {/* Spice bowls arranged in circle */}
        {spices.map((spice, i) => {
          const angle = (i * angleStep - 90) * (Math.PI / 180);
          const x = WHEEL_SIZE / 2 + Math.cos(angle) * RADIUS - BOWL_SIZE / 2;
          const y = WHEEL_SIZE / 2 + Math.sin(angle) * RADIUS - BOWL_SIZE / 2;
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={spice.label}
              className="absolute cursor-pointer"
              style={{
                width: `${BOWL_SIZE}px`,
                height: `${BOWL_SIZE}px`,
                left: `${x}px`,
                top: `${y}px`,
              }}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.1 }}
            >
              {/* Counter-rotate so images stay upright */}
              <motion.div
                className="w-full h-full relative"
                animate={{ rotate: -rotation }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Glow ring for active */}
                <div
                  className="absolute inset-0 rounded-full transition-all duration-700"
                  style={{
                    boxShadow: isActive
                      ? `0 0 30px ${spice.color}30, 0 0 60px ${spice.color}15`
                      : "none",
                    border: isActive
                      ? `2px solid ${spice.color}60`
                      : "1px solid rgba(255,255,255,0.08)",
                    background: isActive
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.02)",
                    borderRadius: "50%",
                  }}
                />

                {/* Bowl image */}
                <div className="absolute inset-0 rounded-full overflow-hidden p-1">
                  <Image
                    src={spice.src}
                    alt={spice.label}
                    width={BOWL_SIZE}
                    height={BOWL_SIZE}
                    className="w-full h-full object-cover rounded-full"
                    style={{
                      filter: isActive ? "brightness(1.1) saturate(1.2)" : "brightness(0.7) saturate(0.8)",
                      transition: "filter 0.7s ease",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Active spice label */}
      <motion.div
        className="flex flex-col items-center"
        style={{ marginTop: "20px" }}
        key={activeIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span
          style={{
            color: spices[activeIndex].color,
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {spices[activeIndex].label}
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: "4px",
          }}
        >
          Premium Export Grade
        </span>
      </motion.div>
    </div>
  );
}
