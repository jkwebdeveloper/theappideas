import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="banner-section" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
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
            speed={1000}
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
            style={{ padding: "1rem 0px 3rem 0px" }}
          >
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="slider-img">
                    <img
                      src={require("../../../assets/images/banner-slider/mobile-app-slider-1.webp")}
                      alt=""
                      style={{ width: "60%", marginLeft: "130px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p className="slider-heading-dec">
                    Would you like to create an App?
                  </p>
                  <p className="slider-dec">
                    We build most sophisticated and future-ready mobile apps to
                    ensure consistent user engagement and business conversion.
                    From highly demanding modern enterprise apps to a whole
                    array of niche consumer apps, our experience and expertise
                    spans across every mobile app niche and category.
                  </p>
                  <br />
                  <div className="silder-btn">
                    <a href="" className="slider-get_btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="slider-img">
                    <img
                      src={require("../../../assets/images/banner-slider/ecommerce.webp")}
                      alt=""
                      style={{ width: "70%", marginLeft: "120px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p className="slider-heading-dec">
                    Would you like to create an E-commerce Store?
                  </p>
                  <p className="slider-dec">
                    We are into ecommerce development for decades and have
                    played an instrumental role in shaping many online brands.
                    We build most well-equipped, customer-centric and
                    brand-specific ecommerce stores with rich features,
                    user-centric design and UX attributes that can steadily make
                    business conversion.
                  </p>
                  <br />
                  <div className="silder-btn">
                    <a href="" className="slider-get_btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="slider-img">
                    <img
                      src={require("../../../assets/images/banner-slider/game.webp")}
                      alt=""
                      style={{ width: "80%", marginLeft: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p className="slider-heading-dec">
                    Would you like to create a Game?
                  </p>
                  <p className="slider-dec">
                    We build most engaging and addictive gaming apps across all
                    major game niches and categories. From simple 2D puzzle or
                    story book games to immersive racing and action games to
                    instantly engaging Virtual Reality (AR) and Augmented
                    Reality (AR) games, we develop and design game apps of every
                    niche for all platforms including game consoles, VR headsets
                    and mobile.
                  </p>
                  <br />
                  <div className="silder-btn">
                    <a href="" className="slider-get_btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="slider-img">
                    <img
                      src={require("../../../assets/images/banner-slider/create-web.webp")}
                      alt=""
                      style={{ width: "80%", marginLeft: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p className="slider-heading-dec">
                    DO YOU HAVE A WEBSITE IDEA?
                  </p>
                  <p className="slider-dec">
                    Keeping pace with the latest innovations in web development
                    technologies, we build highly sophisticated, feature-rich
                    and performance-driven websites of various niches. Our web
                    development experience and expertise spans across all latest
                    web development technologies including Progressive Web Apps
                    (PWA), Accelerated Mobile Pages (AMP) and others.
                  </p>
                  <br />
                  <div className="silder-btn">
                    <a href="" className="slider-get_btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="slider-img">
                    <img
                      src={require("../../../assets/images/banner-slider/iot.webp")}
                      alt=""
                      style={{ width: "80%", marginLeft: "40px" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <p className="slider-heading-dec">
                    Would you like to create an IoT app?
                  </p>
                  <p className="slider-dec">
                    In the world of connected gadgets and IoT ecosystem we make
                    consistent value additions by allowing users optimum control
                    and accessibility with a variety of IoT apps. From building
                    IoT apps for smart home gadgets to connected workplace
                    environments to smart automation apps for industrial
                    environments, we offer a broad range of IoT app solutions.
                  </p>
                  <br />
                  <div className="silder-btn">
                    <a href="" className="slider-get_btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <button className="swiper-navBtn" ref={prevRef}>
            prev
          </button>
          <button className="swiper-navBtn" ref={nextRef}>
            next
          </button> */}
        </div>
      </div>{" "}
    </section>
  );
};

export default Banner;
