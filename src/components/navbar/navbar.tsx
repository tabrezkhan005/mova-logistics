"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}
      >
        {/* Top Contact Bar - seamlessly integrated and shrinks on scroll */}
        <div 
          className={cn(
            "hidden lg:flex w-full items-center justify-between transition-all duration-500 overflow-hidden",
            isScrolled ? "h-0 opacity-0 border-transparent" : "h-[24px] opacity-100"
          )}
        >
          <div className="container-main flex items-center justify-between text-[11px] text-white/60 font-medium tracking-wide">
            <div className="flex items-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Phone size={12} className="text-[#D4AF37]" strokeWidth={2.5} />
                +91 98765 43210
              </a>
              <span className="w-px h-2.5 bg-white/20"></span>
              <a href="mailto:exports@movalogistics.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <Mail size={12} className="text-[#D4AF37]" strokeWidth={2.5} />
                exports@movalogistics.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-white/40 text-[9px] uppercase tracking-[0.2em] font-semibold">
               ISO 22000 & HACCP Certified
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={cn("container-main flex items-center justify-between transition-all duration-300", isScrolled ? "py-1" : "py-2")}>
          {/* Logo (Flex 1 to balance CTA) */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/images/logo/mova_logistics.png" 
                alt="MOVA Logistics Logo" 
                width={120}
                height={36}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-[15px] font-medium tracking-[0.05em] text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle (Flex 1 to balance Logo) */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary !py-2 !px-6 !text-[13px] !font-bold tracking-widest"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl pt-24 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl text-white/80 hover:text-[#D4AF37] transition-colors font-[var(--font-heading)]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-primary mt-4"
                >
                  Get Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
