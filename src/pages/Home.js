import React from "react";
import Banner from "../components/Home/Banner";
import Aboutus from "./Aboutus";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Aboutus/>
      <Services/>
    </div>
  );
};

export default Home;
