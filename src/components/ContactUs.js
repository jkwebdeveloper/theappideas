import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactUs = ({ question }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className="bg py-4">
      <div className="container">
        <div className="row align-items-center">
          <div
            data-aos="fade-right"
            className="col-sm-12 col-md-8 col-lg-8 mb-3"
          >
            <div className="contact-lft">
              <p>{question}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
            <div className="contact__rht">
              <Link
                to="/contact-us"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="contact_btn" style={{ color: '#000' }}>
                  Contact us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
