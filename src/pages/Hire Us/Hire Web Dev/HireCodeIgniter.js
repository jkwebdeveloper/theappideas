import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import background from '../../../assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../assets/images/Home-our-services/download (1).png'
import TestiMonial from '../../../components/Testimonial/TestiMonial'

import UnityMobileApp from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/UnityMobileApp.webp'
import Apps from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/Mobile-Apps-Development.png'
import Game from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/Game-App-Development-Company.webp'

import Laravel from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/CUSTOM CODEIGNITER APPS.svg'
import Offer from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/CODEIGNITER THEME INTEGRATION.svg'
import Features from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/Provide UPGRADE AND SUPPORT.svg'
import Secure from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/WEB DEVELOPMENT.svg'
import Consulting from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/1/3RD PARTY API INTEGRATION.svg'

import Expertise from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/EXPERIENCE AND EXPERTISE.svg'
import Implement from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/AGILE DEVELOPMENT.svg'
import Affordable from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/TRANSPARENT AND TIME HONOURED DEVELOPMENT.svg'
import STRONG from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/A Strong Portfolio.svg'
import PRICING from '../../../assets/images/HIRE US/Hire Web Developer/Hire CodeIgniter App Developer/2/Competitive price.svg'
import { Link } from 'react-router-dom'
import ContactUs from '../../../components/ContactUs'
import HeroSection from '../../../components/HeroSection'
import { Helmet } from 'react-helmet'

const HireCodeIgniter = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire CodeIgniter Developers | Hire Expert CodeIgniter Web Developer" />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire CodeIgniter App Developers In India"
        des="CodeIgniter is one of the most popular open source, PHP based, MVC framework widely embraced for building fast paced and dynamic web apps across niches. Besides versatility and ease of use this framework is known for easy setup and deployment. CodeIgniter is a dynamic framework that helps developers building highly interactive, simple to use and efficient web apps with the use of PHP as base language. Simple and easy to use coding and fast paced development are the key strengths of this framework."
        list1="7+ Years of experience in App Development"
        list2="Best CodeIgniter App Development Company"
        list3="Dedicated team for your CodeIgniter App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="CodeIgniter App"
        service2="CodeIgniter App Development"
        service3="CodeIgniter App Developer"
        image1={UnityMobileApp}
        image2={Apps}
        image3={Game}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in CodeIgniter Development</h3>
            <p>
              We are into{' '}
              <Link
                to="/web-development"
                className="Title_Color"
                style={{ color: '#d6aa0b' }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b> web development</b>
              </Link>{' '}
              for years and our experience with the PHP and PHP based frameworks
              goes well beyond a decade. We are one of the early adopters of
              CodeIgniter framework and over the years have built an array of
              most sophisticated and future ready web apps across diverse niches
              by using the framework. By utilizing the dynamic capabilities of
              CodeIgniter we built an array of most sophisticated and feature
              rich apps. We ensure optimum flexibility, scalability and fast
              pace of development with CodeIgniter framework.
            </p>
            <p>
              We at The App Ideas boast of a solid team of experienced and
              expert CodeIgniter developers capable to build a variety of apps
              across niches.
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
      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              THE CODEIGNITER DEVELOPERS OF THE APP IDEAS CAN TURN YOUR APP
              IDEAS INTO POWERFUL DIGITAL PRODUCTS
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
                style={{ height: '425px' }}
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
                    src={Laravel}
                    alt="Laravel Web Application Development"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">CUSTOM CODEIGNITER APPS</a>
                </h5>
                <div className="text">
                  We make use of CodeIgniter to allow optimum scope of
                  customization in apps built with easy to use interface and
                  simplicity.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                style={{ height: '425px' }}
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
                    src={Offer}
                    alt="Offer Customization"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">CODEIGNITER THEME INTEGRATION</a>
                </h5>
                <div className="text">
                  Our expert CodeIgniter developers are also experienced enough
                  to integrate a wide variety of tools and themes to boost the
                  performance of your existing website or app.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                style={{ height: '425px' }}
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
                    src={Features}
                    alt="CUSTOM WORDPRESS DEVELOPMENT"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">UPGRADE AND SUPPORT</a>
                </h5>
                <div className="text">
                  We also offer experienced IOS developers who can address
                  issues from time to time and give facelift to your apps with
                  timely and new updates and upgrades.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                style={{ height: '400px' }}
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
                    src={Secure}
                    alt="Secure Web Solutions"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">WEB DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Our CodeIgniter developers can build highly sophisticated and
                  feature rich niche websites with engaging UX to boost customer
                  interaction and business conversion.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                style={{ height: '400px' }}
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
                    src={Consulting}
                    alt="Laravel Consulting Services"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">3RD PARTY API INTEGRATION</a>
                </h5>
                <div className="text">
                  As a Node.js software development company, we offer the best
                  Node.js web and app solution and also make it secure which
                  helps in maintaining the privacy and security of the business
                  as well as the user’s data.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
            <h2>WHY HIRE CODEIGNITER DEVELOPERS FROM US?</h2>
            <p>
              We have already established ourselves as one of the leading
              CodeIgniter development companies with a great track record of too
              many successful projects completed by us. Here we explain some of
              the key reasons to hire us for CodeIgniter development.
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
                    src={Expertise}
                    alt="Expertise In Web Solutions"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">EXPERIENCE AND EXPERTISE</a>
                </h5>
                <div className="text">
                  We boast of a robust team of expert CodeIgniter developers
                  having years of frontline experience in building many websites
                  and apps with this framework.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                    src={STRONG}
                    alt="Sophisticated Portfolio"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">A STRONG PORTFOLIO</a>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  As of now we are credited with a bounty of most successful
                  CodeIgniter apps across several business niches.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                    src={Implement}
                    alt="Implement Agile Methods"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">AGILE DEVELOPMENT</a>
                </h5>
                <div className="text">
                  Agile development process allows fast paced development with
                  quicker time to market and glitch free performance with
                  concurrent testing.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                    src={Affordable}
                    alt="Affordable Costing"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">
                    TRANSPARENT AND TIME HONOURED DEVELOPMENT
                  </a>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  With our CodeIgniter developers, you can ensure a transparent
                  development process and completion of project deadlines.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
                    src={PRICING}
                    alt="Time-Bound Deployment"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">COMPETITIVE PRICING</a>
                </h5>
                <div className="text">
                  We offer most competitive rate for hiring CodeIgniter
                  developers for apps and web development projects across
                  niches.
                </div>
                {/* <a href="/services" className="arrow-icon">
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
        question="Do you want to know more about the expertise of our
                  CodeIgniter developers? Just feel free to contact us."
      />{' '}
      {/* Contact Section End */}
    </>
  )
}

export default HireCodeIgniter
