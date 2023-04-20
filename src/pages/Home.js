import React from "react";
import Banner from "../components/Home/Banner";
import Aboutus from "./Aboutus";
import Services from "../components/Services/Services";
import Execute from "../components/Execute";

const Home = () => {
  return (
    <div>
      <Banner />
      <Aboutus/>
      <Services/>
      <Execute/>
    </div>
  );
};

export default Home;
