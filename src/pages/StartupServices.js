import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../components/Testimonial/TestiMonial";

const StartupServices = () => {
  const [activeService, setActiveService] = useState("logo_design");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_expertise"
  );

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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("logo_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "logo_design" &&
                      "service__provide_tab_active"
                    }`}
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("business_card")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "business_card" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("brouchure_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "brouchure_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("letter_head")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "letter_head" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("social_media")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "social_media" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("html_signature")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "html_signature" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("email_signature")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "email_signature" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("landing_page")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "landing_page" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("newsletter")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "newsletter" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
            {activeService === "logo_design" && (
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
                      At The App Ideas, we offer the best Startup services at
                      the best rates. The logo is a brand and we understand the
                      importance of it, we will create a professional logo for
                      your business, we will ask for certain details and based
                      on those details we were creating a custom logo design for
                      you we will create several mockups so you can choose best
                      out of it.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "business_card" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Business Card</h3>
                    <p className="Title_para">
                      If you are planning of launching a Startup then you must
                      have to take care of various things. After figuring out
                      the ideas, you need to take care of the various things
                      like the logo design, business card, banners and more. In
                      this present time, people are using digital business
                      cards.
                    </p>
                    <p className="Title_para">
                      Here at The App Ideas, we offer the best software services
                      for Startups and help them to launch successful platforms.
                      When you meet people, you would like to share your contact
                      details with them and the business card is the best way to
                      share contact information quickly. We have tons of samples
                      available for a business card so you can choose the best
                      out of it.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "brouchure_design" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Brochure Design</h3>
                    <p className="Title_para">
                      This is probably the best time for you to invest in the
                      startup or plan to launch the best startup in the market.
                      Many of the entrepreneurs are now planning on launching an
                      online platform like mobile app, web app and website at
                      the best rates and offer maintenance as well as support
                      services.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is a leading web and
                      app development company. We have a team of highly skilled
                      people, who are ex[erts in offering the best startup
                      services. The brochure gives brief information about your
                      business, about you, your products or services and also
                      share contact details, in short, if people want to know
                      about your business in a few minutes then brochure is the
                      best way to present.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "letter_head" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Letter Head</h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms is increasing in
                      the market. People are now more inclined towards online
                      services. Online platforms like mobile app or websites
                      offer the convenience of accessing the services very
                      efficiently. This platform also helps in saving a lot of
                      time.
                    </p>
                    <p className="Title_para">
                      We are here, at The App Ideas, which is one of the leading
                      web and app development company. We are highly expert in
                      offering the best software development services. Ina
                      routine day’s operations, you need to print invoices,
                      offer a job to the employees or need to send some official
                      information to the government or financial institutions
                      and all were asking for details on your company’s
                      letterhead.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "social_media" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Social Media Banners</h3>
                    <p className="Title_para">
                      Social Media is one of the best platforms and highly
                      demand platforms in this present time because as we can
                      clearly observe that social media is really helping in the
                      business growth. Social media can help your startup
                      services to increase the engagement of the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have years of experience in offering the best
                      startup services, social media is fuel for their business
                      vehicle, startups can’t able spend millions on
                      advertisement but they can share their business, products
                      or services information to the world via social media and
                      give a professional feel, we will create social media
                      banners for their social media accounts.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "html_signature" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">HTML Signature</h3>
                    <p className="Title_para">
                      Along with the website, mobile app and web apps, there are
                      also some of the key components which help in increasing
                      the popularity of your startup. This is probably the best
                      time for planning and making an investment in a demanding
                      idea and launch an online startup.
                    </p>
                    <p className="Title_para">
                      The App Idea is one of the leading software development
                      services along with the best startup services. We can be
                      highly expert in providing the best HTML signature for
                      your business which can help you to make brand awareness
                      and make a good impression among the customers.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "email_signature" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">E-mail Signature</h3>
                    <p className="Title_para">
                      Mobile app, web app and website is one of the best digital
                      ways for accessing all kinds of services at the best
                      rates. Are you planning of launching a startup in the
                      market? If yes then, this is probably the time for you to
                      plan things and launch your startup online in the market.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. Marketing and advertisement
                      play a very important role in the success of every startup
                      and business. We help you to create a better E-mail
                      template for your startup which can help you to get more
                      sales.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "landing_page" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Landing Page</h3>
                    <p className="Title_para">
                      Nowadays, the demand for digital services like mobile app,
                      web app and websites are getting highly demanding in the
                      market. Many businesses and entrepreneurs are now making a
                      high investment in digital platform development. If you
                      are also planning on making an investment then this is
                      probably the best time for it.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have a team of highly
                      skilled designers and developers who are experienced in
                      offering the best software services for startups. We are
                      highly proficient in providing the best website solution
                      for a startup business, we help you to provide the best
                      website solution with better features, layout and design
                      which helps to increase sales and profit of your business.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "newsletter" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Newsletter</h3>
                    <p className="Title_para">
                      As per the increasing digitization, as a business owner,
                      it is very important for you to apply some of the digital
                      methods for attracting a high number of people to your
                      business. The newsletter is one of the best methods for
                      engaging or attracting a high number of users to your
                      business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We offer the best software
                      development services which can help you to get more people
                      and increase your business growth. You can plan to launch
                      a newsletter and send daily updates to your customers.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                      src={require("../assets/images/SERVICES/StartupServices/Why Choose Us/1-13.png")}
                      alt="Academic-Education"
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("we_partner")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "we_partner" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust_portfolio")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("committed")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "committed" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("latest_technology")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "latest_technology" &&
                      "service__provide_tab_active"
                    }`}
                  >
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
            {activeWhyChoose === "experience_expertise" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and Expertise</h3>
                    <p className="Title_para">
                      Currently, the demand for online platforms is increasing
                      and as per the observation, it is going to increase in the
                      future time. If you are planning of launching a startup
                      then it is high time to launch an online service. Before
                      hiring, research about the developers likes the experience
                      and expertise of the software development company.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the foremost
                      software development company. We have years of experience
                      in offering the best services to startups and make them
                      successful in the market. Having a large team of
                      professionals comprising experts for various services our
                      experience with startup services spans over a decade.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "we_partner" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">We partner with the best</h3>
                    <p className="Title_para">
                      Startups are really demanding in the market. If you have a
                      unique idea then this is probably the time for you to
                      convert your ideas into a wonderful online startup. An
                      Online startup can help you to easily launch your services
                      and market them online using various available tools.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular software development
                      company. Along with website development, we also offer
                      mobile app development and web app development services
                      with the best designing services. As for providing various
                      services as per the needs of the respective startups we
                      always partner with the best in class solutions and
                      professionals.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "robust_portfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      If you are planning on making an investment in software
                      development services then this is probably the best time
                      for you to convert your ideas into a successful online
                      startup business. Before hiring any software development
                      services, it is very important to check their portfolio.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the most popular
                      startup software development services. We have years of
                      experience in offering the best solution for websites,
                      mobile app and web apps. We boast of a robust portfolio of
                      startups as across a variety of business niches who have
                      been benefited from our services.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "committed" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Committed to Confidentiality
                    </h3>
                    <p className="Title_para">
                      If we talk about confidentiality, then it is very
                      important for you to research the software development
                      company before hiring it. Mainly every service offers
                      information confidentiality but you have to make sure by
                      yourself before moving forward.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the most
                      popular web and app development company. We are highly
                      experienced in offering the best startup services like
                      designing, development, SEO and more. When providing
                      startup services we as the insider of the client company
                      remain fully committed to keeping all information
                      confidential.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "latest_technology" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Latest Technology</h3>
                    <p className="Title_para">
                      Nowadays, the demand for the software development services
                      like mobile app, web app and websites. Many businesses and
                      entrepreneurs are now making high investments in startup
                      services to increase their profit. If you are one of them,
                      then this is probably the time for you.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the foremost
                      Startup software development company. We are highly
                      experienced in offering the best online development
                      services by using the latest technology at the best rates.
                      We are simultaneously a leading development company with a
                      global footprint and that gives us the edge in respect in
                      respect of offering high tech solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive pricing</h3>
                    <p className="Title_para">
                      As we can clearly see in the market, the competition is
                      high. Many people are now making investments in startup
                      ideas. We have more than 100 solutions available in the
                      market for a single service. If you are at the planning
                      stage then find the best software development services
                      that offer the services at the best rates.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the best software development
                      company. We have highly skilled developers and designers
                      who are experts in offering the best software development
                      services. We offer truly international class startup
                      services for a wide range of businesses at a highly
                      competitive price and ensure affordability for businesses
                      of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
