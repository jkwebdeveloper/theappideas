import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import background from '../../../assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../assets/images/Home-our-services/download (1).png'
import TestiMonial from '../../../components/Testimonial/TestiMonial'

import app from "../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/Ceate-React-Native-App.png"
import development from "../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/React-Native-App-Development.png"
import company from "../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/React-Native-Development-Company.png"


import Customization from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Customization Of The Platforms.svg'
import Stunning from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Stunning Portfolio.svg'
import Sophisticated from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Sophisticated UI UX Designing.svg'
import Cross from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Cross Platforms Expertise.svg'
import Custom from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/Custom Widget Development.svg'
import Reactnative from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/1/React Native Integrations.svg'

import EXPERIENCE from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Expertise And Experience.svg'
import Integration from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/3rd Party API Integration.svg'
import Powerful from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Powerful Portfolio.svg'
import Agile from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Agile Methodology.svg'
import Free from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Free Maintenance Service.svg'
import Deliver from '../../../assets/images/HIRE US/Hire Mobile App Developer/Hire React Native App Developer/2/Deliver Secure App Solution.svg'
import { Link } from 'react-router-dom'
import ContactUs from '../../../components/ContactUs'
import HeroSection from '../../../components/HeroSection'

const HireReactNativeDev = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire React Native App Developers In India"
        des="Hire the best React Native Developers in India from The App Ideas. App Ideas is one of the most popular mobile app and web development company. We have a team of highly experienced and skilled developers who first understand the client’s requirements, analyze and plan the projects, develop the projects and deliver the project along with client satisfaction."
        list1="7+ Years of experience in App Development"
        list2="Best React Native App Development Company"
        list3="Dedicated team for your React Native App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="React Native App Development"
        service2="Create React Native App"
        service3="React Native Development Company"
        image1={app}
        image2={development}
        image3={company}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in React Native App Development</h3>
            <p>
              The App Ideas is a React Native app development company. Our React
              Native app developers are highly efficient in developing a
              future-ready React Native app development. As React Native
              Technology offers some of the best and unique features that many
              business owners are now choosing this technology for developing
              their business online platforms. Our React Native app development
              solutions can help you in building awareness as well as easily
              maintaining the Business.
            </p>
            <p>
              React Native is an open-source mobile application framework
              developed and launched by Facebook. React Native is highly used
              for the development of an online solution for Android, Android TV,
              IOS, macOS, web, windows,tvOS and more. React Native framework
              enables developers to develop software along with native platforms
              capabilities. We have a team of highly skilled React Native
              developers who are highly expert in proving the best software
              solutions for business. Hire us and access our expertise to
              convert your business ideas into the best Web and app platforms
              solutions.
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
      {/* Work Head Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-mobile-one">
                <a href="" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="" className="work_head_box_link">
                        <h2>Spending Tracker</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="" className="work_head_box_link"></a>
                        <li>
                          <a href="" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="" className="work_head_item">
                            Mobile Application Development{' '}
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="" className="work_head_item">
                            React Native
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="" className="work_head_item">
                            Reactjs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-up-left"
                        src={require('../../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-three.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div data-aos="fade-up" className="work_head_box port-mobile-two">
                <a href="" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="" className="work_head_box_link">
                        <h2>Pitch App</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="" className="work_head_box_link"></a>
                        <li>
                          <a href="" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="" className="work_head_item">
                            Mobile Application Development
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="" className="work_head_item">
                            React Native
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="" className="work_head_item">
                            Reactjs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-up-left"
                        src={require('../../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-twenty.webp')}
                        alt="Device-Image-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div
                data-aos="fade-up"
                className="work_head_box port-mobile-three"
              >
                <a href="" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="" className="work_head_box_link">
                        <h2>We Eat App</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="" className="work_head_box_link"></a>
                        <li>
                          <a href="" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="" className="work_head_item">
                            Mobile Application Development
                          </a>
                        </li>
                        <li>
                          <a href="" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="" className="work_head_item">
                            React Native
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        data-aos="fade-up-left"
                        src={require('../../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-twentyfive.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Head Section End */}
      {/* Hire Section Start */}
      <section className="HireIOSDev-section style-two">
        <div className="container">
          <div className="HireIOSDev-heading">
            <h2>
              Hire React Native Developers from The App Ideas for Variety of
              Requirements
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
                    src={Customization}
                    alt="Customization Of The Platforms"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Customization Of The Platforms</a>
                </h5>
                <div className="text">
                  Along with working with themes and predesigned models, we also
                  work on the customization or try to integrate all the
                  functionality and features in a single platform with
                  customization. Customization helps in adding up the unique
                  features which help in business growth.
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
                    src={Stunning}
                    alt="Stunning Portfolio"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Stunning Portfolio</a>
                </h5>
                <div className="text">
                  Our React Native developers have immense skills in web and app
                  development services. We have also listed a stunning portfolio
                  that is developed by our developers.
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
                    src={Sophisticated}
                    alt="Sophisticated UI/UX Designing"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Sophisticated UI/UX Designing</a>
                </h5>
                <div className="text">
                  With our React native development, we ensure to deliver highly
                  sophisticated, unique and engaging UI/UX for your business app
                  solution.
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
                    src={Cross}
                    alt="Cross Platforms Expertise"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Cross Platforms Expertise</a>
                </h5>
                <div className="text">
                  We have a team of experienced cross platforms developers who
                  can help to turn your ideas into a stunning and sophisticated
                  app for both mobile platforms like Android and IOS.
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
                    src={Custom}
                    alt="GAME DEVELOPMENT"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Custom Widget Development</a>
                </h5>
                <div className="text">
                  The developers at The App Ideas can also develop custom
                  widgets to leverage unique user experience for your Business
                  mobile app solutions.
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
                    src={Reactnative}
                    alt="React Native Integrations"
                    style={{ width: '50px' }}
                  />
                </div>
                <h5>
                  <a href="/services">React Native Integrations</a>
                </h5>
                <div className="text">
                  We are highly experienced in web and app development
                  technologies, so we can help you to integrate with React
                  Native features in your existing software solutions.
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
            <h2>Why Hire React Native app Developers from us?</h2>
            <p>
              In the market, we have established our reputation as one of the
              leading React Native app development with a wide spectrum of
              mobile app development projects across various niches. Here I am
              listing some of the reasons to hire React Native app developers
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
                    alt="EXPERIENCE AND EXPERTISE"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">EXPERIENCE AND EXPERTISE</a>
                </h5>
                <div className="text">
                  In The App Ideas, React Native developers have vast experience
                  and a rich reserve of skills for developing a React Native app
                  solution.
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
                    src={Integration}
                    alt="3rd Party API Integration"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">3rd Party API Integration</a>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  With the support of our expert React Native developers, you
                  can also integrate third-party API as per the business
                  requirements and help in boosting the user experience of the
                  app.
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
                    src={Powerful}
                    alt="Powerful Portfolio"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Powerful Portfolio</a>
                </h5>
                <div className="text">
                  Along with the years, we have worked on various projects and
                  have developed successful React Native applications from
                  different niches and categories.
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
                    src={Agile}
                    alt="Agile Methodology"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Agile Methodology</a>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  We strictly follow the agile methodology for project
                  development with the continuous iteration of the software
                  development. This will help you to easily track the software
                  progress.
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
                    alt="GAME DEVELOPMENT"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Free Maintenance Service</a>
                </h5>
                <div className="text">
                  After deployment of the project within the time periods, we
                  offer our clients three months of free maintenance and support
                  services.
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
                    src={Deliver}
                    alt="Deliver Secure App Solution"
                    style={{ width: '70px' }}
                  />
                </div>
                <h5>
                  <a href="/services">Deliver Secure App Solution</a>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  Along with deploying the best feature app solution to our
                  clients, we also ensure the security and privacy of the user
                  data.
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
        question="Do you want to know more about our React Native developers and
                  their expertise? Feel free to contact us."
      />
      {/* Contact Section End */}
    </>
  )
}

export default HireReactNativeDev
