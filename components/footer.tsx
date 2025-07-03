"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Heart,
} from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Software Development", href: "services" },
        { name: "Intelligent Solutions", href: "services" },
        { name: "Mobile Applications", href: "services" },
        { name: "Game Development", href: "services" },
        { name: "SEO Optimization", href: "services" },
        { name: "Content Creation", href: "services" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "about" },
        { name: "Why Choose Us", href: "why-choose-us" },
        { name: "Pricing", href: "pricing" },
        { name: "Contact", href: "contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Support", href: "contact" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates on technology trends, development insights, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <div className="w-full sm:flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 h-12 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <Button className="w-full sm:w-auto theme-primary-bg hover:theme-accent-bg text-white px-6 py-3 h-12 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 cursor-pointer group mb-6"
            >
              <div className="w-10 h-10 theme-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                Komprotech
              </span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Transforming innovative ideas into powerful software solutions that enhance digital workflows and drive scalable growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>comprotechofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+91 62894 33412</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white hover:theme-primary transition-colors duration-300 text-left block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} Komprotech. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <button className="text-gray-400 hover:text-white hover:theme-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white hover:theme-primary transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white hover:theme-primary transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <blockquote className="text-center text-lg text-gray-400 italic max-w-2xl mx-auto">
              "Work for us means Work for others"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 theme-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}
