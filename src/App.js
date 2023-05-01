import React from "react";
// import Header from "./components/Header/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/Aboutus/AboutUs";
import Headerr from "./components/Header/Headerr";
import MobileAppDev from "./components/mobileAppDev/MobileAppDev";
import WebDev from "./components/webDevelopment/WebDev";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Headerr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs/>}/>
        <Route path="/mobile-app-development" element={<MobileAppDev/>}/>
        <Route path="/web-development" element={<WebDev/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
