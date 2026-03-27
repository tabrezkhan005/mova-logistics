"use client";

import { motion } from "framer-motion";
import type { Product } from "@/src/data/products";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";

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
      className="group cursor-pointer h-full flex flex-col bg-white rounded-sm overflow-hidden border border-[#0A0A0A]/5 hover:border-[#D4AF37] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 relative"
    >
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm border border-[#0A0A0A]/5 text-[#0F2F2A] text-[10px] font-bold uppercase tracking-widest shadow-sm">
        {product.category.replace("-", " ")}
      </div>

      {/* Image Area - Square & Real/Centered feeling */}
      <div className="relative aspect-square overflow-hidden bg-[#F8F9F8] flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at center, ${product.color}, transparent 70%)` }} />
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl shadow-black/10 group-hover:scale-105 transition-transform duration-700 ease-[0.25,0.46,0.45,0.94]">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover" 
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading text-xl text-[#0A0A0A] font-bold mb-3 group-hover:text-[#1F7A6E] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] uppercase tracking-wider mb-4 font-semibold">
          <MapPin size={12} className="text-[#D4AF37]" />
          {product.origin}
        </div>

        <p className="text-[#6B7280] text-[13px] leading-relaxed line-clamp-2 mb-6 flex-1">
          {product.description}
        </p>
        
        {/* Footer info: Certs & CTA */}
        <div className="pt-4 border-t border-[#0A0A0A]/5 flex items-center justify-between">
          <div className="flex gap-2">
            {product.certifications.slice(0, 2).map((cert) => (
              <span key={cert} className="flex items-center gap-1 text-[10px] text-[#6B7280] font-medium bg-[#F8F9F8] px-2 py-1 rounded-sm border border-[#0A0A0A]/5 uppercase">
                <ShieldCheck size={10} className="text-[#1F7A6E]" /> {cert}
              </span>
            ))}
          </div>
          
          <Link href={`/contact?product=${product.slug}`} className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-[#0A0A0A] transition-colors">
            Enquire <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
