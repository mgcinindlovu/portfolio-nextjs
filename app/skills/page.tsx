"use client"

import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import AnimatedElement from "@/components/animated-element"
import { useState } from "react"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 75 },
  { name: "GraphQL", level: 65 },
  { name: "Docker", level: 60 },
  { name: "AWS", level: 70 },
  { name: "CI/CD", level: 65 },
]

export default function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <AnimatedElement>
          <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
        </AnimatedElement>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <motion.div
                className="space-y-2"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full h-2" />
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-muted-foreground"
                  >
                    {getSkillDescription(skill.name)}
                  </motion.div>
                )}
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </section>
    </main>
  )
}

function getSkillDescription(skillName: string): string {
  // Add descriptions for each skill
  const descriptions: { [key: string]: string } = {
    JavaScript: "Proficient in modern ES6+ syntax and async programming.",
    React: "Experienced with hooks, context, and state management libraries.",
    "Node.js": "Building scalable backend services and RESTful APIs.",
    TypeScript: "Leveraging static typing for more robust code.",
    Python: "Data analysis, scripting, and backend development.",
    SQL: "Designing efficient database schemas and writing complex queries.",
    GraphQL: "Creating flexible and efficient APIs.",
    Docker: "Containerizing applications for consistent deployment.",
    AWS: "Utilizing various AWS services for cloud-native applications.",
    "CI/CD": "Setting up automated testing and deployment pipelines.",
  }
  return descriptions[skillName] || "Expanding my expertise in this technology."
}

