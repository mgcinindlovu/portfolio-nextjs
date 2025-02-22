import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications tailored to your business needs.",
    details:
      "Using modern frameworks like React and Next.js, I create responsive and performant web applications that provide an excellent user experience.",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications.",
    details:
      "I develop mobile apps for iOS and Android using React Native, ensuring a native feel with the efficiency of cross-platform development.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design for web and mobile interfaces.",
    details:
      "I create intuitive and aesthetically pleasing user interfaces, focusing on user experience to ensure your product is both beautiful and functional.",
  },
  {
    title: "API Development",
    description: "Robust and scalable API solutions.",
    details:
      "I design and implement RESTful APIs and GraphQL services that are secure, efficient, and easy to integrate with various front-end applications.",
  },
  {
    title: "Database Design",
    description: "Efficient database structures for your data needs.",
    details:
      "From relational databases to NoSQL solutions, I create optimized database designs that ensure data integrity and fast query performance.",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment.",
    details:
      "I provide cloud solutions using AWS, Google Cloud, or Azure, including serverless architectures, containerization, and CI/CD pipeline setup.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

