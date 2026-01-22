"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Mail, Zap, Users, Star } from "lucide-react"

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      </div>

      {/* Animated shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10 max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-semibold">
              🎯 Let's Start Your Project
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Ready to Build<br />Something Amazing?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Whether you need a new MVP, want to rescue a stalled project, or need expert developers on your team—we're here to help.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild size="xl" className="group bg-white text-blue-600 hover:bg-gray-50 shadow-2xl text-lg">
              <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg">
              <a href="mailto:austin@elcodev.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us Directly
              </a>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Zap, value: "14 Days", label: "Average MVP Launch", color: "from-yellow-400 to-orange-400" },
              { icon: Users, value: "50+", label: "Projects Completed", color: "from-blue-400 to-indigo-400" },
              { icon: Star, value: "5.0★", label: "Client Rating", color: "from-pink-400 to-purple-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-4xl font-extrabold text-white mb-2">{stat.value}</p>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
