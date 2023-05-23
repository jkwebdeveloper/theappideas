import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const HireUs = () => {
  return (
    <>
      {/* common Banner start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Salon Booking App Development</h2>
                <p>
                  Here we are at The App Ideas, which is one of the leading
                  Salon Booking app development company. We have a team of
                  highly experienced and expert mobile app developers who will
                  offer the best salon app development services at the best
                  rates. Feel free to reach us and get a free quote for a Salon
                  Booking app development service.
                </p>
                <ul className="common__banner__list ps-0 mt-4">
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      7+ Years of experience in App Development
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Best Salon Service App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Salon Service App Development
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
                        // src={require("")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Salon Booking App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        // src={require("")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Salon App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        // src={require("")}
                        alt="
                      IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Salon Booking App Development Company</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="Title">
                <h1>Hire Dedicated Developer</h1>
              </div>
              <p>
                The App Ideas is a leading web and app development company, that
                also offers the hiring of expert developers with dedicated
                resources for developing the fortunate business solution, at the
                best rates. Our committed developers understand the overall
                project requirements, the integration of unique ideas, security
                concerns, and the procedure for deploying the best services. We
                have mastered delivering the best software services for various
                niches. Hire us and experience our proficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why should you hire us?</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="Customer-App"
                role="tabpanel"
                aria-labelledby="Customer-App-Tab"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={require("../assets/images/Header/Hire Us/why-should/exp1.png")}
                        alt="Check-Details-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Registration and location setup</h4>
                      <p>
                        Customer App can allow a customer to add up their
                        personal details like Name, Address and more. Customers
                        can also provide access to their location to find better
                        results.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={require("../assets/images/Header/Hire Us/why-should/exp2.png")}
                        alt="Order-Online-icon"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Browse Salon</h4>
                      <p>
                        Customer App can easily check the list of the nearby
                        salon or they can also browse the salon easily in a
                        Salon Service app.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={require("../assets/images/Header/Hire Us/why-should/exp3.png")}
                        alt="Pay-Online-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Check the details</h4>
                      <p>
                        Customer App or panel can allow the users to check the
                        overall details of the salon services as well as the
                        beautician list for hiring.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={require("../assets/images/Header/Hire Us/why-should/exp4.png")}
                        alt="Reviews-And-Ratings-icons "
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>Schedule an appointment</h4>
                      <p>
                        Customers can easily access the list, check the reviews
                        of the beautician and then easily schedule an
                        appointment at the availability.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={require("../assets/images/Header/Hire Us/why-should/Deadline-icon.png")}
                        alt="Get-Cashback-icons"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>In-App Calendar</h4>
                      <p>
                        The calendar is also integrated into a customer app to
                        conveniently manage the appointment. Customers can check
                        the calendar and book appointments accordingly.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
                    <div className="food__delivery__box">
                      <img
                        src={require("../assets/images/Header/Hire Us/why-should/exp6.png")}
                        alt="search-food-icon"
                        className="img-fluid"
                        style={{ width: "20%" }}
                      />
                      <h4>In-App chat Interaction</h4>
                      <p>
                        Customers can have access to the chat integration
                        service. Through these features, they can easily chat
                        for the support service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Delivery App Section End */}
    </>
  );
};

export default HireUs;
