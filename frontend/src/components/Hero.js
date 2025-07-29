import React, { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Kiểm tra đã tồn tại form chưa để tránh chèn lại nhiều lần
      if (document.querySelector("#hubspotForm > iframe")) return;

      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na2", // ✅ đúng khu vực tài khoản của bạn
            portalId: "243256377", // ✅ thay bằng portalId thực
            formId: "64d996ea-bedd-448a-a973-917de06a98b9", // ✅ thay bằng formId thực
            target: "#hubspotForm",
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [isModalOpen]);

  return (
    <section className="hero">
      <div className="blur-ball top-left"></div>
      <div className="blur-ball bottom-right"></div>

      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Bảo hành <span className="hight-light1">"một chạm"</span>
            <br />
            với QRanty.
            
          </h1>
          <div className="hero-subtitle">
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="subtitle">✅ Giải pháp bảo hành thông minh</li>
              <li className="subtitle">📦 Quản lý bảo hành sản phẩm</li>
              <li className="subtitle">⚡ Kích hoạt bảo hành tức thì</li>
            </ul>
            <button
              className="hero-contact-cta"
              onClick={() => setIsModalOpen(true)}
            >
              Liên hệ ngay
            </button>
          </div>
        </div>
        <div className="img-container">
          <img src="/assets/qranty_phone.png" alt="qranty phone" />
        </div>
      </div>

      <button className="form-cta" onClick={() => setIsModalOpen(true)}>
        Nhận thông tin
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            
            <div id="hubspotForm"></div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
