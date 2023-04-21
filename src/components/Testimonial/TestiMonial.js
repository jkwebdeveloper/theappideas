import React from "react";
import "./testimonial.css";

const TestiMonial = () => {
  return (
    <div className="container">
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-6">
            <div className="box">
              <div className="imgbox">
                <img
                  src={require("../../assets/images/Testimonial/maxresdefault.webp")}
                  alt=""
                />
                <h4>
                  <spam>Lloyd Medley</spam>
                </h4>
                <p className="">
                  We have designed and developed a website for his client, happy
                  to work with him in future.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="box">
              <div className="imgbox">
                <img
                  src={require("../../assets/images/Testimonial/testimonial-2.webp")}
                  alt=""
                />
                <h4>
                  <spam>Lloyd Medley</spam>
                </h4>
                <p className="">
                  We have designed and developed a website for his client, happy
                  to work with him in future.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default TestiMonial;
