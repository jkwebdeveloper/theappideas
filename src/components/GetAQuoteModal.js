import { Country } from "country-state-city";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ReactModal from "react-modal";
import { useFormik } from "formik";
import { getAQuoteSchema } from "../pages/schemas";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialValues = {
  name: "",
  email: "",
  country: "",
  phoneNumber: "",
  projectReq: "",
};

const GetAQuoteModal = ({ setOpenModal, openModal, handleCloseModal }) => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

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
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: getAQuoteSchema,
      onSubmit: (values, action) => {
        handlePost(values);
        // console.log(values);
        action.resetForm();
      },
    });

  return (
    <ReactModal
      isOpen={openModal}
      preventScroll={true}
      shouldCloseOnEsc={true}
      onRequestClose={handleCloseModal}
      contentLabel="Contact us Modal"
      appElement={document.getElementById("root")}
      shouldCloseOnOverlayClick={true}
      style={{ content: { zIndex: "999" } }}
    >
      <section className="contact_form_section">
        <div className="container">
          <div className="contact_form_box">
            {/* <div className="hover_color_bubble" /> */}
            <div className="comtact_header">
              <AiFillCloseCircle
                size={25}
                onClick={handleCloseModal}
                style={{ float: "right", cursor: "pointer" }}
              />
              <h2>Contact us</h2>
            </div>
            <div className="contact_body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
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
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
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
                {/* <div className="mb-3">
                  <select
                    style={{ padding: "7px" }}
                    className="form-select"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  >
                    <option label="Select Country"></option>
                    {countries.map((Country) => (
                      <option key={Country.name} value={Country.name}>
                        {Country.name}
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
                </div> */}
                <div className="mb-3">
                  <PhoneInput
                    countryCodeEditable={false}
                    enableSearch={true}
                    inputProps={{
                      name: "phone",
                    }}
                    inputStyle={{
                      width: "100%",
                      padding: "21px 0px 21px 50px",
                    }}
                    type="number"
                    // className="form-control"
                    name="phoneNumber"
                    country={"in"}
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={(value) => {
                      // Formik's handleChange requires an object with a target property
                      handleChange({
                        target: {
                          name: "phone",
                          value: value,
                        },
                      });
                    }}
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
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="projectReq"
                    rows={3}
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
                <div className="text-center">
                  <button type="submit" className="submit__btn">
                    {loading ? "loading..." : "submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ReactModal>
  );
};

export default GetAQuoteModal;
