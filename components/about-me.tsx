"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <motion.section
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-4">
          Hello! I'm John Doe, a passionate full-stack developer with over 5 years of experience in creating web
          applications. I specialize in JavaScript technologies, particularly React and Node.js.
        </p>
        <p className="mb-4">
          My journey in tech started when I built my first website at the age of 15. Since then, I've been constantly
          learning and evolving my skills to keep up with the ever-changing landscape of web development.
        </p>
        <p>
          When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new
          cooking recipes. I believe in the power of technology to solve real-world problems and I'm always excited to
          take on new challenges.
        </p>
      </div>
    </motion.section>
  )
}

