import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import CustomWordPress from "../../../assets/images/SERVICES/Designing/Mobile-app-design/Mobile-Apps-Development.png";
import WordPressWebsite from "../../../assets/images/SERVICES/Designing/Mobile-app-design/Mobile-Application-Design.png";
import Developer from "../../../assets/images/SERVICES/Designing/Mobile-app-design/Best-Mobile-App-Design.png";
import Work from "../../../components/Workdone/Work";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const MobileAppDesign = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Mobile App Designing Company</h2>
                <p>
                  If we talk about the mobile app then it is highly demanding
                  services in this present time. Generally, the business owners
                  or the app owners focus on the development process and forgets
                  about the designing but mobile app designing plays a vital
                  role in the success of the business or the online services.
                  Here at The App Ideas, we offer the best development as well
                  as designing services at the best possible rates.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Mobile App Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Mobile App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Mobile App Development
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
                        src={CustomWordPress}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Mobile Apps Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={WordPressWebsite}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Mobile Application Design</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={Developer}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Best Mobile App Design</h4>
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
                            placeholder="Email*"
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
            <h3>What do we offer in a mobile app Design Company?</h3>
            <p>
              Mobile apps have penetrated every single space of our lives and
              impacted how we interact with the world, shop products, stay
              updated and subscribe to services. At the App Ideas, we develop
              the most sophisticated mobile apps with state of the art
              technology for multiple mobile platforms. Over the years we built
              apps for a wide variety of niches utilizing a variety of
              technologies and cutting-edge design principles.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/ui.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      UI <br />
                      Design
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/ux.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>
                      UX <br />
                      Design
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/redesign-1.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Mobile App Redesign</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/skinning.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Mobile App Skinning</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/updates.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>
                      Design <br />
                      Updates
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/testing.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>UI And UX Testing</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">UI design</h3>
                  <p className="Title_para">
                    Why does various business fail? In various cases, designing
                    is the main reason behind the failure of mobile apps.
                    UI(User interface) plays a key role in the success of the
                    mobile app because this will be the outlook of your mobile
                    app and it is very important that it must be attractive and
                    well designed to attract a high number of users.
                  </p>
                  <p className="Title_para">
                    The App Ideas is one of the foremost mobile app designing
                    services. Along with the best software development services,
                    we also offer the best mobile app designing services at the
                    best costs. We design and develop a visually appealing and
                    instantly engaging mobile app user interface that helps
                    brands gain traction in the highly competitive app market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <Work />
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why choose us for mobile app Design Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/ui.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      Strong <br /> Portfolio
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/ux.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/redesign-1.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Experience and expertise</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/skinning.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Industry-Acclaimed Designers</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/updates.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Great Testing Process</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/testing.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>
                      Later <br /> Support
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Strong Portfolio</h3>
                  <p className="Title_para">
                    Are you planning on digitalizing your business? If yes then
                    this is probably the best time for you to plan things
                    properly and then hire the best software development
                    services. Before hiring any Mobile app designing services it
                    is required to check their portfolio which helps in
                    understanding the expertise of the designers.
                  </p>
                  <p className="Title_para">
                    We are from The App Ideas, which is one of the foremost
                    Mobile app designing company. We are highly experienced in
                    offering the best development and designing services. We
                    boast a solid portfolio of apps with engaging and appealing
                    UI and UX design built for a variety of niches across IOS,
                    Android and other OS platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}

      <TestiMonial />
      <FAQ />

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful Mobile App Designing
                  Company in the market?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link
                  to="/contactus"
                  className="contact_btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact us{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default MobileAppDesign;
