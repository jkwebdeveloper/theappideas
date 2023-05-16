import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import Experience from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Competitive price.svg";
import Robust from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Robust Portfolio.svg";
import Lifecycle from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Full Lifecycle support.svg";
import Agile from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Agile Development.svg";
import Fast from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Fast-paced development.svg";
import Competitive from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Competitive price.svg";

import TestiMonial from "../../components/Testimonial/TestiMonial";
import FAQ from "../../components/FAQ";
import WorkHand from "../../components/WorkHand";

const IpadAppDev = () => {
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
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>IPad Enterprise App</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      Ipad Media <br /> Apps
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      IPad Game <br /> App
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>IPad AR & VR Apps</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      IPad Chat <br />
                      Apps
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>IPad Art & Design Apps</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">iPad Enterprise App</h3>
                  <p className="Title_para">
                    Nowadays many business owners, startups or enterprise owners
                    are now shifting their business towards online platforms.
                    Digitilizing their business can help owners to reach as many
                    people as they can. Along with that, some of the online
                    platforms can also help in managing the overall business
                    through a single screen.
                  </p>
                  <p className="Title_para">
                    The App Ideas is one of the leading web and app development
                    company. We have a team of highly skilled and expert
                    developers who will offer the best iPad app development
                    services with unique design and the best rates. We develop
                    custom iPad mobile apps for a variety of business niches and
                    categories.
                  </p>
                </div>
              </div>
            </div>
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
            <h3>Why Choose App Ideas For IPad App Development?</h3>
            <p>
              At the App Ideas over the years we built a standout reputation for
              outstanding Android app development service by producing an array
              of widely benchmarked apps flaunting sophisticated user experience
              and visually enticing UI. Our Android app development service over
              the years contributed to the commercial success of many businesses
              and helped them carve out a competitive mobile presence. Let’s
              mention the key reasons to choose us for Android app development.
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
                      src={Experience}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise.</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={Robust}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={Lifecycle}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Full Lifecycle Support</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={Agile}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={Fast}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Fast-Paced Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
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
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Experience and Expertise.</h3>
                  <p className="Title_para">
                    We are from The App Ideas is a leading web and app
                    development company. We offer website development services
                    as well as the best iPad App development service which will
                    helps businesses to grow and increase the engagement of the
                    users towards your services.
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
                Are you planning to launch a Successful iPad Mobile app in the market?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="/" className="contact_btn">
                  Contact us{" "}
                </a>
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
