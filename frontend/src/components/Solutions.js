import React from 'react';
import '../App.css';

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions-container">
        <div className="solutions-image solutions-illustration"></div>
        <div className="solutions-content">
          <h2 className="solutions-title">Giải pháp của QRanty</h2>
          <div className="solutions-list">
            <div className="solution-item">
              <h3>Giải pháp cho người tiêu dùng</h3>
              <ul className="tick-list">
                <li>Dễ dàng kích hoạt bảo hành tức thì qua QR Code</li>
                <li>Theo dõi trạng thái bảo hành trực tuyến</li>
                <li>Xác thực sản phẩm chính hãng ngay sau khi mua hàng</li>
              </ul>
            </div>
            <div className="solution-item">
              <h3>Giải pháp cho doanh nghiệp</h3>
              <ul className="tick-list">
                <li>Tự động hóa quy trình bảo hành, giảm chi phí nhân lực</li>
                <li>Sử dụng QR Code để kiểm soát hàng giả hiệu quả</li>
                <li>Cải thiện trải nghiệm khách hàng, tăng độ tin cậy</li>
              </ul>
            </div>
            <div className="solution-item">
              <h3>Giải pháp tích hợp CRM</h3>
              <ul className="tick-list">
                <li>Đồng bộ dữ liệu khách hàng với hệ thống CRM</li>
                <li>Tối ưu hóa quản lý thông tin bảo hành</li>
                <li>Hỗ trợ phân tích hành vi khách hàng hiệu quả</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;