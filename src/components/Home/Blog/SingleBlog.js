import React, { useEffect, useState } from "react";
import "./singleblog.css";
import { RiFacebookFill } from "react-icons/ri";
import { BsDot, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaPinterestP, FaTumblr } from "react-icons/fa";
// import { BiLogoVk } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Blog from "./Blog";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SingleBlog = () => {
  const [singleblogs, setSingleBlogs] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useLocation().state;
  // console.log(id);

  const handleGetSingleBlogs = () => {
    axios
      .get(`https://the-app-ideas.onrender.com/api/blog/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSingleBlogs(res.data.blog);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetSingleBlogs();
  }, [id]);
  return (
    <>
      {loading ? (
        <div
          className="loading"
          style={{ textAlign: "center", paddingTop: "100px" }}
        >
          Loading...
        </div>
      ) : (
        <>
          <section
            className="blog__section"
            style={{ paddingTop: "23px", paddingBottom: "70px" }}
          ></section>

          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="left_content">
                    <h1>{singleblogs.title}</h1>
                    <div className="author">
                      <img
                        src={"https://the-app-ideas.onrender.com".concat(
                          singleblogs?.creator?.photo
                        )}
                        alt={singleblogs.imageAlt}
                      />
                      <div className="description">
                        <p className="author_name">
                          Written by <span>{singleblogs.creator.name}</span>
                        </p>
                        <p>{singleblogs.updatedAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="right_image">
                    <img
                      src={"https://the-app-ideas.onrender.com".concat(
                        singleblogs?.image?.src
                      )}
                      alt="car-wash-app"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-1">
                  <div className="social_icons">
                    <a href="https://www.facebook.com/Theappideas/">
                      <RiFacebookFill />
                    </a>
                    <a href="https://twitter.com/theappidea">
                      <BsTwitter />
                    </a>
                    <a href="https://www.linkedin.com/company/theappideas/">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=918866564279">
                      <BsWhatsapp />
                    </a>
                    <a href="">
                      <FaTumblr />
                    </a>
                    <a href="https://in.pinterest.com/theappidea/">
                      <FaPinterestP />
                    </a>
                    <a href="">
                      vk
                      {/* <IoLogoVk/> */}
                    </a>
                    <a href="">
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
                <div className="col-11">
                  <div
                    className="contant_section"
                    dangerouslySetInnerHTML={{ __html: singleblogs.content }}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Blog />
    </>
  );
};

export default SingleBlog;
