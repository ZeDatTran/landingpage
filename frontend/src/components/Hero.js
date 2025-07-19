import React, { useState } from 'react';
import '../App.css';

function Hero() {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/submit-demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Yêu cầu demo đã được gửi!');
      setIsModalOpen(false);
    } else {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
         Bảo hành “một” chạm<br />với QRanty
        </h1>
        <div className="hero-subtitle">
            <ul style={{ listStyle: 'none' }}>
                <li>✓ Giải pháp bảo hành thông minh</li>
                <li>✓ Quản lý bảo hành sản phẩm</li>
                <li>✓ Tăng hiệu quả bảo hành</li>
            </ul>
        </div>
        <button className="hero-contact-cta" onClick={() => setIsModalOpen(true)}>Liên hệ ngay</button>
      </div>
      <div className="video-container">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/GptSPZbGOyA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button className="form-cta" onClick={() => setIsModalOpen(true)}>Nhận thông tin</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
            <form className="demo-form" onSubmit={handleSubmit}>
              <h2>Nhận Thêm Thông Tin</h2>
              <input type="text" name="contactName" placeholder="Tên liên hệ*" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email*" onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Số điện thoại*" onChange={handleChange} required />
              <input type="text" name="company" placeholder="Công ty*" onChange={handleChange} required />
              <textarea name="message" placeholder="Nhập yêu cầu" onChange={handleChange} />
              <button type="submit">Gửi yêu cầu</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;