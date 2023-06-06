import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const DrupalDev = () => {
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
                <h2>Drupal Web Development Company</h2>
                <p>
                  We are here at The App Ideas which is one of the leading web
                  and app development company. We have years of experience in
                  offering the best software services for all kinds of business
                  niches at the best rates. We have a team of a highly skilled
                  and expert team of Drupal developers who will offer
                  future-ready solutions. If you are planning on converting your
                  business into a Drupal platform then feel free to reach us.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Drupal Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Food Delivery App Development
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
                        src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Development-Services.webp")}
                        alt="Drupal Web Development Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Drupal Web Development Company</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Website-Development.webp")}
                        alt="Drupal Web Development Services"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Drupal Web Development Services</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Joomla-Expert.webp")}
                        alt="Drupal Website Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Drupal Website Development</h4>
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
            <h3>What Do We provide in Drupal Web Development Company?</h3>
            <p>
              Drupal is the CMS platform that empowers more than a million
              websites comprising mission-critical administrative business,
              business websites, blogs and e-commerce stores. Drupal is widely
              acclaimed as a CMS for unmatched ease of use, robust feature set
              and clean interface. Our Drupal development experience and
              expertise date back to more than a decade before when the CMS was
              first conceptualised and put into practice.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="#"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Custom-Web-Development.png")}
                      alt="Drupal Custom web development"
                      className="img-fluid"
                    />
                    <p>Drupal Custom web development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Custom-Web-Development.png")}
                      alt="Drupal Template and Theme Development"
                      className="img-fluid"
                    />
                    <p>Theme & Templates Service</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Custom-Plugin-Development.png")}
                      alt=" Custom Plugin Development"
                      className="img-fluid"
                    />
                    <p>Custom Plugin Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Mobile-App-Conversion-1.png")}
                      alt="App Conversion"
                      className="img-fluid"
                    />
                    <p>App Conversion</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Drupal-Website-Redesign.png")}
                      alt="Drupal Website Redesign"
                      className="img-fluid"
                    />
                    <p>Drupal Website Redesign</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/What-Do/Strong-Support.png")}
                      alt="Drupal Support & Maintenance"
                      className="img-fluid"
                    />
                    <p>Drupal Support & Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Drupal Custom web development
                  </h3>
                  <p className="Title_para">
                    Drupal is a free and open-source web app development
                    platform or we can also say it is one of the successful
                    frameworks for successful E-commerce web development
                    services. Nowadays many business owners and startups owners
                    are making investments in digitalizing their business for
                    making the business successful.
                  </p>
                  <p className="Title_para">
                    We are from The App Ideas which is one of the leading web
                    and app development company. We have a team of highly
                    skilled Drupal developers who are proficient in delivering
                    successful E-commerce platforms to clients. We build highly
                    user-centric custom websites using the Drupal CMS Solution
                    and ensure consistent traffic and user engagement.
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
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>
              Why Opt for the App Ideas for Drupal Web Development Company?
            </h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="#"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience and Expertise"
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/MagentoDev/why-Choose/robust-portfolio.png")}
                      alt="Strong Portfolio"
                      className="img-fluid"
                    />
                    <p>Strong Portfolio</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Industry-Leading-Team.png")}
                      alt="Industry Leading Team"
                      className="img-fluid"
                    />
                    <p>Industry Leading Team</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/Agile-Development-1.png")}
                      alt="Agile Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/DrupalDev/What-Do/Time-Bound-Development..png")}
                      alt="Adhering to strict Project Deadlines"
                      className="img-fluid"
                    />
                    <p>Adhering to strict Project Deadlines </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/JoomlaDev/Why-Choose/competitive-pricing.png")}
                      alt="Competitive Pricing"
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
                  <h3 className="Title_heading">Experience and Expertise</h3>
                  <p className="Title_para">
                    If we talk about software development services then this
                    field is booming in the market. You own a store and are
                    planning on converting it into a Website then this is
                    probably the best time. Before hiring the software services
                    it is very important for you to check their Experience and
                    expertise.
                  </p>
                  <p className="Title_para">
                    We are from The App Ideas, which is one of the leading web
                    and app development company. We have a team of highly
                    experts Drupal developers who are experts in offering the
                    best solutions. We are into Drupal web development for more
                    than a decade and we are widely acclaimed as an
                    expertise-driven Drupal development company with solid
                    experience.
                  </p>
                </div>
              </div>
            </div>
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
                  Are you planning to launch a Successful Drupal website in the
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

export default DrupalDev;
