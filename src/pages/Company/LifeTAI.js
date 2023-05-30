import React from "react";
import { Link } from "react-router-dom";

function LifeTAI() {
  return (
    <>
      <section className="life_tai_banner">
        <div className="container">
          {/* <div className="row center-col padding-four-top">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 margin-10px-tb xs-no-margin-top xs-no-margin-bottom"> */}
          <div className="life_tai_content">
            <h1>Life at @App Ideas</h1>
            <p>
              We are The App Ideas, a creative bunch of thinkers and developers
              having expertise in shaping future ready mobile and web apps
              across niches.
            </p>
            <p>
              The App Ideas is the leading Web &amp; Mobile App Development
              Company that can help your business grow with innovative and
              engaging solutions. We build cutting-edge digital solutions with
              the quick-engaging user interface and user experience. Over the
              years we have established ourselves as the leading service
              provider for mobile app development, web development, Web and
              graphic design, e-commerce development, IOT development and games
              development.
            </p>
          </div>
          {/* </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 display-table margin-10px-tb xs-no-margin-top xs-no-margin-bottom">
              <div className="right-img">
                <img
                  src={require("../../assets/images/COMPANY/lifeAtTai/Life at TAI.png")}
                  alt="life-tai-bg"
                />
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </section>
      <section className="life_section">
        <div className="container">
          <div className="life__title">
            <h1>Life at App Ideas</h1>
          </div>
          <div className="life_content_img text-center">
            <h1>LIFE @</h1>
            <img
              src={require("../../assets/images/COMPANY/lifeAtTai/life-tai.png")}
              alt="life-tai"
              className="img-fluid my-4"
            />
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-5 col-sm-12 col-12">
              <div className="life_content_lft text-right">
                <h1>2022</h1>
                <h2>Ganesh Chaturthi</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12 col-12">
              <div className="life_img_rht">
                <img
                  src={require("../../assets/images/COMPANY/lifeAtTai/Ganesh Chaturthi.gif")}
                  alt="ganesh-chaturthi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 col-md-7 col-sm-12 col-12 order-2 order-md-1 order-sm-2 order-xs-2">
              <div className="life_img_rht life_img_rht_shift">
                <img
                  src={require("../../assets/images/COMPANY/lifeAtTai/christmas.webp")}
                  alt="christmas"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 col-12 order-1 order-md-2 order-sm-1 ">
              <div className="life_content_lft life_content_lft_shift">
                <h1>2022</h1>
                <h2>Christmas Day</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-5 col-sm-12 col-12">
              <div className="life_content_lft text-right">
                <h1>2022</h1>
                <h2>Diwali</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12 col-12">
              <div className="life_img_rht">
                <img
                  src={require("../../assets/images/COMPANY/lifeAtTai/diwali.webp")}
                  alt="diwali"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Would you like to build your career with us?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link to="/contactus">
                  <a className="contact_btn" style={{ color: "#000" }}>
                    Contact us{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
}

export default LifeTAI;
