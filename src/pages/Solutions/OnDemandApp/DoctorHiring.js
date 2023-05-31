import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TestiMonial from "../../../components/Testimonial/TestiMonial";
import FAQ from "../../../components/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";

//  User App
import SignUp from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/signup.svg";
import Signin from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Signin.svg";
import ForgotPassword from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/forgot_password.svg";
import ChangePassword from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/change_password-2.svg";
import Createaprofile from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Create_a_profile.svg";
import Manageprofile from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Manage profile.svg";
import Manage from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Manage-Medical-History-Profile.svg";
import available from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Search available doctors.svg";
import Ratings from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/Ratings and reviews.svg";
import Usercanchat from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User can chat.svg";
import UsercanPay from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User-Can-Pay-Via-PayPal.svg";
import Userget from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/User App/User-Get-The-Morning-Quotes.svg";

// Doctor-App-Development
import Complaint from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Complaint Management.svg";
import Forgot from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/forgot_password.svg";
import Change from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/change_password.svg";
import profile from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Create_a_profile.svg";
import Managepro from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Manage-Profile.svg";
import Setavailability from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Set-Availability.svg";
import Requestwithdrawal from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Request-For-A-Withdrawal.svg";
import Doctorscan from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/On Demand Doctor App Development/Doctors can see the reports.svg";

// Admin-Penal
import UserManagement from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/User management.svg";
import DoctorsManagement from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Doctors-Management.svg";
import Featured from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Featured profile management.svg";
import Payment from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/payment-manage-4.svg";
import Suspend from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Suspend.svg";
import Dispute from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Dispute.svg";
import Reports from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/report management.svg";
import Doctorsget from "../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Admin Panel/Doctors-Get-Notification.svg";

const DoctorData = [
  {
    id: 1,
    category: "User-App",
    image: SignUp,
    title: "Sign Up",
    des: "This feature of the user interface will allow you signup as a new user with all the credentials and required details.",
  },
  {
    id: 2,
    category: "User-App",
    image: Signin,
    title: "Signin",
    des: "After being registered users need to sign in to the app by providing their signup credentials.",
  },
  {
    id: 3,
    category: "User-App",
    image: ForgotPassword,
    title: "Forgot Password",
    des: "n case the user forgets password, this user app feature will allow him to retrieve the password by following some easy steps.",
  },
  {
    id: 4,
    category: "User-App",
    image: ChangePassword,
    title: "Change Password",
    des: "The user can change his password from time to time in order to strengthen the security of the login credentials.",
  },
  {
    id: 5,
    category: "User-App",
    image: Createaprofile,
    title: "Create a profile",
    des: "Users is allowed to chat with the drivers or the admin whenever needed.",
  },
  {
    id: 6,
    category: "User-App",
    image: Manageprofile,
    title: "Manage profile",
    des: "Users can manage their profiles and edit them at ease by changing the profile information.",
  },
  {
    id: 7,
    category: "User-App",
    image: Manage,
    title: "Manage medical history profile",
    des: "The users can also manage, edit, change and add new information to their medical history profile.",
  },
  {
    id: 8,
    category: "User-App",
    image: available,
    title: "Search available doctors",
    des: "The users can search for specialist doctors from a variety of specialties through the search function and an array of filters.",
  },
  {
    id: 9,
    category: "User-App",
    image: Ratings,
    title: "Ratings and reviews",
    des: "Users can provide feedback about the doctors and the app by giving ratings and publishing reviews about them.",
  },
  {
    id: 10,
    category: "User-App",
    image: Usercanchat,
    title: "User can chat",
    des: "User can engage in real-time chat with the therapists and service-provider doctors and can explain their health issues.",
  },
  {
    id: 11,
    category: "User-App",
    image: UsercanPay,
    title: "User can Pay via PayPal",
    des: "User can make payment to the doctors and therapists for their required medical services by using PayPal and an array of other payment gateways.",
  },
  {
    id: 12,
    category: "User-App",
    image: Userget,
    title: "User get the Morning Quotes",
    des: "User also get lucrative quote from the service provider doctors in the beginning of the day as promotional offers.",
  },
  {
    id: 13,
    category: "Doctor-App-Development",
    image: SignUp,
    title: "SignUp",
    des: "Doctors and therapists also need to signup by creating a fresh new account with the app.",
  },
  {
    id: 14,
    category: "Doctor-App-Development",
    image: Complaint,
    title: "Complaint Management",
    des: "The doctors for using the app need to sign in by using the login credentials.",
  },
  {
    id: 15,
    category: "Doctor-App-Development",
    image: Forgot,
    title: "Forgot Password",
    des: "Doctors can retrieve their password or create new password in case they have forgotten their password or login credentials.",
  },
  {
    id: 16,
    category: "Doctor-App-Development",
    image: Change,
    title: "Change Password",
    des: "Doctors can change or create new password from time to time for the sake of safeguarding their account.",
  },
  {
    id: 17,
    category: "Doctor-App-Development",
    image: profile,
    title: "Create a profile",
    des: "Doctors can create or manage their own profiles by providing all the professional details.",
  },
  {
    id: 18,
    category: "Doctor-App-Development",
    image: Managepro,
    title: "Manage profile",
    des: "Doctors can manage their profiles by maintaining all their professional credentials and information in a discoverable manner.",
  },
  {
    id: 19,
    category: "Doctor-App-Development",
    image: Setavailability,
    title: "Set availability",
    des: "Doctors can set availability of their services to opt for or opt out of requested services from patients.",
  },
  {
    id: 20,
    category: "Doctor-App-Development",
    image: Requestwithdrawal,
    title: "Request for a withdrawal",
    des: "Doctors can also request for withdrawing from a previously opted service.",
  },
  {
    id: 21,
    category: "Doctor-App-Development",
    image: Doctorscan,
    title: "Doctors can see the reports",
    des: "Doctors can withdrawing from a service can also choose to see the medical reports of the concerned patients.",
  },
  {
    id: 22,
    category: "Admin-Penal",
    image: UserManagement,
    title: "User Management",
    des: "The admin panel of the app allows the app admin to manage different users.",
  },
  {
    id: 23,
    category: "Admin-Penal",
    image: DoctorsManagement,
    title: "Doctors Management",
    des: "The doctors management section of the admin panel allows the app admin to manage the registered therapists and doctors.",
  },
  {
    id: 24,
    category: "Admin-Penal",
    image: Featured,
    title: "Featured profile management",
    des: "The admin panel can also allow creating a list of featured profiles and managing them separately.",
  },
  {
    id: 25,
    category: "Admin-Penal",
    image: Payment,
    title: "Payment Management",
    des: "The admin panel allows managing the payment methods, gateways and the actual payment made by the users.",
  },
  {
    id: 26,
    category: "Admin-Penal",
    image: Suspend,
    title: "Suspend account management",
    des: "The admin panel can also suspend certain accounts and can evaluate the accounts for disciplinary actions.",
  },
  {
    id: 27,
    category: "Admin-Penal",
    image: Dispute,
    title: "Dispute management",
    des: "The admin panel also helps sorting out any dispute between the service provider doctors and the patients.",
  },
  {
    id: 28,
    category: "Admin-Penal",
    image: Reports,
    title: "Reports Management",
    des: "The admin panel also offers a report management feature to keep track of the doctor’s services and the patient’s feedback.",
  },
  {
    id: 29,
    category: "Admin-Penal",
    image: Doctorsget,
    title: "Doctors get notification",
    des: "The admin panel also helps sending doctors and therapists notification messages with latest service update.",
  },
];

const DoctorHiring = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [item, setItems] = useState(DoctorData);

  const filterItem = (cateItem) => {
    const updateItems = DoctorData.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItems(updateItems);
  };
  return (
    <>
      {/* common Banner start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>On Demand Doctor App</h2>
                <p>
                  Like many other On Demand Doctor App Development in the market
                  today, the demand for on-demand therapist or On Demand Doctor
                  App Development is also increasing at a rapid speed. In fact,
                  these on-demand apps for calling medical care providers can
                  really transform the healthcare services beyond recognition.
                  We at the App Ideas build most future-ready, sophisticated and
                  user-centric on-demand healthcare and doctor-hiring apps.
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
                      Best Doctor App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Doctor App Development
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
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-App-Development1.png")}
                        alt="IPhone-App-Development-Company"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>On-Demand Doctor App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-Appointment-App.png")}
                        alt="IPhone-App-Development-Service"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>Doctor Appointment App Development</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/Doctor-App-Development-Company.png")}
                        alt="
                        IPhone-Application-Development"
                        className="img-fluid"
                        style={{ width: "25%" }}
                      />
                      <h4>On-Demand Doctor App Development Company</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>GET A FREE DEMO</h4>
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
      {/* common banner end  */}

      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of On Demand Doctor App</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="User-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User App"
                  type="button"
                  role="tab"
                  aria-controls="User App"
                  aria-selected="true"
                  onClick={() => filterItem("User-App")}
                >
                  User App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Doctor-App-Development-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Doctor-App-Development"
                  type="button"
                  role="tab"
                  aria-controls="Doctor-App-Development"
                  aria-selected="false"
                  onClick={() => filterItem("Doctor-App-Development")}
                >
                  On Demand Doctor App Development
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Admin-Penal-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-Penal"
                  type="button"
                  role="tab"
                  aria-controls="Admin-Penal"
                  aria-selected="false"
                  onClick={() => filterItem("Admin-Penal")}
                >
                  Admin Penal
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="Customer-App"
                role="tabpanel"
                aria-labelledby="Customer-App-Tab"
              >
                <div className="row">
                  {item.map((elem) => {
                    const { id, image, des, title } = elem;
                    return (
                      <div
                        key={id}
                        className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4"
                      >
                        <div className="food__delivery__box">
                          <img
                            src={image}
                            alt="search-food-icon"
                            className="img-fluid"
                            style={{ height: "70px" }}
                          />
                          <h4>{title}</h4>
                          <p>{des}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Delivery App Section End */}

      <section className="work_slider_section py-5">
        <div className="container">
          <div className="work-heading">
            <h2>Work we had done</h2>
          </div>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            direction={"horizontal"}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            //   style={{ padding: "2.5rem 0" }}
          >
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/slider/mindweel.webp")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ cursor: "pointer" }}>
              <div className="row">
                <div className="col-12">
                  <img
                    src={require("../../../assets/images/SOLUTIONS/On-Demand App/On Demand Doctor App/slider/godr.webp")}
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
                  Would you like to make a on demand taxi booking app?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <a href="/" className="contact_btn">
                  Contact us{" "}
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

export default DoctorHiring;
