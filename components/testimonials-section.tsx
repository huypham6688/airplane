import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Testimonial = {
  id?: number
  name: string
  role: string
  text: string
  rating: number
  avatar: string
}

const fallbackTestimonials: Testimonial[] = [
  {
    name: "Nguyễn Văn A",
    role: "Doanh nhân",
    text: "Dịch vụ tuyệt vời! Rất hài lòng với quá trình đặt vé và hỗ trợ khách hàng.",
    rating: 5,
    avatar: "NVA",
  },
  {
    name: "Trần Thị B",
    role: "Du khách",
    text: "Giá cả hợp lý và quy trình đơn giản. Tôi sẽ giới thiệu cho bạn bè.",
    rating: 5,
    avatar: "TTB",
  },
  {
    name: "Phạm Minh C",
    role: "Nhân viên công ty",
    text: "Tuyệt vời! Tôi thường xuyên đặt vé qua SkyVoyage vì sự tin cậy.",
    rating: 5,
    avatar: "PMC",
  },
]

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] | null }) {
  const items = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Đánh Giá Từ Khách Hàng</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Hàng ngàn khách hàng hài lòng đã tin tưởng chúng tôi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((testimonial, idx) => (
            <div
              key={testimonial.id ?? idx}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition border border-border hover:border-accent/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-accent text-accent-foreground font-bold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
