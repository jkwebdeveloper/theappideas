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
import PortFolio from "./pages/PortFolio";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import DigitalMarketing from "./components/Digital-Marketing/DigitalMarketing";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Headerr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/mobile-app-development" element={<MobileAppDev />} />
        <Route
          path="/Digital-Marketing-Agency"
          element={<DigitalMarketing />}
        />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
