"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Code2, Zap, Shield, Rocket } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25"
            >
              <Rocket className="h-4 w-4" />
              Building & Rescuing Software Since 2018
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Build{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Exceptional
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 -z-10"
                />
              </span>
              <br />
              Software Faster
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
              From MVPs to enterprise solutions—and rescuing abandoned projects. We deliver custom software that drives real business growth.
            </p>

            {/* Value Props with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "14-Day MVP Launch", color: "from-yellow-500 to-orange-500" },
                { icon: Shield, text: "Software Rescue Experts", color: "from-blue-500 to-indigo-500" },
                { icon: Code2, text: "Clean, Scalable Code", color: "from-purple-500 to-pink-500" },
                { icon: CheckCircle2, text: "Transparent Process", color: "from-green-500 to-emerald-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`bg-gradient-to-br ${item.color} p-2 rounded-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button asChild size="xl" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 text-lg">
                <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
                  Schedule Free Consultation
                </a>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
                ].map((src, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-4 border-white shadow-md overflow-hidden">
                    <Image
                      src={src}
                      alt={`Client ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-lg">
                  {"★".repeat(5)}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">5.0 rating</span> from 50+ happy clients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main image card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                <div className="relative h-[600px]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                    alt="Team collaborating on software development"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">14 Days</p>
                  <p className="text-sm text-gray-600">Average MVP Launch</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
