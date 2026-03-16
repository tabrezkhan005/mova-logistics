"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

export function useFadeUp<T extends HTMLElement>(
  options?: { delay?: number; duration?: number; y?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: options?.y ?? 60 },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 1,
        delay: options?.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [options?.delay, options?.duration, options?.y]);

  return ref;
}

export function useTextReveal<T extends HTMLElement>(
  options?: { delay?: number; duration?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 80,
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
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [options?.delay, options?.duration]);

  return ref;
}

export function useScrollReveal<T extends HTMLElement>(
  options?: { delay?: number; stagger?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;
    if (!children.length) return;

    const anim = gsap.fromTo(
      children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: options?.delay ?? 0,
        stagger: options?.stagger ?? 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [options?.delay, options?.stagger]);

  return ref;
}

export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = gsap.to(el, {
      yPercent: -30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [speed]);

  return ref;
}
