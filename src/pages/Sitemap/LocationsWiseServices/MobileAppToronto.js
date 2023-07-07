import { React, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import '../../../components/Workdone/work.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import FAQ from '../../../components/FAQ'
import { Helmet } from 'react-helmet'
import ContactUs from '../../../components/ContactUs'

const MobileAppToronto = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <>
      <Helmet title="Top Mobile App Development Company In Toronto" />
      {/* Banner Section Start */}
      <section className="common__banner__section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
              <div className="common_banner_lft">
                <h2>Mobile App Development Toronto, Canada</h2>
                <p>
                  Mobile apps opened the opportunity of anytime-anywhere access
                  to contents and communication for the users and customers
                  worldwide. The App Ideas is a leading Mobile App Development
                  Toronto, Canada comprising leading brands as well as startups
                  and small businesses. As a development company with a global
                  footprint, we can build the most sophisticated custom apps
                  that perfectly meets your business needs.
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
            <h3>Mobile App Development Company Toronto, Canada</h3>
            <p>
              We at App Ideas provide a comprehensive range of{' '}
              <strong> Mobile App Development Company Toronto </strong>, Canada
              businesses require. We build highly sophisticated, future-ready,
              scalable, and most innovative mobile app solutions for business
              brands across the niches.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require('../../../assets/images/sitemap/toronto/mobile-app/icons8-iphone-x-72-1.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Innovative Custom Mobile Apps</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/mobile-app/Group-235.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>
                      Superb <br />
                      UI/UX
                    </p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/mobile-app/Cross-platform-Mobile-Apps.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Mobile Apps</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/mobile-app/mobile-app-testing.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>Mobile App Testing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/mobile-app/Branding-And-Marketing.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>App Promotion And Marketing</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/mobile-app/Mask-Group.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Innovative Custom Mobile Apps
                  </h3>
                  <p className="Title_para">
                    The popularity of connected cars are getting popular day by
                    day, Nowadays many of the people are converting their car
                    into smart cars to access the advanced features which smart
                    cars are offering in this present time. Using such services
                    can make the services more convenient and easy to use.
                  </p>
                  <p className="Title_para">
                    Here we are at The App Ideas which is one of the most
                    popular software development company. We are also offering
                    the best IoT app development services at the best possible
                    rates. Our developers can be skilled to deliver the
                    best-connected car app based on the current trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* <!-- Work Slider Start --> */}
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
                      alt="Mindweel"
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
                      alt="bolt-app"
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
                      alt="service-my-car"
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
      {/* <!-- Work Slider End --> */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Why Choose The App Ideas?</h3>
            <p>
              For <strong> Mobile App Development Company Toronto </strong>,
              Canada, service providers are numerous, and but thanks to the
              professionalism and commitment to excellence we stand out as a
              leading development company in the city. Let us have a look at the
              key reasons to choose us for your mobile app development needs in
              Toronto.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a
                    href="/"
                    className="service__provide_tab service__provide_tab_active"
                  >
                    <img
                      src={require('../../../assets/images/sitemap/toronto/why-choose/robust-portfolio.png')}
                      alt="Connected-Cars"
                      className="img-fluid"
                    />
                    <p>Unmatched Portfolio</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/why-choose/Advanced-Technology-1.png')}
                      alt="Industrial-Internet"
                      className="img-fluid"
                    />
                    <p>Innovative Solutions</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/why-choose/latest-technology.png')}
                      alt="Smart-Cities"
                      className="img-fluid"
                    />
                    <p>Latest Technology</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/why-choose/Agile-Development-1.png')}
                      alt="IoT-In-Agriculture"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/why-choose/transperent-process.png')}
                      alt="Smart-Retail"
                      className="img-fluid"
                    />
                    <p>Iterative And Transparent Process</p>
                  </a>
                </div>
                <div className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4">
                  <a className="service__provide_tab">
                    <img
                      src={require('../../../assets/images/sitemap/toronto/why-choose/competitive-pricing.png')}
                      alt="IoT-In-Healthcare"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="service_rht">
                <div className="Title">
                  <h3 className="Title_heading">
                    Innovative Custom Mobile Apps
                  </h3>
                  <p className="Title_para">
                    The popularity of connected cars are getting popular day by
                    day, Nowadays many of the people are converting their car
                    into smart cars to access the advanced features which smart
                    cars are offering in this present time. Using such services
                    can make the services more convenient and easy to use.
                  </p>
                  <p className="Title_para">
                    Here we are at The App Ideas which is one of the most
                    popular software development company. We are also offering
                    the best IoT app development services at the best possible
                    rates. Our developers can be skilled to deliver the
                    best-connected car app based on the current trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      <TestiMonial />

      <FAQ />
      {/* Contact Section Start */}
      <ContactUs
        question="Do you want to know more about our Mobile App Development
                  Toronto, Canada? Do you want to know how can we make
                  substantial value additions to your business with unique and
                  innovative mobile apps? Let us explain to you at length. Feel
                  free to drop us a message to help us reach you at the
                  earliest."
      />
      {/* Contact Section End */}
    </>
  )
}

export default MobileAppToronto
