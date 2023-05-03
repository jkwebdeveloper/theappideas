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
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
