import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <ul>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#issues">Vấn đề</a></li>
          <li><a href="#solutions">Giải pháp</a></li>
          <li><a href="#features">Lợi ích</a></li>
          <li><a href="#results">Thành tựu</a></li>
          <li><a href="#testimonials">Phản hồi khách hàng</a></li>
          <li><a href="#form">Liên hệ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;