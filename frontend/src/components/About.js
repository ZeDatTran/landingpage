import React from "react";
import "../style/About.css";

function About() {
const YOUTUBE_URL = "https://www.youtube.com/embed/ZHG0AeI56Kk?rel=0&modestbranding=1"; // thay đổi ở đây


  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="team-image-placeholder">
          <div className="team-video-wrapper">
            <iframe
              className="team-video"
              src={YOUTUBE_URL}
              title="Qranty demo video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <div className="about-text">
          <h2
            className="about-title"
            style={{ textAlign: "left", color: "#223a7a" }}
          >
            Qranty giải pháp bảo hành{" "}
            <span className="about-highlight">"một chạm"</span>
          </h2>
          <p>
            Cho phép kích hoạt bảo hành tức thì{" "}
            <strong>chỉ với một lần quét mã QR.</strong>
            {" "}Cập nhật thông tin sản phẩm và khách hàng tự động. Qranty giảm thiểu nhập liệu thủ công,
            mang đến trải nghiệm đơn giản, nhanh chóng và hiện đại cho khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;