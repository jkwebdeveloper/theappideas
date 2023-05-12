import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import background from "../../../assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../assets/images/Home-our-services/download (1).png";


const HireIOSDev = () => {
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
                <h2>Software development company</h2>
                <p>
                  We at The App Ideas has a group of experienced developers as
                  well as designers who are proficient in developing software
                  that can be helpful for the employees, customers and business
                  owners. We have worked on various software development
                  services like developing CRM, software management and also in
                  custom software development services which can be very
                  obliging for the users. For more details, feel free to connect
                  with us and get a free quotation for a victorious Software
                  service.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Software Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Software Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Software Development
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
                        src={require("../../../assets/images/HIRE US/IPhone-App-Development-Company.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>IPhone App Development Company</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/IPhone-App-Development-Service.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>IPhone App Development Service</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/IPhone-Application-Development.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>IPhone Application Development</h4>
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
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in iPhone App Development</h3>
            <p>
              The App Ideas is an{" "}
              <a
                href="https://theappideas.com/iphone-app-development-company/"
                className="Title_Color"
                target="_blank"
              >
                <b>iPhone app development company</b>
              </a>{" "}
              capable to create most sophisticated, future ready iOS apps that
              can instantly give your business brand a recognition through a
              popular App Store presence. Over the years, we have produced a
              staggering range of most sophisticated iOS apps across wide
              variety of business niches. When it comes to leveraging the unique
              and standalone iOS features and benefits down to the latest iOS
              version, our expertise stands apart from the rest.
            </p>
            <p>
              Being perfectly aware of all these competitive advantages of iOS
              we at The App Ideas give utmost focus on the platform. We boast of
              a highly experienced team of iOS developers who can transform your
              mobile presence into successful iPhone apps.
            </p>
            <div className="text-center">
              <a href="#" className="contact_btn_new">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* Work Head Section Start */}
        <section className="work_head_section py-5">
          <div className="container">
            <div className="Title">
              <h3>Work we had done</h3>
            </div>
            <div className="row mt-5">
              <div className="col-12 px-0 mb-4">
                <div data-aos="fade-up" className="work_head_box">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="row w-100">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="work_head_lft">
                        <a href="#" className="work_head_box_link">
                          <h2>Covid</h2>
                        </a>
                        <ul className="ps-0">
                          <a href="#" className="work_head_box_link"></a>
                          <li>
                            <a href="#" className="work_head_box_link">
                              {" "}
                            </a>
                            <a href="#" className="work_head_item">
                              Android App
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              IOS
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              Mobile Application Development
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                      <div className="work_head_rht">
                        <img
                          data-aos="fade-left"
                          src={require("../../../assets/images/Portfolio/Device-Image-one.webp")}
                          alt="Device-Image-one"
                          className="img-fluid"
                          // Device-Image-one.webp
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-0 mb-4">
                <div
                  data-aos="fade-up"
                  className="work_head_box work_head_box_one"
                >
                  <a href="#" className="work_head_box_link"></a>
                  <div className="row w-100">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="work_head_lft">
                        <a href="#" className="work_head_box_link">
                          <h2>Paddock </h2>
                        </a>
                        <ul className="ps-0">
                          <a href="#" className="work_head_box_link"></a>
                          <li>
                            <a href="#" className="work_head_box_link">
                              {" "}
                            </a>
                            <a href="#" className="work_head_item">
                              Android App
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              Flutter
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              IOS
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              Mobile Application Development
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                      <div className="work_head_rht">
                        <img
                          data-aos="fade-left"
                          src={require("../../../assets/images/Portfolio/Device-Image-two.webp")}
                          alt="Device-Image-two"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 px-0 mb-4">
                <div
                  data-aos="fade-up"
                  className="work_head_box work_head_box_two"
                >
                  <a href="#" className="work_head_box_link"></a>
                  <div className="row w-100">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="work_head_lft">
                        <a href="#" className="work_head_box_link">
                          <h2>Food Wastage </h2>
                        </a>
                        <ul className="ps-0">
                          <a href="#" className="work_head_box_link"></a>
                          <li>
                            <a href="#" className="work_head_box_link">
                              {" "}
                            </a>
                            <a href="#" className="work_head_item">
                              Android App
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              IOS
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="#" className="work_head_item">
                              Mobile Application Development
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                      <div className="work_head_rht">
                        <img
                          data-aos="fade-left"
                          src={require("../../../assets/images/Portfolio/Device-Image-three.webp")}
                          alt="Device-Image-three"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Work Head Section End */}
      </>

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              HIRE IOS DEVELOPERS FROM THE APP IDEAS FOR VARIETY OF REQUIREMENTS
            </h2>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/WEB DEVELOPMENT.gif")}
                    alt="Web Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">CUSTOM IPHONE APP DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Our iOS app developers have the expertise and experience to
                  deliver the best of iOS platform to ensure optimum native
                  capabilities with your iPhone mobile app.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/E-COMMERCE DEVELOPMENT.gif")}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">IOS GAME DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Our iOS app developers have the expertise and experience to
                  deliver the best of iOS platform to ensure optimum native
                  capabilities with your iPhone mobile app.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/WEB DEVELOPMENT (1).gif")}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">UPGRADE AND SUPPORT</a>
                </h5>
                <div className="text">
                  We also offer experienced IOS developers who can address
                  issues from time to time and give facelift to your apps with
                  timely and new updates and upgrades.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/INTERNET OF THINGS.gif")}
                    alt="INTERNET OF THING"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">CUSTOM WIDGET DEVELOPMENT</a>
                </h5>
                <div className="text">
                  The developers at The App Ideas can also build custom widgets
                  to leverage unique user experience for your new IOS app.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/GAME DEVELOPMENT.gif")}
                    alt="GAME DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">UI/UX DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We boast of a team of expert IOS app developers capable to
                  design and build most sophisticated and future ready UI and UX
                  for a wide variety of IOS apps.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/Hire Developer.gif")}
                    alt="Hire Developer"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">IOS WEARABLE APP DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Our iOS app developers also have the necessary expertise and
                  skills to build sophisticated Apple Watch apps and connected
                  apps for various IOT gadgets.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two py-5">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHY HIRE iPHONE APP DEVELOPERS FROM US?</h2>
            <p>
              We have established our reputation as one of the leading iPhone
              app developers with a wide spectrum of{" "}
              <a href="/" className="Title_Color" target="_blank">
                <b>app development</b>
              </a>{" "}
              projects across the niches. Here are some of the key reasons to
              hire iPhone app developers from us.
            </p>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/WEB DEVELOPMENT.gif")}
                    alt="Web Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">EXPERIENCE AND EXPERTISE</a>
                </h5>
                <div className="text">
                  We boast of a robust team of dedicated iOS app developers with
                  proven track record and several years of iOS development
                  experience.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/E-COMMERCE DEVELOPMENT.gif")}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">STRONG PORTFOLIO</a>
                </h5>
                <div className="text">
                  We have a strong portfolio of several successful iOS apps
                  representing various niches and built for different devices
                  including latest iPhone devices and Apple Watches.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/WEB DEVELOPMENT (1).gif")}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">UNIQUE UI AND UX</a>
                </h5>
                <div className="text">
                  Our iOS developers will guarantee delivering unique and
                  engaging UI and UX for apps of all niches.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/INTERNET OF THINGS.gif")}
                    alt="INTERNET OF THING"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">FASTER TIME TO MARKET</a>
                </h5>
                <div className="text">
                  Thanks to agile development process coupled up with concurrent
                  testing we ensure quick development time without compromising
                  on the quality.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={require("../../../assets/images/Home-our-services/GAME DEVELOPMENT.gif")}
                    alt="GAME DEVELOPMENT"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">COMPETITIVE RATE</a>
                </h5>
                <div className="text">
                  We offer one of the most competitive rate for most
                  sophisticated and quality-focused iOS app development service
                  across a wide variety of business niches.
                </div>
                {/* <a href="/services" className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p>
                  Do you want to know more about our iPhone app developers and
                  their expertise? Feel free to contact us.
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
  );
};

export default HireIOSDev;
