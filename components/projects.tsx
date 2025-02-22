import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description: "A React-based task manager with real-time updates using Firebase.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard using OpenWeatherMap API and Chart.js.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

