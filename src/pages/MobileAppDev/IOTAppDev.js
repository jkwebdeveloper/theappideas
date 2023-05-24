import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../../components/Workdone/Work";
import TestiMonial from "../../components/Testimonial/TestiMonial";
import FAQ from "../../components/FAQ";

const IOTAppDev = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Internet of things (IOT) App Development</h2>
                <p>
                  We are at The App Ideas, which is one of the leading web and
                  app development company. We have a group of people who are
                  experts in offering the best software solution for each kind
                  of category. We are skilled in offering the best IoT app
                  development services as per the client’s requirements and with
                  advanced features integration along with unique designing
                  services.
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
                      Best iBeacon App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your iBeacon App Development
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
                      <h4>IBeacon App Development Company</h4>
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
                      <h4>IBeacon App Development Services</h4>
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
                      <h4>IBeacon Application Developer</h4>
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
            <h3>Internet Of Things (IoT) App Development Company India</h3>
            <p>
              As connected gadgets are continuously making our life simple
              whether, at home or workplace, mobile apps meant to connect these
              devices are increasingly becoming popular. A smart home app to
              control your home appliances hugs many of our phone screens now.
              The demand for IoT devices is getting popular day by day, many
              people are now integrating the smart devices services into their
              homes, offices and more.
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
                      src={require("../../assets/images/MobileAppDev/IOT App/Internet Of Things/Connected-Cars.png")}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>
                      Connected <br />
                      Cars
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png")}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>
                      Industrial <br />
                      Internet
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png")}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>
                      Smart <br />
                      Cities
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png")}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>
                      IoT In <br />
                      Agriculture
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png")}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>
                      Smart <br />
                      Retail
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Internet Of Things/Industrial-Internet.png")}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>
                      IoT In <br />
                      Healthcare
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Connected cars</h3>
                  <p className="Title_para">
                    The popularity of connected cars are getting popular day by
                    day, Nowadays many of the people are converting their car
                    into smart cars to access the advanced features which smart
                    cars are offering in this present time. Using such services
                    can make the services more convenient and easy to use.
                  </p>
                  <p className="Title_para">
                    Here we are at The App Ideas which is one of the most
                    popular software development company. We are also offering
                    the best IoT app development services at the best possible
                    rates. Our developers can be skilled to deliver the
                    best-connected car app based on the current trends.
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
            <h3>Why Choose us for IoT app development?</h3>
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
                      src={require("../../assets/images/MobileAppDev/IOT App/Why Choose/Expert-Developers.png")}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Expert developers</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Why Choose/robust-portfolio.png")}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>
                      Great <br />
                      Portfolio
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Why Choose/Performance-Driven..png")}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Performance Driven.</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/IOT App/Why Choose/Strong-Support.png")}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>
                      Strong <br />
                      Support
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Expert developers</h3>
                  <p className="Title_para">
                    The demand for the IoT devices or we can say smart devices
                    are getting popular day by day. Many people are now
                    accepting technology and implementing it into day to day
                    life. The demand for smart devices, as well as smart
                    applications, are also raising because this will provide the
                    proper comfort and convenience of accessing all the
                    services.{" "}
                  </p>
                  <p className="Title_para">
                    The App Ideas is one of the most popular software
                    development company. We have a group of highly talented
                    people who are experts in offering the online platform’s
                    solutions like Mobile app development, web app development,
                    website development and IoT app development at the best
                    rates. An experienced, skilled and creative team of
                    developers and designers with a proven track record in
                    building award-winning mobile apps for both IOS and Android.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

      <FAQ/>

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

export default IOTAppDev;
