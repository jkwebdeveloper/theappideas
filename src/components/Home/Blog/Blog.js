import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="container swiper">
      <div className="slide-container">
        <div className="blog-headidng">
          <h2>Our Latest Blogs</h2>
          <div className="underline"></div>
        </div>
        <div className="card-wrapper swiper-wrapper">
          <div className="col-lg-4 col-md-12">
            <div className="card swiper-slide">
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
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card swiper-slide">
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
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card swiper-slide">
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
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card swiper-slide">
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
                    Delivery
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card swiper-slide">
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
                    Delivery
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card swiper-slide">
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
                    Delivery
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-next swiper-navBtn" />
      <div className="swiper-button-prev swiper-navBtn" />
      <div className="swiper-pagination" />
    </div>
  );
};

export default Blog;
