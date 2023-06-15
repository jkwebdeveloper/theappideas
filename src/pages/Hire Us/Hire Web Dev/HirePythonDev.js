import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import background from '../../../assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../assets/images/Home-our-services/download (1).png'
import TestiMonial from '../../../components/Testimonial/TestiMonial'

import VRApplicationDeveloper from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/Mobile-Apps-Development.png'
import Apps from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/VRAppDevelopmentCompany.webp'
import Angular from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/Game-App-Development-Company.webp'

import Offer from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/1/Best UI UX Designing Services.svg'
import Features from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/1/Custom Python Online Solution_1.svg'
import Consulting from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/1/Python Web And App Development.svg'
import Secure from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/1/Deploy Secure Solution.svg'
import Laravel from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/1/Python Cross-Platform Development.svg'
import Unit from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/1/Dynamic Website Development.svg'

import Expertise from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/2/Skilled And Experienced Developers.svg'
import Sophisticated from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/2/Robust Portfolio.svg'
import Implement from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/2/AGILE DEVELOPMENT.svg'
import Affordable from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/2/On-Time Project Deployment.svg'
import Time from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/2/Competitive Charges.svg'
import Free from '../../../assets/images/HIRE US/Hire Web Developer/Hire Python App Developer/2/Free Support Services.svg'
import { Link } from 'react-router-dom'
import ContactUs from '../../../components/ContactUs'
import HeroSection from '../../../components/HeroSection'
import { Helmet } from 'react-helmet'

const HirePythonDev = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Helmet title="Hire Expert Python App Developers In India | The App Ideas" />
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Python App Developers In India"
        des="Hire the Python Developer in India from The App Ideas. The App Ideas is one of the most popular web and app development company. We are highly expert in understanding the requirements of our client, analyze it and develop a perfect business solution which will be very helpful in your business growth. We offer the most sophisticated UI/UX design elements, better quality functionality and high-end features. "
        list1="7+ Years of experience in App Development"
        list2="Best Python App Development Company"
        list3="Dedicated team for your Python Web &  App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Python Web & App Development"
        service2="Python Development Company"
        service3="Python Developers"
        image1={VRApplicationDeveloper}
        image2={Apps}
        image3={Angular}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Python App Development</h3>
            <p>
              The App Ideas is a Python web and{' '}
              <Link
                href="/mobile-app-development"
                className="Title_Color"
                style={{ color: '#d6aa0b' }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b> app development company </b>
              </Link>{' '}
              that is highly capable of creating the most elegant, sophisticated
              and future-ready python web and app solution. The online python
              solution can help your business to increase brand awareness online
              and help you to easily increase the customer user base very
              conveniently. Our Python experts can provide you with the best
              solution along with the best designing services and Functionality
              which can help in business success.
            </p>
            <p>
              We have a team of highly expert python developers who are highly
              skilled and experienced in providing the best business web and app
              solution for different niches. Hire us and experience our
              services, and we can help you to convert your idea into an online
              platforms solution.
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
              Hire Python Developers from The App Ideas for Variety of
              Requirements.
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
                  <a href="/services">Custom Python Online Solution</a>
                </h5>
                <div className="text">
                  Our Python developers are highly experienced and expertise to
                  deploy the best python platforms. Along with working with a
                  theme, our team also provides customization services to the
                  clients.
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
                  <a href="/services">Best UI/ UX Designing Services</a>
                </h5>
                <div className="text">
                  We have a team of skilled python developers who are highly
                  capable to design and develop most elegant and future-ready
                  designing services into python web and app solutions.
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
                    alt="Laravel Features Integration"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Python Web And App Development</a>
                </h5>
                <div className="text">
                  We have a team of highly skilled developers who have worked on
                  various projects like development of web and app applications
                  for different niches.
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
                  <a href="/services">Deploy Secure Solution</a>
                </h5>
                <div className="text">
                  As a Python development company, we provide the best python
                  web and app solutions. Along with that, we also ensure
                  security by keeping the privacy and security of the online
                  platforms as well as user data.
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
                  <a href="/services">Python Cross-Platform Development</a>
                </h5>
                <div className="text">
                  We have a team of highly expert cross-platform developers who
                  can help you to convert your app ideas into an elegant app
                  across IOS and Android mobile platforms.
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
                    src={Unit}
                    alt="Unit Testing Methods"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Dynamic Website Development</a>
                </h5>
                <div className="text">
                  Our skilled and expert python developers can help your
                  business by developing dynamic websites by integrating the
                  most advanced features as per the client requirements.
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
            <h2>Why Hire Python app Developers from us?</h2>
            <p>
              The App Ideas has built its reputation as one of the leading
              Python web and app development company with a wide spectrum of
              mobile app development projects across various niches. Here I am
              listing some of the reasons to hire the python app developers from
              us.
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
                  <a href="/services">Skilled And Experienced Developers</a>
                </h5>
                <div className="text">
                  We have a skilled team of dedicated Python developers who have
                  proven their expertise for several years by working on Various
                  python projects.
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
                    src={Sophisticated}
                    alt="Sophisticated Portfolio"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Strong Portfolio</a>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  We have developed a strong portfolio of various successful
                  python apps for various niches and developed for different
                  devices including the latest devices.
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
                  <a href="/services">Agile Methodology</a>
                </h5>
                <div className="text">
                  We mainly follow the agile methodology for the software
                  services development which will be very helpful for you to
                  track down the progress of the projects by dividing them into
                  milestones.
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
                  <a href="/services">On-Time Project Deployment</a>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  Along with the best development services and best quotation,
                  we also offer the on-time deployment of the projects. We
                  strictly follow the timeline and deliver the services on time.
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
                    src={Time}
                    alt="Time-Bound Deployment"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Competitive Charges</a>
                </h5>
                <div className="text">
                  Along with the best development services, we offer the most
                  competitive rates for quality-focused python web and app
                  development for various business niches.
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
                    src={Free}
                    alt="Free Support Services"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Free Support Services</a>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  After deployment of the app solution, we provide free
                  three-month support and maintenance services to our clients.
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
        question="Do you want to know more about our Python developers and their
                  expertise? Feel free to contact us."
      />
      {/* Contact Section End */}
    </>
  )
}

export default HirePythonDev
