import React from "react";
import "./headerr.css";


const Headerr = () => {
  return (
    <header className="header__section">
      <nav>
        <div className="wrapper container">
          <div className="logo">
            <a href="#">
              <img src="assets/img/logo.png" alt="logo" className="img-fluid" />
            </a>
          </div>
          <input type="radio" name="slider" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fa fa-times" />
            </label>
            <li>
              <a href="#" className="desktop-item">
                Company <i className="fa  fa-angle-down down__arrow" />
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Company <i className="fa  fa-angle-down down__arrow" />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#" className="f">
                          {" "}
                          <img src="assets/img/About-us.gif" alt="About-us" />
                          About Us
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
                            src="assets/img/our-process.gif"
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
                            src="assets/img/Our-Team.gif"
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
                            src="assets/img/Testamonials.gif"
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
                            src="assets/img/Carrers.gif"
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
                            src="assets/img/Life-at-TAI.gif"
                            alt="Life-at-TAI"
                          />{" "}
                          Life at TAI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop-item">
                Services <i className="fa  fa-angle-down down__arrow" />{" "}
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                Services <i className="fa  fa-angle-down down__arrow" />{" "}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Mobile-App-Development.gif"
                        alt="Mobile-App-Development"
                      />
                      Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Android App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          IPhone App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> IPad
                          App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> React
                          Native Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> IOT
                          App Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Digital-Marketing-Agency.gif"
                        alt="Digital-Marketing-Agency"
                      />{" "}
                      Digital Marketing Agency
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> SEO
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Social Media Marketing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> ASO
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/E-commerce-website-Development.gif"
                        alt="E-commerce-website-Development"
                      />{" "}
                      E-commerce Website Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Shopify Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Magento Development
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
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Web-Development.gif"
                        alt="Web-Development"
                      />{" "}
                      Web Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          WordPress Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> PHP
                          Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Angular Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Webflow Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Software-Development.gif"
                        alt="Software-Development"
                      />
                      software development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Asp.Net Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          DotNetNuke Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Designing-Services.gif"
                        alt="Designing-Services"
                      />
                      Designing services
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Graphics Design
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Mobile App Design
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Other-Services.gif"
                        alt="Other-Services"
                      />
                      Other Services
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Startup Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row"></div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
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
                Hire Us <i className="fa  fa-angle-down down__arrow" />{" "}
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                Hire Us <i className="fa fa-angle-down down__arrow" />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Mobile-App-Developer.gif"
                        alt="Hire-Mobile-App-Development"
                      />
                      Hire Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          IOS Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Android Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          React Native Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Flutter Developer
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Web-Developer.gif"
                        alt="Hire-Web-Development"
                      />
                      Hire Web Developer
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Laravel Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          WordPress Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Node.js Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          CodeIgniter Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          PHP Developers
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Python Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          React JS Developer
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Angular 2 Developer
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Ecommerce-Developer.gif"
                        alt="Hire-Ecommerce-Developer"
                      />
                      Hire E-commerce Developer
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Shopify Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Hire
                          Magento 2 Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Hire-Designer.gif"
                        alt="Hire-Designer"
                      />
                      <i className="fa fa-angle-right right__arrow" /> Hire
                      Designer
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
                Solutions <i className="fa  fa-angle-down down__arrow" />{" "}
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Solutions <i className="fa fa-angle-down down__arrow" />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Delivery-App.gif"
                        alt="Delivery-App"
                      />
                      Delivery Apps
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Food
                          Delivery App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Courier Pickup Management Solution
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Grocery App Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/On-Demand-Apps.gif"
                        alt="On-Demand-Apps"
                      />
                      On-Demand Apps
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Taxi
                          Booking App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Doctor Hiring App Solution
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Security App Solution
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {" "}
                      <img
                        src="assets/img/Popular-Solutions.gif"
                        alt="Popular-Solutions"
                      />
                      Popular Solutions
                    </h4>
                    <ul className="mega-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          eCommerce App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          E-learning App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Dating App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" />{" "}
                          Driver Tracking App Development
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right right__arrow" /> Salon
                          Service App
                        </a>
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
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#" className="get_a_btn">
                GET A QUOTE
              </a>
            </li>
          </ul>
          <div className="header_mobile_menu ">
            <div className="header_mobile_top">
              <img
                src="assets/img/logo-mobile.png"
                alt="logo-mobile"
                className="img-fluid"
              />
              <a href="#" className="mobile_menu_close_btn">
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="sidebar-nav">
              <div className="nav">
                <ul className="nav_ul">
                  <li className="nav_ul_li">
                    <a href="#">COMPANY</a>
                    <a className="menu-toggle" href="#" />
                    <ul
                      className="sub-menu company_sub_menu"
                      id="company_sub_menu_id"
                    >
                      <li>
                        <a href="#">
                          <img src="assets/img/About-us.gif" alt="About-us" />
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/our-process.gif"
                            alt="About-us"
                          />{" "}
                          Our Process
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/Our-Team.gif" alt="Our-Team" />{" "}
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/Testamonials.gif"
                            alt="Testamonials"
                          />
                          Testimonial
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/Carrers.gif" alt="Careers" />{" "}
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/Life-at-TAI.gif"
                            alt="Life-at-TAI"
                          />{" "}
                          Life At TAI
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#">SERVICE</a>
                    <a className="menu-toggle" href="#" />
                    <ul className="sub-menu" id="sub-menu">
                      <li>
                        <a href="#">MOBILE APP DEVELOPMENT</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Android App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Iphone App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              IPad App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              React Native Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              IOT App Development
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">DIGITAL MARKETING AGENCY</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              SEO
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Social Media Marketing
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              ASO
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">E-COMMERCE WEBSITE DEVELOPMENT</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Shopify Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Magento Development
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
                      </li>
                      <li>
                        <a href="#">WEB DEVELOPMENT</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              WordPress Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              PHP Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Angular Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Webflow Development
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">SOFTWARE DEVELOPMENT</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Asp.Net Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />
                              DotNetNuke Development
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">DESIGNING SERVICES</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Graphic Design
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Mobile App Design
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">OTHER SERVICE</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Startup Services
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#">HIRE US</a>
                    <a className="menu-toggle" href="#" />
                    <ul className="sub-menu" id="sub-menu">
                      <li>
                        <a href="#">HIRE MOBILE APP DEVELOPMENT</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire IOS Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Android Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire React Native Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Flutter Developer
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">HIRE WEB DEVELOPER</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Laravel Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Wordpress Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Node.Js Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Codelgniter Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire PHP Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Paython Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire React JS Developer
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Angular 2 Developer
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">HIRE E-COMMERCE DEVELOPER</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Hire Shopify Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
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
                      </li>
                      <li>
                        <a href="#">HIRE DESIGNER</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#">SOLUTIONS</a>
                    <a className="menu-toggle" href="#" />
                    <ul className="sub-menu" id="sub-menu">
                      <li>
                        <a href="#">DELIVERY APPS</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Food Delivery App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Courier Pickup Management Solution
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Grocery App Development
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">ON-DEMAND APPS</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Taxi Booking App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Doctor Hiring App Solution
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Security App Solution
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">POPULAR SOLUTIONS</a>
                        <a href="#" className="menu-toggle" />
                        <ul className="sub-menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              ECommerce App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />
                              E-Learning App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Dating App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Driver Tracking App Development
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right right__arrow" />{" "}
                              Salon Service App
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">HIRE DESIGNER</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#">PORTFOLIO</a>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#">CONTACT US</a>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#">BLOG</a>
                  </li>
                  <li className="nav_ul_li">
                    <a href="#" className="get_a_btn">
                      GET A QUOTE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a className="mobile_menu_btn">
            <i className="fa fa-bars" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Headerr;
