"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, TrendingUp, Users, CheckCircle } from "lucide-react"

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
      description: "Transforming creative ideas into powerful software solutions",
      delay: "0s",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast and reliable tech product delivery that exceeds expectations",
      delay: "0.2s",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "AI-driven systems that grow with your business needs",
      delay: "0.4s",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
      delay: "0.6s",
    },
  ]

  const missionPoints = [
    "Bringing innovative ideas to life through seamless software solutions",
    "Enhancing digital workflows with cutting-edge technology",
    "Providing scalable, efficient systems that empower businesses",
    "Delivering fast and reliable tech product solutions",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Komprotech</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are innovators at heart, committed to bringing ideas to life through cutting-edge software solutions. Our
            focus on seamless execution and digital workflow enhancement drives us to deliver exceptional results for
            every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`text-center p-6 border-2 hover:border-orange-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: feature.delay,
                  transitionDelay: isVisible ? feature.delay : "0s",
                }}
              >
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <Icon className="h-12 w-12 text-orange-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-20"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div
          className={`bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-orange-100 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Mission & Vision</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    Mission
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To revolutionize tech product delivery by bringing innovative ideas to life through seamless
                    software solutions. We are committed to enhancing digital workflows and providing scalable,
                    efficient systems that empower businesses to thrive.
                  </p>
                  <div className="space-y-3">
                    {missionPoints.map((point, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-3 transition-all duration-500 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                        }`}
                        style={{ transitionDelay: `${1 + index * 0.1}s` }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  Vision
                </h4>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                  <blockquote className="text-lg font-medium text-gray-800 mb-4 italic">
                    "Work for us means Work for others"
                  </blockquote>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a world where technology serves humanity, where every solution we create contributes to
                    the greater good, and where innovation drives positive change across industries and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
