"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, LifeBuoy, Users } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies. From enterprise solutions to startup MVPs.",
    features: ["Next.js & React", "Full-Stack Development", "API Integration", "Database Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    features: ["iOS & Android", "React Native", "App Store Launch", "Push Notifications"],
  },
  {
    icon: LifeBuoy,
    title: "Software Rescue",
    description: "Stuck with an abandoned or failing project? We specialize in rescuing stalled projects and getting them across the finish line.",
    features: ["Code Assessment", "Bug Fixes", "Feature Completion", "Launch Support"],
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Strengthen your team with experienced developers who integrate seamlessly with your existing workflow.",
    features: ["Flexible Engagement", "Expert Developers", "Quick Onboarding", "No Overhead"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:32px_32px]" />
      
      <div className="container mx-auto relative z-10 max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const gradients = [
              "from-blue-500 to-indigo-500",
              "from-purple-500 to-pink-500",
              "from-orange-500 to-red-500",
              "from-green-500 to-emerald-500",
            ]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <span className="w-2 h-2 bg-blue-600 rounded-full" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">Ready to discuss your project?</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
            <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
