import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

import background from "../../../assets/images/Home-our-services/bg-download.svg";
import background1 from "../../../assets/images/Home-our-services/download (1).png";
import TestiMonial from "../../../components/Testimonial/TestiMonial";

import SEO from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/SEO FRIENDLY.svg";
import GAME from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/IOS GAME DEVELOPMENT.svg";
import LOWER from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/LOWER LEARNING CURVE.svg";
import HIGHLY from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/HIGHLY RESPONSIVE.svg";
import FASTER from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/FASTER TIME TO MARKET.svg";
import Wearable from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/1/IOS Wearable App Development.svg";

import Expertise from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/EXPERIENCE AND EXPERTISE.svg";
import ROBUST from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/Robust Portfolio.svg";
import Implement from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/On-Time Deployment.svg";
import Affordable from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/MOST COMPETITIVE PRICING.svg";
import Time from "../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/2/SEO FRIENDLY.svg";
import { Link } from "react-router-dom";

const HireShopify = () => {
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
                <h2>Hire Shopify Developers In India</h2>
                <p>
                  Shopify is popular ecommerce platform with all inbuilt
                  features to ensure fast development with custom user
                  experience and high degree of flexibility and scalability.
                  Hire Shopify developers from The App Ideas to build a
                  customized online store or a fully featured dynamic e-commerce
                  website for your business using the Shopify platform.
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
                      Best Shopify Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Shopify Development
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
                        src={require("../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/Shopify-Website-Development.webp")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Shopify Website Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/Shopify-Custom-Theme-Developmen.webp")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Shopify Custom Theme Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/HIRE US/Hire E-commerce Developer/Hire Shopify Developer/Shopify-Experts.webp")}
                        alt="IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Shopify Experts</h4>
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
            <h3>Our Feat in Shopify Development</h3>
            <p>
              As one of the early adopters of the Shopify platform we offer
              outstanding ecommerce development service on the Shopify platform
              leveraging all the customisation benefits and features specific to
              this platform. Our dedicated{" "}
              <Link
                to="/shopify-development"
                className="Title_Color"
                style={{ color: "#d6aa0b" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <b>Shopify developers</b>
              </Link>{" "}
              can shape your ecommerce website and online stores with the custom
              and business specific features and UI and UX elements offered by
              the Shopify platform. Uncompromising quality and robust
              performance coupled up with extreme ease of use and engaging UI
              make the Shopify apps built by us unique and standalone from the
              rest.
            </p>
            <p>
              The App Ideas is a globally recognized web and mobile app
              development company with robust team of experienced Shopify
              developers who built too many successful ecommerce websites and
              online stores using the Shopify platform.
            </p>
            <div className="text-center">
              <Link
                to="/contactus"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <a className="contact_btn" style={{ color: "#000" }}>
                  Contact us{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section Start */}
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <h5
                style={{
                  textAlign: "center",
                  paddingBottom: "60px",
                  paddingTop: "60px",
                }}
              >
                {" "}
                No Result Found.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section End */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              HIRE SHOPIFY DEVELOPERS FROM THE APP IDEAS TO LEVERAGE THE UNIQUE
              BENEFITS OF THIS ECOMMERCE PLATFORM
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
                style={{ height: "425px" }}
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
                    src={SEO}
                    alt="Laravel Web Application Development"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a>SEO FRIENDLY</a>
                </h5>
                <div className="text">
                  While building Shopify website we take full advantage of the
                  SEO friendly structure that the platform is known for and
                  ensure making the site equipped to generate higher volume of
                  organic traffic.
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
                style={{ height: "425px" }}
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
                    src={GAME}
                    alt="Offer Customization"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a>IOS GAME DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We boast of a large team of experienced game developers who
                  have built several successful mobile game apps for IOS
                  platform.
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
                style={{ height: "425px" }}
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
                    src={LOWER}
                    alt="Laravel Features Integration"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">LOWER LEARNING CURVE</a>
                </h5>
                <div className="text">
                  While building ecommerce websites with Shopify we ensure
                  helping our clients with video tutorials & PDF guidance for
                  easy backend operation and management.
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
                style={{ height: "400px" }}
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
                    src={HIGHLY}
                    alt="Secure Web Solutions"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">HIGHLY RESPONSIVE</a>
                </h5>
                <div className="text">
                  We built Shopify websites and web apps with highly responsive
                  web design and layout to ensure smooth appearance of the
                  website across multiple device screens running with different
                  OS versions.
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
                style={{ height: "400px" }}
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
                    src={FASTER}
                    alt="Laravel Consulting Services"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">FASTER TIME TO MARKET</a>
                </h5>
                <div className="text">
                  Thanks to a gamut if inbuilt tools Angular is faster to build
                  and with in-depth knowledge of all the themes and tools our
                  developers ensure fast-paced development of your Angular
                  website or app without compromising on quality.
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
                style={{ height: "400px" }}
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
                    src={Wearable}
                    alt="Unit Testing Methods"
                    style={{ width: "50px" }}
                  />
                </div>
                <h5>
                  <a href="/services">IOS Wearable App Development</a>
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
      <TestiMonial />

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two py-5">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>WHY HIRE SHOPIFY DEVELOPERS FROM US?</h2>
            <p>
              We have already established ourselves as one of the leading
              Shopify developers. Here are some of the key reasons to hire
              Shopify developers from us.
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
                    src={Expertise}
                    alt="Expertise In Web Solutions"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">EXPERIENCE AND EXPERTISE</a>
                </h5>
                <div className="text">
                  As one of the early adopters of the Shopify platform we have
                  vast experience and rich reserve of skills for building
                  Shopify websites and web apps.
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
                    src={ROBUST}
                    alt="Sophisticated Portfolio"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">ROBUST PORTFOLIO</a>
                </h5>
                <div className="text" style={{ marginBottom: "-26px" }}>
                  We boast of a robust portfolio of successful Shopify websites
                  and web apps for a wide variety of business niches.
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
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">TRANSPARENT AND TIMELY DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We ensure a transparent and fast paced development process to
                  ensure building the websites within fixed deadlines and timely
                  milestones.
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
                    src={Affordable}
                    alt="Affordable Costing"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">MOST COMPETITIVE PRICING</a>
                </h5>
                <div className="text" style={{ marginBottom: "-25px" }}>
                  While building highly unique, feature rich and scalable
                  ecommerce websites and web apps on Shopify platform we ensure
                  most competitive pricing for each project.
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
                    src={Time}
                    alt="Time-Bound Deployment"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>
                  <a href="/services">High Degree Of Flexibility</a>
                </h5>
                <div className="text">
                  By helping our clients choosing business specific themes and
                  plugins from what Shopify as a platform offers we help
                  customising the look and feel of websites and web apps.
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
                <p style={{ textAlign: "justify" }}>
                  Do you want to know more about the expertise of our Shopify
                  developers? Feel free to contact us
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link
                  to="/contactus"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="contact_btn" style={{ color: "#000" }}>
                    Contact us{" "}
                  </a>
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

export default HireShopify;
