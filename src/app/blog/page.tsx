import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { blogPosts } from "@/src/data/blog";
import { blogMetadata } from "@/src/seo/metadata";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = blogMetadata;

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0F2F2A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Blog & Insights</span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h1 className="text-white max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              Insights from the <span className="gradient-text">World of Spices</span>
            </h1>
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50 max-w-2xl text-lg">
              Stay updated with market trends, quality practices, and industry knowledge from our expert team.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-[#F8F9F8]">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.id} delay={0.1 * i}>
                <article className="premium-card group cursor-pointer h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0F2F2A] to-[#1F7A6E]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-7xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <h3 className="text-[#0A0A0A] font-semibold text-xl mb-3 group-hover:text-[#1F7A6E] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#0A0A0A]/5 flex items-center justify-between">
                      <span className="text-xs text-[#9CA3AF]">By {post.author}</span>
                      <span className="text-[#D4AF37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
