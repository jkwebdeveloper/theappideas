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
import search from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Search-Products.svg";
import View from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/View-Products-Categories-Wise.svg";
import Cart from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Cart-Management.svg";
import Wish from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Wish-Products.svg";
import AvailOffers from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Avail-Offers.svg";
import Purchase from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Purchase-Online.svg";
import give from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Rating _ Reviews.svg";
import order from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/User App/Check-Order-History.svg";

// Admin Penal
import Vendor from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Vendor-Management.svg";
import UserManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/User-Management.svg";
import Payment from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Payment Management.svg";
import Featured from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Featured-Profiles-Management.svg";
import complaint from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/User-Complaint-Management.svg";
import Seller from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Admin Panel/Seller complaint management.svg";

// Seller-Panel
import Profile from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/profile-management.svg";
import Product from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Product-Management.svg";
import Category from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Category-Management.svg";
import Management from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Order Management.svg";
import Paymentmanagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Payment-Management-1.svg";
import OfferManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Offer-Management.svg";
import ShippingManagement from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Shipping-Management.svg";
import Inventory from "../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/Seller Panel/Inventory Management.svg";

const EcommerceData = [
  {
    id: 1,
    category: "User-App",
    image: search,
    title: "Search products",
    des: "User can search for products by using a variety of filters.",
  },
  {
    id: 2,
    category: "User-App",
    image: View,
    title: "View products categories wise",
    des: "Users can view and search for products across different categories.",
  },
  {
    id: 3,
    category: "User-App",
    image: Cart,
    title: "Cart management",
    des: "Users can search and see lists of available courses.",
  },
  {
    id: 4,
    category: "User-App",
    image: Wish,
    title: "Wish Products",
    des: "Users are also allowed to keep their chosen products under wish-list for future purchases.",
  },
  {
    id: 5,
    category: "User-App",
    image: AvailOffers,
    title: "Avail Offers",
    des: "The user app also shows various offers available for the users.",
  },
  {
    id: 6,
    category: "User-App",
    image: Purchase,
    title: "Purchase Online",
    des: "Through the user panel the user can make online purchases.",
  },
  {
    id: 7,
    category: "User-App",
    image: give,
    title: "give ratings and reviews",
    des: "Users can write reviews and give ratings on the basis of their satisfaction with the products.",
  },
  {
    id: 8,
    category: "User-App",
    image: order,
    title: "check order history",
    des: "Can see course details and fix the zoom meeting.",
  },
  {
    id: 9,
    category: "Admin-Panel",
    image: Vendor,
    title: "Vendor Management",
    des: "App admin is allowed to take full control of the management of the vendors.",
  },
  {
    id: 10,
    category: "Admin-Panel",
    image: UserManagement,
    title: "User Management",
    des: "App admin can easily manage user profiles right from the admin panel.",
  },
  {
    id: 11,
    category: "Admin-Panel",
    image: Payment,
    title: "Payment Management",
    des: "The app admin can manage all payment gateways and payment procedures.",
  },
  {
    id: 12,
    category: "Admin-Panel",
    image: Featured,
    title: "Featured profile management",
    des: "The app admin panel also allows handling a section relating to some chosen customer profiles.",
  },
  {
    id: 13,
    category: "Admin-Panel",
    image: complaint,
    title: "User complaint management",
    des: "Through the admin panel the app admin can take cognisance if complaints and grievances and address them.",
  },
  {
    id: 14,
    category: "Admin-Panel",
    image: Seller,
    title: "Seller complaint management",
    des: "Through the admin panel, the app admin can also take note of all the seller complaints in order to address them.",
  },
  {
    id: 15,
    category: "Seller-Panel",
    image: Profile,
    title: "Profile Management",
    des: "The seller panel allows sellers to maintain and manage their own seller profiles equipped with business credentials and contact details.",
  },
  {
    id: 16,
    category: "Seller-Panel",
    image: Product,
    title: "Product Management",
    des: "The seller through the seller panel can manage their products and decide to make a feature list and categories as applicable.",
  },
  {
    id: 17,
    category: "Seller-Panel",
    image: Category,
    title: "Category management",
    des: "The seller panel allows creating product categories and denominations to help easy search and viewing.",
  },
  {
    id: 18,
    category: "Seller-Panel",
    image: Management,
    title: "Order Management",
    des: "The seller panel also allows managing all customer orders.",
  },
  {
    id: 19,
    category: "Seller-Panel",
    image: Paymentmanagement,
    title: "Payment management",
    des: "Through seller panel the seller can manage customer payment.",
  },
  {
    id: 20,
    category: "Seller-Panel",
    image: OfferManagement,
    title: "Offer Management",
    des: "The seller panel also allows the seller to manage offers and promotions.",
  },
  {
    id: 21,
    category: "Seller-Panel",
    image: ShippingManagement,
    title: "Shipping Management",
    des: "Through the seller panel, the seller can also manage the shipping of products.",
  },
  {
    id: 22,
    category: "User-App",
    image: Inventory,
    title: "Inventory management",
    des: "The seller panel also comes with an inventory management suite to take control of the entire process.",
  },
];
const EcommerceApp = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [item, setItems] = useState(EcommerceData);
  const filterItem = (cateItem) => {
    const updateItems = EcommerceData.filter((curElem) => {
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
                <h2>E-Commerce App Store</h2>
                <p>
                  As most businesses are coming onto the digital space to stay
                  competitive, there is a boom in the eCommerce App Development
                  stores. Ecommerce stores offering a level-playing field for
                  businesses of all sizes and niches are opening the next big
                  growth opportunity. We build robust ecommerce stores with
                  cutting edge technologies and the latest design protocols to
                  help business brands take on the growth opportunities in the
                  online marketplace.
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
                      Best E-Commerce App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your E-Commerce App Development
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
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/eCommerce-App-Development.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>eCommerce App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/eCommerce-Mobile-App-Development.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>eCommerce Mobile App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/eCommerce-Application-Development-Company.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>eCommerce Application Development Company</h4>
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
                  className="nav-link active"
                  id="User-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User-App"
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
                  id="Admin-Panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-Panel"
                  type="button"
                  role="tab"
                  aria-controls="Admin-Panel"
                  aria-selected="false"
                  onClick={() => filterItem("Admin-Panel")}
                >
                  Admin Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Seller-Panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Seller-Panel"
                  type="button"
                  role="tab"
                  aria-controls="Seller-Panel"
                  aria-selected="false"
                  onClick={() => filterItem("Seller-Panel")}
                >
                  Seller Panel
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="User-App"
                role="tabpanel"
                aria-labelledby="User-App-Tab"
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
            <h3>Why should you create an eCommerce App?</h3>
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
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Mobile-Shopping-Made-Simple.png")}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Mobile Shopping Made Simple</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Open-Storefront.png")}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Always Open Storefront</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Accessible-Customer-Support.png")}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Always Accessible Customer Support</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Always-Open-Storefront.png")}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Sophisticated Experience</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Easier-Product-Promotions.png")}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Easier Product Promotions</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="/" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SOLUTIONS/Popular Solutions/E-Commerce App Store/why-should/Higher-ROI-Growth.png")}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Higher ROI Growth</p>
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
                  Would you like to create an E-Commerce App?
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

export default EcommerceApp;
