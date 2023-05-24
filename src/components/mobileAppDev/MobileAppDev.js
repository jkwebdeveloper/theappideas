import { React, useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import "./mobileAppDev.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../Workdone/Work";
import TestiMonial from "../Testimonial/TestiMonial";
import mobileApp from "../../assets/images/MobileAppDev/Mobile App Development Company/Mobile App Development.svg";
import Application from "../../assets/images/MobileAppDev/Mobile App Development Company/Mobile Application Development Company.svg";
import Mobileapplication from "../../assets/images/MobileAppDev/Mobile App Development Company/mobile app developer.svg";
import IPhoneapp from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/IPhone App Development.svg";
import Ipadeapp from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/IPad Mobile app development.svg";

import Androidapp from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Android Mobile app development.svg";
import Androidtablet from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Android Tablet app development.svg";
import Reskinning from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Mobile App Reskinning.svg";
import Redesigning from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Mobile App Redesigning.svg";
import Upgradation from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Mobile App Upgradation.svg";
import Mobileappsupport from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Mobile app Support and maintenance.svg";
import Crossplatform from "../../assets/images/MobileAppDev/Mobile App Development Company/Services we provide/Cross-platform Mobile Apps.svg";

import Shopping from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Shopping _ E-Commerce.svg";
import Education from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Education and E-Learning.svg";
import Banking from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Banking and finance.svg";
import Travel from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Travel and Tourism.svg";
import Food from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Food and Drink.svg";
import SocialNetworking from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Social Networking.svg";
import lifestyle from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Health and Fitness.svg";
import Real from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Real Estate.svg";
import health from "../../assets/images/MobileAppDev/Mobile App Development Company/Industries We Serve/Health and Fitness.svg";

const MobileAppDev = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      id: 1,
      question: "What does Mobile App Development Require?",
      answer:
        "Mobile app development entails making computer programs that can run on a wide range of mobile platforms and devices. If you want to have a successful mobile app, you should choose a business that has experience making such apps and follows a tried-and-true process. Mobile app developers provide an all-encompassing development plan, interface design, software development, software distribution, and backend services to back up the app. Core features of the software are tested often during development.",
    },
    {
      id: 2,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 3,
      question:
        "Which platform, Android or iOS, should our application be launched on?",
      answer:
        "In the past, companies had the option of creating software just for one OS. Even while major mobile OSes like Android and iOS have huge user bases, most companies still choose to create apps that work on both.",
    },
    {
      id: 4,
      question:
        "What is the Difference Between Cross-Platform and Native App Development?",
      answer:
        "Cross-platform development refers to the process of creating software for several platforms as opposed to only one. The process of creating applications specifically for different platforms, including Android and iOS, is known as native app development. A software that functions effectively on both systems may be made using cross-platform development approaches.",
        
    },
    {
      id: 5,
      question:
        "Can You Work With Us if We Don’t Have a Fully Formed Idea for Our App?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 6,
      question: "Will You Sign an NDA for the App You’re Developing?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 7,
      question: "Do I Need to Test My App?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 8,
      question: "Can an App connect to my existing systems/data store?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 9,
      question: "Should I prepare my app's visual (wireframe)?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 10,
      question: "Who will own the intellectual property rights to my App?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
  ];
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Mobile App Development Company</h2>
                <p>
                  Mobile App Development Company Mobile App development is
                  considered as the expertise field of The App Ideas. The App
                  Ideas is a leading web and mobile app development Company. Due
                  to the high demand for a digital soluti on, many business
                  owners and entrepreneurs are making a high investment in the
                  mobile application for increasing profit rates. The App Ideas
                  has a team of experts who provide the foremost native, cross
                  platforms and Hybrid platforms solutions at the best rates.
                  Hire our developers and take advantages of our services at an
                  affordable price.
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
                      Best Mobile App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Mobile App Development
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
                        src={mobileApp}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Mobile App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={Application}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Mobile Application Development Company </h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={Mobileapplication}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Mobile Application Developer</h4>
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
            <h3>Services we provide</h3>
            <p>
              Over the years, with a team of Experienced, Skilled and Creative
              bunch of the{" "}
              <a href="#">
                <b>Mobile app developers</b>
              </a>
              and UI/UX designer, We have worked on various themes based as well
              as customized mobile app solution which will be best for your
              Business. We help our clients with innovative ideas and unique
              designs which helps in providing the best user experiences to the
              business.
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
                      src={IPhoneapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      IPhone App <br /> Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Ipadeapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Ipad App <br />
                      Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Androidapp}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Android App <br /> Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Androidtablet}
                      alt="smartphone-tablet"
                      className="img-fluid"
                    />
                    <p>
                      Android tablet <br />
                      App Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Reskinning}
                      alt="smart-watch"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Reskinning
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Redesigning}
                      alt="Mobile-App-Redesigning"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Redesigning
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Upgradation}
                      alt="Mobile-App-Upgradation"
                      className="img-fluid"
                    />
                    <p>
                      Mobile App <br /> Upgradation
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Mobileappsupport}
                      alt="service-icon"
                      className="img-fluid"
                    />
                    <p>
                      Mobile app support <br /> and service
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Crossplatform}
                      alt="Cross-platform-Mobile-Apps"
                      className="img-fluid"
                    />
                    <p>
                      Cross-platform <br /> mobile App
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">IPhone App Development</h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading web as well as mobile
                    app development company. We are highly experienced in
                    providing the best Mobile app services for Android devices
                    as well as for IOS devices. We have a team of highly skilled
                    IOS app developers who are efficient in providing successful
                    iPhone app development services. We are highly expert in
                    deploying successful iPhone Mobile app development as per
                    the client’s requirements.
                  </p>
                  <p className="Title_para">
                    Are you looking for the best iPhone App Development
                    services?
                  </p>
                  <p className="Title_para">
                    If Yes, then without taking much time, let’s get connected.
                    We are happy to help you to launch a successful iPhone
                    Mobile app services which will be very profitable for your
                    business. We mainly follow the steps like initially, we
                    gather the requirements, analyze the client’s requirements,
                    have a meeting for clearing all the doubt of the clients,
                    divide the overall project into milestones, take clients
                    approval in every stage and deliver the project on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <>
        {/* Technologies Section Start */}
        <section className="technologies__section py-5">
          <div className="container">
            <div className="Title__White mb-4">
              <h3>Technologies we use</h3>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/obj-c-icon.png")}
                    alt="obj-c-icon"
                    className="img-fluid"
                  />
                  <h2>Objective C</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/swift-icon.png")}
                    alt="swift-icon"
                    className="img-fluid"
                  />
                  <h2>Swift</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/java.png")}
                    alt="Java"
                    className="img-fluid"
                  />
                  <h2>Java</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/kotlin.png")}
                    alt="kotlin"
                    className="img-fluid"
                  />
                  <h2>Kotlin</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/react-native.png")}
                    alt="react-native"
                    className="img-fluid"
                  />
                  <h2>React Native</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="technologies_box text-center">
                  <img
                    src={require("../../assets/images/MobileAppDev/technogies-img/flutter.png")}
                    alt="flutter"
                    className="img-fluid"
                  />
                  <h2>Flutter</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section End */}
        <>
          {/* Service Section Start */}
          <section className="service__provide__section py-5">
            <div className="container">
              <div className="Title">
                <h3>Industries We Serve</h3>
                <p>
                  We are highly proficient in offering mobile app development
                  company services across multiple industries over the years as
                  well as we have also helped various businesses in various
                  domains. We have served a wide range of industries like
                  Finance, Government, Real Estate, Retail, Healthcare, Travel
                  and more.
                </p>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a
                        href="#"
                        className="service__provide_tab service__provide_tab_active"
                      >
                        <img
                          src={Shopping}
                          alt="shopping-1"
                          className="img-fluid"
                        />
                        <p>Shopping &amp; E-Commerce</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src={health}
                          alt="health-and-fitness-1"
                          className="img-fluid"
                        />
                        <p>Health &amp; Fitness</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src={Education}
                          alt="smartphone-tablet"
                          className="img-fluid"
                        />
                        <p>Education &amp; E-Learning</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src={Banking}
                          alt="banking-1"
                          className="img-fluid"
                        />
                        <p>Banking &amp; Finance</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img src={Travel} alt="travel" className="img-fluid" />
                        <p>Travel &amp; Tourism</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img src={Food} alt="food-1-1" className="img-fluid" />
                        <p>Food &amp; Drink</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src={SocialNetworking}
                          alt="Social-Networking"
                          className="img-fluid"
                        />
                        <p>Social Networking</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src={lifestyle}
                          alt="lifestyle"
                          className="img-fluid"
                        />
                        <p>lifestyle &amp; mobility</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src={Real}
                          alt="Real-Estate"
                          className="img-fluid"
                        />
                        <p>
                          Real <br /> Estate
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <div className="service_rht">
                    <div className="Title">
                      <h3 className="Title_heading">
                        Shopping &amp; E-Commerce
                      </h3>
                      <p className="Title_para">
                        We are highly experienced in providing the best software
                        development services to each niche with unique designing
                        and development services as well as at the best costing.
                        We have a team of highly skilled developers as well as
                        designers who initially try to understand the client’s
                        requirements.
                      </p>
                      <p className="Title_para">
                        Currently, many business owners are shifting their
                        services into online platforms like websites, web apps
                        or mobile apps. It is beneficial to convert your
                        business into online platforms because this makes the
                        work easier for you as well as for your users.
                      </p>
                      <p className="Title_para">
                        Are you planning to launch a Shopping and E-commerce
                        Store in the market?
                      </p>
                      <p className="Title_para">
                        If Yes, then feel free to connect with us. Let’s have a
                        quick call to discuss your requirements in detail. Our
                        Process starts from Requirements Gathering and Analysis,
                        The meeting for clearing out the questions, Project
                        Estimation and Proposal, Resources and team allocation,
                        Daily/Weekly updates and the deployment of the projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Service Section End */}

          {/* <!-- Work Slider Start --> */}
          <Work />
          {/* <!-- Work Slider End --> */}

          {/* Client testimonial Section Start */}
          <TestiMonial />
          {/* Client testimonial Section End */}

          <>
            {/* FAQ Section Start */}
            <section className="accordion_section py-5">
              <div className="container">
                <div className="Title">
                  <h3>Frequently Asked Questions</h3>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
                    {data.slice(0, 5).map((item) => (
                      <div className="accordion" key={item.id}>
                        <div className="item">
                          <h2 className="title" onClick={() => toggle(item.id)}>
                            {item.question}
                            <span>
                              {selected === item.id ? (
                                <BiMinusCircle />
                              ) : (
                                <BiPlusCircle />
                              )}
                            </span>
                          </h2>
                        </div>
                        <div
                          className={
                            selected === item.id
                              ? "accordion_content show"
                              : "accordion_content"
                          }
                        >
                          {item.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
                    {data.slice(5, 10).map((item, i) => (
                      <div className="accordion" key={item.id}>
                        <div className="item">
                          <h2 className="title" onClick={() => toggle(item.id)}>
                            {item.question}
                            <span>
                              {selected === item.id ? (
                                <BiMinusCircle />
                              ) : (
                                <BiPlusCircle />
                              )}
                            </span>
                          </h2>
                        </div>
                        <div
                          className={
                            selected === item.id
                              ? "accordion_content show"
                              : "accordion_content"
                          }
                        >
                          {item.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* FAQ Section End */}
          </>

          <>
            {/* Contact Section Start */}
            <section className="testi-bg py-4">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
                    <div className="contact__lft">
                      <p>
                        Do you like to know more about our expertise in mobile
                        app development?
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
        </>
      </>
    </>
  );
};

export default MobileAppDev;
