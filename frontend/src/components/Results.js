import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"; // hoặc './Results.css' nếu tách riêng

const Result = () => {
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

  return (
    <section className="results-section" id ='results'>
      <div className="results-container">
        {/* Hình bên trái */}
        <div className="left-content">
          <div className="phone-img" />
        </div>

        {/* Text + Slide bên phải */}
        <div className="right-content">
          <h2 className="headline">
            Đăng ký bảo hành
            chỉ với <span className="highlight">một chạm</span>
          </h2>
          <p className="description">
            <strong>Mobile site cho Qranty </strong> kích hoạt bảo hành thông qua việc khách hàng sau khi quét mã QR trên sản phẩm</p>

          <Slider {...settings}>
            <div>
              <img src="/assets/pic1.png" alt="Slide 1" className="sample-img" />
            </div>
            <div>
              <img src="/assets/pic3.png" alt="Slide 2" className="sample-img" />
            </div>
            <div>
              <img src="/assets/pic4.png" alt="Slide 3" className="sample-img" />
            </div>
             <div>
              <img src="/assets/pic2.png" alt="Slide 3" className="sample-img" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Result;
