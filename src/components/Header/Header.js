import React, { useEffect, useState } from 'react'
import './header.css'
import { AiOutlineClose } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiArrowRightSLine, RiMenu3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = ({ setOpenModal }) => {
  const [sticky, setSticky] = useState('')
  

  // on render, set listener
  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 80 ? 'sticked' : ''
    setSticky(stickyClass)
  }
  return (
    <header
      className={`header__section fixed-top ${sticky}`}
      data-scrollto-offset={0}
    >
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img
                src={require('../../assets/images/Header/logo.png')}
                alt="logo"
                className="img-fluid"
                // style={{ height: '60px ' }}
              />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <AiOutlineClose />
            </label>
            {/* company */}
            <li>
              <a href="/" className="desktop-item">
                Company <MdKeyboardArrowDown />
              </a>

              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Company <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/about-us">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          {' '}
                          <img
                            src={require('../../assets/images/Header/Company/About Us.gif')}
                            alt="About-us"
                          />{' '}
                          About Us
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/our-process">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          {' '}
                          <img
                            src={require('../../assets/images/Header/Company/Our Process.gif')}
                            alt="Our-Team"
                          />{' '}
                          Our Process
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/our-team">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          {' '}
                          <img
                            src={require('../../assets/images/Header/Company/Our Team.gif')}
                            alt="Our-Team"
                          />{' '}
                          Our Team
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="content content_sub">
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/testimonial">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          {' '}
                          <img
                            src={require('../../assets/images/Header/Company/Testimonial.gif')}
                            alt="Testamonials"
                          />
                          Testimonial
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/careers">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          {' '}
                          <img
                            src={require('../../assets/images/Header/Company/Careers.gif')}
                            alt="Carrers"
                          />{' '}
                          Careers
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <a href="/life-at-tai">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          {' '}
                          <img
                            src={require('../../assets/images/Header/Company/Life at TAI.gif')}
                            alt="Life-at-TAI"
                          />{' '}
                          Life at TAI
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a
                          href="/careers"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <div className="menu_contact_btn">Join Our Team</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* services */}
            <li>
              <a href="#">
                <div className="desktop-item">
                  Services <MdKeyboardArrowDown />{' '}
                </div>
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                Services <MdKeyboardArrowDown />{' '}
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <a
                      href="/mobile-app-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/Mobile App Development.gif')}
                          alt="Mobile-App-Development"
                        />
                        Mobile App Development
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/android-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Android App Development
                        </li>
                      </a>
                      <a href="iphone-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IPhone App Development
                        </li>
                      </a>
                      <a href="/ipad-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IPad App Development
                        </li>
                      </a>
                      <a href="/react-native-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          React Native Development
                        </li>
                      </a>

                      <a href="/iot-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          IOT App Development
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="row">
                    <a
                      href="/digital-marketing-agency"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/Digital Marketing Agency.gif')}
                          alt="Digital-Marketing-Agency"
                        />{' '}
                        Digital Marketing Agency
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/seo">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          SEO
                        </li>
                      </a>
                      <a href="/social-media-marketing">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Social Media Marketing
                        </li>
                      </a>
                      <a href="/aso">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          ASO
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <a
                      href="/e-commerce-website-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/E-commerce website Development.gif')}
                          alt="E-commerce-website-Development"
                        />{' '}
                        E-commerce Website Development
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/shopify-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Shopify Development
                        </li>
                      </a>
                      <a href="/magento-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Magento Development
                        </li>
                      </a>
                      <a href="/joomla-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Joomla Development{' '}
                        </li>
                      </a>
                      <a href="/drupal-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Drupal Development{' '}
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <a
                      href="/web-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/Web Development.gif')}
                          alt="Web-Development"
                        />{' '}
                        Web Development
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/wordpress-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          WordPress Development
                        </li>
                      </a>
                      <a href="/php-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          PHP Development
                        </li>
                      </a>
                      <a href="/angular-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Angular Development
                        </li>
                      </a>
                      <a href="/webflow-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Webflow Development
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div
                  className="content_last content "
                  style={{ justifyContent: 'flex-start', padding: '10px 13px' }}
                >
                  <div
                    className="row responsive_width"
                    style={{ width: '28%' }}
                  >
                    <a
                      href="/software-development"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/Software Development.gif')}
                          alt="Software-Development"
                        />
                        software development
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/asp-net-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Asp.Net Development
                        </li>
                      </a>
                      <a href="/dotnetnuke-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          DotNetNuke Development
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: '28%' }}
                  >
                    <a
                      href="/designing-services"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/Designing Services.gif')}
                          alt="Designing-Services"
                        />
                        Designing services
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/graphics-design">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Graphics Design
                        </li>
                      </a>
                      <a href="/mobile-app-design">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Mobile App Design
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: '28%' }}
                  >
                    <a>
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Services/Other Services.gif')}
                          alt="Other-Services"
                        />
                        Other Services
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/startup-services">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Startup Services
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>Would you like to execute any project?</h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a
                          href="/contact-us"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* hire us */}
            <li>
              <a
                href="/hire-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="desktop-item">
                  Hire Us <MdKeyboardArrowDown />{' '}
                </div>
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                Hire Us <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <h4>
                      {' '}
                      <img
                        src={require('../../assets/images/Header/Hire Us/Hire Mobile App Developer.gif')}
                        alt="Hire-Mobile-App-Development"
                      />
                      Hire Mobile App Development
                    </h4>
                    <ul className="mega-links">
                      <a href="/hire-ios-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire IOS Developer
                        </li>
                      </a>
                      <a href="/hire-android-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Android Developer
                        </li>
                      </a>
                      <a href="/hire-react-native-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire React Native Developer
                        </li>
                      </a>
                      <a href="/hire-flutter-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Flutter Developer
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {' '}
                      <img
                        src={require('../../assets/images/Header/Hire Us/Hire Web Developer.gif')}
                        alt="Hire-Web-Development"
                      />
                      Hire Web Developer
                    </h4>
                    <ul className="mega-links">
                      <a href="/hire-laravel-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Laravel Developer
                        </li>
                      </a>
                      <a href="/hire-wordpress-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire WordPress Developer
                        </li>
                      </a>
                      <a href="/hire-nodejs-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Node.js Developer
                        </li>
                      </a>
                      <a href="/hire-codeigniter-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire CodeIgniter Developer
                        </li>
                      </a>
                      <a href="/hire-php-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire PHP Developers
                        </li>
                      </a>
                      <a href="/hire-python-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Python Developer
                        </li>
                      </a>
                      <a href="/hire-reactjs-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire React JS Developer
                        </li>
                      </a>
                      <a href="/hire-angular-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Angular 2 Developer
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {' '}
                      <img
                        src={require('../../assets/images/Header/Hire Us/Hire E-commerce Developer.gif')}
                        alt="Hire-Ecommerce-Developer"
                      />
                      Hire E-commerce Developer
                    </h4>
                    <ul className="mega-links">
                      <a href="/hire-shopify-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Shopify Development
                        </li>
                      </a>
                      <a href="/hire-magento-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Hire Magento 2 Development
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div className="row">
                    <h4>
                      {' '}
                      <img
                        src={require('../../assets/images/Header/Hire Us/Hire Designer.gif')}
                        alt="Hire-Designer"
                      />
                      Hire Designer
                    </h4>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>
                          Are you looking for an experience resource for your
                          project?
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a
                          href="/hire-us"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <div className="menu_contact_btn">
                            Hire Our Developer{' '}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* solutions */}
            <li>
              <a href="/solutions">
                <div className="desktop-item">
                  Solutions <MdKeyboardArrowDown />{' '}
                </div>
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Solutions <MdKeyboardArrowDown />
              </label>
              <div className="mega-box">
                <div className="content">
                  <div
                    className="row responsive_width"
                    style={{ width: '32%' }}
                  >
                    <a>
                      <h4>
                        {' '}
                        <img
                          src={require('../../assets/images/Header/Solutions/Delivery App.gif')}
                          alt="Delivery-App"
                        />
                        Delivery Apps
                      </h4>
                    </a>
                    <ul className="mega-links">
                      <a href="/food-delivery-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          {/* <IoMdArrowDropright /> */}
                          Food Delivery App Development
                        </li>
                      </a>
                      <a href="/courier-pickup-management-solution">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Courier Pickup Management Solution
                        </li>
                      </a>
                      <a href="/grocery-app-developer">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Grocery App Development
                        </li>
                      </a>{' '}
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: '32%' }}
                  >
                    <h4>
                      {' '}
                      <img
                        src={require('../../assets/images/Header/Solutions/On Demand Apps.gif')}
                        alt="On-Demand-Apps"
                      />
                      On-Demand Apps
                    </h4>
                    <ul className="mega-links">
                      <a href="/taxi-booking-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Taxi Booking App Development
                        </li>
                      </a>
                      <a href="/doctor-hiring-app-solution">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Doctor Hiring App Solution
                        </li>
                      </a>
                      <a href="/security-app-solution">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Security App Solution
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div
                    className="row responsive_width"
                    style={{ width: '32%' }}
                  >
                    <h4>
                      {' '}
                      <img
                        src={require('../../assets/images/Header/Solutions/Popular Solutions.gif')}
                        alt="Popular-Solutions"
                      />
                      Popular Solutions
                    </h4>
                    <ul className="mega-links">
                      <a href="/e-commerce-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          eCommerce App Development
                        </li>
                      </a>
                      <a href="/e-learning-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          E-learning App Development
                        </li>
                      </a>
                      <a href="dating-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Dating App Development
                        </li>
                      </a>
                      <a href="/driver-tracking-app-development">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Driver Tracking App Development
                        </li>
                      </a>
                      <a href="/salon-service-app">
                        <li
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <i className="right__arrow">
                            <RiArrowRightSLine />
                          </i>
                          Salon Service App
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="menu_bottom_content_box">
                  <div className="row align-items-center py-3">
                    <div className="col-md-8">
                      <div className="menu_bottomm_content_left">
                        <h4>
                          Would you like to know more about our ready made
                          solution?
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu_bottomm_content_rht">
                        <a
                          href="/contact-us"
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                        >
                          <div className="menu_contact_btn">Contact Us </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* portoflio */}
            <li>
              <a
                href="/portfolio"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Portfolio
              </a>
            </li>
            {/* contact us */}
            <li>
              <a
                href="/contact-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Contact Us
              </a>
            </li>
            {/* blog */}
            <li>
              <a
                href="/blog"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Blog
              </a>
            </li>
            {/* get a quote */}
            <li
              onClick={() => setOpenModal(true)}
              style={{ cursor: 'pointer' }}
            >
              <div className="quote_btn btn-1 hover-filled-opacity close-btn">
                <span>GET A QUOTE</span>
              </div>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <RiMenu3Line style={{ fontSize: '27px' }} />
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header
