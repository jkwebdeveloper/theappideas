import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSearch } from "react-icons/bi";

const Blog = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filterdata, setFilterData] = useState([])

  // const filterItem = (cateItem) => {
  //   console.log(cateItem)
  //   const updateItems = blogs.filter((curElem) => {
  //     return curElem.category === cateItem
  //   })
  //   setFilterData(updateItems)
  // }

  const handleGetBlogs = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/blog", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setblogs(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetBlogs();
  }, []);

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
                <BiSearch style={{ fontSize: "20px" }} />
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
                  // onClick={() => setFilterData(blogs)}
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
                  // onClick={() => filterItem("Application")}
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
                  // onClick={() => filterItem("App")}
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
                  // onClick={() => filterItem("bussiness")}
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
                  // onClick={() => filterItem("designing")}
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
                  // onClick={() => filterItem("e-com")}
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
                  // onClick={() => filterItem("on-demand")}
                >
                  On-Demand-app
                </button>
              </li>
            </ul>
            {loading ? (
              <div
                className="loading"
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
                {/* <img
                 src={require("../assets/images/loading.webp")}
                 alt="loading"
                 style={{ width: "120px", height: "120px" }}
               /> */}
                Loading...
              </div>
            ) : blogs.length > 0 ? (
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="ALL"
                  role="tabpanel"
                  aria-labelledby="ALL-tab"
                >
                  <div className="row">
                    {blogs.map((blog) => (
                      <div
                        className="col-sm-6 col-md-6 col-lg-4 col-xl-4"
                        key={blog._id}
                      >
                        <div className="blog__box">
                          <a href="#">
                            <div className="blog__box__img">
                              <img
                                src={"https://the-app-ideas.onrender.com".concat(
                                  blog.image.src
                                )}
                                alt={blog.image.alt}
                                className="img-fluid"
                              />
                            </div>
                            <div className="blog__box__content">
                              <h4>{blog.title}</h4>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>No Data</div>
            )}
          </div>
          {/* <div className="pagination__wrapper mt-4">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
