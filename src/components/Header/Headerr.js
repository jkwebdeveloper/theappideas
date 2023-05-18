import React, { useEffect, useState } from "react";
import "./headerr.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Headerr = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
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
  };
  return (
    <header
      className={`header__section fixed-top ${sticky}`}
      data-scrollto-offset={0}
    >
      <nav>
        <div className="wrapper">
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
              <a href="/" className="desktop-item">
                Company <MdKeyboardArrowDown />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Company <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/Aboutus">
                        <li>
                          <a href="/" className="f">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Company/About Us.gif")}
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
                      <Link to="/Our-Process">
                        <li>
                          <a className="company_text">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Company/Our Process.gif")}
                              alt="Our-Team"
                            />{" "}
                            Our Process
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/Our-Team">
                        <li>
                          <a className="company_text">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Company/Our Team.gif")}
                              alt="Our-Team"
                            />{" "}
                            Our Team
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/Testimonial">
                        <li>
                          <a className="company_text">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Company/Testimonial.gif")}
                              alt="Testamonials"
                            />
                            Testimonial
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/Careers">
                        <li>
                          <a className="company_text">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Company/Careers.gif")}
                              alt="Carrers"
                            />{" "}
                            Careers
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/Life-at-Tai">
                        <li>
                          <a className="company_text">
                            {" "}
                            <img
                              src={require("../../assets/images/Header/Company/Life at TAI.gif")}
                              alt="Life-at-TAI"
                            />{" "}
                            Life at TAI
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a href="/" className="menu_contact_btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="desktop-item">
                Services <MdKeyboardArrowDown />{" "}
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                Services <MdKeyboardArrowDown />{" "}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <Link to="/mobile-app-development">
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Mobile App Development.gif")}
                          alt="Mobile-App-Development"
                        />
                        Mobile App Development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/Android-App-Development">
                        <li>
                          <a>Android App Development</a>
                        </li>
                      </Link>
                      <Link to="IPhone-App-Development">
                        <li>
                          <a>IPhone App Development</a>
                        </li>
                      </Link>
                      <Link to="/IPadAppDevelopment">
                        <li>
                          <a>IPad App Development</a>
                        </li>
                      </Link>
                      <Link to="/React-Native-Development">
                        <li>
                          <a>React Native Development</a>
                        </li>
                      </Link>
                      {/* <Link to="/iBeacon-App-Development">
                        <li>
                          <a>iBeacon App Development</a>
                        </li>
                      </Link> */}
                      <Link to="/IOT-App-Development">
                        <li>
                          <a>IOT App Development</a>
                        </li>
                      </Link>
                      {/* <Link to="/watch-app-development">
                        <li>
                          <a>Apple Watch App Development</a>
                        </li>
                      </Link> */}
                    </ul>
                  </div>

                  <div className="row">
                    <Link to="/Digital-Marketing-Agency">
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Digital Marketing Agency.gif")}
                          alt="Digital-Marketing-Agency"
                        />{" "}
                        Digital Marketing Agency
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/seo">
                        <li>
                          <a>SEO</a>
                        </li>
                      </Link>
                      <Link to="/Social-Media-Marketing">
                        <li>
                          <a>Social Media Marketing</a>
                        </li>
                      </Link>
                      <Link to="/ASO-company">
                        <li>
                          <a>ASO</a>
                        </li>
                      </Link>
                      <Link to="/Guest-Blogging">
                        <li>
                          <a>Guest Blogging</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link to="/E-commerce-website-Development">
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/E-commerce website Development.gif")}
                          alt="E-commerce-website-Development"
                        />{" "}
                        E-commerce Website Development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/Shopify-Development">
                        <li>
                          <a>Shopify Development</a>
                        </li>
                      </Link>
                      <Link to="/Magento-Development">
                        <li>
                          <a>Magento Development</a>
                        </li>
                      </Link>
                      <Link to="/Joomla-Development">
                        <li>
                          <a>Joomla Development</a>
                        </li>
                      </Link>
                      <Link to="/Drupal-Development">
                        <li>
                          <a>Drupal Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link to="/web-development">
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Web Development.gif")}
                          alt="Web-Development"
                        />{" "}
                        Web Development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/WordPress-Development">
                        <li>
                          <a>WordPress Development</a>
                        </li>
                      </Link>
                      <Link to="/PHP-Development">
                        <li>
                          <a>PHP Development</a>
                        </li>
                      </Link>
                      <Link to="/Angular-Development">
                        <li>
                          <a>Angular Development</a>
                        </li>
                      </Link>
                      <Link to="/Webflow-Development">
                        <li>
                          <a>Webflow Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <div className="row">
                    <Link to="/Software-Development">
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Software Development.gif")}
                          alt="Software-Development"
                        />
                        software development
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/Asp.Net-Development">
                        <li>
                          <a>Asp.Net Development</a>
                        </li>
                      </Link>
                      <Link to="/DotNetNuke-Development">
                        <li>
                          <a>DotNetNuke Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link to="/Designing-Services">
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Designing Services.gif")}
                          alt="Designing-Services"
                        />
                        Designing services
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/Graphics-Design">
                        <li>
                          <a>Graphics Design</a>
                        </li>
                      </Link>
                      <Link to="/Mobile-App-Design">
                        <li>
                          <a>Mobile App Design</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link>
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Other Services.gif")}
                          alt="Other-Services"
                        />
                        Other Services
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/Startup-Services">
                        <li>
                          <a href="/">Startup Services</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a href="/" className="menu_contact_btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="desktop-item">
                Hire Us <MdKeyboardArrowDown />{" "}
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                Hire Us <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Hire Us/Hire Mobile App Developer.gif")}
                        alt="Hire-Mobile-App-Development"
                      />
                      Hire Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <Link to="/Hire-IOS-Developer">
                        <li>
                          <a>Hire IOS Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-android-developer">
                        <li>
                          <a href="/">Hire Android Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-react-native-developer">
                        <li>
                          <a href="/">Hire React Native Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-flutter-developer">
                        <li>
                          <a href="/">Hire Flutter Developer</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Hire Us/Hire Web Developer.gif")}
                        alt="Hire-Web-Development"
                      />
                      Hire Web Developer
                    </h4>
                    <ul className="mega-links">
                      <Link to="/Hire-Laravel-Developer">
                        <li>
                          <a>Hire Laravel Developer</a>
                        </li>
                      </Link>
                      <Link to="/Hire-WordPress-Developer">
                        <li>
                          <a>Hire WordPress Developer</a>
                        </li>
                      </Link>
                      <Link to="/Hire-nodejs-developer">
                        <li>
                          <a>Hire Node.js Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-CodeIgniter-developer">
                        <li>
                          <a>Hire CodeIgniter Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-php-developer">
                        <li>
                          <a>Hire PHP Developers</a>
                        </li>
                      </Link>
                      <Link to="/Hire-python-developer">
                        <li>
                          <a>Hire Python Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-reactjs-developer">
                        <li>
                          <a>Hire React JS Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-HireAngular-developer">
                        <li>
                          <a>Hire Angular 2 Developer</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Hire Us/Hire E-commerce Developer.gif")}
                        alt="Hire-Ecommerce-Developer"
                      />
                      Hire E-commerce Developer
                    </h4>
                    <ul className="mega-links">
                      <Link to="/Hire-Shopify-Development">
                        <li>
                          <a>Hire Shopify Development</a>
                        </li>
                      </Link>
                      <Link to="/Hire-Magento-Development">
                        <li>
                          <a>Hire Magento 2 Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Hire Us/Hire Designer.gif")}
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
                        <a href="/" className="menu_contact_btn">
                          Hire Our Developer{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/" className="desktop-item">
                Solutions <MdKeyboardArrowDown />{" "}
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Solutions <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <Link>
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Solutions/Delivery App.gif")}
                          alt="Delivery-App"
                        />
                        Delivery Apps
                      </h4>
                    </Link>
                    <ul className="mega-links">
                      <Link to="/Food-Delivery-App-Development">
                        <li>
                          <a>Food Delivery App Development</a>
                        </li>
                      </Link>
                      <Link to="/Courier-Pickup-Management-Solution">
                        <li>
                          <a>Courier Pickup Management Solution</a>
                        </li>
                      </Link>
                      <Link to="/grocery-app-developer">
                        <li>
                          <a>Grocery App Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Solutions/On Demand Apps.gif")}
                        alt="On-Demand-Apps"
                      />
                      On-Demand Apps
                    </h4>
                    <ul className="mega-links">
                      <Link to="/Taxi-Booking-App-Development">
                        <li>
                          <a>Taxi Booking App Development</a>
                        </li>
                      </Link>
                      <Link to="/Doctor-Hiring-App-Solution">
                        <li>
                          <a>Doctor Hiring App Solution</a>
                        </li>
                      </Link>
                      <Link to="/Security-App-Solution">
                        <li>
                          <a>Security App Solution</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Solutions/Popular Solutions.gif")}
                        alt="Popular-Solutions"
                      />
                      Popular Solutions
                    </h4>
                    <ul className="mega-links">
                      <Link to="/eCommerce-App-Development">
                        <li>
                          <a>eCommerce App Development</a>
                        </li>
                      </Link>
                      <Link to="/E-learning-App-Development">
                        <li>
                          <a>E-learning App Development</a>
                        </li>
                      </Link>
                      <Link to="Dating-App-Development">
                        <li>
                          <a>Dating App Development</a>
                        </li>
                      </Link>
                      <Link to="/Driver-Tracking-App-Development">
                        <li>
                          <a>Driver Tracking App Development</a>
                        </li>
                      </Link>
                      <Link to="/Salon-Service-App">
                        <li>
                          <a>Salon Service App</a>
                        </li>
                      </Link>
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
                        <a href="/" className="menu_contact_btn">
                          Contact Us{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link to="/contactUs">
                <a>Contact Us</a>
              </Link>
            </li>

            <li>
              <Link to="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <a href="/" className="get_a_btn">
                GET A QUOTE
              </a>
              {/* <button class="custom-btn btn-15">Read More</button> */}
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <AiOutlineMenu />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Headerr;
