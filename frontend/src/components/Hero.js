import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="decor decor-orange decor-1" style={{ top: '-5%', left: '5%' }}></div>
      <div className="decor decor-pink decor-2" style={{ top: '30%', left: '-5%' }}></div>
      <div className="decor decor-orange decor-3" style={{ bottom: '0%', right: '20%' }}></div>
      <div className="decor decor-purple decor-4" style={{ bottom: '-15%', right: '15%', width: '600px', height: '200px' }}></div>
      <div className="decor decor-blue decor-5" style={{ bottom: '30%', right: '5%' }}></div>
      <div className="decor decor-darkblue decor-6" style={{ bottom: '-10%', right: '2%' }}></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bảo hành <span className="hight-light1">"một chạm"</span>
            <br />
            với QRanty.
          </h1>

          <div className="hero-subtitle">
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="hero-list-item">✅ Giải pháp bảo hành thông minh</li>
              <li className="hero-list-item">📦 Quản lý bảo hành sản phẩm</li>
              <li className="hero-list-item">⚡ Kích hoạt bảo hành tức thì</li>
            </ul>
          </div>

          <a className="hero-button" href="#form">
            Liên hệ ngay
          </a>
        </div>

        <div className="hero-image">
          <img src="/assets/qranty_phone.png" alt="qranty phone" />
        </div>
      </div>

      <a className="floating-cta" href="#form">
        Nhận thông tin
      </a>
    </section>
  );
}

export default Hero;
