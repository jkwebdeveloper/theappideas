import React from "react";


const AboutUs = () => {
  return (
    <section className="about-two">
      <div
        className="about-two_pattern-two"
        style={{ backgroundImage: "url(images/background/pattern-13.png)" }}
      />
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="about-two_image-column col-lg-6 col-md-12 col-sm-12">
            <div
              className="about-two_pattern-one"
              style={{
                backgroundImage: "url(images/background/pattern-12.png)",
              }}
            />
            <div className="about-two_image">
              <img src="images/resource/about-2.jpg" alt="" />
              {/* About One Detail */}
              <a
                className="about-two_play lightbox-video fa-solid fa-play fa-fw"
                href="https://www.youtube.com/watch?v=kxPCFljwJws"
              >
                <i className="ripple" />
              </a>
            </div>
          </div>
          {/* Content Column */}
          <div className="about-two_content col-lg-6 col-md-12 col-sm-12">
            <div className="about-two_content-inner">
              <div className="sec-title_two">
                <div className="sec-title_two-title">About Our Company</div>
                <h2 className="sec-title_two-heading">
                  Choose <span>The Best</span> IT <br /> Service Company
                </h2>
              </div>
              <div className="about-two_text">
                An IT firm or MSP who keeps your IT running smoothly at all
                times is like a plumber who fixes your pipes; that’s what they
                are supposed to do. Many IT firms struggle.
              </div>
              <div className="about-two_feature">
                <div className="row clearfix">
                  {/* About Two Block */}
                  <div className="about-two_block col-lg-6 col-md-6 col-sm-6">
                    <div className="about-two_block-inner">
                      <span className="about-two_block-icon">
                        <img src="images/icons/about-1.png" alt="" />
                      </span>
                      <h6 className="about-two_block-heading">
                        Moneyback <br /> Gurentee
                      </h6>
                    </div>
                  </div>
                  {/* About Two Block */}
                  <div className="about-two_block col-lg-6 col-md-6 col-sm-6">
                    <div className="about-two_block-inner">
                      <span className="about-two_block-icon">
                        <img src="images/icons/about-2.png" alt="" />
                      </span>
                      <h6 className="about-two_block-heading">
                        Technical <br /> Support
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <a className="btn-style-three theme-btn btn-item" href="#">
                  <div className="btn-wrap">
                    <span className="text-one">
                      Contact Us <i className="fa-solid fa-arrow-right fa-fw" />
                    </span>
                    <span className="text-two">
                      Contact Us <i className="fa-solid fa-arrow-right fa-fw" />
                    </span>
                  </div>
                </a>
                {/* About Phone Box */}
                <div className="about-phone_box">
                  <span className="about-phone_icon fa-solid fa-phone fa-fw" />
                  Call for help <br />
                  <a
                    className="about-two_phone-number"
                    href="tel:+91-124-3467-2345"
                  >
                    91 124 3467 2345
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
