import React, { useEffect, useState } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Country } from 'country-state-city'
import ReCAPTCHA from 'react-google-recaptcha'

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
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(Country.getAllCountries())
  }, [])

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
                      style={{ width: '25%' }}
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
                      style={{ width: '25%' }}
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
                      style={{ width: '25%' }}
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
                  <form action="">
                    <div className="row g-3">
                      <div className="col-sm-12 my-3">
                        <input
                          type="name"
                          autoComplete="off"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          aria-label="Name*"
                        />
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          aria-label="Email"
                        />
                      </div>
                      <div className="col-sm-6 h-100 select__country my-3">
                        <select className="select2 w-100 h-100">
                          <option label="country"></option>
                          {countries.map((country) => (
                            <option key={country.name} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-sm-6 my-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number*"
                          aria-label="Phone Number"
                        />
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          placeholder="Project Requirement*"
                          defaultValue={''}
                        />
                      </div>
                      <ReCAPTCHA
                        style={{ padding: '15px 15px' }}
                        sitekey="Your Client site key"
                        onChange={onchange}
                      />
                      <div className="col-sm-12 text-center my-3">
                        <button type="submit" className="request__btn">
                          Request a FREE Quote
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
  )
}

export default HeroSection
