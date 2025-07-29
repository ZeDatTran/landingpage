import React from 'react';
import '../App.css';

function Results() {
  return (
<section className="results" id="results">
  <h2>Kết quả hoạt động</h2>
  <div className="stat">
    Brother đã sử dụng dịch vụ Qranty, giúp giảm chi phí bảo hành thủ công và tăng loyalty khách hàng
  </div>

  {/* Ảnh đặt trước */}
  <div className="result-images">
    <div className="result-image image-step1" />
    <div className="result-image image-step2" />
  </div>

  {/* Card kết quả phía dưới */}
  <div className="results-content">
    <div className="result-item">
      {/* <span className="result-number">40%</span> */}
      <span className="result-desc">Giảm chi phí bảo hành</span>
    </div>
    <div className="result-item">
      {/* <span className="result-number">25%</span> */}
      <span className="result-desc">Tăng lòng trung thành khách hàng và trải nghiệm khách hàng</span>
    </div>
  </div>
</section>

  );
}

export default Results;
