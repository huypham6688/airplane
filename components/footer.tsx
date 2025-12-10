import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6" />
              <span className="text-2xl font-bold">SkyVoyage</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Đặt vé máy bay nhanh, dễ dàng, và an toàn với dịch vụ hạng nhất.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Công Ty</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Cơ hội việc làm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Báo chí
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Chính sách riêng tư
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>+84 (0)123 456 789</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>support@skyvoyage.vn</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-primary-foreground/80">&copy; 2025 SkyVoyage. Tất cả các quyền được bảo lưu.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-primary-foreground/60 text-sm">
            <a href="#" className="hover:text-accent transition">
              Điều Khoản
            </a>
            <a href="#" className="hover:text-accent transition">
              Riêng Tư
            </a>
            <a href="#" className="hover:text-accent transition">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
