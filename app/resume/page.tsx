import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">John Doe</h1>
          <p className="mb-4">Full Stack Developer | john.doe@email.com | (123) 456-7890</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Summary</h2>
          <p>
            Experienced Full Stack Developer with a strong background in building scalable web applications using modern
            JavaScript frameworks and cloud technologies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li>JavaScript, TypeScript, React, Node.js, Express</li>
            <li>HTML5, CSS3, Sass, Tailwind CSS</li>
            <li>MongoDB, PostgreSQL, Redis</li>
            <li>AWS, Docker, CI/CD, Git</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Senior Full Stack Developer - Tech Innovators Inc.</h3>
            <p className="italic">January 2020 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led the development of a high-traffic e-commerce platform using Next.js and Node.js</li>
              <li>Implemented real-time features using WebSockets, improving user engagement by 40%</li>
              <li>Optimized database queries and implemented caching strategies, reducing load times by 60%</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p>University of Technology, Graduated 2015</p>
          </div>
        </div>
      </section>
    </main>
  )
}

