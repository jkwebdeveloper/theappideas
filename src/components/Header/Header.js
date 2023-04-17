import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
// import { FaBeer } from "react-icons/fa";
import "./header.css";
import AboutGif from "../../assets/images/Header/Company/About us.gif";
import ProcessGif from "../../assets/images/Header/Company/Process.gif";
import TeamGif from "../../assets/images/Header/Company/Our Team.gif";
import TestimonialGif from "../../assets/images/Header/Company/Testamonials.gif";
import CareersGif from "../../assets/images/Header/Company/Carrers.gif";
import LifeGif from "../../assets/images/Header/Company/Life at TAI.gif";


const Header = () => {
  return (
    <header className="site-header-one go-top">
      <nav className="main-nav__one stricky original">
        <div className="container-fluid">
          <div className="main-nav__logo-box">
            <a href="/">
              <img
                src={require("../../assets/images/logo2-1.png")}
                alt="logo"
              />
            </a>
            <a href="/" className="side-menu__toggler">
              <i className="fa fa-bars" />
            </a>
          </div>
          <div className="main-nav__main-navigation">
            <ul className=" main-nav__navigation-box">
              <li className="dropdown current">
                <a href="/">
                  COMPANY
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    
                    <a href="/"><img src={AboutGif} alt="" style={{ width: '35px', marginRight: '15px'}}/>About Us </a>
                  </li>
                  <li>
                    <a href="/"><img src={ProcessGif} alt="" style={{ width: '35px', marginRight: '15px'}}/>Our Process</a>
                  </li>
                  <li>
                    <a href="/"><img src={TeamGif} alt="" style={{ width: '35px', marginRight: '15px'}}/>Out Team</a>
                  </li>
                  <li>
                    <a href="/"><img src={TestimonialGif} alt="" style={{ width: '35px', marginRight: '15px'}}/>Testimonial </a>
                  </li>
                  <li>
                    <a href="/"><img src={CareersGif} alt="" style={{ width: '35px', marginRight: '15px'}}/>Careers</a>
                  </li>
                  <li>
                    <a href="/"><img src={LifeGif} alt="" style={{ width: '35px', marginRight: '15px'}}/>Life at TAI</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/">
                  SERVICES
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/service">Services 01</a>
                  </li>
                  <li>
                    <a href="/service-v2">Services 02</a>
                  </li>
                  <li>
                    <a href="/service-details">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/">
                  HIRE US
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/service">Services 01</a>
                  </li>
                  <li>
                    <a href="/service-v2">Services 02</a>
                  </li>
                  <li>
                    <a href="/service-details">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/">
                  SOLUTIONS
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/portfolio-standard">Portfolio Standard</a>
                  </li>
                  <li>
                    <a href="/portfolio-full">Portfolio Full</a>
                  </li>
                  <li>
                    <a href="/portfolio-masonary">Portfolio Masonary</a>
                  </li>
                  <li>
                    <a href="/portfolio-details">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">PORTFOLIO</a>
              </li>
              <li>
                <a href="/blog-standard">CONTACT US</a>
              </li>
              <li>
                <a href="/contact">BLOG</a>
              </li>
            </ul>
          </div>
          {/* <div className="main-nav__right">
            <a className="thm-btn" href="/contact">
              Free Trial <i className="fa fa-angle-right" />
            </a>
          </div> */}
        </div>
      </nav>
      <nav className="main-nav__one stricky stricked-menu">
        <div className="container-fluid">
          <div className="main-nav__logo-box">
            <a href="/">
              <img
                src={require("../../assets/images/logo2-1.png")}
                alt="logo"
              />
            </a>
            <a href="/" className="side-menu__toggler">
              <i className="fa fa-bars" />
            </a>
          </div>
          <div className="main-nav__main-navigation">
            <ul className=" main-nav__navigation-box">
              <li className="dropdown current">
                <a href="/">
                  Home
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/">Home 02</a>
                  </li>
                  <li>
                    <a href="/">Home 03</a>
                  </li>
                  <li>
                    <a href="/">Home 04</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li className="dropdown">
                <a href="/">
                  Services
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/service">Services 01</a>
                  </li>
                  <li>
                    <a href="/service-v2">Services 02</a>
                  </li>
                  <li>
                    <a href="/service-details">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/">
                  Work
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/portfolio-standard">Portfolio Standard</a>
                  </li>
                  <li>
                    <a href="/portfolio-full">Portfolio Full</a>
                  </li>
                  <li>
                    <a href="/portfolio-masonary">Portfolio Masonary</a>
                  </li>
                  <li>
                    <a href="/portfolio-details">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/">
                  Pages
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/testimonial">Testimonials</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/blog-standard">
                  News
                  <a className="dropdown-icon">
                    <RiArrowDownSFill />
                  </a>
                </a>
                <ul>
                  <li>
                    <a href="/blog-grid">News Page</a>
                  </li>
                  <li>
                    <a href="/blog-list">News List</a>
                  </li>
                  <li>
                    <a href="/blog-details">News Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="main-nav__right">
            <a className="thm-btn" href="/contact">
              Free Trial <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
