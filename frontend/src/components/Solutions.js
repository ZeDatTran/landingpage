import React from 'react';
import '../App.css';

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions-container">
        <div className="solutions-content">
          <h2 className="solutions-title">Giải pháp của QRanty</h2>
          <div className="solutions-list">

            <div className="solution-item normal solution-item-1">
              <div className="solution-image-wrapper solution-image-1"></div>
              <div className="solution-text">
                <h3>Tự động cập nhật thông tin khách hàng lên CRM</h3>
                <ul className="tick-list">
                  <li>Kích hoạt bảo hành tức thì qua QR Code bằng gửi thông báo SMS Brandname kích hoạt tới SĐT người tiêu dùng.</li>
                  <li>Theo dõi trạng thái bảo hành trực tuyến</li>
                  <li>Xác thực sản phẩm chính hãng ngay lập tức</li>
                  <li>Đồng bộ dữ liệu khách hàng với hệ thống CRM để dễ quản lý</li>
                </ul>
              </div>
            </div>

            <div className="solution-item reverse solution-item-2">
              <div className="solution-image-wrapper solution-image-2"></div>
              <div className="solution-text">
                <h3>Mobile site trực quan dễ thao tác </h3>
                <ul className="tick-list">
                  <li>Tự động hóa quy trình bảo hành, giảm chi phí nhân lực với đầy đủ tính năng quản lý </li>
                  <li>Sử dụng QR Code để kiểm soát hàng giả hiệu quả</li>
                  <li>Cung cấp các video giới thiệu và hướng dẫn sử dụng của sản phẩm</li>
                  <li>Cải thiện trải nghiệm người tiêu dùng, tăng độ tin cậy</li>
                </ul>
              </div>
            </div>

            {/* <div className="solution-item normal solution-item-3">
              <div className="solution-image-wrapper solution-image-3"></div>
              <div className="solution-text">
                <h3>Giải pháp tích hợp CRM</h3>
                <ul className="tick-list">
                  <li>Đồng bộ dữ liệu khách hàng với hệ thống CRM</li>
                  <li>Tối ưu hóa quản lý thông tin bảo hành</li>
                  <li>Hỗ trợ phân tích hành vi khách hàng hiệu quả</li>
                </ul>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
