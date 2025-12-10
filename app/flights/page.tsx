"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plane } from "lucide-react"

interface Flight {
  id: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  duration: string
  airline: string
  price: number
  seats: number
  stops: number
}

const flights: Flight[] = [
  {
    id: "1",
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "08:00",
    arrivalTime: "10:15",
    duration: "2h 15m",
    airline: "Vietnam Airlines",
    price: 2500000,
    seats: 15,
    stops: 0,
  },
  {
    id: "2",
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "10:30",
    arrivalTime: "12:45",
    duration: "2h 15m",
    airline: "Vietjet Air",
    price: 1800000,
    seats: 8,
    stops: 0,
  },
  {
    id: "3",
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "14:00",
    arrivalTime: "16:30",
    duration: "2h 30m",
    airline: "Bamboo Airways",
    price: 2200000,
    seats: 20,
    stops: 0,
  },
  {
    id: "4",
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "18:45",
    arrivalTime: "21:00",
    duration: "2h 15m",
    airline: "Vietnam Airlines",
    price: 2300000,
    seats: 5,
    stops: 0,
  },
  {
    id: "5",
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "20:00",
    arrivalTime: "22:30",
    duration: "2h 30m",
    airline: "Vietjet Air",
    price: 1600000,
    seats: 12,
    stops: 0,
  },
  {
    id: "6",
    departure: "Hà Nội (HAN)",
    arrival: "TP. Hồ Chí Minh (SGN)",
    departureTime: "22:30",
    arrivalTime: "01:00",
    duration: "2h 30m",
    airline: "Bamboo Airways",
    price: 1900000,
    seats: 10,
    stops: 0,
  },
]

export default function FlightsPage() {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Chuyến Bay Có Sẵn</h1>
        <p className="text-muted-foreground mb-8">Tìm và đặt chuyến bay phù hợp với bạn</p>

        <div className="grid gap-4">
          {flights.map((flight) => (
            <Card key={flight.id} className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Hãng Hàng Không</p>
                    <p className="font-semibold">{flight.airline}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold">{flight.departureTime}</p>
                    <p className="text-sm text-muted-foreground">{flight.departure}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-px w-8 bg-border" />
                      <Plane className="w-4 h-4 text-accent" />
                      <div className="h-px w-8 bg-border" />
                    </div>
                    <p className="text-sm text-muted-foreground">{flight.duration}</p>
                    <p className="text-xs text-muted-foreground">
                      {flight.stops === 0 ? "Không dừng" : `${flight.stops} dừng`}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold">{flight.arrivalTime}</p>
                    <p className="text-sm text-muted-foreground">{flight.arrival}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{flight.price.toLocaleString()} đ</p>
                    <Link href={`/flight-details/${flight.id}`}>
                      <Button className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
                        Xem Chi Tiết
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
