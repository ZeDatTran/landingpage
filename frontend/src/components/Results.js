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
              <span className="result-number">50%</span>
              <span>Hiệu quả chăm sóc khách hàng</span>
            </div>
            <div className="result-item">
              <span className="result-number">40%</span>
              <span>Hiệu quả Marketing</span>
            </div>
            <div className="result-item">
              <span className="result-number">20%</span>
              <span>Doanh thu </span>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
}

export default Results;