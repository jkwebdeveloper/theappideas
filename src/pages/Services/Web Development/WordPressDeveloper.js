import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CustomWordPress from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/Custom-WordPress-Development-Services.png";
import WordPressWebsite from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/WordPress-Website-Development-Company.png";
import Developer from "../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/WordPress-Website-Developer.png";

import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import ContactUs from "../../../components/ContactUs";
import HeroSection from "../../../components/HeroSection";

const WordPressDeveloper = () => {
  const [activeWeOffer, setActiveWeOffer] = useState("wordpress_web");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "expertise_exprerience"
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Banner Section Start */}
      <HeroSection
        title="WordPress Development Company"
        des="The App Ideas is one of the most popular web and app development company. We have a team of developers who have years of experience in offering the best web development services. We have a group of people who are highly expert in offering successful WordPress web development services along with integrating advanced features and unique designing. If you are planning to launch a WordPress website then feel free to reach us and get a free quotation."
        list1="7+ Years of experience in App Development"
        list2="Best WordPress  Development Company"
        list3="Dedicated team for your WordPress Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Custom WordPress Development Services"
        service2="WordPress Website Development Company"
        service3="WordPress Website Developer"
        image1={CustomWordPress}
        image2={WordPressWebsite}
        image3={Developer}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What do we offer for WordPress Development Company?</h3>
            <p>
              WordPress as leading the Content Management System (CMS) is behind
              millions of websites and blogs across the niches. Ease of use,
              flexibility, scalability, customization, and performance are some
              of the reasons behind the popularity of WordPress. Our expert
              WordPress Development Company has years of frontline experience in
              building the most sophisticated WordPress blogs and websites for
              various business and professional niches.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("wordpress_web")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "wordpress_web" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/what do/Website-Redesign.png")}
                      alt="Website-Redesign"
                      className="img-fluid"
                    />
                    <p>WordPress Web Development.</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("wordpress_theme")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "wordpress_theme" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/what do/Group-235.png")}
                      alt="Group-235"
                      className="img-fluid"
                    />
                    <p>WordPress Theme Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("location_based")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "location_based" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/what do/Location-Based-Services.png")}
                      alt="icons8-smart-watch-100-1"
                      className="img-fluid"
                    />
                    <p>Location-based services.</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("wordpress_plugin")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "wordpress_plugin" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/what do/Wordpress-plugin.png")}
                      alt="Group-53"
                      className="img-fluid"
                    />
                    <p>WordPress Plugin Development.</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("wordpress_mobile")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "wordpress_mobile" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/what do/WordPress-Mobile-App.png")}
                      alt="Group-184"
                      className="img-fluid"
                    />
                    <p>WordPress Mobile app</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWeOffer("manitenance_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWeOffer === "manitenance_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/what do/Mask-Group.png")}
                      alt="Mask-Group"
                      className="img-fluid"
                    />
                    <p>Maintenance and Support.</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWeOffer === "wordpress_web" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      WordPress Web Development.
                    </h3>
                    <p className="Title_para">
                      WordPress is one of the most popular web development
                      services in the market. Due to the high demand for online
                      platforms, many startups, entrepreneurs and business
                      owners are making investments in developing successful web
                      development for engaging a high number of users and
                      increasing the profit rate of their business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have years of experience and
                      expertise in offering the best WordPress web development
                      services. WordPress is a flexible platform that can be
                      used for every business type. Using WordPress we build
                      highly customised and high-performance websites and blogs
                      with appealing UI and a rich set of appropriate features.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "wordpress_theme" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      WordPress Theme Development{" "}
                    </h3>
                    <p className="Title_para">
                      Currently, the demand for online platforms is increasing
                      day by day. People are liking or we can also say loving
                      the digital services. And as per the research, there are
                      more than half of the population are using smart devices
                      for accessing every service like E-commerce, driver
                      tracking or food delivery.WordPress is offering various
                      themes as well as custom development can also be done.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular WordPress web
                      development company. We have a team of people who are
                      highly expert in offering WordPress app development with
                      the theme as well as custom theme based development. We
                      build brilliant WordPress themes rich with aesthetic
                      appeal and custom look and feel. Having expertise in
                      popular themes like Divi, Avada, Enfold and etc.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "location_based" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Location-based services </h3>
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
            {activeWeOffer === "wordpress_plugin" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      WordPress Plugin Development
                    </h3>
                    <p className="Title_para">
                      WordPress is one of the most popular and demanding CMS
                      platforms in the market. If you check the market then a
                      high number of businesses are using WordPress as their
                      business platforms. WordPress offers various options as
                      well as plugins for developing the future-ready solution
                      in the market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the highly successful WordPress
                      development services. We have years of expertise in
                      offering the best WordPress web services for all kinds of
                      business categories at the best possible rates. We build
                      an array of custom plugins and extensions representing
                      various WordPress features and functionalities as per
                      client needs.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "wordpress_mobile" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">WordPress Mobile app </h3>
                    <p className="Title_para">
                      WordPress is one of the most popular and demanding CMS
                      platforms in the market.WordPress offers all types of
                      features which can be used to develop successful web
                      platforms for all types of business categories. Many
                      business owners and entrepreneurs are making high
                      investments in web development services for increasing the
                      enhancing of the user.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the proficient web and app
                      development company. We are highly experienced as well as
                      expertise in developing WordPress web development services
                      and we are also skilled in developing WordPress Mobile
                      app. By using a plethora of tools and frameworks we help
                      converting WordPress websites into custom mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWeOffer === "manitenance_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Maintenance and Support</h3>
                    <p className="Title_para">
                      Every WordPress web development service needs support and
                      maintenance at some time. As we are observing, from time
                      to time new features and functionality are added to the
                      operating system. So it is very important for you to keep
                      maintaining as well as supporting your website to
                      increasing the engagement of the user.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most successful WordPress web
                      development services. We have a group of highly skilled
                      developers who are highly expert in offering WordPress web
                      development services along with support and maintenance
                      services. We provide redesign, optimisation, support and
                      maintenance for all types of WordPress websites.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Resipsausa</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="#" className="work_head_item">
                            E-Commerce
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require("../../../assets/images/Portfolio/port-ecommerce-website.webp")}
                        alt="port-ecommerce-website"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-one">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Purebodynaturals</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="#" className="work_head_item">
                            E-Commerce
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require("../../../assets/images/Portfolio/port-ecommerce-website-one.webp")}
                        alt="port-ecommerce-website-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_mobilebg_fourteen">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Food Ordering Website</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Web Development
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            {" "}
                            Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require("../../../assets/images/Portfolio/port-webdevelop-webiste-two.webp")}
                        alt="port-webdevelop-webiste-two"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-tan">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Carolight</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="#" className="work_head_item">
                            E-Commerce
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require("../../../assets/images/Portfolio/port-ecommerce-website-tan.webp")}
                        alt="port-ecommerce-website-tan"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-eleven">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Bravura</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="#" className="work_head_item">
                            E-Commerce
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="work_head_item">
                            Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require("../../../assets/images/Portfolio/port-ecommerce-website-eleven.webp")}
                        alt="port-ecommerce-website-eleven"
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
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why choose us for WordPress development?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("expertise_exprerience")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "expertise_exprerience" &&
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
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/robust-portfolio.png")}
                      alt="robust-portfolio"
                      className="img-fluid"
                    />
                    <p>Strong Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("time_bound")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "time_bound" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Time-Bound-Development..png")}
                      alt="Time-Bound-Development"
                      className="img-fluid"
                    />
                    <p>Time-Bound Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("superb_user")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "superb_user" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/Superb-User-Experience.png")}
                      alt="Superb-User-Experience"
                      className="img-fluid"
                    />
                    <p>Superb User Experience</p>
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
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitve_pricing")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitve_pricing" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/WEB DEVELOPMENT/Wordpress-dev/why-Choose/competitive-pricing.png")}
                      alt="competitive-pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "expertise_exprerience" && (
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
            {activeWhyChoose === "strong_portfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Strong Portfolio</h3>
                    <p className="Title_para">
                      Before hiring a software development company, it is very
                      important for you to choose the best and according to your
                      budget. But it is also quite important to check the past
                      projects or portfolios of the services to check their
                      expertise and skill before making an investment.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the popular
                      software development company. We have expertise in
                      developing websites, web app and mobile app development
                      services. We have a talented pool of highly skilled
                      developers as well as developers who offer the services at
                      the best rates. We have built a whole array of the most
                      successful WordPress Websites across diverse niches and
                      categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "time_bound" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Time-Bound Development</h3>
                    <p className="Title_para">
                      If you have planned to launch a web service using
                      WordPress technology for your business then it is very
                      important for you to decide the timeline or ask the
                      developers about the timeline before hiring them for your
                      software service development. This will give you clarity
                      about the project deadlines.
                    </p>
                    <p className="Title_para">
                      The App Ideas is highly experienced in offering the best
                      software development services. We specifically divide the
                      project into small milestones then start working on small
                      milestones. After completing every milestone we take the
                      client approval before moving forward. We are strict to
                      the project milestones and deadlines strictly and deliver
                      a project in time without compromising on quality
                      assurance and testing.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "superb_user" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Superb User Experience</h3>
                    <p className="Title_para">
                      Nowadays, every business and industrial owner is making a
                      high investment in web development services. If we talk
                      about the users then they are also liking the online
                      platforms or web solutions because it is very easy and
                      convenient to access the service. And sometimes web
                      solution is time-saving as well as cost-effective this is
                      the main reason behind the popularity.
                    </p>
                    <p className="Title_para">
                      The reason to choose The App Ideas is years of expertise
                      in deploying successful web development services also
                      using the WordPress platforms. We initially understand the
                      requirements then take the further step. We have deployed
                      the projects with a superb user experience. We are known
                      for building aesthetically appealing, easy to use and fast
                      loading.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "agile" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      There are millions of online platforms available in the
                      market. People are more likely shifting towards the
                      digital platform became it is convenient to use, take less
                      time as well as sometimes cost-effective. This is why many
                      business owners and entrepreneurs are making investments
                      in web and app development with some innovative ideas to
                      make it popular as well as successful.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We are highly experienced and have
                      expertise in developing successful mobile app and web app
                      development services. For WordPress web development, we
                      highly follow the Agile development methodology to ensure
                      faster development, concurrent testing and continuous
                      iteration.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "competitve_pricing" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      If you are planning to launch a WordPress web app solution
                      in the market then this is the right time to make an
                      investment and increase your profit rate. Before hiring
                      any software development services, it is very important
                      for you to do the proper market research then hire the
                      software development service.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the foremost web and app
                      development company. We have a group of highly skilled
                      developers who offer WordPress web development services
                      with advanced features and functionality at the best
                      rates. We provide WordPress development service at a truly
                      cost-competitive rate.
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
      <ContactUs question="Are you planning to launch a Successful WordPress Web in the market?" />
      {/* Contact Section End */}
    </>
  );
};

export default WordPressDeveloper;
