import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import AR from "../../assets/images/MobileAppDev/IPad App Development Company/iPad Art and Design Apps/iPad AR and VR apps.svg";
import chat from "../../assets/images/MobileAppDev/IPad App Development Company/iPad Art and Design Apps/iPad Chat Apps.svg";
import Experience from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Competitive price.svg";
import Robust from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Robust Portfolio.svg";
import Lifecycle from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Full Lifecycle support.svg";
import Agile from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Agile Development.svg";
import Fast from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Fast-paced development.svg";
import Competitive from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Competitive price.svg";

import TestiMonial from "../../components/Testimonial/TestiMonial";
import FAQ from "../../components/FAQ";
import WorkHand from "../../components/WorkHand";
import { Link } from "react-router-dom";

const IpadAppDev = () => {
  const [activeService, setActiveService] = useState("ipad_enterprise");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_expertise"
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>IPad App Development Company</h2>
                <p>
                  The App Ideas is one of the leading web and app development
                  company. We are highly expert in providing the best software
                  services including the IOS service platforms like iPad app
                  development service. We also offer custom iPad app development
                  which can be very helpful for your business at the best
                  possible rates.
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
                      Best iPad App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your iPad App Development
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
                        src={require("../../assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Company.png")}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>IPad App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Service.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>IPad App Development Services</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/IPhone App/IPhone-Application-Development.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Ipad Application Development</h4>
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
            <h3>What Do We Offer For iPad App Development Company?</h3>
            <p>
              iPad among all the iOS devices has a very special place because of
              its sophisticated large screen hybrid computing experience. Though
              all major iPhone apps are automatically available for iPad users,
              some apps are particularly designed and built keeping iPad users
              in mind. We build all typical iPad centric apps ranging from iPad
              games, robust enterprise apps, design and art apps, writing and
              note-taking apps, entertainment and media apps, reading apps and
              many others.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_enterprise")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "ipad_enterprise" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/IPad App Development Company/enterprise.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>IPad Enterprise App</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_entertainment")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "ipad_entertainment" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/IPad App Development Company/ipad-media.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      Ipad Media <br /> Apps
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_game")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "ipad_game" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/IPad App Development Company/ipad-game.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      IPad Game <br /> App
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_ar_vr")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "ipad_ar_vr" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={AR}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>IPad AR & VR Apps</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_chat")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "ipad_chat" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={chat}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      IPad Chat <br />
                      Apps
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("ipad_art_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "ipad_art_design" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/IPad App Development Company/Website-Redesign.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>IPad Art & Design Apps</p>
                  </a>
                </div>
              </div>
            </div>
            {activeService === "ipad_enterprise" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Enterprise App</h3>
                    <p className="Title_para">
                      Nowadays many business owners, startups or enterprise
                      owners are now shifting their business towards online
                      platforms. Digitilizing their business can help owners to
                      reach as many people as they can. Along with that, some of
                      the online platforms can also help in managing the overall
                      business through a single screen.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled and
                      expert developers who will offer the best iPad app
                      development services with unique design and the best
                      rates. We develop custom iPad mobile apps for a variety of
                      business niches and categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_entertainment" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      iPad Entertainment and media Apps
                    </h3>
                    <p className="Title_para">
                      If we talk about the Entertainment and media categories
                      then this type of apps are getting highly popular as well
                      as its demand is also increasing among the users. If you
                      are planning to make an investment in this field then you
                      can easily launch your own iPad mobile app for
                      Entertainment and media.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular iPad mobile app
                      development company. We have a team of highly talented
                      developers who are proficient in providing the best iPad
                      app solutions for different business categories. We build
                      advanced entertainment and media apps for iPad users
                      equipped with state of the art features like a live
                      recording, on-screen caption etc.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_game" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Game App </h3>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the experienced
                      web and app development company. We are providing
                      successful mobile app development services for all types
                      of operating systems including the IOS and Android for the
                      success of the business.iPad mobile app solutions are
                      highly demanding in this present time.
                    </p>
                    <p className="Title_para">
                      If we talk about game app development the iPad Game apps
                      are highly popular in the market. Many of the
                      entrepreneurs are making investments in developing a new
                      concept iPad games in the market. We develop sophisticated
                      and addictive mobile apps for iPad users using state of
                      the art gaming technologies.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_ar_vr" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad AR and VR apps</h3>
                    <p className="Title_para">
                      iPad Mobile apps are getting popular day by day. And if we
                      talk about the AR(Augmented Reality) and VR(Virtual
                      Reality) apps then this is highly getting popular in the
                      market. Many of the popular and successful mobile apps are
                      integrating AR and VR into their services to offer more
                      convenient services to the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. We have a team of highly skilled and expertise
                      software developers who are proficient in providing the
                      best solution for AR and VR apps. We utilise the large
                      screen and authentic visual capability of the iPad to
                      build sophisticated AR and VR apps for an immersive
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_chat" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Chat Apps</h3>
                    <p className="Title_para">
                      iPad Chat apps are highly popular and demanding in the
                      market. If we check in the market then we have thousands
                      of chat app available. Chat app can help users to connect
                      with each other and chat with them easily through their
                      smart devices. Chat apps are mainly used by every
                      professional including students, business owners and more.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a leading web and app development
                      company. We have a team of highly skilled developers who
                      will offer the unique design and best solution of the iPad
                      chat app at the best costs. We build state of the art chat
                      apps for iPad users with real-time video chat, smart emoji
                      and other advanced features.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "ipad_art_design" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">iPad Art and Design Apps</h3>
                    <p className="Title_para">
                      If we talk about the Art and Design industry then this
                      industry is also booming in the market. Many entrepreneurs
                      and startups are making investments in mobile apps
                      development for increasing their profits rates. It is one
                      of the best ideas to launch an iPad Art and Desing apps.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular web and app
                      development company. We have a pool of talented IOS
                      developers who will offer the best design and development
                      services for iPad Art and Design apps. We develop a range
                      of most user-centric apps targeted at professional
                      designers, artists and architects who use iPad extensively
                      for their purpose.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Work Head Section Start */}
      <WorkHand />
      {/* Work Head Section End */}

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>
              Why Choose App Ideas For React Native App Development Company?
            </h3>
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
                    } `}
                  >
                    <img
                      src={Experience}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust_protfolio")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_protfolio" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={Robust}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("full_lifestyle_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "full_lifestyle_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={Lifecycle}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Full Lifecycle support</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile_development")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile_development" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <img
                      src={Agile}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("fast_paced_development")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "fast_paced_development" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <img
                      src={Fast}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Fast-paced development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_price")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_price" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <img
                      src={Competitive}
                      alt="Competitive-Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience_expertise" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and Expertise.</h3>
                    <p className="Title_para">
                      We are from The App Ideas is a leading web and app
                      development company. We offer website development services
                      as well as the best iPad App development service which
                      will helps businesses to grow and increase the engagement
                      of the users towards your services.
                    </p>
                    <p className="Title_para">
                      Before hiring any software development company, it is very
                      important for you to know the expertise of the team. We
                      offer a talented pool of Ipad developers having years of
                      experience proven expertise and great credentials.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "robust_protfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Before hiring any software development services, it is
                      very important for you to check the form detail as well as
                      their past projects. By checking their past projects, you
                      will get a clear idea about their experience and expertise
                      in Android Mobile app development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the topmost software development
                      company. We have a team of a highly experienced and expert
                      team of Android app developers who provide the best
                      solution for all types of business categories. As an
                      expert Android development company, we boast a robust
                      portfolio of the most successful android apps across the
                      nices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "full_lifestyle_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Full Lifecycle support</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Nowadays, from the current market
                      scenario, we can clearly see the demand and the increasing
                      popularity of Android app solutions in the market. Every
                      business and startup is now launching their Android mobile
                      app in the market for engaging more users.
                    </p>
                    <p className="Title_para">
                      By choosing The App Ideas for your Android app development
                      you will get various advantages. One of the advantages is
                      Full Lifecycle support which means we offer support for
                      the full lifecycle of the app starting from the
                      development and launching phase to post-launch marketing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "agile_development" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile development</h3>
                    <p className="Title_para">
                      In this present time, the demand for Android app
                      development is increasing because of its best convenience
                      and comfort. More than half of the population own
                      smartphones, so they prefer a mobile apps for accessing
                      all kinds of services. This is the main reason why service
                      owners are shifting towards online platforms.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is a leading web and app
                      development company. For Android app development, we
                      strictly follow the agile methodology for delivering the
                      best output without compromising on the qualitative
                      parameters.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "fast_paced_development" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fast-paced development</h3>
                    <p className="Title_para">
                      In this modern or we can say digital era, everything is
                      digitalizing as quickly as possible. Similarly, it is very
                      easy to access all kinds of services through smartphones
                      which are cost-saving as well as time-saving. Business
                      owners and entrepreneur are looking for the software
                      development company which offer the fast-paced development
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas are one of best web and app development
                      company. We have a team of a highly skilled and expert
                      team of Android app developers who provide the best
                      solution for every business niche. With our Android
                      development process, we ensure the fastest turnaround time
                      and shortest time to market for each and every app.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "competitive_price" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive price</h3>
                    <p className="Title_para">
                      If you are planning to launch an Android app solution in
                      the market for your business then this is the right time
                      to make the investment, The Android mobile app can help
                      you to stand out differently among the competitions and
                      increase the user engagement towards your business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a team of highly skilled web and app
                      developers who offer the best solution at the best rates.
                      We offer highly competitive pricing for our Android app
                      development services that remains affordable even for
                      small enterprises.
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

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful iPad Mobile app in the
                  market?
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

export default IpadAppDev;