import React from 'react';
import '../App.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="about-title">Tính Năng Nổi Bật Của Qranty</h2>

      <div className="features-layout">
        <div className="feature-image-left"></div>

        <div className="card-grid">
          <div className="card">
            <h3>Kích Hoạt & Thông Tin</h3>
            <p>
              Quét mã QR để kích hoạt bảo hành chỉ với 1 chạm.<br/>
              Quản lý bảo hành dễ dàng với thông tin rõ ràng.<br/>
              Bạn có thể tận dụng mã QR để thiết lập Hướng dẫn sử dụng cho khách hàng.
            </p>
          </div>

          <div className="card">
            <h3>Cá nhân hóa giải pháp</h3>
            <p>
              Tính năng, giao diện, cơ sở dữ liệu,... tùy chỉnh theo yêu cầu, tăng độ nhận diện thương hiệu và uy tín doanh nghiệp.
            </p>
          </div>

          <div className="card">
            <h3>Insights & Analytics</h3>
            <p>
              Hiểu Biết Hành Vi: Xác định xu hướng và nhu cầu khách hàng.<br/>
              Tối Ưu Hóa Quy Trình: Cải thiện quản lý bảo hành và chiến lược marketing.<br/>
              Thúc Đẩy Tăng Trưởng: Biến dữ liệu thành cơ hội kinh doanh, tăng lòng trung thành.
            </p>
          </div>

          <div className="card">
            <h3>Hỗ Trợ Trực Tuyến</h3>
            <p>
              Có thể tích hợp dịch vụ call center dựa trên hệ thống của Gcalls để người tiêu dùng có thể liên hệ trực tiếp tới đội ngũ bảo hành khi gặp vấn đề.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
