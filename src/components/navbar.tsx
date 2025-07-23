"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Menu, VibrateIcon as Volleyball } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/teams", label: "Teams" },
    { href: "/schedule", label: "Schedule" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/store", label: "Store" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/news", label: "News" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Volleyball className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-gray-900">Patriot VBC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-red-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-gray-700 hover:text-red-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
