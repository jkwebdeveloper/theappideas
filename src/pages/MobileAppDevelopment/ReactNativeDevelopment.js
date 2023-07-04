import React, { useState } from 'react'

import iphone1 from '../../assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Company.png'
import iphone2 from '../../assets/images/MobileAppDev/IPhone App/IPhone-App-Development-Service.png'
import iphone3 from '../../assets/images/MobileAppDev/IPhone App/IPhone-Application-Development.png'

import Experience from '../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Competitive price.svg'
import Robust from '../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Robust Portfolio.svg'
import Lifecycle from '../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Full Lifecycle support.svg'
import Agile from '../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Agile Development.svg'
import Fast from '../../assets/images/MobileAppDev/Android App Development Company/Why Choose/Fast-paced development.svg'
import deadline from '../../assets/images/SERVICES/Mobile-App-dev/React-Native-App/deadline.png'

import TestiMonial from '../../components/Testimonial/TestiMonial'
import FAQ from '../../components/FAQ'
import { Link } from 'react-router-dom'
import ContactUs from '../../components/ContactUs'
import HeroSection from '../../components/HeroSection'
import { Helmet } from 'react-helmet'

const ReactNativeDevelopment = () => {
  const [activeService, setActiveService] = useState('cross_platform')
  const [activeWhyChoose, setActiveWhyChoose] = useState('experience_expertise')

  return (
    <>
      <Helmet title="React Native App Development Company India - The App Ideas" />
      {/* Banner Section Start */}
      <HeroSection
        title="React Native App Development"
        des="The App Ideas is one of the leading web and app development company. We are highly expert in providing the best software services including the IOS service platforms like iPad app development service. We also offer custom iPad app development which can be very helpful for your business at the best possible rates."
        list1="7+ Years of experience in App Development"
        list2="Best React Native App Development Company"
        list3="Dedicated team for your React Native App Development"
        list4="Complete Guidance from Designing to Deployment"
        service1="React Native App Development"
        service2="Create React Native App"
        service3="React Native Development Company"
        image1={iphone1}
        image2={iphone2}
        image3={iphone3}
      />
      {/* Banner Section End */}
      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>React Native App Development Company India</h3>
            <p>
              React Native is a highly popular and demanding Cross-platform
              Technology in this digital time. React Native is an open-source
              Javascript framework that allows building native apps using the
              Javascript functionality and it also reduces the cost as well as
              time for developing the mobile app for both the Operating System,
              Android and IOS. React Native is considered as a future of hybrid
              development.
            </p>
          </div>
          <div className="row mt-5">
            {/* left side boxes */}
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="row">
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService('cross_platform')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'cross_platform' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../assets/images/MobileAppDev/Android App Development Company/Android App/Website-Redesign.png')}
                      alt="Custom-Mobile-App-Development"
                      className="img-fluid"
                    />
                    <p>Cross-Platform Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService('native_web')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'native_web' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-235.png')}
                      alt="Android-Enterprise-App-Development"
                      className="img-fluid"
                    />
                    <p>Native Web Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService('consulting_service')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'consulting_service' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../assets/images/MobileAppDev/Android App Development Company/Android App/icons8-smart-watch-100-1.png')}
                      alt="Android-Wearable-App-Development"
                      className="img-fluid"
                    />
                    <p>Consulting Services</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService('ui_ux')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'ui_ux' && 'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-53.png')}
                      alt="Android-Game-App-Development"
                      className="img-fluid"
                    />
                    <p>UI/UX Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService('react_native_integration')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'react_native_integration' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../assets/images/MobileAppDev/Android App Development Company/Android App/Group-184.png')}
                      alt="Android-App-Redesign"
                      className="img-fluid"
                    />
                    <p>React Native Integration</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveService('support_maintenance')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeService === 'support_maintenance' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={require('../../assets/images/MobileAppDev/Android App Development Company/Android App/Mask-Group.png')}
                      alt="Android-Support-And-Maintenance"
                      className="img-fluid"
                    />
                    <p>Support And Maintenance</p>
                  </a>
                </div>
              </div>
            </div>
            {/* right side content */}
            {/* cross platform */}
            {activeService === 'cross_platform' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      React Native Cross-Platform App Development
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and
                      <Link
                        to="/mobile-app-development"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                      >
                        <b> app development company.</b>
                      </Link>
                      app development company. We are highly expert in offering
                      the best software solution including the React Native app
                      development. If we talk about the React native
                      Cross-platform app development services then this is one
                      of the most demanding things in the market because using
                      this technology the app owners can target various
                      operating system users with a single platform.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the popular React Native app
                      development company. We have a team of a highly talented
                      pool for the cross-platform app development services who
                      will offer the best solution for a cross platforms app
                      Development using the React native Technology. We use the
                      React Native framework to develop custom features, native
                      and cross-platform mobile apps with beautiful user
                      interfaces and a smooth user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* native web */}
            {activeService === 'native_web' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Native Web Development.</h3>
                    <p className="Title_para">
                      We are from The App Ideas which is a leading software
                      development company. We are highly experienced in offering
                      the best software solution along with a successful mobile
                      app solution for all business categories and niches. In
                      this present time, people are more inclined towards online
                      platforms for accessing all kinds of services.
                    </p>
                    <p className="Title_para">
                      We have a team of highly skilled developers and designers
                      who will offer the best solutions as well as support to
                      our clients. React Native is also used for Native web
                      development. With React Native we develop sophisticated
                      and feature-rich responsive native apps for a variety of
                      niches and categories.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* consulting service */}
            {activeService === 'consulting_service' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      React Native Consulting Services.
                    </h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. Along with website development and
                      web app development, we also offer the best mobile app
                      development services for the native as well as for
                      cross-platform technology. The demand for software
                      services is getting popular day by day in the market
                    </p>
                    <p className="Title_para">
                      We at The App Ideas offers development services as well as
                      consulting services as per the client’s requirements. We
                      are highly expert in providing the best software
                      development services and also skilled in offering React
                      Native technology for mobile app development with the
                      proper consultancy. Having decades of experience and
                      expertise with React native framework we also help clients
                      with proper consultation and guidelines for building React
                      native apps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* ui & ux */}
            {activeService === 'ui_ux' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">
                      React Native UI/UX Development
                    </h3>
                    <p className="Title_para">
                      We are from The App Ideas which is a leading software
                      development company and also offers the best design (UI/UX
                      designing). Designing plays a vital role in the success of
                      any mobile app or startup because this is how you can
                      attract high users into your services and expand your
                      business easily.
                    </p>
                    <p className="Title_para">
                      The App Ideas has a team of highly skilled UI/UX designers
                      who will offer the best and unique design services at the
                      best possible rates. We have an experienced pool of UI/UX
                      designers who are experts to provide the best for
                      different business categories. If you have a mobile app up
                      and running that lacks native capabilities we can always
                      help you with value additions for native UI/UX
                      development.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* react_native_integration */}
            {activeService === 'react_native_integration' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">React Native Integration</h3>
                    <p className="Title_para">
                      React Native is one of the most popular technology in the
                      market. React native is mainly used for cross-platform
                      development. Cross platforms are highly popular in the
                      market because this provides a single app for the
                      different operating system. If you are targeting android
                      as well as IOS users then this technology is for you.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      developers as well as designers who are proficient in
                      integrating React Native in an existing business app
                      solution. We also help our clients with React Native
                      integration to their exerting mobile apps for the more
                      native look, feel and user experience.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* support_maintenance */}
            {activeService === 'support_maintenance' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Support and maintenance</h3>
                    <p className="Title_para">
                      If we talk about the popularity of mobile apps then we can
                      clearly see that mobile apps are getting highly demanded
                      in the market. People are loving the mobile app for
                      accessing all kinds of services easily as well as
                      conveniently at their time from any place. This is why as
                      a business owner or entrepreneur it is very important for
                      you to launch your mobile app in the market.
                    </p>
                    <p className="Title_para">
                      We at The App Ideas offers the best cross platforms for
                      mobile app development services. We have a team of highly
                      skilled react native developers who will offer the best
                      cross platforms development services. We offer
                      comprehensive post-development support for all React
                      Native based mobile apps with timely value additions and
                      updates.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Service Section End */}

      {/* Work Head done Section Start */}
      <section className="work_head_section py-5">
        <div className="container">
          <div className="Title">
            <h3>Work we had done</h3>
          </div>
          <div className="row mt-5">
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port-mobile-one">
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
                        // src={("assets/img/port-webdevelop-webiste.webp")}
                        src={require('../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-three.webp')}
                        alt="port-mobile-app-mobile-thirteen"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port-mobile-two">
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
                        src={require('../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-twenty.webp')}
                        alt="Device-Image-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port-mobile-three">
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
                        src={require('../../assets/images/MobileAppDev/React Native App/port-mobile-app-mobile-twentyfive.webp')}
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
      {/* Work Head done Section End */}

      {/* Service Section Start */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>
              Why Choose App Ideas For React Native App Development Company?
            </h3>
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
                      src={Experience}
                      alt="Experience-and-Expertise."
                      className="img-fluid"
                    />
                    <p>Experience and Expertise.</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('unmatched_protfolio')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'unmatched_protfolio' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={Robust}
                      alt="Robust-Portfolio"
                      className="img-fluid"
                    />
                    <p>Unmatched Portfolio</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('dynamic_capabilities')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'dynamic_capabilities' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    <img
                      src={Lifecycle}
                      alt="Full-Lifecycle-Support"
                      className="img-fluid"
                    />
                    <p>Dynamic Capabilities</p>
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
                      src={Agile}
                      alt="Agile-Development"
                      className="img-fluid"
                    />
                    <p>Agile Development</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('competitive_pricing')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'competitive_pricing' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <img
                      src={Fast}
                      alt="Fast-Paced-Development"
                      className="img-fluid"
                    />
                    <p>Competitive Pricing</p>
                  </a>
                </div>
                <div
                  className="col-12 col-6 col-sm-6 col-md-6 col-lg-4 mb-4"
                  onClick={() => setActiveWhyChoose('sticking_to_deadlines')}
                >
                  <a
                    href="##"
                    className={`service__provide_tab ${
                      activeWhyChoose === 'sticking_to_deadlines' &&
                      'service__provide_tab_active'
                    } `}
                  >
                    {' '}
                    <img
                      src={deadline}
                      alt="Sticking-To-Deadlines"
                      className="img-fluid"
                    />
                    <p>Sticking To Deadlines</p>
                  </a>
                </div>
              </div>
            </div>
            {activeWhyChoose === 'experience_expertise' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Experience and Expertise.</h3>
                    <p className="Title_para">
                      We are from{' '}
                      <Link
                        to="/"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                      >
                        <b>The App Ideas</b>
                      </Link>{' '}
                      is a leading web and app development company. We offer
                      website development services as well as the best iPad App
                      development service which will helps businesses to grow
                      and increase the engagement of the users towards your
                      services.
                    </p>
                    <p className="Title_para">
                      Before hiring any software development company, it is very
                      important for you to know the expertise of the team. We
                      offer a talented pool of Ipad developers having years of
                      experience proven expertise and great credentials.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'unmatched_protfolio' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Unmatched Portfolio</h3>
                    <p className="Title_para">
                      If you are planning to launch a cross-platform mobile app
                      in the market using React Native technology then it is
                      very important for you that before hiring check the
                      portfolio of the software development company. It is a
                      must require to check the past projects to get a clear
                      understanding of the expertise in React Native app
                      development.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the leading web and app
                      development company. We have a team of highly skilled
                      React Native developers who offer the best solution for
                      all types of business categories including customization.
                      We have a robust and unmatched portfolio of too many
                      successful React Native apps developers over years for all
                      niches and categories.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'dynamic_capabilities' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Dynamic Capabilities</h3>
                    <p className="Title_para">
                      The App Ideas is one of the most popular and successful
                      software development services which includes mobile app
                      development, web app development and website development.
                      If you are planning to launch a successful React Native
                      mobile app in the market then choose us.
                    </p>
                    <p className="Title_para">
                      We are highly expert as well as experienced in offering
                      the best software solution and satisfy our clients with
                      our designing as well as development services. We boast
                      dynamic capabilities to utilise the power of React Native
                      framework and have built a wide array of successful and
                      feature-rich apps with the framework.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'agile_development' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Agile development</h3>
                    <p className="Title_para">
                      If we check the market then there are thousands of mobile
                      app solutions available in the market. So it is very
                      important for you to check the market before developing
                      your business mobile app. If you are planning to target a
                      high number of users then it is highly recommended to
                      choose React Native Technology for cross mobile app
                      development.
                    </p>
                    <p className="Title_para">
                      We are from The App Ideas which is one of the most popular
                      web and app development company. Our developer’s team
                      strictly follow the agile methodology for every software
                      development. We follow the agile development process to
                      ensure optimum speed, accuracy, precision and
                      sophistication in mobile app development with a positive
                      impact on development cost and time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'competitive_pricing' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Competitive Pricing</h3>
                    <p className="Title_para">
                      If you have already made your mind to launch to cross
                      platforms technology using React Native Technology then
                      this is the right time for you to make an investment. You
                      will target Android users as well as IOS users with a
                      single mobile app platform. A better mobile app can help
                      you to stand out differently among the competitions and
                      increase user engagement.
                    </p>
                    <p className="Title_para">
                      The App Ideas is one of the most popular software
                      development company. We have a team of proficient React
                      Native app developers who offer the best solution. We
                      offer to React Native development services at a
                      tremendously competitive rate as per the industry standard
                      while always making sure that we don’t compromise with the
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWhyChoose === 'sticking_to_deadlines' && (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div className="service_rht">
                  <div className="Title">
                    <h3 className="Title_heading">Sticking to deadlines</h3>
                    <p className="Title_para">
                      We are from The App Ideas, which is a leading web and app
                      development company. We offer the best web and mobile app
                      development services for different business categories. We
                      strictly follow the agile methodology as well as sticking
                      to the deadlines for the deployment of the best mobile app
                      services to our clients.
                    </p>
                    <p className="Title_para">
                      As we follow the agile methodology, we divide the project
                      into small milestones, so we can work on the project in
                      parts and ask for confirmation from the clients before
                      moving further. We help our companies lead in respect of
                      faster time to market by strictly completing the projects
                      within deadlines and maintaining project milestones.
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

      <ContactUs question="Are you planning to launch a Successful React Native Mobile app in the market?" />
      {/* Contact Section End */}
    </>
  )
}

export default ReactNativeDevelopment
