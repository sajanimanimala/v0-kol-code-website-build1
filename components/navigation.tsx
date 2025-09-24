"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="bg-white border-b-2 border-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/images/kolcode-logo.png" alt="KolCode" className="h-8 w-auto" />
          </Link>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors duration-200 font-medium",
                  pathname === item.href && "text-primary border-b-2 border-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
