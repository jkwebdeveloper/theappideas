import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";

//  Customer App
import search from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/search foods online.svg";
import Check from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check details.svg";
import Orderonline from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Order online.svg";
import payonline from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Pay online.svg";
import Reviews from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Reviews and ratings.svg";
import Get from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Get cashback.svg";
import Avail from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Avail offers view offers.svg";
import Checkorder from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check order history.svg";
import Live from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Live tracking.svg";

// Restaurant App
import Profile from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Profile Management.svg";
import Food from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Grocery Category Management.svg";
import Listing from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Grocery listing management.svg";
import Order from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Order Management.svg";
import Driver from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Driver Management.svg";
import User from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/User management.svg";
import Tracking from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Driver Tracking.svg";
import Reviewmanagement from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Review management.svg";
import Loyalty from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Restaurent-app/Loyalty management.svg";

// Driver Tracking App
import ProfileManagement from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Profile Management.svg";
import Set from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Set availability.svg";
import pickup from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Get the pickup notification.svg";
import Route from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Order Route _ Customer Details.svg";
import Track from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/Driver Track the route.svg";
import Getcustomer from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Driver Tracking App/User Get a customer feedback.svg";

// Super Admin App
import profile from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Profile Management.svg";
import DriverManagement from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Driver Management.svg";
import Subscription from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Subscription Management.svg";
import Payment from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Payment Management.svg";
import Restaurant from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Restaurant Management.svg";
import Reports from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Super Admin Panel/Reports.svg";
import { Link } from "react-router-dom";

const FoodData = [
  {
    id: 1,
    category: "Customer-App",
    image: search,
    title: "Search Foods Online",
    des: "The customer app allows browsing and seeing the menu and all food items of various restaurants as per their location and preferred food choices.",
  },
  {
    id: 2,
    category: "Customer-App",
    image: Check,
    title: "Check details",
    des: "With a food ordering app on their screen customers can easily add their preferred food in cart, provide shipping details and place the order instantly.",
  },
  {
    id: 3,
    category: "Customer-App",
    image: Orderonline,
    title: "Order online",
    des: "With a food ordering app on their screen customers can easily add their preferred food in the cart, provide shipping details and place the order instantly.",
  },
  {
    id: 4,
    category: "Customer-App",
    image: payonline,
    title: "Pay online",
    des: "The customer-side of the food ordering app allows customers to make payments through net banking transfer, COD, digital wallets, PayPal, and other methods.",
  },
  {
    id: 5,
    category: "Customer-App",
    image: Reviews,
    title: "Reviews and ratings",
    des: "Customers can also give their honest feedback through reviews and ratings about the food quality, taste, and several other factors.",
  },
  {
    id: 6,
    category: "Customer-App",
    image: Get,
    title: "Get cashback",
    des: "Users through these apps can also opt for a variety of offers, discounts, and cashback options.",
  },
  {
    id: 7,
    category: "Customer-App",
    image: Avail,
    title: "Avail offers/view offers",
    des: "Users can also browse foods based on available offers and promo codes and order foods with the best price and offer.",
  },
  {
    id: 8,
    category: "Customer-App",
    image: Checkorder,
    title: "Check order history",
    des: "The customer app also allows every customer to see their order history in detail along with the details for each restaurant and food item.",
  },
  {
    id: 9,
    category: "Customer-App",
    image: Live,
    title: "Live tracking",
    des: "Through a GPS-enabled maps, customers can track their food delivery and can see the Estimated Time of Arrival (ETA).",
  },
  {
    id: 10,
    category: "Restaurent-App",
    image: Profile,
    title: "Profile Management",
    des: "The food ordering app allows restaurants to create their profile with details like addresses, food images, and a host of other necessary details.",
  },
  {
    id: 11,
    category: "Restaurent-App",
    image: Food,
    title: "Food Category Management",
    des: "The app also allows the participating restaurants to create a food menu comprising both all categories such as starter, main course, beverages, desserts veg, non-veg, etc.",
  },
  {
    id: 12,
    category: "Restaurent-App",
    image: Listing,
    title: "Food Listing Management",
    des: "The seller panel allows creating product categories and denominations to help easy search and viewing.",
  },
  {
    id: 13,
    category: "Restaurent-App",
    image: Order,
    title: "Order Management",
    des: "Restaurants can also enjoy a very robust order management system that allows communication through push notifications, email, and messaging.",
  },
  {
    id: 14,
    category: "Restaurent-App",
    image: Driver,
    title: "Driver Management",
    des: "Restaurants can also provide the rider details, track the availability of the driver in real-time, and accordingly assign delivery jobs to riders.",
  },
  {
    id: 15,
    category: "Restaurent-App",
    image: User,
    title: "User management",
    des: "Restaurants through the app can deal with the order history, preferred dishes of individual users and can send customers various offers.",
  },
  {
    id: 16,
    category: "Restaurent-App",
    image: Tracking,
    title: "Driver Tracking",
    des: "Restaurants after assigning jobs to drivers can actually guide the drivers about the best and time-saving delivery route and do live tracking of driver movement.",
  },
  {
    id: 17,
    category: "Restaurent-App",
    image: Reviewmanagement,
    title: "Review management",
    des: "As and when customers drop reviews, restaurants can see and respond to them and take measures to improve the quality of service.",
  },
  {
    id: 18,
    category: "Restaurent-App",
    image: Loyalty,
    title: "Loyalty management",
    des: "Restaurants can also provide offers and promo codes to both new and existing customers and can boost loyalty through discounts and special offers.",
  },
  {
    id: 19,
    category: "Driver-Tracking",
    image: ProfileManagement,
    title: "Profile Management",
    des: "The driver tracking app will furnish the driver profile with all driver information, get admin approval of the driver, and help to integrate as a driver for the service.",
  },
  {
    id: 20,
    category: "Driver-Tracking",
    image: Set,
    title: "Set availability",
    des: "Drivers can show their availability on the basis of which restaurants can actually assign delivery jobs to them.",
  },
  {
    id: 21,
    category: "Driver-Tracking",
    image: pickup,
    title: "Get the pickup notification",
    des: "Driver through the app receives push notifications, email, or SMS whenever a new delivery job is assigned to them. The same notification will allow them to accept or rejecting the order.",
  },
  {
    id: 22,
    category: "Driver-Tracking",
    image: Route,
    title: "Route & Customer Details",
    des: "Driver through the app becomes informed about the food pickup and drop location, customer details, and GPS based route to reach customer’s place at the earliest.",
  },
  {
    id: 23,
    category: "Driver-Tracking",
    image: Track,
    title: "Track the route",
    des: "On the way to the customer’s place, the drivers can track the route on a live map and after delivery, the real-time information is sent back to the admin.",
  },
  {
    id: 24,
    category: "Driver-Tracking",
    image: Getcustomer,
    title: "Get a customer feedback",
    des: "Users through these apps can also opt for a variety of offers, discounts, and cashback options.",
  },
  {
    id: 25,
    category: "Super-Admin",
    image: profile,
    title: "Profile Management",
    des: "Admin of the app can easily see user listing, number of users, specific user details, order history, payment details, and other important information.",
  },
  {
    id: 26,
    category: "Super-Admin",
    image: DriverManagement,
    title: "Driver Management",
    des: "The admin panel can check out driver profiles, individual driver information and can drop drivers from the list based on complaints.",
  },
  {
    id: 27,
    category: "Super-Admin",
    image: Subscription,
    title: "Subscription Management",
    des: "The admin also manages all the restaurant subscriptions on the basis of which the listing of the restaurants is decided.",
  },
  {
    id: 28,
    category: "Super-Admin",
    image: Payment,
    title: "Payment Management",
    des: "The Admin panel also allows total control over payment management and taking care of restaurant withdrawal requests, customer payment dispute requests, etc.",
  },
  {
    id: 29,
    category: "Super-Admin",
    image: Restaurant,
    title: "Restaurant Management",
    des: "The admin panel can track the restaurants in the list and various listed food items based on different categories and various details including price.",
  },
  {
    id: 30,
    category: "Super-Admin",
    image: Reports,
    title: "Reports",
    des: "Admin panel will provide access to different reports corresponding to orders, sales, purchases, and users.",
  },
];

const FoodDelivery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [items, setItems] = useState(FoodData);

  const filterItem = (cateItem) => {
    const updateItems = FoodData.filter((curElem) => {
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
                <h2>Food Delivery App Development</h2>
                <p>
                  Food ordering apps became the new fad that fit into our
                  instantly gratifying digital lifestyle. While the market
                  potential for such app is huge, food apps also represent a
                  highly competitive niche of apps. We at the App Ideas build
                  highly sophisticated, feature-rich and user-optimised food
                  ordering apps that can withstand the market competition.
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
                      Best Food Ordering or Food Delivery App Development
                      Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Food Delivery App Development
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
                        src={require("../../../assets/images/HIRE US/IPhone-App-Development-Company.png")}
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
                        src={require("../../../assets/images/HIRE US/IPhone-App-Development-Service.png")}
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
                        src={require("../../../assets/images/HIRE US/IPhone-Application-Development.png")}
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
            <h3>Enormous Features of On-Demand Food Delivery App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Customer-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="Customer-App"
                  aria-selected="true"
                  onClick={() => filterItem("Customer-App")}
                >
                  Customer App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Restaurent-App"
                  data-bs-toggle="pill"
                  data-bs-target="#Restaurent-App"
                  type="button"
                  role="tab"
                  aria-controls="Restaurent-App"
                  aria-selected="false"
                  onClick={() => filterItem("Restaurent-App")}
                >
                  Restaurant App &amp; Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Driver-Tracking"
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Super-Admin"
                  data-bs-toggle="pill"
                  data-bs-target="#Super-Admin"
                  type="button"
                  role="tab"
                  aria-controls="Super-Admin"
                  aria-selected="false"
                  onClick={() => filterItem("Super-Admin")}
                >
                  Super Admin Panel
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
                            style={{ height: "80px" }}
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

      {/* Food Ordering Section Start */}
      <section className="food_ordering_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why should you create a food ordering app?</h3>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="swiper-container work_swiper-container food_delivery_swiper food_ordering_swiper">
                {/* swiper slides */}
                <div className="swiper-wrapper h-auto">
                  <div
                    className="swiper-slide d-block"
                    href="#"
                    target="_blank"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a
                          href="#"
                          className="service__provide_tab service__provide_tab_active"
                        >
                          <img
                            src="assets/img/positive_customer.png"
                            alt="positive_customer"
                            className="img-fluid"
                          />
                          <p>
                            Best <br /> Service
                          </p>
                        </a>
                      </div>

                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/high_order.png"
                            alt="high_order"
                            className="img-fluid"
                          />
                          <p>
                            Higher order <br />
                            accuracy
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/fast_quick.png"
                            alt="fast_quick"
                            className="img-fluid"
                          />
                          <p>
                            Fast and <br />
                            quick order{" "}
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/offer_deal.png"
                            alt="offer-deal"
                            className="img-fluid"
                          />
                          <p>
                            offers and <br /> Deals
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/gps.png"
                            alt="gps"
                            className="img-fluid"
                          />
                          <p>
                            GPS <br /> Integration{" "}
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/customer_food.png"
                            alt="customer_food"
                            className="img-fluid"
                          />
                          <p>
                            customer_food <br /> with a click
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div
                    className="swiper-slide d-block"
                    href="#"
                    target="_blank"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a
                          href="#"
                          className="service__provide_tab service__provide_tab_active"
                        >
                          <img
                            src="assets/img/business.png"
                            alt="business"
                            className="img-fluid"
                          />
                          <p>
                            Sales <br /> forecasting
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/expand_market.png"
                            alt="expand_market"
                            className="img-fluid"
                          />
                          <p>
                            Expanded
                            <br />
                            market reach
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/customer_relation.png"
                            alt="customer_relation"
                            className="img-fluid"
                          />
                          <p>
                            Enhance
                            <br />
                            Relationship
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/customer.png"
                            alt="offer-deal"
                            className="img-fluid"
                          />
                          <p>
                            Customer can <br /> book easily
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/cost.png"
                            alt="cost"
                            className="img-fluid"
                          />
                          <p>
                            Cost-
                            <br /> Effectiveness{" "}
                          </p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <a href="#" className="service__provide_tab">
                          <img
                            src="assets/img/online_payment.png"
                            alt="online_payment"
                            className="img-fluid"
                          />
                          <p>
                            customer_food <br /> with a click
                          </p>
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* !swiper slides */}
                {/* pagination dots */}
                <div className="swiper-pagination" />
                {/* !pagination dots */}
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Customers can order food online with just one click
                  </h3>
                  <p className="Title_para">
                    Since these apps allow customers to make precise choices of
                    foods and customize the orders, there is no chance of any
                    dispute about incorrect orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Ordering Section End */}

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Would you like to create a Food Ordering App?
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

export default FoodDelivery;
