import React from "react";
import "./work.css";

const Work = () => {
  return (
    <div className="container" style={{ paddingBottom: "100px" }}>
      <div className="work-heading">
        <h2>Work we had done</h2>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <img
            src={require("../../assets/images/work/2.webp")}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="dec">
            Mindweel - On Demand Psychologist Hiring App
          </div>
          <p>
            It’s an On Demand Psychologist OR Doctor Hiring App. It has been
            very useful app in the current scenario of the world where everyone
            is facing depression, anxiety and mental health issues.
          </p>
          <p>
            This project has three main modules, Patient App, Psychologist /
            Doctor App, and Admin Panel.
          </p>

          <p>
            Patient can able to create and manage their medical profile, find
            the best available Psychologist / Doctors, Check their profiles,
            availability, ratings and reviews, Book them online, make a payment,
            give ratings and reviews.
          </p>
          <p>
            Psychologist OR Doctor can able to register themselves, create their
            specialist profile, manage availability, patient, booking, payment
            and other stuffs.
          </p>
          <p>
            Admin can able to manage Patients, Doctors, Payment, Reports,
            Content and other stuffs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
