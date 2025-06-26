import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Komprotech - Revolutionizing Tech Product Delivery | Bringing Ideas to Life",
  description:
    "Transform innovative ideas into powerful software solutions with Komprotech. Specializing in logistics automation, intelligent tracking, delivery optimization, and AI-driven systems. Work for us means Work for others.",
  keywords: [
    "tech product delivery",
    "software development",
    "logistics automation",
    "intelligent tracking solutions",
    "delivery optimization",
    "AI-driven systems",
    "software solutions",
    "digital workflows",
    "scalable technology",
    "innovation",
    "Komprotech",
  ].join(", "),
  authors: [{ name: "Komprotech", url: "https://komprotech.com" }],
  creator: "Komprotech",
  publisher: "Komprotech",
  openGraph: {
    title: "Komprotech - Revolutionizing Tech Product Delivery",
    description: "Bringing ideas to life through innovative software solutions. Work for us means Work for others.",
    type: "website",
    locale: "en_US",
    siteName: "Komprotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komprotech - Revolutionizing Tech Product Delivery",
    description: "Bringing ideas to life through innovative software solutions.",
    creator: "@komprotech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://komprotech.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
