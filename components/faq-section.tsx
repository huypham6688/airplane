"use client"

import { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"

type Faq = {
  id: number
  question: string
  answer: string
}

const fallbackFaqs: Faq[] = [
  {
    id: 1,
    question: "Làm thế nào để đặt vé máy bay?",
    answer:
      "Chỉ cần nhập điểm khởi hành, điểm đến, và ngày đi. Chúng tôi sẽ hiển thị các tùy chọn chuyến bay và bạn có thể chọn theo ý thích.",
  },
  {
    id: 2,
    question: "Tôi có thể hủy hoặc thay đổi chuyến bay không?",
    answer:
      "Có, bạn có thể hủy hoặc thay đổi chuyến bay tùy thuộc vào chính sách của hãng hàng không. Chi tiết sẽ được hiển thị trước khi thanh toán.",
  },
  {
    id: 3,
    question: "Có phí bổ sung không?",
    answer:
      "Giá hiển thị là giá cuối cùng, không có phí bổ sung ẩn. Tất cả các chi phí sẽ được rõ ràng hiển thị trước thanh toán.",
  },
  {
    id: 4,
    question: "Tôi sẽ nhận vé khi nào?",
    answer:
      "Vé sẽ được gửi ngay đến email của bạn sau khi thanh toán thành công. Bạn cũng có thể xem vé trong tài khoản của mình.",
  },
  {
    id: 5,
    question: "Làm sao tôi liên hệ với bộ phận hỗ trợ khách hàng?",
    answer:
      "Bạn có thể liên hệ với chúng tôi 24/7 qua email, điện thoại, hoặc trò chuyện trực tiếp trên website. Chúng tôi sẵn sàng giúp đỡ.",
  },
]

export function FaqSection({ faqs }: { faqs: Faq[] | null }) {
  const items = useMemo(() => (faqs && faqs.length > 0 ? faqs : fallbackFaqs), [faqs])
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Câu Hỏi Thường Gặp</h2>
        <p className="text-center text-muted-foreground mb-12">Tìm câu trả lời cho những câu hỏi phổ biến của bạn</p>

        <div className="space-y-4">
          {items.map((faq, idx) => (
            <div
              key={faq.id ?? idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition"
              >
                <h3 className="font-bold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform flex-shrink-0 ml-4 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
