"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function FlightDetailsPage() {
  const params = useParams()
  const flightId = params.id as string

  // Mock data - trong thực tế sẽ fetch từ API
  const flight = {
    id: flightId,
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "08:00",
    departureDate: "15/12/2025",
    arrivalTime: "10:15",
    arrivalDate: "15/12/2025",
    duration: "2h 15m",
    airline: "Vietnam Airlines",
    aircraftType: "Boeing 787 Dreamliner",
    price: 2500000,
    seats: 15,
    stops: 0,
    amenities: [
      "Đồ ăn và thức uống miễn phí",
      "Hành lý ký gửi 23kg",
      "Ghế rộng thoải mái",
      "Giải trí trên chuyến bay",
      "WiFi miễn phí",
    ],
  }

  const [passengers, setPassengers] = useState(1)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/flights" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh sách
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Chi Tiết Chuyến Bay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Hãng Hàng Không</p>
                    <p className="font-semibold text-lg">{flight.airline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Loại Máy Bay</p>
                    <p className="font-semibold text-lg">{flight.aircraftType}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Lịch Trình</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Khởi Hành</p>
                      <p className="text-xl font-bold">{flight.departureTime}</p>
                      <p className="text-sm">{flight.departure}</p>
                      <p className="text-sm text-muted-foreground">{flight.departureDate}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-center text-muted-foreground text-sm">
                        <p>{flight.duration}</p>
                        <p>{flight.stops === 0 ? "Không dừng" : `${flight.stops} dừng`}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hạ Cánh</p>
                      <p className="text-xl font-bold">{flight.arrivalTime}</p>
                      <p className="text-sm">{flight.arrival}</p>
                      <p className="text-sm text-muted-foreground">{flight.arrivalDate}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Tiện Nghi</h3>
                  <ul className="space-y-2">
                    {flight.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Đặt Vé</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Giá mỗi hành khách</p>
                  <p className="text-3xl font-bold text-accent mb-4">{flight.price.toLocaleString()} đ</p>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Số Hành Khách</label>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setPassengers(Math.max(1, passengers - 1))}>
                      -
                    </Button>
                    <input
                      type="number"
                      value={passengers}
                      onChange={(e) => setPassengers(Math.max(1, Number.parseInt(e.target.value) || 1))}
                      className="flex-1 border border-border rounded px-2 text-center bg-background"
                    />
                    <Button variant="outline" onClick={() => setPassengers(passengers + 1)}>
                      +
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Giá gốc</span>
                    <span>{flight.price.toLocaleString()} đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Số lượng</span>
                    <span>{passengers}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Tổng Cộng</span>
                    <span className="text-accent">{(flight.price * passengers).toLocaleString()} đ</span>
                  </div>
                </div>

                <Link href={`/booking?flightId=${flight.id}&passengers=${passengers}`}>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                    Tiếp Tục Đặt Vé
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center">Có {flight.seats} ghế còn trống</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
