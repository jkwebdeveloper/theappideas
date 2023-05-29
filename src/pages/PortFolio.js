import React, { useState } from "react";

const Data = [
  {
    id: 1,
    image: require("../assets/images/Portfolio/Device-Image-one.webp"),
    category: "Mobile Application Development",
    projectName: "Covid",
    tags: ["Android App", "IOS", "Mobile Application Development"],
  },
  {
    id: 2,
    image: require("../assets/images/Portfolio/Device-Image-one.webp"),
    category: "Mobile Application Development",
    projectName: "",
    tags: ["Android App , IOS ,Mobile Application Development"],
  },
  {
    id: 3,
    image: require("../assets/images/Portfolio/Device-Image-one.webp"),
    category: "Mobile Application Development",
    projectName: "",
    tags: ["Android App , IOS ,Mobile Application Development"],
  },
  {
    id: 4,
    image: require("../assets/images/Portfolio/Device-Image-one.webp"),
    category: "Mobile Application Development",
    projectName: "",
    tags: ["Android App , IOS ,Mobile Application Development"],
  },
  {
    id: 5,
    image: require("../assets/images/Portfolio/Device-Image-one.webp"),
    category: "Mobile Application Development",
    projectName: "",
    tags: ["Android App , IOS ,Mobile Application Development"],
  },
  {
    id: 6,
    image: require("../assets/images/Portfolio/Device-Image-one.webp"),
    category: "Mobile Application Development",
    projectName: "",
    tags: ["Android App , IOS ,Mobile Application Development"],
  },
];
const PortFolio = () => {
  const [items, setItems] = useState(Data);

  const filterItem = (cateItem) => {
    const updateItems = Data.filter((curElem) => {
      return curElem.category === cateItem;
    });

    setItems(updateItems);
  };

  return (
    <>
      <section
        className="blog__section"
        style={{ paddingTop: "120px", paddingBottom: "40px" }}
      >
        <div className="container">
          <h2 className="blog__title">Our Portfolio</h2>
          <p className="blog__para">
            The App Ideas boasts of a strong portfolio of most successful
            websites, ecommerce sites and mobile apps across a spectrum of
            niches. Our portfolio offers you a detailed idea of our development
            strength, reputation and abilities.
          </p>
          <div className="blog__tabing__box Portfolio__Blog">
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ALL-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#ALL"
                  type="button"
                  role="tab"
                  aria-controls="All"
                  aria-selected="true"
                  onClick={() => setItems(Data)}
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Application-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Application"
                  type="button"
                  role="tab"
                  aria-controls="Application"
                  aria-selected="false"
                  onClick={() => filterItem("Entrées")}
                >
                  Mobile Application Development
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="App-idea-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#App-idea"
                  type="button"
                  role="tab"
                  aria-controls="App-idea"
                  aria-selected="false"
                >
                  Web development
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="bussiness-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#bussiness"
                  type="button"
                  role="tab"
                  aria-controls="bussiness"
                  aria-selected="false"
                >
                  E-commerce
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Portfolio_section py-5">
        <div className="container">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="ALL"
              role="tabpanel"
              aria-labelledby="ALL-tab"
            >
              <div className="row">
                {items.map((elem) => {
                  const { id, image, category, projectName, tags } = elem;
                  return (
                    <div key={id} className="col-12 px-0 mb-4">
                      <div className="work_head_box">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="row w-100">
                          <a href="#" className="work_head_box_link"></a>
                          <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                            <a href="#" className="work_head_box_link"></a>
                            <div className="work_head_lft">
                              <a href="#" className="work_head_box_link">
                                <h2>{projectName}</h2>
                              </a>
                              <ul className="ps-0">
                                <a href="#" className="work_head_box_link"></a>
                                {tags.map((tag) => {
                                  return (
                                    <li>
                                      <a
                                        href="#"
                                        className="work_head_box_link"
                                      >
                                        {" "}
                                      </a>
                                      <a href="#" className="work_head_item">
                                        {tag}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                            <div className="work_head_rht">
                              <img
                                src={image}
                                alt={projectName}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_two">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>We Party </h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-two.webp")}
                            alt="port-mobile-app-mobile-two"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_tan">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Kurita</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-tan.webp")}
                            alt="port-mobile-app-mobile-tan"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_eleven">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Iwelli – User</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-eleven.webp")}
                            alt="port-mobile-app-mobile-eleven"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_twelve">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Iwelli – Dr</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-twelve.webp")}
                            alt="port-mobile-app-mobile-twelve"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_thirteen">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Human Perform</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-thirteen.webp")}
                            alt="port-mobile-app-mobile-thirteen"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_fourteen">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Chefclub</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-forteen.webp")}
                            alt="port-mobile-app-mobile-thirteen"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="Application"
              role="tabpanel"
              aria-labelledby="Application-tab"
            >
              <div className="row">
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_two">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>We Party </h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-two.webp")}
                            alt="port-mobile-app-mobile-two"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_tan">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Kurita</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-tan.webp")}
                            alt="port-mobile-app-mobile-tan"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="App-idea"
              role="tabpanel"
              aria-labelledby="App-idea-tab"
            >
              <div className="row">
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_eleven">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Iwelli – User</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-eleven.webp")}
                            alt="port-mobile-app-mobile-eleven"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_twelve">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Iwelli – Dr</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-twelve.webp")}
                            alt="port-mobile-app-mobile-twelve"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="bussiness"
              role="tabpanel"
              aria-labelledby="bussiness-tab"
            >
              <div className="row">
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_thirteen">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Human Perform</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-thirteen.webp")}
                            alt="port-mobile-app-mobile-thirteen"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-0 mb-4">
                  <div className="work_head_box port_mobilebg_fourteen">
                    <a href="#" className="work_head_box_link"></a>
                    <div className="row w-100">
                      <a href="#" className="work_head_box_link"></a>
                      <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                        <a href="#" className="work_head_box_link"></a>
                        <div className="work_head_lft">
                          <a href="#" className="work_head_box_link">
                            <h2>Chefclub</h2>
                          </a>
                          <ul className="ps-0">
                            <a href="#" className="work_head_box_link"></a>
                            <li>
                              <a href="#" className="work_head_box_link">
                                {" "}
                              </a>
                              <a href="#" className="work_head_item">
                                Mobile Application Development
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 order-1 order-sm-1 order-md-2">
                        <div className="work_head_rht">
                          <img
                            src={require("../assets/images/Portfolio/port-mobile-app-mobile-forteen.webp")}
                            alt="port-mobile-app-mobile-thirteen"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortFolio;
