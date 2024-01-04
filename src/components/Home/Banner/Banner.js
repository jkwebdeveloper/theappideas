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

const Banner = ({ setOpenModal }) => {
  return (
    <section className="banner-section" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 col-md-12">
              <div className="slider-img">
                <img
                  src={require("../../../assets/images/Banner/Group 29.png")}
                  alt=""
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
              <p className="slider-heading-dec">
                Mobile App & Website Development{" "}
              </p>
              <p className="slider-dec">
                Keeping pace with the latest innovations in web development
                technologies, we build highly sophisticated, feature-rich and
                performance-driven websites of various niches. Our web
                development experience and expertise spans across all latest web
                development technologies including Progressive Web Apps (PWA),
                Accelerated Mobile Pages (AMP) and other.
              </p>
              <br />
              <div className="silder-btn">
                <Link
                  to=""
                  className="slider-get_btn"
                  onClick={() => setOpenModal(true)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Banner;
