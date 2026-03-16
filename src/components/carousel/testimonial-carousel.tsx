"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mova Logistics has been our trusted spice supplier for 5 years. Their turmeric quality is consistently excellent, and their logistics are always on time.",
    name: "James Mitchell",
    company: "Mitchell Foods, USA",
    role: "Head of Procurement",
  },
  {
    quote:
      "The level of quality assurance and documentation from Mova Logistics exceeds our expectations. Every shipment meets EU food safety standards.",
    name: "Anna Müller",
    company: "EuroSpice GmbH, Germany",
    role: "Quality Director",
  },
  {
    quote:
      "Working with Mova has transformed our spice sourcing. Their custom packaging options and competitive pricing make them our #1 supplier.",
    name: "Ahmed Al-Rashid",
    company: "Gulf Traders, UAE",
    role: "Managing Director",
  },
  {
    quote:
      "Professional, reliable, and deeply knowledgeable about Indian spices. Mova Logistics is the gold standard in spice exports.",
    name: "Yuki Tanaka",
    company: "Nihon Foods Co., Japan",
    role: "Import Manager",
  },
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, i) => (
            <div key={i} className="flex-none w-full md:w-[80%] lg:w-[60%] px-4">
              <div className="p-8 md:p-12 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
                <Quote className="w-10 h-10 text-[#D4AF37]/30 mx-auto mb-6" />
                <p className="text-white/70 text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-[#D4AF37] text-sm mt-1">{item.role}</p>
                  <p className="text-white/40 text-sm">{item.company}</p>
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
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
