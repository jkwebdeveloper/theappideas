import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./work.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import axios from "axios";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetWorks = () => {
    axios
      .get("https://the-app-ideas.onrender.com/api/workDone", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setWorks(res.data.workDoneData);
        // console.log(res.data.workDoneData)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetWorks();
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="work_slider_section py-5">
      <div className="container">
        <div className="work-heading">
          <h2>Work we had done</h2>
        </div>
        {loading ? (
          <div className="">Loading...</div>
        ) : works.length > 0 ? (
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
              delay: 3000,
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
            style={{ padding: "2.5rem 0" }}
          >
            {works.map((work) => (
              <SwiperSlide key={work._id}>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.app.mindwheel"
                  target="_blank"
                  style={{ color: "#000" }}
                >
                  <div className="row">
                    <div className="col-lg-5 col-md-12">
                      <img
                        src={"https://the-app-ideas.onrender.com".concat(
                          work.image.src
                        )}
                        alt={work.image.alt}
                        style={{
                          width: "100%",
                          boxShadow: "0px 0px 10px 0px rgb(154 154 154/75%)",
                          borderRadius: "10px",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <div className="dec">{work.title}</div>
                      <p style={{ textAlign: "justify" }}>{work.description}</p>
                      <p style={{ textAlign: "justify" }}>{work.description}</p>
                      {/* <p style={{ textAlign: "justify" }}>{work.description}</p>
                      <p style={{ textAlign: "justify" }}>{work.description}</p>
                      <p style={{ textAlign: "justify" }}>{work.description}</p> */}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </section>
  );
};

export default Work;
