import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      {/* <h3 className="about-subtitle">Giới thiệu</h3> */}
      <h2 className="about-title">Giới thiệu Về QRanty </h2>
      <div className="about-content">
        <div className="team-image-placeholder">
          <img src="../pic/bg.jpg" alt="QRanty Team" className="team-image" />
        </div>
        <div className="about-text">
          <h3 className="about-highlight">Qranty giải pháp bảo hành "một" chạm</h3>
          <p>
            QRanty - Giải pháp bảo hành thông minh, cho phép <strong>kích hoạt bảo hành tức thì</strong> chỉ với một lần quét mã QR. 
            Tích hợp hệ thống CRM, tự động cập nhật thông tin sản phẩm và khách hàng. 
            Khác biệt hoàn toàn với bảo hành truyền thống, QRanty <strong>giảm thiểu nhập liệu thủ công</strong>, 
            mang đến trải nghiệm <strong>đơn giản, nhanh chóng</strong> và hiện đại cho khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;