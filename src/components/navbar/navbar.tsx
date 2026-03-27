"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/exports", label: "Exports" },
  { href: "/quality", label: "Quality" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          isScrolled
            ? "bg-[#0A0A0A]/97 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        {/* ── Top contact bar ── */}
        <div
          className={cn(
            "hidden lg:flex w-full transition-all duration-400 overflow-hidden",
            isScrolled ? "h-0 opacity-0" : "h-[36px] opacity-100"
          )}
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-main flex items-center justify-between h-full">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
              }}
            >
              <a
                href="tel:+919876543210"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.45)")
                }
              >
                <Phone size={11} style={{ color: "#D4AF37" }} />
                +91 98765 43210
              </a>
              <span
                style={{
                  width: "1px",
                  height: "12px",
                  background: "rgba(255,255,255,0.12)",
                }}
              />
              <a
                href="mailto:exports@movalogistics.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.45)")
                }
              >
                <Mail size={11} style={{ color: "#D4AF37" }} />
                exports@movalogistics.com
              </a>
            </div>
            <span
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              ISO 22000 · HACCP · FSSAI
            </span>
          </div>
        </div>

        {/* ── Main nav ── */}
        <div
          className={cn(
            "container-main flex items-center justify-between transition-all duration-300",
            isScrolled ? "py-3" : "py-4"
          )}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo/mova_logistics.png"
              alt="MOVA Logistics"
              width={116}
              height={36}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    color: active
                      ? "#FFFFFF"
                      : "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                  }
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.55)";
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "1px",
                        background: "#D4AF37",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Link
              href="/contact"
              className="hidden md:inline-flex"
              style={{
                padding: "10px 24px",
                background: "#D4AF37",
                color: "#0A0A0A",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#b8961f")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#D4AF37")
              }
            >
              Get Quote
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden"
              style={{
                color: "rgba(255,255,255,0.75)",
                padding: "6px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              paddingTop: "88px",
            }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    padding: "20px 24px",
                    fontSize: "18px",
                    fontWeight: 500,
                    color:
                      pathname === link.href
                        ? "#D4AF37"
                        : "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-heading)",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: "rotate(-90deg)",
                      color: "rgba(255,255,255,0.2)",
                    }}
                  />
                </Link>
              ))}

              <div style={{ padding: "28px 24px" }}>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "16px 24px",
                    background: "#D4AF37",
                    color: "#0A0A0A",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "4px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
