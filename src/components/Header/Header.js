import React, { useEffect, useState } from "react";
import "./header.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Link>
                <a href="/" className="desktop-item">
                  Company <MdKeyboardArrowDown />
                </a>
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Company <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/aboutus">
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
                      <Link to="/our-process">
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
                      <Link to="/our-team">
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
                      <Link to="/testimonial">
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
                      <Link to="/careers">
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
                      <Link to="/life-at-tai">
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
                        <Link to="/careers">
                          <a className="menu_contact_btn">Join Our Team</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link>
                <a className="desktop-item">
                  Services <MdKeyboardArrowDown />{" "}
                </a>
              </Link>
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
                      <Link to="/android-app-development">
                        <li>
                          <a>Android App Development</a>
                        </li>
                      </Link>
                      <Link to="iphone-app-development">
                        <li>
                          <a>IPhone App Development</a>
                        </li>
                      </Link>
                      <Link to="/ipad-app-development">
                        <li>
                          <a>IPad App Development</a>
                        </li>
                      </Link>
                      <Link to="/react-native-development">
                        <li>
                          <a>React Native Development</a>
                        </li>
                      </Link>
                      {/* <Link to="/iBeacon-App-Development">
                        <li>
                          <a>iBeacon App Development</a>
                        </li>
                      </Link> */}
                      <Link to="/iot-app-development">
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
                    <Link to="/digital-marketing-agency">
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
                      <Link to="/social-media-marketing">
                        <li>
                          <a>Social Media Marketing</a>
                        </li>
                      </Link>
                      <Link to="/aso-company">
                        <li>
                          <a>ASO</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link to="/e-commerce-website-development">
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
                      <Link to="/shopify-development">
                        <li>
                          <a>Shopify Development</a>
                        </li>
                      </Link>
                      <Link to="/magento-development">
                        <li>
                          <a>Magento Development</a>
                        </li>
                      </Link>
                      <Link to="/joomla-development">
                        <li>
                          <a>Joomla Development</a>
                        </li>
                      </Link>
                      <Link to="/drupal-development">
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
                      <Link to="/wordpress-development">
                        <li>
                          <a>WordPress Development</a>
                        </li>
                      </Link>
                      <Link to="/php-development">
                        <li>
                          <a>PHP Development</a>
                        </li>
                      </Link>
                      <Link to="/angular-development">
                        <li>
                          <a>Angular Development</a>
                        </li>
                      </Link>
                      <Link to="/webflow-development">
                        <li>
                          <a>Webflow Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <div className="row">
                    <Link to="/software-development">
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
                      <Link to="/asp-net-development">
                        <li>
                          <a>Asp.Net Development</a>
                        </li>
                      </Link>
                      <Link to="/dotnetnuke-development">
                        <li>
                          <a>DotNetNuke Development</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link to="/designing-services">
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
                      <Link to="/graphics-design">
                        <li>
                          <a>Graphics Design</a>
                        </li>
                      </Link>
                      <Link to="/mobile-app-design">
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
                      <Link to="/startup-services">
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
                        <Link to="/contactus">
                          <a className="menu_contact_btn">Contact Us</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/hire-us">
                <a href="/hire-us" className="desktop-item">
                  Hire Us <MdKeyboardArrowDown />{" "}
                </a>
              </Link>
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
                      <Link to="/hire-ios-developer">
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
                      <Link to="/hire-laravel-developer">
                        <li>
                          <a>Hire Laravel Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-wordpress-developer">
                        <li>
                          <a>Hire WordPress Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-nodejs-developer">
                        <li>
                          <a>Hire Node.js Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-codeigniter-developer">
                        <li>
                          <a>Hire CodeIgniter Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-php-developer">
                        <li>
                          <a>Hire PHP Developers</a>
                        </li>
                      </Link>
                      <Link to="/hire-python-developer">
                        <li>
                          <a>Hire Python Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-reactjs-developer">
                        <li>
                          <a>Hire React JS Developer</a>
                        </li>
                      </Link>
                      <Link to="/hire-hireangular-developer">
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
                      <Link to="/hire-shopify-development">
                        <li>
                          <a>Hire Shopify Development</a>
                        </li>
                      </Link>
                      <Link to="/hire-magento-development">
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
                        <Link to="/hire-us">
                          <a className="menu_contact_btn">
                            Hire Our Developer{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/solutions">
                <a href="/solutions" className="desktop-item">
                  Solutions <MdKeyboardArrowDown />{" "}
                </a>
              </Link>
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
                      <Link to="/food-delivery-app-development">
                        <li>
                          <a>Food Delivery App Development</a>
                        </li>
                      </Link>
                      <Link to="/courier-pickup-management-solution">
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
                      <Link to="/taxi-booking-app-development">
                        <li>
                          <a>Taxi Booking App Development</a>
                        </li>
                      </Link>
                      <Link to="/doctor-hiring-app-solution">
                        <li>
                          <a>Doctor Hiring App Solution</a>
                        </li>
                      </Link>
                      <Link to="/security-app-solution">
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
                      <Link to="/e-commerce-app-development">
                        <li>
                          <a>eCommerce App Development</a>
                        </li>
                      </Link>
                      <Link to="/e-learning-app-development">
                        <li>
                          <a>E-learning App Development</a>
                        </li>
                      </Link>
                      <Link to="dating-app-development">
                        <li>
                          <a>Dating App Development</a>
                        </li>
                      </Link>
                      <Link to="/driver-tracking-app-development">
                        <li>
                          <a>Driver Tracking App Development</a>
                        </li>
                      </Link>
                      <Link to="/salon-service-app">
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
                        <Link to="/contactus">
                          <a className="menu_contact_btn">Contact Us </a>
                        </Link>
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
              <Link to="/contactus">
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

export default Header;
