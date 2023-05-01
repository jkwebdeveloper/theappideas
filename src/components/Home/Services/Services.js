import React from "react";
import background from "../../../assets/images/Home-our-services/download.png";
import background1 from "../../../assets/images/Home-our-services/download (1).png";
import { HiOutlineArrowRight } from "react-icons/hi";
import './services.css'

const Services = () => {
  return (
    <>
      {/* ======= Services Section ======= */}
      <section className="services-section style-two">
        <div className="container">
          <div className="services-heading">
            <h2>Our Services</h2>
          </div>
          <p className="services-heading-text">
            Over the years we have established ourselves as the leading service
            provider for Mobile App Development, Web Development, Web and
            Graphic Design, Ecommerce Development, IOT development and Games
            Development.
          </p>
          <div className="row clearfix">
            <div className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/WEB DEVELOPMENT.gif")}
                    alt="Web Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">WEB DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We help you build robust web presence with our expertise ...
                </div>
                <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/E-COMMERCE DEVELOPMENT.gif")}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">E-COMMERCE DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We help your business connect to the customers over ...
                </div>
                <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/WEB DEVELOPMENT (1).gif")}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">MOBILE APP DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We assist your brand to enjoy the edge of mobile by ...
                </div>
                <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/INTERNET OF THINGS.gif")}
                    alt="INTERNET OF THING"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">INTERNET OF THINGS</a>
                </h5>
                <div className="text">
                  We build intuitive mobile apps connecting the gadgets in ...
                </div>
                <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/GAME DEVELOPMENT.gif")}
                    alt="GAME DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">GAME DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We build 2D & 3D engaging and addictive mobile games for all
                  ...
                </div>
                <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="service-block style-two col-lg-4 col-md-6 col-sm-12 my-3">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/Hire Developer.gif")}
                    alt="Hire Developer"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">HIRE A DEVELOPER</a>
                </h5>
                <div className="text">
                  The App Ideas providing best skilled, experienced developers
                  ...
                </div>
                <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Services Section */}
    </>
  );
};

export default Services;
