import React from 'react';
import '../style/Testimonial.css';

function Testimonials() {
  return (
    <section className="testimonials-chat" id="testimonials">
      <div className="testimonial-chat-container">
        <div className="chat-bubble right">
          <p>"QRanty đã giúp chúng tôi tối ưu hóa quá trình quản lý bảo hành."</p>
          <cite>- Khách hàng A</cite>
        </div>
        <div className="chat-bubble left">
          <p>"Giải pháp QR Code rất tiện lợi và dễ sử dụng."</p>
          <cite>- Khách hàng B</cite>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
