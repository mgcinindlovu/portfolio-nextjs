"use client"

import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedElement from "@/components/animated-element"

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A React-based task manager with real-time updates using Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard using OpenWeatherMap API and Chart.js.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Social Media Analytics Tool",
    description: "A data visualization tool for social media metrics using D3.js and Node.js.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "A React Native app for tracking workouts and nutrition with cloud sync.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "AI-powered Chatbot",
    description: "A customer service chatbot using natural language processing and machine learning.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <AnimatedElement>
          <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Card className="flex flex-col h-full overflow-hidden group">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="relative overflow-hidden mb-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                          asChild
                        >
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </section>
    </main>
  )
}

