import React from 'react';
import '../style/result.css';

function Results() {
  return (
    <section className="results" id="results">\
      <div className="results-content">
        {/* Phần kết quả tổng quát */}
        <div className="results-overview">
            <h3>Hãy tham gia cùng với chúng tôi.</h3>
          <div className="results-image results-image-overview"></div> {/* Hình ảnh minh họa */}
          <div className="results-grid">
            <div className="result-item">
              <span className="result-number">50+</span>
              <span>Doanh nghiệp & Đối tác</span>
            </div>
            <div className="result-item">
              <span className="result-number">150k+</span>
              <span>QR Code được quản lý</span>
            </div>
            <div className="result-item">
              <span className="result-number">95%</span>
              <span>Tỷ lệ quét thành công cao </span>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
}

export default Results;