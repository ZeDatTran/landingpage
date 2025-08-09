import React from "react";
import "../style/About.css";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="team-image-placeholder"></div>
        <div className="about-text">
          <h2
            className="about-title"
            style={{ textAlign: "left", color: "#223a7a" }}
          >
            Qranty giải pháp bảo hành{" "}
            <span className="about-highlight ">"một chạm"</span>
          </h2>
          <p>
            QRanty - Giải pháp bảo hành thông minh, cho phép{" "}
            <strong>kích hoạt bảo hành tức thì</strong> chỉ với một lần quét mã
            QR. Tích hợp hệ thống CRM, tự động cập nhật thông tin sản phẩm và
            khách hàng. Khác biệt hoàn toàn với bảo hành truyền thống, QRanty{" "}
            <strong>giảm thiểu nhập liệu thủ công</strong>, mang đến trải nghiệm{" "}
            <strong>đơn giản, nhanh chóng</strong> và hiện đại cho khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
