import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'

function LifeTAI() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    
    <>
      <Helmet title="Life at TAI - THE APP IDEAS" />
      <section className="life_tai_banner">
        <div className="container">
          <div className="life_tai_content">
            <h1>Life at @App Ideas</h1>
            <p>
              We are The App Ideas, a creative bunch of thinkers and developers
              having expertise in shaping future ready mobile and web apps
              across niches.
            </p>
            <p>
              The App Ideas is the leading Web &amp; Mobile App Development
              Company that can help your business grow with innovative and
              engaging solutions. We build cutting-edge digital solutions with
              the quick-engaging user interface and user experience. Over the
              years we have established ourselves as the leading service
              provider for mobile app development, web development, Web and
              graphic design, e-commerce development, IOT development and games
              development.
            </p>
          </div>
        </div>
      </section>
      <section className="life_section">
        <div className="container">
          <div className="life__title">
            <h1>Life at App Ideas</h1>
          </div>
          <div data-aos="fade-up" className="life_content_img text-center">
            <h1>LIFE @</h1>
            <img
              src={require('../../assets/images/COMPANY/lifeAtTai/life-tai.png')}
              alt="life-tai"
              className="img-fluid my-4"
            />
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-5 col-sm-12 col-12">
              <div className="life_content_lft text-right">
                <h1>2022</h1>
                <h2>Ganesh Chaturthi</h2>
              </div>
            </div>
            <div data-aos="fade-left" className="col-lg-5 col-md-7 col-sm-12 col-12">
              <div className="life_img_rht">
                <img
                  src={require('../../assets/images/COMPANY/lifeAtTai/Ganesh Chaturthi.gif')}
                  alt="ganesh-chaturthi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div data-aos="fade-right" className="col-lg-5 col-md-7 col-sm-12 col-12 order-2 order-md-1 order-sm-2 order-xs-2">
              <div className="life_img_rht life_img_rht_shift">
                <img
                  src={require('../../assets/images/COMPANY/lifeAtTai/Christmas.gif')}
                  alt="christmas"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12 col-12 order-1 order-md-2 order-sm-1 ">
              <div className="life_content_lft life_content_lft_shift">
                <h1>2022</h1>
                <h2>Christmas Day</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-5 col-sm-12 col-12">
              <div className="life_content_lft text-right">
                <h1>2022</h1>
                <h2>Diwali</h2>
              </div>
            </div>
            <div data-aos="fade-left" className="col-lg-5 col-md-7 col-sm-12 col-12">
              <div className="life_img_rht">
                <img
                  src={require('../../assets/images/COMPANY/lifeAtTai/Diwali.gif')}
                  alt="diwali"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work_slider_section py-5">
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
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
            style={{ padding: '2.5rem 0px 7.2rem' }}
          >
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img1-400x267.webp')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img10-400x267.png')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img2-400x267.webp')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img3-400x267.webp')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img4-400x267.webp')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img5-400x267.png')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img6-400x267.png')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img7-400x267.webp')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img8-400x267.png')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="image-box">
                  <img
                    src={require('../../assets/images/COMPANY/lifeAtTai/slider/life_img9-400x267.png')}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '7px',
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Contact Section Start */}
      <section className="testi-bg py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
              <div className="contact__lft">
                <p style={{ textAlign: 'left' }}>
                  Would you like to build your career with us?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
              <div className="contact__rht">
                <Link to="/contactus">
                  <a className="contact_btn" style={{ color: '#000' }}>
                    Contact us{' '}
                  </a>
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

export default LifeTAI
