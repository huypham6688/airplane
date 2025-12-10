"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-lg text-primary-foreground/80">Chúng tôi sẵn sàng giúp đỡ bạn 24/7</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <Mail className="w-12 h-12 mx-auto text-accent" />
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">support@skyvoyage.vn</p>
                <p className="text-sm text-muted-foreground">Hỗ trợ qua email trong 24 giờ</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <Phone className="w-12 h-12 mx-auto text-accent" />
                <h3 className="font-semibold text-lg">Điện Thoại</h3>
                <p className="text-muted-foreground">+84 (0)123 456 789</p>
                <p className="text-sm text-muted-foreground">8:00 - 22:00 hàng ngày</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <MapPin className="w-12 h-12 mx-auto text-accent" />
                <h3 className="font-semibold text-lg">Địa Chỉ</h3>
                <p className="text-muted-foreground">123 Đường Quang Trung</p>
                <p className="text-sm text-muted-foreground">Hà Nội, Việt Nam</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Gửi Tin Nhắn</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Họ và Tên</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className="w-full border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Số Điện Thoại</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+84 9xx xxx xxxx"
                        className="w-full border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Chủ Đề</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="booking">Vấn đề đặt vé</option>
                        <option value="payment">Vấn đề thanh toán</option>
                        <option value="refund">Hoàn tiền</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tin Nhắn</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập tin nhắn của bạn..."
                        rows={5}
                        className="w-full border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-10">
                      Gửi Tin Nhắn
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Giờ Làm Việc</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6</span>
                    <span className="font-semibold">8:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7</span>
                    <span className="font-semibold">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ Nhật</span>
                    <span className="font-semibold">10:00 - 18:00</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Câu Hỏi Thường Gặp</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-1">Tôi có thể hủy vé được không?</p>
                    <p className="text-sm text-muted-foreground">Có, bạn có thể hủy trong vòng 24 giờ sau khi đặt.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phí gửi vé là bao nhiêu?</p>
                    <p className="text-sm text-muted-foreground">Vé điện tử được gửi miễn phí qua email.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Tôi có thể thanh toán bằng cách nào?</p>
                    <p className="text-sm text-muted-foreground">Hỗ trợ thẻ tín dụng, ví điện tử, và chuyển khoản.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
