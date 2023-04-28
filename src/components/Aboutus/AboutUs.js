import React from "react";
import background from "../../assets/images/Home-our-services/download.png";
import background1 from "../../assets/images/Home-our-services/download (1).png";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="aboutus-section">
      <div className="about-top-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 px-5">
              <div className="left-section">
                <div className="top-heading">
                  <h2>Company Overview</h2>
                  <p className="top-content">
                    We are The App Ideas, a creative bunch of thinkers and
                    developers having expertise in shaping future ready mobile
                    and web apps across niches.
                  </p>
                  <p className="top-content">
                    The App Ideas is the leading Web &{" "}
                    <a href="/">
                      <strong style={{ color: "#fcb900" }}>
                        Mobile App Development Company{" "}
                      </strong>
                    </a>
                    that can help your business grow with innovative and
                    engaging solutions. We build cutting-edge digital solutions
                    with the quick-engaging user interface and user experience.
                    Over the years we have established ourselves as the leading
                    service provider for mobile app development, web
                    development, Web and graphic design, e-commerce development,
                    IOT development and games development.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="right-images">
                <img
                  src={require("../../assets/images/About-us/About us.png")}
                  alt=""
                  style={{ width: "100%", marginTop: "-50px", padding: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9tOqqOLoI2M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <section className="vision-section">
        <div className="container">
          <h2 className="vision-heading">Our vision & mission</h2>
          <div className="row clearfix">
            <div className="service-block style-two col-lg-6 col-md-12 col-sm-12 my-3">
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
                <h5>
                  <a href="/services">Our Vision</a>
                </h5>
                <div className="icon-box">
                  <img
                    src={require("../../assets/images/About-us/Our Vision.gif")}
                    alt="Our Vision"
                    style={{ width: "70px" }}
                  />
                </div>

                <div className="text">
                  Continuously deliver future-ready, comprehensive,
                  high-performance, cost-competitive solutions for business
                  across the niches by leveraging the latest technologies,
                  design and development expertise and strategic decisions
                  reached through a consistent and collaborative team effort
                </div>
              </div>
            </div>
            <div className="service-block style-two col-lg-6 col-md-12 col-sm-12 my-3">
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
                <h5>
                  <a href="/services">Our Mission</a>
                </h5>
                <div className="icon-box">
                  <img
                    src={require("../../assets/images/About-us/Our Mission.gif")}
                    alt="Our Mission"
                    style={{ width: "70px" }}
                  />
                </div>

                <div className="text">
                  Our mission is to materialise our visionary objectives of
                  providing cutting-edge business solutions by consistently
                  applying the latest technologies, expertise and skills through
                  a pool of talented design, development and strategic
                  decision-making professionals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-skill-section">
        <div className="container">
            
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
