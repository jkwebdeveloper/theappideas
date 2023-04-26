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
      <img
        src={require("../../../assets/images/sec1-background.webp")}
        style={{
          width: "100%",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        alt=""
      />
      <div style={{ position: "relative" }}>
        <div className="container ">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            direction={"horizontal"}
            pagination
            navigation
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
                <div className="col-6">
                  <img
                    src={require("../../../assets/images/banner-slider/create-web.webp")}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <p>Would you like to create an App?</p>
                  <p>
                    We build most sophisticated and future-ready mobile apps to
                    ensure consistent user engagement and business conversion.
                    From highly demanding modern enterprise apps to a whole
                    array of niche consumer apps, our experience and expertise
                    spans across every mobile app niche and category.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row">
                <div className="col-6">
                  <img
                    src={require("../../../assets/images/banner-slider/create-web.webp")}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <p>Would you like to create an App?</p>
                  <p>
                    We build most sophisticated and future-ready mobile apps to
                    ensure consistent user engagement and business conversion.
                    From highly demanding modern enterprise apps to a whole
                    array of niche consumer apps, our experience and expertise
                    spans across every mobile app niche and category.
                  </p>
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
