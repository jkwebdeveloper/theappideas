import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../../../components/Workdone/Work";
import TestiMonial from "../../../components/Testimonial/TestiMonial";

import SoftwareDevelopment from "../../../assets/images/SERVICES/Software development/Software Development.svg";
import Custom from "../../../assets/images/SERVICES/Software development/Custom Softwrare Development.svg";
import SoftwareDeveloper from "../../../assets/images/SERVICES/Software development/Software Developer.svg";

// Service section image
import DesktopApplication from "../../../assets/images/SERVICES/Software development/Services we provide/Desktop Application.svg";
import WebApplication from "../../../assets/images/SERVICES/Software development/Services we provide/Web Application.svg";
import CRM from "../../../assets/images/SERVICES/Software development/Services we provide/CRM Solution.svg";
import ERP from "../../../assets/images/SERVICES/Software development/Services we provide/ERP Solution.svg";
import HRMS from "../../../assets/images/SERVICES/Software development/Services we provide/HRMS System.svg";
import SoftwareMaintenance from "../../../assets/images/SERVICES/Software development/Services we provide/Software Maintenance Support.svg";
import SoftwareIntegration from "../../../assets/images/SERVICES/Software development/Services we provide/Software integration.svg";
import SoftwareUIUX from "../../../assets/images/SERVICES/Software development/Services we provide/Software UI UX designing services.svg";
import SoftwareConsulting from "../../../assets/images/SERVICES/Software development/Services we provide/Software consulting.svg";

// Industries  section images
import Academic from "../../../assets/images/SERVICES/Software development/Industries We Serve/Academic and Education.svg";
import Fintech from "../../../assets/images/SERVICES/Software development/Industries We Serve/Fintech Industry.svg";
import Real from "../../../assets/images/SERVICES/Software development/Industries We Serve/Real Estate industry.svg";
import Restaurant from "../../../assets/images/SERVICES/Software development/Industries We Serve/Restaurant business.svg";
import Travel from "../../../assets/images/SERVICES/Software development/Industries We Serve/Travel and Tourism.svg";
import Construction from "../../../assets/images/SERVICES/Software development/Industries We Serve/Construction Industry.svg";
import IT from "../../../assets/images/SERVICES/Software development/Industries We Serve/IT industry.svg";
import Healthcare from "../../../assets/images/SERVICES/Software development/Industries We Serve/Healthcare Industry.svg";
import Entertainment from "../../../assets/images/SERVICES/Software development/Industries We Serve/Entertainment Industry.svg";

const SoftwareDev = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Software development company</h2>
                <p>
                  We at The App Ideas has a group of experienced developers as
                  well as designers who are proficient in developing software
                  that can be helpful for the employees, customers and business
                  owners. We have worked on various software development
                  services like developing CRM, software management and also in
                  custom software development services which can be very
                  obliging for the users. For more details, feel free to connect
                  with us and get a free quotation for a victorious Software
                  service.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Software Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Software Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Software Development
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
                        src={SoftwareDevelopment}
                        alt="Software-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Software Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={Custom}
                        alt="Custom-Softwrare-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Custom Softwrare Development </h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={SoftwareDeveloper}
                        alt="
                        Software-Developer"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Software Developer</h4>
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
              Software Development is one of the most demanding online platforms
              in the market. For most businesses, owners are launching software
              development services that can make the work more efficient for the
              users. It is advantageous to have a Software solution that can
              help manage the data easily as well as track the services which
              can save a lot of time. A software service platform can be used as
              a B2B business and can be also useful for B2C Services.
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
                      src={DesktopApplication}
                      alt="Desktop-Application"
                      className="img-fluid"
                    />
                    <p>Desktop Application</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={WebApplication}
                      alt="Web-Application"
                      className="img-fluid"
                    />
                    <p>
                      Web <br />
                      Application
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={CRM} alt="CRM-Solution" className="img-fluid" />
                    <p>
                      CRM <br />
                      Solution
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={ERP} alt="ERP-Solution" className="img-fluid" />
                    <p>
                      ERP <br />
                      Solution
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={HRMS} alt="HRMS-System" className="img-fluid" />
                    <p>
                      HRMS <br />
                      System
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={SoftwareMaintenance}
                      alt="Software-Maintenance-Support"
                      className="img-fluid"
                    />
                    <p>
                      Software Maintenance <br />
                      Support
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={SoftwareIntegration}
                      alt="Software-Integration"
                      className="img-fluid"
                    />
                    <p>
                      Software <br />
                      Integration
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={SoftwareUIUX}
                      alt="Software-UI/UX-Designing Services"
                      className="img-fluid"
                    />
                    <p>
                      Software UI/UX <br />
                      Designing Services
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={SoftwareConsulting}
                      alt="Software-Consulting"
                      className="img-fluid"
                    />
                    <p>
                      Software <br />
                      Consulting
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
                    Presently, many businesses, as well as startups, are
                    investing in developing software to make their work more
                    efficient and effective. Having a software solution can make
                    the process faster as well as time-saving. If you are facing
                    issues related to management in your business then this is
                    probably the time for you to take a software consultation
                    and launch a perfect software to make work easier.
                  </p>
                  <p className="Title_para">
                    Are you looking for the best Software Consulting services?
                  </p>
                  <p className="Title_para">
                    If yes then here we are just a text away. The App Ideas is
                    one of the leading web and app development company. We have
                    a team of highly skilled developers as well as designers,
                    who are experts in providing the best software solutions.
                    Our Software development experts have a strong understanding
                    of all kinds of software and can recommend the best custom
                    features to add as per your business requirements. Feel free
                    to connect with us and get a free quotation.
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
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../../assets/images/SERVICES/Software development/Technologies/asp.net_.png")}
                  alt="Asp.Net"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Asp.Net</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../../assets/images/SERVICES/Software development/Technologies/dnn.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>DotNetNuke</h2>
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
                    <img src={Academic} alt="Academic-Education" className="img-fluid" />
                    <p>
                      Academic And <br />
                      Education
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Fintech}
                      alt="Fintech-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Fintech <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Real}
                      alt="Real-Estate"
                      className="img-fluid"
                    />
                    <p>
                      Real Estate <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Restaurant}
                      alt="Restaurant-Business"
                      className="img-fluid"
                    />
                    <p>
                      Restaurant <br />
                      Business
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Travel}
                      alt="Travel-Tourism"
                      className="img-fluid"
                    />
                    <p>
                      Travel And <br />
                      Tourism
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Construction}
                      alt="Construction-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Construction <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={IT}
                      alt="IT-Industry"
                      className="img-fluid"
                    />
                    <p>
                      IT <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Healthcare}
                      alt="Healthcare-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Healthcare <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Entertainment}
                      alt="Entertainment-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Entertainment <br />
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
      <Work />
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
    </>
  );
};

export default SoftwareDev;
