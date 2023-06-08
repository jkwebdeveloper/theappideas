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

//  User Panel
import Login from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Login _ Register.svg";
import ProfileManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/profile-management.svg";
import View from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Search-and-view.svg";
import Detailed from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Detailed-View.svg";
import Course from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Course-Selection-Purchase.svg";
import OrderHistory from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Check-Order-History.svg";
import availability from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Set-availability.svg";

//  Mentor Panel
import LoginRegister from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Login _ Register.svg";
import Profile from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/profile-manage-4.svg";
import List from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/list-of-courses.svg";
import Historyy from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Login _ Register.svg";
import Schedule from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Schedule a meeting.svg";
import Online from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Online-Meeting.svg";

// Admin Panel
import UserManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/User-Management-1.svg";
import MentorManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/Mentor-Management.svg";
import Reviews from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/Reviews Managemement.svg";
import PaymentManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/Payment-Management-1.svg";
import { Link } from "react-router-dom";

const ElearningData = [
  {
    id: 1,
    category: "User-Panel",
    image: Login,
    title: "Login & Register",
    des: "Users can log in & register on the site.",
  },
  {
    id: 2,
    category: "User-Panel",
    image: ProfileManagement,
    title: "Profile Management",
    des: "Manage his/her profile.",
  },
  {
    id: 3,
    category: "User-Panel",
    image: View,
    title: "Search & View",
    des: "Users can search and see lists of available courses.",
  },
  {
    id: 4,
    category: "User-Panel",
    image: Detailed,
    title: "Detailed view",
    des: "Contact tutor, check availability, check the detailed overview of the course.",
  },
  {
    id: 5,
    category: "User-Panel",
    image: Course,
    title: "Course selection & purchase",
    des: "user can purchase any course, pay by visa or MasterCard.",
  },
  {
    id: 6,
    category: "User-Panel",
    image: OrderHistory,
    title: "Order History",
    des: "User can see his/her purchased course history.",
  },
  {
    id: 7,
    category: "User-Panel",
    image: availability,
    title: "Set availability and Attend",
    des: "Can see course details and fix the zoom meeting.",
  },
  {
    id: 8,
    category: "Admin-Panel",
    image: UserManagement,
    title: "User Management",
    des: "Can manage users.",
  },
  {
    id: 9,
    category: "Admin-Panel",
    image: MentorManagement,
    title: "Mentor Management",
    des: "Can manage mentors.",
  },
  {
    id: 10,
    category: "Admin-Panel",
    image: Reviews,
    title: "Reviews Managemement",
    des: "Users can place a review for a mentor and according to reviews and ratings, their place on the site will be decided.",
  },
  {
    id: 11,
    category: "Admin-Panel",
    image: PaymentManagement,
    title: "Payment Management",
    des: "Can manage payment or fees for each course.",
  },
  {
    id: 12,
    category: "Mentor-Panel",
    image: LoginRegister,
    title: "Login & Register",
    des: "Users needs to register with their credentials and create and use login ID and password.",
  },
  {
    id: 13,
    category: "Mentor-Panel",
    image: Profile,
    title: "Profile Management",
    des: "The mentor panel will have access to all user profiles with the ease of managing them.",
  },
  {
    id: 14,
    category: "Mentor-Panel",
    image: List,
    title: "List of Courses",
    des: "The mentor panel will have a detailed list of courses and curriculums.",
  },
  {
    id: 15,
    category: "Mentor-Panel",
    image: Historyy,
    title: "History",
    des: "The mentor panel will showcase a historical account of the user’s progress through the curriculum.",
  },
  {
    id: 16,
    category: "Mentor-Panel",
    image: Schedule,
    title: "Schedule a meeting",
    des: "The mentor panel will help in scheduling meetings and study sessions between users and mentors.",
  },
  {
    id: 17,
    category: "Mentor-Panel",
    image: Online,
    title: "Online meeting",
    des: "The mentor app will also help in conducting online meetings and study sessions between users and mentors.",
  },
];
const ElearningApp = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [items, setItems] = useState(ElearningData);
  const filterItem = (cateItem) => {
    const updateItems = ElearningData.filter((curElem) => {
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
                <h2>E-Learning App Store</h2>
                <p>
                  The modern education system is continuing to grow beyond the
                  four walls of the classrooms thanks to the unprecedented
                  growth in the elearning websites and apps in the last few
                  years. As the demands for anywhere-anytime access to education
                  is growing, more elearning websites and mobile apps will
                  appear in the near future. We build sophisticated and
                  future-ready elearning websites and apps for education and
                  training curriculums of all types and categories.
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
                      Best E-learning App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your E-learning App Development
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/E-Learning-App-Development.png")}
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/E-learning-Mobile-App-Development.png")}
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/E-learning-App-Developer.png")}
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
            <h3>Enormous Features of E-Learning Website</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="User-Panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User-Panel"
                  type="button"
                  role="tab"
                  aria-controls="User-Panel"
                  aria-selected="true"
                  onClick={() => filterItem("User-Panel")}
                >
                  User Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Mentor-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Mentor-App"
                  type="button"
                  role="tab"
                  aria-controls="Mentor-App"
                  aria-selected="false"
                  onClick={() => filterItem("Mentor-Panel")}
                >
                  Mentor Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Admin-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-App"
                  type="button"
                  role="tab"
                  aria-controls="Admin-App"
                  aria-selected="false"
                  onClick={() => filterItem("Admin-Panel")}
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
                  {items.map((elem) => {
                    const { id, image, title, des } = elem;
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
            <h3>Why should you create an E-Learning Websites?</h3>
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
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Anywhere-Anytime-Access.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Anywhere-Anytime Access</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Custom-Module-For-Learners.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom Module For Learners</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Equipped-For-Hands-On-Training.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Equipped For Hands-On Training</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Affordable-Education.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Affordable Education</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Rigorous-Learning.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Rigorous Learning</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Real-Time-Industry-Exposure.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Real-Time Industry Exposure</p>
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
                  Would you like to create E-learning Website or Mobile App?
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

export default ElearningApp;
