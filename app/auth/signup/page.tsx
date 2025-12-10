"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Đăng Ký</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">Tạo tài khoản để bắt đầu đặt vé</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Họ và Tên</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-border rounded pl-10 pr-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-border rounded pl-10 pr-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Số Điện Thoại</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+84 9xx xxx xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border rounded pl-10 pr-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mật Khẩu</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-border rounded pl-10 pr-10 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Xác Nhận Mật Khẩu</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-border rounded pl-10 pr-10 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="rounded border-border mt-1" />
              <span>
                Tôi đồng ý với{" "}
                <Link href="#" className="text-accent hover:underline">
                  Điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link href="#" className="text-accent hover:underline">
                  Chính sách riêng tư
                </Link>
              </span>
            </label>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-10">Đăng Ký</Button>

            <div className="text-center text-sm">
              Đã có tài khoản?{" "}
              <Link href="/auth/login" className="text-accent hover:underline font-semibold">
                Đăng nhập ngay
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
