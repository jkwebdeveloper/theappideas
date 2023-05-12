import React from "react";
import Work from "../../components/Workdone/Work"
import TestiMonial from "../Testimonial/TestiMonial";


// Service section image
import Custom from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Custom E-Commerce Website Development.svg";
import Cart from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/E-commerce Cart Development.svg";
import Plugin from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Plugin And Extensions Development.svg";
import Redevelopment from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Redevelopment Service.svg";
import Maintenance from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Maintenance And Support.svg";
import Redesigning from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Redesigning Service.svg";
import ThirdParty from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Third-party APIs integration.svg";
import ECommerceSEO from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/E-commerce SEO.svg";
import Site from "../../assets/images/SERVICES/E-Commerce Website/Services we provide/Site Migration.svg";

// Industries We Serve section images
import Grocery from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Grocery Industry.svg";
import Food from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Food and Beverage Industry.svg";
import Electronics from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Electronics Industry.svg";
import Logistics from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Logistics Industry.svg";
import Fashion from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Fashion Industry.svg";
import Retail from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Retail Industry.svg";
import Business from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Business Industry.svg";
import Education from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Education Industry.svg";
import Rental from "../../assets/images/SERVICES/E-Commerce Website/Industries We Serve/Rental Industry.svg";


const GameDev = () => {
  return (
    <>
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Game App Development Company</h2>
                <p>
                  Game apps make the most successful and highest revenue earning
                  app niche. Game apps are the most competitive turf for
                  developers now. Without really offering addictive game playing
                  and viral attributes, a game app doesn’t stand a chance to cut
                  through the competition. At The App Ideas, we build unique
                  Game apps that can quickly grab the attention of the gamers
                  and make way for addictive game-playing as well as virality.
                </p>
                <p>
                  Game Apps are one of the best technology innovations in the
                  market. Many of the entrepreneurs are now investing more into
                  game apps and unique ideas which keeps their users more
                  entertained. There are higher rates of getting successful if
                  you have launched a unique game app in the market. If you are
                  planning of launching a Game app in the market then it is very
                  important for you to research the market. We have years of
                  experience in providing future-ready game app by integrating
                  unique design and adding up the advanced features. Feel free
                  to reach us and get a free quote.
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
                            SUBMIT
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
                      src={Custom}
                      alt="Custom-E-Commerce-Website-Design"
                      className="img-fluid"
                    />
                    <p>
                      Cross-Platform Game <br />
                      App Services
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Cart}
                      alt="E-Commerce-Cart-Development"
                      className="img-fluid"
                    />
                    <p>
                      Game Consoles <br />
                      App Services
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Plugin}
                      alt="Plugin-And-Extensions-Development"
                      className="img-fluid"
                    />
                    <p>
                      Game Art <br />
                      Design
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Maintenance}
                      alt="Maintenance-And-Support"
                      className="img-fluid"
                    />
                    <p>
                      Augmented Reality <br />
                      Game Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Redesigning}
                      alt="Redesigning-Service"
                      className="img-fluid"
                    />
                    <p>
                      Virtual Reality <br />
                      Game Development
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={Redevelopment} alt="Redevelopment-Service" />
                    <p>
                      Recreating <br />
                      Game App
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={ThirdParty}
                      alt="Third-Party-APIs-Integration"
                      className="img-fluid"
                    />
                    <p>
                      Game Upgrading <br />
                      And Support
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={ECommerceSEO}
                      alt="E-Commerce-SEO"
                      className="img-fluid"
                    />
                    <p>
                      Game <br />
                      Marketing
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Site}
                      alt="Site-Migration"
                      className="img-fluid"
                    />
                    <p>
                      Game App <br />
                      Testing
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">Game App Testing</h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading game app development
                    company. Along with the services like developing, designing
                    and marketing, we also ensure to test the game app before
                    deploying it to the Clients. Many Game app fails because the
                    testing is not perfectly done and users face lots of issues
                    while using it. So development, as well as testing, are very
                    important to launch a successful game app in the market at
                    the best rates.
                  </p>
                  <p className="Title_para">
                    Are you looking for the best Game App Testing service?
                  </p>
                  <p className="Title_para">
                    If yes, then feel free to connect with us. We are having an
                    experienced team who can test the overall game and before
                    deployment, we will fix all the bugs if needed. Our testing
                    team enhanced the overall gaming experience to provide
                    Quality Assurance and compliance testing for the Game app
                    development services. We are just a text away, feel free to
                    connect with us at any time and get a free quotation.
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
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Game App Development/Tecnologies/Unity.png")}
                  alt="Unity"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Unity</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Game App Development/Tecnologies/Virtual-Reality.png")}
                  alt="Virtual-Reality"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Virtual Reality</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Game App Development/Tecnologies/HTML-5.png")}
                  alt="HTML 5"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>HTML 5</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              style={{ cursor: "pointer" }}
            >
              <div className="technologies_box text-center">
                <img
                  src={require("../../assets/images/SERVICES/Game App Development/Tecnologies/cocos2d.png")}
                  alt="Cocos2d"
                  className="img-fluid"
                  style={{ width: "180px" }}
                />
                <h2>Cocos2d</h2>
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
                      src={Grocery}
                      alt="Grocery-Industry"
                      className="img-fluid"
                    />
                    <p>Entertainment Industry</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Food}
                      alt="Food-And-Beverage-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Education <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Electronics}
                      alt="Electronics-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Food And Restaurant <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Logistics}
                      alt="Logistics-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Business <br />
                      Services
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Fashion}
                      alt="Fashion-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Lifestyle <br />
                      Services
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img src={Retail} alt="Retail-Industry" />
                    <p>
                      Health And Fitness <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Business}
                      alt="Business-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Travel <br />
                      Industry
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Education}
                      alt="Education-Industry"
                      className="img-fluid"
                    />
                    <p>
                      Social <br />
                      Media
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a href="#" className="service__provide_tab">
                    <img
                      src={Rental}
                      alt="Rental-Industry"
                      className="img-fluid"
                    />
                    <p>
                      E-Commerce <br />
                      Industry
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Custom E-Commerce Website Design
                  </h3>
                  <p className="Title_para">
                    The App Ideas is one of the leading web and app development
                    company. We have a team of highly skilled and exports
                    developers who have years of experience in providing the
                    best solution for the E-commerce industry. Nowadays, a high
                    number of business owners shifting their services to the
                    online platform by launching their E-commerce stores.
                  </p>
                  <p className="Title_para">
                    Are you planning to launch an E-commerce app?
                  </p>
                  <p className="Title_para">
                    If yes, then feel free to connect with us and get a free
                    quotation for your E-commerce industry app.E-commerce
                    platforms are getting popular because it offers convenience
                    or easy access to the services from any place and at any
                    time. We are just a text call, connect with us, discuss your
                    requirements and get a free quote for your E-commerce
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* <!-- Work Slider Start --> */}
      <Work/>
      {/* <!-- Work Slider End --> */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}
    </>
  );
};

export default GameDev;
