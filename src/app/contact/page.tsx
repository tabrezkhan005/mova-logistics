import { FadeUp } from "@/src/components/animations/fade-up";
import { TextReveal } from "@/src/components/animations/text-reveal";
import { ExportInquiryForm } from "@/src/components/forms/export-inquiry-form";
import { contactMetadata } from "@/src/seo/metadata";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = contactMetadata;

const contactInfo = [
  { icon: MapPin, title: "Visit Us", detail: "Mumbai, Maharashtra, India", sub: "Head Office" },
  { icon: Phone, title: "Call Us", detail: "+91 98765 43210", sub: "Mon-Sat, 9AM-6PM IST" },
  { icon: Mail, title: "Email Us", detail: "exports@movalogistics.com", sub: "We reply within 24 hours" },
  { icon: Clock, title: "Business Hours", detail: "Monday - Saturday", sub: "9:00 AM - 6:00 PM IST" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0F2F2A] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <FadeUp>
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Contact Us</span>
          </FadeUp>
          <TextReveal className="mt-4">
            <h1 className="text-white max-w-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              Let&apos;s Discuss Your <span className="gradient-text">Export Needs</span>
            </h1>
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-white/50 max-w-2xl text-lg">
              Whether you need product samples, pricing, or custom packaging — our export team is ready to help.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-[#F8F9F8]">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <FadeUp key={info.title} delay={0.1 * i}>
                <div className="p-6 rounded-xl bg-white border border-[#0A0A0A]/5 text-center hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2F2A] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-colors duration-500">
                    <info.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors duration-500" />
                  </div>
                  <h4 className="text-[#0A0A0A] font-semibold mb-1">{info.title}</h4>
                  <p className="text-[#0A0A0A] text-sm font-medium">{info.detail}</p>
                  <p className="text-[#9CA3AF] text-xs mt-1">{info.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <FadeUp>
                <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-[0.2em]">Export Inquiry</span>
              </FadeUp>
              <TextReveal className="mt-4">
                <h2 className="text-[#0A0A0A]" style={{ fontFamily: "var(--font-heading)" }}>
                  Send Us Your <span className="text-[#1F7A6E]">Requirements</span>
                </h2>
              </TextReveal>
              <FadeUp delay={0.2}><div className="gold-line mt-6" /></FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-6 text-[#6B7280] leading-relaxed">
                  Fill out the form with your product requirements, and our dedicated export managers
                  will provide you with a comprehensive quotation including pricing, packaging options,
                  and shipping details.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="mt-8 p-6 rounded-xl bg-white border border-[#0A0A0A]/5">
                  <h4 className="text-[#0A0A0A] font-semibold text-sm mb-3">What happens next?</h4>
                  <ul className="space-y-3">
                    {[
                      "We review your inquiry within 24 hours",
                      "Our team prepares a detailed quotation",
                      "We share product samples if requested",
                      "Once confirmed, production begins",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#6B7280]">
                        <span className="w-5 h-5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs flex items-center justify-center shrink-0 mt-0.5 font-semibold">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-3">
              <FadeUp delay={0.2}>
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-[#0A0A0A]/5 shadow-sm">
                  <ExportInquiryForm />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
