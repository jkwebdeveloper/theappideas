import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="error-banner-section">
      <div className="container">
        <div className="page-error">
          <h2 className="">Oops ! Page not found.</h2>
          <img
            src={require("../assets/images/Digital Marketing Strategy.svg")}
            alt=""
          />
          <h4 className="">We Can't find the page you're looking for.</h4>
          <Link to="/">
            <button className="error-btn">GO BACK HOME</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
