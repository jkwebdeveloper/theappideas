import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import background from '../../../assets/images/Home-our-services/bg-download.svg'
import background1 from '../../../assets/images/Home-our-services/download (1).png'
import TestiMonial from '../../../components/Testimonial/TestiMonial'

import VRApplicationDeveloper from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/VRApplicationDeveloper.webp'
import Apps from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/Mobile-Apps-Development.png'
import Angular from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/Game-App-Development-Company.webp'

import Offer from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/1/Faster Software Development.svg'
import Features from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/1/Provide Customization.svg'
import Consulting from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/1/Offer Node.Js Consulting Services.svg'
import Secure from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/1/Complete And Secure Web Solutions.svg'
import Laravel from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/1/Node.Js Web And App Development.svg'
import Unit from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/1/Node.Js Features.svg'

import Expertise from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/2/Expertise In Cross Platforms.svg'
import Sophisticated from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/2/Robust Portfolio.svg'
import Implement from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/2/Best And Affordable Costing.svg'
import Affordable from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/2/On-Time Delivery.svg'
import Time from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/2/Agile Methodology.svg'
import Free from '../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/2/Support And Help.svg'
import { Link } from 'react-router-dom'
import ContactUs from '../../../components/ContactUs'
import HeroSection from '../../../components/HeroSection'

const HireNodeDev = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      {/* Banner Section Start */}
      <HeroSection
        title="Hire Node JS App Developers In India"
        des="Node js is a Software development platform that is open source and free server environment. The software platform developed in Node.js is compatible with various operating systems like Windows, Linux, Mac OS, and more. Node js is a Server-side platform for easily and quickly developing scalable network applications."
        list1="7+ Years of experience in App Development"
        list2="Best Node js development Company"
        list3="Dedicated team for your Node js development"
        list4="Complete Guidance from Designing to Deployment"
        service1="Node js Development"
        service2="Node js Development Company"
        service3="Node js Developer"
        image1={VRApplicationDeveloper}
        image2={Apps}
        image3={Angular}
      />
      {/* Banner Section End */}
      <section className="service__provide__section py-5">
        <div className="container">
          <div className="Title">
            <h3>Our Feat in Node JS Development</h3>
            <p>
              As a Best{' '}
              <Link
                to="/"
                className="Title_Color"
                style={{ color: '#d6aa0b' }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <b> software development company</b>
              </Link>{' '}
              , we are highly experienced as well as experts in delivering the
              best Node js web platforms solution to our clients. We have 4+
              years of experience in developing the best software solution at
              the best rates.
            </p>
            <p>
              Node js offers the various rich library of Javascript modules
              which simplifies the development of the web applications .Node js
              is a lightweight and efficient platform which helps in developing
              the best web application. The App Ideas is one of the experienced
              Node js development company and also deployed the best Node js
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
              <div className="work_head_box port_quiz">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Resipsausa</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="#" className="work_head_item">
                            E-Commerce
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require('../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/work-hand/quiz-1536x948.webp')}
                        alt="port-ecommerce-website"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_ecommerce-Device">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Purebodynaturals</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="#" className="work_head_item">
                            E-Commerce
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require('../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/work-hand/Device-Image-5-1536x948.webp')}
                        alt="port-ecommerce-website-one"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 mb-4">
              <div className="work_head_box port_mobilebg_Device">
                <a href="#" className="work_head_box_link"></a>
                <div className="row w-100">
                  <a href="#" className="work_head_box_link"></a>
                  <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="work_head_lft">
                      <a href="#" className="work_head_box_link">
                        <h2>Food Ordering Website</h2>
                      </a>
                      <ul className="ps-0">
                        <a href="#" className="work_head_box_link"></a>
                        <li>
                          <a href="#" className="work_head_box_link">
                            {' '}
                          </a>
                          <a href="#" className="work_head_item">
                            Hire Wordpress
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="#" className="work_head_item">
                            Web Development
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="#" className="work_head_item">
                            {' '}
                            Wordpress
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                    <div className="work_head_rht">
                      <img
                        src={require('../../../assets/images/HIRE US/Hire Web Developer/Hire Node JS App Developer/work-hand/Device-Image-50-1536x948.webp')}
                        alt="port-webdevelop-webiste-two"
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
            <h2>WHAT DO WE OFFER IN NODEJS DEVELOPMENT COMPANY?</h2>
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
                  <a href="/services">Node.Js Web And App Development</a>
                </h5>
                <div className="text">
                  Node.js is a free and open-source cross-platform development
                  technology that provides the convenient accessibility of the
                  features for building web and app solutions for business. We
                  have a team of highly skilled Node.js developers.
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
                  <a href="/services">Faster Software Development</a>
                </h5>
                <div className="text">
                  Node.js technology helps in providing faster software
                  development services. The features and functionality of
                  Node.js help developers to easily check their code which makes
                  the development much faster.
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
                  <a href="/services">Provide Customization</a>
                </h5>
                <div className="text">
                  We also work on the customization software development to
                  integrate all the required functionality in a single platform.
                  Some of the business wants to provide some unique features, we
                  can help in integrating the ideas in best possible ways.
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
                  <a href="/services">Offer Node.Js Consulting Services</a>
                </h5>
                <div className="text">
                  We also help you to get the Node.js expert advice to make the
                  choice of the features, templates, or themes as per your
                  services or industries. We also help you to get the best
                  function ideas which help in increasing the sales.
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
                  <a href="/services">Complete And Secure Web Solutions</a>
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
                  <a href="/services">Node.Js Features</a>
                </h5>
                <div className="text">
                  We are experts and highly skilled Node.js development
                  services, which also helps in integrating node.js features
                  into an existing app and web applications for your industry.
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
            <h2>WHY HIRE NODE JS APP DEVELOPERS FROM US?</h2>
            <p>
              Node.js framework is a lightweight and free technology platform
              that offers various Javascript libraries to offer advanced cross
              platforms services to you. Our Node.js developers are highly
              skilled and there are various reasons to choose us for Node.js
              software development.
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
                  <a href="/services">Expertise In Cross Platforms</a>
                </h5>
                <div className="text">
                  As this Node.js also provides the services to develop cross
                  platforms technology, we have a team of experts who have
                  proven their expertise by developing both website and apps
                  projects.
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
                  <a href="/services">Robust Portfolio</a>
                </h5>
                <div className="text" style={{ marginBottom: '-26px' }}>
                  With 4+ years of experience, we have worked on various Node.js
                  projects and Successful platforms for different categories or
                  niches.
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
                  <a href="/services">Best And Affordable Costing</a>
                </h5>
                <div className="text">
                  We offer the best competitive pricing based on the software
                  requirements like the features, modules, functionality, and
                  more. We offer affordable pricing without compromising the
                  quality of projects.
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
                  <a href="/services">On-Time Delivery</a>
                </h5>
                <div className="text" style={{ marginBottom: '-25px' }}>
                  Along with the quotation or the costing of software
                  development, we also provide the timeline based on the
                  requirements. We strictly follow the timeline and deliver the
                  services on time.
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
                  <a href="/services">Agile Methodology</a>
                </h5>
                <div className="text">
                  We follow the agile methodology for software development which
                  will be very helpful for tracking down the progress of the
                  projects as the projects are divided into milestones.
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
                  <a href="/services">Support And Help</a>
                </h5>
                <div className="text" style={{ marginBottom: '25px' }}>
                  Along with the quality of the software and on-time delivery of
                  the services, after deployment, we offer support and
                  maintenance to our clients.
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
        question="Do you want to know more about our Node js Developers and
                  their expertise? Feel free to contact us."
      />
      {/* Contact Section End */}
    </>
  )
}

export default HireNodeDev
