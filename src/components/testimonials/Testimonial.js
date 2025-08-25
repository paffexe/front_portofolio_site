import React from "react";
import "./Testimonial.scss";
import boy from "../../assets/boy.png";
import mark from "../../assets/quote.svg";

const Testimonial = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <p>TESTIMONIALS</p>
          <h3>Word on the street</h3>
        </div>
        <div className="testimonials__grid">
          {/* Left - Image */}
          <div className="testimonials__image">
            <img src={boy} alt="boy" />
          </div>

          {/* Right - Text */}
          <div className="testimonials__content">
            <div>
              <img src={mark} alt="" />
            </div>
            <div className="testimonials__quote">
              Jake helped us build a software so intuitive that it didn't need a
              walkthrough. He solved complex problems with brilliant design.
            </div>
            <div className="testimonials__author">
              <div className="testimonials__author-name">
                <p className="testimonials__name">John Franklin</p>
                <p className="testimonials__role">Founder, Oooble Bunch</p>
              </div>
              <div className="testimonials__nav">
                <button className="testimonials__btn">←</button>
                <button className="testimonials__btn">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
