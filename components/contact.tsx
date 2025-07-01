"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["comprotechofficial@gmail.com"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["62894 33412", "Mon-Fri 9AM-6PM"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kolkata, West Bengal"],
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full animate-pulse"
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your ideas into reality? We'd love to hear from
            you. Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card
              className={`p-8 border-2 hover:border-orange-200 transition-all duration-700 hover:shadow-xl relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              {/* Success Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-green-500 flex items-center justify-center z-20 animate-fade-in">
                  <div className="text-center text-white">
                    <CheckCircle className="h-16 w-16 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 mb-4 flex items-center">
                  <Send className="h-6 w-6 mr-3 text-orange-500" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors duration-300"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors duration-300"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors duration-300"
                      >
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors duration-300"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="What's this about?"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors duration-300"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full transition-all duration-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Tell us about your project, ideas, or how we can help you..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 w-full py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 border-2 hover:border-orange-200 transition-all duration-700 hover:shadow-xl transform hover:scale-105 group relative overflow-hidden ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div
              className={`bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-100 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For
                    urgent matters, please call us directly or mention "URGENT"
                    in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
