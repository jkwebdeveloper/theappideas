import React, { useEffect, useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Country } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { getFreeQuoteSchema } from "../pages/schemas";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  country: "",
  phoneNumber: "",
  projectReq: "",
};

const HeroSection = ({
  title,
  des,
  list1,
  list2,
  list3,
  list4,
  service1,
  service2,
  service3,
  image1,
  image2,
  image3,
}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePost = (values) => {
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/contact", {
      method: "post",
      data: {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        skypeId: values.skypeId,
        budget: values.budget,
        country: values.country,
        projectRequirement: values.projectReq,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: getFreeQuoteSchema,
      onSubmit: (values, action) => {
        handlePost(values);
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <section className="common__banner__section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
            <div className="common_banner_lft">
              <h2>{title}</h2>
              <p>{des}</p>
              <ul className="common__banner__list ps-0 mt-4">
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list1}</span>
                </li>
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list2}</span>
                </li>
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list3}</span>
                </li>
                <li>
                  <span className="banner_list_lft_span">
                    <BsFillPatchCheckFill />
                  </span>
                  <span className="banner_list_rht_span">{list4}</span>
                </li>
              </ul>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <img
                      src={image1}
                      alt="Mobile-App-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>{service1}</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <img
                      src={image2}
                      alt="Mobile-Application-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>{service2}</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2 ">
                  <div className="banner__boxes">
                    <img
                      src={image3}
                      alt="Mobile-Application-Development"
                      className="img-fluid"
                      style={{ width: "25%" }}
                    />
                    <h4>{service3}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12    col-xl-6 mb-4">
            <div className="banner__contact__box">
              <div className="contact_header">
                <h4>Contact us</h4>
              </div>
              <div className="contact__body">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-sm-12 my-3">
                        <input
                          type="name"
                          name="name"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Name*"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.name}
                        </span>
                        {errors.name && touched.name ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          aria-label="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.email}
                        </span>
                        {errors.email && touched.email ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-6 h-100 select__country my-3">
                        <select
                          className="select2 w-100 h-100"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option label="country"></option>
                          {countries.map((country) => (
                            <option key={country.name} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.country}
                        </span>
                        {errors.country && touched.country ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-6 my-3">
                        <input
                          type="number"
                          name="phoneNumber"
                          className="form-control"
                          placeholder="Phone Number*"
                          aria-label="Phone Number"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.phoneNumber}
                        </span>
                        {errors.phoneNumber && touched.phoneNumber ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          name="projectReq"
                          placeholder="Project Requirement*"
                          defaultValue={""}
                          value={values.projectReq}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span
                          className="error"
                          style={{ color: "red", fontSize: "14px" }}
                        >
                          {errors.projectReq}
                        </span>
                        {errors.projectReq && touched.projectReq ? (
                          <BiErrorCircle
                            style={{
                              float: "right",
                              marginTop: "5px",
                              color: "red",
                            }}
                          />
                        ) : null}
                      </div>
                      <ReCAPTCHA
                        style={{ padding: "15px 15px" }}
                        sitekey="Your Client site key"
                        onChange={onchange}
                      />
                      <div className="col-sm-12 text-center my-3">
                        <button type="submit" className="request__btn">
                          {loading ? "loading..." : "Request a FREE Quote"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="contact__footer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
