import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const SEO = () => {
  const [activeWeProvide, setActiveWeProvide] = useState("seo");
  const [activeWhyChoose, setActiveWhyChoose] = useState("timebound");

  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>SEO Agency in London</h2>
                <p>
                  We are highly experienced and experts in offering the best
                  software development services as well as the best digital
                  marketing services at the best possible rates. We have
                  developed our portfolio on digital marketing by offering the
                  overall packages as well as the best services. If you want to
                  make your business successful then feel free to reach us for
                  SEO services.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in SEO Agency
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best SEO Agency Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your SEO
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
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>SEO Services</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Specialist.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>SEO Specialist</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-optimization.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>SEO Optimization</h4>
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
            <h3>We Provide SEO Agency in London</h3>
            <p>
              SEO(Search Engine Optimization) is one of the most important
              services that will help your business mobile app or website to
              gain visibility on the search engine. SEO is one process that
              helps in improving the quality and quantity of the website traffic
              to a web page, mobile app or website from Search Engines. SEO
              helps in targeting unpaid traffic rather than traffic or paid
              traffic. The App Ideas is a leading web and app development
              company. Along with software development services, we are also
              offering SEO services to our clients which helps their business
              website to rank in search engine listings through keywords
              optimization on content.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("seo")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeProvide === "seo" && "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png")}
                      alt="SEO
                      Consultancy"
                      className="img-fluid"
                    />
                    <p>SEO Consultancy</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("keyword")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeProvide === "keyword" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png")}
                      alt="Keyword And
                      Market Research."
                      className="img-fluid"
                    />
                    <p>Keyword And Market Research.</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("onsite")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeProvide === "onsite" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png")}
                      alt="On-Site And
                      Technical SEO"
                      className="img-fluid"
                    />
                    <p>On-Site And Technical SEO</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("penalty")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeProvide === "penalty" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png")}
                      alt="Penalty
                      Recovery"
                      className="img-fluid"
                    />
                    <p>Penalty Recovery</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("link_development")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeProvide === "link_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png")}
                      alt="Link
                      Development"
                      className="img-fluid"
                    />
                    <p>Link Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeProvide("content_marketing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeProvide === "content_marketing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png")}
                      alt="Content
                      Marketing"
                      className="img-fluid"
                    />
                    <p>Content Marketing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWeProvide === "seo" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">SEO Consultancy</h3>
                    <p className="Title_para">
                      SEO which is also known as Search Engine Optimization
                      which is one of the most demanding and popular
                      services.SEO is free traffic generating process that is
                      very helpful in increasing the engagement of the users
                      towards the business. If you want to drive organic traffic
                      then go for SEO.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      services. We have years of experience in offering the best
                      software development services along with the best digital
                      marketing services. We offer expert SEO consultancy to
                      business websites and help them to chase achievable and
                      realistic search engine ranking goals and guide them in
                      creating a content and SEO strategy for short and long
                      term results.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "keyword" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Keyword and Market Research
                    </h3>
                    <p className="Title_para">
                      Software solutions are one of the most popular ways of
                      making a business successful and also to stand out
                      differently in the market. Due to the high competition,
                      you need to offer the best solutions as well as you also
                      need to work on digital marketing for generating traffic.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the popular web
                      and app development company. We have a team of the highly
                      skilled digital marketing team who will offer the best
                      services. We boast of a robust and expertise-driven
                      keyword and market research apparatus and professionals
                      who can help you focus on the most relevant and useful
                      low-competition Keywords for best SEO results.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "onsite" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">On-site and Technical SEO</h3>
                    <p className="Title_para">
                      Digital marketing is one of the most demanding services in
                      this present time. If we talk about SEO(Search Engine
                      Optimization) then this is very useful to attract users
                      into your business. If you already have an online platform
                      then it is very important for you to go for Onsite and
                      Technical SEO to increase the userbase.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the most
                      popular web and app development company. We have a group
                      of people who are experts in offering Onsite and Technical
                      SEO services. We undertake on-site and technical SEO
                      responsibilities for websites and help them boost site
                      performance, loading speed, design elements and various
                      aspects that help search engine crawlers to find content
                      easily.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "penalty" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Penalty Recovery</h3>
                    <p className="Title_para">
                      If you have online platforms for your business then it is
                      very important for you to know everything about the
                      websites including the Digital marketing services.
                      Sometimes due to some reasons, the website can be blocked
                      or can be penalised for some reasons.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We are highly experts in offering the best
                      solution like mobile app development, web app development,
                      website development as well as digital marketing services.
                      If your website has ever been penalized or indexed by
                      Google for black hat SEO practices, we can help you
                      recovering and de-indexing the site and help it achieve
                      search engine results through credible link development
                      and content strategy.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "link_development" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Link Development</h3>
                    <p className="Title_para">
                      If we discuss digital marketing then this is probably one
                      of the best services for the growth of the business. Many
                      people are now planning of making investments in digital
                      marketing for promoting their services and increasing the
                      customer base of the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as a team of digital marketers who are
                      experts in offering the best services at the best rates.
                      We help your websites to build a quality link profile by
                      fetching links from top-notch links from respective niches
                      as per the relevance of the context.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeProvide === "content_marketing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Content Marketing</h3>
                    <p className="Title_para">
                      Nowadays, the demand for content marketing is one of the
                      most popular factors for promoting any kind of business
                      and service at the best possible rates. Content is highly
                      demanding in the market because this will help your
                      business to reach out to the targeted audience and attract
                      new customers.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly experts in offering the
                      best software development services like mobile app, web
                      app, websites as well as a digital marketing team. We
                      boost your websites’ SEO prospects by helping you with
                      quality content publishing and marketing of content across
                      highly credible and reputed websites across niches.
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
            <h3>Why You Should Choose Us for SEO Agency in London?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
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
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png")}
                      alt="Timebound and Result-Driven"
                      className="img-fluid"
                    />
                    <p>Timebound and Result-Driven</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile_proactive")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile_proactive" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png")}
                      alt="Agile and Proactive"
                      className="img-fluid"
                    />
                    <p>Agile and Proactive</p>
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
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png")}
                      alt="Competitive Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("comprehensive")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "comprehensive" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png")}
                      alt="Comprehensive Content Marketing"
                      className="img-fluid"
                    />
                    <p>Comprehensive Content Marketing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("timebound_delivery")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "timebound_delivery" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png")}
                      alt="Time-Bound Delivery"
                      className="img-fluid"
                    />
                    <p>Time-Bound Delivery</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("continuous_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "continuous_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png")}
                      alt="Continuous Support"
                      className="img-fluid"
                    />
                    <p>Continuous Support</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "timebound" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Timebound and Result-Driven
                    </h3>
                    <p className="Title_para">
                      The demand for online platforms is increasing day by day.
                      Many of the business owners are now planning of making
                      investments in digital platforms for making the business
                      more popular.SEO(Search Engine Optimization) is very
                      helpful in getting the attention of new users into your
                      websites
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have years of experience in
                      offering the best digital marketing and SEO services. We
                      ensure providing outstanding SEO output within a specified
                      time through our focused efforts through all facets of SEO
                      including performance optimization, content publication
                      and link building.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "agile_proactive" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile and Proactive </h3>
                    <p className="Title_para">
                      Currently, the demand for online platforms is increasing
                      for all kinds of services. People are more inclined
                      towards online services. Online platforms provide the
                      convenience of accessing the services more easily and it
                      is also time-saving. Similarly, if we talk about the
                      business owner then they are also making investments in
                      online services.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas which is one of the leading
                      web and app development company. We strictly follow the
                      agile methodology for the development of the services. Our
                      SEO services are always proactive and agile to take on any
                      trends and new methods to help our clients take on any
                      opportunity to boost their search engine rank.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing </h3>
                    <p className="Title_para">
                      As per the increasing demand for software solutions, the
                      demand for software development services is also
                      increasing with the increasing popularity. If you already
                      own a website then it is very important for you to work on
                      digital marketing to promote your services in the
                      business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We offer web apps, websites and
                      mobile app development. We offer SEO services at a highly
                      competitive price and even remain approachable and
                      accessible for startups and small enterprise websites.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "comprehensive" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Comprehensive Content Marketing{" "}
                    </h3>
                    <p className="Title_para">
                      If we talk about the demand for digital marketing then
                      digital marketing is one of the most popular as well as
                      demanding services in the market. Content Marketing is one
                      of the most important parts of digital marketing. This can
                      help businesses to stand out differently among their
                      competitors.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with that we also offer digital
                      marketing services like content marketing. With the App
                      Ideas, you can get a comprehensive content marketing
                      service spanning all channels and needs including guest
                      posting, regular content publication, digital and social
                      marketing content etc.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "timebound_delivery" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Time-Bound Delivery </h3>
                    <p className="Title_para">
                      Digital marketing is very helpful in this present time as
                      well as also for the future. To beat up the high
                      competition, it is very important for you to have the best
                      online platform as well as the best team of digital
                      marketing who will deliver the project on time and drive
                      better results.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We have a team of the highly skilled
                      web app, mobile apps, website development and digital
                      marketing services. Our guest posting services will fulfil
                      the publication and outreach commitments in a time-bound
                      manner. We ensure delivering measurable results within a
                      stipulated time frame.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "continuous_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Continuous Support</h3>
                    <p className="Title_para">
                      If you own a business online platform then it is very
                      important for you to hire the best digital marketing team
                      who will offer continuous support and helps in increasing
                      the engagement of the customers or users. Digital
                      marketing is very important for business growth.
                    </p>
                    <p className="Title_para">
                      The App Ideas offering the best digital marketing services
                      including SEO, content marketing and more. We have years
                      of experience in offering the best SEO services for
                      business growth. We also offer continuous support for
                      guest blogging and content marketing services with a
                      dedicated help desk manned by seasoned content marketing
                      professionals.
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
                  Are you planning to launch a Successful SEO in the market?
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

export default SEO;
