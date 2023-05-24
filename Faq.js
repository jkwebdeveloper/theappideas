import { React, useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <section className="accordion_section py-5">
      <div className="container">
        <div className="Title">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
            <div className="accordion">
              {data.map((item, i) => (
                <div className="accordion-item">
                  <h2 className="accordion-title" onClick={() => toggle(i)}>
                    {item.question}
                    <span>{selected === i ? "-" : "+"}</span>
                  </h2>

                  <div className="accordion-content">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Will You Sign an NDA for the App You’re Developing?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We are willing to sign non-disclosure agreements throughout
                    the development of your mobile app (NDAs). You can trust us
                    to keep your development under wraps and out of the hands of
                    your competitors at all times.
                  </div>
                </div>
              </div>
              
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
const data = [
  {
    question: "What Are the Different Types of Mobile Apps You Can Develop?",
    answer:
      "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
  },
];

export default FAQ;
