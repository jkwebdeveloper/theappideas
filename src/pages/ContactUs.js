import React from "react";
import { BsSkype } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineBehance } from "react-icons/ai";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>
    <Helmet title="Contact Us - THE APP IDEAS"/>
      <section
        className="blog__section"
        style={{ paddingTop: "23px", paddingBottom: "70px" }}
      ></section>
      <section className="py-5">
        <div className="header-top-bg"></div>
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
                      <select
                        className="form-select"
                        style={{ width: "100%", padding: "6px" }}
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
                        style={{ width: "100%", padding: "6px" }}
                      >
                        <option value={1}>Country*</option>
                        <option value={2}>India</option>
                        <option value={3}>Afghanistan</option>
                        <option value={4}>Albania</option>
                        <option value={5}>Algeria</option>
                        <option value={6}>American Samoa</option>
                        <option value={7}>Andoraa</option>
                        <option value={8}>Angola</option>
                        <option value={9}>Anguilla</option>
                        <option value={10}>Antarctica</option>
                        <option value={11}>Antigua and Barbuda</option>
                        <option value={12}>Argentina</option>
                        <option value={13}>Armenia</option>
                        <option value={14}>Aruba</option>
                        <option value={15}>Australia</option>
                        <option value={16}>Austria</option>

                        <option value={1}>Country*</option>
                        <option value={2}>India</option>
                        <option value={3}>Afghanistan</option>
                        <option value={4}>Albania</option>
                        <option value={5}>Algeria</option>
                        <option value={6}>American Samoa</option>
                        <option value={7}>Andoraa</option>
                        <option value={8}>Angola</option>
                        <option value={9}>Anguilla</option>
                        <option value={10}>Antarctica</option>
                        <option value={11}>Antigua and Barbuda</option>
                        <option value={12}>Argentina</option>
                        <option value={13}>Armenia</option>
                        <option value={14}>Aruba</option>
                        <option value={15}>Australia</option>
                        <option value={16}>Austria</option>
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
            <div className="col-12 col-md-12 col-lg-4">
              <div
                className="other_contact_conection text-center"
                style={{ padding: "11px" }}
              >
                <h4>Other ways to connect</h4>
                <p>
                  Skype, Whatsapp, Email whatever works for you. We’ll be here.
                </p>
                <div className="contact__with__social">
                  <a href="skype:chirag4141">
                    <BsSkype style={{ marginRight: "15px" }} />
                    skype
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918866564279">
                    <BsWhatsapp style={{ marginRight: "15px" }} />
                    Whatsapp
                  </a>
                  <a href="mailto:contact@theappideas.com">
                    <GoMail style={{ marginRight: "15px" }} />
                    Email
                  </a>
                  <a href="tel:+918866564279">
                    <BsFillTelephoneFill style={{ marginRight: "15px" }} />
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
  );
};

export default ContactUs;
