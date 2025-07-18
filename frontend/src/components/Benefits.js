import React from 'react';
import '../App.css';

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <h2 className="benefits-title">Tại sao nên lựa chọn chúng tôi?</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-text">
            <ul style={{ listStyle: 'none' }}>
                <li>✓ Tiết kiệm chi phí, giảm áp lực cho đội ngũ chăm sóc khách hàng</li><p/>
                <li>✓ Tối ưu hóa nguồn lực nội bộ và thời gian xử lý</li>
            </ul>
          </div>
        </div>
        <div className="benefit-card">
          <div className="benefit-text">
            <ul style={{ listStyle: 'none' }}>
              <li>✓ Dễ tích hợp, đồng bộ dữ liệu khách hàng với kênh bán hàng</li><p/>
              <li>✓ Cải thiện tình trạng hàng giả, trải nghiệm người dùng</li><p/>
              <li>✓ Xây dựng hình ảnh thương hiệu đẹp và nâng cao tính cạnh tranh</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;