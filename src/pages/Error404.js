import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="error-banner-section">
      <div className="container">
        <div className="page-error">
          <h2 className="">Oops ! Page not found.</h2>
          <img
            src={require("../assets/images/Error.png")}
            alt=""
            style={{marginTop:"-170px"}}
          />
          <h4 className="" style={{marginTop:"-116px"}}>We Can't find the page you're looking for.</h4>
          <Link to="/">
            <button className="error-btn">GO BACK HOME</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
