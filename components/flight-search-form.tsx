"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Plane } from "lucide-react"

export function FlightSearchForm() {
  const [tripType, setTripType] = useState("round")

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background -mt-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tìm Chuyến Bay Của Bạn</h2>

          <div className="mb-8 flex flex-wrap gap-4 bg-muted/50 p-4 rounded-lg">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-muted/80 px-3 py-2 rounded transition">
              <input
                type="radio"
                value="round"
                checked={tripType === "round"}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-foreground font-medium">Khứ hồi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-muted/80 px-3 py-2 rounded transition">
              <input
                type="radio"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-foreground font-medium">Một chiều</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:bg-muted/80 px-3 py-2 rounded transition">
              <input
                type="radio"
                value="multi"
                checked={tripType === "multi"}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-foreground font-medium">Nhiều điểm dừng</span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Điểm khởi hành</label>
              <div className="flex items-center gap-2 px-4 py-3 bg-input border border-border rounded-lg hover:border-accent/50 transition">
                <MapPin className="w-5 h-5 text-accent" />
                <input
                  type="text"
                  placeholder="Từ đâu?"
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Điểm đến</label>
              <div className="flex items-center gap-2 px-4 py-3 bg-input border border-border rounded-lg hover:border-accent/50 transition">
                <MapPin className="w-5 h-5 text-accent" />
                <input
                  type="text"
                  placeholder="Đến đâu?"
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Ngày đi</label>
              <div className="flex items-center gap-2 px-4 py-3 bg-input border border-border rounded-lg hover:border-accent/50 transition">
                <Calendar className="w-5 h-5 text-accent" />
                <input type="date" className="flex-1 bg-transparent outline-none text-foreground" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Khách hàng</label>
              <div className="flex items-center gap-2 px-4 py-3 bg-input border border-border rounded-lg hover:border-accent/50 transition">
                <Users className="w-5 h-5 text-accent" />
                <select className="flex-1 bg-transparent outline-none text-foreground">
                  <option>1 khách</option>
                  <option>2 khách</option>
                  <option>3 khách</option>
                  <option>4+ khách</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <button className="px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <Plane className="w-5 h-5" />
                Tìm Vé
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
