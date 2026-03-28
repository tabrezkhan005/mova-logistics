"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Shield, Globe, Leaf, ChevronDown } from "lucide-react";
import { products } from "@/src/data/products";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Singapore",
  "Malaysia",
  "Japan",
  "South Korea",
  "China",
  "South Africa",
  "Kenya",
  "Nigeria",
  "Egypt",
  "Mexico",
  "Other",
];

const trustItems = [
  { icon: Shield, label: "ISO & HACCP Certified" },
  { icon: Globe, label: "Global Export Reach" },
  { icon: Leaf, label: "Organic Options" },
];

/* ─── Styles ─── */

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "3px",
  color: "#FFFFFF",
  fontSize: "14px",
  lineHeight: 1.5,
  outline: "none",
  transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
  fontFamily: "inherit",
};

const inputFocused: React.CSSProperties = {
  borderColor: "#D4AF37",
  boxShadow: "0 0 0 3px rgba(212,175,55,0.1)",
  background: "rgba(255,255,255,0.06)",
};

const labelBase: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "8px",
};

export function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const hasDismissed = sessionStorage.getItem("mova_quote_dismissed");

    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  /* Lock body scroll when popup is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("mova_quote_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      product: formData.get("product"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry");
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        closePopup();
        // Wait for exit animation before resetting success state
        setTimeout(() => setIsSuccess(false), 500);
      }, 4500);
    } catch (error) {
      console.error("Submission error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const getFieldStyle = (name: string): React.CSSProperties => ({
    ...inputBase,
    ...(focusedField === name ? inputFocused : {}),
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closePopup}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.45, type: "spring", bounce: 0.15 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "920px",
              maxHeight: "92vh",
              background: "#0F2F2A",
              borderRadius: "6px",
              overflow: "hidden",
              display: "flex",
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.12), 0 32px 100px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* ── Top gold accent ── */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, #D4AF37 30%, #D4AF37 70%, transparent 100%)",
                zIndex: 10,
              }}
            />

            {/* ── Left Panel (Image + Branding) — hidden on mobile ── */}
            <div
              className="max-md:!hidden"
              style={{
                width: "42%",
                position: "relative",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {/* Background image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url('/images/turmeric.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.35,
                }}
              />
              {/* Gradient overlays */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(15,47,42,0.5) 0%, rgba(15,47,42,0.85) 60%, #0F2F2A 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at 20% 80%, rgba(212,175,55,0.08) 0%, transparent 60%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "40px 36px",
                }}
              >
                {/* Top badge */}
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 14px",
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.15)",
                      borderRadius: "2px",
                      marginBottom: "32px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#D4AF37",
                        animation: "pulse-gold 2s ease-in-out infinite",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#D4AF37",
                      }}
                    >
                      Limited Offer
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div>
                  <div
                    style={{
                      width: "28px",
                      height: "2px",
                      background: "#D4AF37",
                      marginBottom: "20px",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "32px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.15,
                      marginBottom: "14px",
                    }}
                  >
                    Get Your{" "}
                    <span style={{ color: "#D4AF37" }}>Free Quote</span>
                    <br />
                    Today
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginBottom: "36px",
                      maxWidth: "280px",
                    }}
                  >
                    Premium export-grade Indian spices delivered worldwide.
                    Competitive pricing, guaranteed quality.
                  </p>

                  {/* Trust badges */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      paddingTop: "24px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {trustItems.map((item) => (
                      <div
                        key={item.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "3px",
                            background: "rgba(212,175,55,0.08)",
                            border: "1px solid rgba(212,175,55,0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <item.icon
                            style={{
                              width: 14,
                              height: 14,
                              color: "#D4AF37",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.5)",
                            fontWeight: 500,
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Panel (Form) ── */}
            <div
              style={{
                flex: 1,
                background: "#111111",
                overflowY: "auto",
                position: "relative",
              }}
            >
              {/* Close button */}
              <button
                onClick={closePopup}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 20,
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                  color: "rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                }}
                aria-label="Close popup"
              >
                <X size={16} />
              </button>

              <div
                style={{
                  padding: "36px 32px 32px",
                }}
                className="max-sm:!px-5 max-sm:!py-7"
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    /* ── Success State ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        textAlign: "center",
                        padding: "60px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          bounce: 0.5,
                          delay: 0.15,
                        }}
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          background: "rgba(31,122,110,0.12)",
                          border: "1px solid rgba(31,122,110,0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "28px",
                        }}
                      >
                        <CheckCircle2
                          size={40}
                          style={{ color: "#1F7A6E" }}
                        />
                      </motion.div>

                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "26px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          marginBottom: "12px",
                        }}
                      >
                        Request Received!
                      </h3>

                      <p
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          maxWidth: "300px",
                          margin: 0,
                        }}
                      >
                        Our export team will review your inquiry and send you a
                        detailed quote within{" "}
                        <span style={{ color: "#D4AF37", fontWeight: 600 }}>
                          24 hours
                        </span>
                        .
                      </p>

                      {/* Progress dots */}
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          marginTop: "32px",
                        }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "#D4AF37",
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    /* ── Form State ── */
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div style={{ marginBottom: "28px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "14px",
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "1px",
                              background: "#D4AF37",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#D4AF37",
                            }}
                          >
                            Quick Quote
                          </span>
                        </div>
                        <h2
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "26px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            lineHeight: 1.15,
                            margin: "0 0 6px 0",
                          }}
                        >
                          Request a{" "}
                          <span style={{ color: "#D4AF37" }}>Quote</span>
                        </h2>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.3)",
                            margin: 0,
                            lineHeight: 1.6,
                          }}
                        >
                          Fill in your details and we&apos;ll get back to you
                          within 24 hours.
                        </p>
                      </div>

                      {/* Form */}
                      <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
                      >
                        {/* Row 1: Name + Company */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "14px",
                          }}
                          className="max-sm:!grid-cols-1"
                        >
                          <div>
                            <label style={labelBase}>
                              Full Name{" "}
                              <span style={{ color: "#D4AF37" }}>*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="John Doe"
                              style={getFieldStyle("name")}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                          <div>
                            <label style={labelBase}>Company</label>
                            <input
                              type="text"
                              name="company"
                              placeholder="Company Ltd"
                              style={getFieldStyle("company")}
                              onFocus={() => setFocusedField("company")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                        </div>

                        {/* Row 2: Email + Phone */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "14px",
                          }}
                          className="max-sm:!grid-cols-1"
                        >
                          <div>
                            <label style={labelBase}>
                              Email{" "}
                              <span style={{ color: "#D4AF37" }}>*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="you@company.com"
                              style={getFieldStyle("email")}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                          <div>
                            <label style={labelBase}>
                              Phone{" "}
                              <span style={{ color: "#D4AF37" }}>*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              placeholder="+1 234 567 8900"
                              style={getFieldStyle("phone")}
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                        </div>

                        {/* Row 3: Country + Product */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "14px",
                          }}
                          className="max-sm:!grid-cols-1"
                        >
                          <div>
                            <label style={labelBase}>
                              Country{" "}
                              <span style={{ color: "#D4AF37" }}>*</span>
                            </label>
                            <div style={{ position: "relative" }}>
                              <select
                                name="country"
                                required
                                defaultValue=""
                                style={{
                                  ...getFieldStyle("country"),
                                  appearance: "none",
                                  cursor: "pointer",
                                  paddingRight: "40px",
                                }}
                                onFocus={() => setFocusedField("country")}
                                onBlur={() => setFocusedField(null)}
                              >
                                <option value="" disabled>
                                  Select Country
                                </option>
                                {countries.map((c) => (
                                  <option
                                    key={c}
                                    value={c}
                                    style={{
                                      background: "#1a1a1a",
                                      color: "#fff",
                                    }}
                                  >
                                    {c}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown
                                style={{
                                  position: "absolute",
                                  right: "14px",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  width: 14,
                                  height: 14,
                                  color: "rgba(255,255,255,0.25)",
                                  pointerEvents: "none",
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <label style={labelBase}>
                              Product{" "}
                              <span style={{ color: "#D4AF37" }}>*</span>
                            </label>
                            <div style={{ position: "relative" }}>
                              <select
                                name="product"
                                required
                                defaultValue=""
                                style={{
                                  ...getFieldStyle("product"),
                                  appearance: "none",
                                  cursor: "pointer",
                                  paddingRight: "40px",
                                }}
                                onFocus={() => setFocusedField("product")}
                                onBlur={() => setFocusedField(null)}
                              >
                                <option value="" disabled>
                                  Select Product
                                </option>
                                {products.map((p) => (
                                  <option
                                    key={p.id}
                                    value={p.name}
                                    style={{
                                      background: "#1a1a1a",
                                      color: "#fff",
                                    }}
                                  >
                                    {p.name}
                                  </option>
                                ))}
                                <option
                                  value="Multiple / Custom Blend"
                                  style={{
                                    background: "#1a1a1a",
                                    color: "#fff",
                                  }}
                                >
                                  Multiple / Custom Blend
                                </option>
                              </select>
                              <ChevronDown
                                style={{
                                  position: "absolute",
                                  right: "14px",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  width: 14,
                                  height: 14,
                                  color: "rgba(255,255,255,0.25)",
                                  pointerEvents: "none",
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label style={labelBase}>
                            Message{" "}
                            <span style={{ color: "#D4AF37" }}>*</span>
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={3}
                            placeholder="Quantity, packaging preferences, destination port..."
                            style={{
                              ...getFieldStyle("message"),
                              resize: "none",
                              minHeight: "80px",
                            }}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>

                        {/* Divider + Submit */}
                        <div
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            paddingTop: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                          }}
                        >
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                              width: "100%",
                              padding: "15px 24px",
                              background: isSubmitting
                                ? "rgba(212,175,55,0.7)"
                                : "#D4AF37",
                              color: "#0A0A0A",
                              border: "none",
                              borderRadius: "3px",
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              cursor: isSubmitting ? "not-allowed" : "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "10px",
                              transition: "background 0.3s, transform 0.2s",
                              fontFamily: "inherit",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.background = "#b8961f";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.background = "#D4AF37";
                              }
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <div
                                  style={{
                                    width: "14px",
                                    height: "14px",
                                    border: "2px solid rgba(10,10,10,0.2)",
                                    borderTopColor: "#0A0A0A",
                                    borderRadius: "50%",
                                    animation: "spin 0.6s linear infinite",
                                  }}
                                />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Send size={14} />
                                Send Request
                              </>
                            )}
                          </button>

                          <p
                            style={{
                              textAlign: "center",
                              fontSize: "11px",
                              color: "rgba(255,255,255,0.2)",
                              margin: 0,
                              lineHeight: 1.5,
                            }}
                          >
                            🔒 Your information is secure and never shared.
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
