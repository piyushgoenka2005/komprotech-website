"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Code,
  Database,
  Smartphone,
  ArrowRight,
  Gamepad2,
  Search,
  FileText,
  PenTool,
} from "lucide-react";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "End-to-end custom software development tailored to your business needs, delivering scalable and efficient digital solutions.",
      features: [
        "Bespoke web & desktop apps",
        "Third-party API integrations",
        "Secure backend development",
        "Scalable system architecture",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Intelligent Solutions",
      description:
        "Smart solutions powered by AI, machine learning, and automation to solve complex business problems and enhance decision-making.",
      features: [
        "AI-powered automation",
        "Predictive analytics",
        "Business process intelligence",
        "Custom ML model deployment",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description:
        "Design and development of high-performance mobile apps with smooth user experience across Android and iOS platforms.",
      features: [
        "Cross-platform development",
        "Intuitive UI/UX design",
        "Real-time data sync",
        "Push notifications & APIs",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description:
        "Creative and engaging game development solutions for mobile, web, and desktop platforms using the latest gaming engines.",
      features: [
        "2D & 3D game creation",
        "Unity/Unreal Engine support",
        "Multiplayer integration",
        "Interactive UI & storytelling",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Boost your online visibility and drive organic traffic with proven SEO strategies tailored to your business goals.",
      features: [
        "Keyword research & optimization",
        "On-page & off-page SEO",
        "Technical SEO audit",
        "Monthly performance reports",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description:
        "Professional content creation services that capture your brand voice and engage your target audience effectively.",
      features: [
        "SEO-optimized blogs & articles",
        "Scriptwriting & storytelling",
        "Social media content",
        "Copywriting for landing pages",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: PenTool,
      title: "Logo Design",
      description:
        "Unique, memorable, and scalable logo designs that represent your brand identity across all platforms.",
      features: [
        "Custom vector logos",
        "Brand guidelines creation",
        "Multiple design concepts",
        "High-res & source files provided",
      ],
      color: "from-red-500 to-pink-500",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We offer comprehensive tech solutions designed to transform your
            logistics operations and drive business growth through innovation
            and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`h-full transition-all duration-500 transform hover:scale-105 cursor-pointer group relative overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  hoveredCard === index
                    ? "shadow-2xl"
                    : "shadow-lg hover:shadow-xl"
                }`}
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
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} animate-pulse`}
                    ></div>
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
            );
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's discuss how our innovative solutions can streamline your
              logistics and drive your business forward.
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
  );
}
