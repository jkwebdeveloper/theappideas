import React, { useEffect, useState } from "react";
import "./header.css";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowRightSLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ setOpenModal }) => {
  const [sticky, setSticky] = useState("");
  const [openmenu, setOpenMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(false);

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
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={require("../../assets/images/Header/logo.png")}
                alt="logo"
                className="img-fluid"
                // style={{ height: '60px ' }}
              />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            {/* company */}
            <li>
              <a href="/" className="desktop-item">
                Company <MdKeyboardArrowDown />
              </a>

              <input type="checkbox" id="showMega" />

              <label
                htmlFor="showMega"
                className="mobile-item"
                style={{ paddingLeft: "10px" }}
              >
                Company <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/about-us/">
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
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/our-process/">
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
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/our-team/">
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
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/testimonial/">
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
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/careers/">
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
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/life-at-tai/">
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
                      </a>
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
                        <a
                          href="/careers/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Join Our Team</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* services */}
            <li>
              <a href="#">
                <div className="desktop-item">
                  Services <MdKeyboardArrowDown />{" "}
                </div>
              </a>
              <input type="checkbox" id="showMega1" />
              <label
                htmlFor="showMega1"
                className="mobile-item"
                style={{ paddingLeft: "10px" }}
              >
                Services <MdKeyboardArrowDown />{" "}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <a
                      href="/mobile-app-development/"
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
                    </a>
                    <ul className="mega-links">
                      <a href="/android-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Android App Development
                        </li>
                      </a>
                      <a href="/iphone-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IPhone App Development
                        </li>
                      </a>
                      <a href="/ipad-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IPad App Development
                        </li>
                      </a>
                      <a href="/react-native-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          React Native Development
                        </li>
                      </a>

                      <a href="/iot-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IOT App Development
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="row">
                    <a
                      href="/digital-marketing-agency/"
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
                    </a>
                    <ul className="mega-links">
                      <a href="/seo/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Search Engine Optimization
                        </li>
                      </a>
                      <a href="/social-media-marketing/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Social Media Marketing
                        </li>
                      </a>
                      <a href="/aso/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          App Store Optimization
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <a
                      href="/e-commerce-website-development/"
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
                        E-commerce Development
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/shopify-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Shopify Development
                        </li>
                      </a>
                      <a href="/magento-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Magento Development
                        </li>
                      </a>
                      <a href="/joomla-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Joomla Development{" "}
                        </li>
                      </a>
                      <a href="/drupal-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Drupal Development{" "}
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <a
                      href="/web-development/"
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
                    </a>
                    <ul className="mega-links">
                      <a href="/wordpress-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          WordPress Development
                        </li>
                      </a>
                      <a href="/php-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          PHP Development
                        </li>
                      </a>
                      <a href="/angular-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Angular Development
                        </li>
                      </a>
                      <a href="/webflow-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Webflow Development
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div
                  className="content_last content "
                  style={{
                    justifyContent: "flex-start",
                    padding: "10px 13px",
                  }}
                >
                  <div
                    className="row responsive_width"
                    style={{ width: "29%" }}
                  >
                    <a
                      href="/software-development/"
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
                    </a>
                    <ul className="mega-links">
                      <a href="/asp-net-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Asp.Net Development
                        </li>
                      </a>
                      <a href="/dotnetnuke-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          DotNetNuke Development
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "28%" }}
                  >
                    <a
                      href="/designing-services/"
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
                    </a>
                    <ul className="mega-links">
                      <a href="/graphics-design/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Graphics Design
                        </li>
                      </a>
                      <a href="/mobile-app-design/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Mobile App Design
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "28%" }}
                  >
                    <a>
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Services/Other Services.gif")}
                          alt="Other-Services"
                        />
                        Other Services
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/startup-services/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Startup Services
                        </li>
                      </a>
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
                        <a
                          href="/contact-us/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* hire us */}
            <li>
              <a
                href="/hire-us/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="desktop-item">
                  Hire Us <MdKeyboardArrowDown />{" "}
                </div>
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                <a
                  href="/hire-us/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div>Hire Us</div>
                </a>{" "}
                <MdKeyboardArrowDown />
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
                      <a href="/hire-ios-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire IOS Developer
                        </li>
                      </a>
                      <a href="/hire-android-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Android Developer
                        </li>
                      </a>
                      <a href="/hire-react-native-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire React Native Developer
                        </li>
                      </a>
                      <a href="/hire-flutter-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Flutter Developer
                        </li>
                      </a>
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
                      <a href="/hire-laravel-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Laravel Developer
                        </li>
                      </a>
                      <a href="/hire-wordpress-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire WordPress Developer
                        </li>
                      </a>
                      <a href="/hire-nodejs-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Node.js Developer
                        </li>
                      </a>
                      <a href="/hire-codeigniter-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire CodeIgniter Developer
                        </li>
                      </a>
                      <a href="/hire-php-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire PHP Developers
                        </li>
                      </a>
                      <a href="/hire-python-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Python Developer
                        </li>
                      </a>
                      <a href="/hire-reactjs-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire React JS Developer
                        </li>
                      </a>
                      <a href="/hire-angular-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Angular 2 Developer
                        </li>
                      </a>
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
                      <a href="/hire-shopify-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Shopify Development
                        </li>
                      </a>
                      <a href="/hire-magento-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Magento 2 Development
                        </li>
                      </a>
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
                        <a
                          href="/hire-us/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">
                            Hire Our Developer{" "}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* solutions */}
            <li>
              <a href="/solutions/">
                <div className="desktop-item">
                  Solutions <MdKeyboardArrowDown />{" "}
                </div>
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                <a
                  href="/solutions/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div>Solutions</div>
                </a>{" "}
                <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div
                    className="row responsive_width"
                    style={{ width: "32%" }}
                  >
                    <a>
                      <h4>
                        {" "}
                        <img
                          src={require("../../assets/images/Header/Solutions/Delivery App.gif")}
                          alt="Delivery-App"
                        />
                        Delivery Apps
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/food-delivery-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          {/* <IoMdArrowDropright /> */}
                          Food Delivery App Development
                        </li>
                      </a>
                      <a href="/courier-pickup-management-solution/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Courier Pickup Management Solution
                        </li>
                      </a>
                      <a href="/grocery-app-developer/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Grocery App Development
                        </li>
                      </a>{" "}
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "32%" }}
                  >
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Solutions/On Demand Apps.gif")}
                        alt="On-Demand-Apps"
                      />
                      On-Demand Apps
                    </h4>
                    <ul className="mega-links">
                      <a href="/taxi-booking-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Taxi Booking App Development
                        </li>
                      </a>
                      <a href="/doctor-hiring-app-solution/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Doctor Hiring App Solution
                        </li>
                      </a>
                      <a href="/security-app-solution/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Security App Solution
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: "32%" }}
                  >
                    <h4>
                      {" "}
                      <img
                        src={require("../../assets/images/Header/Solutions/Popular Solutions.gif")}
                        alt="Popular-Solutions"
                      />
                      Popular Solutions
                    </h4>
                    <ul className="mega-links">
                      <a href="/e-commerce-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          eCommerce App Development
                        </li>
                      </a>
                      <a href="/e-learning-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          E-learning App Development
                        </li>
                      </a>
                      <a href="/dating-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Dating App Development
                        </li>
                      </a>
                      <a href="/driver-tracking-app-development/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Driver Tracking App Development
                        </li>
                      </a>
                      <a href="/salon-service-app/">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Salon Service App
                        </li>
                      </a>
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
                        <a
                          href="/contact-us/"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* portoflio */}
            <li>
              <a
                href="/portfolio/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Portfolio
              </a>
            </li>
            {/* contact us */}
            <li>
              <a
                href="/contact-us/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </a>
            </li>
            {/* blog */}
            <li>
              <a
                href="/blog/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Blog
              </a>
            </li>
            {/* get a quote */}
            <li
              onClick={() => setOpenModal(true)}
              style={{ cursor: "pointer" }}
            >
              <div className="quote_btn btn-1 hover-filled-opacity close-btn">
                <span>GET A QUOTE</span>
              </div>
            </li>
          </ul>

          {/* =============================== Mobile View start =============================== */}
          {openmenu ? (
            <div className="header_mobile_menu header_menu_lft">
              <div className="header_mobile_top">
                <a
                  href="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img
                    src={require("../../assets/images/Header/logo.png")}
                    alt="logo"
                    className="img-fluid"
                    // style={{ height: '60px ' }}
                  />
                </a>
                <a href="#" className="mobile_menu_close_btn">
                  <AiOutlineClose onClick={() => setOpenMenu(false)} />
                </a>
              </div>
              <div className="sidebar-nav">
                <div className="nav">
                  <ul className="nav_ul">
                    <li className="nav_ul_li">
                      <a href="#">COMPANY</a>
                      {openCategory === "company" ? (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowUp
                            onClick={() => setOpenCategory(null)}
                          />
                        </a>
                      ) : (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowDown
                            onClick={() => setOpenCategory("company")}
                          />
                        </a>
                      )}
                      {openCategory === "company" ? (
                        <ul
                          className="sub-menu company_sub_menu"
                          id="company_sub_menu_id"
                        >
                          <li>
                            <a
                              href="/about-us"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <img
                                src={require("../../assets/images/Header/Company/About Us.gif")}
                                alt="About-us"
                              />{" "}
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="/our-process"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <img
                                src={require("../../assets/images/Header/Company/Our Process.gif")}
                                alt="Our-Team"
                              />{" "}
                              Our Process
                            </a>
                          </li>
                          <li>
                            <a
                              href="/our-team"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <img
                                src={require("../../assets/images/Header/Company/Our Team.gif")}
                                alt="Our-Team"
                              />{" "}
                              Our Team
                            </a>
                          </li>
                          <li>
                            <a
                              href="/testimonial"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <img
                                src={require("../../assets/images/Header/Company/Testimonial.gif")}
                                alt="Testamonials"
                              />
                              Testimonial
                            </a>
                          </li>
                          <li>
                            <a
                              href="/careers"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <img
                                src={require("../../assets/images/Header/Company/Careers.gif")}
                                alt="Carrers"
                              />{" "}
                              Careers
                            </a>
                          </li>
                          <li>
                            <a
                              href="/life-at-tai"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              <img
                                src={require("../../assets/images/Header/Company/Life at TAI.gif")}
                                alt="Life-at-TAI"
                              />{" "}
                              Life At TAI
                            </a>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="nav_ul_li">
                      <a href="#">SERVICE</a>
                      {openCategory === "service" ? (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowUp
                            onClick={() => setOpenCategory(null)}
                          />
                        </a>
                      ) : (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowDown
                            onClick={() => setOpenCategory("service")}
                          />
                        </a>
                      )}
                      {openCategory === "service" ? (
                        <ul className="sub-menu" id="sub-menu">
                          <li>
                            <a
                              href="/mobile-app-development"
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              MOBILE APP DEVELOPMENT
                            </a>
                            {openSubCategory === "mobileappdev" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("mobileappdev")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "mobileappdev" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/android-app-development">
                                    Android App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/iphone-app-development">
                                    Iphone App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/ipad-app-development">
                                    IPad App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/react-native-development">
                                    React Native Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/iot-app-development">
                                    IOT App Development
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="/digital-marketing-agency">
                              DIGITAL MARKETING AGENCY
                            </a>
                            {openSubCategory === "digital" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() => setOpenSubCategory("digital")}
                                />
                              </a>
                            )}
                            {openSubCategory === "digital" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/seo">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Search Engine Optimization
                                  </a>
                                </li>
                                <li>
                                  <a href="/social-media-marketing">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Social Media Marketing
                                  </a>
                                </li>
                                <li>
                                  <a href="/aso">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    App Store Optimization
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="/e-commerce-website-development">
                              E-COMMERCE WEBSITE DEVELOPMENT
                            </a>
                            {openSubCategory === "ecommerce" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("ecommerce")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "ecommerce" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/shopify-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Shopify Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/magento-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Magento Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/joomla-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Joomla Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/drupal-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Drupal Development
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="/web-development">WEB DEVELOPMENT</a>
                            {openSubCategory === "webdevelopment" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("webdevelopment")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "webdevelopment" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/wordpress-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    WordPress Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/php-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    PHP Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/angular-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Angular Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/webflow-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Webflow Development
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="/software-development">
                              SOFTWARE DEVELOPMENT
                            </a>
                            {openSubCategory === "softwaredevelopment" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("softwaredevelopment")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "softwaredevelopment" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/asp-net-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Asp.Net Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/dotnetnuke-development">
                                    <i className="fa fa-angle-right right__arrow" />
                                    DotNetNuke Development
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="/designing-services">DESIGNING SERVICES</a>
                            {openSubCategory === "designing" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("designing")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "designing" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/graphics-design">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Graphic Design
                                  </a>
                                </li>
                                <li>
                                  <a href="/mobile-app-design">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Mobile App Design
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a>OTHER SERVICE</a>
                            {openSubCategory === "otherservice" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("otherservice")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "otherservice" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/startup-services">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Startup Services
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="nav_ul_li">
                      <a href="/hire-us">HIRE US</a>
                      {openCategory === "hireus" ? (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowUp
                            onClick={() => setOpenCategory(null)}
                          />
                        </a>
                      ) : (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowDown
                            onClick={() => setOpenCategory("hireus")}
                          />
                        </a>
                      )}
                      {openCategory === "hireus" && (
                        <ul className="sub-menu" id="sub-menu">
                          <li>
                            <a>HIRE MOBILE APP DEVELOPMENT</a>
                            {openSubCategory === "hiremobileapp" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("hiremobileapp")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "hiremobileapp" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/hire-ios-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire IOS Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-android-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Android Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-react-native-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire React Native Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-flutter-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Flutter Developer
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a>HIRE WEB DEVELOPER</a>
                            {openSubCategory === "hiremobileweb" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("hiremobileweb")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "hiremobileweb" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/hire-laravel-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Laravel Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-wordpress-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Wordpress Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-nodejs-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Node.Js Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-codeigniter-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Codelgniter Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-php-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire PHP Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-python-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Paython Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-reactjs-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire React JS Developer
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-angular-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Angular 2 Developer
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="#">HIRE E-COMMERCE DEVELOPER</a>
                            {openSubCategory === "hiremobilecommerce" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("hiremobilecommerce")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "hiremobilecommerce" ? (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/hire-shopify-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Shopify Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/hire-magento-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Hire Magento 2 Development
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Joomla Development
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Drupal Development
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <a href="#">HIRE DESIGNER</a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="nav_ul_li">
                      <a href="/solutions">SOLUTIONS</a>
                      {openCategory === "solutions" ? (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowUp
                            onClick={() => setOpenCategory(null)}
                          />
                        </a>
                      ) : (
                        <a className="menu-toggle" href="#">
                          <MdKeyboardArrowDown
                            onClick={() => setOpenCategory("solutions")}
                          />
                        </a>
                      )}
                      {openCategory === "solutions" ? (
                        <ul className="sub-menu" id="sub-menu">
                          <li>
                            <a>DELIVERY APPS</a>
                            {openSubCategory === "deliveryapp" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() =>
                                    setOpenSubCategory("deliveryapp")
                                  }
                                />
                              </a>
                            )}
                            {openSubCategory === "deliveryapp" && (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/food-delivery-app-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Food Delivery App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/courier-pickup-management-solution">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Courier Pickup Management Solution
                                  </a>
                                </li>
                                <li>
                                  <a href="/grocery-app-developer">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Grocery App Development
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li>
                            <a href="#">ON-DEMAND APPS</a>
                            {openSubCategory === "ondemand" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() => setOpenSubCategory("ondemand")}
                                />
                              </a>
                            )}
                            {openSubCategory === "ondemand" && (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/taxi-booking-app-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Taxi Booking App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/doctor-hiring-app-solution">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Doctor Hiring App Solution
                                  </a>
                                </li>
                                <li>
                                  <a href="/security-app-solution">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Security App Solution
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li>
                            <a>POPULAR SOLUTIONS</a>
                            {openSubCategory === "popular" ? (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowUp
                                  onClick={() => setOpenSubCategory(null)}
                                />
                              </a>
                            ) : (
                              <a className="menu-toggle" href="#">
                                <MdKeyboardArrowDown
                                  onClick={() => setOpenSubCategory("popular")}
                                />
                              </a>
                            )}
                            {openSubCategory === "popular" && (
                              <ul className="sub-menu">
                                <li>
                                  <a href="/e-commerce-app-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    ECommerce App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/e-learning-app-development">
                                    <i className="fa fa-angle-right right__arrow" />
                                    E-Learning App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/dating-app-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Dating App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/driver-tracking-app-development">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Driver Tracking App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/salon-service-app">
                                    <i className="fa fa-angle-right right__arrow" />{" "}
                                    Salon Service App
                                  </a>
                                </li>
                              </ul>
                            )}
                          </li>
                          <li>
                            <a href="#">HIRE DESIGNER</a>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="nav_ul_li">
                      <a href="/portfolio">PORTFOLIO</a>
                    </li>
                    <li className="nav_ul_li">
                      <a href="/contact-us">CONTACT US</a>
                    </li>
                    <li className="nav_ul_li">
                      <a href="/blog">BLOG</a>
                    </li>
                    {/* <li
                      className="nav_ul_li"
                      onClick={() => setOpenModal(true)}
                    >
                      <a className="get_a_btn">
                        GET A QUOTE
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Mobile View End */}
          <label htmlFor="menu-btn" className="btn menu-btn">
            <RiMenu3Line
              style={{ fontSize: "27px" }}
              onClick={() => setOpenMenu(true)}
            />
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
