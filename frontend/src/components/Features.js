import React from 'react';
import '../App.css';
import '../style/Feature.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="about-title">Tính Năng Nổi Bật Của Qranty</h2>

      <div className="features-layout">
        <div className="card-grid">
          <div className="card">
            <h3>Bảng điều khiển & Theo dõi hành vi người dùng:</h3>
            <p>
              Hiển thị dữ liệu theo thời gian thực, phân tích xu hướng và nhu cầu người dùng → 
              giúp doanh nghiệp ra quyết định nhanh, tối ưu hóa quản lý bảo hành sản phẩmvà chiến lược.
            </p>
          </div>

          <div className="card">
            <h3>Công cụ thúc đẩy doanh thu cho thương hiệu:</h3>
            <p>
              Khai thác dữ liệu từ QR quản lý bảo hành để tạo insight, triển khai marketing mục tiêu, bán bảo hành mở rộng → 
              biến dịch vụ hậu mãi thành cơ hội tăng doanh thu.
            </p>
          </div>

          <div className="card">
            <h3>Thu thập dữ liệu không gián đoạn:</h3>
            <p>
              Tự động thu thập thông tin qua QR bảo hành thông minh→ không cần nhập tay, giảm lỗi, tăng hiệu quả bảo hành và cải thiện trải nghiệm người dùng.
            </p>
          </div>

          <div className="card">
            <h3>Knowledge Base & Chatbot AI:</h3>
            <p>
              Cung cấp thông tin sản phẩm, hướng dẫn sử dụng qua hệ thống bảo hành thông minh. Chatbot AI hỗ trợ 24/7 → nâng cao chăm sóc khách hàng, giảm tải cho đội ngũ hỗ trợ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;