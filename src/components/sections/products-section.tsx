"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { products } from "@/src/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductsSection() {
  const featured = products.slice(0, 6);

  return (
    <section className="section-padding bg-[#F8F9F8]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
              Our Premium Range
            </span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
              Finest Indian Spices for{" "}
              <span className="text-[#1F7A6E]">Global Markets</span>
            </h2>
          </TextReveal>
          <FadeUp delay={0.2}>
            <div className="gold-line-center mt-6" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-[#6B7280]">
              We source, process, and export a comprehensive range of premium Indian
              spices, meeting international quality standards for every shipment.
            </p>
          </FadeUp>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, i) => (
            <FadeUp key={product.id} delay={0.1 * i}>
              <div className="premium-card group cursor-pointer">
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0F2F2A] to-[#1F7A6E]">
                  <div
                    className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${product.color}40, transparent 70%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-6xl font-bold opacity-10 text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {product.name[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                    {product.certifications.slice(0, 2).map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 rounded text-[10px] uppercase tracking-wider bg-white/10 text-white/70 backdrop-blur-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#0A0A0A] font-semibold text-xl mb-2 group-hover:text-[#1F7A6E] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF] uppercase tracking-wider">
                      {product.origin}
                    </span>
                    <span className="text-[#D4AF37] text-sm font-medium group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* View All */}
        <FadeUp delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary bg-[#0F2F2A] text-white hover:bg-[#1F7A6E] group">
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
