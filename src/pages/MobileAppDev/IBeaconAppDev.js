import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../../components/Workdone/Work";
import Robust from "../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Robust Portfolio.svg";
import TestiMonial from "../../components/Testimonial/TestiMonial";

const IBeaconAppDev = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>iBeacon App Development Company</h2>
                <p>
                  The App Ideas is one of the leading iBeacon development
                  company with years of expertise and proven experience. We have
                  a team of highly proficient developers who will offer
                  successful iBeacon app development services along with
                  customization. Many people are now launching their iBeacon app
                  for your business for its growth and success.
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
            <h3>Our iBeacon App Development Company</h3>
            <p>
              iBeacon stands for the latest and most widely acclaimed location
              tracking technology that is used across shopping malls, brand
              stores and many establishments. At The App Ideas, we build the
              most sophisticated and future-ready iBeacon apps for a wide
              variety of business niches. We are an acclaimed iBeacon app
              development company with solid expertise with Bluetooth Low Energy
              (BLE) technology and several successful iBeacon apps to our
              credit.
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
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Our iBeacon/Vehicle-tracking.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      Vehicle <br /> Tracking
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Our iBeacon/Documents-Transfer.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Document Transfer</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Our iBeacon/Location-Based-Services.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Location-Based Services</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Our iBeacon/Mobile-Payments.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>
                      Mobile <br />
                      Payments
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Our iBeacon/Location-Based-Promotions.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Location-Based Promotions</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Our iBeacon/Support-and-Maintenance..png")}
                      alt="Android-Support-And-Maintenance"
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
                  <h3 className="Title_heading">Vehicle tracking.</h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading web and app development
                    company. We have a team of highly skilled team of developers
                    who are highly expert in providing the best iBeacon app
                    solution with advanced features and design which can help in
                    accessing the services very conveniently for the users.
                  </p>
                  <p className="Title_para">
                    iBeacon technology is getting popular in this modern time,
                    Many of the businesses, entrepreneurs and startups owners
                    are integrating this technology for location tracking
                    features.iBeacons are great for tracking on-road vehicles
                    and transport systems. We utilize iBeacons for building
                    sophisticated vehicle tracking apps.
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
            <h3>Why You Should Choose Us for iPhone App Development?</h3>
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
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Why Should/Experience-and-Expertise.png")}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise.</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={Robust}
                      alt="Robust-Portfolio"
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
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Why Should/agile.png")}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Why Should/Innovative-Ideas.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>
                      Innovative <br />
                      Ideas
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Why Should/Transparent-Development-Process.png")}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Transparent Process</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/MobileAppDev/ibeacon App/Why Should/Competitive-pricing-1.png")}
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
                    The App Ideas is one of the leading web and app development
                    company. We have a group of highly talented developers who
                    are experts in offering the best iBeacon App development.
                    Many business owners are now converting these services
                    towards mobile apps for increasing user engagement.
                  </p>
                  <p className="Title_para">
                    The reason to choose The App Ideas is that we have a group
                    of expert and dedicated developers with years of experience
                    in deploying better quality projects. We boast of years of
                    frontline experience in the iBeacon app development and have
                    the expertise to build any challenging app with the
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

      {/* FAQ section start */}
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
                      What use do iBeacons serve?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      The position of the user may be determined by iBeacon App
                      Development using Bluetooth Low Energy (BLE) technology.
                      To determine if the customer is physically near to the
                      shop, this might be employed. After that, it notifies
                      customers through push notifications sent to their mobile
                      devices about deals, new goods, and other information.
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
                      What is the farthest point that beacons can travel?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      A beacon may be seen from a maximum of 70 metres away.
                      Nevertheless, there are restrictions because to
                      environmental interference, physical obstructions, and
                      signal disruption brought on by natural phenomena. These
                      items are all significant. The range’s loudness is
                      adjustable on seven distinct levels.
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
                      Does iBeacon functionality need an app?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      An ibeacon may still activate the appropriate app even if
                      the user’s iOS device isn’t currently running it.
                      Ibeacons, however, are only compatible with Apple’s iOS
                      and not Android.
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
                      How can iBeacon help those who are blind?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      With tools like text-to-speech and voice recognition,
                      iBeacon App Development makes it easier for those who are
                      blind to communicate using a smartphone. These criteria
                      have been reflected in Siri, and Bluetooth braille
                      accessibility is now available.
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
                      What distinguishes iBeacons from Beacons?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      iBeacons may show both the numbers and the range, in
                      contrast to Beacons, which only display the Unique
                      Identifier (UIN). As iBeacons work with Apple’s iOS, they
                      are a good substitute.
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
                      What was the primary issue in creating the iBeacon app?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The most difficult component is overcoming external
                      interference from the surroundings and radio
                      transmissions. These problems, along with many others, are
                      managed and resolved by the iOS Software Development Kit
                      (SDK).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section End */}
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful iBeacon Mobile app in
                  the market?{" "}
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
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default IBeaconAppDev;
