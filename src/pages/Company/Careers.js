import React, { useState } from "react";
import Digital from "../../assets/images/careers/Digital Marketing Executive fresher.svg";
import marketing from "../../assets/images/careers/Digital Marketing Executive fresher.svg";

import DigitalExecutive from "../../assets/images/careers/Digital Marketing Executive.svg";
import Executive from "../../assets/images/careers/Digital Marketing Executive.svg";

import Business from "../../assets/images/careers/Business development executive.svg";
import development from "../../assets/images/careers/Business development executive.svg";

import srBusiness from "../../assets/images/careers/Sr Business development executive.svg";
import srdevelopment from "../../assets/images/careers/Sr Business development executive.svg";

import exBusiness from "../../assets/images/careers/Business development executive fresher.svg";
import exdevelopment from "../../assets/images/careers/Business development executive fresher.svg";

import react from "../../assets/images/careers/React Native Developer white.svg";
import native from "../../assets/images/careers/React Native Developer white.svg";

import Flutter from "../../assets/images/careers/Flutter developer.svg";
import Developer from "../../assets/images/careers/Flutter developer.svg";
import Designer from "../../assets/images/careers/Graphic Desiner (Fresher).svg";
import Graphics from "../../assets/images/careers/Graphic Desiner (Fresher).svg";

import { RiCloseCircleFill } from "react-icons/ri";
import ApplicationModal from "./ApplicationModal";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
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
                        fill="#F87244"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={marketing}
                      alt="bussness-development"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={Digital}
                        alt="bussness-development-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Digital marketing Executive (Fresher)</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">Fresher to 1 year</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      onClick={() => setShowModal(true)}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/*----------------- Modal------------- */}

              {showModal && <ApplicationModal setShowModal={setShowModal} />}

              {/*--------------end Modal------------ */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
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
                        fill="#3366ff"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={DigitalExecutive}
                      alt="bussness-development"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={Executive}
                        alt="bussness-development-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Digital marketing Executive</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">2+ years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      // onClick={handleShow}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}

              <div
                className="modal fade career___modal"
                id="business"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                // show={show} onHide={handleClose}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        // onClick={handleClose}
                      >
                        <RiCloseCircleFill />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>Business Development Executive</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                <b>
                                  5 days a week and we are allowing work from
                                  home for a permanent basis.
                                </b>
                              </p>
                              <p>
                                <b>Salary:- </b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification:-</b> BCA, MCA,
                                MSCIT, BSC IT, BE(IT), ME(IT), Diploma in IT and
                                others
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Roles &amp; Responsibilities</h2>
                              <ul>
                                <li>
                                  Contacting potential clients to establish
                                  rapport and arrange meetings.
                                </li>
                                <li>
                                  Research and identify new market
                                  opportunities.
                                </li>
                                <li>
                                  Build and maintain relationships with clients
                                  and prospects.
                                </li>
                                <li>Research and analyze sales options.</li>
                                <li>
                                  Set up meetings with potential clients and
                                  listen to their wishes and concerns and work
                                  as a team member and individual as well.
                                </li>
                                <li>
                                  Planning and overseeing new marketing
                                  initiatives.
                                </li>
                                <li>
                                  Researching organizations and individuals to
                                  find new opportunities.
                                </li>
                                <li>
                                  Increasing the value of current customers
                                  while attracting new ones.
                                </li>
                                <li>
                                  Finding and developing new markets and
                                  improving sales.
                                </li>
                                <li>
                                  Developing quotes and proposals for clients.
                                </li>
                                <li>
                                  Developing goals for the development team and
                                  business growth and ensuring they are met.
                                </li>
                                <li>
                                  Training personnel and helping team members
                                  develop their skills.
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you do not find a suitable profile, you may
                                kindly share this information to your friends
                                who are looking for a change/good opportunity.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
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
                        fill="#ff3399"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={Business}
                      alt="bussness-development"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={development}
                        alt="bussness-development-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Business Development Executive</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">1 to 3 years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      // onClick={handleShow}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}

              <div
                className="modal fade career___modal"
                id="business"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                // show={show} onHide={handleClose}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        // onClick={handleClose}
                      >
                        <RiCloseCircleFill />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>Business Development Executive</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                <b>
                                  5 days a week and we are allowing work from
                                  home for a permanent basis.
                                </b>
                              </p>
                              <p>
                                <b>Salary:- </b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification:-</b> BCA, MCA,
                                MSCIT, BSC IT, BE(IT), ME(IT), Diploma in IT and
                                others
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Roles &amp; Responsibilities</h2>
                              <ul>
                                <li>
                                  Contacting potential clients to establish
                                  rapport and arrange meetings.
                                </li>
                                <li>
                                  Research and identify new market
                                  opportunities.
                                </li>
                                <li>
                                  Build and maintain relationships with clients
                                  and prospects.
                                </li>
                                <li>Research and analyze sales options.</li>
                                <li>
                                  Set up meetings with potential clients and
                                  listen to their wishes and concerns and work
                                  as a team member and individual as well.
                                </li>
                                <li>
                                  Planning and overseeing new marketing
                                  initiatives.
                                </li>
                                <li>
                                  Researching organizations and individuals to
                                  find new opportunities.
                                </li>
                                <li>
                                  Increasing the value of current customers
                                  while attracting new ones.
                                </li>
                                <li>
                                  Finding and developing new markets and
                                  improving sales.
                                </li>
                                <li>
                                  Developing quotes and proposals for clients.
                                </li>
                                <li>
                                  Developing goals for the development team and
                                  business growth and ensuring they are met.
                                </li>
                                <li>
                                  Training personnel and helping team members
                                  develop their skills.
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you do not find a suitable profile, you may
                                kindly share this information to your friends
                                who are looking for a change/good opportunity.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
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
                      src={srBusiness}
                      alt="bussness-development"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={srdevelopment}
                        alt="bussness-development-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Sr. Business Development Executive</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span"> 5+ years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      // onClick={handleShow}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}

              <div
                className="modal fade career___modal"
                id="business"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                // show={show} onHide={handleClose}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        // onClick={handleClose}
                      >
                        <RiCloseCircleFill />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>Business Development Executive</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                <b>
                                  5 days a week and we are allowing work from
                                  home for a permanent basis.
                                </b>
                              </p>
                              <p>
                                <b>Salary:- </b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification:-</b> BCA, MCA,
                                MSCIT, BSC IT, BE(IT), ME(IT), Diploma in IT and
                                others
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Roles &amp; Responsibilities</h2>
                              <ul>
                                <li>
                                  Contacting potential clients to establish
                                  rapport and arrange meetings.
                                </li>
                                <li>
                                  Research and identify new market
                                  opportunities.
                                </li>
                                <li>
                                  Build and maintain relationships with clients
                                  and prospects.
                                </li>
                                <li>Research and analyze sales options.</li>
                                <li>
                                  Set up meetings with potential clients and
                                  listen to their wishes and concerns and work
                                  as a team member and individual as well.
                                </li>
                                <li>
                                  Planning and overseeing new marketing
                                  initiatives.
                                </li>
                                <li>
                                  Researching organizations and individuals to
                                  find new opportunities.
                                </li>
                                <li>
                                  Increasing the value of current customers
                                  while attracting new ones.
                                </li>
                                <li>
                                  Finding and developing new markets and
                                  improving sales.
                                </li>
                                <li>
                                  Developing quotes and proposals for clients.
                                </li>
                                <li>
                                  Developing goals for the development team and
                                  business growth and ensuring they are met.
                                </li>
                                <li>
                                  Training personnel and helping team members
                                  develop their skills.
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you do not find a suitable profile, you may
                                kindly share this information to your friends
                                who are looking for a change/good opportunity.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
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
                        fill="#ff6699"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={exBusiness}
                      alt="bussness-development"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={exdevelopment}
                        alt="bussness-development-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Business Development Executive(Fresher)</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">Fresher to 2 Years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      // onClick={handleShow}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}

              <div
                className="modal fade career___modal"
                id="business"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                // show={show} onHide={handleClose}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        // onClick={handleClose}
                      >
                        <RiCloseCircleFill />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>Business Development Executive</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                <b>
                                  5 days a week and we are allowing work from
                                  home for a permanent basis.
                                </b>
                              </p>
                              <p>
                                <b>Salary:- </b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification:-</b> BCA, MCA,
                                MSCIT, BSC IT, BE(IT), ME(IT), Diploma in IT and
                                others
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Roles &amp; Responsibilities</h2>
                              <ul>
                                <li>
                                  Contacting potential clients to establish
                                  rapport and arrange meetings.
                                </li>
                                <li>
                                  Research and identify new market
                                  opportunities.
                                </li>
                                <li>
                                  Build and maintain relationships with clients
                                  and prospects.
                                </li>
                                <li>Research and analyze sales options.</li>
                                <li>
                                  Set up meetings with potential clients and
                                  listen to their wishes and concerns and work
                                  as a team member and individual as well.
                                </li>
                                <li>
                                  Planning and overseeing new marketing
                                  initiatives.
                                </li>
                                <li>
                                  Researching organizations and individuals to
                                  find new opportunities.
                                </li>
                                <li>
                                  Increasing the value of current customers
                                  while attracting new ones.
                                </li>
                                <li>
                                  Finding and developing new markets and
                                  improving sales.
                                </li>
                                <li>
                                  Developing quotes and proposals for clients.
                                </li>
                                <li>
                                  Developing goals for the development team and
                                  business growth and ensuring they are met.
                                </li>
                                <li>
                                  Training personnel and helping team members
                                  develop their skills.
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you do not find a suitable profile, you may
                                kindly share this information to your friends
                                who are looking for a change/good opportunity.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
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
                        fill="#61dbfb"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={react}
                      alt="react-native"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={native}
                        alt="react-native-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>React Native Development</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">2 to 4 Years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">01</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#reactnative"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div
                className="modal fade career___modal"
                id="reactnative"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="fa fa-times" />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>React Native Development</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                we are allowing work from home for a permanent
                                basis.
                              </p>
                              <p>
                                <b>Preferred employees from Gujarat only</b>
                              </p>
                              <p>
                                <b>Bond: </b> 1 Year
                              </p>
                              <p>
                                <b>Salary: </b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification: </b> BCA, MCA,
                                MSCIT, BSCIT, BE(IT), ME(IT), Diploma in IT and
                                others
                              </p>
                              <p>
                                <b>Position</b>
                                <br />
                                We are looking for a React Native developer to
                                help us create beautiful, performant mobile apps
                                on iOS and Android that give our customers a
                                first-class mobile experience. You will be
                                responsible for creating these applications with
                                other members of our mobile team, as well as
                                collaborating closely with the web and server
                                teams responsible for the other layers of our
                                product suite. This is a high-impact position
                                that will play a critical role in our product
                                development. The apps you write will be used by
                                tens of thousands of our customers daily.
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Responsibilities</h2>
                              <ul>
                                <li>
                                  Create beautiful, pixel-perfect UIs across
                                  both mobile platforms that look and feel
                                  native
                                </li>
                                <li>
                                  {" "}
                                  Write automated tests that give us the
                                  confidence to iterate quickly and ensure the
                                  product is of the highest quality
                                </li>
                                <li>
                                  Diagnose and fix bugs and performance
                                  bottlenecks
                                </li>
                                <li>
                                  Practice Scrum with a great group of
                                  developers and product managers Skills and
                                  Experience
                                </li>
                                <li>
                                  Proficiency with JavaScript, HTML, CSS. Bonus
                                  for TypeScript
                                </li>
                                <li>
                                  React Native experience, bonus for ReactJS
                                  experience
                                </li>
                                <li>
                                  Solid understanding of object-oriented
                                  programming, functional programming, and
                                  design patterns
                                </li>
                                <li>
                                  {" "}
                                  Ability to write clean, understandable,
                                  well-documented code
                                </li>
                                <li>
                                  Comfortable working with third-party
                                  dependencies and debugging dependency
                                  conflicts
                                </li>
                                <li>
                                  Developing quotes and proposals for clients.
                                </li>
                                <li>
                                  Experience with native Android and iOS SDKs
                                  preferred (bonus for Swift/Kotlin)
                                </li>
                                <li>
                                  Experience working with and debugging RESTful
                                  APIs
                                </li>
                                <li>
                                  Experiences with automated testing frameworks,
                                  like Jest or Mocha
                                </li>
                                <li>
                                  Experience with revision control systems such
                                  as Git or SVN
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you know someone who suitable for this
                                profile, kindly share the reference.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
              <div className="career__card">
                <div className="career__shap">
                  <div className="carrer__img">
                    <svg
                      width={72}
                      height={250}
                      viewBox="0 0 72 250"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M72 7.81748C72 1.96277 65.6409 -1.80866 60.3156 0.887694L4.31565 29.2419C1.66417 30.5843 0 33.2566 0 36.1716V250L70.9504 105.688C71.6413 104.283 72 102.744 72 101.186V7.81748Z"
                        fill="#0468d7"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={Flutter}
                      alt="flutter-logo"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={Developer}
                        alt="flutter-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Flutter Developer</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">1-3 Year</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">06</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#flutterdeveloper"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div
                className="modal fade career___modal"
                id="flutterdeveloper"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="fa fa-times" />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>Flutter Developer</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                <b>Company Location:- </b> A’bad (Nikol)
                              </p>
                              <p>
                                5 days a week and we are allowing work from home
                                for a permanent basis.
                              </p>
                              <p>
                                <b>Preferred employees from Gujarat only</b>
                              </p>
                              <p>
                                <b>Bond:</b> 1 Year
                              </p>
                              <p>
                                <b>Salary :</b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification: </b> BCA, MCA,
                                MSCIT, BSCIT, BE(IT), ME(IT), Diploma in IT and
                                others/p&gt;
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Job Description</h2>
                              <ul>
                                <li>
                                  Create multi-platform apps for iOS/Android
                                  using Flutter development framework.
                                </li>
                                <li>
                                  applicable knowledge of State Management in
                                  flutter.
                                </li>
                                <li>
                                  Must have at least one year of experience in
                                  Flutter Developer.
                                </li>
                                <li>
                                  Flutter SDK &amp; Dart programming language.
                                </li>
                                <li>
                                  Participation in the process of analysis,
                                  designing, implementation and testing of new
                                  apps.
                                </li>
                                <li>
                                  Apply industry standards during the
                                  development process to ensure high quality.
                                </li>
                                <li>
                                  Design and build advanced applications for the
                                  Android platform using Flutter.
                                </li>
                                <li>
                                  Manage API integration with Rest full API.
                                </li>
                                <li>
                                  Collaborate with cross-functional teams to
                                  define, design, and ship new features
                                </li>
                                <li>
                                  Work with outside data sources and APIs.
                                </li>
                                <li>
                                  Work on bug fixing and improving application
                                  performance.
                                </li>
                                <li>
                                  Participate in the entire application life
                                  cycle, focusing on coding and debugging.
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you know someone who suitable for this
                                profile, kindly share the reference.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 career_main_card">
              <div className="career__card">
                <div className="career__shap">
                  <div className="carrer__img">
                    <svg
                      width={72}
                      height={250}
                      viewBox="0 0 72 250"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M72 7.81748C72 1.96277 65.6409 -1.80866 60.3156 0.887694L4.31565 29.2419C1.66417 30.5843 0 33.2566 0 36.1716V250L70.9504 105.688C71.6413 104.283 72 102.744 72 101.186V7.81748Z"
                        fill="#ff00ff"
                      />
                    </svg>
                  </div>
                  <div className="carrer__icon">
                    <img
                      src={Designer}
                      alt="flutter-logo"
                      className="img-fluid"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
                <div className="career__content">
                  <div className="career__content__respo">
                    <div className="carrer__icon_respo">
                      <img
                        src={Graphics}
                        alt="flutter-icon"
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Graphics Designer (Fresher)</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{" "}
                      <span className="rht_span">Fresher to 1 year</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{" "}
                      <span className="rht_span">06</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#flutterdeveloper"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div
                className="modal fade career___modal"
                id="flutterdeveloper"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="fa fa-times" />
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="Title">
                        <h3 className="text-white mb-4">
                          Submit Application Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_lft">
                            <h2>Flutter Developer</h2>
                            <div className="career_mdl_lft_content mt-3">
                              <p>
                                <b>Company Location:- </b> A’bad (Nikol)
                              </p>
                              <p>
                                5 days a week and we are allowing work from home
                                for a permanent basis.
                              </p>
                              <p>
                                <b>Preferred employees from Gujarat only</b>
                              </p>
                              <p>
                                <b>Bond:</b> 1 Year
                              </p>
                              <p>
                                <b>Salary :</b> No bar for right candidate
                                (Depends on Skills and experience)
                              </p>
                              <p>
                                <b>Education Qualification: </b> BCA, MCA,
                                MSCIT, BSCIT, BE(IT), ME(IT), Diploma in IT and
                                others/p&gt;
                              </p>
                            </div>
                            <div className="career_mdl_lft_roles">
                              <h2>Job Description</h2>
                              <ul>
                                <li>
                                  Create multi-platform apps for iOS/Android
                                  using Flutter development framework.
                                </li>
                                <li>
                                  applicable knowledge of State Management in
                                  flutter.
                                </li>
                                <li>
                                  Must have at least one year of experience in
                                  Flutter Developer.
                                </li>
                                <li>
                                  Flutter SDK &amp; Dart programming language.
                                </li>
                                <li>
                                  Participation in the process of analysis,
                                  designing, implementation and testing of new
                                  apps.
                                </li>
                                <li>
                                  Apply industry standards during the
                                  development process to ensure high quality.
                                </li>
                                <li>
                                  Design and build advanced applications for the
                                  Android platform using Flutter.
                                </li>
                                <li>
                                  Manage API integration with Rest full API.
                                </li>
                                <li>
                                  Collaborate with cross-functional teams to
                                  define, design, and ship new features
                                </li>
                                <li>
                                  Work with outside data sources and APIs.
                                </li>
                                <li>
                                  Work on bug fixing and improving application
                                  performance.
                                </li>
                                <li>
                                  Participate in the entire application life
                                  cycle, focusing on coding and debugging.
                                </li>
                              </ul>
                            </div>
                            <div className="career_mdl_lft_content">
                              <p>
                                If you are interested for the above profile, you
                                may send your CV on mentioned email
                              </p>
                              <p>
                                If you know someone who suitable for this
                                profile, kindly share the reference.
                              </p>
                            </div>
                            <div className="career_mdl_lft_com_info">
                              <h2 className="compant_text">
                                App Ideas Infotech PVT. LTD.
                              </h2>
                              <p>
                                {" "}
                                <i className="fa fa-map-marker" />{" "}
                                <span>
                                  FO-6, Raspan Arcade, Near Rajhans Cinema,{" "}
                                  <br /> Nikol-Naroda, Ahmedabad-382350.
                                </span>
                              </p>
                            </div>
                            <div className="career_mdl_lft_contact">
                              <ul>
                                <li>
                                  <i className="fa fa-phone" />
                                  <span>7990138924</span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o" />
                                  <span>trusha@theappideas.com</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 mb-3">
                          <div className="career_mdl_rht">
                            <form action="">
                              <div className="mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="mail"
                                  className="form-control"
                                  placeholder="Email* "
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Phone Number*"
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Total Experience In Years*"
                                />
                              </div>
                              <div className="upload-btn-wrapper mb-3">
                                <button className="Upload_Btn">
                                  Upload Resume
                                </button>
                                <input type="file" name="myfile" />
                              </div>
                              <div className="mb-3 text-end">
                                <button className="submit_btn">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
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
                <p style={{ textAlign: "center", fontSize: "35px" }}>
                  Send your CV On
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="#" className="mail_btn">
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
