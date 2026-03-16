"use client";

import { cn } from "@/src/lib/utils";

interface Category {
  id: string;
  label: string;
}

interface ProductFilterProps {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

export function ProductFilter({ categories, active, onChange }: ProductFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
            active === cat.id
              ? "bg-[#0F2F2A] text-white shadow-lg shadow-[#0F2F2A]/20"
              : "bg-white text-[#6B7280] border border-[#0A0A0A]/10 hover:border-[#D4AF37]/30 hover:text-[#0A0A0A]"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
