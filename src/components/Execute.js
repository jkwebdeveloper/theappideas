import React from "react";
import { Link } from "react-router-dom";

const Execute = () => {
  return (
    <section className="bg py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-8 col-lg-8 mb-3">
            <div className="contact-lft">
              <p>Would you like to execute any project?</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="contact__rht">
              <Link to="/contactus">
                <a className="contact_btn" style={{color:"#000"}}>
                  Contact us{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Execute;
