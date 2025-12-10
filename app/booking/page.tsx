"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const flightId = searchParams.get("flightId")
  const passengers = Number.parseInt(searchParams.get("passengers") || "1")

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    passengers: Array(passengers).fill({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "male",
      dateOfBirth: "",
    }),
    contactEmail: "",
    contactPhone: "",
  })

  const handleInputChange = (index: number, field: string, value: string) => {
    const newPassengers = [...formData.passengers]
    newPassengers[index] = { ...newPassengers[index], [field]: value }
    setFormData({ ...formData, passengers: newPassengers })
  }

  const handleContactChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Đặt Vé Máy Bay</h1>
          <p className="text-muted-foreground">Nhập thông tin hành khách để hoàn tất đặt vé</p>
        </div>

        <div className="mb-8">
          <div className="flex gap-4 justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    step >= s ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                <span className="text-sm hidden sm:inline text-muted-foreground">
                  {s === 1 ? "Hành Khách" : s === 2 ? "Thanh Toán" : "Xác Nhận"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông Tin Hành Khách</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.passengers.map((passenger, index) => (
                  <div key={index} className="border-t pt-6 first:border-t-0 first:pt-0">
                    <h3 className="font-semibold mb-4">Hành Khách {index + 1}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Họ"
                        value={passenger.firstName}
                        onChange={(e) => handleInputChange(index, "firstName", e.target.value)}
                        className="border border-border rounded px-3 py-2 bg-background"
                      />
                      <input
                        type="text"
                        placeholder="Tên"
                        value={passenger.lastName}
                        onChange={(e) => handleInputChange(index, "lastName", e.target.value)}
                        className="border border-border rounded px-3 py-2 bg-background"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={passenger.email}
                        onChange={(e) => handleInputChange(index, "email", e.target.value)}
                        className="border border-border rounded px-3 py-2 bg-background"
                      />
                      <input
                        type="tel"
                        placeholder="Số Điện Thoại"
                        value={passenger.phone}
                        onChange={(e) => handleInputChange(index, "phone", e.target.value)}
                        className="border border-border rounded px-3 py-2 bg-background"
                      />
                      <select
                        value={passenger.gender}
                        onChange={(e) => handleInputChange(index, "gender", e.target.value)}
                        className="border border-border rounded px-3 py-2 bg-background"
                      >
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                      </select>
                      <input
                        type="date"
                        value={passenger.dateOfBirth}
                        onChange={(e) => handleInputChange(index, "dateOfBirth", e.target.value)}
                        className="border border-border rounded px-3 py-2 bg-background"
                      />
                    </div>
                  </div>
                ))}

                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-semibold">Thông Tin Liên Hệ</h3>
                  <input
                    type="email"
                    placeholder="Email liên hệ"
                    value={formData.contactEmail}
                    onChange={(e) => handleContactChange("contactEmail", e.target.value)}
                    className="w-full border border-border rounded px-3 py-2 bg-background"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại liên hệ"
                    value={formData.contactPhone}
                    onChange={(e) => handleContactChange("contactPhone", e.target.value)}
                    className="w-full border border-border rounded px-3 py-2 bg-background"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link href="/flights" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Quay Lại
                </Button>
              </Link>
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-accent text-accent-foreground rounded px-4 py-2 hover:bg-accent/90 transition flex items-center justify-center gap-2"
              >
                Tiếp Tục <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thanh Toán</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded border border-border">
                  <h3 className="font-semibold mb-4">Chọn Phương Thức Thanh Toán</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border border-border rounded cursor-pointer hover:bg-background transition">
                      <input type="radio" name="payment" defaultChecked />
                      <div>
                        <p className="font-semibold">Thẻ Tín Dụng/Ghi Nợ</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-border rounded cursor-pointer hover:bg-background transition">
                      <input type="radio" name="payment" />
                      <div>
                        <p className="font-semibold">Ví Điện Tử</p>
                        <p className="text-sm text-muted-foreground">Momo, Zalopay, Viettel Pay</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-border rounded cursor-pointer hover:bg-background transition">
                      <input type="radio" name="payment" />
                      <div>
                        <p className="font-semibold">Chuyển Khoản Ngân Hàng</p>
                        <p className="text-sm text-muted-foreground">Chuyển khoản trực tiếp vào tài khoản ngân hàng</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-3">
                  <div className="flex justify-between">
                    <span>Tiền vé ({passengers} hành khách)</span>
                    <span>7,500,000 đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí dịch vụ</span>
                    <span>250,000 đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí bảo hiểm</span>
                    <span>500,000 đ</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Tổng Cộng</span>
                    <span className="text-accent">8,250,000 đ</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-border rounded px-4 py-2 hover:bg-muted transition"
              >
                Quay Lại
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-accent text-accent-foreground rounded px-4 py-2 hover:bg-accent/90 transition flex items-center justify-center gap-2"
              >
                Thanh Toán <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Xác Nhận Đặt Vé</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <p className="text-green-800 font-semibold mb-2">Đặt vé thành công!</p>
                  <p className="text-green-700 text-sm">
                    Mã xác nhận: <span className="font-mono font-bold">SV-2025-001234</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Chi Tiết Chuyến Bay</h3>
                  <div className="bg-muted p-4 rounded space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chuyến Bay</span>
                      <span className="font-semibold">VN 101</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Từ/Đến</span>
                      <span className="font-semibold">HAN → SGN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Thời Gian Cất Cánh</span>
                      <span className="font-semibold">15/12/2025 08:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Số Hành Khách</span>
                      <span className="font-semibold">{passengers}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-blue-800 text-sm">
                    Một email xác nhận sẽ được gửi đến địa chỉ email của bạn. Vui lòng kiểm tra hộp thư của bạn để nhận
                    vé điện tử.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Về Trang Chủ
                </Button>
              </Link>
              <Link href="/account" className="flex-1">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Xem Đơn Hàng Của Tôi
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
