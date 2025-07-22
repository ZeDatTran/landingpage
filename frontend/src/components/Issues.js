import React from 'react';
import '../App.css';

function Issues() {
  return (
    <section className="issues" id="issues">
      <div className="issues-container">
        <div className="issues-image issues-illustration"></div>
        <div className="issues-content">
          <h2 className="issues-title">Vấn đề của bảo hành sản phẩm</h2>
          <div className="issues-list">
            <div className="issue-item">
              <h3>Vấn đề của người tiêu dùng</h3>
              <ul>
                <li>Phải giữ team bảo hành</li> 
                <li>Không biết về thời gian kích hoạt và duy trì bảo hành</li>
                <li>Không biết hàng có chính hãng không</li>
              </ul>
            </div>
            <div className="issue-item">
              <h3>Vấn đề của doanh nghiệp</h3>
              <ul>
                <li>Tốn chi phí nhân lực bảo hành thủ công</li>
                <li>Hàng giả hàng nhái khó kiểm soát gây thất thoát</li>
                <li>Mất lòng tin của khách hàng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Issues;