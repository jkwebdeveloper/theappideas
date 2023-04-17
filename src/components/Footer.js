import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area footer-default">
      <div className="container">
        <div className="footer-widget pt-100 pb-55">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget about-widget mb-40"
                data-aos="fade-up"
                data-aos-delay={30}
              >
                <div className="site-branding">
                  {/* <a href="index.html">
                    <img src={require("../assets/images/logo2-1.png")} alt="Site Logo" />
                  </a> */}
                </div>
                <h4 className="widget-title">GET IN TOUCH</h4>

                <ul className="social-link" style={{listStyle: 'none'}}>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget mb-40"
                data-aos="fade-up"
                data-aos-delay={40}
              >
                <h4 className="widget-title">Product</h4>
                <ul className="footer-nav" style={{listStyle: 'none'}}>
                  <li>
                    <a href="#">Landing page</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Referral Program</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget footer-nav-widget"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                <div className="widget footer-nav-widget mb-40">
                  <h4 className="widget-title">Services</h4>
                  <ul className="footer-nav" style={{listStyle: 'none'}}>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">License</a>
                    </li>
                    <li>
                      <a href="#">Changelog</a>
                    </li>
                    <li>
                      <a href="#">Developers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="widget contact-info-widget mb-40"
                data-aos="fade-up"
                data-aos-delay={60}
              >
                <h4 className="widget-title">Informaion</h4>
                <ul className="info-list" style={{listStyle: 'none'}}>
                  <li>
                    <span>
                      <i className="far fa-phone" />
                      <a href="tel:+123-589-847">+123 - 589 - 847</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-envelope-open-text" />
                      <a href="mailto:Resly@gmail.com">Resly@gmail.com</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-map-marker-alt" />
                      1791 Yorkshire Circle Kitty Hawk, NC 279499
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-12">
              <div className="text text-center">
                <p>© Copyright 2022 Saap All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
