import React from "react";
import "./testimonial.css";
import { Link } from "react-router-dom";

const TestiMonial = () => {
  return (
    <section className="testi-bg">
      <div className="container">
        <div className="testi-heading">
          <h2>Clients Testimonial</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box my-5" style={{ cursor: "pointer" }}>
              <div className="imgbox">
                <img
                  src={require("../../assets/images/Testimonial/maxresdefault.webp")}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <h4>
                <span>Lloyd Medley</span>
              </h4>
              <br />
              <p className="">
                We have designed and developed a website for his client, happy
                to work with him in future.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="box my-5" style={{ cursor: "pointer" }}>
              <div className="imgbox">
                <img
                  src={require("../../assets/images/Testimonial/testimonial-2.webp")}
                  alt=""
                  style={{ width: "330px" }}
                />
              </div>
              <h4>
                <span>Roberto Valdovinos</span>
              </h4>
              <br />
              <p className="">
                We had done a Food Ordering and Food Delivery app for this
                client
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ textAlign: "center" }}>
            <Link
              to="/testimonial"
              style={{ display: "inline-block" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="testi-btn">
                <button
                  type="button"
                  className="view-more-btn"
                  style={{ cursor: "pointer" }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonial;
