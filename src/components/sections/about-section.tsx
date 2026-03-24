"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Globe,
  Shield,
  Leaf,
  Box,
  Award,
  Truck,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#1F7A6E]" />,
      title: "Global Reach",
      description:
        "We export premium Indian spices to over 40+ countries across 5 continents, navigating international logistics flawlessly to ensure timely deliveries.",
      position: "left",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#1F7A6E]" />,
      title: "Quality Assured",
      description:
        "Every batch passes rigorous lab testing. We are FSSAI, ISO 22000, and HACCP certified, ensuring the highest food safety standards globally.",
      position: "left",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#1F7A6E]" />,
      title: "Farm Fresh",
      description:
        "We source directly from premium Indian farms, preserving the authentic aroma, flavor, and natural oils of our spices from harvest to export.",
      position: "left",
    },
    {
      icon: <Box className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#1F7A6E]" />,
      title: "Custom Packaging",
      description:
        "From bulk containers to customized retail packaging, we offer flexible packing solutions designed perfectly for your unique market requirements.",
      position: "right",
    },
    {
      icon: <Award className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#1F7A6E]" />,
      title: "15+ Years Legacy",
      description:
        "Over a decade of unbroken trust in the international spice trade, building lasting relationships with major global food manufacturers.",
      position: "right",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#1F7A6E]" />,
      title: "End-to-End Logistics",
      description:
        "We manage the entire supply chain—from origin sourcing to customs clearance and final destination delivery, ensuring peace of mind.",
      position: "right",
    },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full section-padding px-4 bg-gradient-to-b from-[#F8F9F8] to-[#FFFFFF] text-[#0A0A0A] overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#1F7A6E]/5 blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#D4AF37]/30 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#1F7A6E]/30 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container-main relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-[#D4AF37] font-medium mb-2 flex items-center gap-2 text-xs tracking-widest uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#0A0A0A] font-heading tracking-tight">
            A Legacy of <span className="text-[#1F7A6E]">Premium Spices</span>
          </h2>
          <motion.div
            className="w-24 h-[2px] bg-[#D4AF37]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-20 text-[#6B7280] leading-relaxed text-[1.05rem]" variants={itemVariants}>
          We are a principal Indian export company headquartered in Mumbai. We bridge the gap between India&apos;s finest farms and businesses worldwide, dedicated to delivering authentic flavor, rigorous quality, and unbroken trust in every shipment.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24 relative">
          {/* Left Column */}
          <div className="flex-1 w-full space-y-12 lg:space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="lg:w-[360px] xl:w-[400px] w-full max-w-sm flex justify-center order-first lg:order-none mb-12 lg:mb-0 z-20 shrink-0">
            <motion.div className="relative w-full" variants={itemVariants}>
              <motion.div
                className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[3/4] lg:aspect-[4/5] w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/images/about-spices-tall.png"
                  alt="Premium Indian Spices"
                  fill
                  className="w-full h-full object-cover"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link href="/products">
                    <motion.button
                      className="bg-white text-[#0A0A0A] px-5 py-3 rounded-full flex items-center gap-2 text-sm font-semibold tracking-wider hover:bg-[#D4AF37] hover:text-white transition-colors uppercase shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Our Products <ArrowRight className="w-4 h-4 pl-1" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-[2rem] -m-3 lg:-m-5 z-[-1] pointer-events-none"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-6 lg:-right-10 w-16 h-16 rounded-full bg-[#D4AF37]/15 pointer-events-none blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-8 lg:-left-12 w-20 h-20 rounded-full bg-[#1F7A6E]/20 pointer-events-none blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full space-y-12 lg:space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          ref={statsRef}
          className="mt-32 p-10 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #0F2F2A 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white font-heading tracking-tight">Ready to export premium spices globally?</h3>
            <p className="text-white/80 text-base md:text-lg">Partner with Mova Logistics for uncompromised quality.</p>
          </div>
          <Link href="/contact" className="relative z-10">
            <motion.button
              className="bg-[#D4AF37] hover:bg-white text-[#0A0A0A] px-8 py-4 rounded-xl flex items-center gap-3 font-bold uppercase tracking-wider text-sm transition-colors shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="w-5 h-5 ml-1" />
            </motion.button>
          </Link>
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>

      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: any
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center gap-4 group"
      variants={variants}
      transition={{ delay }}
    >
      <motion.div
        className="shrink-0"
        initial={{ y: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <div className="text-[#D4AF37] bg-[#D4AF37]/10 p-4 rounded-2xl transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-white relative shadow-sm border border-[#D4AF37]/20 inline-flex">
          {icon}
          {secondaryIcon}
        </div>
      </motion.div>
      
      <motion.div
        className="flex flex-col flex-1 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        <h3 className="text-[1.15rem] font-bold text-[#0A0A0A] group-hover:text-[#1F7A6E] transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="text-[0.9rem] lg:text-[0.95rem] text-[#6B7280] leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  )
}
