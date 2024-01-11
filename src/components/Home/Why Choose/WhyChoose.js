import React from "react";
import "./whyChoose.css";
import Custom from "../../../assets/images/Why_choose/Group 106.svg"
import Innovation from "../../../assets/images/Why_choose/Group 76.svg"
import Transparent from "../../../assets/images/Why_choose/Group 75.svg"
import web from "../../../assets/images/Why_choose/Group 107.svg"


const WhyChoose = () => {
  return (
    <section className="choose_section">
      <div className="container">
        <div className="choose_section_ttl">
          <h2>
            Why <span>Choose US?</span>
          </h2>
        </div>
        <div className="row mt-5 choose_section_row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="choose_bx">
              <img
                src={require("../../../assets/images/Why_choose/success 1.png")}
                alt="choose-img-1"
                className="img-fluis"
              />
              <p>Your Success is Our Priority</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="choose_bx">
              <img
                src={Custom}
                alt="choose-img-2"
                className="img-fluis"
              />
              <p>Custom Solutions, Real Results</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="choose_bx">
              <img
                src={Innovation}
                alt="choose-img-3"
                className="img-fluis"
              />
              <p>Innovation Beyond Boundaries</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="choose_bx">
              <img
                src={Transparent}
                alt="choose-img-4"
                className="img-fluis"
              />
              <p>Transparent Communication</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="choose_bx">
              <img
                src={web}
                alt="choose-img-5"
                className="img-fluis"
              />
              <p>Web Presence Redefined</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-3">
            <div className="choose_bx">
              <img
                src={require("../../../assets/images/Why_choose/Industry.png")}
                alt="choose-img-6"
                className="img-fluis"
              />
              <p>Industry Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
