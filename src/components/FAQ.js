import { React, useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      id: 1,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 2,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 3,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 4,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 5,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 6,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 7,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
    {
      id: 8,
      question: "What Are the Different Types of Mobile Apps You Can Develop?",
      answer:
        "Applications may be developed for mobile devices running  both the Android and iOS operating systems. Customers,employees, or even vendors may promote certain apps for use.",
    },
  ];
  return (
    <section className="accordion_section py-5">
      <div className="container">
        <div className="Title">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
            {data.slice(0, 4).map((item) => (
              <div className="accordion" key={item.id}>
                <div className="item">
                  <h2 className="title" onClick={() => toggle(item.id)}>
                    {item.question}
                    <span style={{ margin: "10px" }}>
                      {selected === item.id ? (
                        <BiMinusCircle size={30} />
                      ) : (
                        <BiPlusCircle size={30} />
                      )}
                    </span>
                  </h2>
                </div>
                <div
                  className={
                    selected === item.id
                      ? "accordion_content show"
                      : "accordion_content"
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
            {data.slice(4, 8).map((item, i) => (
              <div className="accordion" key={item.id}>
                <div className="item">
                  <h2 className="title" onClick={() => toggle(item.id)}>
                    {item.question}
                    <span style={{ margin: "10px" }}>
                      {selected === item.id ? (
                        <BiMinusCircle size={30} />
                      ) : (
                        <BiPlusCircle size={30} />
                      )}
                    </span>
                  </h2>
                </div>
                <div
                  className={
                    selected === item.id
                      ? "accordion_content show"
                      : "accordion_content"
                  }
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
