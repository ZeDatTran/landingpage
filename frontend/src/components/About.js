import React from 'react';
import '../style/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="team-video-placeholder">
          <iframe
            width="100%"
            height="280"
            src="https://www.youtube.com/embed/FF4dzjhUm5E?start=100"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-text">
          <h2 className="about-title">Qranty - Giải pháp bảo hành thông minh <span className="about-highlight">"một chạm"</span></h2>
          <p>
            Qranty cung cấp giải pháp bảo hành thông minh, kích hoạt tức thì qua quét mã QR, tích hợp CRM tự động cập nhật dữ liệu,
            tiết kiệm chi phí, giảm nhập liệu thủ công, mang lại trải nghiệm đơn giản, nhanh chóng cho doanh nghiệp và khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;