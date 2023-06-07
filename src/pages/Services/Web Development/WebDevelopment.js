import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import WorkSlider from "../../../components/WorkSlider";
import mobileweb from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Web Development.svg";
import mobileaap from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Web Development Services.svg";
import webapp from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Website Development Company.svg";

// Service section image
import CustomWebsite from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Custom Website Development.svg";
import smartphone from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Development.svg";
import webimprovement from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Improvement.svg";
import Websitemaintenance from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Maintenance.svg";
import web from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Web app.svg";
import websiteupgrade from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Upgrade.svg";
import websiteredesign from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Website Redesign.svg";
import webAPICreations from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Web APIs creations.svg";
import Integration from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Why choose us/Integration with the third parties APIs.svg";

// service provide section images
import Food from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Food Industry.svg";
import Retail from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Retail Industry.svg";
import Transport from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Transport Industry.svg";
import Education from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Education Industry.svg";
import Business from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Business Industry.svg";
import Recruitment from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Recruitment Industry.svg";
import Software from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Software Industry.svg";
import Finance from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Finance Industry.svg";
import Insurance from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Industries We Serve/Insurance Industry.svg";

const WebDev = () => {
  const [activeService, setActiveService] = useState("website_development");
  const [activeServe, setActiveServe] = useState("food_industry");

  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>WEB DEVELOPMENT</h2>
                <p>
                  Web development is one of the leading solutions in this
                  present time. Nowadays we have thousands of web solutions
                  available for all kinds of services like E-commerce solutions,
                  Food ordering platforms, E-learning app, Dating apps, Taxi
                  booking apps, Doctor hiring app and more. The App Ideas is a
                  proficient software development company. We have a pool of
                  talented web developers who offer the best solutions.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Web Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Web Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Web Development
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
                      <h4>Mobile App Development</h4>
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
                      <h4>Mobile Application Development Company </h4>
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
                      <h4>Mobile Application Developer</h4>
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
            <h3>Why choose us for Website Designing & Development?</h3>
            <p>
              The App Ideas with a team of creative minds and experienced web
              development professionals can help you shape your web presence to
              cater to the target audience. With every business looking for its
              own space on the web it is increasingly becoming competitive and
              this is why to help you connect your audience with the brand
              message we focus on custom website solutions instead of run of the
              mill web development
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_development")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "website_development" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={smartphone}
                      alt="Website-Development"
                      className="img-fluid"
                    />
                    <p>
                      Website
                      <br /> Development
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("custom_website")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "custom_website" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={CustomWebsite}
                      alt="Custom Website-Development"
                      className="img-fluid"
                    />
                    <p>
                      Custom Website <br />
                      Development
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_improvment")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "website_improvment" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={webimprovement}
                      alt="website-improvement"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Improvement
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_maintenance")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "website_maintenance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={Websitemaintenance}
                      alt="Website-maintenance"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Maintenance
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("web_app")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "web_app" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img src={web} alt="web-App" className="img-fluid" />
                    <p>
                      Web <br /> App
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_upgrade")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "website_upgrade" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={websiteupgrade}
                      alt="website-upgrade"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Upgrade
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("website_redesign")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "website_redesign" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={websiteredesign}
                      alt="Website-redesign"
                      className="img-fluid"
                    />
                    <p>
                      Website <br />
                      Redesign
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("web_api")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "web_api" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={webAPICreations}
                      alt="web-API-Creations"
                      className="img-fluid"
                    />
                    <p>
                      Web APIs <br />
                      Creations
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("integration")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "integration" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={Integration}
                      alt="Integration"
                      className="img-fluid"
                    />
                    <p>
                      Integration With The <br />
                      Third Parties APIs
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {activeService === "website_development" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Development</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web development
                      company. We offer the best services for website
                      development for all kinds of businesses and categories. We
                      are highly experienced as well as experts in providing the
                      best web development services by accessing the trendy
                      technologies. We have worked on various website
                      development and provide the best solution at the best
                      possible rates as per the client’s requirements.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Website Development services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the best time for you to
                      think and make an investment in digitalizing your business
                      with advanced features. We are happy to help you to launch
                      a successful website development service which will be
                      very advantageous for the business. We initially gather
                      the requirements, analyze your requirements, arrange a
                      meeting, update clients at every module development and
                      deploy the project on time.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "custom_website" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom Website Development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software developing
                      company. We are highly experts in providing the best
                      solution for mobile app development, web app development
                      and e-commerce development. Along with the templates
                      design, we also offer the best custom website design for
                      all kinds of niches at the best rates. We have worked on
                      various customized website development services and
                      deployed the project on the given deadlines with all the
                      advanced features.
                    </p>
                    <p className="Title_para">
                      Are you looking for a Custom website development company?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. We have years of
                      experience in offering the best custom website development
                      services at the best rates. Our developers initially
                      gather the requirements, understand them or analyse them
                      fully, allocate a dedicated developer, work on the
                      modules, take clients approval and deploy the project on
                      the given timelines. This is probably the time for you to
                      take a step further and connect with us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_improvment" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Improvement</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have years of experience in
                      delivering the best website services. Along with
                      development and designing, we also offer website
                      improvement services. Many Services already have a website
                      service but due to changes in technology sometimes it is
                      very important to improve your website and make it
                      compatible with the trendy technology.
                    </p>
                    <p className="Title_para">
                      Are you looking for a website designing company?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are only a chat away from you. We
                      have worked on various website improvement projects.
                      Sometimes it is very important for you to make some
                      improvements to your website to make it work faster and
                      increase the engagement of the users. Firstly, we gather
                      the requirements, suggest some improvement as per the
                      trend, take the approval of the client in each module
                      development and deploy the project at the best possible
                      rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_maintenance" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Maintenance</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web app development
                      services. Along with the development of the mobile app and
                      website, we are also proficient in offering the best
                      designing services at the best possible rates. We also
                      offer website maintenance services for all kinds of
                      business niches. After the deployment of the project to
                      our clients, we offer free three months of maintenance
                      support.
                    </p>
                    <p className="Title_para">
                      Are you looking for a Website Maintenance Company?
                    </p>
                    <p className="Title_para">
                      If yes, then without taking much time feel free to connect
                      with us at any time. We have years of experience in
                      providing the best web development services. We have a
                      team of highly skilled developers who are experts in
                      offering the best kinds of services in a given timeline as
                      well as at the best possible rates. Feel free to connect
                      with us at any time for your website maintenance services
                      and we promise to offer you the best website maintenance
                      services.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "web_app" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web app</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and mobile
                      app development company. We have a team of highly skilled
                      developers as well as designing who are proficient in
                      offering the best web app development services. We have
                      worked on various projects related to web app development
                      for various industries or business categories. We also
                      advise our clients about the trending technology and
                      features which are on demand.
                    </p>
                    <p className="Title_para">
                      Are you looking for any Web app development company?
                    </p>
                    <p className="Title_para">
                      If yes then, you are at the right place. You can directly
                      connect with us and discuss your project requirements with
                      us as well as get a free quote for it. We have a team of
                      highly skilled Web developers and designers who will first
                      get all the information from the clients, try to analyze
                      it, start the project, take the clients approval and
                      deploy the project on time.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_upgrade" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Upgrade</h3>
                    <p className="Title_para">
                      The App Ideas is also proficient in offering Website
                      Upgrade services to you at the best possible rates. We
                      offer the best software development like website
                      development, web app development, mobile app developer,
                      E-commerce development as well as best graphics designing
                      services. Website Upgrade is very important to keep your
                      website fast-loading as well as to get a better rank.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Website Upgrade Services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is probably the time for you to make an
                      upgrade website list and connect with us. We can check
                      your requirements and revert you back as soon as possible.
                      We have a team of highly skilled developers and designers
                      who are experts in adding some of the advanced features
                      and upgrading your website easily. Feel free to connect
                      with us and access our best resources for upgrading your
                      website.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "website_redesign" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Redesign</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Along with offering the best
                      development services with the trending technology, we are
                      also proficient in offering online platform designing
                      services. We have a team of highly skilled designers who
                      are experts in providing unique designs as per the
                      expectation of the clients and as per the business
                      categories.
                    </p>
                    <p className="Title_para">
                      Are you looking for the best Website Redesign services?
                    </p>
                    <p className="Title_para">
                      If yes, then this is the best time for you to take a step
                      ahead and hire us for the best website redesign services.
                      Website redesigning is very important in this present time
                      because to keep your web app at the top on the google
                      search engines, it is very important to keep it updated
                      and design it as per the trending website designing
                      services. Feel free to connect with us and get a free
                      quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "web_api" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web APIs creations</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly experienced in
                      providing the best services for software development
                      services like website development, web app development
                      mobile app development. We also have a team of highly
                      expert designers who offer the best solution at the best
                      rates. We are also proficient in developing Web APIs for
                      all kinds of business niches.
                    </p>
                    <p className="Title_para">
                      Are you looking for Web APIs Creation services?
                    </p>
                    <p className="Title_para">
                      If yes, then you are at the right place. Here we have a
                      team of highly experienced web app developers who are
                      experienced in Web APIs Creation services. We have
                      developed various Web APIs for web apps and deployed them
                      at the given deadlines. We initially get the requirements,
                      analyses them, work on them and deliver them at the
                      correct time.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "integration" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Integration with the third parties APIs
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We are experienced in offering the
                      best software services along with the integration with the
                      third parties APIs in the web development solution. We
                      have a team of highly skilled people who are experts and
                      provide the solution at the best time as well as at the
                      best cost.
                    </p>
                    <p className="Title_para">
                      Are you looking for services to integrate third parties
                      APIs into your web app?
                    </p>
                    <p className="Title_para">
                      If yes, then here we are. As mentioned earlier, we are
                      highly proficient in providing the best web APIs services.
                      We are also Skilled in integrating the web with the third
                      parties APIs if its client’s requirements. We have years
                      of experience in providing the best services to our
                      clients at the best possible rates. If you are looking for
                      services like this then feel free to connect with us and
                      get a free quotation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <>
        {/* Technologies Section Start */}
        <section className="technologies__section py-5">
          <div className="container">
            <div className="Title__White mb-4">
              <h3>Technologies we use</h3>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Technologies/wp.png")}
                    alt="Wordpress"
                    className="img-fluid"
                  />
                  <h2>Wordpress</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Technologies/php.png")}
                    alt="PHP"
                    className="img-fluid"
                  />
                  <h2>PHP</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Technologies/an.png")}
                    alt="Angular"
                    className="img-fluid"
                  />
                  <h2>Angular</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Technologies/react-js.png")}
                    alt="React-Js"
                    className="img-fluid"
                  />
                  <h2>ReactJs</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Technologies/node-js.png")}
                    alt="Node-Js"
                    className="img-fluid"
                  />
                  <h2>Node Js</h2>
                </div>
              </div>
              {/* <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/flutter.png")}
                    alt="flutter"
                    className="img-fluid"
                  />
                  <h2>Flutter</h2>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* Technologies Section End */}
        <>
          {/* Service Section Start */}
          <section className="service__provide__section py-5">
            <div className="container">
              <div className="Title">
                <h3>Industries We Serve</h3>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <div className="row">
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("food_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "food_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
                        <img
                          src={Food}
                          alt="Food-Industry"
                          className="img-fluid"
                        />
                        <p>
                          Food <br />
                          Industry
                        </p>
                      </a>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("retail_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "retail_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
                        <img
                          src={Retail}
                          alt="Retail-Industry"
                          className="img-fluid"
                        />
                        <p>
                          Retail <br />
                          Industry
                        </p>
                      </a>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("transport_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "transport_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
                        <img
                          src={Transport}
                          alt="Transport-Industry"
                          className="img-fluid"
                        />
                        <p>
                          Transport <br />
                          Industry
                        </p>
                      </a>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("education_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "education_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
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
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("business_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "business_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
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
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("recruitment_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "recruitment_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
                        <img
                          src={Recruitment}
                          alt="Recruitment-Industry"
                          className="img-fluid"
                        />
                        <p>
                          Recruitment <br />
                          Industry
                        </p>
                      </a>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("software_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "software_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
                        <img
                          src={Software}
                          alt="Software-Industry"
                          className="img-fluid"
                        />
                        <p>
                          Software <br />
                          Industry
                        </p>
                      </a>
                    </div>
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("finance_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "finance_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
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
                    <div
                      className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                      onClick={() => setActiveServe("insurance_industry")}
                    >
                      <a
                        href="##"
                        className={`service__provide_tab ${
                          activeServe === "insurance_industry" &&
                          "service__provide_tab_active"
                        } `}
                      >
                        <img
                          src={Insurance}
                          alt="Insurance-Industry"
                          className="img-fluid"
                        />
                        <p>
                          Insurance <br />
                          Industry
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                {activeServe === "food_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Food Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the Best Food Industry web and
                          app development company. We have a team of highly
                          skilled developers as well as designers who are
                          proficient in offering the best software development
                          services at the best possible rates. We have years of
                          experience in providing the best solution for the Food
                          or Restaurant Industry.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Food Industry Web App in
                          the market?
                        </p>

                        <p className="Title_para">
                          Nowadays, a high number of startups or business news
                          are shifting towards digitization because it offers
                          the convenience of accessing the services. On the
                          other hand, people are also more inclined towards
                          digital platforms because it is time effective. If you
                          are planning then this is probably the time to take a
                          step ahead and launch your own Food Industry web app
                          in the market.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "retail_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Retail Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the Foremost Retail Industry
                          web and app development company. We are highly
                          experienced in providing the best software solution
                          like E-commerce development, mobile app, web app and
                          website development. We are also proficient in
                          providing unique designing services for all kinds of
                          industries including the retail business.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Retail Industry Web app
                          in the market?
                        </p>

                        <p className="Title_para">
                          If yes then connect with us and get a free quote. In
                          this present time, all kinds of business industries
                          are converting their services into digital services or
                          online platforms because they offer convenience as
                          well as time-saving methods. This is probably the best
                          time for you to convert your retail business into a
                          successful web app to generate high profits and get
                          more users attention.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "transport_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Transport Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the popular Transport Industry
                          web development services. We are highly skilled and
                          expertise in offering the best online platforms
                          development services including in the transport
                          industry. In the Transport industry, it is very
                          important to have a web app, so it will be very easy
                          for the business owners to track down their services
                          and manage the work accordingly.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Transport Industry Web
                          app in the market?
                        </p>

                        <p className="Title_para">
                          If Yes, then this is probably the best time for you to
                          launch a Transport industry web app at the best rates.
                          By having a Transport Industry web app, you can easily
                          track down your drivers, manage the services from any
                          place, convenience of managing the services at any
                          time, have great staff management and more.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "education_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Education Industry</h3>
                        <p className="Title_para">
                          The App Ideas is highly proficient in developing the
                          best Education industry web solution. We have a team
                          of highly experienced web app developers who are
                          experts in delivering the best education web and app
                          solutions at the best rates. Along with the
                          development services, we also offer the best designing
                          services for an education website, web app and mobile
                          app.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch an Education Industry Web
                          app in the market?
                        </p>

                        <p className="Title_para">
                          If yes, feel free to connect with us and get a free
                          quotation for an Education web app development
                          Service. We are just a text away from you. Education
                          web apps are trending in the market. An Education web
                          app can help you to easily list down all the courses
                          and keep records of the students. If you are an
                          educational institute owner then this is probably the
                          time to digitalize your service.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "business_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Business Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the most popular Software
                          development company. We are providing digital platform
                          services like website development, web app
                          development, mobile app development and unique graphic
                          designing service. Nowadays, a high number of
                          entrepreneurs are making a high investment in
                          developing online Businesses for increasing the profit
                          rate and offering the best services to their
                          customers.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch an Online Business in the
                          market?
                        </p>

                        <p className="Title_para">
                          If Yes, then this is probably the best time for you to
                          make an investment and launch your online business in
                          the market. People are probably looking for some of
                          the best web apps to be introduced in the market which
                          can make their work easier and efficient. If you have
                          an idea then feel free to connect with us and get a
                          free quotation for your ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "recruitment_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Recruitment Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the foremost recruitment
                          industry web app development company. We have a team
                          of highly skilled developers as well as designers, who
                          will offer advanced features and unique graphics which
                          can add value to your recruitment web app. In this
                          present time, it is very important to have online
                          platforms for your recruitment services to make the
                          work more convenient.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a recruitment Web app in
                          the market?
                        </p>

                        <p className="Title_para">
                          If yes then, feel free to connect with us and discuss
                          your requirements, we are just a click away. A
                          Recruitment web app can make the process much easier
                          for you as an owner. You can easily manage the data as
                          well as recruit people easily online. We follow simple
                          steps like requirements gathering, analyzing, resource
                          allocation, updating clients related to the projects
                          and deploying it on time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "software_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Software Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the leading web and app
                          development company. We offer the foremost services
                          like E-commerce development, mobile app development,
                          web app development and website app development. We
                          are highly expertise in providing designing services
                          like offering unique graphics design along with the
                          development. We have also provided the best solution
                          to the Software Industry.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch a Software Industry Web
                          solution in the market?
                        </p>

                        <p className="Title_para">
                          If Yes , then feel free to connect with us. We have a
                          pool of talented developers as well as designers who
                          are proficient in offering the best online platforms
                          services. We are also working with the software
                          industry to deliver high-class web app to them which
                          can increase their profit. We initially gather the
                          requirements, analyze requirements, allocate the
                          resources, take clients approval and deploy the
                          project.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "finance_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Finance Industry</h3>
                        <p className="Title_para">
                          The App Idea is one of the successful Finance Software
                          development services. We are highly efficient in
                          offering the best online solution for the finance
                          industry at the best rates. We have a team of highly
                          skilled developers and designers who have years of
                          experience in providing the victorious solution for
                          the finance industry by adding some of the advanced
                          features into the web app.
                        </p>

                        <p className="Title_para">
                          If yes then, we are just a call away, Feel free to
                          connect with us and get a free quotation for your
                          Finance Industry Web App. Having a Finance Web App can
                          help you to easily manage all the services through a
                          web app. This web app can help you to easily track
                          down your progress and make improvements as per
                          requirements. At this present time, it is highly
                          recommended to have the best web app for your Finance
                          Industry.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeServe === "insurance_industry" && (
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <div className="service_rht">
                      <div className="Title">
                        <h3 className="Title_heading">Insurance Industry</h3>
                        <p className="Title_para">
                          The App Ideas is one of the most popular IT services
                          providers. We offer the services like web app
                          development, mobile app development, website
                          development, E-commerce platforms development and
                          Graphic designing services at the best possible rates
                          by integrating advanced features and unique designing
                          services. The insurance industry is now also
                          integrating digitization to make the process much
                          easier.
                        </p>
                        <p className="Title_para">
                          Are you planning to launch an Insurance Web app in the
                          market?
                        </p>

                        <p className="Title_para">
                          If you are, then this is probably the time for you to
                          take a step ahead and connect with us. Let’s have a
                          quick call about your requirements and we will offer
                          you the best quotation for your insurance web app
                          services. We follow a simple process of gathering
                          information and analyzing it, providing the quotation,
                          allocating dedicated developers, taking clients
                          approval after every module development and deploying
                          the project.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          {/* Service Section End */}

          {/* <!-- Work Slider Start --> */}
          <WorkSlider />
          {/* <!-- Work Slider End --> */}

          {/* Client testimonial Section Start */}
          <TestiMonial />
          {/* Client testimonial Section End */}

          <>
            {/* FAQ Section Start */}
            <section className="accordion_section py-5">
              <div className="container">
                <div className="Title">
                  <h3>Frequently Asked Questions</h3>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            What does Mobile App Development Require?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <b>Mobile app development</b> entails making
                            computer programs that can run on a wide range of
                            mobile platforms and devices. If you want to have a
                            successful mobile app, you should choose a business
                            that has experience making such apps and follows a
                            tried-and-true process. Mobile app developers
                            provide an all-encompassing development plan,
                            interface design, software development, software
                            distribution, and backend services to back up the
                            app. Core features of the software are tested often
                            during development.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            What Are the Different Types of Mobile Apps You Can
                            Develop?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Applications may be developed for mobile devices
                            running both the Android and iOS operating systems.
                            Customers, employees, or even vendors may promote
                            certain apps for use.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Which platform, Android or iOS, should our
                            application be launched on?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            In the past, companies had the option of creating
                            software just for one OS. Even while major mobile
                            OSes like Android and iOS have huge user bases, most
                            companies still choose to create apps that work on
                            both..
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            What is the Difference Between Cross-Platform and
                            Native App Development?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Cross-platform development refers to the process of
                            creating software for several platforms as opposed
                            to only one. The process of creating applications
                            specifically for different platforms, including
                            Android and iOS, is known as native{" "}
                            <b>app development</b>. A software that functions
                            effectively on both systems may be made using
                            cross-platform development approaches.
                            <br />
                            <div className="mt-3">
                              <b>
                                It’s recommended to use the OS’s native
                                programming languages and integrated development
                                environments when developing native apps (IDEs).
                                Java or Kotlin proficiency and familiarity with
                                Android Studio are often required for Android
                                app development. You must use Xcode and either
                                Objective C or Swift while developing an iOS app
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            Can You Work With Us if We Don’t Have a Fully Formed
                            Idea for Our App?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFive"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            We engineers are used to collaborating with
                            businesses whose app concepts are in varied phases
                            of development. Let’s collaborate to bring your
                            ideas to life as practical mobile applications.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Will You Sign an NDA for the App You’re Developing?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            We are willing to sign non-disclosure agreements
                            throughout the development of your mobile app
                            (NDAs). You can trust us to keep your development
                            under wraps and out of the hands of your competitors
                            at all times.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Do I Need to Test My App?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Our knowledgeable internal testing crew puts every
                            mobile app through rigorous testing. This group
                            works closely with the developers to make sure the
                            applications being created are of the best quality
                            possible. You are welcome to participate in our
                            internal testing as well as your own, of course. You
                            could have suggestions for other uses for the app,
                            allowing you to develop test cases that are more
                            difficult.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Can an App connect to my existing systems/data
                            store?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            You may rely on us to develop API-based applications
                            that smoothly synchronise with your current
                            infrastructure (API). Because to APIs that may be
                            developed in any language, your datastore can be
                            accessed and utilised by any software.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Should I prepare my app's visual (wireframe)?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Our development team may collaborate with you to
                            create the app if you have access to a web designer
                            and are prepared to give graphics. The We team would
                            be pleased to assist you with visualising your
                            concept and bringing it to life in the digital
                            sphere, even if all you currently have is a
                            conception or an idea.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="v"
                          >
                            Who will own the intellectual property rights to my
                            App?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            The SPAR team’s obligations are limited to providing
                            advice and support while you develop the App for
                            your clients since the App is based on your idea,
                            concept, and company, and you retain all rights to
                            it.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* FAQ Section End */}
          </>

          <>
            {/* Contact Section Start */}
            <section className="testi-bg py-4">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
                    <div className="contact__lft">
                      <p>
                        Do you like to know more about our expertise in mobile
                        app development?
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div className="contact__rht">
                      <a href="#" className="contact_btn">
                        Contact us{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact Section End */}
          </>
        </>
      </>
    </>
  );
};

export default WebDev;
