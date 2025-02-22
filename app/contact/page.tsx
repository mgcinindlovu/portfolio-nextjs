import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              I'd love to hear from you. Whether you have a question about my services or just want to say hello, feel
              free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

