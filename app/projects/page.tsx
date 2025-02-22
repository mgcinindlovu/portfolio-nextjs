import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe.",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "This project showcases a modern e-commerce platform with features like product listing, cart functionality, secure checkout, and order management. It utilizes Next.js for server-side rendering and Stripe for payment processing.",
  },
  {
    title: "Task Management App",
    description: "A React-based task manager with real-time updates using Firebase.",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "This application allows users to create, assign, and track tasks in real-time. It features user authentication, task categorization, due date reminders, and collaborative features. The app uses React for the frontend and Firebase for backend services and real-time database.",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard using OpenWeatherMap API and Chart.js.",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "This dashboard provides users with current weather information and forecasts for multiple locations. It features interactive charts for temperature, humidity, and wind speed trends. The app is built with vanilla JavaScript and uses the OpenWeatherMap API for data and Chart.js for visualizations.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p>{project.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

