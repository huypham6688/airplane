"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Về SkyVoyage</h1>
            <p className="text-lg text-primary-foreground/80">Nền tảng đặt vé máy bay số 1 tại Việt Nam</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Sứ Mệnh Của Chúng Tôi</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                SkyVoyage được thành lập với mục đích giúp khách hàng dễ dàng tìm kiếm, so sánh và đặt vé máy bay với
                giá tốt nhất. Chúng tôi cam k承 cung cấp dịch vụ tốt nhất với đội ngũ hỗ trợ 24/7.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Với hơn 50 hãng hàng không và hàng triệu chuyến bay, chúng tôi mang đến cho bạn sự lựa chọn rộng rãi
                nhất.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Thống Kê</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span>Người dùng</span>
                  <span className="text-2xl font-bold text-accent">5M+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span>Đặt vé hàng năm</span>
                  <span className="text-2xl font-bold text-accent">10M+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span>Hãng hàng không</span>
                  <span className="text-2xl font-bold text-accent">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Quốc gia</span>
                  <span className="text-2xl font-bold text-accent">100+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Tại Sao Chọn SkyVoyage?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <Users className="w-12 h-12 mx-auto text-accent" />
                  <h3 className="font-semibold text-lg">Đội Ngũ Tuyệt Vời</h3>
                  <p className="text-sm text-muted-foreground">Hỗ trợ 24/7 từ đội ngũ chuyên nghiệp</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <Award className="w-12 h-12 mx-auto text-accent" />
                  <h3 className="font-semibold text-lg">Giá Tốt Nhất</h3>
                  <p className="text-sm text-muted-foreground">Cam kết giá rẻ nhất trên thị trường</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <Globe className="w-12 h-12 mx-auto text-accent" />
                  <h3 className="font-semibold text-lg">Toàn Cầu</h3>
                  <p className="text-sm text-muted-foreground">Đặt vé đi bất kỳ nơi đâu trên thế giới</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center space-y-4">
                  <Zap className="w-12 h-12 mx-auto text-accent" />
                  <h3 className="font-semibold text-lg">Nhanh Chóng</h3>
                  <p className="text-sm text-muted-foreground">Đặt vé chỉ trong vài phút</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Câu Chuyện Của Chúng Tôi</h2>
            <p className="text-muted-foreground mb-4">
              SkyVoyage được thành lập vào năm 2020 bởi một nhóm những người yêu thích du lịch. Chúng tôi nhận thấy rằng
              việc đặt vé máy bay quá phức tạp, vì vậy chúng tôi quyết định tạo ra một nền tảng đơn giản, dễ sử dụng và
              đáng tin cậy.
            </p>
            <p className="text-muted-foreground">
              Hôm nay, SkyVoyage đã trở thành một trong những nền tảng đặt vé hàng không lớn nhất tại Việt Nam, phục vụ
              hàng triệu khách hàng mỗi năm.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
