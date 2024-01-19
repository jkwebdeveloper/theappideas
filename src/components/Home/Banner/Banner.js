import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/Banner/theappideassolutions.webp"
// import Lottie from "lottie-react";
// import Loading from "../../../assets/images/loading.json";

const Banner = ({ setOpenModal }) => {
  return (
    <section className="banner-section" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-5 col-md-12">
              <div className="slider-img">
                <img
                  src={bannerImg}
                  alt=""
                  style={{
                    width: "100%",
                    // height: "25vw",
                    objectPosition: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <h1 className="slider-heading-dec">
              Web and Mobile App Development Company - The App Ideas
              </h1>
              <p className="slider-dec">
                Are you deciding to make an app or an e-commerce store or even a
                website? We are right here for your service. Our custom mobile
                application development company specializes in crafting
                cutting-edge mobile applications designed for sustained user
                engagement and optimal business conversion. Our proficiency
                extends from the development of intricate enterprise apps to a
                diverse range of on demand app ideas, ensuring that every niche
                and category is met with expertise.
              </p>
              <p className="slider-dec">
                With decades of experience in e-commerce development, we have
                been pivotal in shaping numerous online brands. Our commitment
                lies in constructing well-equipped, customer-centric e-commerce
                stores with features that enhance user experience and contribute
                to consistent business conversion.
                Additionally, We stay abreast of the latest web development
                technologies, employing our expertise to build sophisticated,
                feature-rich solutions across various business-niches. Whether
                it's app development, website development, offshore software
                development, on demand app development, clone application
                development or other cutting-edge technologies. We are
                well-versed in delivering performance-driven solutions that
                align with your vision and goals.
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
