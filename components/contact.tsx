"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "comprotechofficial@gmail.com",
      description: "Send us your questions anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 62894 33412",
      description: "Mon-Fri from 9am to 6pm",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kolkata, West Bengal",
      description: "India",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond quickly",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-4 py-2 text-sm font-medium mb-6 shadow-sm">
            <div className="w-2 h-2 theme-primary-bg rounded-full animate-pulse"></div>
            Let's Connect
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together. Get in touch with our team today.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="h-12 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="h-12 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-12 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        className="h-12 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        rows={6}
                        className="border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitted}
                      className="w-full md:w-auto theme-primary-bg hover:theme-accent-bg text-white px-8 py-3 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  Ready to start your project? We'd love to hear from you. Choose the best way to reach us.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {info.title}
                            </h4>
                            <p className="text-gray-900 dark:text-white font-medium mb-1">
                              {info.details}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg text-white">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-bold mb-3">
                    Prefer to Chat Directly?
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Schedule a free consultation call to discuss your project in detail.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white text-gray-900 hover:bg-gray-100 border-white font-semibold"
                  >
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-40 right-20 w-72 h-72 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
