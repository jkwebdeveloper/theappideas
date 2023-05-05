import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../../components/Workdone/Work";
import TestiMonial from "../Testimonial/TestiMonial";

import mobileweb from "../../assets/images/SERVICES/WEB DEVELOPMENT/Web Development.svg";
import mobileaap from "../../assets/images/SERVICES/WEB DEVELOPMENT/Web Development Services.svg";
import webapp from "../../assets/images/SERVICES/WEB DEVELOPMENT/Website Development Company.svg";

// Service section image
import SEO from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/SEO Consultancy.svg";
import Keyword from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Keyword and Market Research.svg";
import Onsite from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Onsite and Technical SEO.svg";
import Off from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Off-page SEO.svg";
import Guest from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Guest Blogging.svg";
import Social from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Social Media Marketing.svg";
import Pay from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Pay per Click (PPC).svg";
import AppStore from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/App Store Optimization (ASO).svg";
import Content from "../../assets/images/SERVICES/Digital Marketing Agency/Services we provide/Content Marketing.svg";

// service provide section images
import Real from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Real Estate Industry.svg";
import Small from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Small Industry.svg";
import Restaurant from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Restaurant Industry.svg";
import Apparel from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Apparel Industry.svg";
import Finance from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Finance Industry.svg";
import Sports from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Sports Industry.svg";
import Arts from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Arts and Entertainment Industry.svg";
import Marketplace from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Marketplace Industry.svg";
import Beauty from "../../assets/images/SERVICES/Digital Marketing Agency/Industries We Serve/Beauty Industry.svg";

const DigitalMarketing = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Digital Marketing Agency</h2>
                <p>
                  Digital marketing demand is getting demanding in the market
                  because these services can help the business to promote their
                  services and increase the profit rates of the business. Along
                  with launching a mobile app or web app in the market, you also
                  have to work on marketing strategies to make the platform
                  successful in the market. We are from The App Ideas is one of
                  the popular Digital Marketing Agency. We have a team of a
                  highly skilled team for digital marketing who provides the
                  best services at the best rates.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Digital Marketing
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Digital Marketing Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Digital Marketing Agency
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
                      <h4>Digital Marketing Company</h4>
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
                      <h4>Digital Marketing Strategy </h4>
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
                      <h4>Digital Marketing Specialist</h4>
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
              Digital Marketing is the skill-based service that helps your
              website gain visibility in the search engine ranking with relevant
              and unique content sought after by your intended audience. At The
              App Ideas, we have web and SEO experts to help your website
              contents rank in search engine listings through keyword-optimized
              unique content. We are a white Digital Marketing Agency with a
              consistent focus on boosting organic traffic for your website
              through search engine ranks.
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
                      src={SEO}
                      alt="SEO-Consultancy"
                      className="img-fluid"
                    />
                    <p>
                      SEO <br />
                      Consultancy
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Keyword}
                      alt="Keyword-And-Market-Research"
                      className="img-fluid"
                    />
                    <p>
                      Keyword And <br />
                      Market Research
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Onsite}
                      alt="Onsite-Technical SEO"
                      className="img-fluid"
                    />
                    <p>
                      Onsite And <br />
                      Technical SEO
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={Off} alt="Off-Page-SEO" className="img-fluid" />
                    <p>
                      Off-Page <br />
                      SEO
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Guest}
                      alt="Guest-Blogging"
                      className="img-fluid"
                    />
                    <p>
                      Guest <br />
                      Blogging
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Social}
                      alt="Social-Media-Marketing"
                      className="img-fluid"
                    />
                    <p>
                      Social Media <br />
                      Marketing
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Pay}
                      alt="Pay-Per-Click-PPC"
                      className="img-fluid"
                    />
                    <p>
                      Pay Per Click <br />
                      (PPC)
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={AppStore}
                      alt="App-Store-Optimization"
                      className="img-fluid"
                    />
                    <p>
                      App Store <br />
                      Optimization (ASO)
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Content}
                      alt="Content-Marketing"
                      className="img-fluid"
                    />
                    <p>
                      Content <br />
                      Marketing
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">SEO Consultancy</h3>
                  <p className="Title_para">
                    Nowadays, the popularity of the online platform is reaching
                    its peak because this provides an easy way of reaching
                    people and increasing the profit rates. SEO(Search Engine
                    Optimization) can help you to rank on the search engine and
                    catch the eye of the customers. Along with the development
                    of the software development solutions, it is also important
                    to focus on the SEO of the websites which will help you to
                    reach a high number of users.
                  </p>
                  <p className="Title_para">
                    Are you looking for the Best SEO Consultancy Services?
                  </p>
                  <p className="Title_para">
                    The App Ideas is one of the leading Software development
                    company and Digital marketing services. We offer expert SEO
                    consultancy to business websites and help them to chase
                    achievable and realistic search ranking goals and guide them
                    in creating a content and SEO strategy for short and long
                    term results.
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
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Digital Marketing Agency/Technologies/SEO.webp")}
                  alt="SEO"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>SEO</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Digital Marketing Agency/Technologies/digital-marketing.webp")}
                  alt="digital-marketing"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Social Media Marketing</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Digital Marketing Agency/Technologies/ASO.webp")}
                  alt="ASO"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>ASO</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Digital Marketing Agency/Technologies/guest-blogging.webp")}
                  alt="guest-blogging"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Guest Blogging</h2>
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
                    <img src={Real} alt="Real-Estate" className="img-fluid" />
                    <p>
                      Real Estate <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Small}
                      alt="Small-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Small <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Restaurant}
                      alt="Restaurant-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Restaurant <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Apparel}
                      alt="Apparel-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Apparel <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Finance}
                      alt="Finance-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Finance <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Sports}
                      alt="Sports-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Sports <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Arts}
                      alt="Arts-And-Entertainment"
                      className="img-fluid"
                    />
                    <p>
                      Arts And Entertainment <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Marketplace}
                      alt="Marketplace-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Marketplace <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Beauty}
                      alt="Beauty-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Beauty <br />
                      Industry
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Real Estate Industry</h3>
                  <p className="Title_para">
                    If yes, then feel free to reach us and get a free quotation
                    for your Real Estate app development services. We have years
                    of experience in providing the best developers and designers
                    who are efficient in providing the best real estate industry
                    app solution which can help you to increase the customer
                    base easily.
                  </p>
                  <p className="Title_para">
                    Are you planning to launch a Real Estate Industry app?
                  </p>
                  <p className="Title_para">
                    If yes, then feel free to reach us and get a free quotation
                    for your Real Estate app development services. We have years
                    of experience in providing the best developers and designers
                    who are efficient in providing the best real estate industry
                    app solution which can help you to increase the customer
                    base easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* <!-- Work Slider Start --> */}
      <Work/>
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
    </>
  );
};

export default DigitalMarketing;
