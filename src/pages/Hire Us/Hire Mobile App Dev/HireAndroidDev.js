import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import WorkHand from '../../../components/WorkHand'

import appdev from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/Android-App-Development.png'
import Application from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/Android-Application-Development.png'
import Company from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/Android-App-Development-Company.png'
// import background from "../../../assets/images/Home-our-services/bg-download.svg";
import background from '../../../assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../assets/images/Home-our-services/download (1).png'
import TestiMonial from '../../../components/Testimonial/TestiMonial'
import { Link } from 'react-router-dom'

import Contactus from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/1/CUSTOM ANDROID APPS.svg'
import ANDROID from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/1/ANDROID SUPPORT.svg'
import CROSS from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/1/CROSS PLATFORM DEVELOPMENT.svg'

import EXPERIENCE from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/EXPERIENCE AND EXPERTISE.svg'
import STUNNING from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/STUNNING PORTFOLIO.svg'
import GREAT from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/GREAT UI AND UX.svg'
import INTERNET from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/PERFORMANCE DRIVEN.svg'
import FAST from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire Android App/2/FAST PACED AND COMPETITIVE.svg'
import ContactUs from '../../../components/ContactUs'
import HeroSection from '../../../components/HeroSection'
import { Helmet } from 'react-helmet'

const HireAndroidDev = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire Dedicated Android App Developers In India | The App Ideas" />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Android App Developers In India"
        des="Do you like to build your mobile presence with a crisp and beautiful Android app for your business? Are you trying to find some expert Android app developers who can give shape to your app idea with sophisticated Android development? Well, the Android app developers at The App Ideas ensure can ensure building highly objectively designed Android apps with custom features to help your business with a mobile presence."
        list1="7+ Years of experience in App Development"
        list2="Best Android App Development Company"
        list3="Dedicated team for your Android App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Android App Development"
        service2="Android Application Development"
        service3="Android App Development Company"
        image1={appdev}
        image2={Application}
        image3={Company}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Android App Development</h3>
            <p>
              Over the years we mastered the art and science of{' '}
              <Link
                to="/"
                className="Title_Color"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b>mobile app development</b>
              </Link>{' '}
              with exceptional command over mobile app aesthetics and technical
              skills to build features that make an app useful. When it comes to
              the Android platform we build apps that cater to the versatility
              of the device ecosystem Android is known of. Instead of addressing
              with an “one size fits all” kind of approach we build highly
              responsive Android apps specifically to address the constraints of
              each device screen and varied range of device functions. We have
              built a gamut of successful Android apps across diver niches and
              business needs.
            </p>
            <p>
              The developers at The App Ideas can develop custom designed and
              highly user optimised Android apps with a highly competitive
              pricing and stringent deadline.
            </p>
            <div className="text-center">
              <Link
                to="/contactus"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <a className="contact_btn" style={{ color: '#000' }}>
                  Contact us{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <WorkHand />

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              Hire Android Developers from The App Ideas and achieve excellent
              mobile interactions
            </h2>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={Contactus}
                    alt="Web Development"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>Contact us ANDROID APPS</a>
                </h5>
                <div className="text">
                  Our experienced and skilled team of Android developers can
                  build innovative Android apps across niches and categories.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={ANDROID}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>ANDROID SUPPORT</a>
                </h5>
                <div className="text">
                  We are also ready with a robust team of Android developers who
                  are ready to provide support to all your Android apps whether
                  for addressing performance issues or for changing the user
                  interface or for integrating new features.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={CROSS}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>CROSS PLATFORM DEVELOPMENT</a>
                </h5>
                <div className="text">
                  We have a large team of expert cross platform developers who
                  can turn your app idea into sophisticated apps across both
                  Android and iOS mobile platforms.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      <TestiMonial />

      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two py-5">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>Why Hire Android Developers From Us?</h2>
            <p>
              We are one of the most respected an Android developer in India
              companies with a robust portfolio of future ready apps across the
              niche. Here are some of the key reasons to hire Android developers
              from us.
            </p>
          </div>
          <div className="row clearfix">
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={EXPERIENCE}
                    alt="Web Development"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>EXPERIENCE AND EXPERTISE</a>
                </h5>
                <div className="text">
                  We boast of a long experience in Android mobile app
                  development with expertise in building apps across diverse
                  niches.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={STUNNING}
                    alt="E-COMMERCE DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>STUNNING PORTFOLIO</a>
                </h5>
                <div className="text">
                  We boast of a proven track record with a stunning portfolio of
                  a gamut of most successful Android apps across several niches.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={GREAT}
                    alt="MOBILE APP DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>GREAT UI AND UX</a>
                </h5>
                <div className="text">
                  We guarantee delivering highly customer centric UI design and
                  engaging UX for Android apps of all types and niches.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={INTERNET}
                    alt="INTERNET OF THING"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>PERFORMANCE DRIVEN</a>
                </h5>
                <div className="text">
                  We build Android apps with unmatched performance and low
                  downtime guaranteed.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="HireIOS-block style-two col-lg-4 col-md-6 col-sm-12 my-3"
            >
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{ height: '385px' }}
              >
                <div className="color-layer" />
                <div
                  className="pattern-layer-one"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <div
                  className="pattern-layer-two"
                  style={{ backgroundImage: `url(${background1})` }}
                />
                <div className="icon-box">
                  <img
                    src={FAST}
                    alt="GAME DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a>FAST PACED AND COMPETITIVE</a>
                </h5>
                <div className="text">
                  We ensure building Android apps at quick pace thanks to our
                  agile development process while maintaining most competitive
                  pricing for apps across niches.
                </div>
                {/* <a className="arrow-icon">
                  <HiOutlineArrowRight />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Section End */}
      {/* Contact Section Start */}
      <ContactUs
        question=" Do you want to know more about our Android app developers and
                  their expertise? Feel free to contact us."
      />
      {/* Contact Section End */}
    </>
  )
}

export default HireAndroidDev
