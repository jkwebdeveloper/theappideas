import React, { useEffect, useState } from "react";
import "./header.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
// import { IoMdArrowDropright } from "react-icons/io";
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
              <img
                src={require("../../assets/images/Header/logo.png")}
                alt="logo"
                className="img-fluid"
              />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <AiOutlineClose />
            </label>
            <li>
              <Link to="/" className="desktop-item">
                Company <MdKeyboardArrowDown />
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/About Us.gif")}
                            alt="About-us"
                          />{" "}
                          About Us
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/our-process">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/Our Process.gif")}
                            alt="Our-Team"
                          />{" "}
                          Our Process
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/our-team">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/Our Team.gif")}
                            alt="Our-Team"
                          />{" "}
                          Our Team
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/testimonial">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/Testimonial.gif")}
                            alt="Testamonials"
                          />
                          Testimonial
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/careers">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/Careers.gif")}
                            alt="Carrers"
                          />{" "}
                          Careers
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <Link to="/life-at-tai">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../../assets/images/Header/Company/Life at TAI.gif")}
                            alt="Life-at-TAI"
                          />{" "}
                          Life at TAI
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
                        <Link
                          to="/careers"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Join Our Team</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link>
                <div className="desktop-item">
                  Services <MdKeyboardArrowDown />{" "}
                </div>
              </Link>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                Services <MdKeyboardArrowDown />{" "}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <Link
                      to="/mobile-app-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Android App Development
                        </li>
                      </Link>
                      <Link to="iphone-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          IPhone App Development
                        </li>
                      </Link>
                      <Link to="/ipad-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          IPad App Development
                        </li>
                      </Link>
                      <Link to="/react-native-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          React Native Development
                        </li>
                      </Link>

                      <Link to="/iot-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          IOT App Development
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="row">
                    <Link
                      to="/digital-marketing-agency"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          SEO
                        </li>
                      </Link>
                      <Link to="/social-media-marketing">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Social Media Marketing
                        </li>
                      </Link>
                      <Link to="/aso-company">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          ASO
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link
                      to="/e-commerce-website-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Shopify Developmen
                        </li>
                      </Link>
                      <Link to="/magento-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Magento Developmen
                        </li>
                      </Link>
                      <Link to="/joomla-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Joomla Development{" "}
                        </li>
                      </Link>
                      <Link to="/drupal-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Drupal Development{" "}
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row">
                    <Link
                      to="/web-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          WordPress Development
                        </li>
                      </Link>
                      <Link to="/php-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          PHP Development
                        </li>
                      </Link>
                      <Link to="/angular-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Angular Development
                        </li>
                      </Link>
                      <Link to="/webflow-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Webflow Development
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div
                  className="content_last content "
                  style={{ justifyContent: "flex-start", padding: "10px 13px" }}
                >
                  <div className="row" style={{ width: "28%" }}>
                    <Link
                      to="/software-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Asp.Net Development
                        </li>
                      </Link>
                      <Link to="/dotnetnuke-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          DotNetNuke Development
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row" style={{ width: "28%" }}>
                    <Link
                      to="/designing-services"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Graphics Design
                        </li>
                      </Link>
                      <Link to="/mobile-app-design">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Mobile App Design
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row" style={{ width: "28%" }}>
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Startup Services
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
                        <Link
                          to="/contactus"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/hire-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="desktop-item">
                  Hire Us <MdKeyboardArrowDown />{" "}
                </div>
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire IOS Developer
                        </li>
                      </Link>
                      <Link to="/hire-android-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Android Developer
                        </li>
                      </Link>
                      <Link to="/hire-react-native-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire React Native Developer
                        </li>
                      </Link>
                      <Link to="/hire-flutter-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Flutter Developer
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Laravel Developer
                        </li>
                      </Link>
                      <Link to="/hire-wordpress-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire WordPress Developer
                        </li>
                      </Link>
                      <Link to="/hire-nodejs-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Node.js Developer
                        </li>
                      </Link>
                      <Link to="/hire-codeigniter-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire CodeIgniter Developer
                        </li>
                      </Link>
                      <Link to="/hire-php-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire PHP Developers
                        </li>
                      </Link>
                      <Link to="/hire-python-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Python Developer
                        </li>
                      </Link>
                      <Link to="/hire-reactjs-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire React JS Developer
                        </li>
                      </Link>
                      <Link to="/hire-angular-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Angular 2 Developer
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Shopify Development
                        </li>
                      </Link>
                      <Link to="/hire-magento-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Hire Magento 2 Development
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
                        <Link
                          to="/hire-us"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">
                            Hire Our Developer{" "}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/solutions">
                <div className="desktop-item">
                  Solutions <MdKeyboardArrowDown />{" "}
                </div>
              </Link>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Solutions <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row" style={{ width: "32%" }}>
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {/* <IoMdArrowDropright /> */}
                          Food Delivery App Development
                        </li>
                      </Link>
                      <Link to="/courier-pickup-management-solution">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Courier Pickup Management Solution
                        </li>
                      </Link>
                      <Link to="/grocery-app-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Grocery App Development
                        </li>
                      </Link>{" "}
                    </ul>
                  </div>
                  <div className="row" style={{ width: "32%" }}>
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Taxi Booking App Development
                        </li>
                      </Link>
                      <Link to="/doctor-hiring-app-solution">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Doctor Hiring App Solution
                        </li>
                      </Link>
                      <Link to="/security-app-solution">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Security App Solution
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="row" style={{ width: "32%" }}>
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
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          eCommerce App Development
                        </li>
                      </Link>
                      <Link to="/e-learning-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          E-learning App Development
                        </li>
                      </Link>
                      <Link to="dating-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Dating App Development
                        </li>
                      </Link>
                      <Link to="/driver-tracking-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Driver Tracking App Development
                        </li>
                      </Link>
                      <Link to="/salon-service-app">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Salon Service App
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
                        <Link
                          to="/contactus"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Blog
              </Link>
            </li>
            <Link to="">
              <li
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="quote_btn btn-1 hover-filled-opacity">
                  <span>GET A QUOTE</span>
                </div>
              </li>
            </Link>
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
