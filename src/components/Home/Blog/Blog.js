import React, { useEffect, useRef, useState } from "react";
import "./blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetBlogs = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/blog", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBlogs(res.data.blogData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetBlogs();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="blog-section" style={{ paddingBottom: "50px" }}>
      <div className="container ">
        <div className="blog-heading">
          <h2>Our Latest Blogs</h2>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : blogs.length > 0 ? (
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
            style={{ padding: "2.5rem 0px 4.2rem" }}
          >
            {blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <div className="card">
                <div className="image-box">
                  <img
                    src={"https://the-app-ideas.onrender.com".concat(
                      blog.image.src
                    )}
                    alt={blog.image.alt}
                  />
                </div>
                <div className="profile-details">
                  <div className="name-job">
                    <h3 className="name">
                      {blog.title}
                    </h3>
                    <br />
                    <h4 className="job">{blog.description}</h4>
                    <br />
                    <h4 className="job">
                      {blog.content}
                    </h4>
                    <br />
                    <button className="read-btn">READ MORE</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            ))}
          </Swiper>
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  );
};

export default Blog;
