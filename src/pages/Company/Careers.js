import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
// import ApplicationModal from "./ApplicationModal";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetCareers = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/career", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCareers(res.data.careers);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetCareers();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet title="The App Ideas Careers | Learn, Grow & Ace Your Career" />
      <section
        className="blog__section"
        style={{ paddingTop: "23px", paddingBottom: "70px" }}
      ></section>
      <section
        className="carrer_section"
        style={{ paddingTop: "23px", paddingBottom: "70px" }}
      >
        <div className="container">
          <div
            className="Title"
            style={{ paddingTop: "50px", marginBottom: "80px" }}
          >
            <h3>Current Opening In TheAppIdeas</h3>
          </div>
          {loading ? (
            <div
              className="loading"
              style={{ textAlign: "center", paddingTop: "100px" }}
            >
              Loading...
            </div>
          ) : careers.length > 0 ? (
            <div className="row mt-5">
              {careers.map((career) => (
                <div
                  key={career._id}
                  data-aos="fade-up"
                  className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card"
                >
                  <div className="career__card">
                    <div className="career__shap">
                      <div className="carrer__img">
                        <svg
                          width={72}
                          height={260}
                          viewBox="0 0 72 250"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M72 7.81748C72 1.96277 65.6409 -1.80866 60.3156 0.887694L4.31565 29.2419C1.66417 30.5843 0 33.2566 0 36.1716V250L70.9504 105.688C71.6413 104.283 72 102.744 72 101.186V7.81748Z"
                            fill="#6600cc"
                          />
                        </svg>
                      </div>
                      <div className="carrer__icon">
                        <img
                          src={"https://the-app-ideas.onrender.com".concat(
                            career.image
                          )}
                          alt="bussness-development"
                          className="img-fluid"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                    <div className="career__content">
                      <div div className="career__content__respo">
                        <div className="carrer__icon_respo">
                          <img
                            src={"https://the-app-ideas.onrender.com".concat(
                              career.image
                            )}
                            alt="bussness-development-icon"
                            className="img-fluid"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <div className="carrer_text_respo">
                          <h2>{career.title}</h2>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <span className="lft_span">Experience:</span>{" "}
                          <span className="rht_span">{career.experience}</span>
                        </li>
                        <li>
                          <span className="lft_span">Position:</span>{" "}
                          <span className="rht_span">{career.position}</span>
                        </li>
                      </ul>
                      <div className="text-end">
                        <Link
                          to={`/career-application/${career._id}`}
                          // state={{ id: careers._id }}

                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="apply_btn"
                          data-bs-toggle="modal"
                          data-bs-target="#business"
                          // onClick={handleShow}
                          target="_blank"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*----------------- Modal------------- */}

                  {/* {showModal && <ApplicationModal setShowModal={setShowModal} />} */}

                  {/*--------------end Modal------------ */}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ textAlign: "center" }}>
              No data
            </div>
          )}
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div
              data-aos="fade-right"
              className="col-sm-12 col-md-8 col-lg-8 mb-3"
            >
              <div className="contact__lft">
                <p style={{ textAlign: "center", fontSize: "35px" }}>
                  Send your CV On
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="mailto:trusha@theappideas.com" className="mail_btn">
                  trusha@theappideas.com{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default Careers;
