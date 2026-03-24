"use client";

import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { blogPosts } from "@/src/data/blog";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BlogSection() {
  return (
    <section
      style={{
        background: "#F8F9F8",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeUp>
              <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">
                Insights & Updates
              </span>
            </FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                Latest from the{" "}
                <span className="text-[#1F7A6E]">Spice World</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}>
              <div className="gold-line mt-6" />
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1F7A6E] font-medium text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <FadeUp key={post.id} delay={0.1 * i}>
              <article className="premium-card group cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#0F2F2A]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-overlay"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/90 text-[#0A0A0A] text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <h3 className="text-[#0A0A0A] font-semibold text-lg mb-3 group-hover:text-[#1F7A6E] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-[#D4AF37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
