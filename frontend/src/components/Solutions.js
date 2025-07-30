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
                  <h3>Giải pháp Kích hoạt và Quản lý Bảo hành</h3>
                <p className="solution-description">Hỗ trợ người tiêu dùng kích hoạt và theo dõi bảo hành dễ dàng với công nghệ QR hiện đại.</p>
                <ul className="tick-list">
                  <li>Kích hoạt bảo hành tức thì bằng quét QR chuyển hướng đến mobile site bảo hành của doanh nghiệp.</li>
                  <li>Gửi SMS thông tin bảo hành và hướng dẫn qua User Guide chi tiết.</li>
                  <li>Tra cứu nhanh Knowledge Page để  xem thông tin sản phẩm và xác nhận chính hãng.</li>
                </ul>
              </div>
            </div>

            <div className="solution-item reverse solution-item-2">
              <div className="solution-image-wrapper solution-image-2"></div>
              <div className="solution-text">
                <h3>Giải pháp Hỗ trợ Doanh nghiệp</h3>
                <p className="solution-description">Tối ưu hóa quy trình doanh nghiệp và tích hợp dữ liệu khách hàng để tăng hiệu quả.</p>
                <ul className="tick-list">
                  <li>Tích hợp CRM và Call Center, giảm thời gian xử lý bảo hành.</li>
                  <li>Thu thập Customer Information và Purchase Information để phân tích sâu.</li>
                  <li>Cung cấp Insights và chiến lược Marketing dựa trên dữ liệu thực tế.</li>
                </ul>
              </div>
            </div>


            <div className="solution-item normal solution-item-3">
              <div className="solution-image-wrapper solution-image-3"></div>
              <div className="solution-text">
                  <h3>Giải pháp Mở rộng và Tăng trưởng</h3>
                <p className="solution-description">Mở rộng doanh thu và xây dựng lòng trung thành với các dịch vụ bổ sung.</p>
                <ul className="tick-list">
                  <li>Đề xuất Paid-Extended Warranty.</li>
                  <li>Tối ưu hóa Marketing với dữ liệu từ khách hàng hiện tại.</li>
                  <li>Hỗ trợ Request và Contact để nâng cao dịch vụ khách hàng.</li>
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
