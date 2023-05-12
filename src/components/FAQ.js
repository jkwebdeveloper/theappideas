import React from "react";

const FAQ = () => {
  return (
    <section className="accordion_section py-5">
      <div className="container">
        <div className="Title">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What Are the Different Types of Mobile Apps You Can Develop?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Applications may be developed for mobile devices running
                    both the Android and iOS operating systems. Customers,
                    employees, or even vendors may promote certain apps for use.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Which platform, Android or iOS, should our application be
                    launched on?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    In the past, companies had the option of creating software
                    just for one OS. Even while major mobile OSes like Android
                    and iOS have huge user bases, most companies still choose to
                    create apps that work on both..
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What is the Difference Between Cross-Platform and Native App
                    Development?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Cross-platform development refers to the process of creating
                    software for several platforms as opposed to only one. The
                    process of creating applications specifically for different
                    platforms, including Android and iOS, is known as native{" "}
                    <b>app development</b>. A software that functions
                    effectively on both systems may be made using cross-platform
                    development approaches.
                    <br />
                    <div className="mt-3">
                      <b>
                        It’s recommended to use the OS’s native programming
                        languages and integrated development environments when
                        developing native apps (IDEs). Java or Kotlin
                        proficiency and familiarity with Android Studio are
                        often required for Android app development. You must use
                        Xcode and either Objective C or Swift while developing
                        an iOS app
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Can You Work With Us if We Don’t Have a Fully Formed Idea
                    for Our App?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    We engineers are used to collaborating with businesses whose
                    app concepts are in varied phases of development. Let’s
                    collaborate to bring your ideas to life as practical mobile
                    applications.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 accordion_box">
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
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do I Need to Test My App?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our knowledgeable internal testing crew puts every mobile
                    app through rigorous testing. This group works closely with
                    the developers to make sure the applications being created
                    are of the best quality possible. You are welcome to
                    participate in our internal testing as well as your own, of
                    course. You could have suggestions for other uses for the
                    app, allowing you to develop test cases that are more
                    difficult.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can an App connect to my existing systems/data store?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You may rely on us to develop API-based applications that
                    smoothly synchronise with your current infrastructure (API).
                    Because to APIs that may be developed in any language, your
                    datastore can be accessed and utilised by any software.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Should I prepare my app's visual (wireframe)?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our development team may collaborate with you to create the
                    app if you have access to a web designer and are prepared to
                    give graphics. The We team would be pleased to assist you
                    with visualising your concept and bringing it to life in the
                    digital sphere, even if all you currently have is a
                    conception or an idea.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="v"
                  >
                    Who will own the intellectual property rights to my App?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The SPAR team’s obligations are limited to providing advice
                    and support while you develop the App for your clients since
                    the App is based on your idea, concept, and company, and you
                    retain all rights to it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default FAQ;
