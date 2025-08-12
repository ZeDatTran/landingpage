import React, { useEffect, useRef, useState } from "react";
import "../style/Feature.css";

import cskh1 from "../pic/cskh1.png";
import cskh2 from "../pic/cskh2.png";
import cskh3 from "../pic/cskh3.png";

import qc1 from "../pic/qc1.png";
import qc2 from "../pic/qc2.png";
import qc3 from "../pic/qc3.png";
import qc4 from "../pic/qc4.png";

import gcp1 from "../pic/gcp1.png";

function Slideshow({ images = [], interval = 3500 }) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const count = images.length;

  const start = () => {
    stop();
    if (count > 1) {
      timerRef.current = setInterval(() => {
        setIdx((i) => (i + 1) % count);
      }, interval);
    }
  };
  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    start();
    return stop;
    // restart khi thay đổi số ảnh hoặc tốc độ
  }, [count, interval]);

  const prev = () => setIdx((i) => (i - 1 + count) % count);
  const next = () => setIdx((i) => (i + 1) % count);

  if (!count) {
    return (
      <div className="why-thumb" />
    );
  }

  return (
    <div
      className="why-thumb"
      onMouseEnter={stop}
      onMouseLeave={start}
      role="group"
      aria-roledescription="carousel"
      aria-label="Ảnh minh hoạ"
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`why-slide ${i === idx ? "is-active" : ""}`}
          aria-hidden={i !== idx}
        />
      ))}

      {count > 1 && (
        <>
          <button className="why-nav why-nav--prev" onClick={prev} aria-label="Ảnh trước">‹</button>
          <button className="why-nav why-nav--next" onClick={next} aria-label="Ảnh tiếp theo">›</button>
          <div className="why-dots" role="tablist" aria-label="Đi tới ảnh">
            {images.map((_, i) => (
              <button
                key={i}
                className={`why-dot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Ảnh ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}



const CARDS = [
  {
    title: ["Chăm sóc khách hàng", "tốt hơn"],
    desc:
      "Bảng điều khiển phân tích hành vi giúp hiểu nỗi đau khách hàng, hỗ trợ nhanh chóng qua chatbot AI, Call Center, SMS.",
    percent: 50,
    images: [cskh1, cskh2, cskh3],   // bộ ảnh riêng #1
    interval: 3200,
  },
  {
    title: ["Tạo hiệu quả quảng cáo", "sau bán hàng"],
    desc:
      "Quảng cáo, thông báo sản phẩm/dịch vụ mới qua mobile site, SMS, Call Center, Knowledge Page.",
    percent: 40,
    images: [qc1, qc2, qc3, qc4],    // bộ ảnh riêng #2
    interval: 2800,
  },
  {
    title: ["Giảm chi phí, tăng", "doanh thu"],
    desc:
      "Giảm chi phí nhân lực CSKH/bảo hành thủ công. Từ bảo hành mở rộng đến bán chéo sản phẩm.",
    percent: 20,
    images: [gcp1],            // bộ ảnh riêng #3
    interval: 4000,
  },
];

export default function Features() {
  return (
    <section className="features why" id="features">
      <h2 className="about-title why-heading">Vì Sao Chọn Qranty?</h2>

      <div className="why-grid">
        {CARDS.map((c, i) => (
          <article className="why-card why-card--lg" key={i} tabIndex={0}>
            <Slideshow images={c.images} interval={c.interval ?? 3500} />

            <h3 className="why-title">
              {c.title.map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>

            <p className="why-desc">{c.desc}</p>

            <div className="why-badge" aria-label={`Tăng ${c.percent}%`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{c.percent}%</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
