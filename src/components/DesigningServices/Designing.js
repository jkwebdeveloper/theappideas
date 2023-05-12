import React from "react";
import Work from "../../components/Workdone/Work";
import TestiMonial from "../Testimonial/TestiMonial";

// Service section image
import MobileAppDesigning from "../../assets/images/SERVICES/Designing/Services we provide/Mobile app designing.svg";
import WebAppDesigning from "../../assets/images/SERVICES/Designing/Services we provide/Web app designing.svg";
import Graphic from "../../assets/images/SERVICES/Designing/Services we provide/Graphic designing.svg";

// Industries  section images

const Designing = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Designing</h2>
                <p>
                  Designing an online platform like mobile app, web app,
                  software or website services can add more value to the
                  platforms. The first impression of your online business is
                  totally dependent on the look or the design of your online
                  platforms. A well designed and functional website is
                  considered is an invaluable asset for any business category.
                  But as there is high competition, it is very important to
                  integrate unique or customized designers into your website
                  designing services which also helps in beguiling the
                  customers.
                </p>
                <p>
                  As we mentioned earlier, how designing plays a vital role in
                  the success of online platforms. Here at The App Ideas which
                  is one of the leading web and app development company. We have
                  a team of highly skilled graphic designers who are proficient
                  in providing unique designing services based on the client’s
                  requirements as well as the business niches. For more details
                  on the design, please feel free to reach us and get the best
                  design services for all kinds of online platforms at a
                  competitive costing.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>Request a FREE Quote</h4>
                  <p>Guaranteed Response within One Business Day!</p>
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
                            placeholder="Email*
                                    "
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
            <h3>Services we provide</h3>
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
                      src={require("../../assets/images/SERVICES/Designing/Services we provide/banner-design.png")}
                      alt="Banner-Designing"
                      className="img-fluid"
                    />
                    <p>
                      Banner <br />
                      Designing
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Services we provide/logo-design.png")}
                      alt="Logo-Designing"
                      className="img-fluid"
                    />
                    <p>
                      Logo <br />
                      Designing
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Services we provide/template-design.png")}
                      alt="Custom-Template-Designing"
                      className="img-fluid"
                    />
                    <p>Custom Template Designing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={MobileAppDesigning}
                      alt="Mobile-App-Designing"
                      className="img-fluid"
                    />
                    <p>Mobile App Designing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={WebAppDesigning}
                      alt="Web-App-Designing"
                      className="img-fluid"
                    />
                    <p>Web App Designing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Services we provide/redesign.png")}
                      alt="Re-Designing-Services"
                      className="img-fluid"
                    />
                    <p>Re-Designing Services</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Services we provide/brochure-design.png")}
                      alt="Brochure-Designing"
                      className="img-fluid"
                    />
                    <p>Brochure Designing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Services we provide/psd-html.png")}
                      alt="PSD-to-Html"
                      className="img-fluid"
                    />
                    <p>
                      PSD To <br />
                      HTML
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Graphic}
                      alt="Graphic-Designing"
                      className="img-fluid"
                    />
                    <p>Graphic Designing</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Banner designing</h3>
                  <p className="Title_para">
                    The App Ideas is one of the foremost web and app development
                    company. Along with the best online platform development, we
                    are also expertise in developing designing services for all
                    kinds of business categories. In designing, we have years of
                    experience in delivering the best designs for all kinds of
                    business niches at the best rates. For more details, feel
                    free to reach us.
                  </p>
                  <p className="Title_para">
                    Are you looking for the best Banner designing services?
                  </p>
                  <p className="Title_para">
                    If yes, then you are at the right place for designing
                    services. We provide designing services for mobile app, web
                    app or website services. If you are looking for banner
                    designing services for your business then here we have a
                    team of experts who are proficient in designing an
                    attractive banner for your business. Connect with us to
                    discuss your requirements and get the best services at a
                    competitive rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Technologies Section Start */}
      <section className="technologies__section py-5">
        <div className="container">
          <div className="Title__White mb-4">
            <h3>Technologies we use</h3>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Software development/Technologies/asp.net_.png")}
                  alt="Asp.Net"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Photoshop</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Software development/Technologies/dnn.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Illustrator</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Software development/Technologies/dnn.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Figma</h2>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Software development/Technologies/dnn.png")}
                  alt="DotNetNuke"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Adobe XD</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Industries We Serve</h3>
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
                      src={require("../../assets/images/SERVICES/Designing/Industries/security-guard.png")}
                      alt="Academic-Education"
                      className="img-fluid"
                    />
                    <p>Security Guard Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/finance-ind.png")}
                      alt="Fintech-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Fashion <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/academic-education.png")}
                      alt="Real-Estate"
                      className="img-fluid"
                    />
                    <p>E-Commerce Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/academic-education.png")}
                      alt="Restaurant-Business"
                      className="img-fluid"
                    />
                    <p>Restaurant Business</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/academic-education.png")}
                      alt="Travel-Tourism"
                      className="img-fluid"
                    />
                    <p>Education Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/academic-education.png")}
                      alt="Construction-Industry"
                      className="img-fluid"
                    />
                    <p>Entertainment Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/finance-ind.png")}
                      alt="IT-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Finance <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/healthcare.png")}
                      alt="Healthcare-Industry"
                      className="img-fluid"
                    />
                    <p>Healthcare Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={require("../../assets/images/SERVICES/Designing/Industries/logistic-ind.png")}
                      alt="Entertainment-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Logistics <br />
                      Industry
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Security Guard Industry</h3>
                  <p className="Title_para">
                    The App Ideas is one of the most popular software
                    development company. We have years of experience in
                    providing the best solution for all kinds of IT services
                    like development and designing. We have worked on graphic
                    design services for all kinds of business niches including
                    the security guard industry. As we can see, this industry is
                    also digitalizing its platforms to enhance the user
                    experience.
                  </p>
                  <p className="Title_para">
                    Are you planning to launch a Security Guard Industry?
                  </p>
                  <p className="Title_para">
                    If yes, then you are at the right place for graphic
                    designing services. We have a team of highly skilled
                    developers as well as designers who are proficient in
                    offering the best service for mobile app, web app, websites
                    and software along with designing. If you Planning to make
                    an investment in a security guard app then feel free to
                    reach us, as we have already made a solution for a Security
                    guard app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* <!-- Work Slider Start --> */}
      <Work />
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
    </>
  );
};

export default Designing;
