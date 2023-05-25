import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./work.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Work = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
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
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000}
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
          style={{ padding: "2.5rem 0" }}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/2.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">
                  Mindweel - On Demand Psychologist Hiring App
                </div>
                <p>
                  It’s an On Demand Psychologist OR Doctor Hiring App. It has
                  been very useful app in the current scenario of the world
                  where everyone is facing depression, anxiety and mental health
                  issues.
                </p>
                <p>
                  This project has three main modules, Patient App, Psychologist
                  / Doctor App, and Admin Panel.
                </p>

                <p>
                  Patient can able to create and manage their medical profile,
                  find the best available Psychologist / Doctors, Check their
                  profiles, availability, ratings and reviews, Book them online,
                  make a payment, give ratings and reviews.
                </p>
                <p>
                  Psychologist OR Doctor can able to register themselves, create
                  their specialist profile, manage availability, patient,
                  booking, payment and other stuffs.
                </p>
                <p>
                  Admin can able to manage Patients, Doctors, Payment, Reports,
                  Content and other stuffs.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/bolt-app.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Bold Delivery</div>
                <p>
                  It’s a Food Ordering & Food Delivery App. We have created a
                  User app, Restaurant App, Driver App, and Admin panel.
                </p>
                <p>
                  User can able to search, filter, check food details, place an
                  online order, make payment, track their orders, give ratings
                  and reviews.
                </p>

                <p>
                  Restaurant can able to register themselves, list and manage
                  their food items, manage orders, track drivers and orders.
                </p>
                <p>
                  Driver can able to register, manage their availabilities,
                  deliver the food items to the users.
                </p>
                <p>
                  Admin can able to manage users, food category & sub category,
                  restaurants, drivers, payment and other things.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/bravura.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Woocommerce Store</div>
                <p>
                  It’s an E-commerce store for selling gifts and corporate
                  items.
                  <br />
                  We have created this store using woo commerce, It has includes
                  following important features.
                </p>
                <p>
                  User can able to search and filter the products,
                  <br />
                  User can able to manage his cart, orders and payment.
                  <br />
                  User can able to Track the orders, check the order and payment
                  history.
                </p>

                <p>
                  Admin can able to manage users, catalogue, orders, delivery,
                  payment, reports and content of the site.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/chefs-club.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Chef Club</div>
                <p>
                  This is an inclusive rewards program and platform where users
                  can buy a bites from the platform for their favorite
                  restaurants and redeem it later. In this way, they are helping
                  their favorite restaurants in this covid crisis and also
                  getting discount. They need to pay 80 USD to buy 100 bites and
                  100 bites is equal to 100 USD at the time of redeem.
                </p>
                <p>We have created a website and mobile apps for them.</p>

                <p>It has 3 Main Modules.</p>
                <p>1) Users 2) Restaurant 3) Admin</p>
                <p>
                  Users can able to search and buy bites from their favorite
                  restaurants and redeem them as per their convince. Restaurant
                  can able to check how many users have buy their bites, how
                  many of them redeem it, and manage payments. Admin can able to
                  manage Restaurants, Users, Payment, Bites, Reports, and other
                  core features.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/jump-start-1-1.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Grocery Store</div>
                <p>It’s a grocery ordering and grocery delivery system.</p>
                <p>
                  User can able to search, check and purchase various kind of
                  grocery items.
                  <br />
                  User can able to make an online payment, track the delivery,
                  give rating and review and other stuffs.
                </p>

                <p>
                  Driver can able to pickup the grocery and deliver it to the
                  customers.
                </p>
                <p>
                  Admin can able to manage users, drivers, category, sub
                  category, product listing, orders, delivery, payment, reports
                  and content of the site.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/jump-start-1.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Job Portal</div>
                <p>
                  It’s a job portal / job recruitment website for a Motor
                  Sports.
                </p>
                <p>It has 3 main modules.</p>

                <p>1) Recruiters 2) Job Seekers 3) Admin</p>
                <p>
                  Recruiters or Company can able to post their job requirements
                  by paying a membership fee. <br />
                  Recruiters can get the various job seekers CVs.
                </p>
                <p>
                  Job Seekers can able to search and check the various job
                  posting in details.
                  <br />
                  Job seekers can able to apply for the job.
                </p>
                <p>
                  Admin can able to manage recruiters and job seekers. <br />
                  Admin can able to manage membership packages, payment and
                  content of the site.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/service-my-car.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Service my car</div>
                <p>
                  It’s an On Demand Car Servicing App, It has 2 main modules.
                </p>
                <p>
                  1) User App <br />
                  2) Admin Web Backend
                </p>

                <p>
                  User can able to check out all the services packages offered
                  by a service center, check in details and compare them, choose
                  the service package and book online, pay online, they can also
                  choose pickup and drop off point, check and approve extra
                  repair cost, check their car 360° inspections on their app,
                  provide ratings and reviews of the services.
                </p>
                <p>
                  Admin can able to list down all the services packages, manage
                  booking, extra repair services, payment, content of an app,
                  offers and other stuffs
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/shopping.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">Shopify Ecommerce store</div>
                <p>
                  It’s an E-commerce store for selling various kind of Clothes,
                  Shoes and fashion accessories.
                </p>
                <p>
                  User can able to search and filter the products,
                  <br />
                  User can able to manage his cart, orders and payment.
                  <br />
                  User can able to Track the orders, check the order and payment
                  history.
                </p>

                <p>
                  Admin can able to manage users, catalogue, orders, delivery,
                  payment, reports and content of the site.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <img
                  src={require("../../assets/images/work/snagpay.webp")}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                    borderRadius: "10px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="dec">
                  Deal and Coupon System, Barter System, Trading System
                </div>
                <p>
                  This project is inspired from the traditional barter and
                  coupon system. <br />
                  This project has 3 main modules.
                </p>
                <p>1) User / Buyer 2) Seller / Vendor 3) Admin</p>

                <p>
                  Buyer can able to search, filter and check the various deals
                  and coupons available on the site.
                  <br />
                  Buyers can able to buy the deal, redeem that deal at service
                  point.
                </p>
                <p>
                  Vendor can able to post their various deals, and manage them.{" "}
                  <br />
                  Vendors can able to manage the orders / booking and payment,
                </p>
                <p>
                  Admin can able to manage Users, Vendors.
                  <br />
                  Admin can able to manage Subscription packages, payment,
                  content, reports and other stuffs.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
