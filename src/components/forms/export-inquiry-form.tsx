"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
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

export function ExportInquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Export inquiry:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F8F9F8] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all text-sm";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-[#1F7A6E]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#1F7A6E]" />
            </div>
            <h3
              className="text-2xl font-bold text-[#0A0A0A] mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Inquiry Submitted!
            </h3>
            <p className="text-[#6B7280]">
              Our export team will review your inquiry and respond within 24 business hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Full Name *
                </label>
                <input {...register("name")} className={inputClass} placeholder="Your full name" />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Company Name *
                </label>
                <input {...register("companyName")} className={inputClass} placeholder="Your company" />
                {errors.companyName && <span className="text-red-500 text-xs mt-1">{errors.companyName.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Country *
                </label>
                <input {...register("country")} className={inputClass} placeholder="Your country" />
                {errors.country && <span className="text-red-500 text-xs mt-1">{errors.country.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Phone *
                </label>
                <input {...register("phone")} className={inputClass} placeholder="+1 234 567 890" />
                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Email *
                </label>
                <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Product Interested *
                </label>
                <select {...register("productInterested")} className={inputClass}>
                  <option value="">Select a product</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="multiple">Multiple Products</option>
                  <option value="other">Other</option>
                </select>
                {errors.productInterested && <span className="text-red-500 text-xs mt-1">{errors.productInterested.message}</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                Message *
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your requirements, desired quantities, packaging preferences..."
              />
              {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
