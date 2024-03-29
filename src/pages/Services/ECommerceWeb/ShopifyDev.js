import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import ContactUs from "../../../components/ContactUs";

import mobileweb from "../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Shopify-Website-Development.webp";
import mobileaap from "../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Shopify-Custom-Theme-Developmen.webp";
import webapp from "../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Shopify-Experts.webp";
import HeroSection from "../../../components/HeroSection";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ServiceProvideData = [
  {
    id: 1,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/icons8-shopify-72.png"),
    que: "Shopify E-commerce Store development",
    ans: "The demand for digital solutions is getting higher and higher with time. People are now more inclined towards online platforms because online platforms provide the convenience of using the services from any place and at any time very easily. Similarly, the entrepreneurs are making high investments in digital platforms development.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. Along with the best mobile and web app development, we also offer the best Shopify E-commerce development services with additional features and functionality. We have a team of highly skilled and experience who will build the most versatile and feature-rich e-commerce stores using Shopify CMS. We recommend appropriate Shopify plans for building niche e-commerce stores.",
  },
  {
    id: 2,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Custom-Shopify-E-Commerce-Development.png"),
    que: "Custom Shopify E-commerce Development",
    ans: "Shopify is one of the most popular as well as demanding E-commerce platforms development which offers all kinds of functionality for developing a successful E-commerce platform. The online platforms can help in easy management of the products as well as update the product services wherever required.",
    ans2: "The App Ideas is one of the leading web and app development company. We have a team of highly skilled designers and developers who are experts in offering the best Shopify E-commerce platform at the best prices. We build custom e-commerce stores using Shopify CMS and help to deliver the unique look, feel and features set.",
  },
  {
    id: 3,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Shopify-Mobile-Commerce-Development.png"),
    que: "Shopify Mobile Commerce development",
    ans: "If we talk about the demand for mobile app services then it is probably increasing at a high rate and as per the observation, it is going to be increasing in the future. So if you are planning to make an investment in developing Shopify Mobile commerce then this is the best time to make an investment in developing Mobile commerce using Shopify.",
    ans2: "The App Ideas is one of the proficient software development company. We are experts in offering the services like mobile app, web app and website development. We also build tremendously business-specific mobile e-commerce apps using Shopify to cater to the increasing shopping needs of the mobile audience.",
  },
  {
    id: 4,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Shopify-Plugin-Development.png"),
    que: "Shopify Plugin development",
    ans: "Nowadays, we can clearly see that the demand for E-commerce platforms is increasing in the market. People are liking or we can also say that loving the Shopify E-commerce platforms Plugin for accessing all kinds of services. It is very easy for the users to check the services online, add them to the cart and make the purchase by using the online payment methods.",
    ans2: "We are from The App Ideas, which is one of the leading web and app development company. We have a team of highly skilled and experienced Shopify developers who are experts in offering the best services at the best rates. We also build a broad array of Shopify plugins for various features and functionalities as required by modern online stores across the niches.",
  },
  {
    id: 5,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Group-184.png"),
    que: "Shopify Theme Development",
    ans: "As you know, there are thousands of E-commerce technology platforms available in the market. But people are more inclined towards digital solutions because this provides an easy way of getting things done which is time-saving as well as cost-effective. Shopify offers various theme options for offering a unique E-commerce store in the market.",
    ans2: "The App Ideas is one of the popular Shopify development company. We have a skilled team of Shopify developers who are experts in offering the best e-commerce platform in Shopify technology. We develop custom Shopify themes to deliver a unique user interface for various niche e-commerce stores and mobile commerce apps of all types.",
  },
  {
    id: 6,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Mask-Group.png"),
    que: "Support and maintenance",
    ans: "If you are planning to launch any online platforms or digital solutions in the market then this is probably the best time to make the investment. The demand for online platforms is increasing day by day. The users, as well as the business owners, are loving the online platforms because it is easier and time-saving. Along with the development, you also need to take care of the support and maintenance services.",
    ans2: "Here we are at The App Ideas, which is one of the leading web and app development company. We have a team of highly skilled and experienced Shopify developers who offer the best E-commerce solution. Along with development, we also offer support and maintenance services to our clients. We provide full support and maintenance service to all types of Shopify stores across the niches and categories.",
  },
];
const IndustriesData = [
  {
    id: 1,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/Experience-And-Expertise-1.png"),
    que: "Years of Experience",
    ans: "The App Ideas is one of the foremost E-commerce development company. We offer the software development services like mobile app development, web app development and website development. As per the digital demand, many business or E-commerce owners are updating their digital platforms.",
    ans2: "We are at The App Ideas, which is a leading web and app development company. We have a team of highly experienced Shopify developers who will offer future-ready E-commerce platforms. We boast of years of experience in building Shopify e-commerce stores of all types across the niches.",
  },
  {
    id: 2,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/robust-portfolio.png"),
    que: "Robust Portfolio",
    ans: "Currently, as we can clearly observe that the demand for E-commerce platforms is increasing in the market. The users are liking the online platform because it offers convenient ways of accessing all the services as it is cost-effective as well as time-saving.",
    ans2: "We are from The App Ideas which is one of the leading web and app development company. We have a talented pool of Shopify developers, who will offer the best and future-ready Shopify E-commerce platforms. As a specialised Shopify e-commerce development company, we boast a robust portfolio of the most successful e-commerce stores across the spectrum.",
  },
  {
    id: 3,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/icons8-business-network-72.png"),
    que: "Business Specific",
    ans: "In this present time, it is very important to have a digital solution for all kinds of business including E-commerce services. An E-commerce platform helps business owners easily list down all the services and their details in a single digital place. It is quite easy for the users as well, as they can easily check the store’s details from any place and at any time conveniently.",
    ans2: "We are at The App Ideas, which is one of the foremost Shopify E-commerce platforms development company. We have years of experience in delivering future-ready Shopify E-commerce at the best possible rates. We offer Shopify development solutions based on the nature and size of your business and customize every element as per your requirements and audience.",
  },
  {
    id: 4,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/Smart-Retail.png"),
    que: "Dedicated Project Manager",
    ans: "The current trend is all about digitalization and online platforms. Online platforms like web app, mobile app and websites are getting highly popular in the market because this is time-saving, offer an easy convenient way of accessing the services as well as cost-effective.",
    ans2: "The App Ideas is one of the proficient software development company. We have a team of Shopify developers who are offering the best Shopify E-commerce services for all kinds of categories. For each project, we ensure a dedicated project manager to look after all requirements and client communications.",
  },
  {
    id: 5,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/Performance-Driven..png"),
    que: "Highly Result Driven",
    ans: "In the market, there are thousands of E-commerce platforms available for E-commerce services in different-different technology platforms including Shopify. If you are planning to launch your E-commerce platforms then it is very important to add up some of the additional features for its success.",
    ans2: "We are from The App Ideas which is one of the leading software solutions services. We are very proficient in developing highly successful Shopify E-commerce platforms. Our Shopify web development process and methodology are highly result-driven and we consistently focus on making substantial value addition to the existing Shopify web solution by integrating new features.",
  },
  {
    id: 6,
    images: require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/competitive-pricing.png"),
    que: "Competitive Pricing",
    ans: "If you are thinking of launching a Shopify E-commerce platform in the market then this is probably the best time for it. The demand for E-commerce platforms is getting higher and higher in the market. The best Shopify E-commerce platforms can help you to stand out differently among the competitors.",
    ans2: "The App Ideas is a proficient software development service. The services include website development, web app development and mobile app development. Along with the best features, we offer the most competitive pricing for our app development projects and ensure the remaining affordable for both startups and small enterprises.",
  },
];

const ShopifyDev = () => {
  const [activeService, setActiveService] = useState(
    "shopify_e_commerce_store"
  );
  const [activeWhyChoose, setActiveWhyChoose] = useState("years_experience");

  const [openServicesProvide, SetOpenServicesProvide] = useState(false);
  const [openIndustries, SetOpenIndustries] = useState(false);

  const toggleOpen = (i) => {
    if (openServicesProvide === i) {
      return SetOpenServicesProvide(false);
    }
    SetOpenServicesProvide(i);
  };
  const industriesOpen = (i) => {
    if (openIndustries === i) {
      return SetOpenIndustries(null);
    }
    SetOpenIndustries(i);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Helmet title="Shopify Web & App Development Company India - The App Ideas" />
      {/* Banner Section Start */}
      <HeroSection
        title="Shopify Development Company"
        des="As per the increasing demand of the e-commerce platform, business owners and startups are now shifting their business to online platforms for increasing profit rates. There are a high number of technology platforms available in the market which you can choose for the development of your E-commerce platform. Shopify is one of the most demanding and popular E-commerce development services that offer the best features."
        list1="7+ Years of experience in Shopify Development"
        list2="Best Shopify Development Company"
        list3="Dedicated team for your Shopify Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Shopify Website Development"
        service2="Shopify Custom Theme Development"
        service3="Shopify Experts"
        image1={mobileweb}
        image2={mobileaap}
        image3={webapp}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>What Do We provide in Shopify Development Company?</h3>
            <p>
              Shopify stands as one of the most popular e-commerce platforms
              that come packed with hosting solutions and an array of
              customisable features, themes and user interface options. The App
              Ideas is a Shopify e-commerce development company with years of
              experience and a solid track record as well as a portfolio of
              several successful e-commerce stores and business websites built
              with Shopify.
            </p>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("shopify_e_commerce_store")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "shopify_e_commerce_store" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/icons8-shopify-72.png")}
                      alt="E-Commerce Development"
                      className="img-fluid"
                    />
                    <p>E-Commerce Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("customize")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "customize" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Custom-Shopify-E-Commerce-Development.png")}
                      alt="Customize"
                      className="img-fluid"
                    />
                    <p>Customize Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("shopify_mobile_ecommerce")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "shopify_mobile_ecommerce" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Shopify-Mobile-Commerce-Development.png")}
                      alt="Mobile
                      Development"
                      className="img-fluid"
                    />
                    <p>Mobile Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("shopify_plugin")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "shopify_plugin" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Shopify-Plugin-Development.png")}
                      alt="Shopify Plugin development"
                      className="img-fluid"
                    />
                    <p>Shopify Plugin development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("shopify_theme")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "shopify_theme" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Group-184.png")}
                      alt="Shopify Theme Development"
                      className="img-fluid"
                    />
                    <p>Shopify Theme Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService("support_maintanance")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "support_maintanance" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/What Do/Mask-Group.png")}
                      alt="Support and maintenance"
                      className="img-fluid"
                    />
                    <p>Support and maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            {activeService === "shopify_e_commerce_store" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Shopify E-commerce Store development
                    </h3>
                    <p className="Title_para">
                      The demand for digital solutions is getting higher and
                      higher with time. People are now more inclined towards
                      online platforms because online platforms provide the
                      convenience of using the services from any place and at
                      any time very easily. Similarly, the entrepreneurs are
                      making high investments in digital platforms development.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. Along with the best mobile
                      and web app development, we also offer the best Shopify
                      E-commerce development services with additional features
                      and functionality. We have a team of highly skilled and
                      experience who will build the most versatile and
                      feature-rich e-commerce stores using Shopify CMS. We
                      recommend appropriate Shopify plans for building niche
                      e-commerce stores.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "customize" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom Shopify E-commerce Development{" "}
                    </h3>
                    <p className="Title_para">
                      Shopify is one of the most popular as well as demanding
                      E-commerce platforms development which offers all kinds of
                      functionality for developing a successful E-commerce
                      platform. The online platforms can help in easy management
                      of the products as well as update the product services
                      wherever required.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      designers and developers who are experts in offering the
                      best Shopify E-commerce platform at the best prices. We
                      build custom e-commerce stores using Shopify CMS and help
                      to deliver the unique look, feel and features set.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "shopify_mobile_ecommerce" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Shopify Mobile Commerce development{" "}
                    </h3>
                    <p className="Title_para">
                      If we talk about the demand for mobile app services then
                      it is probably increasing at a high rate and as per the
                      observation, it is going to be increasing in the future.
                      So if you are planning to make an investment in developing
                      Shopify Mobile commerce then this is the best time to make
                      an investment in developing Mobile commerce using Shopify.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the proficient software
                      development company. We are experts in offering the
                      services like mobile app, web app and website development.
                      We also build tremendously business-specific mobile
                      e-commerce apps using Shopify to cater to the increasing
                      shopping needs of the mobile audience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "shopify_plugin" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Shopify Plugin development{" "}
                    </h3>
                    <p className="Title_para">
                      Nowadays, we can clearly see that the demand for
                      E-commerce platforms is increasing in the market. People
                      are liking or we can also say that loving the Shopify
                      E-commerce platforms Plugin for accessing all kinds of
                      services. It is very easy for the users to check the
                      services online, add them to the cart and make the
                      purchase by using the online payment methods.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is one of the leading web
                      and app development company. We have a team of highly
                      skilled and experienced Shopify developers who are experts
                      in offering the best services at the best rates. We also
                      build a broad array of Shopify plugins for various
                      features and functionalities as required by modern online
                      stores across the niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "shopify_theme" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Shopify Theme Development{" "}
                    </h3>
                    <p className="Title_para">
                      As you know, there are thousands of E-commerce technology
                      platforms available in the market. But people are more
                      inclined towards digital solutions because this provides
                      an easy way of getting things done which is time-saving as
                      well as cost-effective. Shopify offers various theme
                      options for offering a unique E-commerce store in the
                      market.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular Shopify development
                      company. We have a skilled team of Shopify developers who
                      are experts in offering the best e-commerce platform in
                      Shopify technology. We develop custom Shopify themes to
                      deliver a unique user interface for various niche
                      e-commerce stores and mobile commerce apps of all types.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "support_maintanance" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and maintenance </h3>
                    <p className="Title_para">
                      If you are planning to launch any online platforms or
                      digital solutions in the market then this is probably the
                      best time to make the investment. The demand for online
                      platforms is increasing day by day. The users, as well as
                      the business owners, are loving the online platforms
                      because it is easier and time-saving. Along with the
                      development, you also need to take care of the support and
                      maintenance services.
                    </p>
                    <p className="Title_para">
                      Here we are at The App Ideas, which is one of the leading
                      web and app development company. We have a team of highly
                      skilled and experienced Shopify developers who offer the
                      best E-commerce solution. Along with development, we also
                      offer support and maintenance services to our clients. We
                      provide full support and maintenance service to all types
                      of Shopify stores across the niches and categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {ServiceProvideData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: "20px", cursor: "pointer" }}
                onClick={() => toggleOpen(i)}
              >
                <div className="service_provide_box">
                  <div className="service_provide_content">
                    <div className="service_provide_title">
                      <img
                        src={item?.images}
                        alt="smartphone-tablet"
                        className="img-fluid"
                      />
                      <p>{item.que}</p>
                    </div>
                    {openServicesProvide === i ? (
                      <div>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {openServicesProvide === i ? (
                    <div className="answer_box">
                      <hr className="line_tag" />
                      <div className="answer">
                        <p>{item.ans}</p>
                        <p>{item.ans2}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
            {/* Mobile View */}
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
                    alt="baristaswag"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/baristaswag.webp")}
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
                    alt="berripro"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/berripro.webp")}
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
                    alt="blessestore"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/blessestore.webp")}
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
                    alt="dashwallets"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/dashwallets.webp")}
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
                    alt="glowrecipe"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/glowrecipe.webp")}
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
                    alt="momzjoy"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/momzjoy.webp")}
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
                    alt="monbebecouture"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/monbebecouture.webp")}
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
                    alt="moroccanfurniturebazaar"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/moroccanfurniturebazaar.webp")}
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
                    alt="purebodynaturals"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/purebodynaturals.webp")}
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
                    alt="resipsausa"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/resipsausa.webp")}
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
                    alt="terracomo"
                    src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Slider/terracomo.webp")}
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
            <h3>Why Choose The App Ideas for Shopify Development Company?</h3>
          </div>
          <div className="row mt-5">
            <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("years_experience")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "years_experience" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/Experience-And-Expertise-1.png")}
                      alt="Years of Experience"
                      className="img-fluid"
                    />
                    <p>Years of Experience</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/robust-portfolio.png")}
                      alt="Robust Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("business")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "business" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/icons8-business-network-72.png")}
                      alt="Business Specific"
                      className="img-fluid"
                    />
                    <p>Business Specific</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("dedicated_project")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "dedicated_project" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/Smart-Retail.png")}
                      alt="Dedicated Project Manager"
                      className="img-fluid"
                    />
                    <p>Dedicated Project Manager</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("highly_result")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "highly_result" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/Performance-Driven..png")}
                      alt="Highly Result Driven"
                      className="img-fluid"
                    />
                    <p>Highly Result Driven </p>
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
                      src={require("../../../assets/images/SERVICES/E-Commerce Website/ShopifyDev/Why Choose/competitive-pricing.png")}
                      alt="Competitive Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "years_experience" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Years of Experience</h3>
                    <p className="Title_para">
                      The App Ideas is one of the foremost E-commerce
                      development company. We offer the software development
                      services like mobile app development, web app development
                      and website development. As per the digital demand, many
                      business or E-commerce owners are updating their digital
                      platforms.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is a leading web and app
                      development company. We have a team of highly experienced
                      Shopify developers who will offer future-ready E-commerce
                      platforms. We boast of years of experience in building
                      Shopify e-commerce stores of all types across the niches.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "robust" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Currently, as we can clearly observe that the demand for
                      E-commerce platforms is increasing in the market. The
                      users are liking the online platform because it offers
                      convenient ways of accessing all the services as it is
                      cost-effective as well as time-saving.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading web
                      and app development company. We have a talented pool of
                      Shopify developers, who will offer the best and
                      future-ready Shopify E-commerce platforms. As a
                      specialised Shopify e-commerce development company, we
                      boast a robust portfolio of the most successful e-commerce
                      stores across the spectrum.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyChoose === "business" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Business Specific</h3>
                    <p className="Title_para">
                      In this present time, it is very important to have a
                      digital solution for all kinds of business including
                      E-commerce services. An E-commerce platform helps business
                      owners easily list down all the services and their details
                      in a single digital place. It is quite easy for the users
                      as well, as they can easily check the store’s details from
                      any place and at any time conveniently.
                    </p>
                    <p className="Title_para">
                      We are at The App Ideas, which is one of the foremost
                      Shopify E-commerce platforms development company. We have
                      years of experience in delivering future-ready Shopify
                      E-commerce at the best possible rates. We offer Shopify
                      development solutions based on the nature and size of your
                      business and customize every element as per your
                      requirements and audience.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "dedicated_project" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Dedicated Project Manager</h3>
                    <p className="Title_para">
                      The current trend is all about digitalization and online
                      platforms. Online platforms like web app, mobile app and
                      websites are getting highly popular in the market because
                      this is time-saving, offer an easy convenient way of
                      accessing the services as well as cost-effective.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the proficient software
                      development company. We have a team of Shopify developers
                      who are offering the best Shopify E-commerce services for
                      all kinds of categories. For each project, we ensure a
                      dedicated project manager to look after all requirements
                      and client communications.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "highly_result" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Highly Result Driven</h3>
                    <p className="Title_para">
                      In the market, there are thousands of E-commerce platforms
                      available for E-commerce services in different-different
                      technology platforms including Shopify. If you are
                      planning to launch your E-commerce platforms then it is
                      very important to add up some of the additional features
                      for its success.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the leading
                      software solutions services. We are very proficient in
                      developing highly successful Shopify E-commerce platforms.
                      Our Shopify web development process and methodology are
                      highly result-driven and we consistently focus on making
                      substantial value addition to the existing Shopify web
                      solution by integrating new features.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyChoose === "competitive_pricing" && (
              <div className="service_desk_view col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      If you are thinking of launching a Shopify E-commerce
                      platform in the market then this is probably the best time
                      for it. The demand for E-commerce platforms is getting
                      higher and higher in the market. The best Shopify
                      E-commerce platforms can help you to stand out differently
                      among the competitors.
                    </p>
                    <p className="Title_para">
                      The App Ideas is a proficient software development
                      service. The services include website development, web app
                      development and mobile app development. Along with the
                      best features, we offer the most competitive pricing for
                      our app development projects and ensure the remaining
                      affordable for both startups and small enterprises.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Mobile View */}
            {IndustriesData.map((item, i) => (
              <div
                className="service_mobile_view col-sm-12 col-md-12 col-lg-12 col-xl-12"
                style={{ marginTop: "20px", cursor: "pointer" }}
                onClick={() => industriesOpen(i)}
              >
                <div className="service_provide_box">
                  <div className="service_provide_content">
                    <div className="service_provide_title">
                      <img
                        src={item?.images}
                        alt="smartphone-tablet"
                        className="img-fluid"
                      />
                      <p>{item.que}</p>
                    </div>
                    {openIndustries === i ? (
                      <div>
                        <IoIosArrowUp />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                  {openIndustries === i ? (
                    <div className="answer_box">
                      <hr className="line_tag" />
                      <div className="answer">
                        <p>{item.ans}</p>
                        <p>{item.ans2}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
            {/* Mobile View */}
          </div>
        </div>
      </section>
      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Are you planning to launch a Successful Shopify E-commerce platform in the market?" />
      {/* Contact Section End */}
    </>
  );
};

export default ShopifyDev;
