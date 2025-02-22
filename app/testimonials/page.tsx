import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Jane Smith",
    position: "CEO, Tech Innovators",
    content:
      "John's expertise in web development has been instrumental in the success of our projects. His ability to understand complex requirements and deliver elegant solutions is unparalleled.",
  },
  {
    name: "Mike Johnson",
    position: "CTO, DataDrive Solutions",
    content:
      "Working with John was a game-changer for our startup. His full-stack skills and attention to detail helped us launch our MVP ahead of schedule.",
  },
  {
    name: "Sarah Lee",
    position: "Product Manager, EcoTech",
    content:
      "John's commitment to quality and user experience is evident in every project he touches. He's not just a developer, but a true partner in product development.",
  },
  {
    name: "Alex Chen",
    position: "Founder, AI Innovations",
    content:
      "John's expertise in AI and machine learning integration in web applications has given us a significant edge in the market. His work is nothing short of exceptional.",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

