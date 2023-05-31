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

//  Customer App
import search from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/search foods online.svg";
import Check from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Coustmer App/Check order history.svg";
import Orderonline from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Coustmer App/Order online.svg";
import payonline from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Coustmer App/Pay online.svg";
import Reviews from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Reviews and ratings.svg";
import Get from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Get cashback.svg";
import Login from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Avail offers view offers.svg";
import View from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Check order history.svg";
import Live from "../../../assets/images/SOLUTIONS/Delivery App/Food-app/Coustmer App/Live tracking.svg";

// Vender App and Panel
import ProfileManagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Profile Management.svg";
import GroceryCategoryManagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Food Category Management.svg";
import Grocerylistingmanagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Food Listing Management.svg";
import OrderManagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Order Management.svg";
import DriverManagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Driver Management.svg";
import Usermanagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/User management.svg";
import DriverTracking from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Driver Tracking.svg";
import Reviewmanagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Review management.svg";
import Loyaltymanagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Vendor App and Panel/Loyalty management.svg";

// Driver Tracking App
import Setavailability from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Set availability.svg";
import GetNotify from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Get Notify.svg";
import Customerandroutedetails from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Order Route _ Customer Details.svg";
import Tracktheroute from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/Driver Track the route.svg";
import Getacustomerfeedback from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Driver Tracking App/User Get a customer feedback.svg";

// Admin Panel
import SubscriptionManagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Subscription Management.svg";
import PaymentManagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Payment Management.svg";
import GroceryStoremanagement from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Grocery Store Management.svg";
import Reports from "../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Admin Panel/Reports.svg";

const GroceryData = [
  {
    id: 1,
    category: "Customer-App",
    image: search,
    title: "Search Grocery Online",
    des: "The custom app grants users to browse and check the grocery item list of the various grocery stores. This functionality works based on the location of the customers.",
  },
  {
    id: 2,
    category: "Customer-App",
    image: Check,
    title: "Check details",
    des: "Customers can easily get the details of the grocery item. They can easily check the grocery store details like cost of the item, shipping details and more.",
  },
  {
    id: 3,
    category: "Customer-App",
    image: Orderonline,
    title: "Order Online",
    des: "On a Grocery store app, customers can easily add the product to the cart. They can add up the quantity as per preference and place an order.",
  },
  {
    id: 4,
    category: "Customer-App",
    image: payonline,
    title: "Create/ Update orders",
    des: "This Grocery store app can allow users to make an online payment using the net banking transfer, COD, Paypal, digital wallets and many other methods.",
  },
  {
    id: 5,
    category: "Customer-App",
    image: Reviews,
    title: "Reviews and ratings",
    des: "Grocery store apps can grant customers to give their honest feedback through ratings and reviews about the services and other factors.",
  },
  {
    id: 6,
    category: "Customer-App",
    image: Get,
    title: "Get cashback",
    des: "The customer panel is also consist of some of the additional features like seasonal offers, discounts and cashback options.",
  },
  {
    id: 7,
    category: "Customer-App",
    image: Login,
    title: "Login",
    des: "Customers can easily check or browse grocery items based on the available offers and the discount code to take advantage of the discounts.",
  },
  {
    id: 8,
    category: "Customer-App",
    image: View,
    title: "View Order History",
    des: "The customer app can allow the users of the app to view their order history along with the details for each grocery and item.",
  },
  {
    id: 9,
    category: "Customer-App",
    image: Live,
    title: "Live tracking",
    des: "GPS is also integrated into the mobile app. Customers can track the grocery item delivery and can also check the Estimated Time of Arrival(ETA).",
  },
  {
    id: 10,
    category: "Vendor-App",
    image: ProfileManagement,
    title: "Profile Management",
    des: "A Vendor app can allow customers to create their profile by adding up the details like the store addresses, grocery items, price and all the other details.",
  },
  {
    id: 11,
    category: "Vendor-App",
    image: GroceryCategoryManagement,
    title: "Grocery Category Management",
    des: "The grocery store app can allow the participating grocery store to create their product list. This list can be further classified into the categories like fruits, vegetables and more.",
  },
  {
    id: 12,
    category: "Vendor-App",
    image: Grocerylistingmanagement,
    title: "Grocery listing management",
    des: "The Vendor panel grants to develop product categories and denominations to help easy search and viewing.",
  },
  {
    id: 13,
    category: "Vendor-App",
    image: OrderManagement,
    title: "Order Management",
    des: "The grocery store can also enjoy a best order management system that allows communication through email, messaging and push notification.    ",
  },
  {
    id: 14,
    category: "Vendor-App",
    image: DriverManagement,
    title: "Driver Management",
    des: "Vendors can assign the jobs to the drives as well as guide the drivers to deliver the product on time. They can easily do the live tracking of the driver.",
  },
  {
    id: 15,
    category: "Vendor-App",
    image: Usermanagement,
    title: "User management",
    des: "Grocery Vendors can easily deal with the orders history, the grocery list of the users as well as can send the offers to the customers.",
  },
  {
    id: 16,
    category: "Vendor-App",
    image: DriverTracking,
    title: "LoDriver Trackinggin",
    des: "Vendors can assign the jobs to the drives as well as guide the drivers to deliver the product on time. They can easily do the live tracking of the driver.",
  },
  {
    id: 17,
    category: "Vendor-App",
    image: Reviewmanagement,
    title: "Review management",
    des: "Whenever customers can prove the reviews, the grocery store owners can see and respond to them. Feedback can help them to improve the quality of services.",
  },
  {
    id: 18,
    category: "Vendor-App",
    image: Loyaltymanagement,
    title: "Loyalty management",
    des: "Grocery store owners can also add up some of the promo codes and discounts for the customers which can boost loyalty through the special offers.",
  },
  {
    id: 19,
    category: "Driver-App",
    image: ProfileManagement,
    title: "Profile Management",
    des: "The driver tracking app panel is consist of all the driver information, admin approval features of the driver and many features related to the driver’s profile.",
  },
  {
    id: 20,
    category: "Driver-App",
    image: Setavailability,
    title: "Set availability",
    des: "Drivers can provide their availability time so that the grocery store owners can assign the delivery as per the availability f the driver.",
  },
  {
    id: 21,
    category: "Driver-App",
    image: GetNotify,
    title: "Get Notify",
    des: "Drivers can easily get notified by app push notification, SMS or E-mail whenever a job is assigned to them. Drivers can easily accept and reject the order.",
  },
  {
    id: 22,
    category: "Driver-App",
    image: Customerandroutedetails,
    title: "Customer and route details",
    des: "Drivers can get the details of the grocery store address or pick up point and drop location along with the customer’s details. Access to the GPS for easy route access.",
  },
  {
    id: 23,
    category: "Driver-App",
    image: Tracktheroute,
    title: "Track the route",
    des: "Due to the GPS integration, the drivers can easily track the route to deliver the services on time and this can be also checked by the admin.",
  },
  {
    id: 24,
    category: "Driver-App",
    image: Getacustomerfeedback,
    title: "Get a customer feedback",
    des: "In a driver app panel, the driver can also check the customer’s feedback and reviews. This can help them to improve the quality of their services.",
  },
  {
    id: 25,
    category: "Admin-panel",
    image: ProfileManagement,
    title: "Profile Management",
    des: "The driver tracking app panel is consist of all the driver information, admin approval features of the driver and many features related to the driver’s profile.",
  },
  {
    id: 26,
    category: "Admin-panel",
    image: DriverManagement,
    title: "Driver Management",
    des: "A Grocery admin panel can be useful for checking the driver’s profiles or information and can also remove drivers based on their complaints.",
  },
  {
    id: 27,
    category: "Admin-panel",
    image: SubscriptionManagement,
    title: "Subscription Management",
    des: "Drivers can easily get notified by app push notification, SMS or E-mail whenever a job is assigned to them. Drivers can easily accept and reject the order.",
  },
  {
    id: 28,
    category: "Admin-panel",
    image: PaymentManagement,
    title: "Payment Management",
    des: "Admin panel can have the overall control of overpayment management and taking care of groceries tore withdrawal requests, customer payment disputes and more.",
  },
  {
    id: 29,
    category: "Admin-panel",
    image: GroceryStoremanagement,
    title: "Grocery Store management",
    des: "Admin panel can help to easily track all the grocery store owners on the list and list grocery items based on the different categories.",
  },
  {
    id: 30,
    category: "Admin-panel",
    image: Reports,
    title: "Get a customer feedback",
    des: "Admin Panel will offer access to different reports corresponding to orders, purchases, users as well as sales.",
  },
];

const GroceryApp = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [item, setItems] = useState(GroceryData);

  const filterItem = (cateItem) => {
    const updateItems = GroceryData.filter((curElem) => {
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
                <h2>Grocery Store App</h2>
                <p>
                  Here we are at The App Ideas, which is one of the foremost
                  Grocery Store App Development company. We have a team of
                  highly skilled as well as experienced mobile app developers
                  and designers who will offer the best Grocery app development
                  services at the best rates. Feel free to connect with us and
                  get a free quote for developing a Grocery Store app.
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
                      Best Grocery App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Grocery App Development
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
                        src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Grocery-App-Development.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Grocery App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Grocery-Delivery-App-Development.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Grocery Delivery App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/Grocery-App-Development-Company.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Grocery App Development Company</h4>
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
            <h3>Enormous Features of Grocery Store App</h3>
            <p>
              Are you planning on launching a fortunate Grocery Store App? Or
              Planning of digitalizing your Grocery store? If Yes, then this is
              probably the time for you to launch a successful Grocery app in
              the market. The demand for online grocery stores is increasing
              drastically in the market. People are more inclined towards the
              digital platforms because it offers the convenience of accessing
              the services, easy to use at any place as well as at any time and
              sometimes it is cost-effective and time-saving.
            </p>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Customer-App-Tab"
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
                  id="Restaurent-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Restaurent-App"
                  type="button"
                  role="tab"
                  aria-controls="Restaurent-App"
                  aria-selected="false"
                  onClick={() => filterItem("Vendor-App")}
                >
                  Vendor App &amp; Panel
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
                  onClick={() => filterItem("Driver-App")}
                >
                  Driver Tracking App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Super-Admin-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Super-Admin"
                  type="button"
                  role="tab"
                  aria-controls="Super-Admin"
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
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/1high_scale.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Highly Scalable</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/2fully_customize.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Fully Customizable</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/3time_cost.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Time And Cost-Effective</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/4multi_support (1).png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Multi-Lingual Support</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/5multi_currency.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Multi-Currency Support</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/6user_freindly.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>User-Friendly Design</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/7offer_customize.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Customize Design</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/8third_party.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Third-Party Integration</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Delivery App/Grocery-app/why-should/4multi_support (1).png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Great Support</p>
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
                  Are you planning to launch a Successful Grocery Store App in
                  the market?
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

export default GroceryApp;
