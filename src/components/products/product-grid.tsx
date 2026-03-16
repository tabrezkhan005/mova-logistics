"use client";

import { useState } from "react";
import { products, categories } from "@/src/data/products";
import { ProductCard } from "./product-card";
import { ProductFilter } from "./product-filter";
import { FadeUp } from "@/src/components/animations/fade-up";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <FadeUp>
        <ProductFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#6B7280]">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
