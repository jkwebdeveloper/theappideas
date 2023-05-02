import React from "react";

const ContactUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 mt-4">
            <div className="contact__form_box">
              <h2>Get in touch with us</h2>
              <form action="">
                <div className="row g-3">
                  <div className="col-sm-6 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      aria-label="Name*"
                    />
                  </div>
                  <div className="col-sm-6 mt-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*
                                  "
                      aria-label="Email"
                    />
                  </div>
                  <div className="col-sm-6 mt-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="skype ID*
                                  "
                      aria-label="skype ID"
                    />
                  </div>
                  <div className="col-sm-6 h-100 mt-4">
                    <select className="form-select">
                      <option selected="">Budget</option>
                      <option value={1}>Less Than 1000</option>
                      <option value={2}>1001 - 3000 USD</option>
                      <option value={2}>3001 - 5000 USD</option>
                      <option value={2}>5001 - 10000 USD</option>
                      <option value={2}>More Than 10000 USD</option>
                    </select>
                  </div>
                  <div className="col-sm-6 h-100 select__country mt-4">
                    <select className="select2 w-100 h-100">
                      <option value={1}>Country*</option>
                      <option value={2}>Option 2</option>
                      <option value={3}>Option 3</option>
                      <option value={4}>Option 4</option>
                      <option value={5}>Option 5</option>
                      <option value={6}>Option 6</option>
                      <option value={7}>Option 7</option>
                      <option value={8}>Option 8</option>
                    </select>
                  </div>
                  <div className="col-sm-6 mt-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number*
                                  "
                      aria-label="Phone Number"
                    />
                  </div>
                  <div className="col-sm-12 mt-4">
                    <textarea
                      className="form-control h-100"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      placeholder="Project Requirement*"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-sm-12 text-center mt-4">
                    <button type="submit" className="request__btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt-4">
            <div className="other_contact_conection text-center">
              <h4>Other ways to connect</h4>
              <p>
                Skype, Whatsapp, Email whatever works for you. We’ll be here.
              </p>
              <div className="contact__with__social">
                <a href="#">
                  <i className="fa fa-skype" />
                  skype
                </a>
                <a href="#">
                  <i className="fa fa-whatsapp" />
                  Whatsapp
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                  Email
                </a>
                <a href="#">
                  <i className="fa fa-phone" />
                  Phone
                </a>
              </div>
              <div className="social__connection">
                <h2>Socialize with us.</h2>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
                <a href="#">
                  <i className="fa fa-dribbble    " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
