import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#issues">Issues</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><input type="text" placeholder="Search..." /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;