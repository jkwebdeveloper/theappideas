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
        <div className="container ">
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
            pagination
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
            style={{ padding: "1rem 0px 4rem 0px" }}
          >
            <SwiperSlide>
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
            <SwiperSlide>
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
            <SwiperSlide>
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
            <SwiperSlide>
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
            <SwiperSlide>
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
