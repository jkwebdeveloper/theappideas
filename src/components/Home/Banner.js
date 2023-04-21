import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img from "../../assets/images/sec1-background.webp";

// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <img
        src={require("../../assets/images/sec1-background.webp")}
        style={{ width: "100%", backgroundRepeat: "no-repeat" }}
      />
    </section>
  );
};

export default Banner;
