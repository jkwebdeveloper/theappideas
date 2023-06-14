import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaRegDotCircle } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'

const CareerApply = () => {
  return (
    <>
      <section className="carrer_banner">
        <div className="carrer_banner_content">
          <h1>Business Development Executive</h1>
          <div className="career_location">
            <i>
              <MdLocationPin />{' '}
            </i>

            <span>Ahmedabad</span>
          </div>
          <div className="carrer__content">
            <p>
              {' '}
              <strong>
                5 days a week and we are allowing work from home for a permanent
                basis.
              </strong>
            </p>
            <p>
              <b>Salary:-</b> No bar for right candidate (Depends on Skills and
              experience)
            </p>
            <p>
              <b>Education Qualification:-</b> BCA, MCA, MSCIT, BSC IT, BE(IT),
              ME(IT), Diploma in IT and others
            </p>
            {/* <a href="#CarreContact" className="apply_btn">
              Apply Now
            </a> */}
          </div>
        </div>
      </section>
      <section className="roles_section">
        <div className="container">
          <div className="roles_title">
            <h2>Roles &amp; Responsibilities</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="roles_box">
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Contacting potential clients to establish rapport and arrange
                  meetings.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Research and identify new market opportunities.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Build and maintain relationships with clients and prospects.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Research and analyze sales options.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Set up meetings with potential clients and listen to their
                  wishes and concerns and work as a team member and individual
                  as well.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Planning and overseeing new marketing initiatives.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="roles_box">
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Researching organizations and individuals to find new
                  opportunities.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Increasing the value of current customers while attracting new
                  ones.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Finding and developing new markets and improving sales.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Developing quotes and proposals for clients.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Developing goals for the development team and business growth
                  and ensuring they are met.
                </p>
                <p>
                  <FaRegDotCircle className="roles_box_icons" />
                  Training personnel and helping team members develop their
                  skills.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="roles_box_contact">
                <p>
                  If you are interested for the above profile, you may send your
                  CV on mentioned email
                </p>
                <p>
                  If you do not find a suitable profile, you may kindly share
                  this information to your friends who are looking for a
                  change/good opportunity.
                </p>
                <h2>App Ideas Infotech PVT. LTD.</h2>
                <p>
                  <i>
                    <MdLocationPin />
                  </i>
                  <span>
                    FO-6, Raspan Arcade, Near Rajhans Cinema,
                    <br />
                    Nikol-Naroda, Ahmedabad-382350.
                  </span>
                </p>
                <ul>
                  <li>
                    <i>
                      <BsTelephoneFill />
                    </i>
                    <span>7990138924</span>
                  </li>
                  <li>
                    <i>
                      <HiOutlineMail />
                    </i>
                    <span>trusha@theappideas.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="roles_section contents_sec" id="CarreContact">
        <div className="container">
          <div className="roles_title">
            <h2>Let us Know You Better</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="career_mdl_rht">
                <form action="">
                  <div className="hover_color_bubble" />
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name*"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="mail"
                      className="form-control"
                      placeholder="Email* "
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number*"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Total Experience In Years*"
                    />
                  </div>
                  <div className="upload-btn-wrapper mb-3">
                    <button type="button" className="Upload_Btn">
                      Upload Resume
                    </button>
                    <input
                      type="file"
                      style={{ cursor: 'pointer' }}
                      name="resume"
                    />
                  </div>
                  <div className="mb-3 text-end">
                    <button type="button" className="submit_btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerApply
