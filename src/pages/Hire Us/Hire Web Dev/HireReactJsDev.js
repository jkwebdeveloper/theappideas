import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import background from "../../../assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../assets/images/Home-our-services/download (1).png";
import TestiMonial from "../../../components/Testimonial/TestiMonial";

import Offer from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/React JS Web Development.svg";
import Features from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/JSX Integration.svg";
import Consulting from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/Mobile Application Development Service.svg";
import Secure from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/Customize Web Development.svg";
import Laravel from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/React JS Integration.svg";
import Unit from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/1/React JS Consulting Services.svg";

import Expertise from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Expertise In The Field.svg";
import Sophisticated from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Powerful Portfolio.svg";
import Implement from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Follow Agile Methodology.svg";
import Affordable from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Affordable Pricing.svg";
import Time from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Deployment On Time.svg";
import Free from "../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/2/Support And Maintenance.svg";
import { Link } from "react-router-dom";

const HireReactJsDev = () => {
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
                <h2>Hire React JS Developers In India</h2>
                <p>
                  ReactJS which is also known as ReactJS or React which is a
                  Javascript library maintained by Facebook helps in developing
                  or we can say that rendering UI components for web
                  development. React JS supports Frontend development as well as
                  Server side development. React JS is an open-source library of
                  Javascript that is efficient, declarative, and flexible which
                  is used for developing a User interface in the best way and is
                  used as a base for developing single-page web development.
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
                      Best ReactJS Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your ReactJS Development
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
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/Mobile-Apps-Development.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>ReactJS Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/VRAppDevelopmentCompany.1d7163a9358b4fd6b91d.webp")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>ReactJS Development Company</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire React JS Developer/Game-App-Development-Company.440287dcf93acec0f79c.webp")}
                        alt="
                    IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>ReactJS Development Developer</h4>
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
            <h3>Our Feat in the ReactJS Developers</h3>
            <p>
              We offer the best ReactJS services. We are highly expert as well
              as have years of experience in providing the best software
              solution using the React JS Library and offer the best UI
              components in the web solutions. Hire us and experience our
              expertise.
            </p>
            <p>
              The App Ideas is a leading React JS development company and have
              experienced ReactJS developers in India who are expertise in
              deploying the best solutions.
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
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-mobile-one">
                <a href="" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="" className="work_head_box_link">
                        <h2>Spending Tracker</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="" className="work_head_box_link"></a>
                        <li>
                          <a href="" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="" className="work_head_item">
                            Mobile Application Development{" "}
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="" className="work_head_item">
                            React Native
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="" className="work_head_item">
                            Reactjs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-up-left"
                        src={require("../../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-three.webp")}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-mobile-two">
                <a href="" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="" className="work_head_box_link">
                        <h2>Pitch App</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="" className="work_head_box_link"></a>
                        <li>
                          <a href="" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="" className="work_head_item">
                            Mobile Application Development
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="" className="work_head_item">
                            React Native
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="" className="work_head_item">
                            Reactjs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-up-left"
                        src={require("../../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-twenty.webp")}
                        alt="Device-Image-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box port_mobilebg_one"
              >
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Mindweel </h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="#" className="work_head_item">
                            Laravel
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Mobile Application Development
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Reactjs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-left"
                        src={require("../../../assets/images/Portfolio/port-mobile-app-mobile-one.webp")}
                        alt="Device-Image-two"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section End */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHAT DO WE OFFER IN REACTJS DEVELOPMENT COMPANY?</h2>
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
                  <a>React JS Web Development</a>
                </h5>
                <div className="text">
                  We have a team of highly skilled and experienced developers
                  who will provide the best software development services using
                  this popular React JS Library. We also help in integrating the
                  best features as per the selected technology by our clients.
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
                  <a>JSX Integration</a>
                </h5>
                <div className="text">
                  JSX is one of the popular features of React JS which will help
                  in developing the React JS element very efficiently and
                  effectively.JSX is also known as an extension of Javascript.
                  We are also familiar with JSX which includes both makeup as
                  well as logic.
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
                    alt="Laravel Features Integration"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">Mobile Application Development Service</a>
                </h5>
                <div className="text">
                  If you are thinking of shifting towards mobile applications
                  using react technology features then we can help you because
                  along with React JS we are also expertise in React Native app
                  development.
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
                  <a href="/services">Customize Web Development</a>
                </h5>
                <div className="text">
                  We can help you to develop a customization web as well as app
                  development services based on your business user requirements.
                  Customization is most popular in this present time because it
                  offers the functionality you want to integrate into your
                  services.
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
                  <a href="/services">React JS Integration</a>
                </h5>
                <div className="text">
                  We are highly experienced in web and app development
                  technologies that we can help you to integrate with React JS
                  features in your existing software solution.
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
                    src={Unit}
                    alt="Unit Testing Methods"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">React JS Consulting Services</a>
                </h5>
                <div className="text">
                  We can help you to make a decision and provide expert advice
                  in choosing the trending React JS features or framework for
                  your software solution. This will help you to keep ahead in
                  the market as per the trend.
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
            <h2>WHY SHOULD YOU HIRE REACTJS DEVELOPERS FROM US?</h2>
            <p>
              ReactJS is an open-source Javascript library that helps in
              developing the Ravishing web application. Our developers are
              highly skilled and have worked on various ReactJS projects. There
              are various reasons to choose us.
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
                  <a href="/services">Expertise In The Field</a>
                </h5>
                <div className="text">
                  We are highly experienced in providing the best React JS web
                  application. We have proven our expertise by developing the
                  most sophisticated React JS projects.
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
                    src={Sophisticated}
                    alt="Sophisticated Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">Powerful Portfolio</a>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  Along with the years, we have worked on various projects and
                  developed successful React JS web applications for different
                  niches and categories.
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
                  <a href="/services">Follow Agile Methodology</a>
                </h5>
                <div className="text">
                  We highly follow agile methodology for project development
                  with continuous updation and iteration of the software
                  development. This will help you to easily track the software
                  progress.
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
                  <a href="/services">Affordable Pricing</a>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  We offer the best and affordable pricing for React JS web
                  development without compromising the quality of the software.
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
                    src={Time}
                    alt="Time-Bound Deployment"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">Deployment On Time</a>
                </h5>
                <div className="text">
                  We follow the agile methodology and strictly follow the
                  project milestones which helps in delivering the project on
                  deadlines along with testing all the modules.
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
                    src={Free}
                    alt="Free Support Services"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">Support And Maintenance</a>
                </h5>
                <div className="text" style={{ marginBottom: "25px" }}>
                  After deployment of the projects, we also offer free
                  maintenance services for some time. We are always ready to
                  support and help you via call, E-mail, social media, and more.
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
                  Do you want to know more about our ReactJS Developers and
                  their expertise? Feel free to contact us.
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

export default HireReactJsDev;
