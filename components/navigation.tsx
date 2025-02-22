"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav
      className="py-4 px-8 sticky top-0 bg-background/80 backdrop-blur-sm z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex justify-center space-x-4 md:space-x-8 flex-wrap">
        {links.map((link) => (
          <motion.li key={link.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link.href}
              className={`text-sm md:text-lg ${pathname === link.href ? "text-primary font-bold" : "text-muted-foreground"} hover:text-primary transition-colors relative group`}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                initial={{ width: "0%" }}
                animate={{ width: pathname === link.href ? "100%" : "0%" }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

