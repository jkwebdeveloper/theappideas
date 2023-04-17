import React from "react";
import img from "../../assets/images/sec1-background.webp";

// import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="banner-one go-top"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* <img
        src={require("../../assets/images/sec1-background.webp")}
        // alt={imagealt}
        className="banner-one__moc"
      /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-one__content">
              {/* <h3>
                <span>Discover New </span> <br />
                Idea To Build <br /> Your <em>Business</em>
              </h3>
              <p>We are professional &amp; Experiene Digital Agency</p>
              <Link to="/service" className="thm-btn banner-one__btn">
                Discover Now <i className="fa fa-angle-double-right" />
              </Link> */}
              {/* /.thm-btn */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
