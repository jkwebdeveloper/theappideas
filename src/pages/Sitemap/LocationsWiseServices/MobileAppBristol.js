import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import FAQ from '../../../components/FAQ'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const MobileAppBristol = () => {
  const [activeService, setactiveService] = useState('custom_mobile')
  const [activeWhyChoose, setActiveWhyChoose] = useState('experience_expertise')
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Top Mobile App Agency in Bristol | App Developers Bristol" />
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Mobile App Development Bristol</h2>
                <p>
                  Over the years having a branded Mobile App Development Bristol
                  became inseparable from the digital presence of business
                  organisations. It is the mobile app that plays the most
                  important role for branding and marketing effort of any
                  business. The App Ideas as the leading app development company
                  with a global footfall has already served many Bristol
                  businesses with unique and custom-built mobile app solutions.
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
                      Best Mobile App Development Company
                    </span>
                  </li>
                  <li>
                    <span className="banner_list_lft_span">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="banner_list_rht_span">
                      Dedicated team for your Mobile App Development
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
                        src={require('../../../assets/images/sitemap/bristol/Mobile-App-Development.png')}
                        alt="Mobile-App-Development"
                        className="img-fluid"
                        style={{ width: '25%' }}
                      />
                      <h4>App Development Bristol</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require('../../../assets/images/sitemap/bristol/Top-Mobile-Game-App-Developers.webp')}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: '25%' }}
                      />
                      <h4>App Developers Bristol</h4>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                    <div className="banner__boxes">
                      <img
                        src={require('../../../assets/images/sitemap/bristol/Mobile-Apps-Development.png')}
                        alt="Mobile-Application-Development"
                        className="img-fluid"
                        style={{ width: '25%' }}
                      />
                      <h4>App Development Agency Bristol</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="banner__contact__box">
                <div className="contact_header">
                  <h4>Contact us</h4>
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
                            placeholder="Email*"
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
                            defaultValue={''}
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
            <h3>Mobile App Development Bristol from the App Ideas</h3>
            <p>
              At App Ideas, we provide a comprehensive range of{' '}
              <b>Mobile App Development Company Bristol</b> businesses need. We
              create an app concepts, design, prototype, and develop
              future-optimized, user-centric, and unique mobile apps that boost
              audience-engagement and business conversion.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('custom_mobile')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'custom_mobile' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/sydney/mobile_app/icons8-iphone-x-72-1.png')}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Custom Mobile Apps</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_enterprise')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_enterprise' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/sydney/mobile_app/Group-235.png')}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>UI/UX Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_wearable')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_wearable' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/adelaide/Cross-platform-Mobile-Apps.png')}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Mobile Apps</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_game')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_game' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/sydney/mobile_app/mobile-app-testing.png')}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>QA Testing And Evaluation</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_app_redesign')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_app_redesign' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/sydney/mobile_app/Branding-And-Marketing.png')}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>
                      App <br /> Marketing
                    </p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setactiveService('android_support')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'android_support' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/sydney/mobile_app/Mask-Group.png')}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            {activeService === 'custom_mobile' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Custom Mobile Apps</h3>
                    <p className="Title_para">
                      We build unique custom mobile apps with innovative and
                      business-specific features that help businesses with
                      steady business conversion.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_enterprise' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">UI/UX Development</h3>
                    <p className="Title_para">
                      We design, prototype and build instantly eye-catchy and
                      fast-engaging user Interface (UI) and frictionless User
                      Experience (UX) for mobile apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_wearable' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Cross-Platform Mobile Apps
                    </h3>
                    <p className="Title_para">
                      We build sophisticated cross-platform mobile apps for both
                      iOS and Android OS platforms while maintaining absolutely
                      native user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_game' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">QA Testing and Evaluation</h3>
                    <p className="Title_para">
                      We provide expertise-driven QA and Beta testing and app
                      evaluation service to detect issues and fixing them for
                      glitch-free performance.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_app_redesign' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">App Marketing </h3>
                    <p className="Title_para">
                      We also undertake app marketing and promotion tasks and
                      responsibilities to help apps garner user acquisition,
                      user retention, business conversion, and growth.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeService === 'android_support' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and Maintenance </h3>
                    <p className="Title_para">
                      We provide full support and maintenance service for the
                      full app lifecycle and provide updates with crucial
                      enhancements from time to time.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Work Head Section Start */}
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
            style={{ padding: '2.5rem 0' }}
          >
            <SwiperSlide>
              <Link
                to="https://play.google.com/store/apps/details?id=com.app.mindwheel"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <img
                      src={require('../../../assets/images/work/2.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">
                      Mindweel - On Demand Psychologist Hiring App
                    </div>
                    <p>
                      It’s an On Demand Psychologist OR Doctor Hiring App. It
                      has been very useful app in the current scenario of the
                      world where everyone is facing depression, anxiety and
                      mental health issues.
                    </p>
                    <p>
                      This project has three main modules, Patient App,
                      Psychologist / Doctor App, and Admin Panel.
                    </p>

                    <p>
                      Patient can able to create and manage their medical
                      profile, find the best available Psychologist / Doctors,
                      Check their profiles, availability, ratings and reviews,
                      Book them online, make a payment, give ratings and
                      reviews.
                    </p>
                    <p>
                      Psychologist OR Doctor can able to register themselves,
                      create their specialist profile, manage availability,
                      patient, booking, payment and other stuffs.
                    </p>
                    <p>
                      Admin can able to manage Patients, Doctors, Payment,
                      Reports, Content and other stuffs.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                to="https://play.google.com/store/apps/details?id=com.app.boltdriverapp"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <img
                      src={require('../../../assets/images/work/bolt-app.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">Bold Delivery</div>
                    <p>
                      It’s a Food Ordering & Food Delivery App. We have created
                      a User app, Restaurant App, Driver App, and Admin panel.
                    </p>
                    <p>
                      User can able to search, filter, check food details, place
                      an online order, make payment, track their orders, give
                      ratings and reviews.
                    </p>

                    <p>
                      Restaurant can able to register themselves, list and
                      manage their food items, manage orders, track drivers and
                      orders.
                    </p>
                    <p>
                      Driver can able to register, manage their availabilities,
                      deliver the food items to the users.
                    </p>
                    <p>
                      Admin can able to manage users, food category & sub
                      category, restaurants, drivers, payment and other things.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                to="https://play.google.com/store/apps/details?id=com.servicemycar.android"
                target="_blank"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <img
                      src={require('../../../assets/images/work/service-my-car.webp')}
                      style={{
                        width: '100%',
                        boxShadow: '0px 0px 10px 0px rgb(154 154 154/75%)',
                        borderRadius: '10px',
                        marginLeft: '10px',
                      }}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12" style={{ color: '#000' }}>
                    <div className="dec">Service my car</div>
                    <p>
                      It’s an On Demand Car Servicing App, It has 2 main
                      modules.
                    </p>
                    <p>
                      1) User App <br />
                      2) Admin Web Backend
                    </p>

                    <p>
                      User can able to check out all the services packages
                      offered by a service center, check in details and compare
                      them, choose the service package and book online, pay
                      online, they can also choose pickup and drop off point,
                      check and approve extra repair cost, check their car 360°
                      inspections on their app, provide ratings and reviews of
                      the services.
                    </p>
                    <p>
                      Admin can able to list down all the services packages,
                      manage booking, extra repair services, payment, content of
                      an app, offers and other stuffs
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Work Head Section End */}

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>
              Why Choose the App Ideas for Mobile App Development Company
              Bristol?
            </h3>
            <p>
              In <b>Mobile App Development Company Bristol</b>services are
              numerous but hardly you can come across a professionally committed
              and globally successful Mobile App Development Bristol company
              like the App Ideas. We always make a standout presence with our
              expertise-driven app development service that over the years
              created numerous success stories. Let us have a look at the
              principal reasons to choose the App Ideas for the mobile app
              development needs.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('experience_expertise')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'experience_expertise' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/sydney/why_choose/robust-portfolio.png')}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Stunning Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('robust_protfolio')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'robust_protfolio' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap/adelaide/Advanced-Technology-1.png')}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Future-Optimised Solutions</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('full_lifestyle_support')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'full_lifestyle_support' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../../assets/images/sitemap//adelaide/latest-technology.png')}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Cutting-Edge Technology</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('agile_development')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'agile_development' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <img
                      src={require('../../../assets/images/sitemap/sydney/why_choose/Agile-Development-1.png')}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('fast_paced_development')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'fast_paced_development' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <img
                      src={require('../../../assets/images/sitemap/brisbane/transperent-3.png')}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Transparent Process</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('competitive_price')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'competitive_price' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <img
                      src={require('../../../assets/images/sitemap/sydney/why_choose/competitive-pricing.png')}
                      alt="Competitive-Pricing"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'experience_expertise' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Stunning Portfolio</h3>
                    <p className="Title_para">
                      We at App Ideas boast of a robust portfolio of an array of
                      successful mobile apps built for different Brisbane
                      businesses across the niches.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'robust_protfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      Future-optimised Solutions
                    </h3>
                    <p className="Title_para">
                      With a talented team of expert app developers with great
                      industry expertise we build a variety of mobile apps for a
                      whole array of business niches.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'full_lifestyle_support' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Cutting-edge Technology</h3>
                    <p className="Title_para">
                      We proudly boast of a talent pool with exceptional command
                      over the latest development languages and skills required
                      for building future-ready apps.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'agile_development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile Development</h3>
                    <p className="Title_para">
                      We follow agile development methodology to ensure faster
                      development while ensuring seamless app performance
                      through continuous and concurrent testing.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'fast_paced_development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Transparent Process</h3>
                    <p className="Title_para">
                      We at App Ideas boast of a fully transparent app
                      development process that allows clients a lot of
                      flexibility and the ability to iterate during the project.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'competitive_price' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      We offer our app development services at a highly
                      competitive pricing to make sure that our app development
                      services remain fully affordable for businesses of all
                      sizes.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Client testimonial Section Start */}
      <TestiMonial />
      {/* Client testimonial Section End */}

      {/* FAQ Section Start */}
      <FAQ />
      {/* FAQ Section End */}

      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: 'left' }}>
                  Do you want to know in more details about our Mobile App
                  Development Bristol? Let us elucidate how can we contribute to
                  your business with our expert app development process. Just
                  free to drop us a message and let us reach you.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link
                  to="/contactus"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="contact_btn" style={{ color: '#000' }}>
                    Contact us{' '}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  )
}

export default MobileAppBristol
