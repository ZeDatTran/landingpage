import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
           <img
            src="/assets/logo-white.png"
            alt="Qranty Logo"
            className="footer-logo"
          />
          <p className="company-name">Công Ty Cổ Phần Qranty</p>

          <p className="footer-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:Qranty@gmail.com">Qranty@gmail.com</a>
          </p>
          <p className="footer-item">
            <i className="fas fa-phone-alt"></i>
            Liên hệ: 0900 1590
          </p>
          <p className="footer-item">
            <i className="fas fa-map-marker-alt"></i>
            Địa chỉ: 168 Lý Thường Kiệt, Phường Diên Hồng, TP. Hồ Chí Minh, Việt Nam
          </p>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.630321022!2d106.6550553!3d10.7749508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec14c5d6c91%3A0xff88fc876f84e14!2zS2hvYSBL4bu5IHRodeG6rXQgR2lhbyB0aMO0bmcgLSBDNSwgMjY4IMSQLiBMw70gVGjGsOG7o25nIEtp4buHbCwgUGjGsOG7o25nIDE0LCBRdeG6rW4gMTAsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1sen!2s!4v1690782286650!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
