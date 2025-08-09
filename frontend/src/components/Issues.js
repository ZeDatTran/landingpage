import React from "react";
import "../style/Issues.css";
import { Row, Col, Button } from "antd";
function Issues() {
  return (
    <section className="issues" id="issues">
      <h2 className="issues-title">Cơn Ác Mộng Bảo Hành</h2>
      <div className="issues-container">
        <img src="/assets/issues1.png" alt="Nguoidungdaudau" />
        {/* <Row gutter={30}>
          <Col span={18}>
            <Row>
              <div className="dif1"> Khó khăn khi sử dụng sản phẩm</div>
            </Row>
            <Row gutter={30}>
              <Col span={18}>
                <div className="dif2">Sản phẩm có chính hãng</div>
                <div className="dif1">Phải giữ giấy tờ bảo hành</div>
              </Col>
              <Col span={6}>
                <div className="dif0">Người dùng gặp khó</div>
              </Col>
            </Row>
            <Row>
              <div className="dif2">Không rõ thời hạn bảo hành</div>
            </Row>
          </Col>
          <Col span={6}>
            <img src="/assets/a1.png" alt="Nguoidungdaudau" />
          </Col>
        </Row> */}
        {/* <Row gutter={50}>
          <Col span={12}>
            <Card className="issue-item">
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
                <img
                  src="/assets/icon/doinguchuyennghiep.png"
                  alt="Đội ngũ chuyên nghiệp"
                />

                <p>
                  Không có đội ngũ chuyên nghiệp để vận hành hệ thống bảo hành
                  điện tử
                </p>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card className="issue-item">
              <h3>Khách Hàng Gặp Khó</h3>
              <div className="issue-item-company">
                <img src="/assets/icon/thoigian.png" alt="Nhân lực" />
                <p>
                  Phải giữ giấy tờ bảo hành, không biết về thời gian kích hoạt
                  và duy trì bảo hành
                </p>
              </div>
              <div className="issue-item-company">
                <img src="/assets/icon/wonder.png" alt="Hàng giả" />
                <p>Không biết hàng có chính hãng không?</p>
              </div>
              <div className="issue-item-company">
                <img
                  src="/assets/icon/khokhan.png"
                  alt="Đội ngũ chuyên nghiệp"
                />
                <p>Khó khăn trong việc sử dụng sản phẩm đã mua</p>
              </div>
            </Card>
          </Col>
        </Row> */}

        {/* <div className="issue-item">
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
            <img
              src="/assets/icon/doinguchuyennghiep.png"
              alt="Đội ngũ chuyên nghiệp"
            />
            <p>
              Không có đội ngũ chuyên nghiệp để vận hành hệ thống bảo hành điện
              tử
            </p>
          </div>
        </div> */}

        {/* <div className="issue-item">
          <h3>Khách Hàng Gặp Khó</h3>
          <div className="issue-item-company">
            <img src="/assets/icon/thoigian.png" alt="Nhân lực" />
            <p>
              Phải giữ giấy tờ bảo hành, không biết về thời gian kích hoạt và
              duy trì bảo hành
            </p>
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
       */}
      </div>
    </section>
  );
}

export default Issues;
