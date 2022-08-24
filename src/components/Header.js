import React from "react";
import "../styles/Header.css";
import background from "../images/header-background.png";
import logo from "../images/Shankar-2.png";

function Header() {
  return (
    <div id="header" style={{ backgroundImage: `linear-gradient(to right,black 25%, transparent 85%),url(${background})` }}>
      <div className="container">
        <nav>
          <img src={logo} className="logo" />
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Service</a>
            </li>
            <li>
              <a href="#portfolio">portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-text">
          <p>Full Stack Developer</p>
          <h1>Hi, I'am <span>Shankar Reddy</span> <br /> From Hyderabad</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
