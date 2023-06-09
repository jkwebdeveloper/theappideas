import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import CustomWordPress from "../../../assets/images/SERVICES/Software development/dotnet-dev/dotnetnuke-development-company.webp";
import WordPressWebsite from "../../../assets/images/SERVICES/Software development/dotnet-dev/dotnetnuke-custom-module-developmen.webp";
import Developer from "../../../assets/images/SERVICES/Software development/dotnet-dev/dotnetnuke-development-services.webp";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const GraphicsDesign = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("logo_designing");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "expertise_experience"
  );

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
                <h2>Best Graphic Design Company</h2>
                <p>
                  The App Ideas is one of the leading web and app development
                  company. Along with the development services, we are also
                  proficient in providing the best graphic designing services
                  based on the business and requirements of the modern time. If
                  you have an online platform or planning to launch an online
                  platform, then it is very important for you to focus on
                  Graphic designing services and offer the foremost designing
                  service.
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
                      Best Graphic design Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Graphic design Development
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
                      <h4>Graphic Design</h4>
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
                      <h4>Graphic Design Services</h4>
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
                      <h4>Professional Graphic Designer</h4>
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
            <h3>What do we offer in a Graphic Design Company?</h3>
            <p>
              Graphic design is very important in all kinds of business online
              platforms as it helps in attracting a high number of users.
              Graphic designers are a type of tool that is very crucial because
              it helps in enhancing the way of communicating with the users
              using your online platforms screen. This is one of the best
              methods of conveying your ideas directly to the users or the
              customers in a very effective way. All kinds of business solutions
              are now implementing better thoughts on designing their services
              to give the best user experience.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("logo_designing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "logo_designing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/what-do/logo-design.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Logo Designing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("web_ui_ux")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "web_ui_ux" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/what-do/web-ui-ux.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Web UI/UX Designing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("landing_page")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "landing_page" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/what-do/landing-page.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Landing Page Designing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("brouchure_design")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "brouchure_design" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/what-do/brochure-design.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Brochure Design</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("brand_identify")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "brand_identify" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/what-do/brand-identity.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Brand Identity</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("business_card")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "business_card" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/what-do/business-card.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Business Card</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWeOffer === "logo_designing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Logo Designing</h3>
                    <p className="Title_para">
                      Logo plays a vital role in the branding of any business or
                      startup. Nowadays, there are a high number of people are
                      investing in online business because of the high demand
                      for online services. There are thousands of online
                      businesses available, so it is very important to work on
                      logo design services that completely represent your
                      business in the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development services. Along with the software development
                      services, we also offer the best graphic designing
                      services for all kinds of business categories. Our Logo
                      design experts are highly proficient in providing the best
                      logo designing services that reflect your services or
                      brands.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "web_ui_ux" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web UI/UX Designing</h3>
                    <p className="Title_para">
                      UI/UX designing services are highly popular in this
                      present time. As per the increasing demand for online
                      services, Web designing services is also at a peak. If you
                      are a web designing owner then it is very important for
                      you to update your online services based on the new
                      technology.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular Graphic
                      Designing services. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      providing the best services at the best rates. If you are
                      planning to develop a web app or looking for a skilled web
                      designers group then feel free to connect with us and get
                      a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "landing_page" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Landing Page Designing</h3>
                    <p className="Title_para">
                      Landing Page business plays a vital role in the success of
                      any online business solution. In this present time, the
                      demand for an online solution is increasing because people
                      are now more inclined towards online platforms because it
                      offers the convenience of accessing the services. A
                      landing page is one of the best methods for keeping
                      engaging your client in your services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a team of highly skilled team of
                      designers who are experienced in providing the best
                      landing page services for all types of business. We are
                      highly expertise in analysing the business as well as the
                      modern trend to offer the leading landing page development
                      service.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "brouchure_design" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Brochure design</h3>
                    <p className="Title_para">
                      The brochure is considered as an Old method of doing the
                      advertising in the market, but still, through the digital
                      brochure, you can attract a high number of users towards
                      your services. If you are planning to invest in a business
                      or already have a business then for promotion you can plan
                      to develop the best brochure based on your services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We offer the services like mobile app
                      development, web app development, website development as
                      well as Graphic designing services at the best possible
                      rates. We offer graphic designing services that are unique
                      and which catch the attention of the users as well as let
                      them know about your service.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "brand_identify" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Brand Identity</h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms is highly
                      increasing in the market. People are more inclined towards
                      online platforms because they offer the convenience of
                      accessing the services. Due to the demand for online
                      platforms, there is high competition in the market. So if
                      you are planning to launch a business or you are already
                      running a business then it is very important to build up a
                      Brand Identity.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. We have a team of highly skilled
                      developers who are proficient in providing the best
                      Graphic designing services at the best possible rates. We
                      provide a modern design that can help your business to
                      create a brand identity in the market.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWeOffer === "business_card" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Business Card</h3>
                    <p className="Title_para">
                      Many Entrepreneurs and business owners are now planning to
                      launch a software development service in the market as it
                      helps in increasing the sales rate of the business. If you
                      are one of them, then you must be familiar with the
                      business card term. This business card can help you to
                      make people aware of your business. Digital business cards
                      are highly popular in this present time.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost software development
                      company. We have a team of highly experienced designers or
                      developers who are experts in providing graphic designing
                      services. We are also proficient in offering the foremost
                      business cards design based on the current market
                      requirements at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                    src={require("../../../assets/images/SERVICES/Designing/Graphic-design/work-had/1-2.webp")}
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
                    src={require("../../../assets/images/SERVICES/Designing/Graphic-design/work-had/2-1.webp")}
                    style={{
                      width: "100%",
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
            <h3>Why choose us for Graphic Design Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("expertise_experience")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "expertise_experience" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Experience-And-Expertise-1.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Expertise and Experience</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("strong_portfolio")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "strong_portfolio" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/why-choose/portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Strong Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Agile-Development-1.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Agile Methodology</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("on_time_delivery")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "on_time_delivery" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Designing/Graphic-design/why-choose/time-delivery.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>On-Time Delivery</p>
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
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("support_maintenance")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "support_maintenance" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Software development/asp-net-dev/why-choose/6-9.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "expertise_experience" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Expertise and Experience.</h3>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the foremost web
                      and app development company. We have a group of highly
                      skilled developers who are experienced in providing the
                      best web development services. Many business owners and
                      entrepreneurs are converting their businesses into web
                      platforms.
                    </p>
                    <p className="Title_para">
                      The main reason behind choosing The App Ideas is that we
                      have years of experience in deploying the best business
                      solution which can drive your business to the peak of the
                      success. We initially understand the requirements then
                      start the development. We flaunt a highly experienced team
                      of WordPress developers with proven expertise in building
                      the most sophisticated WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "agile" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile methodology</h3>
                    <p className="Title_para">
                      Are you thinking of redesigning your online platforms?
                      There are millions of mobile apps and web apps available
                      in the market with similar ideas. The only thing which can
                      make the difference in the various online solution is the
                      designing or the graphic designing services. It is very
                      important to search for the best graphic design service.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular software
                      development company. We are proficient in providing the
                      best services for all kinds of online platforms like web
                      app development, mobile app development, web designing as
                      well as graphic designing service. We strictly follow the
                      agile methodology for the development of the online
                      platform and also the client approval for that.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive pricing</h3>
                    <p className="Title_para">
                      In this present time, people are more inclined towards
                      online platforms because it offers easy accessibility for
                      the services. Many entrepreneurs and startup owners are
                      now planning and investing in some of the best ideas which
                      can help in increasing the sales of the business. It is
                      quite important for you to search for the best firm which
                      can offer the best rates for graphic design. .
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We Have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best graphic designing services. We have
                      worked on various graphic designing projects and offer
                      unique services at a competitive price.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "strong_portfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Strong Portfolio</h3>
                    <p className="Title_para">
                      Are you planning to hire an expert graphic designing
                      agency for your Mobile app? If yes, then you are at the
                      right place. Here we have years of experience in providing
                      the best graphic designing services according to the
                      business requirements. Before hiring any agency it is very
                      important to check their portfolio before hiring any
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost graphic designing
                      services. We have a team of highly skilled graphic
                      designers who are highly skilled in providing the best
                      services for all kinds of business niches. To check our
                      expertise in graphic designing, you can check out our
                      strong portfolio of graphic designing services for the web
                      app as well as for the mobile app.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "on_time_delivery" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">On-time Delivery</h3>
                    <p className="Title_para">
                      The demand for the online solution is increasing in the
                      market because it is very easy to manage as well as
                      provide the service online to the users. If you are also
                      planning to launch an online platform then it is very
                      important for you to also provide the best UI/UX design to
                      enhance the platform user.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the best IT services providers. We
                      offer all kinds of services like development of the app
                      and web platforms, Digital marketing services and Graphic
                      design services. We first analyse the requirements then we
                      offer the quotation as well as the timeline of completing
                      these services. We deliver the project on the given
                      timeline by testing the overall projects.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "support_maintenance" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance</h3>
                    <p className="Title_para">
                      Are you thinking of launching an online platform in the
                      market? If yes, then this is probably the best time for
                      you to connect with us and discuss your requirements to
                      get a free quotation. Along with the development of the
                      online platforms, it is very important for you to also
                      take care of the designing services. Along with these
                      services, it is very important to have maintenance of your
                      platforms from time to time.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best solutions for all kinds of business
                      niches. Along with that, we also provide support and
                      maintenance services to our clients and it’s free for 3
                      months. Feel free to connect with us and get a free
                      quotation for a graphic designing service.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
                  Are you planning to launch a Successful Graphic Designing
                  Company in the market?
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

export default GraphicsDesign;
