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

//  User App

import search from "../../../assets/images/SOLUTIONS/Delivery App/Courier-app/User App/Profile Management.svg";
import Check from "../../../assets/images/SOLUTIONS/Delivery App/Courier-app/User App/first_use_checkup_list.svg";
import Orderonline from "../../../assets/images/SOLUTIONS/Delivery App/Courier-app/User App/creaate-sector.svg";
import payonline from "../../../assets/images/SOLUTIONS/Delivery App/Courier-app/User App/create-order.svg";
import Reviews from "../../../assets/images/SOLUTIONS/Delivery App/Courier-app/User App/assign-sector.svg";
import Get from "../../../assets/images/SOLUTIONS/Delivery App/Courier-app/User App/Reports management.svg";

const CourierData = [
  {
    id: 1,
    category: "User-App",
    image: search,
    title: "Profile Management",
    des: "Create/Maintain profile for every courier boy.",
  },
  {
    id: 2,
    category: "User-App",
    image: Check,
    title: "Create/Maintain clients list",
    des: "Where operator enter the details of the client like name, Email id, Phone number.",
  },
  {
    id: 3,
    category: "User-App",
    image: Orderonline,
    title: "Create/Manage Sectors",
    des: "based on the zip codes.",
  },
  {
    id: 4,
    category: "User-App",
    image: payonline,
    title: "Create/ Update orders",
    des: "Operator will create the customer order by filling up name, email id, phone number, zip code, address, parcel type, approx. weight.",
  },
  {
    id: 5,
    category: "User-App",
    image: Reviews,
    title: "Assign the Sectors to courier boys",
    des: "We need to create the zip code table where operator will enter the zip code.",
  },
  {
    id: 6,
    category: "User-App",
    image: Get,
    title: "Reports Management",
    des: "View the list of the assigned jobs on a particular day for the courier boy.",
  },
  {
    id: 7,
    category: "Courier-Boy-App",
    image: search,
    title: "Login",
    des: "The courier boy needs to create login credentials and log in for use.",
  },
  {
    id: 8,
    category: "Courier-Boy-App",
    image: Check,
    title: "Forgot Password",
    des: "In case of forgetting password the courier boy can follow the instructions to create a new password.",
  },
  {
    id: 9,
    category: "Courier-Boy-App",
    image: Orderonline,
    title: "Change Password",
    des: "Courier boy can change the password at any point of time.",
  },
  {
    id: 10,
    category: "Courier-Boy-App",
    image: payonline,
    title: "See the assigned jobs list",
    des: "Courier boy can see the list of all jobs assigned for him.",
  },
  {
    id: 11,
    category: "Courier-Boy-App",
    image: Reviews,
    title: "Get the details",
    des: "Courier boy can access details about each and every job assigned to him.",
  },
  {
    id: 12,
    category: "Courier-Boy-App",
    image: Get,
    title: "Timeline",
    des: "20 Working Days",
  },
  {
    id: 13,
    category: "Courier-Boy-App",
    image: Check,
    title: "Picked up the parcel",
    des: "They need to click on a Button Called “Parcel Picked up”.",
  },
  {
    id: 14,
    category: "Courier-Boy-App",
    image: Orderonline,
    title: "If person was not available",
    des: "Courier boy click on Create a note button and generate a note and submit it.",
  },
  {
    id: 15,
    category: "Courier-Boy-App",
    image: payonline,
    title: "courier boy see the job list.",
    des: "",
  },
  {
    id: 16,
    category: "Courier-Boy-App",
    image: Reviews,
    title:
      "once they clicked on it, it will open the pickup and company details",
    des: "",
  },
  {
    id: 17,
    category: "Courier-Boy-App",
    image: Get,
    title: "They click on start journey button, live tracking will be started",
    des: "",
  },
];

const CourierPickup = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [item, setItems] = useState(CourierData);

  const filterItem = (cateItem) => {
    const updateItems = CourierData.filter((curElem) => {
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
                <h2>Courier Pickup Management App</h2>
                <p>
                  Mobile app can play a great role in managing courier service
                  professionals on the field. An app for courier pickup
                  management can boost efficiency and help streamline the
                  process. We at the App Ideas build highly sophisticated and
                  feature-rich apps for courier pickup management.
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
                      Best Courier Pickup Management App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Courier Pickup Management App
                      Development
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
                        src={require("../../../assets/images/SOLUTIONS/Delivery App/Courier-app/Courier-Pickup-Management-App.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Food Delivery App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Delivery App/Courier-app/Courier-Pickup-Management-App-Development.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Food Delivery App Development Company</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Delivery App/Courier-app/Courier-App-Development1.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>On-Demand Food Delivery App Development</h4>
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
            <h3>Enormous Features of Courier Pickup Management App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="User-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="User-App"
                  aria-selected="true"
                  onClick={() => filterItem("User-App")}
                >
                  User App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Courier-Boy-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Courier-Boy-App"
                  type="button"
                  role="tab"
                  aria-controls="Courier-Boy-App"
                  aria-selected="false"
                  onClick={() => filterItem("Courier-Boy-App")}
                >
                  Courier Boy App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Admin-panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-panel"
                  type="button"
                  role="tab"
                  aria-controls="Admin-panel"
                  aria-selected="false"
                  onClick={() => filterItem("Admin-panel")}
                >
                  Admin Panel
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
                            style={{ height: "70px" }}
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
                    src={require("../../../assets/images/SOLUTIONS/Delivery App/Food-app/food1.webp")}
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
                    src={require("../../../assets/images/SOLUTIONS/Delivery App/Food-app/Food-2.webp")}
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
                    src={require("../../../assets/images/SOLUTIONS/Delivery App/Food-app/Food-3.webp")}
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

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Would you like to create a Courier Pickup Management App?
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

export default CourierPickup;