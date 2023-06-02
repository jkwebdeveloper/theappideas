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
import Social from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Social Media Login.svg";
import ProfileManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/profile-manage-4.svg";
import Find from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Find-Nearby-Dates.svg";
import Swipe from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Swipe feature for showing interest not interested.svg";
import Create from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Create-And-Share-Post.svg";
import Like from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Like-Dislike-Comment.svg";
import Match from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Match-With-The-Right-Date.svg";
import Chat from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/User Dating App/Chat, Audio and Video Call feature.svg";

// Admin Features
import User from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/User-Management-1.svg";
import Payment from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Payment-Management-1.svg";
import Black from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Black-List-User.svg";
import Featured from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Featured-Profiles-Management.svg";
import customizable from "../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Admin Features of Dating App/Bad-words.svg";

const DatingData = [
  {
    id: 1,
    category: "User-Dating",
    image: Social,
    title: "Social Media Login",
    des: "User can login and start using the app just by using their social media credentials.",
  },
  {
    id: 2,
    category: "User-Dating",
    image: ProfileManagement,
    title: "Profile Management",
    des: "User can manage their profiles that include their photos, personal information and contact details.",
  },
  {
    id: 3,
    category: "User-Dating",
    image: Find,
    title: "Find nearby dates",
    des: "Users can see a variety of nearby dates and exercise their choice.",
  },
  {
    id: 4,
    category: "User-Dating",
    image: Swipe,
    title: "Swipe feature for showing interest / not interested",
    des: "Users can express their liking or disliking for any available dates just by swiping left or right.",
  },
  {
    id: 5,
    category: "User-Dating",
    image: Create,
    title: "Create and share post",
    des: "Users can make fresh content posts and share those posts for other users to reach out.",
  },
  {
    id: 6,
    category: "User-Dating",
    image: Like,
    title: "Like, dislike, comment",
    des: "Users can like, dislike and comment on various posts and profiles.",
  },
  {
    id: 7,
    category: "User-Dating",
    image: Match,
    title: "Match with the right date",
    des: "Users can find the match with their right date and can engage with them.",
  },
  {
    id: 8,
    category: "User-Dating",
    image: Chat,
    title: "Chat, Audio and Video Call feature",
    des: "Users can use chat messaging, audio and video calling feature to connect to dates and other profiles.",
  },
  {
    id: 9,
    category: "Admin-Features",
    image: ProfileManagement,
    title: "Profile Management",
    des: "The admin is able to manage all user profiles registered with the app.",
  },
  {
    id: 10,
    category: "Admin-Features",
    image: User,
    title: "User Management",
    des: "The admin can manage all the app users as per the rules and the standard practices.",
  },
  {
    id: 11,
    category: "Admin-Features",
    image: Payment,
    title: "Payment Management",
    des: "Admin panel takes care of origin easing and managing payments made by the user through different payment methods and gateways.",
  },
  {
    id: 12,
    category: "Admin-Features",
    image: Black,
    title: "Black list User",
    des: "Admin can also black-list some users with records of abuses and malpractices.",
  },
  {
    id: 13,
    category: "Admin-Features",
    image: Featured,
    title: "Featured profiles management",
    des: "The admin will also choose some users for featured profiles.",
  },
  {
    id: 14,
    category: "Admin-Features",
    image: customizable,
    title: "“Bad words” customizable filter",
    des: "The admin to make the platform clean and civic will use a custom filter to stop the use of abusive words.",
  },
];

const DatingApp = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [items, setItems] = useState(DatingData);
  const filterItem = (cateItem) => {
    const updateItems = DatingData.filter((curElem) => {
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
                <h2>Dating App Development Company</h2>
                <p>
                  Love is no longer in the air but it is now visible and
                  accessible right on the mobile screen thanks to the Dating App
                  Development india. The dating apps are no longer meant for
                  Generation Y but for people across all age groups. Every new
                  dating app now focuses on catering to lovebirds of specific
                  preferences or age groups or orientations. The kind of popular
                  dating app market faces, there are enough rooms for new dating
                  apps to get popular. Would you like to create a dating app?
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
                      Dedicated team for your Dating App Development
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Dating-App.png")}
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Create-A-Dating-App.png")}
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/Dating-App-Developer.png")}
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
            <h3>Enormous Features of Dating App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="User-Dating-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User-Dating"
                  type="button"
                  role="tab"
                  aria-controls="User-Dating"
                  aria-selected="true"
                  onClick={() => filterItem("User-Dating")}
                >
                  User Dating App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Admin-Features-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-Features"
                  type="button"
                  role="tab"
                  aria-controls="Admin-Features"
                  aria-selected="false"
                  onClick={() => filterItem("Admin-Features")}
                >
                  Admin Features of Dating App
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
            <h3>
              Why should you create a Dating Apps Development Company India?
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
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Knowing-New-People.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Knowing New People</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Meeting-Like-Minded-People.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Meeting Like- Minded People</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Branding-And-Marketing.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Branding And Marketing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/Finding-Travel-Buddies.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Finding Travel Buddies</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/An-Entertaining-Social-Space.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>An Entertaining Social Space</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/Dating App Development Company/why-should/A-Market-Research-Opportunity.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>A Market Research Opportunity</p>
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
                  Would you like to create an On Demand Dating App?
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

export default DatingApp;
