"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Users, 
  Globe, 
  Trophy, 
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react"

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: CheckCircle,
      value: "100+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      value: "50+",
      label: "Happy Clients",
      description: "Satisfied clients who trust our expertise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries Served",
      description: "Global reach with localized solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Trophy,
      value: "99%",
      label: "Client Satisfaction",
      description: "Exceptional service quality and results",
      color: "from-orange-500 to-red-500"
    }
  ]

  const features = [
    {
      title: "Lightning Fast Delivery",
      description: "We deliver high-quality solutions in record time without compromising on quality.",
      icon: "⚡"
    },
    {
      title: "Expert Team",
      description: "Our experienced developers and designers bring years of expertise to every project.",
      icon: "👥"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business never stops running smoothly.",
      icon: "🛡️"
    },
    {
      title: "Bank-level Security",
      description: "Bank-level security protocols ensure your data and applications are always protected.",
      icon: "🔒"
    },
    {
      title: "Scalable Solutions",
      description: "Build for today, scale for tomorrow with our future-proof technology stack.",
      icon: "📈"
    },
    {
      title: "Cost Effective",
      description: "Get maximum value for your investment with our competitive pricing structure.",
      icon: "💰"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      content: "Komprotech transformed our business with their innovative solutions. The team's expertise and dedication are truly remarkable.",
      avatar: "/placeholder-user.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, Digital Solutions",
      company: "Digital Solutions Ltd.",
      content: "Working with Komprotech was a game-changer. They delivered beyond our expectations and helped us scale our platform globally.",
      avatar: "/placeholder-user.jpg",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Founder, StartupX",
      company: "StartupX",
      content: "The quality of work and attention to detail from Komprotech is outstanding. They truly understand what businesses need.",
      avatar: "/placeholder-user.jpg",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="why-choose-us"
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
            Trusted by Industry Leaders
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Komprotech?
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions and exceptional service.
          </p>
        </div>

        {/* Stats Grid */}
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
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
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

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:theme-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real feedback from businesses that have grown with our solutions
            </p>
          </div>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg relative overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonials[currentTestimonial].avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-500 text-white text-lg font-bold">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <Badge variant="outline" className="mt-1">
                      {testimonials[currentTestimonial].company}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "theme-primary-bg w-8"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
