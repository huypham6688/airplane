"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, LogOut, FileText, Heart, Settings } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("bookings")

  // Mock user data
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyen@example.com",
    phone: "+84 912 345 678",
    joinDate: "Tháng 1 năm 2024",
  }

  const bookings = [
    {
      id: "SV-2025-001234",
      flight: "VN 101",
      date: "15/12/2025",
      from: "HAN",
      to: "SGN",
      passengers: 2,
      total: 5000000,
      status: "Chuyến bay sắp tới",
    },
    {
      id: "SV-2025-001233",
      flight: "VN 202",
      date: "10/12/2025",
      from: "SGN",
      to: "HAN",
      passengers: 1,
      total: 2300000,
      status: "Hoàn tất",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-xs text-muted-foreground mt-2">Thành viên từ {user.joinDate}</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded transition ${
                      activeTab === "bookings" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    Đơn Hàng
                  </button>
                  <button
                    onClick={() => setActiveTab("favorites")}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded transition ${
                      activeTab === "favorites" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                    Yêu Thích
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded transition ${
                      activeTab === "settings" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <Settings className="w-4 h-4" />
                    Cài Đặt
                  </button>
                </div>

                <Button variant="outline" className="w-full flex items-center gap-2 justify-center bg-transparent">
                  <LogOut className="w-4 h-4" />
                  Đăng Xuất
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Đơn Hàng Của Tôi</h2>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Mã Đặt Vé</p>
                              <p className="font-semibold">{booking.id}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Trạng Thái</p>
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                  booking.status === "Chuyến bay sắp tới"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                {booking.status}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 border-t pt-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Chuyến Bay</p>
                              <p className="font-semibold">{booking.flight}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Ngày</p>
                              <p className="font-semibold">{booking.date}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Tuyến</p>
                              <p className="font-semibold">
                                {booking.from} → {booking.to}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Hành Khách</p>
                              <p className="font-semibold">{booking.passengers}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Tổng</p>
                              <p className="font-bold text-accent">{booking.total.toLocaleString()} đ</p>
                            </div>
                          </div>

                          <div className="border-t mt-4 pt-4 flex gap-2">
                            <Button variant="outline">Chi Tiết</Button>
                            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">In Vé</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "favorites" && (
              <Card>
                <CardHeader>
                  <CardTitle>Chuyến Bay Yêu Thích</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">Bạn chưa lưu chuyến bay yêu thích nào</p>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Cài Đặt Tài Khoản</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Họ và Tên</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full border border-border rounded px-3 py-2 bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full border border-border rounded px-3 py-2 bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Số Điện Thoại</label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full border border-border rounded px-3 py-2 bg-background"
                    />
                  </div>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Lưu Thay Đổi</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
