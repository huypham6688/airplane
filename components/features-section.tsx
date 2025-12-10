import { Globe, Plane, Shield, Zap } from "lucide-react"

type Feature = {
  id?: number
  iconKey: string
  title: string
  description: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plane: Plane,
  shield: Shield,
  zap: Zap,
  globe: Globe,
}

const fallbackFeatures: Feature[] = [
  {
    iconKey: "plane",
    title: "Chuyến Bay Đa Dạng",
    description: "Lựa chọn từ hàng trăm hãng hàng không và các tuyến đường trên khắp thế giới",
  },
  {
    iconKey: "shield",
    title: "An Toàn & Bảo Mật",
    description: "Các chuyến bay được kiểm tra an toàn kỹ lưỡng với bảo hiểm toàn diện",
  },
  {
    iconKey: "zap",
    title: "Đặt Nhanh Chóng",
    description: "Quá trình đặt vé đơn giản chỉ trong 3 bước, nhanh và dễ dàng",
  },
  {
    iconKey: "globe",
    title: "Hỗ Trợ Toàn Cầu",
    description: "Dịch vụ khách hàng 24/7 bằng nhiều ngôn ngữ trên toàn thế giới",
  },
]

export function FeaturesSection({ features }: { features: Feature[] | null }) {
  const items = features && features.length > 0 ? features : fallbackFeatures

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Tại sao chọn SkyVoyage?</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Chúng tôi cung cấp trải nghiệm đặt vé hàng không tốt nhất với giá tốt nhất
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((feature, idx) => {
            const Icon = iconMap[feature.iconKey] ?? Plane
            return (
              <div
                key={feature.id ?? idx}
                className="bg-card rounded-xl p-6 text-center hover:shadow-xl transition border border-border hover:border-accent/50"
              >
                <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
