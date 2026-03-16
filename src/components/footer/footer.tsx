"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FadeUp } from "@/src/components/animations/fade-up";

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
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main Footer */}
      <div className="container-main section-padding !pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Description */}
          <FadeUp className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#b8961f] flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide leading-none">
                  MOVA
                </span>
                <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase leading-none mt-0.5">
                  Logistics
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A trusted Indian spice export company delivering premium quality
              spices to global markets. We connect India&apos;s finest farms with
              businesses worldwide.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-xs"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Quick Links */}
          <FadeUp delay={0.1}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Products */}
          <FadeUp delay={0.2}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Contact Info */}
          <FadeUp delay={0.3}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0" />
                <span className="text-white/50 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="mailto:exports@movalogistics.com"
                  className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors"
                >
                  exports@movalogistics.com
                </a>
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Mova Logistics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
