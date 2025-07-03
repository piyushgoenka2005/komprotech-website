"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Brain,
  Smartphone,
  Gamepad2,
  Search,
  PenTool,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web applications, enterprise software, and digital transformation solutions built with modern technologies.",
      features: ["Full-stack development", "Cloud architecture", "API integrations", "Performance optimization"],
      badge: "Popular",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Intelligent Solutions", 
      description: "AI-powered applications, machine learning models, and intelligent automation systems for business optimization.",
      features: ["Machine Learning", "AI chatbots", "Data analytics", "Process automation"],
      badge: "New",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "App Store optimization", "Push notifications"],
      badge: null,
      badgeColor: "",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Interactive games and gamification solutions that engage users and drive business objectives.",
      features: ["Unity & Unreal", "2D/3D games", "Multiplayer systems", "Cross-platform"],
      badge: null,
      badgeColor: "",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve search rankings and drive organic traffic to your website.",
      features: ["Keyword research", "On-page SEO", "Technical SEO", "Performance tracking"],
      badge: null,
      badgeColor: "",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality content strategy, copywriting, and visual design that tells your brand story effectively.",
      features: ["Content strategy", "Copywriting", "Visual design", "Brand storytelling"],
      badge: null,
      badgeColor: "",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section
      id="services"
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
            Comprehensive Tech Solutions
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {service.badge && (
                      <Badge className={`${service.badgeColor} border-0`}>
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:theme-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full group-hover:theme-primary-bg group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives real business results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="theme-primary-bg hover:theme-accent-bg text-white px-8 py-4 h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 px-8 py-4 h-12 font-semibold rounded-xl transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
