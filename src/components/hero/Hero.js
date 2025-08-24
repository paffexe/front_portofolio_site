import React from "react";
import "./Hero.scss";
import seo from "../../assets/seo.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h3 className="hero__title">
              <span className="highlight">I design products</span>
              <br />
              that delight and
              <br />
              inspire people.
            </h3>
            <p className="hero__subtitle">
              Hi! I'm Jake, a product designer based in Berlin. I create
              user-friendly interfaces for fast-growing startups.
            </p>
            <div className="hero__buttons">
              <button className="btn black">Book a call</button>
              <button className="btn white">Download CV →</button>
            </div>
          </div>

          <div className="hero__image">
            <img src={seo} alt="Jake imgae" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
