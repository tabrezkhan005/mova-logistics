"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/exports", label: "Global Exports" },
  { href: "/quality", label: "Quality Assurance" },
  { href: "/blog", label: "Blog & Insights" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  { href: "/products", label: "Turmeric" },
  { href: "/products", label: "Cumin Seeds" },
  { href: "/products", label: "Black Pepper" },
  { href: "/products", label: "Cardamom" },
  { href: "/products", label: "Red Chilli" },
  { href: "/products", label: "Sesame Seeds" },
];

export function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", color: "#FFFFFF" }}>

      {/* ── Main footer body ── */}
      <div
        className="container-main"
        style={{ paddingTop: "72px", paddingBottom: "56px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "48px",
          }}
          className="max-lg:!grid-cols-2 max-sm:!grid-cols-1"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <Image
                src="/images/logo/mova_logistics.png"
                alt="MOVA Logistics"
                width={150}
                height={48}
                className="object-contain"
              />
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "13px",
                lineHeight: 1.85,
                margin: "0 0 28px 0",
                maxWidth: "280px",
              }}
            >
              A trusted Indian spice export company delivering premium quality
              spices to global markets. Connecting India&apos;s finest farms
              with businesses worldwide.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {["in", "tw", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "border-color 0.25s, color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
                    (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.3)";
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 28px 0",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.38)",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.38)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 28px 0",
              }}
            >
              Our Products
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.38)",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.38)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "#FFFFFF",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 28px 0",
              }}
            >
              Contact Us
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin
                  style={{
                    width: 14,
                    height: 14,
                    color: "#D4AF37",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "rgba(255,255,255,0.38)",
                    fontSize: "13px",
                    lineHeight: 1.7,
                  }}
                >
                  D. No. 3-1-153, Kundula Road, Pattabhipuram, Guntur, Andhra Pradesh 522006
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone
                  style={{ width: 14, height: 14, color: "#D4AF37", flexShrink: 0 }}
                />
                <a
                  href="tel:+917989326385"
                  style={{
                    color: "rgba(255,255,255,0.38)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.38)")
                  }
                >
                  +91 79893 26385
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail
                  style={{ width: 14, height: 14, color: "#D4AF37", flexShrink: 0 }}
                />
                <a
                  href="mailto:exports@movalogistics.com"
                  style={{
                    color: "rgba(255,255,255,0.38)",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.38)")
                  }
                >
                  exports@movalogistics.com
                </a>
              </li>
            </ul>

            {/* Cert row */}
            <div
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {["FSSAI", "ISO 22000", "HACCP", "Spice Board"].map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "4px 10px",
                    border: "1px solid rgba(212,175,55,0.2)",
                    color: "rgba(212,175,55,0.7)",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="container-main"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "12px",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Mova Logistics. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "12px",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.5)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.2)")
                }
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
