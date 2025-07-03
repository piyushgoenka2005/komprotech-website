"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle, Users, Code, TrendingUp, Sparkles } from "lucide-react"

export function Hero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { icon: Code, value: "100+", label: "Projects Delivered", color: "text-blue-500" },
    { icon: Users, value: "50+", label: "Happy Clients", color: "text-green-500" },
    { icon: TrendingUp, value: "24/7", label: "Support Available", color: "text-purple-500" },
  ]

  const highlights = [
    "Fast, reliable tech products",
    "AI-driven systems", 
    "Scalable growth solutions"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-16 bg-white dark:bg-gray-950 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="flex items-center justify-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 theme-primary-bg rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Work for us means Work for others</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Revolutionizing Tech Product{" "}
            <span className="theme-primary bg-gradient-to-r from-current to-current bg-clip-text">
              Delivery
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            At Komprotech, we transform innovative ideas into powerful software solutions that enhance digital workflows and drive scalable growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="theme-primary-bg hover:theme-accent-bg text-white px-8 py-4 h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 px-8 py-4 h-14 text-lg font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group ${
                    currentStat === index ? "ring-2 ring-blue-200 dark:ring-blue-800 scale-105 shadow-lg" : ""
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      currentStat === index ? "theme-gradient" : ""
                    }`}>
                      <Icon className={`h-8 w-8 transition-colors duration-300 ${
                        currentStat === index ? "text-white" : "text-gray-600 dark:text-gray-400"
                      }`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                    currentStat === index ? "theme-primary" : "text-gray-900 dark:text-white"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 -right-20 w-96 h-96 theme-gradient rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-full blur-3xl"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
