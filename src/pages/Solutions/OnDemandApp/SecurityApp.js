import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";

//  Contractor App
import ProfileManagement from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/profile-manage-4.svg";
import Agency from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Agency-Role.svg";
import Chatwith from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Chat-With-The-Client.svg";
import GetOffers from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Get offers.svg";
import TimeManagement from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Time-Management-Tracking.svg";
import GetPaid from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Get-Paid-Online.svg";
import Rating from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Rating _ Reviews.svg";
import News from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/news.svg";
import Community from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/community.svg";

// Client-App
import JobPosting from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Job-Posting.svg";
import Contractor from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Search for Contractor Agency.svg";
import LiveChat from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Live Chat.svg";
import Hire from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/hire.svg";
import PayOnline from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Pay-Online.svg";
import TimeTracking from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Client App/Time-Management-Tracking.svg";
import { Link } from "react-router-dom";
import ContactUs from "../../../components/ContactUs";

const SecurityApp = () => {
  const [activeSection, setActiveSection] = useState("contractor_app");
  const [data, setData] = useState([]);
  const [activeWhyShould, setActiveWhyShould] = useState("advanced_technology");

  const SecurityData = [
    {
      id: 1,
      category: "contractor_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The Contractor/ Agency can register, login, create & manage his/her profile.",
    },
    {
      id: 2,
      category: "contractor_app",
      image: Agency,
      title: "Agency Role",
      des: "The agency can add multiple contractors under them.",
    },
    {
      id: 3,
      category: "contractor_app",
      image: Chatwith,
      title: "Chat with the Client",
      des: "Once the client approves contractors interest then they can chat with each other.",
    },
    {
      id: 4,
      category: "contractor_app",
      image: GetOffers,
      title: "Get Offers",
      des: "Contractor gets offers, view offers and decide to accept or reject it.",
    },
    {
      id: 5,
      category: "contractor_app",
      image: TimeManagement,
      title: "Time Management & Tracking",
      des: "Contractor login his in time, out time, view and manage timesheet and get approved by the client.",
    },
    {
      id: 6,
      category: "contractor_app",
      image: GetPaid,
      title: "Get Paid Online",
      des: "The contractor sends withdraw the request and get paid.",
    },
    {
      id: 7,
      category: "contractor_app",
      image: Rating,
      title: "Rating & Reviews",
      des: "After completion of the job, the contractor can drop his/her feedback.",
    },
    {
      id: 8,
      category: "contractor_app",
      image: News,
      title: "News",
      des: "Admin post some news and contractors can view that news.",
    },
    {
      id: 9,
      category: "contractor_app",
      image: Community,
      title: "Community",
      des: "Contractors, participate in communities. ask questions and give answers and become engaged with each other.",
    },
    {
      id: 10,
      category: "client_app",
      image: ProfileManagement,
      title: "Profile Management",
      des: "The client can register, login, create & manage his/her profile.",
    },
    {
      id: 11,
      category: "client_app",
      image: JobPosting,
      title: "Job Posting",
      des: "The client can post job/ jobs as per the need, the customer can specify the job type.",
    },
    {
      id: 12,
      category: "client_app",
      image: Contractor,
      title: "Search for Contractor/Agency",
      des: "The client can search for a suitable contractor or agency as per the need.",
    },
    {
      id: 13,
      category: "client_app",
      image: LiveChat,
      title: "Live Chat",
      des: "The client can view the profile of a contractor and able to chat with the contractor/ agency.",
    },
    {
      id: 14,
      category: "client_app",
      image: Hire,
      title: "Hire",
      des: "The client can hire a contractor for a specific period.",
    },
    {
      id: 15,
      category: "client_app",
      image: PayOnline,
      title: "Pay Online",
      des: "The client can pay online via stripe.",
    },
    {
      id: 16,
      category: "client_app",
      image: TimeTracking,
      title: "Time Management & Tracking",
      des: "Contractor in time, out time, the timesheet will be approved by the customer.",
    },
    {
      id: 17,
      category: "client_app",
      image: Rating,
      title: "Rating & Reviews",
      des: "After completion of the job, the client can drop his feedback.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filterItem = () => {
    const updateItems = SecurityData.filter((curElem) => {
      return curElem.category === activeSection;
    });
    setData(updateItems);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  // run when activesection changes
  useEffect(() => {
    filterItem();
  }, [activeSection]);

  return (
    <>
      {/* common Banner start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>On Demand Security Guard App</h2>
                <p>
                  As the digital space and a whole array of connected gadgets
                  are penetrating into the remote recesses of personal life, the
                  demand for advanced and custom security solutions are steadily
                  increasing. Our On Demand Security App Development processes
                  take care of such varied security needs in different contexts.
                  We built most sophisticated on-demand security apps to deal
                  with a variety of security challenges and loopholes.
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
                      Best Security Guard App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Security Guard App Development
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
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Security-Guard-App-Development-Services.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>On-Demand Doctor App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/On-Demand-Security-Guard-App-Development.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Doctor Appointment App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Security-Guard-App-Development.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>On-Demand Doctor App Development Company</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>GET A FREE DEMO</h4>
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
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of On Demand Security Guard App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "contractor_app" && "active"
                  }`}
                  id="Contractor-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Contractor-App"
                  type="button"
                  role="tab"
                  aria-controls="Contractor-App"
                  aria-selected="true"
                  onClick={() => setActiveSection("contractor_app")}
                  style={{ cursor: "pointer" }}
                >
                  Contractor App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === "client_app" && "active"
                  }`}
                  id="Client-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Client-App"
                  type="button"
                  role="tab"
                  aria-controls="Client-App"
                  aria-selected="false"
                  onClick={() => setActiveSection("client_app")}
                  style={{ cursor: "pointer" }}
                >
                  Client App
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="Customer-App"
                role="tabpanel"
                aria-labelledby="Customer-App-Tab"
              >
                <div className="row">
                  {data.map((elem) => {
                    const { id, image, des, title } = elem;
                    return (
                      <div
                        key={id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4"
                      >
                        <div className="food__delivery__box">
                          <img
                            src={image}
                            alt="search-food-icon"
                            className="img-fluid"
                            style={{ height: "60px" }}
                          />
                          <h4>{title}</h4>
                          <p>{des}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Delivery App Section End */}
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
                    src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/slider/security.webp")}
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
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>
              Why should you take the Grocery Store App Solutions from us?
            </h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("advanced_technology")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === "advanced_technology" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Advanced-Technology-1.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Advanced technology</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("custom_security")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === "custom_security" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Custom-Security-Solution-1.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom security solution</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("context_aware")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === "context_aware" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Context-Aware-Security-Solution-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Context-aware security solution</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("seamless")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === "seamless" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Seamless-Integration-1.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Seamless integration</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("scalable")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === "scalable" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Scalable-Security-1.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Scalable security</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould("continuous_support")}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === "continuous_support" &&
                      "service__provide_tab_active"
                    }`}
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/why-should/Continuous-Support-1.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Continuous support</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyShould === "advanced_technology" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Advanced technology</h3>
                    <p className="Title_para">
                      Unlike the ready-to-use security solutions, on-demand
                      security apps are built with cutting edge technologies.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "custom_security" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom security solution</h3>
                    <p className="Title_para">
                      These apps incorporate custom security solutions specific
                      to the needs of the clients.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === "context_aware" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Context-aware security solution
                    </h3>
                    <p className="Title_para">
                      On-demand security apps are built keeping the context and
                      use cases of the clients in mind.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "seamless" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Seamless integration</h3>
                    <p className="Title_para">
                      Thanks to such an app in real-time any security issue or
                      challenge can be known and accordingly on-road traffic can
                      be reached for help.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "scalable" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Scalable security</h3>
                    <p className="Title_para">
                      On-demand security apps, unlike readymade security
                      solutions, remain scalable to increasing uses and traffic.
                    </p>
                  </div>
                </div>
              </div>
            )}{" "}
            {activeWhyShould === "continuous_support" && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Continuous support</h3>
                    <p className="Title_para">
                      On-demand security apps continuous and consistent support
                      from the developers.
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
      <ContactUs question="Would you like to create an On Demand Security Guard App?" />
      {/* Contact Section End */}
    </>
  );
};

export default SecurityApp;
