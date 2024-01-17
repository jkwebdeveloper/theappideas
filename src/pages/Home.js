import React, { useEffect, useState } from "react";
import Services from "../components/Home/Services/Services";
import TestiMonial from "../components/Testimonial/TestiMonial";
import Blog from "../components/Home/Blog/Blog";
import About from "../components/Home/About us/About";
import ContactUs from "../components/ContactUs";
import Work from "../components/Workdone/Work";
import Banner from "../components/Home/Banner/Banner";
import { Helmet } from "react-helmet";
import axios from "axios";
import OndemandProduct from "../components/Home/OndemandProducts/OndemandProduct";
import WhyChoose from "../components/Home/Why Choose/WhyChoose";

const Home = ({ setOpenModal }) => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetBanners = () => {
    setLoading(true);
    axios("https://the-app-ideas.onrender.com/api/banner", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => {
        setBanners(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetBanners();
  }, []);

  return (
    <>
      <Helmet title="Best Web & Mobile App Development Company">
        <title>Best Web & Mobile App Development Company</title>
        <meta
          name="title"
          content="Best Web & Mobile App Development Company"
        />
        <meta
          name="description"
          content="The App Ideas is the leading Web & Mobile App Development Company with a skilled development team in India. We develop Web App Ideas for Android App."
        />
        <meta
          name="keyword"
          content="app development company india, web and mobile development solutions, on demand development company,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theappideas.com/" />
        <meta
          property="og:title"
          content="Best Web & Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="The App Ideas is the leading Web & Mobile App Development Company with a skilled development team in India. We develop Web App Ideas for Android App."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://theappideas.com/" />
        <meta
          property="twitter:title"
          content="Best Web & Mobile App Development Company"
        />
        <meta
          property="twitter:description"
          content="The App Ideas is the leading Web & Mobile App Development Company with a skilled development team in India. We develop Web App Ideas for Android App."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Helmet>
      <Banner loading={loading} banners={banners} setOpenModal={setOpenModal} />
      <OndemandProduct />
      <About />
      <Services />
      <Work />
      <WhyChoose />
      <TestiMonial />
      <Blog />
      <ContactUs question="Would you like to execute any project?" />
    </>
  );
};

export default Home;
