import React from "react";
import Services from "../components/Home/Services/Services";
import TestiMonial from "../components/Testimonial/TestiMonial";
import Blog from "../components/Home/Blog/Blog";
import About from "../components/Home/About us/About";
import ContactUs from "../components/ContactUs";
import Work from "../components/Workdone/Work";
import Banner from "../components/Home/Banner/Banner";

const Home = () => {
  return (
    <>
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
