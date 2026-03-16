"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

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
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Message Sent!
            </h3>
            <p className="text-[#6B7280]">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                Full Name
              </label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F8F9F8] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                placeholder="Your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F8F9F8] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F8F9F8] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
                  placeholder="+1 234 567 890"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 bg-[#F8F9F8] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
