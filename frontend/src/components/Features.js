import React from 'react';

function Features() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="features" id="features">
      <h2 className="about-title"> QRanty giúp bạn những gì</h2>
      {/* <div className="stat">
        <span className="stat-number">500</span>
        <span>Doanh Nghiệp & Đối tác </span>
      </div> */}
      <div className="card-grid">
        <div className="card">
          <h3>Đơn giản hoá quy trình bảo hành</h3>
          <p>Quét mã QR để kích hoạt bảo hành chỉ với 1 chạm, khách hàng của bạn sẽ cảm thấy tiện dụng. Bạn có thể tận dụng mã QR để thiết lập Hướng dẫn sử dụng cho khách hàng.</p>
        </div>
        <div className="card">
          <h3>Tiết Kiệm Thời Gian</h3>
          <p>Tự động điền dữ liệu sản phẩm bảo hành từ kết nối với hệ thống doanh nghiệp, không tốn thời gian nhập liệu.</p>
        </div>
         <div className="card">
          <h3>Cá nhân hóa giải pháp</h3>
          <p>Tính năng, giao diện, cơ sở dữ liệu,... tùy chỉnh theo yêu cầu, tăng độ nhận diện thương hiệu và uy tín doanh nghiệp.</p>
        </div>
        <div className="card">
          <h3>Tự Động Hóa Thông Báo</h3>
          <p>Tích hợp thông báo tự động qua email/sms cho doanh nghiệp và cả khách hàng.</p>
        </div>
         <div className="card">
          <h3>Hỗ Trợ Trực Tuyến</h3>
          <p>Truy cập ngay lập tức vào hướng dẫn sử dụng và video hướng dẫn sau khi kích hoạt.</p>
        </div>
      </div>
      {/* <div className="trial-section">
        <h3>Hãy đăng ký để  trải nghiệm miễn phí. </h3>
        <button onClick={scrollToTop}>Bắt đầu</button>
      </div> */}
    </section>
  );
}

export default Features;