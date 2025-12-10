'use client';

import { useEffect, useState } from "react"

type HeroContent = {
  title: string
  subtitle: string
  tagline: string
  ctaPrimaryText: string
  ctaSecondaryText: string
  backgroundImage: string
  planeImage: string
}

const fallbackHero: HeroContent = {
  title: "Book a private jet instantly",
  subtitle:
    "Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services.",
  tagline: "Flynext",
  ctaPrimaryText: "Make Your Trip",
  ctaSecondaryText: "Request Quote",
  backgroundImage: "/sky.jpg",
  planeImage: "/plane.png",
}

export function HeroSection({ hero }: { hero: HeroContent | null }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const content = hero ?? fallbackHero

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
      <section
          className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
          style={{ backgroundImage: `url('${content.backgroundImage}')` }}
      >
        {/* Social Icons - Left Side */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
          <a href="#" className="w-9 h-9 bg-slate-700/50 border border-slate-600 rounded-full flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="#" className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 transition shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a href="#" className="w-9 h-9 bg-slate-700/50 border border-slate-600 rounded-full flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-9 h-9 bg-slate-700/50 border border-slate-600 rounded-full flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 text-slate-600 text-5xl font-light">+</div>
          <div className="absolute bottom-1/3 left-1/2 text-amber-500/30 text-4xl font-light">+</div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div>
                <span className="text-amber-400 text-xl font-serif italic">{content.tagline}</span>
              </div>

              <h1
                  className="text-[#0F172A] text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl"
                  style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {content.title.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h1>


              <p className="text-[#0F172A] text-base max-w-xl leading-relaxed">
                {content.subtitle}
              </p>


              <div className="flex flex-wrap items-center gap-6 pt-4">
                <button className="px-7 py-3.5 bg-transparent border border-amber-500 text-amber-500 rounded-full font-medium hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {content.ctaPrimaryText}
                </button>

                <button className="text-white font-medium hover:text-amber-400 transition-all duration-300 flex items-center gap-2 text-sm group">
                  {content.ctaSecondaryText}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content - Private Jet Image */}
            <div className="relative lg:pl-12 mt-26">
              <div
                  className={`transform transition-all duration-[2000ms] ease-out ${
                      isLoaded
                          ? 'translate-x-0 scale-170 opacity-100'
                          : '-translate-x-full scale-80 opacity-0'
                  }`}
              >
                <img
                    src={content.planeImage}
                    alt="Private Jet"
                    className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                    }}
                />
              </div>

              {/* Decorative elements around jet */}
              <div className="absolute top-1/3 -left-4 text-amber-500/40 text-3xl font-light">+</div>
            </div>
          </div>
        </div>

        {/* CSS for floating animation */}
        <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      </section>
  );
}