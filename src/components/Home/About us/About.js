import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-heading">
              <h2>About us</h2>
            </div>
            <p className="about-text">WEB & MOBILE APP DEVELOPMENT COMPANY</p>
            <p style={{ textAlign: 'justify' }}>
              The App Ideas is the leading Web and Mobile App Development
              Company that can help your business grow with innovative and
              engaging solutions. We build cutting edge digital solutions with a
              quick-engaging user interface and user experience.
            </p>
            <p style={{ textAlign: 'justify' }}>
              We have a team of highly experienced as well as proficient Web and
              Mobile App Developers as well as designers, who will first
              understand and analyze our client’s requirements in a much better
              way, to deliver the best solution for the success of your business
              at the best price. We strictly follow the agile methodology for
              web as well as Mobile app development and divide projects into
              small milestones to reach every milestone with client approval and
              confirmation.
            </p>
            <Link
              to="/about-us"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="find_more_btn">Find out More</div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="About-left-heading">
              <h2>Our Achievements</h2>
            </div>

            <section
              className="Portfolio_section_wrapper"
              style={{ paddingTop: '50px' }}
            >
              <div className="achievements__section">
                <div className="achievements_box">
                  <p>Our Team</p>
                  <h4>50+</h4>
                </div>
                <div className="achievements_box achievements_box_top">
                  <p>Completed Projects</p>
                  <h4>350+</h4>
                </div>
                <div className="achievements_box">
                  <p>Mobile Apps</p>
                  <h4>150+</h4>
                </div>
                <div className="achievements_box achievements_box_top">
                  <p>Worked With Clients</p>
                  <h4>200+</h4>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
