import { FlightSearchForm } from "@/components/flight-search-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FaqSection } from "@/components/faq-section"
import { PromoSection } from "@/components/promo-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { prisma } from "@/lib/db"

export default async function Home() {
  const [hero, features, testimonials, faqs] = await Promise.all([
    prisma.heroContent.findFirst(),
    prisma.feature.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.testimonial.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.faq.findMany({ orderBy: { sortOrder: "asc" } }),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection hero={hero} />
      <FlightSearchForm />
      <FeaturesSection features={features} />
      <PromoSection />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
      <Footer />
    </main>
  )
}
