// Hero animation presets for GSAP
export const heroAnimations = {
  textReveal: {
    from: { opacity: 0, y: 80, clipPath: "inset(100% 0% 0% 0%)" },
    to: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.2,
      ease: "power4.out",
    },
  },
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
  },
};
