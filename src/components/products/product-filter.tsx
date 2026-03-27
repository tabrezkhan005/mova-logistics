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
    <div className="flex flex-wrap justify-center gap-4 border-b border-[#0A0A0A]/10 pb-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
            active === cat.id
              ? "text-[#1F7A6E]"
              : "text-[#6B7280] hover:text-[#0A0A0A]"
          )}
        >
          {cat.label}
          {active === cat.id && (
            <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-[#D4AF37]" />
          )}
        </button>
      ))}
    </div>
  );
}
