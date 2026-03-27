import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { aboutMetadata } from "@/src/seo/metadata";
import { ArrowRight, MapPin, Shield, Leaf, Globe, Users, Award, Target } from "lucide-react";

export const metadata = aboutMetadata;

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "40+", label: "Countries Served" },
  { value: "500+", label: "Annual Shipments" },
  { value: "8", label: "Certifications" },
];

const milestones = [
  { year: "2009", title: "Founded in Mumbai", description: "Mova Logistics established with a singular vision — to bring India's finest spices to global kitchens." },
  { year: "2012", title: "ISO 22000 Certified", description: "Earned our first international quality certification, setting the benchmark for our operations." },
  { year: "2015", title: "3 Continents Reached", description: "Crossed 20 countries across Europe, the Middle East, and Southeast Asia within six years." },
  { year: "2018", title: "Organic Range Launched", description: "Introduced our certified organic spice line, meeting growing global demand for clean-label products." },
  { year: "2021", title: "40+ Markets Active", description: "Built a team of 100+ professionals and established direct farmer partnerships across 12 states." },
  { year: "2024", title: "State-of-Art Facility", description: "Opened our flagship processing plant featuring AI-driven sorting and zero-contamination protocols." },
];

const values = [
  { icon: Target, title: "Excellence", description: "Every shipment meets strict internal benchmarks before it ever reaches a port." },
  { icon: Shield, title: "Integrity", description: "Transparent pricing, honest reporting, and ethical sourcing at every touchpoint." },
  { icon: Globe, title: "Global Reach", description: "Our network spans 40+ countries — with last-mile delivery expertise." },
  { icon: Leaf, title: "Sustainability", description: "Certified organic options, minimal waste processing, and farmer-first ethics." },
  { icon: Users, title: "Partnership", description: "We grow when our clients grow. Long-term relationships over short-term gains." },
  { icon: Award, title: "Innovation", description: "Continuous investment in processing technology and quality assurance systems." },
];

const processSteps = [
  { num: "01", title: "Farm Sourcing", body: "We partner directly with vetted farmers across 12 spice-growing states in India." },
  { num: "02", title: "Incoming QC", body: "Every batch is tested for moisture, volatile oils, and contaminants on arrival." },
  { num: "03", title: "Processing", body: "Grading, cleaning, and milling under ISO-certified, hygienic conditions." },
  { num: "04", title: "Lab Testing", body: "Third-party lab analysis for pesticide residue, heavy metals, and microbial limits." },
  { num: "05", title: "Export Packaging", body: "Customized bulk or retail packing with full traceability documentation." },
  { num: "06", title: "Global Delivery", body: "On-time shipment with complete EXIM documentation and port-to-port tracking." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[62vh] min-h-[440px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070"
          alt="Indian Spices"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        <div className="relative z-10 container-main pb-16 md:pb-20">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                About Mova Logistics
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", lineHeight: 1.08, margin: 0, maxWidth: "720px" }}>
              Connecting India&apos;s{" "}
              <span style={{ color: "#D4AF37" }}>Finest Spices</span>
              <br />to the World
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", marginTop: "20px", maxWidth: "520px", lineHeight: 1.7 }}>
              A premier export company built on quality, trust, and 15 years of global trade expertise.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STORY SPLIT ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}
            className="max-lg:!grid-cols-1">
            
            {/* Left — Text */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                    Our Story
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{ fontFamily: "var(--font-heading)", color: "#0A0A0A", margin: "0 0 28px 0", lineHeight: 1.12 }}>
                  Built on the{" "}
                  <span style={{ color: "#1F7A6E" }}>Belief That</span>
                  <br />Quality Has No Compromise
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p style={{ color: "#6B7280", lineHeight: 1.85, marginBottom: "20px", fontSize: "15px" }}>
                  Founded in 2009 in Mumbai, Mova Logistics began as a small but passionate spice trading firm. 
                  What set us apart from day one was a single obsession — delivering only what we would be proud 
                  to serve on our own table.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p style={{ color: "#6B7280", lineHeight: 1.85, marginBottom: "32px", fontSize: "15px" }}>
                  Today, we partner directly with farmers across 12 Indian states, process in ISO 22000 certified 
                  facilities, and ship to 40+ countries. Every gram carries our promise: sourced right, processed clean, 
                  delivered on time.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <blockquote style={{
                  borderLeft: "2px solid #D4AF37",
                  paddingLeft: "20px",
                  marginBottom: "40px",
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  color: "#0F2F2A",
                  fontSize: "18px",
                  lineHeight: 1.6,
                }}>
                  &ldquo;Quality is not a department. It&apos;s the only way we know how to work.&rdquo;
                  <footer style={{ fontFamily: "var(--font-body)", fontStyle: "normal", fontSize: "12px", color: "#D4AF37", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "10px", fontWeight: 600 }}>
                    — Mova Logistics Founder
                  </footer>
                </blockquote>
              </FadeUp>
              <FadeUp delay={0.35}>
                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  Partner With Us <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>

            {/* Right — Image with overlaid stat card */}
            <FadeUp delay={0.15}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "relative", height: "520px", borderRadius: "2px", overflow: "hidden" }}
                  className="max-lg:!h-[360px]">
                  <Image
                    src="https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=900"
                    alt="Premium Turmeric"
                    fill
                    className="object-cover"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.5))" }} />
                </div>
                {/* Floating stat card */}
                <div style={{
                  position: "absolute",
                  bottom: "-28px",
                  left: "-28px",
                  background: "#0F2F2A",
                  padding: "28px 32px",
                  borderRadius: "2px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px 32px",
                  minWidth: "260px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                }} className="max-sm:hidden">
                  {stats.slice(0, 4).map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>
                        {s.value}
                      </div>
                      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginTop: "6px" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(56px, 7vw, 96px) 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}
            className="max-md:!grid-cols-2">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div style={{
                  textAlign: "center",
                  padding: "36px 24px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  borderBottom: i < 2 ? "none" : "none",
                }} className="max-md:even:!border-r-0 max-md:!border-b max-md:last:!border-b-0 max-md:!border-[rgba(255,255,255,0.06)]">
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem, 5vw, 4rem)", fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, marginTop: "12px" }}>
                    {s.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS / HOW WE WORK ── */}
      <section style={{ background: "#F8F9F8", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div style={{ maxWidth: "600px", marginBottom: "clamp(40px, 5vw, 72px)" }}>
            <FadeUp>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                  How We Work
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-heading)", color: "#0A0A0A", margin: 0, lineHeight: 1.12 }}>
                From Farm to{" "}
                <span style={{ color: "#1F7A6E" }}>Your Market</span>
              </h2>
            </FadeUp>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(10,10,10,0.08)" }}
            className="max-md:!grid-cols-1">
            {processSteps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.07}>
                <div style={{
                  background: "#FFFFFF",
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background 0.3s",
                }} className="group hover:!bg-[#0F2F2A]">
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "64px",
                    fontWeight: 700,
                    color: "rgba(10,10,10,0.04)",
                    lineHeight: 1,
                    position: "absolute",
                    top: "16px",
                    right: "24px",
                    transition: "color 0.3s",
                  }} className="group-hover:!text-white/5">
                    {step.num}
                  </div>
                  <div style={{
                    width: "32px",
                    height: "2px",
                    background: "#D4AF37",
                    marginBottom: "24px",
                  }} />
                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    marginBottom: "12px",
                    transition: "color 0.3s",
                  }} className="group-hover:!text-white">
                    {step.title}
                  </h4>
                  <p style={{
                    color: "#6B7280",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    margin: 0,
                    transition: "color 0.3s",
                  }} className="group-hover:!text-white/55">
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 5vw, 72px)" }}>
            <FadeUp>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                  Our Journey
                </span>
                <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 style={{ fontFamily: "var(--font-heading)", color: "#0A0A0A", margin: 0 }}>
                Milestones That <span style={{ color: "#1F7A6E" }}>Define Us</span>
              </h2>
            </FadeUp>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "rgba(10,10,10,0.06)" }}
            className="max-md:!grid-cols-1">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.08}>
                <div style={{
                  background: i % 2 === 0 ? "#FFFFFF" : "#F8F9F8",
                  padding: "40px 36px",
                  borderTop: "3px solid transparent",
                  transition: "border-color 0.3s, background 0.3s",
                }} className="hover:!border-[#D4AF37] group">
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "rgba(10,10,10,0.08)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "16px",
                    transition: "color 0.3s",
                  }} className="group-hover:!text-[#D4AF37]/20">
                    {m.year}
                  </span>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "17px", fontWeight: 700, color: "#0A0A0A", marginBottom: "10px" }}>
                    {m.title}
                  </h4>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
                    {m.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#0F2F2A", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 96px)", marginBottom: "clamp(48px, 6vw, 80px)", alignItems: "end" }}
            className="max-lg:!grid-cols-1 max-lg:!gap-6">
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                    Our Values
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", margin: 0, lineHeight: 1.12 }}>
                  Principles That
                  <br /><span style={{ color: "#D4AF37" }}>Guide Every Decision</span>
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.85, margin: 0 }}>
                These aren&apos;t slogans on a wall. They&apos;re the principles our team applies every 
                day — from the farms where we source to the ships that carry our cargo.
              </p>
            </FadeUp>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)" }}
            className="max-md:!grid-cols-1">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.07}>
                <div style={{
                  background: "#0F2F2A",
                  padding: "40px 36px",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s, background 0.3s",
                }} className="hover:!border-[#D4AF37] hover:!bg-[#152f2b] group">
                  <v.icon style={{ width: "22px", height: "22px", color: "#D4AF37", marginBottom: "20px" }} />
                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                  }}>
                    {v.title}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
                    {v.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: "#0A0A0A", padding: "clamp(64px, 8vw, 100px) 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)" }} />
        <div className="container-main" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <FadeUp>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Let&apos;s Work Together
              </span>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", margin: "0 0 16px 0" }}>
              Ready to Import<br />
              <span style={{ color: "#D4AF37" }}>Premium Spices?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px", lineHeight: 1.75, maxWidth: "480px", margin: "0 auto 40px" }}>
              Whether you need a sample, a quote, or an entire supply chain partnership — we&apos;re ready to deliver.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Get a Quote <ArrowRight size={14} />
              </Link>
              <Link href="/products" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                }}
              >
                View Products <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
