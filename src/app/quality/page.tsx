import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { QualityProcess } from "@/src/components/sections/quality-process";
import { Certifications } from "@/src/components/sections/certifications";
import { qualityMetadata } from "@/src/seo/metadata";
import { FlaskConical, Microscope, ShieldCheck, FileCheck } from "lucide-react";

export const metadata = qualityMetadata;

const labTests = [
  { icon: Microscope, title: "Microbiological Testing", desc: "Complete microbial analysis including E.coli, Salmonella, yeast, and mold counts." },
  { icon: FlaskConical, title: "Chemical Analysis", desc: "Aflatoxin levels, pesticide residue, heavy metals, and moisture content testing." },
  { icon: ShieldCheck, title: "Physical Quality", desc: "Color value, particle size, volatile oil content, and foreign matter inspection." },
  { icon: FileCheck, title: "Documentation", desc: "Certificate of Analysis, phytosanitary certificates, and origin certificates for every shipment." },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0F2F2A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Quality Assurance</span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h1 className="text-white max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              Uncompromising <span className="gradient-text">Quality Standards</span>
            </h1>
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50 max-w-2xl text-lg">
              Every spice we export undergoes rigorous quality testing in NABL-accredited laboratories to meet international food safety standards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Quality Process */}
      <QualityProcess />

      {/* Lab Testing */}
      <section className="section-padding bg-[#F8F9F8]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp><span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Laboratory Testing</span></FadeUp>
            <TextReveal className="mt-4">
              <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                Rigorous <span className="text-[#1F7A6E]">Quality Testing</span>
              </h2>
            </TextReveal>
            <FadeUp delay={0.2}><div className="gold-line-center mt-6" /></FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labTests.map((test, i) => (
              <FadeUp key={test.title} delay={0.1 * i}>
                <div className="flex gap-6 p-8 rounded-xl bg-white border border-[#0A0A0A]/5 hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-xl bg-[#0F2F2A] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors duration-500">
                    <test.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold text-lg mb-2">{test.title}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{test.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />
    </>
  );
}
