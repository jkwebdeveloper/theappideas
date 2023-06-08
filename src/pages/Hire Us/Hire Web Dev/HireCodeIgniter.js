import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import background from "../../../assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../assets/images/Home-our-services/download (1).png";
import TestiMonial from "../../../components/Testimonial/TestiMonial";

import Laravel from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/CUSTOM CODEIGNITER APPS.svg";
import Offer from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/CODEIGNITER THEME INTEGRATION.svg";
import Features from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/Provide UPGRADE AND SUPPORT.svg";
import Secure from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/WEB DEVELOPMENT.svg";
import Consulting from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/3RD PARTY API INTEGRATION.svg";

import Expertise from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/EXPERIENCE AND EXPERTISE.svg";
import Implement from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/AGILE DEVELOPMENT.svg";
import Affordable from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/TRANSPARENT AND TIME HONOURED DEVELOPMENT.svg";
import STRONG from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/A Strong Portfolio.svg";
import PRICING from "../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/Competitive price.svg";
import { Link } from "react-router-dom";

const HireCodeIgniter = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Hire CodeIgniter App Developers In India</h2>
                <p>
                  CodeIgniter is one of the most popular open source, PHP based,
                  MVC framework widely embraced for building fast paced and
                  dynamic web apps across niches. Besides versatility and ease
                  of use this framework is known for easy setup and deployment.
                  CodeIgniter is a dynamic framework that helps developers
                  building highly interactive, simple to use and efficient web
                  apps with the use of PHP as base language. Simple and easy to
                  use coding and fast paced development are the key strengths of
                  this framework.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in App Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best CodeIgniter App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your CodeIgniter App Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Complete Guidance from Designing to Deployment
                    </span>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/UnityMobileApp.webp")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Node js Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/Mobile-Apps-Development.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Node js Development Company</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/Game-App-Development-Company.webp")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Node js Developer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>Contact us</h4>
                </div>
                <div className="contact__body">
                  <div className="contact__form">
                    <form action="">
                      <div className="row g-3">
                        <div className="col-sm-12 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                            aria-label="Name*"
                          />
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email*
                                    "
                            aria-label="Email"
                          />
                        </div>
                        <div className="col-sm-6 h-100 select__country my-3">
                          <select className="select2 w-100 h-100">
                            <option value={1}>Country*</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                            <option value={5}>Option 5</option>
                            <option value={6}>Option 6</option>
                            <option value={7}>Option 7</option>
                            <option value={8}>Option 8</option>
                          </select>
                        </div>
                        <div className="col-sm-6 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number*
                                    "
                            aria-label="Phone Number"
                          />
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Project Requirement*"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-12 text-center py-5">
                          <button type="submit" className="request__btn">
                            Request a FREE Quote
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contact__footer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in CodeIgniter Development</h3>
            <p>
              We are into{" "}
              <Link
                to="/web-development"
                className="Title_Color"
                style={{ color: "#d6aa0b" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <b> web development</b>
              </Link>{" "}
              , we are highly experienced as well as experts in delivering the
              best Node js web platforms solution to our clients. We have 4+
              years of experience in developing the best software solution at
              the best rates.
            </p>
            <p>
              Node js offers the various rich library of Javascript modules
              which simplifies the development of the web applications .Node js
              is a lightweight and efficient platform which helps in developing
              the best web application. The App Ideas is one of the experienced
              Node js development company and also deployed the best Node js
              solutions.
            </p>
            <div className="text-center">
              <Link
                to="/contactus"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <a className="contact_btn" style={{ color: "#000" }}>
                  Contact us{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              THE CODEIGNITER DEVELOPERS OF THE APP IDEAS CAN TURN YOUR APP
              IDEAS INTO POWERFUL DIGITAL PRODUCTS
            </h2>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: "425px" }}
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
                    src={Laravel}
                    alt="Laravel Web Application Development"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">CUSTOM CODEIGNITER APPS</a>
                </h5>
                <div className="text">
                  We make use of CodeIgniter to allow optimum scope of
                  customization in apps built with easy to use interface and
                  simplicity.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: "425px" }}
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
                    src={Offer}
                    alt="Offer Customization"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">CODEIGNITER THEME INTEGRATION</a>
                </h5>
                <div className="text">
                  Our expert CodeIgniter developers are also experienced enough
                  to integrate a wide variety of tools and themes to boost the
                  performance of your existing website or app.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: "425px" }}
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
                    src={Features}
                    alt="CUSTOM WORDPRESS DEVELOPMENT"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">UPGRADE AND SUPPORT</a>
                </h5>
                <div className="text">
                  We also offer experienced IOS developers who can address
                  issues from time to time and give facelift to your apps with
                  timely and new updates and upgrades.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: "400px" }}
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
                    src={Secure}
                    alt="Secure Web Solutions"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">WEB DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Our CodeIgniter developers can build highly sophisticated and
                  feature rich niche websites with engaging UX to boost customer
                  interaction and business conversion.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: "400px" }}
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
                    src={Consulting}
                    alt="Laravel Consulting Services"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">3RD PARTY API INTEGRATION</a>
                </h5>
                <div className="text">
                  As a Node.js software development company, we offer the best
                  Node.js web and app solution and also make it secure which
                  helps in maintaining the privacy and security of the business
                  as well as the user’s data.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      <TestiMonial />

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two py-5">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHY HIRE CODEIGNITER DEVELOPERS FROM US?</h2>
            <p>
              We have already established ourselves as one of the leading
              CodeIgniter development companies with a great track record of too
              many successful projects completed by us. Here we explain some of
              the key reasons to hire us for CodeIgniter development.
            </p>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
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
                    src={Expertise}
                    alt="Expertise In Web Solutions"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">EXPERIENCE AND EXPERTISE</a>
                </h5>
                <div className="text">
                  We boast of a robust team of expert CodeIgniter developers
                  having years of frontline experience in building many websites
                  and apps with this framework.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
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
                    src={STRONG}
                    alt="Sophisticated Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">A STRONG PORTFOLIO</a>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  As of now we are credited with a bounty of most successful
                  CodeIgniter apps across several business niches.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
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
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">AGILE DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Agile development process allows fast paced development with
                  quicker time to market and glitch free performance with
                  concurrent testing.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
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
                    src={Affordable}
                    alt="Affordable Costing"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">
                    TRANSPARENT AND TIME HONOURED DEVELOPMENT
                  </a>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  With our CodeIgniter developers, you can ensure a transparent
                  development process and completion of project deadlines.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
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
                    src={PRICING}
                    alt="Time-Bound Deployment"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">COMPETITIVE PRICING</a>
                </h5>
                <div className="text">
                  We offer most competitive rate for hiring CodeIgniter
                  developers for apps and web development projects across
                  niches.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "justify" }}>
                  Do you want to know more about the expertise of our
                  CodeIgniter developers? Just feel free to contact us.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link
                  to="/contactus"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="contact_btn" style={{ color: "#000" }}>
                    Contact us{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default HireCodeIgniter;
