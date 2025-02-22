"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  velocity: { x: number; y: number }
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const particleCount = 50
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
      })
    }

    setParticles(newParticles)

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: (particle.x + particle.velocity.x + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.velocity.y + window.innerHeight) % window.innerHeight,
        })),
      )
    }

    const intervalId = setInterval(animateParticles, 50)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600"
        animate={{
          background: [
            "linear-gradient(to bottom right, #60A5FA, #7C3AED)",
            "linear-gradient(to bottom right, #34D399, #3B82F6)",
            "linear-gradient(to bottom right, #F472B6, #9333EA)",
            "linear-gradient(to bottom right, #60A5FA, #7C3AED)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            x: particle.x,
            y: particle.y,
          }}
          animate={{ x: particle.x, y: particle.y }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      ))}
    </div>
  )
}

