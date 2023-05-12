import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../Testimonial/TestiMonial";

import mobileweb from "../../assets/images/SERVICES/WEB DEVELOPMENT/Web Development.svg";
import mobileaap from "../../assets/images/SERVICES/WEB DEVELOPMENT/Web Development Services.svg";
import webapp from "../../assets/images/SERVICES/WEB DEVELOPMENT/Website Development Company.svg";

// Service section image
import Custom from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Custom E-Commerce Website Development.svg";
import Cart from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/E-commerce Cart Development.svg";
import Plugin from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Plugin And Extensions Development.svg";
import Redevelopment from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Redevelopment Service.svg";
import Maintenance from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Maintenance And Support.svg";
import Redesigning from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Redesigning Service.svg";
import ThirdParty from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Third-party APIs integration.svg";
import ECommerceSEO from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/E-commerce SEO.svg";
import Site from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Site Migration.svg";

// Industries We Serve section images
import Grocery from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Grocery Industry.svg";
import Food from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Food and Beverage Industry.svg";
import Electronics from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Electronics Industry.svg";
import Logistics from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Logistics Industry.svg";
import Fashion from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Fashion Industry.svg";
import Retail from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Retail Industry.svg";
import Business from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Business Industry.svg";
import Education from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Education Industry.svg";
import Rental from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Rental Industry.svg";
import WorkSlider from "../WorkSlider";

const ECommerceWeb = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>E-Commerce Website Development Company</h2>
                <p>
                  Here we are at The App Ideas, which is one of the leading web
                  and app development company. We offer software development
                  services like website development, mobile app development, web
                  app development as well as E-commerce platforms development
                  services. We are expertise in offering victorious E-commerce
                  services to all kinds of business categories at the best
                  possible rates.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in E-commerce Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best E-commerce Website Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your E-commerce Website Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Complete Guidance from Designing to Deployment
                    </span>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={mobileweb}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>E-Commerce Website Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={mobileaap}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Custom E-Commerce Website Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={webapp}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Best E-commerce Developer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>Contact us</h4>
                </div>
                <div className="contact__body">
                  <div className="contact__form">
                    <form action="">
                      <div className="row g-3">
                        <div className="col-sm-12 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                            aria-label="Name*"
                          />
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email*
                                      "
                            aria-label="Email"
                          />
                        </div>
                        <div className="col-sm-6 h-100 select__country my-3">
                          <select className="select2 w-100 h-100">
                            <option value={1}>Country*</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                            <option value={5}>Option 5</option>
                            <option value={6}>Option 6</option>
                            <option value={7}>Option 7</option>
                            <option value={8}>Option 8</option>
                          </select>
                        </div>
                        <div className="col-sm-6 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number*
                                      "
                            aria-label="Phone Number"
                          />
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Project Requirement*"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-12 text-center py-5">
                          <button type="submit" className="request__btn">
                            Request a FREE Quote
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contact__footer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Services we provide</h3>
            <p>
              With most businesses looking for the advantage of an online
              marketplace, e-commerce websites and mobile commerce apps will
              continue to be popular. We at The App Ideas incorporate innovation
              and creative excellence to build powerful e-commerce web apps for
              businesses of both B2B and B2C niches. Having a fully experienced
              team of e-commerce web designers and developers we help businesses
              realize their online potential.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="#"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={Custom}
                      alt="Custom-E-Commerce-Website-Design"
                      className="img-fluid"
                    />
                    <p>
                      Custom E-Commerce <br />
                      Website Design
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Cart}
                      alt="E-Commerce-Cart-Development"
                      className="img-fluid"
                    />
                    <p>
                      E-Commerce Cart <br />
                      Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Plugin}
                      alt="Plugin-And-Extensions-Development"
                      className="img-fluid"
                    />
                    <p>
                      Plugin And Extensions <br />
                      Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Maintenance}
                      alt="Maintenance-And-Support"
                      className="img-fluid"
                    />
                    <p>
                      Maintenance <br />
                      And Support
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Redesigning}
                      alt="Redesigning-Service"
                      className="img-fluid"
                    />
                    <p>
                      Redesigning <br />
                      Service
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={Redevelopment} alt="Redevelopment-Service" />
                    <p>
                      Redevelopment <br />
                      Service
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={ThirdParty}
                      alt="Third-Party-APIs-Integration"
                      className="img-fluid"
                    />
                    <p>
                      Third-Party <br />
                      APIs Integration
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={ECommerceSEO}
                      alt="E-Commerce-SEO"
                      className="img-fluid"
                    />
                    <p>
                      E-Commerce <br />
                      SEO
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Site}
                      alt="Site-Migration"
                      className="img-fluid"
                    />
                    <p>
                      Site <br />
                      Migration
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Custom E-Commerce Website Design
                  </h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading E-commerce developing
                    Company. We have a team of highly skilled developers and
                    designers who have years of experience in offering the best
                    E-commerce Website design at the best rates. If you are
                    planning of launching an E-commerce platform then this is
                    probably the best time for you to hire us and launch a
                    victorious custom E-commerce website in the market.
                  </p>
                  <p className="Title_para">
                    Are you looking for a Custom E-commerce Website Design
                    company?
                  </p>
                  <p className="Title_para">
                    If Yes, then you are at the right place. We are highly
                    proficient in offering successful custom E-commerce Website
                    design for all kinds of stores or businesses. There is high
                    competition in the market for E-commerce services, so it is
                    very important for you to develop a unique as well as custom
                    E-commerce website design at the best rates. We are just a
                    chat away, feel free to reach us and get a free quotation
                    for custom E-commerce Website design services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Technologies Section Start */}
      <section className="technologies__section py-5">
        <div className="container">
          <div className="Title__White mb-4">
            <h3>Technologies we use</h3>
          </div>
          <div className="row">
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/E-Commerce Website/Tecnologies/shopify.png")}
                  alt="Shopify"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Shopify</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/E-Commerce Website/Tecnologies/magento.png")}
                  alt="Magento"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Magento</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/E-Commerce Website/Tecnologies/joomla.png")}
                  alt="Joomla"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Joomla</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/E-Commerce Website/Tecnologies/drupal.png")}
                  alt="Drupal"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Drupal</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Industries We Serve</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="#"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={Grocery}
                      alt="Grocery-Industry"
                      className="img-fluid"
                    />
                    <p>Grocery Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Food}
                      alt="Food-And-Beverage-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Food And <br />
                      Beverage Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Electronics}
                      alt="Electronics-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Electronics <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Logistics}
                      alt="Logistics-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Logistics <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Fashion}
                      alt="Fashion-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Fashion <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={Retail} alt="Retail-Industry" />
                    <p>
                      Retail <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Business}
                      alt="Business-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Business <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Education}
                      alt="Education-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Education <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Rental}
                      alt="Rental-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Rental <br />
                      Industry
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Custom E-Commerce Website Design
                  </h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading E-commerce developing
                    Company. We have a team of highly skilled developers and
                    designers who have years of experience in offering the best
                    E-commerce Website design at the best rates. If you are
                    planning of launching an E-commerce platform then this is
                    probably the best time for you to hire us and launch a
                    victorious custom E-commerce website in the market.
                  </p>
                  <p className="Title_para">
                    Are you looking for a Custom E-commerce Website Design
                    company?
                  </p>
                  <p className="Title_para">
                    If Yes, then you are at the right place. We are highly
                    proficient in offering successful custom E-commerce Website
                    design for all kinds of stores or businesses. There is high
                    competition in the market for E-commerce services, so it is
                    very important for you to develop a unique as well as custom
                    E-commerce website design at the best rates. We are just a
                    chat away, feel free to reach us and get a free quotation
                    for custom E-commerce Website design services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* <!-- Work Slider Start --> */}
      <WorkSlider/>
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
    </>
  );
};

export default ECommerceWeb;
