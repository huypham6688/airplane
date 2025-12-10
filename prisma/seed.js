const { PrismaClient } = require("@prisma/client");



const prisma = new PrismaClient()

async function main() {
  await prisma.heroContent.upsert({
    where: { id: 1 },
    update: {
      title: "Book a private jet instantly",
      subtitle:
        "Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services.",
      tagline: "Flynext",
      ctaPrimaryText: "Make Your Trip",
      ctaSecondaryText: "Request Quote",
      backgroundImage: "/sky.jpg",
      planeImage: "/plane.png",
    },
    create: {
      id: 1,
      title: "Book a private jet instantly",
      subtitle:
        "Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services.",
      tagline: "Flynext",
      ctaPrimaryText: "Make Your Trip",
      ctaSecondaryText: "Request Quote",
      backgroundImage: "/sky.jpg",
      planeImage: "/plane.png",
    },
  })

  await prisma.feature.deleteMany()
  await prisma.feature.createMany({
    data: [
      {
        iconKey: "plane",
        title: "Chuyến Bay Đa Dạng",
        description: "Lựa chọn từ hàng trăm hãng hàng không và các tuyến đường trên khắp thế giới",
        sortOrder: 1,
      },
      {
        iconKey: "shield",
        title: "An Toàn & Bảo Mật",
        description: "Các chuyến bay được kiểm tra an toàn kỹ lưỡng với bảo hiểm toàn diện",
        sortOrder: 2,
      },
      {
        iconKey: "zap",
        title: "Đặt Nhanh Chóng",
        description: "Quá trình đặt vé đơn giản chỉ trong 3 bước, nhanh và dễ dàng",
        sortOrder: 3,
      },
      {
        iconKey: "globe",
        title: "Hỗ Trợ Toàn Cầu",
        description: "Dịch vụ khách hàng 24/7 bằng nhiều ngôn ngữ trên toàn thế giới",
        sortOrder: 4,
      },
    ],
  })

  await prisma.testimonial.deleteMany()
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Nguyễn Văn A",
        role: "Doanh nhân",
        text: "Dịch vụ tuyệt vời! Rất hài lòng với quá trình đặt vé và hỗ trợ khách hàng.",
        rating: 5,
        avatar: "NVA",
        sortOrder: 1,
      },
      {
        name: "Trần Thị B",
        role: "Du khách",
        text: "Giá cả hợp lý và quy trình đơn giản. Tôi sẽ giới thiệu cho bạn bè.",
        rating: 5,
        avatar: "TTB",
        sortOrder: 2,
      },
      {
        name: "Phạm Minh C",
        role: "Nhân viên công ty",
        text: "Tuyệt vời! Tôi thường xuyên đặt vé qua SkyVoyage vì sự tin cậy.",
        rating: 5,
        avatar: "PMC",
        sortOrder: 3,
      },
    ],
  })

  await prisma.faq.deleteMany()
  await prisma.faq.createMany({
    data: [
      {
        question: "Làm thế nào để đặt vé máy bay?",
        answer:
          "Chỉ cần nhập điểm khởi hành, điểm đến, và ngày đi. Chúng tôi sẽ hiển thị các tùy chọn chuyến bay và bạn có thể chọn theo ý thích.",
        sortOrder: 1,
      },
      {
        question: "Tôi có thể hủy hoặc thay đổi chuyến bay không?",
        answer:
          "Có, bạn có thể hủy hoặc thay đổi chuyến bay tùy thuộc vào chính sách của hãng hàng không. Chi tiết sẽ được hiển thị trước khi thanh toán.",
        sortOrder: 2,
      },
      {
        question: "Có phí bổ sung không?",
        answer:
          "Giá hiển thị là giá cuối cùng, không có phí bổ sung ẩn. Tất cả các chi phí sẽ được rõ ràng hiển thị trước thanh toán.",
        sortOrder: 3,
      },
      {
        question: "Tôi sẽ nhận vé khi nào?",
        answer:
          "Vé sẽ được gửi ngay đến email của bạn sau khi thanh toán thành công. Bạn cũng có thể xem vé trong tài khoản của mình.",
        sortOrder: 4,
      },
      {
        question: "Làm sao tôi liên hệ với bộ phận hỗ trợ khách hàng?",
        answer:
          "Bạn có thể liên hệ với chúng tôi 24/7 qua email, điện thoại, hoặc trò chuyện trực tiếp trên website. Chúng tôi sẵn sàng giúp đỡ.",
        sortOrder: 5,
      },
    ],
  })

  await prisma.flight.deleteMany()
  await prisma.flight.createMany({
    data: [
      {
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
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

