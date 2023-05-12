import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const CommonBanner = () => {
  return (
    <section className="common__banner__section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
            <div className="common_banner_lft">
              <h2>Software development company</h2>
              <p>
                We at The App Ideas has a group of experienced developers as
                well as designers who are proficient in developing software that
                can be helpful for the employees, customers and business owners.
                We have worked on various software development services like
                developing CRM, software management and also in custom software
                development services which can be very obliging for the users.
                For more details, feel free to connect with us and get a free
                quotation for a victorious Software service.
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
                      src={require("../assets/images/HIRE US/IPhone-App-Development-Company.png")}
                      alt="IPhone-App-Development-Company"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>IPhone App Development Company</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <img
                      src={require("../assets/images/HIRE US/IPhone-App-Development-Service.png")}
                      alt="IPhone-App-Development-Service"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>IPhone App Development Service</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <img
                      src={require("../assets/images/HIRE US/IPhone-Application-Development.png")}
                      alt="
                        IPhone-Application-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>IPhone Application Development</h4>
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
  );
};

export default CommonBanner;
