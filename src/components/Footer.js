import React from 'react'
// import './footer.css'
import { MdLocationPin } from 'react-icons/md'
import {
  BsDribbble,
  BsFillTelephoneFill,
  BsInstagram,
  BsSkype,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { RiArrowRightSLine, RiFacebookFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import appdeveloper from '../assets/images/Footer/app-development-img.svg'
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineBehance } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Get in Touch</h2>
              <p>
                <i className="location_map" aria-hidden="true">
                  <MdLocationPin />
                </i>
                <span>
                  FO-6, Raspan Arcade, Near Rajhans Cinema, Nikol-Naroda,
                  Ahmedabad-382350.
                </span>
              </p>
              <ul className="ms-2">
                <li>
                  <a
                    href="mailto:contact@theappideas.com"
                    style={{ color: 'black' }}
                  >
                    <i style={{ marginRight: '10px' }}>
                      <GoMail style={{ color: '#d6aa0b' }} />
                    </i>
                    <span>contact@theappideas.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+918866564279" style={{ color: 'black' }}>
                    <i style={{ marginRight: '10px' }}>
                      <BsFillTelephoneFill style={{ color: '#d6aa0b' }} />
                    </i>
                    <span>+91 8866564279</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=918866564279"
                    target="_blank"
                    style={{ color: 'black' }}
                  >
                    <i style={{ marginRight: '10px' }}>
                      <BsWhatsapp style={{ color: '#d6aa0b' }} />
                    </i>
                    <span>Whats App Me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="skype:chirag4141"
                    target="_blank"
                    style={{ color: 'black' }}
                  >
                    <i style={{ marginRight: '10px' }}>
                      <BsSkype style={{ color: '#d6aa0b' }} />
                    </i>
                    <span>Skype</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Quick Links</h2>
              <ul>
                <Link to="/">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Home
                  </li>
                </Link>
                <Link to="/about-us">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    About Us
                  </li>
                </Link>
                <Link to="/portfolio">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Portfolio
                  </li>
                </Link>
                <Link to="/blog">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Blog
                  </li>
                </Link>
                <Link to="/contact-us">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Contact Us
                  </li>
                </Link>
                <Link to="/testimonial">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Testimonial
                  </li>
                </Link>
                <Link to="/careers">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Careers{' '}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Services</h2>
              <ul>
                <Link to="/mobile-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Mobile App Development
                  </li>
                </Link>
                <Link to="/iot-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    IOT Development
                  </li>
                </Link>
                <Link to="/web-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Web Design &amp; Development
                  </li>
                </Link>
                <Link to="/e-commerce-website-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    E-commerce Development
                  </li>
                </Link>
                <Link to="/testimonial">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Testimonial
                  </li>
                </Link>
                <Link to="/hire-us">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Hire A Developer
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Solutions</h2>
              <ul>
                <Link to="/dating-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Dating App
                  </li>
                </Link>
                <Link to="/lawyer-website-solution">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Lawyer Website Solution
                  </li>
                </Link>
                <Link to="/driver-tracking-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Driver Tracking App Solution
                  </li>
                </Link>
                <Link to="/e-commerce-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Ecommerce App Solution
                  </li>
                </Link>
                <Link to="/e-learning-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Elearning Website Solution
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">On Demand Apps</h2>
              <ul>
                <Link to="/taxi-booking-app-development">
                  <li>
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Taxi Booking App
                  </li>
                </Link>
                <Link to="/security-app-solution">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Security Guard App
                  </li>
                </Link>
                <Link to="/food-delivery-app-development">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Food Delivery App
                  </li>
                </Link>
                <Link to="/doctor-hiring-app-solution">
                  <li
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                  >
                    <i className="right__arrow">
                      <RiArrowRightSLine />
                    </i>{' '}
                    Doctor Hiring App
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-6">
            <div className="footer__box">
              <h2 className="footer_title">Awards and Accolades</h2>
              <div className="footer__awards">
                <ul>
                  <li>
                    <a
                      href="https://www.goodfirms.co/company/the-app-ideas"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <img
                        src={appdeveloper}
                        alt="app-development-img"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.freelancer.com/u/Theappideas"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <img
                        src={require('../assets/images/Footer/freelancer-logo-1.webp')}
                        alt="freelancer-logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.peopleperhour.com/freelancer/technology-programming/app_ideas_infotech_pvt_ltd-panchal-full-stack-developer-web-app-znjmyqw"
                      target="_blank"
                      className="footer__awards_achor"
                    >
                      <img
                        src={require('../assets/images/Footer/pph_new.webp')}
                        alt="pph_new"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.upwork.com/ag/theappideas/"
                      className="footer__awards_achor"
                      target="_blank"
                    >
                      <img
                        src={require('../assets/images/Footer/upwork_new.webp')}
                        alt="upwork_new"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__awards_achor"></a>
                    <div className="d-flex">
                      <a href="#" className="footer__awards_achor">
                        <div>
                          <img
                            src={require('../assets/images/Footer/clutch-logo.png')}
                            alt="app-development-img"
                            className="img-fluid"
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="footer__box">
              <h2 className="footer_title">Follow us</h2>
              <div className="social__footer">
                <a href="https://www.facebook.com/Theappideas/" target="_blank">
                  <RiFacebookFill />
                </a>
                <a href="https://twitter.com/theappidea" target="_blank">
                  <BsTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/theappideas/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_18zGzO_zpXkKiy1WXi4oA"
                  target="_blank"
                >
                  <AiFillYoutube />
                </a>
              </div>
              <div className="social__footer social__footer_one">
                <a href="https://dribbble.com/theappideas" target="_blank">
                  <BsDribbble />
                </a>
                <a href="https://www.behance.net/theappidea" target="_blank">
                  <AiOutlineBehance />
                </a>
                <a
                  href="https://www.instagram.com/theappideas/"
                  target="_blank"
                >
                  <BsInstagram />
                </a>
                <a href="https://in.pinterest.com/theappidea/" target="_blank">
                  <FaPinterestP />
                </a>
              </div>
              <div className="footer__sitemap my-3">
                <Link
                  to="/sitemap"
                  className="sitemap_btn"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
