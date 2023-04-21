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
    <>
      <header
        id="header"
        className={`header fixed-top ${sticky}`}
        data-scrollto-offset={0}
      >
        <div className="container">
          <nav>
            <div className="menu-icons">
              <i className="fas fa-bars" />
              <i className="fas fa-times" />
            </div>
            <a href="/" className="logo">
              <img src={require("../../assets/images/logo2-1.png")} />
            </a>
            <ul className="nav-list">
              <li>
                <a href="#">COMPANY</a>
              </li>
              <li>
                <a href="#">
                  SERVICES <i className="fas fa-caret-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Navel</a>
                  </li>
                  <li>
                    <a href="#">
                      Mandarine
                      <i className="fas fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Cara Cara</a>
                      </li>
                      <li>
                        <a href="#">Tangerine</a>
                      </li>
                      <li>
                        <a href="#">
                          Others
                          <i className="fas fa-caret-down" />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Lima</a>
                          </li>
                          <li>
                            <a href="#">Seville</a>
                          </li>
                          <li>
                            <a href="#">Lime</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Tangelos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">HIRE US</a>
              </li>
              <li>
                <a href="#">
                  SOLUTIONS
                  <i className="fas fa-caret-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Yellow Oranges</a>
                  </li>
                  <li>
                    <a href="#">
                      Green Oranges
                      <i className="fas fa-caret-down" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">For Health</a>
                      </li>
                      <li>
                        <a href="#">Sweet Oranges</a>
                      </li>
                      <li>
                        <a href="#">Bitter Oranges</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dinner</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <a className="btn-getstarted scrollto" href="/">
                GET A QUOTE
              </a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
