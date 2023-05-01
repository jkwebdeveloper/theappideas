import React from "react";
import "./About.css";

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
              <h2>Our Achievements</h2>
            </div>

            <section className="Portfolio_section" style={{paddingBottom:'25px'}}>
              <div className="achievements_box" style={{paddingTop:'80px'}}>
                <div className="square">
                  <div className="circle">
                    <img
                      src={require("../../../assets/images/About-us/team.png")}
                      alt="team"
                      className="img-fluid"
                    />
                  </div>
                  <div className="triagle" />
                  <p className="text">Our Team</p>
                  <h2>50 +</h2>
                </div>
                <div className="square">
                  <div className="circle">
                    <img
                      src={require("../../../assets/images/About-us/Completed-Projects.png")}
                      alt="Completed-Projects"
                      className="img-fluid"
                    />
                  </div>
                  <div className="triagle" />
                  <p className="text">Completed Projects</p>
                  <h2>350 +</h2>
                </div>
                <div className="square">
                  <div className="circle">
                    <img
                      src={require("../../../assets/images/About-us/Mobile-Apps.png")}
                      alt="Mobile-Apps"
                      className="img-fluid"
                    />
                  </div>
                  <div className="triagle" />
                  <p className="text">Mobile Apps</p>
                  <h2>150 +</h2>
                </div>
                <div className="square">
                  <div className="circle">
                    <img
                      src={require("../../../assets/images/About-us/Worked-With-Clients.png")}
                      alt="Worked-With-Clients"
                      className="img-fluid"
                    />
                  </div>
                  <div className="triagle" />
                  <p className="text">Worked With Clients</p>
                  <h2>200 +</h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
