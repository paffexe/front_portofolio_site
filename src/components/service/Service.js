import React from "react";
import "./Service.scss";
import Logo_s from "../../assets/logo_s.svg";

const Service = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <p className="services__tag">SERVICES</p>
          <h3 className="services__title">
            Design that solves problems,
            <br />
            one product at a time.
          </h3>
        </div>

        <div className="services__wrapper">
          <div className="services__card">
            <div className="services__icon">
              <img src={Logo_s} alt="logo service" />
            </div>
            <h3 className="services__card-title">What I can do for you</h3>
            <p className="services__card-text">
              Faster, better products that your users love. Here's all the
              services I provide:
            </p>
            <ul className="services__list">
              <li>
                <span></span>Design Strategy
              </li>
              <li>
                <span></span>Web and Mobile App Design
              </li>
              <li>
                <span></span>Front-end Development
              </li>
            </ul>
          </div>

          <div className="services__card">
            <div className="services__icon">
              <img src={Logo_s} alt="logo service" />
            </div>
            <h3 className="services__card-title">Applications I'm fluent in</h3>
            <p className="services__card-text">
              Every designer needs the right tools to do the perfect job.
              Thankfully, I'm multilingual.
            </p>
            <ul className="services__list">
              <li>
                <span></span>Sketch
              </li>
              <li>
                <span></span>Webflow
              </li>
              <li>
                <span></span>Figma
              </li>
            </ul>
          </div>

          <div className="services__card">
            <div className="services__icon">
              <img src={Logo_s} alt="logo service" />
            </div>
            <h3 className="services__card-title">What you can expect</h3>
            <p className="services__card-text">
              I design products that are more than pretty. I make them shippable
              and usable.
            </p>
            <ul className="services__list">
              <li>
                <span></span>Clean and functional
              </li>
              <li>
                <span></span>Device and user friendly
              </li>
              <li>
                <span></span>Efficient and maintainable
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
