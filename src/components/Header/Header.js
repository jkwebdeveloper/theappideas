import React, { useEffect, useState } from "react";
// import { RiArrowDownSFill } from "react-icons/ri";
// import AboutGif from "../../assets/images/Header/Company/About us.gif";
// import ProcessGif from "../../assets/images/Header/Company/Process.gif";
// import TeamGif from "../../assets/images/Header/Company/Our Team.gif";
// import TestimonialGif from "../../assets/images/Header/Company/Testamonials.gif";
// import CareersGif from "../../assets/images/Header/Company/Carrers.gif";
// import LifeGif from "../../assets/images/Header/Company/Life at TAI.gif";
// import { Link } from "react-router-dom";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
      id="header"
      className={`header fixed-top ${sticky}`}
      data-scrollto-offset={0}
    >
      <div className="main_header_area animated">
        <div className="container">
          <nav id="navigation1" className="navigation">
            <div className="nav-header">
              <a className="nav-brand" href="#">
                <Link to='/'>
                <img
                  src={require("../../assets/images/Header/logo.png")}
                  alt="logo"
                  className="img-fluid"
                />
                </Link>
              </a>
              <div className="nav-toggle" />
            </div>
            <div className="nav-menus-wrapper">
              <ul className="nav-menu align-to-right">
                <li>
                  <a href="#">Company</a>
                  <div className="megamenu-panel">
                    <h2 className="megamenu_panel_title">Company</h2>
                    <div className="megamenu-lists">
                      <ul className="megamenu-list list-col-3">
                        <Link to="/Aboutus">
                          <li>
                            <a
                              href="/"
                              target="_blank"
                              className="company_menu"
                            >
                              {" "}
                              <img
                                src={require("../../assets/images/Header/About-us (1).gif")}
                                alt="About-us"
                                style={{width:'36px', height:'36px', objectFit:'cover',marginLeft:'15px'}}
                              />{" "}
                              <span className="title">About US</span>
                            </a>
                          </li>
                        </Link>
                        <li>
                          <a href="#" target="_blank" className="company_menu">
                            <img
                              src={require("../../assets/images/Header/Testamonials (1).gif")}
                              alt="Testamonials"
                            />
                            Testimonial
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-3">
                        <li>
                          <a href="#" target="_blank" className="company_menu">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Process (1).gif")}
                              alt="Process"
                            />
                            Our Process
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" className="company_menu">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Carrers (1).gif")}
                              alt="Carrers"
                            />{" "}
                            Carrers
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-3">
                        <li>
                          <a href="#" target="_blank" className="company_menu">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Our-Team (1).gif")}
                              alt="Our-Team"
                            />{" "}
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" className="company_menu">
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
                    <div className="navbar__bottom__content">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="navbar__bottom__content__lft">
                            <h2>Would you like to build your career?</h2>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="navbar__bottom__content__rht">
                            <a href="#" className="contact_header_btn">
                              Join Our Team
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Services</a>
                  <div className="megamenu-panel">
                    <div className="megamenu-lists">
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Mobile-App-Development.gif")}
                              alt="Mobile App Development"
                              className="img-fluid"
                            />{" "}
                            Mobile App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Android App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> IPhone App
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> IPad App
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> React Native
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> iBeacon App
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> IOT App
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> Apple Watch App
                            Development
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Web-Development.gif")}
                              alt="Web-Development"
                              className="img-fluid"
                            />{" "}
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            WordPress Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            PHP Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Angular Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Webflow Development
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/E-commerce-website-Development.gif")}
                              alt="E-commerce-website-Development"
                              className="img-fluid"
                            />
                            E-commerce Website Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Shopify Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Magento Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Joomla Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Drupal Development
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Game-Development.gif")}
                              alt="Game-Development"
                              className="img-fluid"
                            />
                            Game Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Mobile Game Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            2D-3D Game Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Unity Game Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Virtual Reality Game Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            HTML5 Games Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            COCOS2D Game Development
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="megamenu-lists mt-4 ">
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Digital-Marketing-Agency.gif")}
                              alt="Digital-Marketing-Agency"
                              className="img-fluid"
                            />
                            Digital Marketing Agency
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            SEO
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Social Media Marketing
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> ASO
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Guest Blogging
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            <img
                              src={require("../../assets/images/Header/Software-Development.gif")}
                              alt="Software-Development"
                              className="img-fluid"
                            />
                            software development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Asp.Net Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            DotNetNuke Development
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            <img
                              src={require("../../assets/images/Header/Designing-Services.gif")}
                              alt="Designing-Services"
                              className="img-fluid"
                            />
                            Designing services
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Graphics Design
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Mobile App Design
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Other-Services.gif")}
                              alt="Other-Services"
                              className="img-fluid"
                            />
                            Other Services
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Startup Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="navbar__bottom__content">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="navbar__bottom__content__lft">
                            <h2> Would you like to execute any project?</h2>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="navbar__bottom__content__rht">
                            <a href="#" className="contact_header_btn">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Hire us </a>
                  <div className="megamenu-panel">
                    <h2 className="megamenu_panel_title">Hire us</h2>
                    <div className="megamenu-lists">
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Hire-Mobile-App-Developer.gif")}
                              alt="Hire-Mobile-App-Developer"
                              className="img-fluid"
                            />
                            Hire Mobile App Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire IOS Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> Hire Android
                            Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> Hire React
                            Native Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> Hire Flutter
                            Developer
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Hire-Web-Developer.gif")}
                              alt="Web-Development"
                              className="img-fluid"
                            />{" "}
                            hire Web Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Laravel Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire WordPress Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Node.js Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire CodeIgniter Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire PHP Developers
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Python Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire React JS Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Angular 2 Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Angular 2 Developer
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Hire-Ecommerce-Developer.gif")}
                              alt="E-commerce-website-Development"
                              className="img-fluid"
                            />
                            Hire eCommerce Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Shopify Developer
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Hire Magento 2 Developer
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-4">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Hire-Designer.gif")}
                              alt="Hire-Designer"
                              className="img-fluid"
                            />
                            Hire Designer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="navbar__bottom__content">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="navbar__bottom__content__lft">
                            <h2>
                              Are you looking for an experience resource for
                              your project?
                            </h2>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="navbar__bottom__content__rht">
                            <a href="#" className="contact_header_btn">
                              Hire our Developer
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Solutions</a>
                  <div className="megamenu-panel">
                    <h2 className="megamenu_panel_title">Solutions</h2>
                    <div className="megamenu-lists">
                      <ul className="megamenu-list list-col-3">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Delivery-App.gif")}
                              alt="Delivery-App"
                              className="img-fluid"
                            />
                            Delivery Apps
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Food Delivery App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" /> Courier Pickup
                            Management Solution
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Grocery App Development
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-3">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/On-Demand-Apps.gif")}
                              alt="On-Demand-Apps"
                              className="img-fluid"
                            />{" "}
                            On-Demand Apps
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Taxi Booking App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Doctor Hiring App Solution
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Security App Solution
                          </a>
                        </li>
                      </ul>
                      <ul className="megamenu-list list-col-3">
                        <li className="megamenu-list-title">
                          <a href="#">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Popular-Solutions.gif")}
                              alt="Popular-Solutions"
                              className="img-fluid"
                            />
                            Popular Solutions
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            eCommerce App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            E-learning App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Dating App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Driver Tracking App Development
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <span className="triangle_angle" />
                            Salon Service App
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="navbar__bottom__content">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="navbar__bottom__content__lft">
                            <h2>
                              Would you like to know more about our ready made
                              solution?
                            </h2>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="navbar__bottom__content__rht">
                            <a href="#" className="contact_header_btn">
                              Contact Us
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
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#" className="get_btn">
                    get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
