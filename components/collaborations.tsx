"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Users, 
  Handshake, 
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Globe,
  CheckCircle
} from "lucide-react"

export function Collaborations() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPartner, setCurrentPartner] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    {
      icon: Building2,
      value: "200+",
      label: "Partner Companies",
      description: "Trusted partnerships across industries"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global collaboration network"
    },
    {
      icon: Handshake,
      value: "500+",
      label: "Successful Projects",
      description: "Delivered through partnerships"
    },
    {
      icon: Users,
      value: "98%",
      label: "Partner Satisfaction",
      description: "Long-term collaboration success"
    }
  ]

  const industries = [
    {
      name: "Technology",
      description: "Software development, AI/ML solutions, and digital transformation",
      projects: "150+",
      color: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      name: "Healthcare",
      description: "Medical software, telemedicine platforms, and health analytics",
      projects: "80+",
      color: "from-green-500 to-emerald-500",
      icon: "🏥"
    },
    {
      name: "Finance",
      description: "Fintech solutions, payment systems, and banking applications",
      projects: "120+",
      color: "from-purple-500 to-pink-500",
      icon: "💰"
    },
    {
      name: "E-commerce",
      description: "Online stores, marketplace platforms, and shopping applications",
      projects: "95+",
      color: "from-orange-500 to-red-500",
      icon: "🛒"
    },
    {
      name: "Education",
      description: "Learning management systems, educational apps, and e-learning platforms",
      projects: "65+",
      color: "from-indigo-500 to-purple-500",
      icon: "📚"
    },
    {
      name: "Gaming",
      description: "Mobile games, web games, and interactive entertainment solutions",
      projects: "45+",
      color: "from-yellow-500 to-orange-500",
      icon: "🎮"
    }
  ]

  const partners = [
    {
      name: "TechFlow Solutions",
      industry: "Technology",
      description: "Leading software development company specializing in enterprise solutions",
      collaboration: "Joint development of AI-powered business intelligence platform",
      duration: "2+ years",
      logo: "/placeholder-logo.svg"
    },
    {
      name: "HealthCare Innovations",
      industry: "Healthcare",
      description: "Digital health platform transforming patient care delivery",
      collaboration: "Development of telemedicine and patient management systems",
      duration: "18 months",
      logo: "/placeholder-logo.svg"
    },
    {
      name: "FinanceNext",
      industry: "Financial Services",
      description: "Fintech startup revolutionizing digital payments and banking",
      collaboration: "Mobile banking app and secure payment gateway development",
      duration: "1+ year",
      logo: "/placeholder-logo.svg"
    },
    {
      name: "EduLearn Global",
      industry: "Education",
      description: "Online education platform serving millions of students worldwide",
      collaboration: "Learning management system and mobile learning applications",
      duration: "2+ years",
      logo: "/placeholder-logo.svg"
    }
  ]

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate on cutting-edge technology solutions and innovation",
      benefits: ["Shared expertise", "Joint development", "Market expansion"],
      icon: "🤝"
    },
    {
      title: "Integration Partners",
      description: "Seamless integration with third-party services and platforms",
      benefits: ["API integrations", "Plugin development", "System connectivity"],
      icon: "🔗"
    },
    {
      title: "Reseller Partners",
      description: "Expand our reach through trusted channel partners worldwide",
      benefits: ["Revenue sharing", "Sales support", "Marketing assistance"],
      icon: "🌐"
    }
  ]

  return (
    <section
      id="collaborations"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Strategic Partnerships
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Collaborations & Partnerships
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Building lasting partnerships with industry leaders to deliver exceptional value and innovative solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group text-center"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Industries We Serve */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our partnerships span across diverse industries, bringing specialized expertise to every sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-gray-50 dark:bg-gray-800 border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:theme-primary transition-colors duration-300">
                          {industry.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {industry.projects} projects
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Partnership */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Partnerships
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Spotlight on our successful long-term collaborations
            </p>
          </div>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                
                {/* Partner Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-md">
                    <img 
                      src={partners[currentPartner].logo} 
                      alt={partners[currentPartner].name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {partners[currentPartner].name}
                    </h4>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0">
                      {partners[currentPartner].industry}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {partners[currentPartner].description}
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Collaboration Focus:
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {partners[currentPartner].collaboration}
                    </p>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Partnership Duration: {partners[currentPartner].duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPartner(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPartner
                        ? "theme-primary-bg w-8"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Types */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Partnership Opportunities
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore different ways to collaborate with Komprotech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:theme-primary transition-colors duration-300">
                    {type.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg max-w-4xl mx-auto text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Partner With Us?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our network of successful partners and explore new opportunities for growth and collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={scrollToContact}
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-white text-white hover:bg-white/10 px-8 py-3 h-12 font-semibold rounded-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
