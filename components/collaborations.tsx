"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Lightbulb, Rocket, Users, ArrowRight, Star } from "lucide-react"

export function Collaborations() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const collaborationTypes = [
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Long-term collaborations for mutual growth",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description: "Collaborative spaces for breakthrough ideas",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Rocket,
      title: "Startup Support",
      description: "Technical expertise for emerging companies",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Scalable solutions for large organizations",
      color: "from-orange-500 to-red-500",
    },
  ]

  const ideaFeatures = [
    "Comprehensive technical consultation",
    "Flexible partnership models",
    "End-to-end development support",
    "Ongoing maintenance and scaling",
  ]

  const partnershipFeatures = [
    "Revenue sharing opportunities",
    "Joint venture possibilities",
    "White-label solutions",
    "Technology licensing",
  ]

  return (
    <section
      id="collaborations"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-300 to-red-300 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-300 to-cyan-300 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Collaborations & Partnerships</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're always looking for innovative minds and game-changing ideas. Partner with us to develop cutting-edge
            software solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {collaborationTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <Card
                key={index}
                className={`text-center p-6 transition-all duration-700 transform hover:scale-105 cursor-pointer group relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardContent className="pt-6 relative z-10">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card
            className={`p-8 relative overflow-hidden group transition-all duration-700 hover:shadow-2xl ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <CardTitle className="text-2xl text-gray-900 mb-4">Have a Game-Changing Idea?</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're passionate about transforming innovative concepts into reality. Whether you're an entrepreneur,
                startup, or established business, we want to hear about your vision and explore how we can bring it to
                life together.
              </p>
              <ul className="space-y-3 mb-6">
                {ideaFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                    }`}
                    style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Submit Your Idea
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className={`p-8 relative overflow-hidden group transition-all duration-700 hover:shadow-2xl ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <CardTitle className="text-2xl text-gray-900 mb-4">Looking for Technical Partners?</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our network of collaborators and leverage our technical expertise to accelerate your projects. We
                offer various partnership models designed to meet your specific needs and business objectives.
              </p>
              <ul className="space-y-3 mb-6">
                {partnershipFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                    }`}
                    style={{ transitionDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 hover:border-blue-300 w-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Explore Partnerships
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
