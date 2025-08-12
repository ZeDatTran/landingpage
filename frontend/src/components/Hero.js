import "../style/Hero.css";
import { Row, Col } from "antd";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bảo hành điện tử <span className="hight-light1">"một chạm"</span>
            <br />
            với Qranty
          </h1>

          <div className="hero-subtitle">
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="hero-list-item">
                Giải pháp bảo hành thông minh cho phép kích hoạt bảo hành tức
                thì
              </li>
            </ul>
          </div>
          <Row gutter={20} style={{ marginTop: "40px" }}>
            <Col>
              <a className="hero-button" href="#form">
                Liên hệ ngay
              </a>
            </Col>
            <Col>
              <a className="hero-button" href="#about">
                Xem Demo
              </a>
            </Col>
          </Row>
        </div>

        <div className="hero-image">
          <img src="/assets/4412.jpg" alt="qranty phone" />
        </div>
      </div>
      <a className="floating-cta" href="#form">
        Nhận thông tin
      </a>
    </section>
  );
}

export default Hero;
