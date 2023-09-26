import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
// import Lottie from "lottie-react";
// import Loading from "../../../assets/images/loading.json";

const Banner = ({ banners, setOpenModal, loading }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="banner-section" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <div className="container">
          {loading ? (
            <div className="loading_bar">
              <img
                src={require("../../../assets/images/loading.webp")}
                alt="loading"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          ) : banners.length > 0 ? (
            <Swiper
              modules={[Pagination, Navigation]}
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
              speed={2000}
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
              style={{ padding: "0px 0px 5rem", zIndex: "0" }}
            >
              {banners.map((banner) => (
                <SwiperSlide key={banner._id} style={{ cursor: "pointer" }}>
                  <div className="row" style={{ alignItems: "start" }}>
                    <div className="col-lg-6 col-md-12">
                      <div className="slider-img">
                        <img
                          src={"https://the-app-ideas.onrender.com".concat(
                            banner.image.src
                          )}
                          alt={banner.image.alt}
                          style={{
                            width: "100%",
                            height: "25vw",
                            objectPosition: "center",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <p className="slider-heading-dec">{banner.title}</p>
                      <p className="slider-dec">{banner.description}</p>
                      <br />
                      <div className="silder-btn">
                        <Link
                          to="/contact-us"
                          className="slider-get_btn"
                          onClick={() => setOpenModal(true)}
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div>no banner</div>
          )}

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
