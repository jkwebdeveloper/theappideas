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

//  Passenger App
import Social from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Social Login.svg";
import ProfileManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/profile-management.svg";
import Current from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Current Booking.svg";
import Live from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Live-Driver-Tracking.svg";
import LiveChat from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Live Chat.svg";
import Call from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Call with driver.svg";
import Ratings from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Rating _ Reviews.svg";
import Give from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Give-A-Tip.svg";
import Pay from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/Pay-Online.svg";
import Requestt from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/User-Get-The-.svg";
import card from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Passenger Driver/card management.svg";

//  Driver Tracking App
import Register from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Login_Register.svg";
import First from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/First use checkup list.svg";
import Booking from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Booking Details.svg";
import Route from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Route-Information.svg";
import Start from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Start _ End Journey.svg";
import Callwith from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Call with Passenger.svg";
import Panic from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Panic-Button.svg";
import receive from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/Receive-Tip.svg";
import Historyy from "../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver Tracking App/History of trips.svg";
import { Link } from "react-router-dom";

const DriverTrackData = [
  {
    id: 1,
    category: "Passenger-Driver",
    image: Social,
    title: "Social Logins",
  },
  {
    id: 2,
    category: "Passenger-Driver",
    image: ProfileManagement,
    title: "login type (leading Passenger or Travelling Passenger)",
  },
  {
    id: 3,
    category: "Passenger-Driver",
    image: ProfileManagement,
    title: "Profile Management",
  },
  {
    id: 4,
    category: "Passenger-Driver",
    image: Current,
    title: "Current Booking Details",
  },
  {
    id: 5,
    category: "Passenger-Driver",
    image: Live,
    title: "Live Driver Tracking",
  },
  {
    id: 6,
    category: "Passenger-Driver",
    image: LiveChat,
    title: "Live Chat",
  },
  {
    id: 7,
    category: "Passenger-Driver",
    image: Call,
    title: "Call with driver",
  },
  {
    id: 8,
    category: "Passenger-Driver",
    image: Ratings,
    title: "Ratings & Reviews",
  },
  {
    id: 9,
    category: "Passenger-Driver",
    image: Give,
    title: "Give a tip to the driver",
  },
  {
    id: 10,
    category: "Passenger-Driver",
    image: Pay,
    title: "Pay online",
  },
  {
    id: 11,
    category: "Passenger-Driver",
    image: Requestt,
    title: "Request for instant quote",
  },
  {
    id: 12,
    category: "Passenger-Driver",
    image: card,
    title: "card management",
  },
  {
    id: 13,
    category: "Driver-Tracking",
    image: Register,
    title: "Login/ Register as CH4U Driver or Contractor Driver",
  },
  {
    id: 14,
    category: "Driver-Tracking",
    image: ProfileManagement,
    title: "Profile Management",
  },
  {
    id: 15,
    category: "Driver-Tracking",
    image: First,
    title: "First use checkup list",
  },
  {
    id: 16,
    category: "Driver-Tracking",
    image: Booking,
    title: "Booking Details",
  },
  {
    id: 17,
    category: "Driver-Tracking",
    image: Route,
    title: "Route information",
  },
  {
    id: 18,
    category: "Driver-Tracking",
    image: Start,
    title: "“Start & End Journey",
  },
  {
    id: 19,
    category: "Driver-Tracking",
    image: LiveChat,
    title: "Live Chat",
  },
  {
    id: 20,
    category: "Driver-Tracking",
    image: Callwith,
    title: "Call with Passenger",
  },
  {
    id: 21,
    category: "Driver-Tracking",
    image: Panic,
    title: "Panic Button",
  },
  {
    id: 22,
    category: "Driver-Tracking",
    image: Ratings,
    title: "Ratings & Reviews",
  },
  {
    id: 23,
    category: "Driver-Tracking",
    image: receive,
    title: "receive Tip",
  },
  {
    id: 24,
    category: "Driver-Tracking",
    image: Historyy,
    title: "History of trips",
  },
];

const DriverTrackingApp = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [items, setItems] = useState(DriverTrackData);
  const filterItem = (cateItem) => {
    const updateItems = DriverTrackData.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItems(updateItems);
  };
  return (
    <>
      {/* common Banner start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>On Demand Driver Tracking App</h2>
                <p>
                  Real-time tracking of on-road vehicles and drivers offers
                  immense opportunity to boost the efficiency of manpower, fuel
                  and the vehicle. This is why driver tracking apps with
                  real-time tracking feature are getting so popular. We at the
                  App Ideas build most advanced driver tracking apps with
                  cutting-edge tracking technology to help GPS Tracking App
                  driver and vehicle whereabouts precisely.
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
                      Best Driver Tracking App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Driver Tracking App Development
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver-Tracking-App.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>E-Learning App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/Driver-Tracking-2.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>E-learning Mobile App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/On-Demand-Driver-Tracking-App-Development.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>E-learning App Developer</h4>
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
            <h3>Enormous Features of Driver Tracking App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Passenger-Driver-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Passenger-Driver"
                  type="button"
                  role="tab"
                  aria-controls="Passenger-Driver"
                  aria-selected="true"
                  onClick={() => filterItem("Passenger-Driver")}
                >
                  Passenger Driver Tracking App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Driver-Tracking-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Driver-Tracking"
                  type="button"
                  role="tab"
                  aria-controls="Driver-Tracking"
                  aria-selected="false"
                  onClick={() => filterItem("Driver-Tracking")}
                >
                  Driver Tracking App
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
                  {items.map((elem) => {
                    const { id, image, title } = elem;
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
                    src={require("../../../assets/images/SOLUTIONS/Delivery App/Food-app/food1.webp")}
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
            <h3>Why should you create a Driver Tracking App?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Driver-Productivity1.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Driver Productivity</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Reaching-Destination-Faster1.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Destination Faster</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Fuel-Efficiency1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Fuel Efficiency</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/On-Road-Security1.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>On-Road Security</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Better-Vehicle-Maintenance1.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Better Vehicle Maintenance</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Driver Tracking App/why-should/Real-Time-Communication1.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Real-Time Communication</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Anywhere-anytime access</h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading web and app development
                    company. We have a team of highly skilled website and mobile
                    app developers who will offer the best services at the best
                    rates. We have years of experience in offering the best and
                    advanced Grocery Store app development services.
                  </p>
                  <p className="Title_para">
                    Along with the best design and advanced feature integration,
                    we offer a highly scalable grocery store app solution. A
                    highly scalable grocery store can be useful for you as they
                    have easy availability, maintenance, better performance and
                    more. If you are planning of launching the foremost grocery
                    store app then feel free to reach us and get a free quote.
                  </p>
                </div>
              </div>
            </div>
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
                  Would you like to create a Driver tracking App?
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

export default DriverTrackingApp;
