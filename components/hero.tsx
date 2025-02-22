"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedElement from "./animated-element"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      <AnimatedElement>
        <motion.h1
          className="text-4xl font-bold mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          John Doe
        </motion.h1>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <h2 className="text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
      </AnimatedElement>
      <AnimatedElement delay={0.4}>
        <p className="max-w-2xl mb-8">
          Passionate about creating elegant solutions to complex problems. With expertise in React, Node.js, and cloud
          technologies, I build scalable and user-friendly applications.
        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.6}>
        <motion.div className="flex space-x-4" whileHover={{ scale: 1.05 }}>
          <Button variant="outline" size="icon" className="hover:rotate-12 transition-transform">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:-rotate-12 transition-transform">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:rotate-12 transition-transform">
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>
      </AnimatedElement>
    </section>
  )
}

