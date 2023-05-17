import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import background from "../../../assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../assets/images/Home-our-services/download (1).png";
import TestiMonial from "../../../components/Testimonial/TestiMonial";

import Offer from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Offer Customization.svg";
import Features from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Laravel Features Integration.svg";
import Consulting from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Laravel Consulting Services.svg";
import Secure from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Secure Web Solutions.svg";
import Laravel from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Laravel Web Application Development.svg";
import Unit from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/1/Unit Testing Methods.svg";

import Expertise from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Expertise In Web Solutions.svg";
import Sophisticated from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Sophisticated Portfolio.svg";
import Implement from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Implement Agile Methods.svg";
import Affordable from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Affordable Costing.svg";
import Time from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Time-Bound Deployment.svg";
import Free from "../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/2/Free Support Services.svg";

const HireLaravelDev = () => {
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
                <h2>Hire Laravel Developers</h2>
                <p>
                  Laravel is an open-source and free PHP web framework which is
                  developed by Tylor Otwell. Laravel is mainly introduced for
                  The App Ideas is an{" "}
                  <a
                    href="https://theappideas.com/iphone-app-development-company/"
                    className="Title_Color"
                    target="_blank"
                    style={{ color: "#d6aa0b" }}
                  >
                    <b>web application development</b>
                  </a>{" "}
                  following the model-view-controller(MVC) architecture and
                  highly based on the Symfony framework. Laravel offers the
                  syntaxes and features which helps in deploying high-end web
                  applications. Laravel Technology facilitates the developer to
                  save a huge amount of time to develop the entire website from
                  scratch.
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
                      Best Laravel Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Laravel Development
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
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/VRApplicationDeveloper.webp")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Laravel App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/Mobile-Apps-Development.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Laravel App Development Company</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/Angular-JS-developer.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Laravel App Developer</h4>
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
            <h3>Our Feat in Laravel Development</h3>
            <p>
              We are highly expert in providing the best{" "}
              <a
                href="https://theappideas.com/iphone-app-development-company/"
                className="Title_Color"
                target="_blank"
                style={{ color: "#d6aa0b" }}
              >
                <b> Laravel web solution</b>
              </a>{" "}
              to our clients and always satisfy them with our services. We have
              years of experience deploying the best software solutions at the
              best rates. Hire us and experience our expertise.
            </p>
            <p>
              Laravel is a server-side PHP framework that helps in developing
              full-stack apps, mobile apps with features, and more. The App
              Ideas is one of the experienced Laravel development company and
              also deployed the best laravel solutions.
            </p>
            <div className="text-center">
              <a href="#" className="contact_btn_new">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port_mobilebg_one">
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
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port_mobilebg-02">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Bolt – User</h2>
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
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-left"
                        src={require("../../../assets/images/HIRE US/Hire Web Developer/Hire Laravel Developers/workhand/port-mobile-app-mobile-fifteen.webp")}
                        alt="port-mobile-app-mobile-fifteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port_mobilebg_sixteen">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Bolt – Driver</h2>
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
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-left"
                        src={require("../../../assets/images/Portfolio/port-mobile-app-mobile-sixteen.webp")}
                        alt="port-mobile-app-mobile-sixeen"
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
      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHAT DO WE OFFER IN LARAVEL DEVELOPMENT COMPANY?</h2>
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
                  <a href="/services">Laravel Web Application Development</a>
                </h5>
                <div className="text">
                  Laravel is an Open source web application technology which
                  offers the easy accessibility of the features for developing
                  the best web solution for small to large scale industry. We
                  have a team of highly skilled Laravel developers who provide
                  the best solution to the clients.
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
                  <a href="/services">Offer Customization</a>
                </h5>
                <div className="text">
                  We also work on customizable software development and try to
                  provide all the functionality in a single platform through
                  customizations. Customization helps in adding up the unique
                  features which help in increasing the sales.
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
                  <a href="/services">Laravel Features Integration</a>
                </h5>
                <div className="text">
                  We have skilled Laravel development who can also help to
                  integrate Laravel features into an existing web application
                  for your business or industry.
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
                  <a href="/services">Secure Web Solutions</a>
                </h5>
                <div className="text">
                  We are ready with a robust team of Flutter developers who are
                  ready to provide the flutter apps along with keeping in mind
                  the performance issues of integrating new features.
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
                  <a href="/services">Laravel Consulting Services</a>
                </h5>
                <div className="text">
                  As a Flutter software development company, we offer the best
                  flutter app solution. Along with delivering the best flutter
                  app solution, we also ensure about delivering a secure
                  solution that helps in maintaining security and privacy.
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
                  <a href="/services">Unit Testing Methods</a>
                </h5>
                <div className="text">
                  Laravel Technology provides features of unique unit testing.
                  During Development, the Laravel framework can run several test
                  cases to check the changes in the web app. Our Laravel
                  developer can write test cases for better performance.
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
            <h2>WHY CHOOSE HIRE LARAVEL DEVELOPERS IN INDIA?</h2>
            <p>
              Laravel Technology is a free and open-source laravel PHP framework
              that follows the MVC architecture to offer the foremost web
              applications to you. Our Laravel developers are highly
              experienced. There are various reasons to choose us.
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
                  <a href="/services">Expertise In Web Solutions</a>
                </h5>
                <div className="text">
                  We boast of a robust team of dedicated iOS app developers with
                  proven track record and several years of iOS development
                  experience.
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
                  <a href="/services">Sophisticated Portfolio</a>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  With years of experience, We have worked on various Laravel
                  projects and successful web solutions or applications for
                  different niches.
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
                  <a href="/services">Implement Agile Methods</a>
                </h5>
                <div className="text">
                  Along with the best designing and development services, we
                  also offer the on-time deployment of the projects. We strictly
                  follow the timeline.
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
                  <a href="/services">Affordable Costing</a>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  Based on the projects, modules, and features of the
                  requirements, we offer the best competitive rates without
                  embracing the quality of the projects.
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
                  <a href="/services">Time-Bound Deployment</a>
                </h5>
                <div className="text">
                  We strictly follow the timeline of deploying the projects to
                  our clients with the best quality. In a timeline, we develop
                  as well as test the software before delivering it to you.
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
                  <a href="/services">Free Support Services</a>
                </h5>
                <div className="text" style={{ marginBottom: "25px" }}>
                  After deployment of the projects within the timeline, we also
                  offer our clients three months of free support and maintenance
                  services. You can easily connect with us through various
                  methods like E-mail, call, and chat.
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
                  Do you want to know more about our Flutter developers and
                  their expertise?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="#" className="contact_btn">
                  Contact us{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default HireLaravelDev;
