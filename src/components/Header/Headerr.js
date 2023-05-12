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
              <a href="#" className="desktop-item">
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
                          <a href="#" className="f">
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
                      <li>
                        <a href="#" className="company_text">
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/Our Process.gif")}
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
                            src={require("../../assets/images/Header/Company/Our Team.gif")}
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
                            src={require("../../assets/images/Header/Company/Testimonial.gif")}
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
                            src={require("../../assets/images/Header/Company/Careers.gif")}
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
                            src={require("../../assets/images/Header/Company/Life at TAI.gif")}
                            alt="Life-at-TAI"
                          />{" "}
                          Life at TAI
                        </a>
                      </li>
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
                    <Link to="/Game-Development">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Services/Game Development.gif")}
                        alt="Game-Development"
                      />
                      Game Development
                    </h4>
                    </Link>
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
                    <Link to='/Software-Development'>
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
                      <li>
                        <a href="#">Asp.Net Development</a>
                      </li>
                      <li>
                        <a href="#">DotNetNuke Development</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <Link to="/Designing-Services">
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Services/E-commerce website Development.gif")}
                        alt="Designing-Services"
                      />
                      Designing services
                    </h4>
                    </Link>
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
                        <a href="#">Startup Services</a>
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
                        src={require("../../assets/images/Header/Hire Us/Hire Web Developer.gif")}
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
                        src={require("../../assets/images/Header/Hire Us/Hire E-commerce Developer.gif")}
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
                        src={require("../../assets/images/Header/Solutions/On Demand Apps.gif")}
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
                        src={require("../../assets/images/Header/Solutions/Popular Solutions.gif")}
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
            <Link to='/portfolio'>
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
              <a href="#" className="get_a_btn">
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
