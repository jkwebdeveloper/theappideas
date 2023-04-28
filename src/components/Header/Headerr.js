import React, { useEffect, useState } from "react";
import "./headerr.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Headerr = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 80 ? "sticked" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };
  return (
    <header
      className={`header__section fixed-top ${sticky}`}
      data-scrollto-offset={0}
    >
      <nav>
        <div className="wrapper container">
          <div className="logo">
            <Link to="/">
              <a href="/">
                <img
                  src={require("../../assets/images/Header/logo.png")}
                  alt="logo"
                  className="img-fluid"
                />
              </a>
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <AiOutlineClose />
            </label>
            <li>
              <a href="#" className="desktop-item">
                Company <i className="fa  fa-angle-down down__arrow" />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Company <i className="fa  fa-angle-down down__arrow" />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/Aboutus">
                        <li>
                          <a href="#" className="f">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/About-us (1).gif")}
                              alt="About-us"
                            />{" "}
                            About Us
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#" className="company_text">
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Process (1).gif")}
                            alt="Our-Team"
                          />{" "}
                          Our Process
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#" className="company_text">
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Our-Team (1).gif")}
                            alt="Our-Team"
                          />{" "}
                          Our Team
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#" className="company_text">
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Testamonials (1).gif")}
                            alt="Testamonials"
                          />
                          Testimonial
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#" className="company_text">
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Carrers (1).gif")}
                            alt="Carrers"
                          />{" "}
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#" className="company_text">
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Life-at-TAI (1).gif")}
                            alt="Life-at-TAI"
                          />{" "}
                          Life at TAI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a href="#" className="menu_contact_btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Services <i className="fa  fa-angle-down down__arrow" />{" "}
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                Services <i className="fa  fa-angle-down down__arrow" />{" "}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Mobile-App-Development.gif"
                        alt="Mobile-App-Development"
                      />
                      Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Android App Development</a>
                      </li>
                      <li>
                        <a href="#">IPhone App Development</a>
                      </li>
                      <li>
                        <a href="#">IPad App Development</a>
                      </li>
                      <li>
                        <a href="#">React Native Development</a>
                      </li>
                      <li>
                        <a href="#">iBeacon App Development</a>
                      </li>
                      <li>
                        <a href="#">IOT App Development</a>
                      </li>
                      <li>
                        <a href="#">Apple Watch App Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Web-Development.gif"
                        alt="Web-Development"
                      />{" "}
                      Web Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">WordPress Development</a>
                      </li>
                      <li>
                        <a href="#">PHP Development</a>
                      </li>
                      <li>
                        <a href="#">Angular Development</a>
                      </li>
                      <li>
                        <a href="#">Webflow Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/E-commerce-website-Development.gif"
                        alt="E-commerce-website-Development"
                      />{" "}
                      E-commerce Website Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Shopify Development</a>
                      </li>
                      <li>
                        <a href="#">Magento Development</a>
                      </li>
                      <li>
                        <a href="#">Joomla Development</a>
                      </li>
                      <li>
                        <a href="#">Drupal Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Game-Development.gif"
                        alt="Game-Development"
                      />
                      Game Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Mobile Game Development</a>
                      </li>
                      <li>
                        <a href="#">2D-3D Game Development</a>
                      </li>
                      <li>
                        <a href="#">Unity Game Development</a>
                      </li>
                      <li>
                        <a href="#">Virtual Reality Game Development</a>
                      </li>
                      <li>
                        <a href="#">HTML5 Games Development</a>
                      </li>
                      <li>
                        <a href="#">COCOS2D Game Development</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Digital-Marketing-Agency.gif"
                        alt="Digital-Marketing-Agency"
                      />{" "}
                      Digital Marketing Agency
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#">Social Media Marketing</a>
                      </li>
                      <li>
                        <a href="#">ASO</a>
                      </li>
                      <li>
                        <a href="#">Guest Blogging</a>
                      </li>
                      <li>
                        <a href="#">iBeacon App Development</a>
                      </li>
                      <li>
                        <a href="#">IOT App Development</a>
                      </li>
                      <li>
                        <a href="#">Apple Watch App Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Software-Development.gif"
                        alt="Software-Development"
                      />
                      software development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Asp.Net Development</a>
                      </li>
                      <li>
                        <a href="#">DotNetNuke Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Designing-Services.gif"
                        alt="Designing-Services"
                      />
                      Designing services
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics Design</a>
                      </li>
                      <li>
                        <a href="#">Mobile App Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Other-Services.gif"
                        alt="Other-Services"
                      />
                      Other Services
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Startup Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a href="#" className="menu_contact_btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Hire Us <i className="fa  fa-angle-down down__arrow" />{" "}
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                Hire Us <i className="fa fa-angle-down down__arrow" />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Mobile-App-Developer.gif"
                        alt="Hire-Mobile-App-Development"
                      />
                      Hire Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Hire IOS Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire Android Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire React Native Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire Flutter Developer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Web-Developer.gif"
                        alt="Hire-Web-Development"
                      />
                      Hire Web Developer
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Hire Laravel Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire WordPress Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire Node.js Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire CodeIgniter Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire PHP Developers</a>
                      </li>
                      <li>
                        <a href="#">Hire Python Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire React JS Developer</a>
                      </li>
                      <li>
                        <a href="#">Hire Angular 2 Developer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Ecommerce-Developer.gif"
                        alt="Hire-Ecommerce-Developer"
                      />
                      Hire E-commerce Developer
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Hire Shopify Development</a>
                      </li>
                      <li>
                        <a href="#">Hire Magento 2 Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Designer.gif"
                        alt="Hire-Designer"
                      />
                      Hire Designer
                    </h4>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>
                          Are you looking for an experience resource for your
                          project?
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a href="#" className="menu_contact_btn">
                          Hire Our Developer{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Solutions <i className="fa  fa-angle-down down__arrow" />{" "}
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Solutions <i className="fa fa-angle-down down__arrow" />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Delivery-App.gif"
                        alt="Delivery-App"
                      />
                      Delivery Apps
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Food Delivery App Development</a>
                      </li>
                      <li>
                        <a href="#">Courier Pickup Management Solution</a>
                      </li>
                      <li>
                        <a href="#">Grocery App Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/On-Demand-Apps.gif"
                        alt="On-Demand-Apps"
                      />
                      On-Demand Apps
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Taxi Booking App Development</a>
                      </li>
                      <li>
                        <a href="#">Doctor Hiring App Solution</a>
                      </li>
                      <li>
                        <a href="#">Security App Solution</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Popular-Solutions.gif"
                        alt="Popular-Solutions"
                      />
                      Popular Solutions
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">eCommerce App Development</a>
                      </li>
                      <li>
                        <a href="#">E-learning App Development</a>
                      </li>
                      <li>
                        <a href="#">Dating App Development</a>
                      </li>
                      <li>
                        <a href="#">Driver Tracking App Development</a>
                      </li>
                      <li>
                        <a href="#">Salon Service App</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>
                          Would you like to know more about our ready made
                          solution?
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a href="#" className="menu_contact_btn">
                          Contact Us{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#" className="get_a_btn">
                GET A QUOTE
              </a>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fa fa-bars" />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Headerr;
