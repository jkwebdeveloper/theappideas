import React from "react";
import "./about.css";
// import './assets/css/global.css'
// import './assets/css/style.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="main-title-uner-line">About Us</p>
                <div className="line"></div>
                <p className="title">
                  WEB & MOBILE APP DEVELOPMENT COMPANY
                </p>
                <p className="dec">
                  {`The App Ideas is the leading Web and Mobile App Development
                  Company that can help your business grow with innovative and
                  engaging solutions. We build cutting edge digital solutions
                  with a quick-engaging user interface and user experience.\n We
                  have a team of highly experienced as well as proficient Web
                  and Mobile App Developers as well as designers, who will first
                  understand and analyze our client’s requirements in a much
                  better way, to deliver the best solution for the success of
                  your business at the best price. We strictly follow the agile
                  methodology for web as well as Mobile app development and
                  divide projects into small milestones to reach every milestone
                  with client approval and confirmation.`}
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="main-title-uner-line-right">Our Achievements</p>
                <div className="line-right"></div>
                <div className="Achieve-box">
                    <div className="box">
                        <p className="box-text">Our Team</p>
                        <p className="team">50+</p>
                    </div>
                    <div className="box-blue">
                        <p className="box-text">Completed Projects</p>
                        <p className="team">50+</p>
                    </div>
                    <div className="box">
                        <p className="box-text">Mobile Apps</p>
                        <p className="team">50+</p>
                    </div>
                    <div className="box-blue">
                        <p className="box-text">Worked With Clients</p>
                        <p className="team">50+</p>
                    </div>
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
