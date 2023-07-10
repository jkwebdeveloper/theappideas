import React, { useRef, useState } from 'react'
import { BsSkype } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiFacebookFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { BsDribbble } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineBehance } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import { Country } from 'country-state-city'
import { useEffect } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { BiErrorCircle } from 'react-icons/bi'

const ContactUs = () => {
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const ContactSchema = yup.object().shape({
    name: yup.string().required('This field is required !'),
    email: yup
      .string()
      .email('Invalid email')
      .required('This field is required'),
    phone: yup
      .number()
      // .matches(phoneRegExp, 'phone is invalid')
      .required('This field is required'),
    projectReq: yup.string().required('This field is required'),
  })
  const formref = useRef(null)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(Country.getAllCountries())
  }, [])
  return (
    <>
      <Helmet title="Contact Us - THE APP IDEAS" />
      <section
        className="blog__section"
        style={{ paddingTop: '23px', paddingBottom: '70px' }}
      ></section>
      <section className="py-5">
        <div className="header-top-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 mt-4">
              <div className="contact__form_box">
                <h2>Get in touch with us</h2>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    projectReq: '',
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, action) => {
                    console.log(values)
                    action.resetForm()
                    // toast.success(
                    //   'Thanks, your message is sent successfully.',
                    //   {
                    //     position: 'bottom-center',
                    //     theme: 'dark',
                    //   },
                    // )
                  }}
                >
                  {(formik) => (
                    <form
                      id="rform"
                      ref={formref}
                      onSubmit={formik.handleSubmit}
                      action=""
                    >
                      <div className="row g-3">
                        <div className="col-sm-6 mt-4">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            // aria-label="Name*"
                            id="rfrom"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: '#fff', fontSize: '14px' }}
                          >
                            {formik.errors.name}
                          </span>
                          {formik.errors.name ? (
                            <BiErrorCircle
                              style={{
                                float: 'right',
                                marginTop: '5px',
                                color: '#fff',
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 mt-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: '#fff', fontSize: '14px' }}
                          >
                            {formik.errors.email}
                          </span>
                          {formik.errors.name ? (
                            <BiErrorCircle
                              style={{
                                float: 'right',
                                marginTop: '5px',
                                color: '#fff',
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-6 mt-4">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="skype ID"
                            aria-label="skype ID"
                          />
                        </div>
                        <div className="col-sm-6 h-100 mt-4">
                          <select
                            className="form-select"
                            style={{ width: '100%', padding: '6px' }}
                          >
                            <option selected="">Budget</option>
                            <option value={1}>Less Than 1000</option>
                            <option value={2}>1001 - 3000 USD</option>
                            <option value={2}>3001 - 5000 USD</option>
                            <option value={2}>5001 - 10000 USD</option>
                            <option value={2}>More Than 10000 USD</option>
                          </select>
                        </div>
                        <div className="col-sm-6 h-100 select__country mt-4">
                          <select
                            className="select2 w-100 h-100"
                            style={{ width: '100%', padding: '6px' }}
                          >
                            <option label="Country"></option>
                            {countries.map((counry) => (
                              <option
                                value={counry.name}
                                label={counry.name}
                                key={counry.name}
                              />
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <input
                            type="number"
                            className="form-control"
                            pattern="[0-9()-\s]{10,14}"
                            placeholder="Phone Number*"
                            aria-label="Phone Number"
                            name="phone"
                            maxLength="13"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: '#fff', fontSize: '14px' }}
                          >
                            {formik.errors.phone}
                          </span>
                          {formik.errors.phone ? (
                            <BiErrorCircle
                              style={{
                                float: 'right',
                                marginTop: '5px',
                                color: '#fff',
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-12 mt-4">
                          <textarea
                            className="form-control h-100"
                            id="exampleFormControlTextarea1"
                            rows={5}
                            placeholder="Project Requirement*"
                            defaultValue={''}
                            name="projectReq"
                            value={formik.values.projectReq}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className="error"
                            style={{ color: '#fff', fontSize: '14px' }}
                          >
                            {formik.errors.phone}
                          </span>
                          {formik.errors.phone ? (
                            <BiErrorCircle
                              style={{
                                float: 'right',
                                marginTop: '5px',
                                color: '#fff',
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="col-sm-12 text-center mt-4">
                          <button type="submit" className="request__btn" on>
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div
                className="other_contact_conection text-center"
                style={{ padding: '11px' }}
              >
                <h4>Other ways to connect</h4>
                <p>
                  Skype, Whatsapp, Email whatever works for you. We’ll be here.
                </p>
                <div className="contact__with__social">
                  <a href="skype:chirag4141">
                    <BsSkype style={{ marginRight: '15px' }} />
                    skype
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918866564279">
                    <BsWhatsapp style={{ marginRight: '15px' }} />
                    Whatsapp
                  </a>
                  <a href="mailto:contact@theappideas.com">
                    <GoMail style={{ marginRight: '15px' }} />
                    Email
                  </a>
                  <a href="tel:+918866564279">
                    <BsFillTelephoneFill style={{ marginRight: '15px' }} />
                    Phone
                  </a>
                </div>
                <div className="social__connection">
                  <h2>Socialize with us.</h2>
                  <a href="https://www.facebook.com/Theappideas/">
                    <RiFacebookFill />
                  </a>
                  <a href="https://www.linkedin.com/company/theappideas/">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com/theappideas/">
                    <BsInstagram />
                  </a>
                  <a href="https://twitter.com/theappidea">
                    <BsTwitter />
                  </a>
                  <a href="https://www.youtube.com/channel/UC_18zGzO_zpXkKiy1WXi4oA">
                    <AiFillYoutube />
                  </a>
                  <a href="https://in.pinterest.com/theappidea/">
                    <FaPinterestP />
                  </a>
                  <a href="https://www.behance.net/theappidea">
                    <AiOutlineBehance />
                  </a>
                  <a href="https://dribbble.com/theappideas">
                    <BsDribbble />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
