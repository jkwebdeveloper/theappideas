import React from "react";
import background from "../../assets/images/Home-our-services/download.png";
import background1 from "../../assets/images/Home-our-services/download (1).png";
import "./about.css";
import { Link } from "react-router-dom";
import Execute from "../Execute";

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
          <div className="skill-heading">
            <h2>Our Skill</h2>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="skill-img">
                <img
                  src={require("../../assets/images/About-us/skill/Digital-Marketing.png")}
                  style={{ width: "120px", padding: "8px" }}
                />
              </div>
              <p className="skill-content">Website Development</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="skill-img">
                <img
                  src={require("../../assets/images/About-us/skill/Digital-Marketing.png")}
                  style={{ width: "120px", padding: "8px" }}
                />
              </div>
              <p className="skill-content">Ecommerce Development</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="skill-img">
                <img
                  src={require("../../assets/images/About-us/skill/Digital-Marketing.png")}
                  style={{ width: "120px", padding: "8px" }}
                />
              </div>
              <p className="skill-content">Mobile Development</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="skill-img">
                <img
                  src={require("../../assets/images/About-us/skill/Digital-Marketing.png")}
                  style={{ width: "120px", padding: "8px" }}
                />
              </div>
              <p className="skill-content">IOT Development</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="skill-img">
                <img
                  src={require("../../assets/images/About-us/skill/Digital-Marketing.png")}
                  style={{ width: "120px", padding: "8px" }}
                />
              </div>
              <p className="skill-content">Game Development</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="skill-img">
                <img
                  src={require("../../assets/images/About-us/skill/Digital-Marketing.png")}
                  style={{ width: "120px", padding: "8px" }}
                />
              </div>
              <p className="skill-content">Digital Marketing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-process-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="process-img">
                <img
                  src={require("../../assets/images/About-us/our-process-img.webp")}
                  alt="our-process"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h2 className="Our-Process-title">Our Process</h2>
              <p className="join-dec">
                We use a strategically planned and well-organised approach to
                design, develop, deploy and evaluate the solutions for
                businesses across the niches. We give enough focus and effort to
                strategic decisions about the solution followed by a
                well-articulated and appropriate design approach and lastly
                smooth deployment to ensure smooth operation as it was meant to
                deliver.
              </p>
              <Link>
                <button className="our-process-btn" role="button">
                  CHECK OUT OUR PROCESS
                </button>
                {/* <a className="join-btn">Join our team</a> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="join-us"
        style={{ paddingTop: "40px", paddingBottom: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="join-img">
                <img
                  src={require("../../assets/images/About-us/chirag_1.webp")}
                  alt="chirag"
                  style={{ width: "222px", padding: "5px" }}
                />
                <img
                  src={require("../../assets/images/About-us/ankita1.webp")}
                  alt="ankita"
                  style={{ width: "222px", padding: "5px" }}
                />
                <img
                  src={require("../../assets/images/About-us/PAYAL1.webp")}
                  alt="payal"
                  style={{ width: "222px", padding: "5px" }}
                />
                <img
                  src={require("../../assets/images/About-us/mansi1.webp")}
                  alt="mansi"
                  style={{ width: "222px", padding: "5px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="join-title">
                <h2>Join Us</h2>
              </div>
              <p className="join-dec">
                The App Ideas is a leading Web and app development company. We
                are highly skilled in providing successful solutions for all
                kinds of businesses and Startups. We have a team of highly
                proficient developers, creative designers and a team of a
                creative bunch of thinkers who are having knowledgeable in
                shaping future-ready mobile and web apps across niches. The App
                Ideas is a great environment to start a tech career in the best
                possible way. If you are looking for a job then feel free to
                reach us and join our team.
              </p>
              <Link>
                <button className="button-69" role="button">
                  Join our team
                </button>
                {/* <a className="join-btn">Join our team</a> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="our-clients-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="client-title">Our Clients</h3>
              <div className="our-clients-img">
                <img
                  src={require("../../assets/images/About-us/our-client/bolt_new.png")}
                  alt="Bolt Delivery Logo"
                  style={{
                    width: "160px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "15px",
                  }}
                />
                <img
                  src={require("../../assets/images/About-us/our-client/footnote_new.png")}
                  alt="FOOTNOTE Logo"
                  style={{
                    width: "160px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "15px",
                  }}
                />
                <img
                  src={require("../../assets/images/About-us/our-client/mindweel_new.png")}
                  alt="mindweel logo"
                  style={{
                    width: "160px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "15px",
                  }}
                />
                <img
                  src={require("../../assets/images/About-us/our-client/bravura_new.webp")}
                  alt="bravura"
                  style={{
                    width: "160px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                />
                <img
                  src={require("../../assets/images/About-us/our-client/chef_club_new1.png")}
                  alt="Chefs Club Collective Logo"
                  style={{
                    width: "160px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                />
                <img
                  src={require("../../assets/images/About-us/our-client/snagpay_new.png")}
                  alt="Snag Pay Logo"
                  style={{
                    width: "160px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    marginRight: "15px",
                    marginTop: "15px",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="client-title">Work With Us</h3>
              <p className="client-dec">
                The App Ideas is a leading software development company. We are
                highly experienced in developing Website development, Mobile app
                development, Web app development and E-commerce platform
                development. We have a team of highly skilled developers and
                designers who will offer the best and successful software
                solutions at the best rates. We initially analyze and understand
                the requirements. We strictly follow the agile methodology, in
                which we divide projects into small milestones. We take clients
                approval in every step of the development and deliver the
                project on the given timeline. You can check our client’s list
                as well as clients testimonials. START A PROJECT
              </p>
              <button className="button-69" role="button">
                Join our team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Execute />
    </div>
  );
};

export default AboutUs;
