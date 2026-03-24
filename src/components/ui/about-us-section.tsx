"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => setIsVisible(true), [])

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
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-[#A9BBC8]" />,
      title: "Interior",
      description:
        "Transform your living spaces with our expert interior design services. We blend functionality and aesthetics to create spaces that reflect your unique style and personality.",
      position: "left",
    },
    {
      icon: <Home className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="absolute -top-1 -right-1 h-4 w-4 text-[#A9BBC8]" />,
      title: "Exterior",
      description:
        "Make a lasting impression with stunning exterior designs that enhance curb appeal and create harmonious connections between architecture and landscape.",
      position: "left",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: <Star className="absolute -top-1 -right-1 h-4 w-4 text-[#A9BBC8]" />,
      title: "Design",
      description:
        "Our innovative design process combines creativity with practicality, resulting in spaces that are both beautiful and functional for everyday living.",
      position: "left",
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-[#A9BBC8]" />,
      title: "Decoration",
      description:
        "Elevate your space with our curated decoration services. From color schemes to textiles and accessories, we perfect every detail to bring your vision to life.",
      position: "right",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="absolute -top-1 -right-1 h-4 w-4 text-[#A9BBC8]" />,
      title: "Planning",
      description:
        "Our meticulous planning process ensures every project runs smoothly from concept to completion, with careful attention to timelines, budgets, and requirements.",
      position: "right",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: <Star className="absolute -top-1 -right-1 h-4 w-4 text-[#A9BBC8]" />,
      title: "Execution",
      description:
        "Watch your dream space come to life through our flawless execution. Our skilled team handles every aspect of implementation with precision and care.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 150, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-b from-[#F2F2EB] via-[#F6F6EF] to-[#F8F8F2] py-24 text-[#202e44] md:py-28 xl:py-32"
    >
      <motion.div
        className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#88734C]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-[#A9BBC8]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-[#88734C]/30"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-6 w-6 rounded-full bg-[#A9BBC8]/30"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="container-main relative z-10"
        initial="hidden"
        animate={isVisible && isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mb-8 flex flex-col items-center" variants={itemVariants}>
          <motion.span
            className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-[#88734C]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="h-4 w-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="mb-4 text-center text-[2.3rem] font-semibold leading-tight tracking-tight md:text-[3.2rem]">
            About Us
          </h2>
          <motion.div
            className="h-[3px] w-24 rounded-full bg-[#88734C]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="mx-auto mb-16 max-w-3xl text-center text-base leading-8 text-[#202e44]/80 md:mb-20 md:text-lg"
          variants={itemVariants}
        >
          We are a passionate team of designers and architects dedicated to creating beautiful, functional spaces that
          inspire and elevate everyday living. With attention to detail and commitment to excellence, we transform
          visions into reality.
        </motion.p>

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-12 items-center">
          <div className="space-y-10 md:space-y-12 xl:space-y-14">
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

          <div className="order-first mb-10 flex items-center justify-center lg:order-0 lg:mb-0">
            <motion.div className="relative w-full max-w-[360px]" variants={itemVariants}>
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-[0_30px_90px_rgba(32,46,68,0.18)]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-4/6 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1747582411588-f9b4acabe995?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Modern House"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 320px"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-[#202e44]/50 to-transparent p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#202e44]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Portfolio <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 -m-3 rounded-2xl border-2 border-[#A9BBC8]/70 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.div
                className="absolute -top-4 -right-8 h-16 w-16 rounded-full bg-[#88734C]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 h-20 w-20 rounded-full bg-[#A9BBC8]/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />

              <motion.div
                className="absolute -top-10 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#88734C]"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-12 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#A9BBC8]"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>

          <div className="space-y-10 md:space-y-12 xl:space-y-14">
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

        <motion.div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#202e44] p-8 text-white md:mt-20 md:flex-row md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-medium">Ready to transform your space?</h3>
            <p className="text-white/80">Let&apos;s create something beautiful together.</p>
          </div>
          <motion.button
            className="flex items-center gap-2 rounded-lg bg-[#88734C] px-6 py-3 font-medium text-white transition-colors hover:bg-[#88734C]/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </motion.button>
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
      className="group flex flex-col items-center text-center rounded-2xl border border-[#202e44]/10 bg-white/70 p-5 shadow-[0_8px_32px_rgba(32,46,68,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#88734C]/40 hover:shadow-[0_14px_40px_rgba(32,46,68,0.12)] md:p-6"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="mb-4 flex flex-col items-center gap-3"
        initial={{ y: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="relative rounded-2xl bg-[#88734C]/10 p-4 text-[#88734C] transition-colors duration-300 group-hover:bg-[#88734C] group-hover:text-white"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-semibold text-[#202e44] transition-colors duration-300 group-hover:text-[#88734C]">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm leading-relaxed text-[#202e44]/80 md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
      return
    }

    if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="group flex flex-col items-center rounded-2xl border border-[#202e44]/10 bg-white/70 p-6 text-center shadow-[0_8px_28px_rgba(32,46,68,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white md:p-7"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#202e44]/5 text-[#88734C] transition-colors duration-300 group-hover:bg-[#88734C]/10"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="flex items-center text-3xl font-bold text-[#202e44]">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="mt-1 text-sm text-[#202e44]/70">{label}</p>
      <motion.div className="mt-3 h-0.5 w-10 bg-[#88734C] transition-all duration-300 group-hover:w-16" />
    </motion.div>
  )
}
