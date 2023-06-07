import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";

const WebFlowDev = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("website_management");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experienced_developers"
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
                <h2>Webflow Development Services</h2>
                <p>
                  The App Ideas is one of the foremost app and web development
                  company. We offer the best development as well as designing
                  services for all types of business categories based on the
                  modern requirements of the users. We are also working on
                  Webflow development for offering the best website development
                  services. If you are planning to launch an online business
                  then feel free to connect with us and get a free quote by
                  experiencing our expertise in web flow development.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Webflow Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Webflow Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Webflow Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Complete Guidance from Designing to Webflow Deployment
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
                      <h4>Webflow Development Services</h4>
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
                      <h4>Webflow web development</h4>
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
                      <h4>Webflow Developer</h4>
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
            <h3>What do we offer in a Webflow Development Company?</h3>
            <p>
              Webflow is highly popular in this present time. This Webflow is a
              responsive website builder which is a cloud-based tool that helps
              in the development website based on the requirements. This makes
              designing and developing a website using a site builder much
              easier and offers various functions to add up to the website. This
              tool offers a good amount of customization which can be done as
              per the client’s requirements and is fully responsive and can be
              compatible with various online platforms.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("website_management")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "website_management" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/website-management.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>Website management</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("custom_theme")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "custom_theme" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/custom-theme.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>Custom theme development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("psd_webflow")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "psd_webflow" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/psd2webflow.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>PSD to Webflow conversion</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("web_flow")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "web_flow" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/webflow-ecommerce.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>Web flow E-commerce</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("easy_integration")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "easy_integration" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/intration.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>Easy Integration</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("website_maintenance")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "website_maintenance" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/what do/maintenance.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Website Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWeOffer === "website_management" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website management</h3>
                    <p className="Title_para">
                      We are offering the best website development services for
                      all types of business categories. Webflow offers
                      responsive features which make the website much more
                      easily accessible by the users. If you are running a
                      business then this is very important for you to launch a
                      website using this web-flow tool.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are experts in
                      providing the best web-flow solution at the best rates. If
                      you are looking for any services then feel free to connect
                      with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "custom_theme" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom theme development</h3>
                    <p className="Title_para">
                      Nowadays, the demand for online platforms is increasing
                      among the users as well as business owners are also
                      converting their businesses into an online platforms
                      because this helps in increasing the user base. Webflow
                      offers the services of making the custom website by drag
                      and drop methods. There are available creative templates
                      and themes for developing a unique website. –
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas is one of the foremost
                      software development company. We have a team of highly
                      skilled web-flow developers who are experts in offering
                      the best solution for all types of business categories
                      website development. If you are looking for their services
                      then feel free to reach us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "psd_webflow" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">PSD to Webflow conversion</h3>
                    <p className="Title_para">
                      If we talk about location-based services then this type of
                      service is also getting highly popular in the market. Many
                      of the businesses are launching online platforms and
                      implementing location-based features to make the services
                      easier to access as well as for a better understanding.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development services. We offer development services for
                      mobile app, web app and E-commerce platform development.
                      We are highly expert in offering a location-based online
                      platform. We help various websites converting to WordPress
                      CMS from their existing platforms and help to optimise
                      existing WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "web_flow" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Web flow E-commerce</h3>
                    <p className="Title_para">
                      Web flow is one of the most demanding and popular software
                      which is used for website development. As we can clearly
                      observe that the number of e-commerce platforms is
                      increasing in the market as per the demand among the
                      users. People are liking the e-commerce platforms as they
                      can access them at any time and at any place.
                    </p>
                    <p className="Title_para">
                      If you are planning to convert or invest in an online
                      platform then it is very important for you to make an
                      investment in Webflow website development for E-commerce
                      platforms. For more details, you can feel free to connect
                      with us and get a free quotation for launching a web-flow
                      e-commerce website.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "easy_integration" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Easy Integration</h3>
                    <p className="Title_para">
                      Websites are considered one of the best methods for online
                      business. Many business owners and startup owners are now
                      making high investments in online platform development as
                      it helps in increasing the sales of the business. WebFlow
                      is one of the best tools which can be used to develop a
                      website by integrating some best features.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is a leading web and app
                      development company. We have a team of highly experienced
                      Webflow developers who are experts in offering the best
                      solutions. We are experts in integrating additional
                      features into the website. Webflow provides the best array
                      of integration options.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "website_maintenance" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Website Maintenance</h3>
                    <p className="Title_para">
                      Website is one of the most popular technology platforms
                      which helps in building the online presence in the market.
                      If you are a business owner and have a website then it is
                      important to maintain it so it can be compatible with
                      multiple devices. In some time periods, it is very
                      important to maintain the website by upgrading the
                      features based on the updated technology.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web-flow development
                      company. We have a team of highly skilled developers as
                      well as designers who are experienced in providing the
                      best services at the best rates. If you are looking for
                      website maintenance services then this is probably the
                      best time to connect with us.
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
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Work-hand/Cyber_Risk.webp")}
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
            <h3>Why choose us for Webflow Development Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experienced_developers")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "experienced_developers" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/experienced-developers.png")}
                      alt="Experience-And-Expertise"
                      className="img-fluid"
                    />
                    <p>Experienced Developers</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("ui_ux")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "ui_ux" && "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/ui-ux.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Best UI/UX</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("ecom_dev")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "ecom_dev" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/ecommerce-development.png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>E-Commerce Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("migration_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "migration_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/migration-support.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Migration Support</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("support_maintanance")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "support_maintanance" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/support-and-maintenance.png")}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("cost")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "cost" && "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Webflow-Dev/why-Choose/affordable-cost.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Affordable Cost</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experienced_developers" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experienced developers</h3>
                    <p className="Title_para">
                      Webflow is one of the popular website development tools
                      which is used for developing the best website for all
                      types of business categories. Experienced developers are
                      highly demanding as they clearly understand the
                      requirements and provide the best solution for website
                      development services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of highly skilled
                      web-flow developers who have years of experience in
                      providing web-flow website development with the best
                      features and functionality. We ensure the quality as well
                      as the performance of the web flow development.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "ui_ux" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Best UI/UX</h3>
                    <p className="Title_para">
                      Having the best design services on a website makes it
                      popular among the users as a better UI and UX attract the
                      customers towards the platforms. The UI/UX must be based
                      on the types of services you are providing. Here we have a
                      team of the highly expert designing team who offer the
                      best services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most demanding software
                      development services. along with the mobile app, we are
                      also highly experienced in developing the website using
                      the web flow tools with customization. We also offer the
                      best design services at an affordable cost, feel free to
                      connect with us and get a free quote.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "ecom_dev" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">E-commerce development</h3>
                    <p className="Title_para">
                      E-commerce platforms are highly popular in this online era
                      as people, as well as business owners, are loving the
                      digital platforms. Users can easily make the purchase
                      through an online platform like a website. As per the
                      increasing demand, online store owners are also making
                      high investments in website development services.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers who are experts in providing the best solution
                      for E-commerce website development using the Webflow tools
                      at the best rates. If you are looking for an E-commerce
                      website development then feel free to connect with us.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "migration_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Migration support</h3>
                    <p className="Title_para">
                      Migration is very important for some services as they need
                      to convert the website into Webflow website services. Here
                      at our company, we are also providing migration services
                      as we can convert your current website into a web flow for
                      further requirements at an affordable cost.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular web-flow development
                      company. We have years of experience in providing the
                      proper solution as per the need of the customers. You can
                      connect with us for any kind of migration services we will
                      understand your requirements and provide you with the
                      service accordingly
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "support_maintanance" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and maintenance</h3>
                    <p className="Title_para">
                      Every online platform required support and maintenance
                      services after its development of the online platforms. If
                      you are planning to launch a website for your business
                      categories then this is probably the best time for you to
                      launch a website using web-flow tools. We offer support as
                      well as maintenance to our clients.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly popular software
                      development company. We are highly experts in providing
                      the best solution for web flow websites with advanced
                      features and functionality. After deployment, we also
                      offer support and maintenance services to our clients.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "cost" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Affordable cost</h3>
                    <p className="Title_para">
                      The demand for the website is increasing in the market as
                      it makes the work easier for the users as well as for the
                      business owners. The online platforms make the work much
                      easier for the people to get the services at their
                      doorstep. We offer the services at an affordable cost.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled team
                      who will provide the best services at the best rates. We
                      understand the requirements and then provide the proper
                      costing as well as a timeline. We offer the services at
                      the best price. Feel free to reach us and get a quote for
                      your idea.
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
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Work-hand/certificate-1_page-0001-1200x849.jpg")}
                    style={{
                      height: "80%",
                      width: "80%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Angular-Dev/Work-hand/certificate_page-0001-1200x849.jpg")}
                    style={{
                      height: "80%",
                      width: "80%",
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Work Hand Done slider End  */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to launch a Successful Webflow Web in the
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

export default WebFlowDev;
