import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";

import CustomWordPress from "../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/PHP-Web-Development.png";
import WordPressWebsite from "../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/PHP-Development-Services.png";
import Developer from "../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/PHP-Expert.png";

const PHPDev = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>PHP Development Company</h2>
                <p>
                  The App Ideas is one of the foremost web and app development
                  company. We are highly skilled, expert and experienced in
                  offering awesome PHP web app development services which can be
                  very useful and effective in increasing business profits. If
                  you are planning to launch PHP web platforms in the market
                  then this is the right time to make an investment. Feel free
                  to reach us and get a free quotation.
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
                      Best PHP Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your PHP Development
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
                        src={CustomWordPress}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>PHP Web Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={WordPressWebsite}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>PHP Development Services</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={Developer}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>PHP Expert</h4>
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
            <h3>What do we offer in PHP Development Company?</h3>
            <p>
              PHP is regarded to be the time tested programming language
              powering millions of websites and CMS platforms on the web. The
              popularity of PHP is continuously on the rise thanks to the ease
              of coding, scopes of customisation, lean coding, reliable
              architecture and scalability. At The App Ideas, we use PHP for
              building the most versatile, flexible and user-optimised websites
              across the niches. Having more than a decade of experience in PHP
              development we have built several award-winning and commercially
              successful PHP websites.
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
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/ui-ux.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Customize Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/cms-icon1-1.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>PHP Based CMS Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/icons8-iphone-x-72-1.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>PHP Framework Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Mechanism-gears-1.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>PHP Mobile Conversion</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Group-184.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Theme & Plugins Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/what do/Mask-Group.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>PHP Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Custom PHP Web Development</h3>
                  <p className="Title_para">
                    The demand for online or digital platforms is increasing day
                    by day. Many business owners and entrepreneurs are now
                    converting their offline businesses to online businesses for
                    offering a better user experience to their customers. PHP
                    technology is a highly popular and demanding technology.
                  </p>
                  <p className="Title_para">
                    The App Ideas is the most popular PHP web development
                    company. We have a team of highly skilled PHP developers who
                    has years of experience in developing future-ready PHP web
                    development services. By utilizing the versatility and
                    flexibility of PHP language we build a richly layered custom
                    website for business niches across the spectrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Work Hand Done slider start  */}
      <section className="work_slider_section py-5">
        <div className="container">
          <div className="work-heading">
            <h2>Work we had done</h2>
          </div>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={"horizontal"}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            //   style={{ padding: "2.5rem 0" }}
          >
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-18.webp")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-19.png")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-20.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-21.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-22.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-23.png")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-24.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-26.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/Slider/Group-28.webp")}
                    style={{
                      width: "100%",
                      // boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                      // borderRadius: "10px",
                      // marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Work Hand Done slider End  */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose The App Ideas for PHP Development Company?</h3>
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
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Expertise and Experience</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/PHP-Dev/why-Choose/icon.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Unmatched Performance</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Competitive Rate</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Time-Bound-Development..png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Adhering To Strict Deadlines</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Expertise and Experience.</h3>
                  <p className="Title_para">
                    We are from The App Ideas which is one of the foremost web
                    and app development company. We have a group of highly
                    skilled developers who are experienced in providing the best
                    web development services. Many business owners and
                    entrepreneurs are converting their businesses into web
                    platforms.
                  </p>
                  <p className="Title_para">
                    The main reason behind choosing The App Ideas is that we
                    have years of experience in deploying the best business
                    solution which can drive your business to the peak of the
                    success. We initially understand the requirements then start
                    the development. We flaunt a highly experienced team of
                    WordPress developers with proven expertise in building the
                    most sophisticated WordPress websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful WordPress Web in the
                  market?
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

export default PHPDev;
