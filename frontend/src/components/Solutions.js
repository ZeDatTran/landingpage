  import React from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import '../style/Solution.css';

  const Solutions = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
    };

    const solutionsData = [
      {
        id: 1,
        title: "Kích hoạt bảo hành nhanh tiện lợi.",
        description: "Kích hoạt và theo dõi bảo hành nhanh chóng, tiện lợi chỉ với một lần quét QR.",
        list: [
          "Quét QR để kích hoạt bảo hành tức thì trên mobile site.",
          "Gửi thông tin bảo hành qua Zalo OA kèm hướng dẫn chi tiết.",
          "Tra cứu nhanh Knowledge Base cùng với chatbot AI hỗ trợ 24/7.",  
          "Xác thực sản phẩm, chống hàng giả, tăng niềm tin người mua.",
        ],
        imageClass: "solution-image-1",
        slides: ["/assets/cuspic1.png", "/assets/cuspic2.png","/assets/cuspic3.png","/assets/cuspic4.png"]
      },
      {
        id: 2,
        title: "Cung cấp mô hình SaaS quản lý hệ thống bảo hành.",
        description: "Tối ưu quản lý bảo hành – Đồng bộ dữ liệu & định danh thương hiệu",
        list: [
          "Tiết kiệm chi phí, giảm tải cho CSKH.",
          "Tích hợp CRM, Call Center & 30+ công cụ toàn cầu.",
          "Thu thập dữ liệu không gián đoạn qua QR, phân tích qua dashboard hành động.",
          "Chuyển hậu mãi thành bán hàng liên tục, tăng giữ chân khách hàng",
        ],
        imageClass: "solution-image-2",
        slides: ["/assets/1pic1.png", "/assets/1pic4.png", "/assets/1pic2.png","/assets/1pic3.png"]
      },
    ];

    return (
      <section className="solutions-section" id="solutions">
        <h2 className="solutions-title fade-in delay-1">Giải pháp của Qranty</h2>

        {solutionsData.map((item, index) => (
          <div className={`solution-block ${index % 2 === 1 ? 'reverse' : ''}`} key={item.id}>
            <div className={`solution-img ${item.imageClass} fade-in delay-1`} />
            <div className="solution-text-content">
              <h3 className="fade-in delay-2">{item.title}</h3>
              <p className="solution-description fade-in delay-3">{item.description}</p>
              <ul className="solution-tick-list fade-in delay-4">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="fade-in delay-4">
                <Slider {...settings}>
                  {item.slides.map((src, i) => (
                    <div key={i}>
                      <img src={src} alt={`slide ${i}`} className="solution-slider-img" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  export default Solutions;
