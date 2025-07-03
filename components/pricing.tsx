"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  Check, 
  Star, 
  ArrowRight, 
  Zap,
  Crown,
  Rocket,
  Sparkles
} from "lucide-react"

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 2999,
      yearlyPrice: 35988, // 20% discount
      icon: Zap,
      badge: null,
      badgeColor: "",
      badgeIcon: null,
      popular: false,
      features: [
        "Basic website development",
        "Responsive design",
        "3 months support",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media integration",
        "Up to 5 pages",
        "Basic analytics setup"
      ],
      notIncluded: [
        "Custom animations",
        "Advanced integrations",
        "Mobile app development"
      ]
    },
    {
      name: "Professional",
      description: "Perfect for growing businesses and teams",
      monthlyPrice: 5999,
      yearlyPrice: 71988, // 20% discount
      icon: Crown,
      badge: null,
      badgeColor: "",
      badgeIcon: null,
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced web applications",
        "Mobile app development",
        "6 months support",
        "Advanced SEO & analytics",
        "Payment gateway integration",
        "Custom animations",
        "API integrations",
        "Content management system",
        "Performance optimization",
        "Security enhancements",
        "Email marketing setup"
      ],
      notIncluded: [
        "Dedicated project manager",
        "24/7 priority support"
      ]
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 12999,
      yearlyPrice: 155988, // 20% discount
      icon: Rocket,
      badge: "Best Value",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      badgeIcon: Sparkles,
      popular: false,
      features: [
        "Everything in Professional",
        "AI/ML integrations",
        "Game development",
        "12 months support",
        "Dedicated project manager",
        "24/7 priority support",
        "Custom solution architecture",
        "Advanced security protocols",
        "Performance monitoring",
        "Scalability planning",
        "Team training sessions",
        "Custom reporting dashboard",
        "Multi-platform deployment",
        "Ongoing maintenance"
      ],
      notIncluded: []
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-4 py-2 text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Choose Your Perfect Plan
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-sm inline-flex">
            <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-500"
            />
            <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0 ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const monthlyPrice = isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice
            
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-3 group ${
                  plan.popular
                    ? "border-2 border-blue-200 dark:border-blue-800 shadow-2xl scale-105 ring-4 ring-blue-100 dark:ring-blue-900/30"
                    : plan.badge
                    ? "border-2 border-green-200 dark:border-green-800 shadow-xl hover:shadow-2xl hover:border-green-300 dark:hover:border-green-700"
                    : "border-0 shadow-lg hover:shadow-2xl hover:border hover:border-orange-200 dark:hover:border-orange-800"
                } bg-white dark:bg-gray-800`}
              >
                {/* Top Banner for Most Popular */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 text-sm font-semibold shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular Choice</span>
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                )}

                {/* Corner Badge for Non-Popular Plans */}
                {plan.badge && !plan.popular && (
                  <div className="absolute -top-1 -right-1 z-10">
                    <div className={`${plan.badgeColor} text-white px-4 py-2 rounded-bl-2xl rounded-tr-lg shadow-xl transform rotate-0 font-semibold text-sm`}>
                      <div className="flex items-center gap-1.5">
                        {plan.badgeIcon && <plan.badgeIcon className="w-4 h-4" />}
                        {plan.badge}
                      </div>
                    </div>
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'} pb-4 relative`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${
                      plan.popular 
                        ? 'from-blue-500 to-purple-500' 
                        : plan.badge 
                        ? 'from-green-500 to-emerald-500'
                        : 'from-orange-500 to-red-500'
                    } flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>



                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(monthlyPrice)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">/month</span>
                    </div>
                    
                    {isYearly && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Billed annually ({formatPrice(price)})
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full mb-8 py-4 h-14 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        : plan.badge
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                        : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      What's included:
                    </h4>
                    
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <>
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                          <h5 className="font-medium text-gray-600 dark:text-gray-400 mb-3 text-sm">
                            Not included:
                          </h5>
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3 mb-2">
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5 flex-shrink-0"></div>
                              <span className="text-gray-500 dark:text-gray-500 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Questions About Pricing?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We're here to help you choose the right plan for your business. Contact us for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 px-6 py-3 h-12 font-semibold rounded-lg"
            >
              Contact Sales
            </Button>
            
            <Button
              onClick={scrollToContact}
              className="theme-primary-bg hover:theme-accent-bg text-white px-6 py-3 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 right-20 w-72 h-72 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
} 