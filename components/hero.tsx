"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Zap, TrendingUp, Users, Code } from "lucide-react"

export function Hero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { icon: Code, value: "100+", label: "Projects Delivered", color: "text-orange-500" },
    { icon: Users, value: "50+", label: "Happy Clients", color: "text-green-500" },
    { icon: TrendingUp, value: "24/7", label: "Support Available", color: "text-blue-500" },
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
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6 animate-fade-in-up">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-orange-100">
              <Zap className="h-5 w-5 text-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Work for us means Work for others</span>
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Revolutionizing Tech Product Delivery –
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 animate-gradient">
              {" "}
              Bringing Ideas to Life!
            </span>
          </h1>

          <p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            At Komprotech, we transform innovative ideas into powerful software solutions. Our mission is to deliver
            fast, reliable tech products that enhance digital workflows and drive scalable growth through AI-driven
            systems.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              onClick={() => scrollToSection("services")}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/80 backdrop-blur-sm text-gray-900 border-gray-300 hover:bg-white hover:shadow-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 group"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
              <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="mt-16 relative animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className={`text-center transform transition-all duration-500 ${
                      currentStat === index ? "scale-110" : "scale-100 opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Icon className={`h-8 w-8 ${stat.color} ${currentStat === index ? "animate-bounce" : ""}`} />
                    </div>
                    <div
                      className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                        currentStat === index ? stat.color : "text-orange-500"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Floating Action Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
