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
import SignUp from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/signup.svg";
import Pickup from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Pick up Location.svg";
import Drop from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Drop off location.svg";
import BookingTypes from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Booking Types.svg";
import Chat from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Chat.svg";
import OnlinePayment from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Online payment.svg";
import Ratings from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Rating _ Reviews.svg";
import Order from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Order History.svg";
import AvailOffers from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Avail offer.svg";
import Payvia from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Passenger App/Pay with Wallet.svg";

// On-Demand-Driver-App
import Flexible from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Flexible-ride-choice.svg";
import Driverchat from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Driver chat option.svg";
import Finding from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Finding the available drivers.svg";
import approaching from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Driver approaching scenarios.svg";
import Boarding from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Boarding process.svg";
import cancellation from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Ride cancellation scenarios.svg";
import During from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/During the ride features.svg";
import Accepting from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Accepting and not accepting rides.svg";
import passenger from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/On Demand Driver App/Rating _ Reviews.svg";

// Backend
import Driverstatus from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Driver status and reports.svg";
import Userstatus from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/User status and reports.svg";
import Trip from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Trip status and reports.svg";
import Revenue from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Revenue earning status and reports.svg";
import Currentlyactive from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Currently active drivers.svg";
import Currently from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Currently ongoing trips.svg";
import Complaints from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Complaints against driver.svg";
import Disciplinary from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Disciplinary actions on drivers and passengers.svg";
import Liveevents from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Live feed.svg";
import Notificationclients from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Notification to all clients.svg";
import Weekly from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Weekly monthly payment invoicing.svg";
import Email from "../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Backend/Email system.svg";

const TaxiBookingData = [
  {
    id: 1,
    category: "Passenger-App",
    image: SignUp,
    title: "Sign Up",
    des: "Users need to register or sign up with the app.",
  },
  {
    id: 2,
    category: "Passenger-App",
    image: Pickup,
    title: "Pick up Location",
    des: "Users need to choose their exact locations on a GPS enabled map.",
  },
  {
    id: 3,
    category: "Passenger-App",
    image: Drop,
    title: "Drop off Location",
    des: "Users need to choose their preferred drop-off location or destination on the GPS map.",
  },
  {
    id: 4,
    category: "Passenger-App",
    image: BookingTypes,
    title: "Booking Types",
    des: "Users need to choose one booking type from all the available types of booking.",
  },
  {
    id: 5,
    category: "Passenger-App",
    image: Chat,
    title: "Chat",
    des: "Users is allowed to chat with the drivers or the admin whenever needed.",
  },
  {
    id: 6,
    category: "Passenger-App",
    image: OnlinePayment,
    title: "Online Payment",
    des: "Users can pay their fare online by using any of the available payment methods.",
  },
  {
    id: 7,
    category: "Passenger-App",
    image: Ratings,
    title: "Ratings Reviews",
    des: "Users can give rating to the driver and the app and post reviews on the basis of their feedback.",
  },
  {
    id: 8,
    category: "Passenger-App",
    image: Order,
    title: "Order History",
    des: "Users can access their order history to have a detailed look at the rides availed by them through the app.",
  },
  {
    id: 9,
    category: "Passenger-App",
    image: AvailOffers,
    title: "Avail Offers",
    des: "Users can avail various promotional offers and discount coupons that from time to time are sent through notifications.",
  },
  {
    id: 10,
    category: "Passenger-App",
    image: Payvia,
    title: "Pay via wallet money",
    des: "Users can also pay for their ride by using a digital wallet app.",
  },
  {
    id: 11,
    category: "On-Demand-Driver-App",
    image: Flexible,
    title: "Flexible ride choice",
    des: "Driver can select his visibility area and can make him available unavailable.",
  },
  {
    id: 12,
    category: "On-Demand-Driver-App",
    image: Driverchat,
    title: "Driver chat option",
    des: "Driver can spot the nearby drivers on the map and can chat with them.",
  },
  {
    id: 13,
    category: "On-Demand-Driver-App",
    image: Finding,
    title: "Finding the available drivers.",
    des: "The driver app also helps finding all the available drivers nearby.",
  },
  {
    id: 14,
    category: "On-Demand-Driver-App",
    image: approaching,
    title: "Driver approaching scenarios.",
    des: "The driver app also shows on the GPS map the various on-road scenarios when the vehicle approaches.",
  },
  {
    id: 15,
    category: "On-Demand-Driver-App",
    image: Boarding,
    title: "Boarding process.",
    des: "The driver app also guides the driver through the entire boarding process.",
  },
  {
    id: 16,
    category: "On-Demand-Driver-App",
    image: cancellation,
    title: "Ride cancellation scenarios",
    des: "The driver app also allows cancelling rides with some statutory fines and actions against them.",
  },
  {
    id: 17,
    category: "On-Demand-Driver-App",
    image: During,
    title: "During the ride features",
    des: "The driver app also offers a gamut of on-the-ride features including GPS based route guidance.",
  },
  {
    id: 18,
    category: "On-Demand-Driver-App",
    image: Accepting,
    title: "Accepting and not accepting rides",
    des: "After the driver is called by the passenger, based upon the distance, rate, pick-up and drop-off location, he can accept or reject the ride.",
  },
  {
    id: 19,
    category: "On-Demand-Driver-App",
    image: passenger,
    title: "Driver and passenger review and rating system.",
    des: "The driver app allows the driver to rate the passenger and review the experience while showing the same from passengers. ",
  },
  {
    id: 20,
    category: "Backend",
    image: Driverstatus,
    title: "Driver status and reports",
    des: "",
  },
  {
    id: 21,
    category: "Backend",
    image: Userstatus,
    title: "User status and reports",
    des: "",
  },
  {
    id: 22,
    category: "Backend",
    image: Trip,
    title: "Trip status and reports",
    des: "",
  },
  {
    id: 23,
    category: "Backend",
    image: Revenue,
    title: "Revenue earning status and reports",
    des: "",
  },
  {
    id: 24,
    category: "Backend",
    image: Currentlyactive,
    title: "Currently active drivers",
    des: "",
  },
  {
    id: 25,
    category: "Backend",
    image: Currently,
    title: "Currently ongoing trips",
    des: "",
  },
  {
    id: 26,
    category: "Backend",
    image: Complaints,
    title: "Complaints against driver",
    des: "",
  },
  {
    id: 27,
    category: "Backend",
    image: Disciplinary,
    title: "Disciplinary actions on drivers and passengers",
    des: "",
  },
  {
    id: 28,
    category: "Backend",
    image: Liveevents,
    title: "Live feed of events",
    des: "",
  },
  {
    id: 29,
    category: "Backend",
    image: Notificationclients,
    title: "Notification to all clients",
    des: "",
  },
  {
    id: 30,
    category: "Backend",
    image: Weekly,
    title: "Weekly/monthly payment invoicing",
    des: "",
  },
  {
    id: 31,
    category: "Backend",
    image: Email,
    title: "Email system",
    des: "",
  },
];
const TaxiBooking = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [item, setItems] = useState(TaxiBookingData);

  const filterItem = (cateItem) => {
    const updateItems = TaxiBookingData.filter((curElem) => {
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
                <h2>Taxi Booking App</h2>
                <p>
                  On Demand Taxi Booking App Development like Uber literally
                  changed the lifestyle of urban men more than anything else.
                  But compared to the huge market demands, still, such apps have
                  limited access for most commuters. Every new taxi booking app
                  has an equal opportunity to grow with this market demand. We
                  at the App Ideas build most sophisticated, custom-featured and
                  unique taxi booking apps that can promise a better booking
                  experience compared all other apps in this category as of now.
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
                      Best Taxi Booking App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Taxi Booking App Development
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
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Taxi-Booking-App-Development.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Taxi Booking App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Build-Taxi-App.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Build Taxi App</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/Taxi-Booking-App-Development-Company.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Taxi Booking App Development Company</h4>
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
            <h3>Enormous Features of Taxi Booking App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Passenger-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Passenger-App"
                  type="button"
                  role="tab"
                  aria-controls="Passenger-App"
                  aria-selected="true"
                  onClick={() => filterItem("Passenger-App")}
                >
                  Passenger App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="On-Demand-Driver-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#On-Demand-Driver"
                  type="button"
                  role="tab"
                  aria-controls="On-Demand-Driver"
                  aria-selected="false"
                  onClick={() => filterItem("On-Demand-Driver-App")}
                >
                  On Demand Driver App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Backend-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Backend"
                  type="button"
                  role="tab"
                  aria-controls="Backend"
                  aria-selected="false"
                  onClick={() => filterItem("Backend")}
                >
                  Backend
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
                  {item.map((elem) => {
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
                            style={{ height: "60px  " }}
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
                    src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/slider/Demand-Taxi-Booking-App.webp")}
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
                    src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/slider/kukaa.webp")}
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
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Website-Redesign.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Highly Scalable</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-235.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Fully Customizable</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/icons8-smart-watch-100-1.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Time And Cost-Effective</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-53.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Multi-Lingual Support</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Group-184.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Multi-Currency Support</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/On-Demand App/Taxi Booking App Solution/why-should/Mask-Group.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>User-Friendly Design</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Highly Scalable</h3>
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
                  Would you like to make a on demand taxi booking app?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="/" className="contact_btn">
                  Contact us{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default TaxiBooking;
