"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Plane className="w-8 h-8" />
            <span className="text-2xl font-bold">SkyVoyage</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-accent transition">
              Trang Chủ
            </Link>
            <Link href="/flights" className="hover:text-accent transition">
              Chuyến Bay
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              Về Chúng Tôi
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Liên Hệ
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Đăng Nhập
              </Button>
            </Link>
            <Link href="/flights">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Đặt Vé Ngay</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link href="/" className="block hover:text-accent transition">
              Trang Chủ
            </Link>
            <Link href="/flights" className="block hover:text-accent transition">
              Chuyến Bay
            </Link>
            <Link href="/about" className="block hover:text-accent transition">
              Về Chúng Tôi
            </Link>
            <Link href="/contact" className="block hover:text-accent transition">
              Liên Hệ
            </Link>
            <Link href="/auth/login" className="block">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Đặt Vé Ngay</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
