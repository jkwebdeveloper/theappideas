import React from "react";
import Services from "../components/Home/Services/Services";
import TestiMonial from "../components/Testimonial/TestiMonial";
import Blog from "../components/Home/Blog/Blog";
import About from "../components/Home/About us/About";
import ContactUs from "../components/ContactUs";
import Work from "../components/Workdone/Work";
import Banner from "../components/Home/Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet title="Best Web & Mobile App Development Company"/>
      <Banner />
      <About />
      <Services />
      <Work />
      <TestiMonial />
      <Blog />
      <ContactUs question="Would you like to execute any project?" />
    </>
  );
};

export default Home;
