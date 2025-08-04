import React from 'react';
import '../style/Issues.css';

function Issues() {
  return (
    <section className="issues" id="issues">
      <h2 className="issues-title">Cơn Ác Mộng Bảo Hành</h2>
      <div className="issues-container">
        
          
          <div className="issue-item">
  <h3>Doanh Nghiệp Đau Đầu</h3>
  <div className="issue-item-company">
    <img src="/assets/icon/nhanluc.png" alt="Nhân lực" />
    <p>Tốn chi phí, nhân lực để vận hành bảo hành thủ công</p>
  </div>
  <div className="issue-item-company">
    <img src="/assets/icon/hoanggia.png" alt="Hàng giả" />
    <p>Hàng giả hàng nhái khó kiểm soát gây thất thoát</p>
  </div>
  <div className="issue-item-company">
    <img src="/assets/icon/doinguchuyennghiep.png" alt="Đội ngũ chuyên nghiệp" />
    <p>Không có đội ngũ chuyên nghiệp để vận hành hệ thống bảo hành điện tử</p>
  </div>
</div>

  <div className="issue-item">
  <h3>Khách Hàng Gặp Khó</h3>
  <div className="issue-item-company">
    <img src="/assets/icon/thoigian.png" alt="Nhân lực" />
    <p>Phải giữ giấy tờ bảo hành, không biết về thời gian kích hoạt và duy trì bảo hành</p>
  </div>
  <div className="issue-item-company">
    <img src="/assets/icon/wonder.png" alt="Hàng giả" />
    <p>Không biết hàng có chính hãng không?</p>
  </div>
  <div className="issue-item-company">
    <img src="/assets/icon/khokhan.png" alt="Đội ngũ chuyên nghiệp" />
    <p>Khó khăn trong việc sử dụng sản phẩm đã mua</p>
  </div>
</div>


      
    
      </div>
    </section>
  );
}


export default Issues;