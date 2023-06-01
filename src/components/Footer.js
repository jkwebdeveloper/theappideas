import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { AiOutlineBehance } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import appdeveloper from "../assets/images/Footer/app-development-img.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">On Demand Apps</h2>
              <ul>
                <li>
                  <Link to="/taxi-booking-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Taxi Booking App
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/security-app-solution">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Security Guard App
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/food-delivery-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Food Delivery App
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/doctor-hiring-app-solution">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Doctor Hiring App
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Quick Links</h2>
              <ul>
                <li>
                  <Link to="/">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/contactus">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Testimonial
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/careers">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Careers{" "}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Services</h2>
              <ul>
                <li>
                  <Link to="/mobile-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Mobile App Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/iot-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      IOT Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/web-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Web Design &amp; Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/e-commerce-website-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      E-commerce Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Testimonial
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/hire-us">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Hire A Developer
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Solutions</h2>
              <ul>
                <li>
                  <Link to="/dating-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Dating App
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/lawyer-website-solution">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Lawyer Website Solution
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/driver-tracking-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Driver Tracking App Solution
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/e-commerce-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Ecommerce App Solution
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/e-learning-app-development">
                    <a>
                      <i className="right__arrow">
                        <RiArrowRightSLine />
                      </i>{" "}
                      Elearning Website Solution
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Get in Touch</h2>
              <p>
                <i className="location_map" aria-hidden="true">
                  <MdLocationPin />
                </i>
                <span>
                  FO-6, Raspan Arcade, Near Rajhans Cinema, Nikol-Naroda,
                  Ahmedabad-382350.
                </span>
              </p>
              <ul className="ms-2">
                <li>
                  <a>
                    <i style={{ marginRight: "10px", marginLeft: "25px" }}>
                      <GoMail style={{ color: "#d6aa0b" }} />
                    </i>
                    <span>contact@theappideas.com</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i style={{ marginRight: "10px", marginLeft: "25px" }}>
                      <BsFillTelephoneFill style={{ color: "#d6aa0b" }} />
                    </i>
                    <span>+91 8866564279</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i style={{ marginRight: "10px", marginLeft: "25px" }}>
                      <BsWhatsapp style={{ color: "#d6aa0b" }} />
                    </i>
                    <span>Whats App Me</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i style={{ marginRight: "10px", marginLeft: "25px" }}>
                      <BsSkype style={{ color: "#d6aa0b" }} />
                    </i>
                    <span>Skype</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Follow us</h2>
              <div className="social__footer">
                <a href="https://www.facebook.com/Theappideas/" target="_blank">
                  <RiFacebookFill />
                </a>
                <a href="https://twitter.com/theappidea" target="_blank">
                  <BsTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/theappideas/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_18zGzO_zpXkKiy1WXi4oA"
                  target="_blank"
                >
                  <AiFillYoutube />
                </a>
                <a href="https://dribbble.com/theappideas" target="_blank">
                  <BsDribbble />
                </a>
                <a href="https://www.behance.net/theappidea" target="_blank">
                  <AiOutlineBehance />
                </a>
              </div>
              <div className="footer__sitemap my-3">
                <Link to="/sitemap">
                  <a className="sitemap_btn" style={{ color: "#000" }}>
                    Sitemap
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-6">
            <div className="footer__box">
              <h2 className="footer_title">Awards and Accolades</h2>
              <div className="footer__awards">
                <ul>
                  <li>
                    <a className="footer__awards_achor"></a>
                    <div className="d-flex">
                      <a className="footer__awards_achor">
                        <div>
                          <img
                            src={require("../assets/images/Footer/clutch-logo.png")}
                            alt="app-development-img"
                            className="img-fluid"
                          />
                        </div>
                      </a>
                      <div className="rating_box">
                        <a className="footer__awards_achor"></a>
                        <a>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                        </a>
                        <a className="reviews-count">
                          <span>42 reviews</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://www.goodfirms.co/company/the-app-ideas"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <img
                        src={appdeveloper}
                        alt="app-development-img"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freelancer.com/u/Theappideas"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <img
                        src={require("../assets/images/Footer/freelancer-logo-1.webp")}
                        alt="freelancer-logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.peopleperhour.com/freelancer/technology-programming/app_ideas_infotech_pvt_ltd-panchal-full-stack-developer-web-app-znjmyqw"
                      target="_blank"
                      className="footer__awards_achor"
                    >
                      <img
                        src={require("../assets/images/Footer/pph_new.webp")}
                        alt="pph_new"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.upwork.com/ag/theappideas/"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <img
                        src={require("../assets/images/Footer/upwork_new.webp")}
                        alt="upwork_new"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
