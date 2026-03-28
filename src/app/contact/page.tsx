import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/src/components/animations/fade-up";
import { ExportInquiryForm } from "@/src/components/forms/export-inquiry-form";
import { contactMetadata } from "@/src/seo/metadata";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Globe, Leaf } from "lucide-react";

export const metadata = contactMetadata;

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Guntur, Andhra Pradesh, India",
    sub: "Head Office",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 79893 26385",
    sub: "Mon–Sat, 9 AM – 6 PM IST",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "exports@movalogistics.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Monday – Saturday",
    sub: "9:00 AM – 6:00 PM IST",
  },
];

const processSteps = [
  "We review your inquiry within 24 hours",
  "Our team prepares a detailed quotation",
  "We share product samples if requested",
  "Once confirmed, production begins",
];

const trustBadges = [
  { icon: ShieldCheck, label: "ISO & HACCP Certified" },
  { icon: Globe, label: "Global Export Network" },
  { icon: Leaf, label: "Organic Options Available" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[58vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070"
          alt="Global Spice Trade"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

        <div className="relative z-10 container-main pb-16 md:pb-20">
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
              <span style={{
                color: "#D4AF37",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}>
                Contact Us
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              color: "#FFFFFF",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: "720px",
            }}>
              Let&apos;s Discuss Your{" "}
              <span style={{ color: "#D4AF37" }}>Export Needs</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "16px",
              marginTop: "20px",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}>
              Whether you need product samples, pricing, or custom packaging — our export team is ready to help.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CONTACT INFO STRIP ── */}
      <section style={{ background: "#0A0A0A", padding: "0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
            className="max-md:!grid-cols-2 max-sm:!grid-cols-1"
          >
            {contactInfo.map((info, i) => (
              <FadeUp key={info.title} delay={i * 0.08}>
                <div
                  style={{
                    padding: "40px 28px",
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    transition: "background 0.3s",
                  }}
                  className="max-md:even:!border-r-0 max-sm:!border-r-0 max-sm:!border-b max-sm:!border-[rgba(255,255,255,0.06)] hover:!bg-[rgba(255,255,255,0.02)] group"
                >
                  <div style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "border-color 0.3s, background 0.3s",
                  }} className="group-hover:!border-[#D4AF37]/50 group-hover:!bg-[#D4AF37]/5">
                    <info.icon style={{ width: 18, height: 18, color: "#D4AF37" }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}>
                      {info.title}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.4,
                      marginBottom: "4px",
                    }}>
                      {info.detail}
                    </div>
                    <div style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.25)",
                      lineHeight: 1.4,
                    }}>
                      {info.sub}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px, 8vw, 120px) 0" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 96px)",
              alignItems: "start",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Intro + Process */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}>
                    Export Inquiry
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-heading)",
                  color: "#0A0A0A",
                  margin: "0 0 28px 0",
                  lineHeight: 1.12,
                }}>
                  Send Us Your{" "}
                  <span style={{ color: "#1F7A6E" }}>Requirements</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "28px" }} />
              </FadeUp>

              <FadeUp delay={0.2}>
                <p style={{
                  color: "#6B7280",
                  lineHeight: 1.85,
                  marginBottom: "40px",
                  fontSize: "15px",
                }}>
                  Fill out the form with your product requirements, and our dedicated export managers
                  will provide you with a comprehensive quotation including pricing, packaging options,
                  and shipping details.
                </p>
              </FadeUp>

              {/* What happens next */}
              <FadeUp delay={0.25}>
                <div style={{
                  background: "#F8F9F8",
                  padding: "32px",
                  borderLeft: "3px solid #D4AF37",
                  marginBottom: "40px",
                }}>
                  <h4 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    marginBottom: "20px",
                  }}>
                    What happens next?
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {processSteps.map((step, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        <div style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "#0F2F2A",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}>
                          <span style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#D4AF37",
                          }}>
                            {i + 1}
                          </span>
                        </div>
                        <p style={{
                          color: "#6B7280",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          margin: 0,
                          paddingTop: "3px",
                        }}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Trust badges */}
              <FadeUp delay={0.3}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "rgba(10,10,10,0.08)",
                }} className="max-sm:!grid-cols-1">
                  {trustBadges.map((badge) => (
                    <div key={badge.label} style={{
                      background: "#FFFFFF",
                      padding: "20px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}>
                      <badge.icon style={{ width: 18, height: 18, color: "#D4AF37", flexShrink: 0 }} />
                      <span style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}>
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — Form */}
            <FadeUp delay={0.15}>
              <div style={{
                background: "#FFFFFF",
                border: "1px solid rgba(10,10,10,0.08)",
                padding: "clamp(28px, 4vw, 48px)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Top gold accent line */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #D4AF37, #1F7A6E)",
                }} />

                <div style={{ marginBottom: "28px" }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    marginBottom: "8px",
                  }}>
                    Request a Quote
                  </h3>
                  <p style={{
                    fontSize: "13px",
                    color: "#9CA3AF",
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    All fields marked with * are required
                  </p>
                </div>

                <ExportInquiryForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section style={{ background: "#0F2F2A", padding: "clamp(64px, 8vw, 100px) 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
        }} />

        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
            }}
            className="max-lg:!grid-cols-1"
          >
            {/* Left — Text */}
            <div>
              <FadeUp>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "32px", height: "1px", background: "#D4AF37" }} />
                  <span style={{
                    color: "#D4AF37",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                  }}>
                    Our Location
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-heading)",
                  color: "#FFFFFF",
                  margin: "0 0 24px 0",
                  lineHeight: 1.12,
                }}>
                  Based in{" "}
                  <span style={{ color: "#D4AF37" }}>Guntur</span>,
                  <br />Shipping Worldwide
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div style={{ width: "40px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
              </FadeUp>

              <FadeUp delay={0.2}>
                <p style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  marginBottom: "36px",
                  maxWidth: "440px",
                }}>
                  Our head office and processing facility are strategically located 
                  in Guntur — the heart of India's spice belt — giving us 
                  direct access to the highest quality crops and efficient 
                  transport routes to major ports.
                </p>
              </FadeUp>

              <FadeUp delay={0.25}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <MapPin style={{ width: 16, height: 16, color: "#D4AF37", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600, marginBottom: "2px" }}>
                        Head Office
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", lineHeight: 1.7 }}>
                         D. No. 3-1-153, Kundula Road, Pattabhipuram(Guntur), Guntur, Andhra Pradesh 522006
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <Phone style={{ width: 16, height: 16, color: "#D4AF37", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600, marginBottom: "2px" }}>
                        +91 79893 26385
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", lineHeight: 1.7 }}>
                        Mon – Sat, 9 AM – 6 PM IST
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <Mail style={{ width: 16, height: 16, color: "#D4AF37", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600, marginBottom: "2px" }}>
                        exports@movalogistics.com
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", lineHeight: 1.7 }}>
                        We reply within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <Link
                  href="/products"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "40px" }}
                >
                  View Our Products <ArrowRight size={14} />
                </Link>
              </FadeUp>
            </div>

            {/* Right — Map embed */}
            <FadeUp delay={0.15}>
              <div style={{
                position: "relative",
                height: "480px",
                borderRadius: "2px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }} className="max-lg:!h-[360px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.432607421876!2d80.428612!3d16.297059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75e3c78091dd%3A0xc3c9f2868297d096!2sPattabhipuram%2C%20Guntur%2C%20Andhra%20Pradesh%20522006!5e0!3m2!1sen!2sin!4v1709564231234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.1) brightness(0.85)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mova Logistics Guntur Location"
                />
                {/* Overlay tint */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(15,47,42,0.15) 0%, rgba(15,47,42,0.3) 100%)",
                  pointerEvents: "none",
                }} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
