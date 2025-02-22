import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "2023-06-15",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    content:
      "In this post, we dive deep into the emerging trends that are shaping the future of web development. From WebAssembly to Edge Computing, we explore how these technologies are changing the way we build and deploy web applications.",
  },
  {
    title: "Mastering React Hooks",
    date: "2023-05-22",
    excerpt: "A comprehensive guide to using React Hooks effectively.",
    content:
      "React Hooks have revolutionized the way we write React components. This article provides a detailed look at how to use hooks like useState, useEffect, and useContext to create more efficient and readable React code.",
  },
  {
    title: "Building Scalable Node.js Applications",
    date: "2023-04-10",
    excerpt: "Best practices for creating large-scale Node.js apps.",
    content:
      "As Node.js applications grow in size and complexity, it becomes crucial to follow best practices for scalability. This post covers topics such as modular architecture, caching strategies, and database optimization to help you build robust Node.js applications.",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.excerpt}</p>
                <p>{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

