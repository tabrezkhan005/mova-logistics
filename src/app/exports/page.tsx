import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { ExportMap } from "@/src/components/sections/export-map";
import { TestimonialCarousel } from "@/src/components/carousel/testimonial-carousel";
import { exportsMetadata } from "@/src/seo/metadata";

export const metadata = exportsMetadata;

export default function ExportsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0F2F2A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Global Exports</span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h1 className="text-white max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              Delivering Spices to <span className="gradient-text">40+ Countries</span>
            </h1>
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50 max-w-2xl text-lg">
              Our robust supply chain and logistics network ensures reliable delivery of premium Indian spices to markets worldwide.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Export Map */}
      <ExportMap />

      {/* Export Process */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp><span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">How We Export</span></FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                Seamless <span className="text-[#1F7A6E]">Export Process</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}><div className="gold-line-center mt-6" /></FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Share your requirements — product, quantity, packaging, and destination." },
              { step: "02", title: "Quotation", desc: "Receive competitive pricing with complete shipping and documentation details." },
              { step: "03", title: "Confirmation", desc: "Confirm your order with agreed terms, and we begin processing." },
              { step: "04", title: "Delivery", desc: "Your shipment is dispatched with full documentation for customs clearance." },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={0.1 * i}>
                <div className="text-center p-8 rounded-xl bg-[#F8F9F8] border border-[#0A0A0A]/5 hover:border-[#D4AF37]/20 transition-all duration-500 relative">
                  <span className="text-5xl font-bold text-[#0A0A0A]/5 absolute top-4 right-4" style={{ fontFamily: "var(--font-heading)" }}>{item.step}</span>
                  <h4 className="text-[#0A0A0A] font-semibold text-lg mb-3 mt-8">{item.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp><span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Client Testimonials</span></FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-white" style={{ fontFamily: "var(--font-heading)" }}>
                What Our <span className="gradient-text">Partners Say</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}><div className="gold-line-center mt-6" /></FadeUp>
          </div>
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
}
