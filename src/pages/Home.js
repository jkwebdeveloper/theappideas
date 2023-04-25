import React from "react";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services/Services";
import Execute from "../components/Execute";
import TestiMonial from "../components/Testimonial/TestiMonial";
import Blog from "../components/Home/Blog/Blog";
import About from "../components/Home/About us/About";
import Work from "../components/Workdone/Work";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Services/>
      <Work/>
      <TestiMonial/>
      <Blog/>
      <Execute/>
    </div>
  );
};

export default Home;
