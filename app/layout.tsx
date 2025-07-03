import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Komprotech - Revolutionizing Tech Product Delivery",
  description: "Transform innovative ideas into powerful software solutions with Komprotech. Expert development services for scalable digital workflows.",
  keywords: ["software development", "tech solutions", "web development", "mobile apps", "AI solutions", "digital transformation"],
  authors: [{ name: "Komprotech" }],
  creator: "Komprotech",
  publisher: "Komprotech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Komprotech - Revolutionizing Tech Product Delivery",
    description: "Transform innovative ideas into powerful software solutions with expert development services.",
    url: "https://komprotech.com",
    siteName: "Komprotech",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
