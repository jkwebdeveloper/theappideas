import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../../components/Workdone/Work";
import TestiMonial from "../../components/Testimonial/TestiMonial";
// import FAQ from "../../components/FAQ";

const AppleWatch = () => {
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
                <h2>Apple Watch App Development Company</h2>
                <p>
                  The App Ideas is one of the best software development company.
                  We are highly proficient in offering the best solution for all
                  kinds of online platforms including the Apple Watch app
                  development process. Many of the business is now offering
                  Apple Watch app because of the increasing demand in the
                  market.
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
                      Best Apple Watch App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Apple Watch App Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Complete Guidance from Designing to Deployment{" "}
                    </span>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/ibeacon App/IBeacon-App-Development-Company.png")}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Apple Watch App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/ibeacon App/IBeacon-App-Development-Services.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Create Apple Watch App</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/ibeacon App/IBeacon-Application-Developer.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Apple Watch App Development Company</h4>
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
            <h3>Apple Watch App Development Company from The App Ideas.</h3>
            <p>
              Smart Watches surpassing their earlier avatar as fashion-tech
              became now use devices to allow mobile users to do a lot of things
              right from the wrist. Smartwatches are also offering smarter
              wearable ways to communicate and to keep track of health and
              fitness measurements. At the App Ideas, we build sophisticated,
              agile, performance-savvy and user-optimised custom smartwatch apps
              for smartwatches across both Android and Apple Watch platforms.
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
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Apple Watch App/Smartwatch-Health-and-Fitness-apps1.png")}
                      alt="Smartwatch-Fitness"
                      className="img-fluid"
                    />
                    <p>Smartwatch Fitness Apps</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Apple Watch App/Smartwatch-Game-Apps.png")}
                      alt="Smartwatch-Game-Apps"
                      className="img-fluid"
                    />
                    <p>Smartwatch Game Apps</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../asse../../assets/images/MobileAppDev/Apple Watch/Apple Watch App/icons8-smart-watch-100-1.png")}
                      alt="Extending-Smartwatch"
                      className="img-fluid"
                    />
                    <p>Extending Smartwatch App Versions</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Apple Watch App/SmartWatch-Location-apps.png")}
                      alt="SmartWatch-Location-apps"
                      className="img-fluid"
                    />
                    <p>
                      Smartwatch <br />
                      GPS
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Apple Watch App/SmartWatch-Chat-apps.png")}
                      alt="SmartWatch-Chat-apps"
                      className="img-fluid"
                    />
                    <p>SmartWatch Chat Apps</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Apple Watch App/Mask-Group.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Smartwatch Health and Fitness apps.
                  </h3>
                  <p className="Title_para">
                    Smartwatches are the current trending technology in the
                    market. Many of the businesses, as well as startups, are now
                    converting their online services into smartwatch apps and
                    some of the entrepreneurs are also launching their
                    smartwatches app in the market. In health and fitness apps,
                    many of the users are now using smartwatches in the market.
                  </p>
                  <p className="Title_para">
                    The App Ideas is one of the leading web and app development
                    company. We have a team of highly skilled developers who are
                    experts in providing the best solution for websites, mobile
                    app and web apps. We build sophisticated health and fitness
                    apps for both Android and Apple Watch platforms with
                    cutting-edge features and an engaging user experience.
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
            <h3>Why You Should Choose Us for Apple Watch App Development?</h3>
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
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Why You Should/Experience-and-Expertise2.png")}
                      alt="Smartwatch-Fitness"
                      className="img-fluid"
                    />
                    <p>Experience and Expertise.</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Why You Should/Robust-portfolio.png")}
                      alt="Smartwatch-Game-Apps"
                      className="img-fluid"
                    />
                    <p>
                      Robust <br />
                      Portfolio
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../asse../../assets/images/MobileAppDev/Apple Watch/Why You Should/Dedicated-Project-manager.png")}
                      alt="Extending-Smartwatch"
                      className="img-fluid"
                    />
                    <p>Dedicated Project Manager</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Why You Should/Highly-Result-Driven.png")}
                      alt="SmartWatch-Location-apps"
                      className="img-fluid"
                    />
                    <p>Highly Result Driven</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Why You Should/Competitive-pricing.png")}
                      alt="SmartWatch-Chat-apps"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Apple Watch/Why You Should/Meet-milestones-and-deadlines1.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Meet Milestones And Deadlines</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Experience and Expertise.</h3>
                  <p className="Title_para">
                    The App Ideas is one of the most popular software
                    development company. We have a group of talented developers
                    who are experts as well as experience App Watch app
                    developers. We offer the solution which will help you in the
                    growth as well as success in your business with unique
                    design.
                  </p>
                  <p className="Title_para">
                    The App Ideas has proficient and skilled developers who are
                    highly experienced in offering the best Apple Watch app
                    development. We offer a talented pool of Apple Watch app
                    developers having years of experience proven expertise and
                    great credentials.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

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
                      Applications may be developed for mobile devices running
                      both the Android and iOS operating systems. Customers,
                      employees, or even vendors may promote certain apps for
                      use.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Which platform, Android or iOS, should our application be
                      launched on?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      In the past, companies had the option of creating software
                      just for one OS. Even while major mobile OSes like Android
                      and iOS have huge user bases, most companies still choose
                      to create apps that work on both..
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
                      What is the Difference Between Cross-Platform and Native
                      App Development?
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
                      creating software for several platforms as opposed to only
                      one. The process of creating applications specifically for
                      different platforms, including Android and iOS, is known
                      as native <b>app development</b>. A software that
                      functions effectively on both systems may be made using
                      cross-platform development approaches.
                      <br />
                      <div className="mt-3">
                        <b>
                          It’s recommended to use the OS’s native programming
                          languages and integrated development environments when
                          developing native apps (IDEs). Java or Kotlin
                          proficiency and familiarity with Android Studio are
                          often required for Android app development. You must
                          use Xcode and either Objective C or Swift while
                          developing an iOS app
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
                      Can You Work With Us if We Don’t Have a Fully Formed Idea
                      for Our App?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      We engineers are used to collaborating with businesses
                      whose app concepts are in varied phases of development.
                      Let’s collaborate to bring your ideas to life as practical
                      mobile applications.
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
                      throughout the development of your mobile app (NDAs). You
                      can trust us to keep your development under wraps and out
                      of the hands of your competitors at all times.
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
                      Our knowledgeable internal testing crew puts every mobile
                      app through rigorous testing. This group works closely
                      with the developers to make sure the applications being
                      created are of the best quality possible. You are welcome
                      to participate in our internal testing as well as your
                      own, of course. You could have suggestions for other uses
                      for the app, allowing you to develop test cases that are
                      more difficult.
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
                      Can an App connect to my existing systems/data store?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      You may rely on us to develop API-based applications that
                      smoothly synchronise with your current infrastructure
                      (API). Because to APIs that may be developed in any
                      language, your datastore can be accessed and utilised by
                      any software.
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
                      Our development team may collaborate with you to create
                      the app if you have access to a web designer and are
                      prepared to give graphics. The We team would be pleased to
                      assist you with visualising your concept and bringing it
                      to life in the digital sphere, even if all you currently
                      have is a conception or an idea.
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
                      Who will own the intellectual property rights to my App?
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
                      advice and support while you develop the App for your
                      clients since the App is based on your idea, concept, and
                      company, and you retain all rights to it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Start */}
      <secion className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful IoT Mobile app in the
                  market?{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="" className="contact_btn">
                  Contact us{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </secion>
      {/* Contact Section End */}
    </>
  );
};

export default AppleWatch;
