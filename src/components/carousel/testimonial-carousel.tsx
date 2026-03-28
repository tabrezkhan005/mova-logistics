"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mova Logistics has quickly become our most reliable spice partner. Their turmeric quality is consistently excellent, and their logistics are always on time.",
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
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <div style={{ position: "relative" }}>
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <div style={{ display: "flex", gap: "24px" }}>
          {testimonials.map((item, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 calc(50% - 12px)",
                minWidth: 0,
              }}
              className="max-md:!flex-[0_0_calc(100%-0px)]"
            >
              <div
                style={{
                  padding: "40px 36px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(10,10,10,0.07)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                className="hover:!border-[rgba(212,175,55,0.2)] hover:!shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
              >
                {/* Quote icon */}
                <div style={{
                  width: "44px",
                  height: "44px",
                  background: "rgba(212,175,55,0.08)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}>
                  <Quote style={{ width: 20, height: 20, color: "#D4AF37" }} />
                </div>

                {/* Quote text */}
                <p style={{
                  fontSize: "15px",
                  color: "#6B7280",
                  lineHeight: 1.85,
                  margin: "0 0 28px 0",
                  flex: 1,
                  fontStyle: "italic",
                }}>
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author */}
                <div style={{
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(10,10,10,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}>
                  {/* Avatar placeholder */}
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#0F2F2A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#D4AF37",
                    }}>
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#0A0A0A",
                      marginBottom: "2px",
                    }}>
                      {item.name}
                    </div>
                    <div style={{
                      fontSize: "12px",
                      color: "#D4AF37",
                      fontWeight: 600,
                      marginBottom: "1px",
                    }}>
                      {item.role}
                    </div>
                    <div style={{
                      fontSize: "11px",
                      color: "#9CA3AF",
                    }}>
                      {item.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-scroll indicator dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "32px",
      }}>
        {testimonials.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === 0 ? "24px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === 0 ? "#D4AF37" : "rgba(10,10,10,0.12)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
