import React from "react";
import "./Footer.scss";
import brand_lgo from "../../assets/lgotype_b.svg";
import email from "../../assets/IMAGE (1).svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__header">
          <h3>Ready to make something kickass?</h3>
          <p>Let's get on a call.</p>
        </div>

        <div className="footer__wrapper">
          <div className="footer__container">
            <h3 className="footer__brand">
              <img src={brand_lgo} alt="logo" />
            </h3>
            <p className="footer__text">
              2021 Dribbble Avenue, San Francisco, USA
            </p>
            <div className="melon">
              <img src={email} alt="" />
              <p className="footer__text">hi@thefolio.com</p>
            </div>
          </div>

          <div className="footer__about">
            <div>
              <h3 className="footer__heading">About</h3>
              <ul className="footer__list">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__heading">Services</h3>
              <ul className="footer__list">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer__heading">Experience</h3>
              <ul className="footer__list">
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © All rights reserved. Sunit Hegde · Powered by Webflow · Image
            License Info · Instructions · Changelog · Style Guide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
