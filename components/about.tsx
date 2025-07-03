"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, TrendingUp, Users, CheckCircle, Quote } from "lucide-react"

export function About() {
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

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Transforming creative ideas into powerful software solutions that drive real business value.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast and reliable tech product delivery that exceeds expectations and meets deadlines.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "AI-driven systems that grow with your business needs and adapt to market changes.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results through transparent communication.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const missionPoints = [
    "Bringing innovative ideas to life through seamless software solutions",
    "Enhancing digital workflows with cutting-edge technology",
    "Providing scalable, efficient systems that empower businesses",
    "Delivering fast and reliable tech product solutions",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Komprotech
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            We are innovators at heart, committed to bringing ideas to life through cutting-edge software solutions. Our
            focus on seamless execution and digital workflow enhancement drives us to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: isVisible ? `${index * 0.1}s` : "0s",
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:theme-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 theme-primary-bg rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mission</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  To revolutionize tech product delivery by bringing innovative ideas to life through seamless
                  software solutions. We are committed to enhancing digital workflows and providing scalable,
                  efficient systems that empower businesses to thrive.
                </p>
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vision</h3>
                </div>
                
                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-300 dark:text-gray-600" />
                  <blockquote className="text-2xl font-bold theme-primary italic ml-6 mb-4">
                    "Work for us means Work for others"
                  </blockquote>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We envision a world where technology serves humanity, where every solution we create contributes to
                  the greater good, and where innovation drives positive change across industries and communities.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl border border-orange-200 dark:border-orange-800/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 theme-primary-bg rounded-full"></div>
                    <h4 className="font-semibold theme-primary text-base">Our Impact</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Every project we deliver creates ripple effects that benefit entire ecosystems of users, businesses, and communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 right-20 w-72 h-72 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
