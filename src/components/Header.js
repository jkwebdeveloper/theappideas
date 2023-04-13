import React from "react";
// import { RiArrowDownSFill } from 'react-icons/ri'
import { FaBeer } from "react-icons/fa";

const Header = () => {
  return (
    <header className="site-header-one go-top">
      <nav className="main-nav__one stricky original">
        <div className="container-fluid">
          <div className="main-nav__logo-box">
            <a href="/">
              <img src={require("../assets/images/logo2-1.png")} alt="logo" />
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
                  <button className="dropdown-btn">
                    {/* <RiArrowDownSFill /> */}
                    <FaBeer/>
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
      <nav className="main-nav__one stricky stricked-menu">
        <div className="container-fluid">
          <div className="main-nav__logo-box">
            <a href="/">
              <img
                src="/demo/react/bizkar/assets/images/logo-full-light.png"
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
                </a>
                <ul>
                  <li>
                    <a href="/home-v2">Home 02</a>
                  </li>
                  <li>
                    <a href="/home-v3">Home 03</a>
                  </li>
                  <li>
                    <a href="/home-v4">Home 04</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li className="dropdown">
                <a href="/">
                  Services
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
                  <button className="dropdown-btn">
                    <i className="fa fa-angle-right" />
                  </button>
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
            <a className="thm-btn" href="#/contact">
              Free Trial <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
