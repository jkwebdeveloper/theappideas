import React, { useEffect, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
// import { RiArrowRightSFill } from "react-icons/ri";

// import { FaBeer } from "react-icons/fa";

import AboutGif from "../../assets/images/Header/Company/About us.gif";
import ProcessGif from "../../assets/images/Header/Company/Process.gif";
import TeamGif from "../../assets/images/Header/Company/Our Team.gif";
import TestimonialGif from "../../assets/images/Header/Company/Testamonials.gif";
import CareersGif from "../../assets/images/Header/Company/Carrers.gif";
import LifeGif from "../../assets/images/Header/Company/Life at TAI.gif";
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
    // <header className="site-header-one go-top">
    //   <nav className="main-nav__one stricky original">
    //     <div className="container-fluid">
    //       <div className="main-nav__logo-box">
    //         <a href="/">
    //           <img
    //             src={require("../../assets/images/logo2-1.png")}
    //             alt="logo"
    //           />
    //         </a>
    //         <a href="/" className="side-menu__toggler">
    //           <i className="fa fa-bars" />
    //         </a>
    //       </div>
    //       <div className="main-nav__main-navigation">
    //         <ul className=" main-nav__navigation-box">
    //           <li className="dropdown current">
    //             <a href="/">
    //               COMPANY
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={AboutGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   About Us{" "}
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={ProcessGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Our Process
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={TeamGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Out Team
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={TestimonialGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Testimonial{" "}
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={CareersGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Careers
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Life at TAI
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/">
    //               SERVICES
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>

    //               <li className="dropdown">
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/">
    //               HIRE US
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/service">Services 01</a>
    //               </li>
    //               <li>
    //                 <a href="/service-v2">Services 02</a>
    //               </li>
    //               <li>
    //                 <a href="/service-details">Services Details</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/">
    //               SOLUTIONS
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/service" style={{ fontWeight: "500" }}>
    //                   <img
    //                     src={LifeGif}
    //                     alt=""
    //                     style={{ width: "35px", marginRight: "15px" }}
    //                   />
    //                   Mobile App Development
    //                   <a className="dropdown-icon-right">
    //                     <RiArrowRightSFill />
    //                   </a>
    //                 </a>
    //                 <ul>
    //                   <li>
    //                     <a href="/">Android App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Iphone App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">I Pad App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">React Native Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">iBeacon App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">IOT App Development</a>
    //                   </li>
    //                   <li>
    //                     <a href="/">Apple Watch App Development</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="/">PORTFOLIO</a>
    //           </li>
    //           <li>
    //             <a href="/blog-standard">CONTACT US</a>
    //           </li>
    //           <li>
    //             <a href="/contact">BLOG</a>
    //           </li>
    //         </ul>
    //       </div>
    //       {/* <div className="main-nav__right">
    //         <a className="thm-btn" href="/contact">
    //           Free Trial <i className="fa fa-angle-right" />
    //         </a>
    //       </div> */}
    //     </div>
    //   </nav>
    //   <nav className="main-nav__one stricky stricked-menu">
    //     <div className="container-fluid">
    //       <div className="main-nav__logo-box">
    //         <a href="/">
    //           <img
    //             src={require("../../assets/images/logo2-1.png")}
    //             alt="logo"
    //           />
    //         </a>
    //         <a href="/" className="side-menu__toggler">
    //           <i className="fa fa-bars" />
    //         </a>
    //       </div>
    //       <div className="main-nav__main-navigation">
    //         <ul className=" main-nav__navigation-box">
    //           <li className="dropdown current">
    //             <a href="/">
    //               Home
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/">Home 02</a>
    //               </li>
    //               <li>
    //                 <a href="/">Home 03</a>
    //               </li>
    //               <li>
    //                 <a href="/">Home 04</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="/about">About</a>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/">
    //               Services
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/service">Services 01</a>
    //               </li>
    //               <li>
    //                 <a href="/service-v2">Services 02</a>
    //               </li>
    //               <li>
    //                 <a href="/service-details">Services Details</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/">
    //               Work
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/portfolio-standard">Portfolio Standard</a>
    //               </li>
    //               <li>
    //                 <a href="/portfolio-full">Portfolio Full</a>
    //               </li>
    //               <li>
    //                 <a href="/portfolio-masonary">Portfolio Masonary</a>
    //               </li>
    //               <li>
    //                 <a href="/portfolio-details">Portfolio Details</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/">
    //               Pages
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/pricing">Pricing</a>
    //               </li>
    //               <li>
    //                 <a href="/faq">FAQ</a>
    //               </li>
    //               <li>
    //                 <a href="/testimonial">Testimonials</a>
    //               </li>
    //               <li>
    //                 <a href="/team">Team</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="dropdown">
    //             <a href="/blog-standard">
    //               News
    //               <a className="dropdown-icon">
    //                 <RiArrowDownSFill />
    //               </a>
    //             </a>
    //             <ul>
    //               <li>
    //                 <a href="/blog-grid">News Page</a>
    //               </li>
    //               <li>
    //                 <a href="/blog-list">News List</a>
    //               </li>
    //               <li>
    //                 <a href="/blog-details">News Details</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="/contact">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="main-nav__right">
    //         <a className="thm-btn" href="/contact">
    //           Free Trial <i className="fa fa-angle-right" />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <>
      {/* ======= Header ======= */}
      <header
        id="header"
        className={`header fixed-top ${sticky}`}
        data-scrollto-offset={0}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex align-items-center scrollto me-auto me-lg-0"
          >
            <img src={require("../../assets/images/logo2-1.png")} alt="logo" />
          </a>
          <nav className="navbar">
            <ul>
              <li className="dropdown megamenu">
                <a href="#">
                  <span>COMPANY</span>{" "}
                  <div className="dropdown-icon" style={{ color: "#fff" }}>
                    <RiArrowDownSFill />
                  </div>
                </a>
                <ul>
                  <li>
                    <Link to='/'>
                    <a
                      className="nav-link scrollto"
                      href="/"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        marginRight: "140px",
                      }}
                    >
                      <img
                        src={AboutGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      About Us
                    </a>
                    </Link>
                    <Link to='/'>
                    <a
                      href="/"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        marginRight: "140px",
                      }}
                    >
                      <img
                        src={TestimonialGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      Testimonial
                    </a>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="/"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        marginRight: "140px",
                      }}
                    >
                      <img
                        src={ProcessGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      Our Process
                    </a>
                    <a
                      href="/"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        marginRight: "140px",
                      }}
                    >
                      <img
                        src={CareersGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        marginRight: "140px",
                      }}
                    >
                      <img
                        src={TeamGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      Our Team
                    </a>
                    <a
                      href="/"
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        marginRight: "140px",
                      }}
                    >
                      <img
                        src={LifeGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      Life at TAI
                    </a>
                  </li>
                  <a className="btn-getstarted scrollto" href="/">
                    GET A QUOTE
                  </a>
                </ul>
              </li>
              <li className="dropdown megamenu">
                <a href="#">
                  <span>SERVICES</span>{" "}
                  <div className="dropdown-icon" style={{ color: "#fff" }}>
                    <RiArrowDownSFill />
                  </div>
                </a>
                <ul>
                  <li>
                    <Link to='/'>
                    <a href="/" style={{ fontWeight: "500", fontSize: "20px" }}>
                      <img
                        src={LifeGif}
                        alt=""
                        style={{ width: "35px", marginRight: "15px" }}
                      />
                      Mobile App Development
                    </a>
                    </Link>
                    <a href="/">Web Development</a>
                    <a href="/">E-Commerce Website Development</a>
                  </li>

                  <li>
                    <a href="/" style={{ fontWeight: "500", fontSize: "20px" }}>
                      Mobile App Development
                    </a>
                    <a href="#">Column 3 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="/" style={{ fontWeight: "500", fontSize: "20px" }}>
                      Mobile App Development
                    </a>
                    <a href="#">Column 4 link 2</a>
                    <a href="#">Column 4 link 3</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown megamenu">
                <a href="#">
                  <span>HIRE US</span>{" "}
                  <div className="dropdown-icon" style={{ color: "#fff" }}>
                    <RiArrowDownSFill />
                  </div>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown megamenu">
                <a href="#">
                  <span>SOLUTIONS</span>{" "}
                  <div className="dropdown-icon" style={{ color: "#fff" }}>
                    <RiArrowDownSFill />
                  </div>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="index.html#portfolio">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="index.html#team">
                  CONTACT US
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="index.html#team">
                  BLOG
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none" />
          </nav>
          {/* .navbar */}
          <a className="btn-getstarted scrollto" href="/">
            GET A QUOTE
          </a>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
