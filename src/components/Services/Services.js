import React from "react";

const Services = () => {
  return (
    <>
      {/* ======= Services Section ======= */}
      <section className="services-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading">
                Our Services
                <div className="about-line"></div>
              </h2>
              <p className="section-heading">
                Over the years we have established ourselves as the leading
                service provider for Mobile App Development, Web Development,
                Web and Graphic Design, Ecommerce Development, IOT development
                and Games Development.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="card-1">
                <div className="icon-wrapper">
                  <img
                    src={require("../../assets/images/Home-our-services/WEB DEVELOPMENT.gif")}
                    alt="Web Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>WEB DEVELOPMENT</h5>
                <p>
                  We help you build robust web presence with our expertise of
                  graphic and web design and skills on all open source platforms
                  like WordPress, Magento, CodeIgniter, Laravel, AngularJS and
                  NodeJS.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card-1">
                <div className="icon-wrapper">
                  <img
                    src={require("../../assets/images/Home-our-services/E-COMMERCE DEVELOPMENT.gif")}
                    alt="E-commerce Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>E-COMMERCE DEVELOPMENT</h5>
                <p>
                  We help your business connect to the customers over the web
                  and mobile platforms by building powerful eCommerce and mobile
                  commerce apps and web stores.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card-1">
                <div className="icon-wrapper">
                  <img
                    src={require("../../assets/images/Home-our-services/MOBILE APP DEVELOPMENT.gif")}
                    alt="Mobile App Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>MOBILE APP DEVELOPMENT</h5>
                <p>
                  We assist your brand to enjoy the edge of mobile by building
                  powerful apps across all major platforms including iOS and
                  Android.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card-1">
                <div className="icon-wrapper">
                  <img
                    src={require("../../assets/images/Home-our-services/INTERNET OF THING.gif")}
                    alt="Internet of Things"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>INTERNET OF THINGS</h5>
                <p>
                  We build intuitive mobile apps connecting the gadgets in home
                  and workplace environments by leveraging our expertise with
                  IOT app development.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card-1">
                <div className="icon-wrapper">
                  <img
                    src={require("../../assets/images/Home-our-services/GAME DEVELOPMENT.gif")}
                    alt="Game Development"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>GAME DEVELOPMENT</h5>
                <p>
                  We build 2D & 3D engaging and addictive mobile games for all
                  types of audiences and game niches.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card-1">
                <div className="icon-wrapper">
                  <img
                    src={require("../../assets/images/Home-our-services/Hire Developer.gif")}
                    alt="Hire Developer"
                    style={{ width: "70px" }}
                  />
                </div>
                <h5>HIRE A DEVELOPER</h5>
                <p>
                  The App Ideas providing best skilled, experienced developers
                  as per your timezone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
};

export default Services;
