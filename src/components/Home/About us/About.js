import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-heading">
              <span>About us</span>
              <div className="underline"></div>
            </div>
            <p className="about-text">WEB & MOBILE APP DEVELOPMENT COMPANY</p>
            <p>
              The App Ideas is the leading Web and Mobile App Development
              Company that can help your business grow with innovative and
              engaging solutions. We build cutting edge digital solutions with a
              quick-engaging user interface and user experience.
            </p>
            <p>
              We have a team of highly experienced as well as proficient Web and
              Mobile App Developers as well as designers, who will first
              understand and analyze our client’s requirements in a much better
              way, to deliver the best solution for the success of your business
              at the best price. We strictly follow the agile methodology for
              web as well as Mobile app development and divide projects into
              small milestones to reach every milestone with client approval and
              confirmation.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="About-left-heading">
              <span>Our Achievements</span>
              {/* <div className="underline-1"></div> */}
            </div>
            <div className="row">
              <div className="col-6">
                <div className="out-box my-3">
                  <p>Our Team</p>
                  <p>50+</p>
                </div>
                <div className="out-box-blue">
                  <p>Completed Projects</p>
                  <p>350+</p>
                </div>
              </div>
              <div className="col-6">
              <div className="out-box-blue my-3">
                  <p>Mobile Apps</p>
                  <p>150+</p>
                </div>
                <div className="out-box">
                  <p>Worked With Clients</p>
                  <p>200+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
