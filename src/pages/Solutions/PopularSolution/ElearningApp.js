import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import FAQ from '../../../components/FAQ'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Banner
import Development from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/E-Learning-App-Development.png'
import Services from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/E-learning-Mobile-App-Development.png'
import developer from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/E-learning-App-Developer.png'

//  User Panel
import Login from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Login _ Register.svg'
import ProfileManagement from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/profile-management.svg'
import View from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Search-and-view.svg'
import Detailed from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Detailed-View.svg'
import Course from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Course-Selection-Purchase.svg'
import OrderHistory from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Check-Order-History.svg'
import availability from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/User Panel/Set-availability.svg'

//  Mentor Panel
import LoginRegister from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Login _ Register.svg'
import Profile from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/profile-manage-4.svg'
import List from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/list-of-courses.svg'
import Historyy from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Login _ Register.svg'
import Schedule from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Schedule a meeting.svg'
import Online from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Mentor Panel/Online-Meeting.svg'

// Admin Panel
import UserManagement from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/User-Management-1.svg'
import MentorManagement from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/Mentor-Management.svg'
import Reviews from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/Reviews Managemement.svg'
import PaymentManagement from '../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/Admin Panel/Payment-Management-1.svg'
import ContactUs from '../../../components/ContactUs'
import HeroSection from '../../../components/HeroSection'
import { Helmet } from 'react-helmet'

const ElearningApp = () => {
  const [activeSection, setActiveSection] = useState('user_panel')
  const [data, setData] = useState([])
  const [activeWhyShould, setActiveWhyShould] = useState('anywhere_anytime')

  const ElearningData = [
    {
      id: 1,
      category: 'user_panel',
      image: Login,
      title: 'Login & Register',
      des: 'Users can log in & register on the site.',
    },
    {
      id: 2,
      category: 'user_panel',
      image: ProfileManagement,
      title: 'Profile Management',
      des: 'Manage his/her profile.',
    },
    {
      id: 3,
      category: 'user_panel',
      image: View,
      title: 'Search & View',
      des: 'Users can search and see lists of available courses.',
    },
    {
      id: 4,
      category: 'user_panel',
      image: Detailed,
      title: 'Detailed view',
      des:
        'Contact tutor, check availability, check the detailed overview of the course.',
    },
    {
      id: 5,
      category: 'user_panel',
      image: Course,
      title: 'Course selection & purchase',
      des: 'user can purchase any course, pay by visa or MasterCard.',
    },
    {
      id: 6,
      category: 'user_panel',
      image: OrderHistory,
      title: 'Order History',
      des: 'User can see his/her purchased course history.',
    },
    {
      id: 7,
      category: 'user_panel',
      image: availability,
      title: 'Set availability and Attend',
      des: 'Can see course details and fix the zoom meeting.',
    },
    {
      id: 8,
      category: 'admin_panel',
      image: UserManagement,
      title: 'User Management',
      des: 'Can manage users.',
    },
    {
      id: 9,
      category: 'admin_panel',
      image: MentorManagement,
      title: 'Mentor Management',
      des: 'Can manage mentors.',
    },
    {
      id: 10,
      category: 'admin_panel',
      image: Reviews,
      title: 'Reviews Managemement',
      des:
        'Users can place a review for a mentor and according to reviews and ratings, their place on the site will be decided.',
    },
    {
      id: 11,
      category: 'admin_panel',
      image: PaymentManagement,
      title: 'Payment Management',
      des: 'Can manage payment or fees for each course.',
    },
    {
      id: 12,
      category: 'mentor_panel',
      image: LoginRegister,
      title: 'Login & Register',
      des:
        'Users needs to register with their credentials and create and use login ID and password.',
    },
    {
      id: 13,
      category: 'mentor_panel',
      image: Profile,
      title: 'Profile Management',
      des:
        'The mentor panel will have access to all user profiles with the ease of managing them.',
    },
    {
      id: 14,
      category: 'mentor_panel',
      image: List,
      title: 'List of Courses',
      des:
        'The mentor panel will have a detailed list of courses and curriculums.',
    },
    {
      id: 15,
      category: 'mentor_panel',
      image: Historyy,
      title: 'History',
      des:
        'The mentor panel will showcase a historical account of the user’s progress through the curriculum.',
    },
    {
      id: 16,
      category: 'mentor_panel',
      image: Schedule,
      title: 'Schedule a meeting',
      des:
        'The mentor panel will help in scheduling meetings and study sessions between users and mentors.',
    },
    {
      id: 17,
      category: 'mentor_panel',
      image: Online,
      title: 'Online meeting',
      des:
        'The mentor app will also help in conducting online meetings and study sessions between users and mentors.',
    },
  ]

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const filterItem = () => {
    const updateItems = ElearningData.filter((curElem) => {
      return curElem.category === activeSection
    })
    setData(updateItems)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  // run when activesection changes
  useEffect(() => {
    filterItem()
  }, [activeSection])

  return (
    <>
      <Helmet title="E-Learning Mobile App Development Company India - The App Ideas" />
      {/* common Banner start */}
      <HeroSection
        title="E-Learning App Store"
        des="The modern education system is continuing to grow beyond the four walls of the classrooms thanks to the unprecedented growth in the elearning websites and apps in the last few years. As the demands for anywhere-anytime access to education is growing, more elearning websites and mobile apps will appear in the near future. We build sophisticated and future-ready elearning websites and apps for education and training curriculums of all types and categories."
        list1="7+ Years of experience in App Development"
        list2="Best E-learning App Development Company"
        list3="Dedicated team for your E-learning App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="E-Learning App Development"
        service2="E-learning Mobile App Development"
        service3="E-learning App Developer"
        image1={Development}
        image2={Services}
        image3={developer}
      />
      {/* common banner end  */}
      {/* Food Delivery App Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Enormous Features of E-Learning Website</h3>
          </div>
          <div className="food__delivery__tabing mt-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'user_panel' && 'active'
                  }`}
                  id="User-Panel-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#User-Panel"
                  type="button"
                  role="tab"
                  aria-controls="User-Panel"
                  aria-selected="true"
                  onClick={() => setActiveSection('user_panel')}
                  style={{ cursor: 'pointer' }}
                >
                  User Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'mentor_panel' && 'active'
                  }`}
                  id="Mentor-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Mentor-App"
                  type="button"
                  role="tab"
                  aria-controls="Mentor-App"
                  aria-selected="false"
                  onClick={() => setActiveSection('mentor_panel')}
                  style={{ cursor: 'pointer' }}
                >
                  Mentor Panel
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeSection === 'admin_panel' && 'active'
                  }`}
                  id="Admin-App-Tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Admin-App"
                  type="button"
                  role="tab"
                  aria-controls="Admin-App"
                  aria-selected="false"
                  onClick={() => setActiveSection('admin_panel')}
                  style={{ cursor: 'pointer' }}
                >
                  Admin Panel
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
                  {data.map((elem) => {
                    const { id, image, title, des } = elem
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
                            style={{ height: '60px' }}
                          />
                          <h4>{title}</h4>
                          <p>{des}</p>
                        </div>
                      </div>
                    )
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
            direction={'horizontal'}
            pagination={{ clickable: true }}
            // navigation
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current

                // Re-init navigation
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            //   style={{ padding: "2.5rem 0" }}
          >
            <SwiperSlide style={{ cursor: 'pointer' }}>
              <div className="row">
                <div className="col-12">
                  <img
                    alt="food"
                    src={require('../../../assets/images/SOLUTIONS/Delivery App/Food-app/food1.webp')}
                    style={{
                      width: '100%',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why should you create an E-Learning Websites?</h3>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould('anywhere_anytime')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === 'anywhere_anytime' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <img
                      src={require('../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Anywhere-Anytime-Access.png')}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Anywhere-Anytime Access</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould('custom_module')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === 'custom_module' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <img
                      src={require('../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Custom-Module-For-Learners.png')}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom Module For Learners</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould('equipped')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === 'equipped' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <img
                      src={require('../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Equipped-For-Hands-On-Training.png')}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Equipped For Hands-On Training</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould('affordable')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === 'affordable' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <img
                      src={require('../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Affordable-Education.png')}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>Affordable Education</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould('rigorous_learning')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === 'rigorous_learning' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <img
                      src={require('../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Rigorous-Learning.png')}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>Rigorous Learning</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyShould('real_time')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyShould === 'real_time' &&
                      'service__provide_tab_active'
                    }`}
                  >
                    <img
                      src={require('../../../assets/images/SOLUTIONS/Popular Solutions/E-Learning App Store/why-should/Real-Time-Industry-Exposure.png')}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Real-Time Industry Exposure</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyShould === 'anywhere_anytime' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Anywhere-anytime access</h3>
                    <p className="Title_para">
                      Elearning websites help learners with anytime-anywhere
                      access to content and courseware.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === 'custom_module' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Custom module for learners
                    </h3>
                    <p className="Title_para">
                      Elearning websites can also allow more customization as
                      per the aptitude and learning ability of the participants.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === 'equipped' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Equipped for hands-on training{' '}
                    </h3>
                    <p className="Title_para">
                      Thanks to the latest technologies like AR, VR, 3D
                      photography, and the use of aerial drone photography,
                      delivering hands-on training through e-learning is no
                      longer impossible.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === 'affordable' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Affordable education </h3>
                    <p className="Title_para">
                      Elearning websites allowing wider access to education
                      beyond the constraints of institutions make education more
                      affordable.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === 'rigorous_learning' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Rigorous learning</h3>
                    <p className="Title_para">
                      Elearning also allows learners to engage more rigorously
                      to continue with multiple curriculums or completing a
                      course at his own pace.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeWhyShould === 'real_time' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Real-time industry exposure
                    </h3>
                    <p className="Title_para">
                      Thanks to the integrated digital platform, eLearning
                      websites offer real-time industry exposure to people.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      <TestiMonial />
      <FAQ />
      {/* Contact Section Start */}
      <ContactUs question="Would you like to create E-learning Website or Mobile App?" />
      {/* Contact Section End */}
    </>
  )
}

export default ElearningApp
