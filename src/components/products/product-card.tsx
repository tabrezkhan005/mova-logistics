"use client";

import { motion } from "framer-motion";
import type { Product } from "@/src/data/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="premium-card group cursor-pointer h-full flex flex-col"
    >
      {/* Image Area */}
      <div className="relative h-60 overflow-hidden bg-[#0F2F2A]">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 mix-blend-overlay group-hover:opacity-100" 
        />
        <div
          className="absolute inset-0 opacity-40 transition-transform duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${product.color}40, transparent 80%)`,
          }}
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
            {product.category.replace("-", " ")}
          </span>
        </div>
        {/* Certifications */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
          {product.certifications.slice(0, 3).map((cert) => (
            <span
              key={cert}
              className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider bg-white/10 text-white/60 backdrop-blur-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-[#0A0A0A] font-semibold text-xl mb-2 group-hover:text-[#1F7A6E] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-3 flex-1">
          {product.description}
        </p>
        <div className="mt-4 pt-4 border-t border-[#0A0A0A]/5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#9CA3AF] uppercase tracking-wider">
              {product.origin}
            </span>
            <span className="text-[#D4AF37] text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </div>
        </div>
        {/* Packaging */}
        <div className="mt-3 flex gap-2 flex-wrap">
          {product.exportPackaging.slice(0, 2).map((pkg) => (
            <span
              key={pkg}
              className="text-[10px] text-[#6B7280] bg-[#F8F9F8] px-2 py-1 rounded"
            >
              {pkg}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
