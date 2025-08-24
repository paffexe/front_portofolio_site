import React from "react";
import "./Sponsors.scss";
import Logo1 from "../../assets/logo_1.svg";
import Logo2 from "../../assets/logo_2.svg";
import Logo3 from "../../assets/logo_3.svg";
import Logo4 from "../../assets/logo_4.svg";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="container">
        <p className="sponsors__title">Trusted by</p>
        <div className="sponsors__logos">
          <div>
            <img src={Logo1} alt="logo1" />
          </div>
          <div>
            <img src={Logo2} alt="logo2" />
          </div>
          <div>
            <img src={Logo3} alt="logo3" />
          </div>
          <div>
            <img src={Logo4} alt="logo4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
