import { Zap, TrendingDown, Award } from "lucide-react"

export function PromoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-accent/20 rounded-full mb-4">
              <TrendingDown className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Giá Tốt Nhất</h3>
            <p className="text-muted-foreground">Đảm bảo giá thấp nhất trên thị trường với so sánh giá tức thì</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-accent/20 rounded-full mb-4">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Nhanh Chóng</h3>
            <p className="text-muted-foreground">Đặt vé chỉ trong vài phút mà không cần phải mở nhiều tab</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-accent/20 rounded-full mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Được Tin Tưởng</h3>
            <p className="text-muted-foreground">Được công nhận là dịch vụ hàng không hàng đầu trong khu vực</p>
          </div>
        </div>
      </div>
    </section>
  )
}
