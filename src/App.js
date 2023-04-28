import React from "react";
// import Header from "./components/Header/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/Aboutus/AboutUs";
import Headerr from "./components/Header/Headerr";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Headerr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
