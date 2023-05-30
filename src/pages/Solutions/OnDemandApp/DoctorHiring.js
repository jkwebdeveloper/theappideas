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

import search from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/signup.svg";
import Check from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Signin.svg";
import Orderonline from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/forgot_password.svg";
import payonline from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/change_password-2.svg";
import Reviews from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Create a Profile.svg";
import Get from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Manage profile.svg";
import Avail from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Manage-Medical-History-Profile.svg";
import Checkorder from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Search available doctors.svg";
import Live from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Ratings and reviews.svg";
import chat from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User can chat.svg";
import Pay from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User-Can-Pay-Via-PayPal.svg";
import User from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User-Get-The-Morning-Quotes.svg";

const DoctorHiring = () => {
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
                <h2>On Demand Doctor App</h2>
                <p>
                  Like many other On Demand Doctor App Development in the market
                  today, the demand for on-demand therapist or On Demand Doctor
                  App Development is also increasing at a rapid speed. In fact,
                  these on-demand apps for calling medical care providers can
                  really transform the healthcare services beyond recognition.
                  We at the App Ideas build most future-ready, sophisticated and
                  user-centric on-demand healthcare and doctor-hiring apps.
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
                      Best Doctor App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Doctor App Development
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
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-App-Development1.png")}
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
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-Appointment-App.png")}
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
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-App-Development-Company.png")}
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
            <h3>Enormous Features of On Demand Doctor App</h3>
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
                  User App
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
                  On Demand Doctor App Development
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
                >
                  Admin Penal
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
                      <h4>Sign Up</h4>
                      <p>
                        This feature of the user interface will allow you signup
                        as a new user with all the credentials and required
                        details.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Check}
                        alt="Check-Details-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Signin</h4>
                      <p>
                        After being registered users need to sign in to the app
                        by providing their signup credentials.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Orderonline}
                        alt="Order-Online-icon"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Forgot Password</h4>
                      <p>
                        In case the user forgets password, this user app feature
                        will allow him to retrieve the password by following
                        some easy steps.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={payonline}
                        alt="Pay-Online-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Change Password</h4>
                      <p>
                        The user can change his password from time to time in
                        order to strengthen the security of the login
                        credentials.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Reviews}
                        alt="Reviews-And-Ratings-icons "
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Create a profile</h4>
                      <p>
                        Users can create their profile with the app by providing
                        all the required personal details including contact
                        information and address.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Get}
                        alt="Get-Cashback-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Manage profile</h4>
                      <p>
                        Users can manage their profiles and edit them at ease by
                        changing the profile information.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Avail}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Manage medical history profile</h4>
                      <p>
                        The users can also manage, edit, change and add new
                        information to their medical history profile.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Checkorder}
                        alt="Check-Order-History-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Search available doctors</h4>
                      <p>
                        The users can search for specialist doctors from a
                        variety of specialties through the search function and
                        an array of filters.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Live}
                        alt="Live-Tracking-icons"
                        className="img-fluid"
                        style={{ width: "13%" }}
                      />
                      <h4>Ratings and reviews</h4>
                      <p>
                        Users can provide feedback about the doctors and the app
                        by giving ratings and publishing reviews about them.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={chat}
                        alt="Live-Tracking-icons"
                        className="img-fluid"
                        style={{ width: "13%" }}
                      />
                      <h4>User can chat</h4>
                      <p>
                        User can engage in real-time chat with the therapists
                        and service-provider doctors and can explain their
                        health issues.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={Pay}
                        alt="Live-Tracking-icons"
                        className="img-fluid"
                        style={{ width: "13%" }}
                      />
                      <h4>User can Pay via PayPal</h4>
                      <p>
                        User can make payment to the doctors and therapists for
                        their required medical services by using PayPal and an
                        array of other payment gateways.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={User}
                        alt="Live-Tracking-icons"
                        className="img-fluid"
                        style={{ width: "13%" }}
                      />
                      <h4>User get the Morning Quotes</h4>
                      <p>
                        User also get lucrative quote from the service provider
                        doctors in the beginning of the day as promotional
                        offers.
                      </p>
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

export default DoctorHiring;
