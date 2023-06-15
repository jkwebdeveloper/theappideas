import React from 'react'
import { Helmet } from 'react-helmet'
import { BiSearch } from 'react-icons/bi'

const Blog = () => {
  return (
    <>
      <Helmet title="BLOG - THE APP IDEAS" />
      <section className="blog__section py-5">
        <div className="container">
          <h2 className="blog-title-heading">Our Blogs</h2>
          <form action="">
            <div className="blog__search">
              <input type="text" placeholder="Search..." />
              <button>
                <BiSearch style={{ fontSize: '20px' }} />
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="blog__tabing__section py-5">
        <div className="container">
          <div className="blog__tabing__box">
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
                >
                  Application
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
                  App Ideas
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
                  Bussiness
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Designing-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Designing"
                  type="button"
                  role="tab"
                  aria-controls="Designing"
                  aria-selected="false"
                >
                  Designing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="E-commerce-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#E-commerce"
                  type="button"
                  role="tab"
                  aria-controls="E-commerce"
                  aria-selected="false"
                >
                  E-commerce
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Demand-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Demand"
                  type="button"
                  role="tab"
                  aria-controls="Demand"
                  aria-selected="false"
                >
                  On-Demand-app
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="ALL"
                role="tabpanel"
                aria-labelledby="ALL-tab"
              >
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-1.jpg')}
                            alt="blog_banner-1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How much does it cost to create an app in 2023?
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-2.jpg')}
                            alt="blog_banner-2"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>How much Does It Cost to Build a FinTech App?</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-3.webp')}
                            alt="blog_banner-3"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How Much Does It Cost To Build An App Like Rover?
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-4.webp')}
                            alt="blog_banner-4"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How Much Does It Cost to Develop An On-Demand Car
                            Wash App?
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-5.webp')}
                            alt="blog_banner-5"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How Much Does It Cost To Develop A Car Parking
                            Finder App?
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-6.webp')}
                            alt="blog_banner-6"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How Much Does It Cost to Develop an On-Demand
                            Delivery App like Dunzo?
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-7.webp')}
                            alt="blog_banner-7"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How Much Does it Cost to Build an Educational App
                            for Kids?
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-8.webp')}
                            alt="blog_banner-8"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            Mobile App Development Services by App Ideas
                            Infotech Grabs GoodFirms Attention
                          </h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="blog__box">
                      <a href="#">
                        <div className="blog__box__img">
                          <img
                            src={require('../assets/images/blog/blog_banner-9.webp')}
                            alt="blog_banner-9"
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog__box__content">
                          <h4>
                            How Much Does It Cost to Develop A Grocery Delivery
                            App like Instacart?
                          </h4>
                        </div>
                      </a>
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
                2
              </div>
              <div
                className="tab-pane fade"
                id="App-idea"
                role="tabpanel"
                aria-labelledby="App-idea-tab"
              >
                3
              </div>
              <div
                className="tab-pane fade"
                id="bussiness"
                role="tabpanel"
                aria-labelledby="bussiness-tab"
              >
                4
              </div>
              <div
                className="tab-pane fade"
                id="Designing"
                role="tabpanel"
                aria-labelledby="Designing-tab"
              >
                5
              </div>
              <div
                className="tab-pane fade"
                id="E-commerce"
                role="tabpanel"
                aria-labelledby="E-commerce-tab"
              >
                6
              </div>
              <div
                className="tab-pane fade"
                id="Demand"
                role="tabpanel"
                aria-labelledby="Demand-tab"
              >
                7
              </div>
            </div>
          </div>
          <div className="pagination__wrapper mt-4">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">‹</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">2</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
