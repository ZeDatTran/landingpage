import React from 'react';
import '../App.css';

function Testimonials() {
  return (
    <section className="testimonials" id ="testimonials">
      <h2 className="testimonials-title">Ý Kiến Của Khách Hàng</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src="./pic/testimonial1.jpg" alt="Khách hàng A" className="testimonial-image" />
          <div className="testimonial-text">
            <p>"QRanty đã giúp chúng tôi bảo vệ dữ liệu hiệu quả."</p>
            <cite>- Khách hàng A</cite>
          </div>
        </div>
        <div className="testimonial-card">
          <img src="./pic/testimonial2.jpg" alt="Khách hàng B" className="testimonial-image" />
          <div className="testimonial-text">
            <p>"Giải pháp QR Code rất tiện lợi và dễ sử dụng."</p>
            <cite>- Khách hàng B</cite>
          </div>
        </div>
        <div className="testimonial-card">
          <img src="./pic/testimonial3.jpg" alt="Khách hàng C" className="testimonial-image" />
          <div className="testimonial-text">
            <p>"Chương trình Loyalty mang lại lợi ích lớn cho doanh nghiệp."</p>
            <cite>- Khách hàng C</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;