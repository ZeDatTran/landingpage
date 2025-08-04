import React from 'react';
import '../App.css'; // hoặc đổi thành './Footer.css' nếu bạn tách riêng CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src="/assets/logo-white.png"
            alt="Qranty Logo"
            className="footer-logo"
          />

          <p><strong>Công ty Cổ phần Qranty</strong></p>
          <p>SĐT: 0976 214 551</p>
          <p>Email: <a href="mailto:Sales@qranty.com">Sales@qranty.com</a></p>
          <p>Địa chỉ: 268 Lý Thường Kiệt, Phường Diên Hồng, Thành phố Hồ Chí Minh</p>
        </div>

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