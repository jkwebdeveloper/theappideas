import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../components/Testimonial/TestiMonial";

const StartupServices = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Startup Services</h2>
                <p>
                  This era is mainly as popular as the digital era. In this
                  digitization time, many entrepreneurs are now making
                  investments in startups to increase their growth in the
                  market. If you are planning on developing an Online Startup
                  then this is probably the time for you to take a step forward.
                  The App Ideas can help you to launch a successful online
                  startup which can help in targeting a high number of users at
                  the best rates.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in App Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Startup Services Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Startup Services Development
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
                        src={require("../assets/images/SERVICES/StartupServices/StartupServicesDevelopment.webp")}
                        alt="Startup-Services-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Startup Services Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../assets/images/SERVICES/StartupServices/StartupServicesRedesigning.webp")}
                        alt="Startup-Services-Redesigning"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Startup Services Redesigning </h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../assets/images/SERVICES/StartupServices/StartupServicesDeveloper.webp")}
                        alt="
                        Startup-Services-Developer"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Startup Services Developer</h4>
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
            <h3>What Services Do We provide for Startups?</h3>
            <p>
              Business startups of all niches face problems like lack of human
              resources, financial strength, experience, etc. Business startups
              often need third-party help to get on their feet and capitalize on
              their potential for growth. This is the actual impetus behind the
              popularity of startup services all over the world. At the App
              Ideas, we provide expertise-driven startup services to help new
              businesses stand in the competition and actualize their growth
              potential and create success stories.
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
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/1-12.png")}
                      alt="Desktop-Application"
                      className="img-fluid"
                    />
                    <p>
                      Logo <br />
                      Design
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/2-13.png")}
                      alt="Web-Application"
                      className="img-fluid"
                    />
                    <p>
                      Business <br />
                      Card
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/3-12.png")}
                      alt="CRM-Solution"
                      className="img-fluid"
                    />
                    <p>
                      Brochure <br />
                      Design
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/4-12.png")}
                      alt="ERP-Solution"
                      className="img-fluid"
                    />
                    <p>
                      Letter <br />
                      Head
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/5-12.png")}
                      alt="HRMS-System"
                      className="img-fluid"
                    />
                    <p>
                      Social Media <br />
                      Banners
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/6-12.png")}
                      alt="Software-Maintenance-Support"
                      className="img-fluid"
                    />
                    <p>
                      HTML <br />
                      Signature
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/7.png")}
                      alt="Software-Integration"
                      className="img-fluid"
                    />
                    <p>
                      E-Mail <br />
                      Signature
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/8.png")}
                      alt="Software-UI/UX-Designing Services"
                      className="img-fluid"
                    />
                    <p>
                      Landing <br />
                      Page
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Services we provide/9.png")}
                      alt="Software-Consulting"
                      className="img-fluid"
                    />
                    <p>Newsletter</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Logo Design</h3>
                  <p className="Title_para">
                    Online platforms like website development, mobile app
                    development and web app development services are highly
                    demanding in the market. If you are planning for a Startup
                    then it is highly recommended to go for the online startup
                    idea.
                  </p>
                  <p className="Title_para">
                    At The App Ideas, we offer the best Startup services at the
                    best rates. The logo is a brand and we understand the
                    importance of it, we will create a professional logo for
                    your business, we will ask for certain details and based on
                    those details we were creating a custom logo design for you
                    we will create several mockups so you can choose best out of
                    it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose Us for Startup Services?</h3>
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
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/1-13.png")}
                      alt="Academic-Education"
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/2-14.png")}
                      alt="Fintech-Industry"
                      className="img-fluid"
                    />
                    <p>
                      We Partner With <br />
                      The Best
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/3-13.png")}
                      alt="Real-Estate"
                      className="img-fluid"
                    />
                    <p>
                      Robust <br />
                      Portfolio
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/4-13.png")}
                      alt="Restaurant-Business"
                      className="img-fluid"
                    />
                    <p>
                      Committed To <br />
                      Confidentiality
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/5-13.png")}
                      alt="Travel-Tourism"
                      className="img-fluid"
                    />
                    <p>
                      Latest <br />
                      Technology
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/6-13.png")}
                      alt="Construction-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Competitive <br />
                      Pricing
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
      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
    </>
  );
};

export default StartupServices;
