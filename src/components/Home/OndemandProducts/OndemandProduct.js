import React, { useState } from "react";
import "./ondemand.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// text image
import bike from "../../../assets/images/ondemand/taxi/Group 98.svg";
import texi from "../../../assets/images/ondemand/taxi/Group 86.svg";
import tuk from "../../../assets/images/ondemand/taxi/Group 99.svg";
import car from "../../../assets/images/ondemand/taxi/Group 87.svg";
// delivery
import food from "../../../assets/images/ondemand/delivery/Group 88.svg";
import grocery from "../../../assets/images/ondemand/delivery/Vector.svg";
import courier from "../../../assets/images/ondemand/delivery/Group 100.svg";
import delivery from "../../../assets/images/ondemand/delivery/Layer_1.svg";
// Multi
import taxiservice from "../../../assets/images/ondemand/multi/Group 101.svg";
import deliveryservice from "../../../assets/images/ondemand/multi/Group 102.svg";
import ondemand from "../../../assets/images/ondemand/multi/Group 93.svg";
import services from "../../../assets/images/ondemand/multi/Group 103.svg";
// Popular
import beauty from "../../../assets/images/ondemand/popular/Vector.svg";
import doctor from "../../../assets/images/ondemand/popular/Group 95.svg";
import handyman from "../../../assets/images/ondemand/popular/Group 104.svg";
import security from "../../../assets/images/ondemand/popular/Group 105.svg";
// mobile view
import riding from "../../../assets/images/ondemand/mobile/texi/Group 98.svg";
import hailing from "../../../assets/images/ondemand/mobile/texi/Group 86.svg";
import sharing from "../../../assets/images/ondemand/mobile/texi/Group 99.svg";
import rental from "../../../assets/images/ondemand/mobile/texi/Group 87.svg";

import icons1 from "../../../assets/images/ondemand/mobile/delivery/Group 88.svg";
import icons2 from "../../../assets/images/ondemand/mobile/delivery/Vector.svg";
import icons3 from "../../../assets/images/ondemand/mobile/delivery/Group 100.svg";
import icons4 from "../../../assets/images/ondemand/mobile/delivery/Layer_1.svg";

import service1 from "../../../assets/images/ondemand/mobile/multi/Group 101.svg";
import service2 from "../../../assets/images/ondemand/mobile/multi/Group 102.svg";
import service3 from "../../../assets/images/ondemand/mobile/multi/Group 93.svg";
import service4 from "../../../assets/images/ondemand/mobile/multi/Group 103.svg";
// Popular
import Salon from "../../../assets/images/ondemand/mobile/popular/Vector.svg";
import Medical from "../../../assets/images/ondemand/mobile/popular/Group 95.svg";
import handyman1 from "../../../assets/images/ondemand/mobile/popular/Group 104.svg";
import Guard from "../../../assets/images/ondemand/mobile/popular/Group 105.svg";

// Left box image
import frist from "../../../assets/images/ondemand/Group 47 (1).svg";
import frist2 from "../../../assets/images/ondemand/Group 50.svg";
import frist3 from "../../../assets/images/ondemand/Group 51.svg";
import frist4 from "../../../assets/images/ondemand/Group 52.svg";

const ServiceProvideData = [
  {
    id: 1,
    images: frist,
    que: "Taxi Solutions",
    ans: "Elevate Your Ride-hailing Businesss",
    ans2: "As leading app developers, We provide Taxi Firms cutting-edgeWhite-labeling and customization solutions. We help organizations combine one-tap taxi booking, taxi rentals, and carpooling solutions to stay ahead of market trends. Businesses may convey their brand with bespoke logos, names, and flexible payment methods. We recognize this shifting industry necessitates adaptation. Thus, Our bespoke taxi bookingapp script enable enterprises to operate seamlessly in various settings. Our apps provide a customized, tailored experience for new and existing enterprises globally in several currencies and languages. Our unique ride-sharing solutions help taxi firms exceed customer expectations. From one-tap bookings to carpooling, our apps enhance service providers' and consumers' experiences. Future taxi booking app solutions from us are creative and adaptable.",
    icon1: riding,
    icon2: hailing,
    icon3: sharing,
    icon4: rental,
    title1: "Bike Riding",
    title2: "Taxi Hailing",
    title3: "Tuk-Tuk Sharing",
    title4: "Car Rental",
  },
  {
    id: 2,
    images: frist2,
    que: "Delivery Solutions",
    ans: "Deliver Excellence with Precision",
    ans2: "Our delivery app development services follow industry trends to provide delivery organizations a technological edge and enhance client experience. OTP-based delivery, hygiene-focused interfaces, and real-time monitoring help us stay ahead of industry trends. OTP-based deliveries ensure delivery by increasing security and authentication. Health and safety are linked via hygiene-focused interfaces in a clean society. Companies can satisfy post-pandemic client expectations and develop trust and loyalty with this product. For more than convenience, our app solutions provide real-time monitoring and more. This makes delivery visible and interactive, allowing users follow shipments live. Client satisfaction and delivery efficiency increase. Our delivery app development is customized for delivering service launches or refinements. Our tailored solutions provide firms the freedom to adapt to today's market. We design apps that increase security, cleanliness, and efficiency to prepare delivery firms for the current market.",
    icon1: icons1,
    icon2: icons2,
    icon3: icons3,
    icon4: icons4,
    title1: "Food Delivery",
    title2: "Grocery Delivery",
    title3: "Courier Delivery",
    title4: "DeliverAll",
  },
  {
    id: 3,
    images: frist3,
    que: "Multi Service Solutions",
    ans: "Smart Entrepreneurial Ventures",
    ans2: "Our app-making competence is essential for on-demand multi-servicebusinesses. We invented the super app, a platform with over 100+ on-demand services. This clever concept allows organizations simply go into home maintenance, training, and more. We deliberately created our on demand multi-service app to optimize company potential and client convenience. Combining services lets entrepreneurs provide a full, user-friendly experience at one single place. This strategy makes several services available via one app, enhancing consumer satisfaction and engagement. Our innovation helps businesses navigate the on-demand market. The mega app concept's vast service offerings may help entrepreneurs satisfy client needs. Our app-making talents provide a diversified platform that exceeds entrepreneurs' and end-users' domestic and educational service requirements. Join the future of on-demand services with our multi-service app, giving innovative possibilities and convenience.",
    icon1: service1,
    icon2: service2,
    icon3: service3,
    icon4: service4,
    title1: "Taxi Services",
    title2: "Delivery Services",
    title3: "On Demand Services",
    title4: "100+ Services",
  },
  {
    id: 4,
    images: frist4,
    que: "Popular On-Demand Solutions",
    ans: "Crafting Versatile Business Apps",
    ans2: "Our app-making service meets the growing need for flexible on-demand app solutions for users. We create applications for driver tracking, handyman services, beauty and salon businesses, medical on demand services, dating, lottery, and e-learning platforms. To assist firms adapt to the on-demand market, we provide sector-specific apps. We add unique features to our apps. Integrating security services for on-demand consumers is simple. Our apps help organizations thrive in the fast-paced, ever-changing on-demand services sector. We offer a broad variety of skills and serve numerous industries to help organizations adapt, grow, and create outstanding customer experiences. Get involved in the on-demand service revolution with our customized apps.",
    icon1: Salon,
    icon2: Medical,
    icon3: handyman1,
    icon4: Guard,
    title1: "Beauty & Salon Services",
    title2: "Doctor & Medical Services",
    title3: "Handyman Services",
    title4: "Security Guard Services",
  },
];

const OndemandProduct = () => {
  const [activeProduct, setActiveProduct] = useState("texi");
  const [openDemandProduct, SetDemandProduct] = useState(false);

  const toggleOpen = (i) => {
    if (openDemandProduct === i) {
      return SetDemandProduct(false);
    }
    SetDemandProduct(i);
  };

  return (
    <div className="container">
      <section className="demand_product_offer_section">
        <div className="container">
          <div className="service_desk_view demand_product_ttl">
            <h2>Top On-Demand Products We Offers</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="service_desk_view demand_main_box">
                <div className="row demand_main_box_row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <div className="row demand_lft_bx_row">
                      <div
                        className="col-12"
                        onClick={() => setActiveProduct("texi")}
                      >
                        <div
                          className={`demand_lft_bx ${
                            activeProduct === "texi" && "demand_lft_bx_active"
                          }`}
                        >
                          <img src={frist} alt="" />
                          <h6>Taxi Solutions</h6>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        onClick={() => setActiveProduct("delivery")}
                      >
                        <div
                          className={`demand_lft_bx demand_lft_bx_one ${
                            activeProduct === "delivery" &&
                            "demand_lft_bx_active"
                          }`}
                        >
                          <img src={frist2} alt="" />
                          <h6>Delivery Solutions</h6>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        onClick={() => setActiveProduct("multi")}
                      >
                        <div
                          className={`demand_lft_bx demand_lft_bx_two ${
                            activeProduct === "multi" && "demand_lft_bx_active"
                          }`}
                        >
                          <img src={frist3} alt="" />
                          <h6>
                            Multi Service <br />
                            Solutions
                          </h6>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        onClick={() => setActiveProduct("popular")}
                      >
                        <div
                          className={`demand_lft_bx demand_lft_bx_three ${
                            activeProduct === "popular" &&
                            "demand_lft_bx_active"
                          }`}
                        >
                          <img src={frist4} alt="" />
                          <h6>
                            Popular On-demand <br />
                            Solutions
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {activeProduct === "texi" && (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      <div className="demand_main_rht_bx">
                        <h4>
                          Elevate Your Ride-hailing <span>Businesss</span>
                        </h4>
                        <p>
                          As leading app developers, We provide Taxi Firms
                          cutting-edgeWhite-labeling and customization
                          solutions. We help organizations combine one-tap taxi
                          booking, taxi rentals, and carpooling solutions to
                          stay ahead of market trends. Businesses may convey
                          their brand with bespoke logos, names, and flexible
                          payment methods. We recognize this shifting industry
                          necessitates adaptation. Thus, Our bespoke taxi
                          bookingapp script enable enterprises to operate
                          seamlessly in various settings. Our apps provide a
                          customized, tailored experience for new and existing
                          enterprises globally in several currencies and
                          languages. Our unique ride-sharing solutions help taxi
                          firms exceed customer expectations. From one-tap
                          bookings to carpooling, our apps enhance service
                          providers' and consumers' experiences. Future taxi
                          booking app solutions from us are creative and
                          adaptable.
                        </p>
                        <div className="row">
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={bike} alt="" />
                              <h6>Bike Riding</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={texi} alt="" />
                              <h6>Taxi Hailing</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={tuk} alt="" />
                              <h6>Tuk-Tuk Sharing</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={car} alt="" />
                              <h6>Car Rental</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeProduct === "delivery" && (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      <div className="demand_main_rht_bx">
                        <h4>
                          Deliver Excellence <span>with Precision</span>
                        </h4>
                        <p>
                          Our delivery app development services follow industry
                          trends to provide delivery organizations a
                          technological edge and enhance client experience.
                          OTP-based delivery, hygiene-focused interfaces, and
                          real-time monitoring help us stay ahead of industry
                          trends. OTP-based deliveries ensure delivery by
                          increasing security and authentication. Health and
                          safety are linked via hygiene-focused interfaces in a
                          clean society. Companies can satisfy post-pandemic
                          client expectations and develop trust and loyalty with
                          this product. For more than convenience, our app
                          solutions provide real-time monitoring and more. This
                          makes delivery visible and interactive, allowing users
                          follow shipments live. Client satisfaction and
                          delivery efficiency increase. Our delivery app
                          development is customized for delivering service
                          launches or refinements. Our tailored solutions
                          provide firms the freedom to adapt to today's market.
                          We design apps that increase security, cleanliness,
                          and efficiency to prepare delivery firms for the
                          current market.
                        </p>
                        <div className="row">
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={food} alt="" />
                              <h6>Food Delivery</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={grocery} alt="" />
                              <h6>Grocery Delivery</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={courier} alt="" />
                              <h6>Courier Delivery</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={delivery} alt="" />
                              <h6>DeliverAll</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeProduct === "multi" && (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      <div className="demand_main_rht_bx">
                        <h4>
                          Smart Entrepreneurial <span> Ventures</span>
                        </h4>
                        <p>
                          Our app-making competence is essential for on-demand
                          multi-servicebusinesses. We invented the super app, a
                          platform with over 100+ on-demand services. This
                          clever concept allows organizations simply go into
                          home maintenance, training, and more. We deliberately
                          created our on demand multi-service app to optimize
                          company potential and client convenience. Combining
                          services lets entrepreneurs provide a full,
                          user-friendly experience at one single place. This
                          strategy makes several services available via one app,
                          enhancing consumer satisfaction and engagement. Our
                          innovation helps businesses navigate the on-demand
                          market. The mega app concept's vast service offerings
                          may help entrepreneurs satisfy client needs. Our
                          app-making talents provide a diversified platform that
                          exceeds entrepreneurs' and end-users' domestic and
                          educational service requirements. Join the future of
                          on-demand services with our multi-service app, giving
                          innovative possibilities and convenience.
                        </p>
                        <div className="row">
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={taxiservice} alt="" />
                              <h6>Taxi Services</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={deliveryservice} alt="" />
                              <h6>Delivery Services</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={ondemand} alt="" />
                              <h6>On Demand Services</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={services} alt="" />
                              <h6>100+ Services</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeProduct === "popular" && (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                      <div className="demand_main_rht_bx">
                        <h4>
                          Crafting Versatile <span>Business Apps</span>
                        </h4>
                        <p>
                          Our app-making service meets the growing need for
                          flexible on-demand app solutions for users. We create
                          applications for driver tracking, handyman services,
                          beauty and salon businesses, medical on demand
                          services, dating, lottery, and e-learning platforms.
                          To assist firms adapt to the on-demand market, we
                          provide sector-specific apps. We add unique features
                          to our apps. Integrating security services for
                          on-demand consumers is simple. Our apps help
                          organizations thrive in the fast-paced, ever-changing
                          on-demand services sector. We offer a broad variety of
                          skills and serve numerous industries to help
                          organizations adapt, grow, and create outstanding
                          customer experiences. Get involved in the on-demand
                          service revolution with our customized apps.
                        </p>
                        <div className="row">
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={beauty} alt="" />
                              <h6>Beauty & Salon Services</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={doctor} alt="" />
                              <h6>Doctor & Medical Services</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={handyman} alt="" />
                              <h6>Handyman Services</h6>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div className="demand_bottom_col">
                              <img src={security} alt="" />
                              <h6>Security Guard Services</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {ServiceProvideData.map((item, i) => (
          <div
            className="service_mobile_view col-12"
            onClick={() => toggleOpen(i)}
          >
            <div className="demand_lft_bx_mobile">
              <div className="content_box">
                <div className="title_img">
                  <img src={item?.images} alt="" style={{ width: "45px" }} />
                  <h6>{item?.que}</h6>
                </div>
                {openDemandProduct === i ? (
                  <div>
                    <IoIosArrowUp style={{ fontSize: "20px" }} />
                  </div>
                ) : (
                  <div>
                    <IoIosArrowDown style={{ fontSize: "20px" }} />
                  </div>
                )}
              </div>
              {openDemandProduct === i ? (
                <div className="demand_lft_bx_mobile_content">
                  <hr className="line_tag" />
                  <div className="demand_lft_answer">
                    <h4>{item?.ans}</h4>
                    <p>{item?.ans2}</p>
                    <div className="row">
                      <div className="col-6 demand_bottom_col">
                        <div className="demand_bottom_col_mobile">
                          <img src={item?.icon1} alt="" />
                          <h6>{item?.title1}</h6>
                        </div>
                      </div>
                      <div className="col-6 demand_bottom_col">
                        <div className="demand_bottom_col_mobile">
                          <img src={item?.icon2} alt="" />

                          <h6>{item?.title2}</h6>
                        </div>
                      </div>
                      <div className="col-6 demand_bottom_col">
                        <div className="demand_bottom_col_mobile">
                          <img src={item?.icon3} alt="" />

                          <h6>{item?.title3}</h6>
                        </div>
                      </div>
                      <div className="col-6 demand_bottom_col">
                        <div className="demand_bottom_col_mobile">
                          <img src={item?.icon4} alt="" />

                          <h6>{item?.title4}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OndemandProduct;
