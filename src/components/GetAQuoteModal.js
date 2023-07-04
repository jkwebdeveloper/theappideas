import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ReactModal from 'react-modal'

const GetAQuoteModal = ({ setOpenModal, openModal,handleCloseModal }) => {
  return (
    <ReactModal
      isOpen={openModal}
      preventScroll={true}
      shouldCloseOnEsc={true}
      onRequestClose={handleCloseModal}
      contentLabel="Contact us Modal"
      appElement={document.getElementById('root')}
      shouldCloseOnOverlayClick={true}
      style={{ content: { zIndex: 99999 } }}
    >
      <section className="contact_form_section">
        <div className="container">
          <div className="contact_form_box">
            <div className="hover_color_bubble" />
            <div className="comtact_header">
              <AiFillCloseCircle
                size={25}
                onClick={handleCloseModal}
                style={{ float: 'right', cursor: 'pointer' }}
              />
              <h2>Contact us</h2>
            </div>
            <div className="contact_body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
                <div className="mb-3">
                  <select className="form-select">
                    <option label="Country"></option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number*"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Project Requirement*"
                    defaultValue={''}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="submit__btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ReactModal>
  )
}

export default GetAQuoteModal
