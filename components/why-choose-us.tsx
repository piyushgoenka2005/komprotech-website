"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, Zap, Award, HeartHandshake, CheckCircle } from "lucide-react"

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % benefits.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const benefits = [
    {
      icon: Clock,
      title: "Focus on What Matters",
      description:
        "We handle the technical complexity so you can focus on your career and personal life while your ideas come to life.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "Our team of experienced developers and engineers brings deep technical knowledge to every project.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description:
        "We work closely with you throughout the development process, ensuring your vision is perfectly realized.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Our streamlined processes and agile methodology ensure fast delivery without compromising quality.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control measures ensure your software meets the highest standards.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: HeartHandshake,
      title: "Long-term Support",
      description: "We provide ongoing maintenance and support to ensure your solutions continue to perform optimally.",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const guarantees = ["Fast Delivery", "Quality Guaranteed", "Ongoing Support", "24/7 Availability"]

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Komprotech?</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We understand the challenges faced by working professionals and innovators. Let us provide the technical
            expertise you need while you focus on what you do best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isActive = activeCard === index
            return (
              <Card
                key={index}
                className={`text-center p-6 transition-all duration-700 transform cursor-pointer group relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${isActive ? "scale-105 shadow-2xl" : "hover:scale-105 shadow-lg hover:shadow-xl"}`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 ${
                    isActive ? "opacity-10" : "group-hover:opacity-5"
                  } transition-opacity duration-500`}
                ></div>

                <CardContent className="pt-6 relative z-10">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg ${
                        isActive ? "animate-pulse" : "group-hover:scale-110"
                      } transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-full scale-150 opacity-20 animate-ping"></div>
                    )}
                  </div>
                  <h3
                    className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                      isActive ? "text-orange-600" : "text-gray-900 group-hover:text-orange-600"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
              <div
                className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Transform Your Ideas into Reality?</h3>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join the growing number of professionals and innovators who trust Komprotech to bring their vision to
                life. Let's build something amazing together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {guarantees.map((guarantee, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-500 hover:bg-white/30 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${1 + index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
