import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiSearch } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterdata, setFilterData] = useState([]);
  const [activefilter, setActiveFilter] = useState("all");
  const [category, SetCategory] = useState([]);
  const [autoSearch, SetAutoSearch] = useState([])

  const handlePageChange = () => {
    console.log("click");
  };

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
        // console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetBlogs();
  }, []);

  const handleGetCategory = () => {
    setLoading(true);
    axios
      .get("https://the-app-ideas.onrender.com/api/category", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        SetCategory(res.data.category);
        console.log(res.data.category);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleGetAutoSearch = () => {
    setLoading(true)
    axios.get("https://the-app-ideas.onrender.com/api/autocomplete/title", {
      headers: {
        "Content-Type" : "application/json",
      },
    })
    .then((res) => {
      SetAutoSearch(res.data.data)
      console.log(res.data.data);
    })
    .catch((err) => {
      setLoading(false)
    })
  }
  useEffect(() => {
    handleGetAutoSearch()
  }, [])


  const filterItem = (cateItem) => {
    const updateItems = blogs.filter((curElem) => {
      return curElem.categories === cateItem;
    });
    setFilterData(updateItems);
  };

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
                  className={`nav-link ${activefilter === "all" && "active"} `}
                  id="ALL-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#ALL"
                  type="button"
                  role="tab"
                  aria-controls="All"
                  aria-selected="true"
                  onClick={() => {
                    setFilterData(blogs);
                    setActiveFilter("all");
                  }}
                >
                  All
                </button>
              </li>
              {category.map((item) => (
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activefilter === "application" && "active"
                    }`}
                    id="Application-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#Application"
                    type="button"
                    role="tab"
                    aria-controls="Application"
                    aria-selected="false"
                    onClick={() => {
                      filterItem("application");
                      setActiveFilter("application");
                    }}
                  >
                    {item?.name}
                  </button>
                </li>
              ))}
              {/* <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activefilter === "aap-ideas" && "active"
                  }`}
                  id="App-idea-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#App-idea"
                  type="button"
                  role="tab"
                  aria-controls="App-idea"
                  aria-selected="false"
                  onClick={() => {
                    filterItem("aap-ideas");
                    setActiveFilter("aap-ideas");
                  }}
                >
                  App Ideas
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activefilter === "bussiness" && "active"
                  }`}
                  id="bussiness-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#bussiness"
                  type="button"
                  role="tab"
                  aria-controls="bussiness"
                  aria-selected="false"
                  onClick={() => {
                    filterItem("bussiness");
                    setActiveFilter("bussiness");
                  }}
                >
                  Bussiness
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activefilter === "designing" && "active"
                  }`}
                  id="Designing-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Designing"
                  type="button"
                  role="tab"
                  aria-controls="Designing"
                  aria-selected="false"
                  onClick={() => {
                    filterItem("designing");
                    setActiveFilter("designing");
                  }}
                >
                  Designing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activefilter === "e-commerce" && "active"
                  }`}
                  id="E-commerce-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#E-commerce"
                  type="button"
                  role="tab"
                  aria-controls="E-commerce"
                  aria-selected="false"
                  onClick={() => {
                    filterItem("e-commerce");
                    setActiveFilter("e-commerce");
                  }}
                >
                  E-commerce
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activefilter === "demand-tab" && "active"
                  }`}
                  id="Demand-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#Demand"
                  type="button"
                  role="tab"
                  aria-controls="Demand"
                  aria-selected="false"
                  onClick={() => {
                    filterItem("demand-tab");
                    setActiveFilter("demand-tab");
                  }}
                >
                  On-Demand-app
                </button>
              </li> */}
            </ul>
            {loading ? (
              <div
                className="loading"
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
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
                        <Link
                          to="/single-blog"
                          state={{ id: blog._id }}
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <div className="blog__box">
                            <a href="#">
                              <div className="blog__box__img">
                                <img
                                  src={"https://the-app-ideas.onrender.com".concat(
                                    blog.image
                                  )}
                                  alt={blog.imageAlt}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="blog__box__content">
                                <h4>{blog.title}</h4>
                              </div>
                            </a>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>No Data</div>
            )}
          </div>
          <div className="paginate_section">
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={25}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName="pagination justify-content-center"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
