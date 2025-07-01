"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-red-500 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full translate-x-24 translate-y-24 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div
              className="group cursor-pointer mb-6"
              onClick={() => scrollToSection("home")}
            >
              <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors duration-300">
                Komprotech
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Revolutionizing tech product delivery by bringing innovative ideas
              to life. Our mission: "Work for us means Work for others."
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/komprotech/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "home",
                "about",
                "services",
                "why-choose-us",
                "collaborations",
              ].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 transform hover:translate-x-1 block"
                  >
                    {section
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  comprotechofficial@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  62894 33412
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Kolkata, West Bengal
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Komprotech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-full w-10 h-10 p-0 transform hover:scale-110 transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
