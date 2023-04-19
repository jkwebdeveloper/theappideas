import React from "react";
import { RiMapPinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h4>GET IN TOUCH</h4>
                  <div className="line"></div>
                  <p>
                    <RiMapPinFill
                      style={{ marginRight: "5px", marginTop: "-5px" }}
                    />
                    FO-6, Raspan Arcade, Near Rajhans Cinema, Nikol- <br />
                    Naroda, Ahmedabad-382350.
                    <br />
                    <br />
                    <strong>
                      <GoMail />
                    </strong>{" "}
                    contact@theappideas.com
                    <br />
                    <strong>
                      <BsFillTelephoneFill />
                    </strong>{" "}
                    +91 8866564279
                    <br />
                    <br />
                    <BsWhatsapp
                      style={{ marginRight: "5px", marginTop: "-5px" }}
                    />
                    Whats App Me
                    <br />
                    <BsSkype
                      style={{ marginRight: "5px", marginTop: "-5px" }}
                    />
                    Skype
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>QUICK LINKS</h4>
                <div className="line"></div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Portfolio</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Testimonial</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>SERVICES</h4>
                <div className="line"></div>
                <ul>
                  <li>
                    <a href="/">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="/">IOT Development</a>
                  </li>
                  <li>
                    <a href="/">Web Design & Development</a>
                  </li>
                  <li>
                    <a href="/">E-commerce Development</a>
                  </li>
                  <li>
                    <a href="/">Game Development</a>
                  </li>
                  <li>
                    <a href="/">Hire A Developer</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>SOLUTIONS</h4>
                <div className="line"></div>
                <ul>
                  <li>
                    <a href="/">Dating App</a>
                  </li>
                  <li>
                    <a href="/">Lawyer Website Solution</a>
                  </li>
                  <li>
                    <a href="/">Driver Tracking App Solution</a>
                  </li>
                  <li>
                    <a href="/">Ecommerce App Solution</a>
                  </li>
                  <li>
                    <a href="/">Elearning Website Solution</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>ON DEMAND APPS</h4>
                <div className="line"></div>
                <ul>
                  <li>
                    <a href="/">Taxi Booking App</a>
                  </li>
                  <li>
                    <a href="/">Security Guard App</a>
                  </li>
                  <li>
                    <a href="/">Food Delivery App</a>
                  </li>
                  <li>
                    <a href="/">Doctor Hiring App</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h3>AWARDS AND ACCOLADES</h3>
                <div className="footer-line"></div>
                <div className="awords-section">
                  <ul>
                    <li>
                      <img
                        src={require("../assets/images/Footer/goodfirms.png")}
                        style={{ width: "140px" }}
                      />
                    </li>
                    <li>
                      <img
                        src={require("../assets/images/Footer/freelancer-logo-1.webp")}
                        style={{ width: "120px" }}
                      />
                    </li>
                    <li>
                      <img
                        src={require("../assets/images/Footer/pph_new.webp")}
                        style={{ width: "120px" }}
                      />
                    </li>
                    <li>
                      <img
                        src={require("../assets/images/Footer/upwork_new.webp")}
                        style={{ width: "120px" }}
                      />
                    </li>
                  </ul>
                  {/* <img
                      src={require("../assets/images/Footer/goodfirms.png")}
                    />
                    <img
                      src={require("../assets/images/Footer/freelancer-logo-1.webp")}
                    />
                    <img src={require("../assets/images/Footer/pph_new.webp")} />
                    <img
                      src={require("../assets/images/Footer/upwork_new.webp")}
                    /> */}
                </div>
              </div>
              <div className="col-lg-4 ">
                <h3>FOLLOW US</h3>
                <div className="footer-line"></div>
                <div className="social-account">
                  <ul style={{ display: "flex" }}>
                    <a href="/">
                      <FaFacebookF />
                    </a>
                    <a href="/">
                      <BsTwitter />
                    </a>
                    <a href="/">
                      <FaLinkedinIn />
                    </a>
                    <a href="/">
                      <FaYoutube />
                    </a>
                    <a href="/">
                      <BsDribbble />
                    </a>
                    <a href="/">
                      <FaBehance />
                    </a>
                  </ul>
                </div>
                <button className="footer-btn">SITEMAP</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Footer;
