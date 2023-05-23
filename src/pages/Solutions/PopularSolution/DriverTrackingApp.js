import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";

//  Customer App
import search from "../../../assets/images/SOLUTIONS/Registration and location setup.svg";
// import Check from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Agency-Role.webp";
// import Orderonline from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Chat-With-The-Client.webp";
// import payonline from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Get-Offers.webp";
// import Reviews from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Time-Management-Tracking.webp";
// import Get from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Get-Paid-Online.webp";
// import Avail from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/Rating _ Reviews.webp";
// import Checkorder from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/news.webp";
// import Live from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Security Guard App/Contractor App/community.webp";

const DriverTrackingApp = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
                  id="Customer-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Customer-App"
                  type="button"
                  role="tab"
                  aria-controls="Customer-App"
                  aria-selected="true"
                >
                  Passenger Driver Tracking App
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
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={search}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Social Logins</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Check}
                        alt="Check-Details-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>
                        login type (leading Passenger or Travelling Passenger)
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Orderonline}
                        alt="Order-Online-icon"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Profile Management</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={payonline}
                        alt="Pay-Online-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Current Booking Details</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Reviews}
                        alt="Reviews-And-Ratings-icons "
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Live Driver Tracking</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Get}
                        alt="Get-Cashback-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Live Chat</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Call with driver</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Ratings & Reviews</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Give a tip to the driver</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Pay online</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Request for instant quote</h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        // src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>card management</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Restaurent-App"
                role="tabpanel"
                aria-labelledby="Restaurent-App-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Profile-Management-icons.png"
                        alt="Profile-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Profile Management</h4>
                      <p>
                        The food ordering app allows restaurants to create their
                        profile with details like addresses, food images, and a
                        host of other necessary details.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Food-Category-Management-icons.png"
                        alt="Food-Category-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Food Category Management</h4>
                      <p>
                        The app also allows the participating restaurants to
                        create a food menu comprising both all categories such
                        as starter, main course, beverages, desserts veg,
                        non-veg, etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Food-Listing-Management-icons.png"
                        alt="Food-Listing-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Food Listing Management</h4>
                      <p>
                        The seller panel allows creating product categories and
                        denominations to help easy search and viewing.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Order-Management-icons.png"
                        alt="Order-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Order Management</h4>
                      <p>
                        Restaurants can also enjoy a very robust order
                        management system that allows communication through push
                        notifications, email, and messaging.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Driver-Management-icons.png"
                        alt="Order-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Driver Management</h4>
                      <p>
                        Restaurants can also provide the rider details, track
                        the availability of the driver in real-time, and
                        accordingly assign delivery jobs to riders.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/User-Management-icons.png"
                        alt="User-Management-icons"
                        className="img-fluid"
                      />
                      <h4>User management</h4>
                      <p>
                        Restaurants through the app can deal with the order
                        history, preferred dishes of individual users and can
                        send customers various offers.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Driver-Tracking-icons.png"
                        alt="Driver-Tracking-icons"
                        className="img-fluid"
                      />
                      <h4>Driver Tracking</h4>
                      <p>
                        Restaurants after assigning jobs to drivers can actually
                        guide the drivers about the best and time-saving
                        delivery route and do live tracking of driver movement.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Review-Management-icons.png"
                        alt="Review-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Review management</h4>
                      <p>
                        As and when customers drop reviews, restaurants can see
                        and respond to them and take measures to improve the
                        quality of service.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Loyalty-Management-icons.png"
                        alt="Loyalty-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Loyalty management</h4>
                      <p>
                        Restaurants can also provide offers and promo codes to
                        both new and existing customers and can boost loyalty
                        through discounts and special offers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Driver-Tracking"
                role="tabpanel"
                aria-labelledby="Driver-Tracking-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Profile-Management-icons.png"
                        alt="Profile-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Profile Management</h4>
                      <p>
                        The driver tracking app will furnish the driver profile
                        with all driver information, get admin approval of the
                        driver, and help to integrate as a driver for the
                        service.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Set-Availability.png"
                        alt="Set-Availability"
                        className="img-fluid"
                      />
                      <h4>Set availability</h4>
                      <p>
                        Drivers can show their availability on the basis of
                        which restaurants can actually assign delivery jobs to
                        them.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Get-The-Pickup-Notification.png"
                        alt="Get-The-Pickup-Notification"
                        className="img-fluid"
                      />
                      <h4>Get the pickup notification</h4>
                      <p>
                        Driver through the app receives push notifications,
                        email, or SMS whenever a new delivery job is assigned to
                        them. The same notification will allow them to accept or
                        rejecting the order.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Route-_-Customer-Details-icon.png"
                        alt="Route-_-Customer-Details-icon"
                        className="img-fluid"
                      />
                      <h4>Route &amp; Customer Details</h4>
                      <p>
                        Driver through the app becomes informed about the food
                        pickup and drop location, customer details, and GPS
                        based route to reach customer’s place at the earliest.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Track-The-Route.png"
                        alt="Track-The-Route"
                        className="img-fluid"
                      />
                      <h4>Track the route</h4>
                      <p>
                        On the way to the customer’s place, the drivers can
                        track the route on a live map and after delivery, the
                        real-time information is sent back to the admin.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Get-A-Customer-Feedback.png"
                        alt="Get-A-Customer-Feedback"
                        className="img-fluid"
                      />
                      <h4>Get a customer feedback</h4>
                      <p>
                        Users through these apps can also opt for a variety of
                        offers, discounts, and cashback options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Super-Admin"
                role="tabpanel"
                aria-labelledby="Super-Admin-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Profile-Management-icons.png"
                        alt="Profile-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Profile Management</h4>
                      <p>
                        Admin of the app can easily see user listing, number of
                        users, specific user details, order history, payment
                        details, and other important information.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Driver-Management-icons.png"
                        alt="Driver-Management-icons"
                        className="img-fluid"
                      />
                      <h4>Driver Management</h4>
                      <p>
                        The admin panel can check out driver profiles,
                        individual driver information and can drop drivers from
                        the list based on complaints.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Subscription-Management.png"
                        alt="Subscription-Management"
                        className="img-fluid"
                      />
                      <h4>Subscription Management</h4>
                      <p>
                        The admin also manages all the restaurant subscriptions
                        on the basis of which the listing of the restaurants is
                        decided.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Payment-Management.png"
                        alt="Payment-Management"
                        className="img-fluid"
                      />
                      <h4>Payment Management</h4>
                      <p>
                        The Admin panel also allows total control over payment
                        management and taking care of restaurant withdrawal
                        requests, customer payment dispute requests, etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Restaurant-Management.png"
                        alt="Restaurant-Management"
                        className="img-fluid"
                      />
                      <h4>Restaurant Management</h4>
                      <p>
                        The admin panel can track the restaurants in the list
                        and various listed food items based on different
                        categories and various details including price.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src="assets/img/Reports.png"
                        alt="Reports"
                        className="img-fluid"
                      />
                      <h4>Reports</h4>
                      <p>
                        Admin panel will provide access to different reports
                        corresponding to orders, sales, purchases, and users.
                      </p>
                    </div>
                  </div>
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

export default DriverTrackingApp;
