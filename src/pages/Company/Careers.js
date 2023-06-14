import React from 'react'
import Digital from '../../assets/images/careers/Digital Marketing Executive fresher.svg'
import marketing from '../../assets/images/careers/Digital Marketing Executive fresher.svg'

import DigitalExecutive from '../../assets/images/careers/Digital Marketing Executive.svg'
import Executive from '../../assets/images/careers/Digital Marketing Executive.svg'

import Business from '../../assets/images/careers/Business development executive.svg'
import development from '../../assets/images/careers/Business development executive.svg'

import srBusiness from '../../assets/images/careers/Sr Business development executive.svg'
import srdevelopment from '../../assets/images/careers/Sr Business development executive.svg'

import exBusiness from '../../assets/images/careers/Business development executive fresher.svg'
import exdevelopment from '../../assets/images/careers/Business development executive fresher.svg'

import react from '../../assets/images/careers/React Native Developer white.svg'
import native from '../../assets/images/careers/React Native Developer white.svg'

import Flutter from '../../assets/images/careers/Flutter developer.svg'
import Developer from '../../assets/images/careers/Flutter developer.svg'
import Designer from '../../assets/images/careers/Graphic Desiner (Fresher).svg'
import Graphics from '../../assets/images/careers/Graphic Desiner (Fresher).svg'

import { Link } from 'react-router-dom'
// import ApplicationModal from "./ApplicationModal";

const Careers = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        className="blog__section"
        style={{ paddingTop: '23px', paddingBottom: '70px' }}
      ></section>
      <section
        className="carrer_section"
        style={{ paddingTop: '23px', paddingBottom: '70px' }}
      >
        <div className="container">
          <div
            className="Title"
            style={{ paddingTop: '50px', marginBottom: '80px' }}
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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Digital marketing Executive (Fresher)</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">Fresher to 1 year</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <a
                      href="#"
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      // onClick={() => setShowModal(true)}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/*----------------- Modal------------- */}

              {/* {showModal && <ApplicationModal setShowModal={setShowModal} />} */}

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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Digital marketing Executive</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">2+ years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Business Development Executive</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">1 to 3 years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
                      <span className="rht_span">-</span>
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="/career-application"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="apply_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#business"
                      // onClick={handleShow}
                      target='_blank'
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              {/* Modal */}

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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Sr. Business Development Executive</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span"> 5+ years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Business Development Executive(Fresher)</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">Fresher to 2 Years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>React Native Development</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">2 to 4 Years</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Flutter Developer</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">1-3 Year</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
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
                      style={{ width: '90%' }}
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
                        style={{ width: '90%' }}
                      />
                    </div>
                    <div className="carrer_text_respo">
                      <h2>Graphics Designer (Fresher)</h2>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <span className="lft_span">Experience:</span>{' '}
                      <span className="rht_span">Fresher to 1 year</span>
                    </li>
                    <li>
                      <span className="lft_span">Position:</span>{' '}
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
                <p style={{ textAlign: 'center', fontSize: '35px' }}>
                  Send your CV On
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="mailto:trusha@theappideas.com" className="mail_btn">
                  trusha@theappideas.com{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  )
}

export default Careers
