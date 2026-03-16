import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { aboutMetadata } from "@/src/seo/metadata";
import { Award, Globe, Users, Leaf, Target, Heart } from "lucide-react";

export const metadata = aboutMetadata;

const milestones = [
  { year: "2009", title: "Founded", description: "Mova Logistics established in Mumbai with a vision for premium spice exports." },
  { year: "2012", title: "ISO Certified", description: "Obtained ISO 22000 certification, reinforcing our commitment to quality." },
  { year: "2015", title: "20 Countries", description: "Expanded export operations to 20+ countries across 3 continents." },
  { year: "2018", title: "Organic Range", description: "Launched our certified organic spice range for international markets." },
  { year: "2021", title: "40+ Markets", description: "Reached 40+ countries with a dedicated team of 100+ professionals." },
  { year: "2024", title: "State-of-Art Facility", description: "Inaugurated a new processing facility with latest technology." },
];

const values = [
  { icon: Target, title: "Excellence", description: "Uncompromising quality in every shipment we deliver." },
  { icon: Heart, title: "Integrity", description: "Transparent and ethical business practices at every step." },
  { icon: Globe, title: "Global Vision", description: "Connecting India's finest spices with the world." },
  { icon: Leaf, title: "Sustainability", description: "Committed to sustainable sourcing and farming practices." },
  { icon: Users, title: "Partnership", description: "Building long-term relationships based on trust." },
  { icon: Award, title: "Innovation", description: "Continuous improvement in processes and products." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0F2F2A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">About Us</span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h1 className="text-white max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              The Story Behind <span className="gradient-text">Mova Logistics</span>
            </h1>
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50 max-w-2xl text-lg">
              A premier Indian spice export company delivering authentic flavors to global markets since 2009.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Our Mission</span>
              </FadeUp>
              <TextReveal className="mt-4">
                <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                  Bridging India&apos;s Farms with <span className="text-[#1F7A6E]">Global Markets</span>
                </h2>
              </TextReveal>
              <FadeUp delay={0.2}><div className="gold-line mt-6" /></FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-6 text-[#6B7280] leading-relaxed">
                  Our mission is to become the most trusted name in Indian spice exports by delivering
                  consistently superior products with unmatched service. We connect India&apos;s finest
                  spice-growing regions with businesses worldwide, ensuring every gram meets the highest
                  international quality standards.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p className="mt-4 text-[#6B7280] leading-relaxed">
                  We believe in building lasting partnerships founded on trust, transparency, and
                  mutual growth. Our team of experienced professionals works tirelessly to ensure
                  seamless operations from sourcing to delivery.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F2F2A] to-[#1F7A6E] aspect-[4/3] flex items-center justify-center">
                <span className="text-white/5 text-9xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>M</span>
                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl">
                  <p className="text-white text-sm italic">&quot;Quality is not an act, it is a habit.&quot;</p>
                  <p className="text-[#D4AF37] text-xs mt-2">— Mova Logistics Philosophy</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#F8F9F8]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp><span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Our Journey</span></FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>Milestones That <span className="text-[#1F7A6E]">Define Us</span></h2>
            </TextReveal>
            <FadeUp delay={0.2}><div className="gold-line-center mt-6" /></FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={0.1 * i}>
                <div className="p-6 rounded-xl bg-white border border-[#0A0A0A]/5 hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500">
                  <span className="text-3xl font-bold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>{m.year}</span>
                  <h4 className="text-[#0A0A0A] font-semibold text-lg mt-3 mb-2">{m.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{m.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp><span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Our Values</span></FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>Principles That <span className="text-[#1F7A6E]">Guide Us</span></h2>
            </TextReveal>
            <FadeUp delay={0.2}><div className="gold-line-center mt-6" /></FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={0.1 * i}>
                <div className="p-8 rounded-xl bg-[#F8F9F8] border border-[#0A0A0A]/5 hover:border-[#D4AF37]/20 transition-all duration-500 group text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#0F2F2A] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D4AF37] transition-colors duration-500">
                    <v.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors duration-500" />
                  </div>
                  <h4 className="text-[#0A0A0A] font-semibold text-lg mb-2">{v.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{v.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
