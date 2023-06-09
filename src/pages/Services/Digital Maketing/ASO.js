import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const ASO = () => {
  const [activeService, setActiveService] = useState("app_icon_design");
  const [activeWhyChoose, setActiveWhyChoose] = useState("experience");

  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>ASO</h2>
                <p>
                  It is one of the best ideas for planning a mobile app for your
                  business or a startup in this present era. Many business
                  owners and entrepreneurs are now making high investments in
                  developing the best online platforms. After launching an
                  application it is very important for you to also focus on the
                  ASO which is App Store optimization. Here at The App Ideas we
                  also offer the ASO services at the best possible rates.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in ASO Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best ASO Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your ASO Development
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
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Services.png")}
                        alt="ASO Services"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>ASO Services</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Specialist.png")}
                        alt="ASO Marketing"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>ASO Marketing</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-optimization.png")}
                        alt="App Store Optimization Agency"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>App Store Optimization Agency</h4>
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
            <h3>App Store Optimization (ASO) Services Provided by Us</h3>
            <p>
              App Store Optimization (ASO) is basically the process of boosting
              the visibility of a mobile application built for various OS
              platforms. ASO helps to enhance traction and download the number
              of your apps across mobile app stores. The App Ideas is one of the
              leading app development and app marketing companies with a skilled
              and expertise-driven App Store Optimisation (ASO) team that helped
              boosting visibility and traction for a wide number of successful
              mobile apps across the niches.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_icon_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "app_icon_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png")}
                      alt="App Icon Design"
                      className="img-fluid"
                    />
                    <p>App Icon Design</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_store")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "app_store" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png")}
                      alt="App Store Presence Optimization"
                      className="img-fluid"
                    />
                    <p>App Store Presence Optimization</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("keyword")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "keyword" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png")}
                      alt="Keyword Optimization"
                      className="img-fluid"
                    />
                    <p>Keyword Optimization</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_description")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "app_description" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png")}
                      alt="App Description"
                      className="img-fluid"
                    />
                    <p>App Description</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("app_marketing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "app_marketing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png")}
                      alt="App Description"
                      className="img-fluid"
                    />
                    <p>App Marketing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("retareting_campaigns")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "retareting_campaigns" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png")}
                      alt="Retargeting Campaigns"
                      className="img-fluid"
                    />
                    <p>Retargeting Campaigns</p>
                  </a>
                </div>
              </div>
            </div>
            {activeService === "app_icon_design" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Icon Design</h3>
                    <p className="Title_para">
                      Nowadays, People are more inclined towards online
                      platforms because of the increasing demand for online
                      platforms. Business owners are loving the online platforms
                      as it helps in easy management of the services. On the
                      other hand customers or people are also loving the online
                      platform services because it helps in easy accessing the
                      services.
                    </p>
                    <p className="Title_para">
                      We at The App Ideas is one of the leading web and app
                      development company. Along with the software development
                      services, we also offer the best designing services at the
                      best rates. We have a team of highly skilled designers who
                      have years of experience in delivering the best solutions,
                      We design instantly engaging and visually appealing app
                      icons for all types of mobile apps and ensure making the
                      icon a key element for the app branding and marketing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "app_store" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      App Store Presence Optimization
                    </h3>
                    <p className="Title_para">
                      The demand for mobile app and web apps has been increased
                      because of their convenience of accessing the services
                      easily. Digitization makes the work more simple and easier
                      for all kinds of business owners. To make your business
                      more popular it is very important to work on app store
                      presence optimization.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is one of the leading web
                      and app development company. We offer the best software
                      services development services as well as designing
                      services. From writing crisp, audience-specific and
                      engaging app store descriptions to tweaking the app title
                      with relevant keywords to using visually appealing
                      screenshots and “how-to” videos, we do everything to
                      optimize the presence of your app in app stores.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "keyword" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Keyword Optimization</h3>
                    <p className="Title_para">
                      In the current trend, it is very important for business
                      owners and entrepreneurs to work on other aspects like
                      designing as well as optimization. This will help the
                      business to make their services successful and easy for
                      the search engine to rank them. A higher ranking can leads
                      to more traffic towards your services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the proficient software
                      development services. We have a team of highly skilled
                      developers who offers the best development services as
                      well as keyword optimization services. We help to boost
                      the visibility of your app stores by tracking the most
                      relevant keywords and utilizing them for app store ranking
                      against relevant searches.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "app_description" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Description</h3>
                    <p className="Title_para">
                      Are you planning on launching a software solution for your
                      business? If yes then this is one of the best times to
                      execute your plan. Along with the best software
                      development services, you also need to take care of the
                      App Search optimization services because this will be very
                      helpful for promoting your services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular software development
                      as well as App Search optimization services. We have years
                      of experience in offering the best App Search optimization
                      services. We create highly engaging store descriptions by
                      writing keyword-rich descriptions accompanied by visually
                      appealing screenshots and engaging short videos.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "app_marketing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Marketing</h3>
                    <p className="Title_para">
                      Launching an app solution is not enough, as a business
                      owner, you also need to take care of other things like
                      marketing. App Marketing is one of the crucial steps for
                      making the app more successful by promoting it to the
                      target audience. Marketing can help you to drive more
                      customers towards your platforms.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development. Along with the development services, we also
                      offer marketing services for promoting the services at the
                      best rates. To boost the ASO effort further we help our
                      clients with digital marketing campaigns ranging from
                      Cost-Per-Install(CPI) campaigns to influencer marketing to
                      social media marketing.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeService === "retareting_campaigns" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Retargeting Campaigns</h3>
                    <p className="Title_para">
                      The demand for online platforms like websites, web apps
                      and mobile app is increasing day by day. Business owners
                      are now converting their offline system to online
                      platforms because customers or the users are liking the
                      mobile app as it offers the convenience of accessing the
                      services.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the most
                      popular software development company. We have a team of
                      highly skilled developers as well as digital marketers who
                      will offer the services at the best possible rates. We
                      launch robust retargeting campaigns to reach out to all
                      the dropped users and audiences who visited the app page
                      once.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why You Should Choose Us for ASO?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png")}
                      alt="Experience"
                      className="img-fluid"
                    />
                    <p>Experience</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("multichannel")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "multichannel" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png")}
                      alt="Multichannel Marketing Expertise"
                      className="img-fluid"
                    />
                    <p>Multichannel Marketing Expertise</p>
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
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png")}
                      alt="Robust Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("industry_best_team")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "industry_best_team" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png")}
                      alt="Industry’s Best team"
                      className="img-fluid"
                    />
                    <p>Industry’s Best team</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("timebound")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "timebound" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png")}
                      alt="Timebound and Result-Driven"
                      className="img-fluid"
                    />
                    <p>Timebound and Result-Driven </p>
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
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png")}
                      alt="Competitive Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience</h3>
                    <p className="Title_para">
                      If you are planning of launching any software solution or
                      a mobile application in the market then this is probably
                      the best time for you to start it. It is very important
                      for you to do the research and hire an experienced
                      software development company that will offer the best
                      services at the best rates.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of the highly-skilled,
                      experienced and expert digital marketing team. As an early
                      starter in the app development and marketing space, we
                      have decade long experience in marketing apps and
                      optimizing app market presence.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "multichannel" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Multichannel Marketing Expertise
                    </h3>
                    <p className="Title_para">
                      Digital Marketing or App Search optimization is one of the
                      most popular as well as important services in this present
                      time. Users are more inclined towards the online platforms
                      or digital services because it offers the convenience of
                      accessing the services from any place and at any time.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have years of experience in
                      offering the best digital marketing services and App
                      Search optimization. Our ASO and app marketing specialists
                      have expertise across multiple channels and platforms for
                      reaching out to the audience and championing marketing
                      efforts.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "robust_portfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Before hiring any software development services, it is
                      very important for you to check the overall details of the
                      services you are hiring. You have to check their past
                      projects to know their expertise in that particular field.
                      After checking the background, you can now move further
                      with the details.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas which is popular software
                      development as well as digital marketing service. We are
                      proficient in providing the best services. We boast a
                      robust portfolio of the most successful apps across the
                      niches that have been benefited from our App Store
                      Optimization and marketing inputs.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "industry_best_team" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Industry’s Best team</h3>
                    <p className="Title_para">
                      Many business owners, entrepreneurs and startups owners
                      are now launching their Mobile apps in the market for
                      increasing profit rates. Before hiring any services, it is
                      very important for you to research the market and search
                      for the best team to hire for your software development
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly proficient in offering
                      the best services to our clients. We have one of the most
                      industry-acclaimed marketing and app market optimisation
                      teams loaded with experts for every different app store
                      marketing speciality.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "timebound" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Timebound and Result-Driven
                    </h3>
                    <p className="Title_para">
                      Planning of digitizing your business in this present time
                      is considered as one of the best steps because if you
                      observe the market then a high number of people are now
                      more inclined towards the Mobile app and web app services.
                      Online platforms provide the convenience of accessing the
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have years of experience in
                      offering successful App Search Optimization services which
                      will help your business to target a high number of users.
                      We undertake every ASO and marketing campaign as
                      time-bound and result-driven projects and ensure
                      delivering the desired output with the designated
                      timeframe.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      Currently, mobile apps are highly demanding in all kinds
                      of business. This provides the proper way of accessing the
                      services from any place as well as any time. Due to the
                      high demand, the cost is also getting high for developing
                      digital solutions and launching in the market.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the
                      proficient App Search optimization(ASO). We have a team of
                      highly skilled developers who are experts in offering the
                      best digital marketing services. We offer one of the most
                      competitive pricing for ASO and app marketing campaigns
                      that can be availed by all apps across sizes and niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <TestiMonial />

      <FAQ />

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful App Search
                  Optimization in the market?
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

export default ASO;
