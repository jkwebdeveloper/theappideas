import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import mobileAppdevelopment from "../../assets/images/MobileAppDev/Mobile App Development Company/Mobile App Development.svg";
import mobileApplication from "../../assets/images/MobileAppDev/Mobile App Development Company/Mobile Application Development Company.svg";
import mobileappdeveloper from "../../assets/images/MobileAppDev/Mobile App Development Company/mobile app developer.svg";

import Experience from "../../assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Experience and Expertise.svg";
import Robust from "../../assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Robust Portfolio.svg";
import Lifecycle from "../../assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Full Lifecycle support.svg";
import Agile from "../../assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Agile Development.svg";
import Fast from "../../assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Fast-paced development.svg";
import Competitive from "../../assets/images/SERVICES/Mobile-App-dev/Android-App/Why-Choose/Competitive price.svg";

import TestiMonial from "../../components/Testimonial/TestiMonial";
import FAQ from "../../components/FAQ";
import { Link } from "react-router-dom";
import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/HeroSection";
import { Helmet } from "react-helmet";
// import WorkHand from "../../components/WorkHand";

const AndroidAppDevelopment = () => {
  const [activeService, setactiveService] = useState("custom_mobile");
  const [activeWhyChoose, setActiveWhyChoose] = useState(
    "experience_expertise"
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Helmet title="Top Android App Development Comapny India - The app ideas"/>
      {/* Banner Section Start */}
      <HeroSection
        title="Android App Development Company"
        des="The App Ideas is one of the leading web and app development company. We have a team of highly skilled and experienced developers who will provide the best Android mobile app as well as a custom mobile app solution which will be very beneficial for the growth of your business and startups at the best rates."
        list1="7+ Years of experience in App Development"
        list2="Best Mobile App Development Company"
        list3="Dedicated team for your Mobile App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Android App Development"
        service2="Android Application Development"
        service3="Android App Development Company"
        image1={mobileAppdevelopment}
        image2={mobileApplication}
        image3={mobileappdeveloper}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Android App Development Company India</h3>
            <p>
              We boast of an Android app development experience that spans over
              a decade and in all these years we produced a bounty of successful
              Android apps for business niches and consumer categories of all
              types. We provide a wide spectrum of Android app development
              services. Android is the most popular mobile operating system
              platform that runs the vast majority of mobile devices around the
              globe. As mobile devices are exploding with innovations, Android
              apps constantly need to stay abreast of these innovations and
              changes. As the early starter in the Android development space, we
              have seen the entire evolution of the Android apps and their
              innovative scopes.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("custom_mobile")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "custom_mobile" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom Mobile App Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_enterprise")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "android_enterprise" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Android Enterprise App Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_wearable")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "android_wearable" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Android Wearable App Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_game")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "android_game" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Android Game App Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_app_redesign")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "android_app_redesign" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Android App Redesign</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService("android_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === "android_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={require("../../assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Android Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            {activeService === "custom_mobile" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Support And Maintenance
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the popular web and app
                      development company. We offer the best Android app
                      development services with unique design as well as best
                      features integration which will be helpful in business
                      growth. We have a pool of talented Android developers who
                      are experts in offering the best app solutions. We offer
                      Android app development services which help in attracting
                      a high number of users to your online services.
                    </p>
                    <p className="Title_para">
                      We are highly expert in developing custom Android Mobile
                      apps for a variety of business categories and niches.
                      Along with single-user platform development. We are also
                      experienced in developing Multiservice platforms or
                      On-demand platforms for every business including the food
                      industry, the grocery industry, E-commerce and shopping
                      industry, Healthcare industry and more.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_enterprise" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Enterprise App Development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is a leading mobile app development company.
                      We offer the best Android enterprise mobile app
                      development services for the internal facing employee as
                      well as for the customer-facing apps. Along with the
                      digitalization of the business, enterprise apps are also
                      getting highly demanding in this present time. Many of the
                      businesses are launching and shifting towards the
                      enterprise app.
                    </p>
                    <p className="Title_para">
                      Here we offer sophisticated as well as future-ready
                      Android apps to address the typical requirements of modern
                      enterprises. We have a team of talented Android developers
                      who offers the customized services to enterprises based on
                      your requirements like an end to end development, project
                      management and team extension. We are experts in native as
                      well as cross-platform app development.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_wearable" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android wearable app development{" "}
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular web and app
                      development company. Along with the mobile app
                      development, we are also experts in developing the
                      successful Android wearable app. Nowadays, as per the
                      research, it is seen that users and business owners are
                      now more inclined towards wearable devices. Due to the
                      increasing demand for Android wearable devices, the
                      demands of the Android wearable apps also increasing.
                    </p>
                    <p className="Title_para">
                      The App Ideas has a team of dedicated Android developers
                      who will provide the best Android wearable app development
                      services for various business categories. We offer the
                      future-ready app solution as per the current trend. We
                      develop a wide array of Android wearable apps for Android
                      smartwatches and smart wearable health trackers and bands.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_game" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Game app development{" "}
                    </h3>
                    <p className="Title_para">
                      We are from The App Ideas, a leading software development
                      company. The Android operating system is one of the most
                      popular mobile app platforms which provide supports to
                      more than 70% of smart devices like smartphones, tablets
                      and all the other devices. Android mobile apps services
                      demands grow with every minute. Similarly, Android game
                      app development is highly demanding in this present time.
                    </p>
                    <p className="Title_para">
                      Android games development is one of the expert services
                      which we offer to the clients as per their requirements.
                      If we talk about Android Games then this type of gaming
                      application is compatible with a mobile app as well as
                      other devices. We have a team of highly skilled android
                      app developers who provide the best android game app
                      services at the best rates.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_app_redesign" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Android App Redesign </h3>
                    <p className="Title_para">
                      Android App Redesign is one of the most popular services
                      in this present time. It is very important for business
                      owners or startups to make the Android app up to date as
                      per the current trends. Many of the Android app owners
                      launch the app in the market then forget to update it or
                      modify it as per the user demands and current trends to
                      increase the user engagement easily.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We are highly expert in providing the
                      best Android app solution for every business category with
                      the best design at the best rates. Along with the
                      development, we also offer the redesigning services of the
                      Android app. For Old android apps, we provide state of an
                      art redesign service to boost business audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === "android_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Android Support and Maintenance{" "}
                    </h3>
                    <p className="Title_para">
                      Every Android Mobile app requires Support and Maintenance
                      services after some period. Nowadays, as we can see
                      technology keeps updating with time. New features and
                      functionality are updated as per the demands. Due to the
                      update in technology, the mobile app must keep maintaining
                      as per the demand to keep as well as increase the
                      engagement of the users.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      Android developers who provides support as well as
                      maintenance services to our clients. Our expert team of
                      developers provides full support and maintenance services
                      to all Android apps and ensure their success in the
                      Android marketplace.
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
      {/* <WorkHand /> */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <Link
                to="https://play.google.com/store/apps/details?id=com.covid2019.rchc"
                target="_blank"
              >
                <div data-aos="fade-up" className="work_head_box">
                  <a className="work_head_box_link"></a>
                  <div className="row w-100">
                    <a className="work_head_box_link"></a>
                    <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                      <a className="work_head_box_link"></a>
                      <div className="work_head_lft">
                        <a className="work_head_box_link">
                          <h2>Covid</h2>
                        </a>
                        <ul className="ps-0">
                          <a className="work_head_box_link"></a>
                          <li>
                            <a className="work_head_box_link"> </a>
                            <a className="work_head_item">Android App</a>
                          </li>
                          <li>
                            {" "}
                            <a className="work_head_item">IOS</a>
                          </li>
                          <li>
                            {" "}
                            <a className="work_head_item">
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
                          src={require("../../assets/images/Portfolio/Device-Image-one.webp")}
                          alt="Device-Image-one"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box work_head_box_one"
              >
                <a href="/" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="/" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="/" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="/" className="work_head_box_link">
                        <h2>Paddock </h2>
                      </a>
                      <ul className="ps-0">
                        <a href="/" className="work_head_box_link"></a>
                        <li>
                          <a href="/" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="/" className="work_head_item">
                            Android App
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/" className="work_head_item">
                            Flutter
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/" className="work_head_item">
                            IOS
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/" className="work_head_item">
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
                        src={require("../../assets/images/Portfolio/Device-Image-two.webp")}
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
                <a href="/" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="/" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="/" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="/" className="work_head_box_link">
                        <h2>Food Wastage </h2>
                      </a>
                      <ul className="ps-0">
                        <a href="/" className="work_head_box_link"></a>
                        <li>
                          <a href="/" className="work_head_box_link">
                            {" "}
                          </a>
                          <a href="/" className="work_head_item">
                            Android App
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/" className="work_head_item">
                            IOS
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/" className="work_head_item">
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
                        src={require("../../assets/images/Portfolio/Device-Image-three.webp")}
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

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>
              Why Choose App Ideas For React Native App Development Company?
            </h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("experience_expertise")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "experience_expertise" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={Experience}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("robust_protfolio")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "robust_protfolio" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={Robust}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Robust Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("full_lifestyle_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "full_lifestyle_support" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    <img
                      src={Lifecycle}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Full Lifecycle support</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("agile_development")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "agile_development" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <img
                      src={Agile}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("fast_paced_development")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "fast_paced_development" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <img
                      src={Fast}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Fast-paced development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose("competitive_price")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === "competitive_price" &&
                      "service__provide_tab_active"
                    } `}
                  >
                    {" "}
                    <img
                      src={Competitive}
                      alt="Competitive-Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === "experience_expertise" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and Expertise.</h3>
                    <p className="Title_para">
                      We are from The App Ideas is a leading web and app
                      development company. We offer website development services
                      as well as the best iPad App development service which
                      will helps businesses to grow and increase the engagement
                      of the users towards your services.
                    </p>
                    <p className="Title_para">
                      Before hiring any software development company, it is very
                      important for you to know the expertise of the team. We
                      offer a talented pool of Ipad developers having years of
                      experience proven expertise and great credentials.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "robust_protfolio" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Robust Portfolio</h3>
                    <p className="Title_para">
                      Before hiring any software development services, it is
                      very important for you to check the form detail as well as
                      their past projects. By checking their past projects, you
                      will get a clear idea about their experience and expertise
                      in Android Mobile app development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the topmost software development
                      company. We have a team of a highly experienced and expert
                      team of Android app developers who provide the best
                      solution for all types of business categories. As an
                      expert Android development company, we boast a robust
                      portfolio of the most successful android apps across the
                      nices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "full_lifestyle_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Full Lifecycle support</h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. Nowadays, from the current market
                      scenario, we can clearly see the demand and the increasing
                      popularity of Android app solutions in the market. Every
                      business and startup is now launching their Android mobile
                      app in the market for engaging more users.
                    </p>
                    <p className="Title_para">
                      By choosing The App Ideas for your Android app development
                      you will get various advantages. One of the advantages is
                      Full Lifecycle support which means we offer support for
                      the full lifecycle of the app starting from the
                      development and launching phase to post-launch marketing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "agile_development" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile development</h3>
                    <p className="Title_para">
                      In this present time, the demand for Android app
                      development is increasing because of its best convenience
                      and comfort. More than half of the population own
                      smartphones, so they prefer a mobile apps for accessing
                      all kinds of services. This is the main reason why service
                      owners are shifting towards online platforms.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas, which is a leading web and app
                      development company. For Android app development, we
                      strictly follow the agile methodology for delivering the
                      best output without compromising on the qualitative
                      parameters.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "fast_paced_development" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Fast-paced development</h3>
                    <p className="Title_para">
                      In this modern or we can say digital era, everything is
                      digitalizing as quickly as possible. Similarly, it is very
                      easy to access all kinds of services through smartphones
                      which are cost-saving as well as time-saving. Business
                      owners and entrepreneur are looking for the software
                      development company which offer the fast-paced development
                      services.
                    </p>
                    <p className="Title_para">
                      The App Ideas are one of best web and app development
                      company. We have a team of a highly skilled and expert
                      team of Android app developers who provide the best
                      solution for every business niche. With our Android
                      development process, we ensure the fastest turnaround time
                      and shortest time to market for each and every app.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === "competitive_price" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive price</h3>
                    <p className="Title_para">
                      If you are planning to launch an Android app solution in
                      the market for your business then this is the right time
                      to make the investment, The Android mobile app can help
                      you to stand out differently among the competitions and
                      increase the user engagement towards your business.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading software development
                      company. We have a team of highly skilled web and app
                      developers who offer the best solution at the best rates.
                      We offer highly competitive pricing for our Android app
                      development services that remains affordable even for
                      small enterprises.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <ContactUs
        question="Do you want to know more about our expertise in Android app development?
Do you want to know how we can make great value additions with our Android development?"
      />
      {/* Contact Section End */}
    </>
  );
};

export default AndroidAppDevelopment;
