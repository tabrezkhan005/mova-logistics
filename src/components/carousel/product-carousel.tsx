"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/src/data/products";

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[300px] md:w-[350px]"
            >
              <div className="premium-card group cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0F2F2A] to-[#1a4a42]">
                  <div
                    className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${product.color}50, transparent 70%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold opacity-[0.08] text-white" style={{ fontFamily: "var(--font-heading)" }}>
                      {product.name}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-[#0A0A0A] font-semibold text-lg group-hover:text-[#1F7A6E] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[#6B7280] text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
