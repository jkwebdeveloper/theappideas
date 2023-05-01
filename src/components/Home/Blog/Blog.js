import React, { useRef } from "react";
import "./blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Blog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="blog-section" style={{ paddingBottom: "50px" }}>
      <div className="container ">
        <div className="blog-heading">
          <h2>Our Latest Blogs</h2>
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
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
          style={{ padding: "2.5rem 0" }}
        >
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/1-1-1.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/Cost-to-Build-an-Educational-App-for-Kids-The-App-Ideas.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/Dunzo.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/Wedding-Website-Development-The-App-Ideas.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/blog_banner-1.jpg")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/blog_banner.jpg")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/car-parking.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/car-wash-app.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/image-18.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/blog-slider/rover.webp")}
                  alt=""
                />
              </div>
              <div className="top-btn">
                <button className="view-right">App ideas</button>
                <button className="view-right">Application</button>
              </div>
              <div className="profile-details">
                <div className="name-job">
                  <h3 className="name">
                    How Much Does It Cost to Develop A Grocery Delivery App like
                    Instacart?
                  </h3>
                  <br />
                  <h4 className="job">By Chirag Panchal/ April 24,2023</h4>
                  <br />
                  <h4 className="job">
                    Hire in this article, we are going to discuss the Grocery
                    Delivery...
                  </h4>
                  <br />
                  <button className="read-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="swiper-button-next swiper-navBtn" ref={prevRef} />
        <div className="swiper-button-prev swiper-navBtn" ref={prevRef} /> */}
      </div>
      {/* <button className="swiper-navBtn" ref={prevRef}>
        prev
      </button>
      <button className="swiper-navBtn" ref={prevRef}>
        next
      </button> */}
    </div>
  );
};

export default Blog;
