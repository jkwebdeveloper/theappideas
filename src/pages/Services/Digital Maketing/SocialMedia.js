import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Social Media Marketing</h2>
                <p>
                  This era is mainly known as the digital era because everything
                  is now moving towards online platforms. All the businesses are
                  now launching their websites, mobile app and web apps for the
                  growth of the business. If we talk about Social Media
                  Marketing then this kind of services platform can help in
                  promoting the services and reaching a high audience. Social
                  Media can also help in generating leads. If you are planning
                  of hiring Social Media marketing services then feel free to
                  reach us.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in Social Media marketing
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Social Media Marketing Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Social Media Marketing Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Complete Guidance from Designing to Deployment
                    </span>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Services.png")}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Social Media Marketing</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-Specialist.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Social Media Marketing Services</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/SEO-optimization.png")}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Social Media Marketing Agency</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>Contact us</h4>
                </div>
                <div className="contact__body">
                  <div className="contact__form">
                    <form action="">
                      <div className="row g-3">
                        <div className="col-sm-12 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                            aria-label="Name*"
                          />
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email*"
                            aria-label="Email"
                          />
                        </div>
                        <div className="col-sm-6 h-100 select__country my-3">
                          <select className="select2 w-100 h-100">
                            <option value={1}>Country*</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                            <option value={5}>Option 5</option>
                            <option value={6}>Option 6</option>
                            <option value={7}>Option 7</option>
                            <option value={8}>Option 8</option>
                          </select>
                        </div>
                        <div className="col-sm-6 my-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number*
                                    "
                            aria-label="Phone Number"
                          />
                        </div>
                        <div className="col-sm-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Project Requirement*"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-12 text-center py-5">
                          <button type="submit" className="request__btn">
                            Request a FREE Quote
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contact__footer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Social Media Marketing Company India</h3>
            <p>
              For the vast majority of people and businesses, social media is
              the primary platform to engage and build an opinion. The App Ideas
              is one of the leading digital and social media marketing companies
              with a robust portfolio of successful marketing campaigns run by
              us. Driving favourable user opinion, boosting brand visibility and
              driving sales and business conversion are the key strengths of our
              social media marketing.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="#"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/1-3.png")}
                      alt="Social Media Strategy"
                      className="img-fluid"
                    />
                    <p>Social Media Strategy</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/2-3.png")}
                      alt="Social Branding"
                      className="img-fluid"
                    />
                    <p>Social Branding</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/3-2.png")}
                      alt="Social Engagement"
                      className="img-fluid"
                    />
                    <p>Social Engagement</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/4-2.png")}
                      alt="Social Monitoring"
                      className="img-fluid"
                    />
                    <p>Social Monitoring</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/5-2.png")}
                      alt="Social Media Paid Campaigns"
                      className="img-fluid"
                    />
                    <p>Social Media Paid Campaigns</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/We Provide/6-2.png")}
                      alt="Social PR"
                      className="img-fluid"
                    />
                    <p>Social PR</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Social PR</h3>
                  <p className="Title_para">
                    Do you own a business or planning to launch an online
                    business? If yes then this is probably the best time to make
                    an investment in developing the future-ready product. And if
                    we talk about the current trend then social media marketing
                    plays a vital role in the success of the software.
                  </p>
                  <p className="Title_para">
                    The App Ideas is one of the leading software development
                    company. We have years of experience in offering the best
                    social media marketing services. Here at The App Ideas, we
                    also boast of a strong PR team to help business brands with
                    frequent PR campaigns for branding and business conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose App Ideas for Social Media Marketing?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="#"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/1-4.png")}
                      alt="Experience"
                      className="img-fluid"
                    />
                    <p>Experience</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/2-4.png")}
                      alt="Expertise"
                      className="img-fluid"
                    />
                    <p>Expertise</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/3-3.png")}
                      alt="Robust"
                      className="img-fluid"
                    />
                    <p>Portfolio</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/4-3.png")}
                      alt="Sophisticated"
                      className="img-fluid"
                    />
                    <p>Tools</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/5-3.png")}
                      alt="Timebound And"
                      className="img-fluid"
                    />
                    <p>Result-Driven</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../../assets/images/SERVICES/Digital Marketing Agency/SEO-marketing/Why You Should/6-3.png")}
                      alt="Competitive"
                      className="img-fluid"
                    />
                    <p>Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Experience</h3>
                  <p className="Title_para">
                    Planning of hiring social media marketing services for your
                    business success? If yes then this is probably the best time
                    for you to search and hire the experienced and expert agency
                    that can provide you with the best social Media Marketing
                    services at the best possible rates.
                  </p>
                  <p className="Title_para">
                    Here we are at The App Ideas, Which is one of the leading
                    web and app development company. We have a team of a highly
                    skilled team of social media marketing who will offer the
                    best solutions. We have more than a decade of consistent
                    experience in social media marketing with a variety of
                    campaigns across the niches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestiMonial />

      <FAQ />

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: "left" }}>
                  Are you planning to Launch Successful Social Media Marketing
                  in the market?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link
                  to="/contactus"
                  className="contact_btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact us{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default SocialMedia;
