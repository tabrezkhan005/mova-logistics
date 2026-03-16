"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const fadeUp = (
  element: HTMLElement | string,
  options?: { delay?: number; duration?: number; y?: number }
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: options?.y ?? 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 1,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element as string,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const textReveal = (
  element: HTMLElement | string,
  options?: { delay?: number; duration?: number }
) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: options?.duration ?? 1.2,
      delay: options?.delay ?? 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: element as string,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const staggerReveal = (
  elements: HTMLElement[] | string,
  options?: { delay?: number; stagger?: number }
) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: options?.delay ?? 0,
      stagger: options?.stagger ?? 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements as string,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const parallaxScroll = (
  element: HTMLElement | string,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    yPercent: -30 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element as string,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
