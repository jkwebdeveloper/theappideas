import React from "react";
import { Link } from "react-router-dom";

const TestiMonial = () => {
  return (
    <section className="testimonial-bg">
      <div className="container">
        <p className="testi-heading">Clients Testimonial</p>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* <div className="card">
              <img
                src={require("../assets/images/Testimonial/maxresdefault.webp")}
                alt=""
              />
            </div> */}
            <div className="card">
              <Link to="https://www.youtube.com/watch?v=IBYadSoVF3c">
                <img
                  src={require("../assets/images/Testimonial/maxresdefault.webp")}
                  className="card-img-top"
                  alt="..."
                />
                {/* <img src={require("../assets/images/Testimonial/play-icon.png")}/> */}
              </Link>
              <div className="card-body">
                <h5 className="card-title">Lloyd Medley</h5>
                <p className="card-text">
                  We have designed and developed a website for his client, happy
                  to work with hm in future.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* <div className="card">
              <img
                src={require("../assets/images/Testimonial/testimonial-2.webp")}
                alt=""
              />
            </div> */}
            <div className="card">
              <img
                src={require("../assets/images/Testimonial/testimonial-2.webp")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Roberto Valdovinos</h5>
                <p className="card-text">
                  We had done a Food Ordering and Food Delivery app for this client
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="heading-top"></p>
    </section>
  );
};

export default TestiMonial;
