"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, ChevronDown } from "lucide-react";
import { products } from "@/src/data/products";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  country: z.string().min(2, "Country is required"),
  phone: z.string().min(5, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  productInterested: z.string().min(1, "Please select a product"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid rgba(10,10,10,0.1)",
  borderRadius: "2px",
  background: "#F8F9F8",
  color: "#0A0A0A",
  fontSize: "14px",
  lineHeight: 1.5,
  outline: "none",
  transition: "border-color 0.25s, box-shadow 0.25s",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#0A0A0A",
  marginBottom: "8px",
};

const errorStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#DC2626",
  marginTop: "6px",
  display: "block",
};

export function ExportInquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.companyName,
          country: data.country,
          product: data.productInterested,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry");
      }

      setIsSubmitted(true);
      reset();
      // Keep success message visible for 6 seconds
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error("Submission error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const getFocusStyle = (name: string): React.CSSProperties => ({
    ...fieldStyle,
    borderColor: focusedField === name ? "#D4AF37" : errors[name as keyof InquiryFormData] ? "#DC2626" : "rgba(10,10,10,0.1)",
    boxShadow: focusedField === name ? "0 0 0 3px rgba(212,175,55,0.08)" : "none",
  });

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ textAlign: "center", padding: "60px 20px" }}
          >
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "rgba(31,122,110,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <CheckCircle style={{ width: 36, height: 36, color: "#1F7A6E" }} />
            </div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "24px",
              fontWeight: 700,
              color: "#0A0A0A",
              marginBottom: "10px",
            }}>
              Inquiry Submitted!
            </h3>
            <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Our export team will review your inquiry and respond within 24 business hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Row 1: Name + Company */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }} className="max-sm:!grid-cols-1">
              <div>
                <label style={labelStyle}>
                  Full Name <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  {...register("name")}
                  placeholder="Your full name"
                  style={getFocusStyle("name")}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
              </div>
              <div>
                <label style={labelStyle}>
                  Company Name <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  {...register("companyName")}
                  placeholder="Your company"
                  style={getFocusStyle("companyName")}
                  onFocus={() => setFocusedField("companyName")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.companyName && <span style={errorStyle}>{errors.companyName.message}</span>}
              </div>
            </div>

            {/* Row 2: Country + Phone */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }} className="max-sm:!grid-cols-1">
              <div>
                <label style={labelStyle}>
                  Country <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  {...register("country")}
                  placeholder="Your country"
                  style={getFocusStyle("country")}
                  onFocus={() => setFocusedField("country")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.country && <span style={errorStyle}>{errors.country.message}</span>}
              </div>
              <div>
                <label style={labelStyle}>
                  Phone <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  {...register("phone")}
                  placeholder="+1 234 567 890"
                  style={getFocusStyle("phone")}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.phone && <span style={errorStyle}>{errors.phone.message}</span>}
              </div>
            </div>

            {/* Row 3: Email + Product */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }} className="max-sm:!grid-cols-1">
              <div>
                <label style={labelStyle}>
                  Email <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  style={getFocusStyle("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
              </div>
              <div>
                <label style={labelStyle}>
                  Product Interested <span style={{ color: "#D4AF37" }}>*</span>
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    {...register("productInterested")}
                    style={{
                      ...getFocusStyle("productInterested"),
                      appearance: "none",
                      cursor: "pointer",
                      paddingRight: "40px",
                    }}
                    onFocus={() => setFocusedField("productInterested")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="multiple">Multiple Products</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown style={{
                    position: "absolute",
                    right: "14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 16,
                    height: 16,
                    color: "#9CA3AF",
                    pointerEvents: "none",
                  }} />
                </div>
                {errors.productInterested && <span style={errorStyle}>{errors.productInterested.message}</span>}
              </div>
            </div>

            {/* Row 4: Message */}
            <div style={{ marginBottom: "28px" }}>
              <label style={labelStyle}>
                Message <span style={{ color: "#D4AF37" }}>*</span>
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about your requirements, desired quantities, packaging preferences..."
                style={{
                  ...getFocusStyle("message"),
                  resize: "vertical",
                  minHeight: "120px",
                }}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
              {errors.message && <span style={errorStyle}>{errors.message.message}</span>}
            </div>

            {/* Separator */}
            <div style={{
              borderTop: "1px solid rgba(10,10,10,0.06)",
              paddingTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}>
              <p style={{
                fontSize: "12px",
                color: "#9CA3AF",
                margin: 0,
                lineHeight: 1.6,
                maxWidth: "280px",
              }}>
                Your information is private and will only be used to respond to your inquiry.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  minWidth: "180px",
                  justifyContent: "center",
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "14px",
                      height: "14px",
                      border: "2px solid rgba(10,10,10,0.2)",
                      borderTopColor: "#0A0A0A",
                      borderRadius: "50%",
                      animation: "spin 0.6s linear infinite",
                    }} />
                    Submitting...
                  </span>
                ) : (
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Send style={{ width: 14, height: 14 }} />
                    Submit Inquiry
                  </span>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
