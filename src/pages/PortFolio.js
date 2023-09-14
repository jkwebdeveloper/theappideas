import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import axios from "axios";

const PortFolio = () => {
  const [portfolio, setPortFolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterdata, setFilterData] = useState([]);

  const handleGetPortFolios = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/portfolio", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setPortFolios(res.data.portfolioData);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetPortFolios();
  }, []);

  const filterItem = (cateItem) => {
    console.log(cateItem);
    const updateItems = portfolio.filter((curElem) => {
      return curElem.category === cateItem;
    });

    setFilterData(updateItems);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Helmet title="PORTFOLIO | THE APP IDEAS" />
      <section
        className="blog__section"
        style={{ paddingTop: "120px", paddingBottom: "40px" }}
      >
        {/* categories */}
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
                <div
                  className="nav-link active"
                  id="ALL-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#ALL"
                  type="button"
                  role="tab"
                  aria-controls="All"
                  aria-selected="true"
                  onClick={() => setFilterData(portfolio)}
                >
                  All
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link"
                  id="Application-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Application"
                  type="button"
                  role="tab"
                  aria-controls="Application"
                  aria-selected="false"
                  onClick={() => filterItem("Application")}
                >
                  Mobile Application Development
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link"
                  id="web"
                  data-bs-toggle="pill"
                  data-bs-target="#App-idea"
                  type="button"
                  role="tab"
                  aria-controls="App-idea"
                  aria-selected="false"
                  onClick={() => filterItem("web")}
                >
                  Web development
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link"
                  id="bussiness-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#bussiness"
                  type="button"
                  role="tab"
                  aria-controls="bussiness"
                  aria-selected="false"
                  onClick={() => filterItem("e-com")}
                >
                  E-commerce
                </div>
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
              {loading ? (
                <div className="loading">Loading...</div>
              ) : setPortFolios.length > 0 ? (
                <div className="row">
                  {filterdata.length > 0
                    ? filterdata.map((elem) => {
                        const { _id, image, bgImage, tags, title } = elem;
                        return (
                          <div key={_id} className="col-12 px-0 mb-4">
                            <div
                              data-aos="fade-up"
                              className="work_head_box"
                              style={{
                                backgroundImage: `url(https://the-app-ideas.onrender.com${bgImage})`,
                              }}
                            >
                              <a href="#" className="work_head_box_link"></a>
                              <div className="row w-100">
                                <a href="#" className="work_head_box_link"></a>
                                <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                                  <a
                                    href="#"
                                    className="work_head_box_link"
                                  ></a>
                                  <div className="work_head_lft">
                                    <a href="#" className="work_head_box_link">
                                      <h2>{title}</h2>
                                    </a>
                                    <ul className="ps-0">
                                      <a
                                        href="#"
                                        className="work_head_box_link"
                                      ></a>
                                      {tags.map((tag) => {
                                        return (
                                          <li key={tag}>
                                            <a
                                              href="#"
                                              className="work_head_box_link"
                                            >
                                              {" "}
                                            </a>
                                            <a
                                              href="#"
                                              className="work_head_item"
                                            >
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
                                      data-aos="fade-left"
                                      src={"https://the-app-ideas.onrender.com".concat(
                                        image
                                      )}
                                      alt={title}
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : portfolio.map((elem) => {
                        const { _id, image, bgImage, tags, title } = elem;
                        return (
                          <div key={_id} className="col-12 px-0 mb-4">
                            <div
                              data-aos="fade-up"
                              className="work_head_box"
                              style={{
                                backgroundImage: `url(https://the-app-ideas.onrender.com${bgImage})`,
                              }}
                            >
                              <a href="#" className="work_head_box_link"></a>
                              <div className="row w-100">
                                <a href="#" className="work_head_box_link"></a>
                                <div className="col-sm-12 col-md-6 order-2 order-sm-2 order-md-1">
                                  <a
                                    href="#"
                                    className="work_head_box_link"
                                  ></a>
                                  <div className="work_head_lft">
                                    <a href="#" className="work_head_box_link">
                                      <h2>{title}</h2>
                                    </a>
                                    <ul className="ps-0">
                                      <a
                                        href="#"
                                        className="work_head_box_link"
                                      ></a>
                                      {tags.map((tag) => {
                                        return (
                                          <li key={tag}>
                                            <a
                                              href="#"
                                              className="work_head_box_link"
                                            >
                                              {" "}
                                            </a>
                                            <a
                                              href="#"
                                              className="work_head_item"
                                            >
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
                                      data-aos="fade-left"
                                      src={"https://the-app-ideas.onrender.com".concat(
                                        image
                                      )}
                                      alt={title}
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              ) : (
                <div>no data</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortFolio;
