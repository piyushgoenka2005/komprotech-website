import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Pricing } from "@/components/pricing"
import { Collaborations } from "@/components/collaborations"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Collaborations />
      <Contact />
      <Footer />
    </main>
  )
}
