import React from "react";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services/Services";
import Execute from "../components/Execute";
import TestiMonial from "../components/Testimonial/TestiMonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services/>
      <TestiMonial/>
      <Execute/>
    </div>
  );
};

export default Home;
