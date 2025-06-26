"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, BarChart3, Settings, Code, Database, Smartphone, ArrowRight } from "lucide-react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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

  const services = [
    {
      icon: Code,
      title: "Software Development for Logistics Automation",
      description:
        "Custom software solutions that streamline logistics operations, reduce manual processes, and increase operational efficiency.",
      features: [
        "Automated workflow management",
        "Real-time inventory tracking",
        "Supply chain optimization",
        "Integration with existing systems",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Intelligent Tracking Solutions",
      description:
        "Advanced tracking systems powered by AI and machine learning to provide real-time visibility and predictive analytics.",
      features: [
        "Real-time GPS tracking",
        "Predictive delivery analytics",
        "Route optimization algorithms",
        "Performance monitoring dashboards",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Settings,
      title: "Delivery Optimization Strategies",
      description:
        "Data-driven strategies and tools to optimize delivery routes, reduce costs, and improve customer satisfaction.",
      features: [
        "Route planning algorithms",
        "Cost reduction analysis",
        "Customer satisfaction metrics",
        "Performance optimization tools",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Database,
      title: "Data Analytics & Insights",
      description:
        "Transform your logistics data into actionable insights with our advanced analytics and reporting solutions.",
      features: [
        "Custom dashboard creation",
        "Predictive analytics",
        "Performance reporting",
        "Business intelligence tools",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "User-friendly mobile applications for drivers, customers, and administrators to manage logistics operations on-the-go.",
      features: [
        "Cross-platform compatibility",
        "Real-time notifications",
        "Offline functionality",
        "Intuitive user interfaces",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Truck,
      title: "Fleet Management Systems",
      description:
        "Comprehensive fleet management solutions to monitor, maintain, and optimize your vehicle operations.",
      features: [
        "Vehicle tracking and monitoring",
        "Maintenance scheduling",
        "Driver performance analytics",
        "Fuel efficiency optimization",
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We offer comprehensive tech solutions designed to transform your logistics operations and drive business
            growth through innovation and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`h-full transition-all duration-500 transform hover:scale-105 cursor-pointer group relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${hoveredCard === index ? "shadow-2xl" : "shadow-lg hover:shadow-xl"}`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} animate-pulse`}></div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-start transition-all duration-300 ${
                          hoveredCard === index ? "translate-x-2" : ""
                        }`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`}
                        ></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's discuss how our innovative solutions can streamline your logistics and drive your business forward.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
