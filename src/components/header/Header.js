import React from "react";
import "./Header.scss";
import Logo from "../../assets/logotype.svg";

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <div class="navbar__logo">
            <img src={Logo} alt="logotype" />
          </div>

          <ul class="navbar__collection">
            <li class="navbar__item">
              <a href="#">About</a>
            </li>
            <li class="navbar__item">
              <a href="#">Services</a>
            </li>
            <li class="navbar__item">
              <a href="#">Projects</a>
            </li>
            <li class="navbar__item">
              <a href="#">Blog</a>
            </li>
            <li class="navbar__item">
              <a href="#">Book a call →</a>
            </li>
          </ul>

          <div class="navbar__mobile-menu">
            <ul class="navbar__collection">
              <li class="navbar__item">
                <a href="#">Home</a>
              </li>
              <li class="navbar__item">
                <a href="#">Brands</a>
              </li>
              <li class="navbar__item">
                <a href="#">Recent Products</a>
              </li>
              <li class="navbar__item">
                <a href="#">Contact</a>
              </li>
              <li class="navbar__item">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
