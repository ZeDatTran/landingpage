import React from 'react';
import '../App.css';

function Issues() {
  return (
    <section className="issues" id="issues">
      <div className="issues-container">
        <div className="issues-image issues-illustration"></div>
        <div className="issues-content">
          <h2 className="issues-title">Cơn Ác Mộng Bảo Hành</h2>
          <div className="issues-list">
            <div className="issue-item">
              <h3>Khách Hàng Gặp Khó</h3>
              <ul>
                <li>Phải giữ giấy tờ bảo hành</li> 
                <li>Không biết về thời gian kích hoạt và duy trì bảo hành</li>
                <li>Không biết hàng có chính hãng không</li>
                <li>Người tiêu dùng khó khăn trong việc sử dụng sản phẩm đã mua </li>
              </ul>
            </div>
            <div className="issue-item">
              <h3>Doanh Nghiệp Đau Đầu</h3>
              <ul>
                <li>Tốn chi phí, nhân lực để vận hành bảo hành thủ công</li>
                <li>Hàng giả hàng nhái khó kiểm soát gây thất thoát</li>
                <li>Không có đội ngũ chuyên nghiệp để vận hành hệ thông bảo hành điện tử  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Issues;