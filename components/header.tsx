"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navigationItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Why Choose Us", href: "why-choose-us" },
    { name: "Pricing", href: "pricing" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 theme-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:theme-primary transition-colors duration-300">
              Komprotech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:theme-primary font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 theme-primary-bg group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeSwitcher />
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="theme-primary-bg hover:theme-accent-bg text-white px-6 py-2 h-10 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeSwitcher />
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-80 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 theme-gradient rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">K</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Komprotech
                    </span>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 group"
                    >
                      <span className="group-hover:theme-primary transition-colors duration-300">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full theme-primary-bg hover:theme-accent-bg text-white px-6 py-3 h-12 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
