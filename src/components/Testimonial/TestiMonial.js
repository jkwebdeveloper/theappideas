import React, { useEffect, useState } from "react";
import "./testimonial.css";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialModal from "./TestimonialModal";

const TestiMonial = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOnClose = () => setOpenModal(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="testi-bg">
      <div className="container">
        <div className="testi-heading">
          <h2>Clients Testimonial</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              data-aos="fade-right"
              className="box my-5"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpenModal("https://www.youtube.com/embed/IBYadSoVF3c");
              }}
            >
              <BsPlayCircleFill
                size={60}
                color="white"
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "997",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "fit-content",
                }}
              />
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
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            onClick={() => {
              setOpenModal("https://www.youtube.com/embed/8IXVtVkGNl8");
            }}
          >
            <div
              data-aos="fade-left"
              className="box my-5"
              style={{ cursor: "pointer" }}
            >
              <BsPlayCircleFill
                size={60}
                color="white"
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: "997",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "fit-content",
                }}
              />
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
          <div
            data-aos="fade-up"
            className="col-12"
            style={{ textAlign: "center" }}
          >
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
                  style={{
                    cursor: "pointer",
                    padding: "1rem 3rem",
                    fontWeight: "bold",
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <TestimonialModal onClose={handleOnClose} visible={openModal} />
    </section>
  );
};

export default TestiMonial;
