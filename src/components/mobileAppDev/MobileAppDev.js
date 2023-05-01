import React from "react";
import "./mobileAppDev.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Work from "../Workdone/Work";
import TestiMonial from "../Testimonial/TestiMonial";

const MobileAppDev = () => {
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
                        src={require("../../assets/images/MobileAppDev/Mobile-App-Development.png")}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                      />
                      <h4>Mobile App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/Mobile-Application-Development-Company.png")}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                      />
                      <h4>Mobile Application Development Company </h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../assets/images/MobileAppDev/Mobile-Application-Developer.png")}
                        alt="Mobile-App-Development"
                        className="img-fluid"
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
                      src={require("../../assets/images/MobileAppDev/icons8-smartphone-tablet-80-1.png")}
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
                      src={require("../../assets/images/MobileAppDev/iPad-app-development.png")}
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
                      src={require("../../assets/images/MobileAppDev/icons8-touchscreen-80-1.png")}
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
                      src={require("../../assets/images/MobileAppDev/Android-tablet-app-development.png")}
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
                      src={require("../../assets/images/MobileAppDev/icons8-smart-watch-80-1.png")}
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
                      src={require("../../assets/images/MobileAppDev/Mobile-App-Redesigning.png")}
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
                      src={require("../../assets/images/MobileAppDev/Mobile-App-Upgradation.png")}
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
                      src={require("../../assets/images/MobileAppDev/icons8-service-80-1.png")}
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
                      src={require("../../assets/images/MobileAppDev/Cross-platform-Mobile-Apps.png")}
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
                          src="assets/img/shopping-1.png"
                          alt="shopping-1"
                          className="img-fluid"
                        />
                        <p>Shopping &amp; E-Commerce</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/health-and-fitness-1.png"
                          alt="health-and-fitness-1"
                          className="img-fluid"
                        />
                        <p>Health &amp; Fitness</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/education-1.png"
                          alt="smartphone-tablet"
                          className="img-fluid"
                        />
                        <p>Education &amp; E-Learning</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/banking-1.png"
                          alt="banking-1"
                          className="img-fluid"
                        />
                        <p>Banking &amp; Finance</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/travel-1.png"
                          alt="travel"
                          className="img-fluid"
                        />
                        <p>Travel &amp; Tourism</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/food-1-1.png"
                          alt="food-1-1"
                          className="img-fluid"
                        />
                        <p>Food &amp; Drink</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/Social-Networking.png"
                          alt="Social-Networking"
                          className="img-fluid"
                        />
                        <p>Social Networking</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/lifestyle.png"
                          alt="lifestyle"
                          className="img-fluid"
                        />
                        <p>lifestyle &amp; mobility</p>
                      </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                      <a href="#" className="service__provide_tab">
                        <img
                          src="assets/img/Real-Estate.png"
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
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            What does Mobile App Development Require?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <b>Mobile app development</b> entails making
                            computer programs that can run on a wide range of
                            mobile platforms and devices. If you want to have a
                            successful mobile app, you should choose a business
                            that has experience making such apps and follows a
                            tried-and-true process. Mobile app developers
                            provide an all-encompassing development plan,
                            interface design, software development, software
                            distribution, and backend services to back up the
                            app. Core features of the software are tested often
                            during development.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            What Are the Different Types of Mobile Apps You Can
                            Develop?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Applications may be developed for mobile devices
                            running both the Android and iOS operating systems.
                            Customers, employees, or even vendors may promote
                            certain apps for use.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="flush-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Which platform, Android or iOS, should our
                            application be launched on?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            In the past, companies had the option of creating
                            software just for one OS. Even while major mobile
                            OSes like Android and iOS have huge user bases, most
                            companies still choose to create apps that work on
                            both..
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            What is the Difference Between Cross-Platform and
                            Native App Development?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Cross-platform development refers to the process of
                            creating software for several platforms as opposed
                            to only one. The process of creating applications
                            specifically for different platforms, including
                            Android and iOS, is known as native{" "}
                            <b>app development</b>. A software that functions
                            effectively on both systems may be made using
                            cross-platform development approaches.
                            <br />
                            <div className="mt-3">
                              <b>
                                It’s recommended to use the OS’s native
                                programming languages and integrated development
                                environments when developing native apps (IDEs).
                                Java or Kotlin proficiency and familiarity with
                                Android Studio are often required for Android
                                app development. You must use Xcode and either
                                Objective C or Swift while developing an iOS app
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            Can You Work With Us if We Don’t Have a Fully Formed
                            Idea for Our App?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFive"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            We engineers are used to collaborating with
                            businesses whose app concepts are in varied phases
                            of development. Let’s collaborate to bring your
                            ideas to life as practical mobile applications.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Will You Sign an NDA for the App You’re Developing?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            We are willing to sign non-disclosure agreements
                            throughout the development of your mobile app
                            (NDAs). You can trust us to keep your development
                            under wraps and out of the hands of your competitors
                            at all times.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Do I Need to Test My App?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Our knowledgeable internal testing crew puts every
                            mobile app through rigorous testing. This group
                            works closely with the developers to make sure the
                            applications being created are of the best quality
                            possible. You are welcome to participate in our
                            internal testing as well as your own, of course. You
                            could have suggestions for other uses for the app,
                            allowing you to develop test cases that are more
                            difficult.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Can an App connect to my existing systems/data
                            store?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            You may rely on us to develop API-based applications
                            that smoothly synchronise with your current
                            infrastructure (API). Because to APIs that may be
                            developed in any language, your datastore can be
                            accessed and utilised by any software.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Should I prepare my app's visual (wireframe)?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Our development team may collaborate with you to
                            create the app if you have access to a web designer
                            and are prepared to give graphics. The We team would
                            be pleased to assist you with visualising your
                            concept and bringing it to life in the digital
                            sphere, even if all you currently have is a
                            conception or an idea.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="v"
                          >
                            Who will own the intellectual property rights to my
                            App?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            The SPAR team’s obligations are limited to providing
                            advice and support while you develop the App for
                            your clients since the App is based on your idea,
                            concept, and company, and you retain all rights to
                            it.
                          </div>
                        </div>
                      </div>
                    </div>
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
