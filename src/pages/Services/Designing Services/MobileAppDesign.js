import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import CustomWordPress from "../../../assets/images/SERVICES/Designing/Mobile-app-design/Mobile-Apps-Development.png";
import WordPressWebsite from "../../../assets/images/SERVICES/Designing/Mobile-app-design/Mobile-Application-Design.png";
import Developer from "../../../assets/images/SERVICES/Designing/Mobile-app-design/Best-Mobile-App-Design.png";
import Work from "../../../components/Workdone/Work";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const MobileAppDesign = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("ui_design");
  const [activeWhyChoose, setActiveWhyChoose] = useState("strong_portfolio");

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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("ui_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "ui_design" &&
                      "service__provide_tab_active"
                    }`}
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("ux_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "ux_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("mobile_app")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "mobile_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/redesign-1.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Mobile App Redesign</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("mobile_app_skinning")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "mobile_app_skinning" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/skinning.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Mobile App Skinning</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("design_updates")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "design_updates" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("ui_ux_testing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "ui_ux_testing" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
            {activeWeOffer === "ui_design" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">UI design</h3>
                    <p className="Title_para">
                      Why does various business fail? In various cases,
                      designing is the main reason behind the failure of mobile
                      apps. UI(User interface) plays a key role in the success
                      of the mobile app because this will be the outlook of your
                      mobile app and it is very important that it must be
                      attractive and well designed to attract a high number of
                      users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost mobile app designing
                      services. Along with the best software development
                      services, we also offer the best mobile app designing
                      services at the best costs. We design and develop a
                      visually appealing and instantly engaging mobile app user
                      interface that helps brands gain traction in the highly
                      competitive app market.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "ux_design" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">UX design</h3>
                    <p className="Title_para">
                      Mobile app services are highly demanding in this present
                      time. The mobile app makes the services more easily
                      accessible for people. As per the increasing demand,
                      business owners are now making high investments in
                      digitizing their services.UX(User Experience) Plays a
                      vital role in the success of the mobile app.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have years of experience
                      in offering the best UX designing services. We create a
                      sophisticated user experience to ensure an easy,
                      effortless and rewarding experience for the app users
                      right from the onboarding to every part of the app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "mobile_app" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Redesign</h3>
                    <p className="Title_para">
                      Designing is the key component for developing a successful
                      business or online platform in the market. As we can
                      clearly see, there is high competition in the market for
                      every online industry. Every day, one app is launched with
                      some additional features. As a business owner, you need to
                      launch a software solution that has proper development as
                      well as proper design.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      offering the best solution. We redesign existing mobile
                      apps by optimizing the UI and UX of the app and ensure
                      optimum user engagement and consistent traction.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "mobile_app_skinning" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Mobile App Skinning</h3>
                    <p className="Title_para">
                      Online platforms are getting highly popular in the market
                      because they offer the convenience of accessing the
                      services. If you are running a business then it is very
                      important for you to digitalize your business for its
                      success. And if you already have an online platform then
                      it is very important to do the mobile app skinning
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web and app
                      development company. We have years of experience in
                      offering the best designing services. We also provide
                      mobile app skinning services to give a new and look and
                      feel to the apps with a fraction of the development tool.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "design_updates" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Design Updates</h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms is increasing in
                      the market. The software solutions like websites, mobile
                      app and web apps are making management much easier for
                      business owners. If you already own an online business
                      then it is very important for you to keep updating the
                      design of the online platforms.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have a team of highly skilled and
                      experienced designers who are experts in offering the best
                      designs as per the services. With every subsequent update
                      for our mobile app clients, we fix the design glitches and
                      shortcomings and optimize the app design.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "ui_ux_testing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">UI and UX testing</h3>
                    <p className="Title_para">
                      After applying or updating the design of your business
                      mobile app, it is very important to test whether this is
                      perfect for your services or not. Because of the high
                      competition in the market, you really need to research and
                      search for the best software designers for the best UI and
                      UX services.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading
                      mobile app designing services. We have a pool of talented
                      mobile app designers who are highly skilled in offering
                      the best designs as per your business. We also undertake
                      UI and UX testing tasks for mobile apps to ensure maximum
                      output in terms of user engagement and business
                      conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("strong_portfolio")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "strong_portfolio" &&
                      "service__provide_tab_active"
                    }`}
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_pricing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_pricing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/ux.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience_expertise")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience_expertise" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/redesign-1.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Experience and expertise</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("industry")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "industry" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/skinning.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Industry-Acclaimed Designers</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("great_testing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "great_testing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Mobile-app-design/what-do/updates.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Great Testing Process</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("later_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "later_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
            {activeWhyChoose === "strong_portfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Strong Portfolio</h3>
                    <p className="Title_para">
                      Are you planning on digitalizing your business? If yes
                      then this is probably the best time for you to plan things
                      properly and then hire the best software development
                      services. Before hiring any Mobile app designing services
                      it is required to check their portfolio which helps in
                      understanding the expertise of the designers.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the foremost
                      Mobile app designing company. We are highly experienced in
                      offering the best development and designing services. We
                      boast a solid portfolio of apps with engaging and
                      appealing UI and UX design built for a variety of niches
                      across IOS, Android and other OS platforms.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      Currently, the demand for a mobile app is increasing in
                      the market. Many of the startups, business owners and
                      entrepreneurs are now making high investments in
                      developing the mobile app for your business. If you are
                      one of them, then it is very important for you to research
                      and hire the services which offer the best research at the
                      best rates.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with the development, we are
                      also offering graphic as well as mobile app designing
                      services that can help businesses in growth. We offer
                      highly competitive pricing for world-class app design
                      output and help businesses across all sizes and niches to
                      shape their mobile presence.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "experience_expertise" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and expertise</h3>
                    <p className="Title_para">
                      If you are running an offline store then this is probably
                      the time for you to convert your services into a
                      successful online business. Before hiring any software
                      development services, it is very important to check their
                      expertise and know they’re experienced in mobile app
                      designing services.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the most
                      popular mobile app designing company. We have a team of a
                      highly experienced and expert team of designers who offer
                      a unique design for your services. Our mobile app design
                      and development expertise spans more than a decade and
                      boasts of an experienced team of leading designers and
                      developers.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "industry" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Industry-Acclaimed Designers
                    </h3>
                    <p className="Title_para">
                      Designing or a mobile app designing plays a vital role in
                      the success of the mobile app. Along with the advanced
                      features and functionality, you also need to think about
                      the design as per your services. Designing can help you to
                      make your mobile app more attractive for people.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular Mobile app
                      designing Company. We have a team of highly skilled mobile
                      app designers who are highly experts in offering the best
                      services at the best rates. We established our creative
                      excellence thanks to the outstanding design innovations of
                      our industry-acclaimed designers.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "great_testing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Great Testing Process</h3>
                    <p className="Title_para">
                      Having a mobile app for your business is one of the best
                      things in this digital time. People are now making
                      investing and converting their services into digital
                      services. Online platforms can helps business owners to
                      reach out easily to the targeted audience and increase
                      their profit rates.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the foremost
                      mobile app designing company. We have years of experience
                      in offering the best mobile app designing services for all
                      kinds of business niches. We also have a great testing
                      mechanism and experienced testing professionals to ensure
                      optimum quality with our mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "later_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Robust Post-Development Support
                    </h3>
                    <p className="Title_para">
                      Are you planning for redesigning your business mobile app?
                      If yes then this is probably the best time for you to
                      redesign your app and launch the updated versions. It is
                      very important to have post-development support, so you
                      can easily reach out to the development services.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We are highly experts in
                      offering the best mobile app designing services. We offer
                      robust post-development support to all our existing
                      clients and deliver timely updates and upgrades.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
