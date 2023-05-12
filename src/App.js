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
import ECommerceWeb from "./components/ECommerceWeb/ECommerceWeb";
import GameDev from "./components/Game Development/GameDev";
import SoftwareDev from "./components/Software Development/SoftwareDev";
import Designing from "./components/DesigningServices/Designing";
import StartupServices from "./pages/StartupServices";
import HireIOSDev from "./pages/Hire Us/Hire Mobile App Dev/HireIOSDev";
import FoodDelivery from "./pages/Solutions/DeliveryApp/FoodDelivery";
import PopUp from "./components/PopUp";
import Error404 from "./pages/Error404";

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
        <Route
          path="/E-commerce-website-Development"
          element={<ECommerceWeb />}
        />
        <Route path="/Game-Development" element={<GameDev />} />
        <Route path="/Software-Development" element={<SoftwareDev />} />
        <Route path="/Designing-Services" element={<Designing />} />
        <Route path="/Startup-Services" element={<StartupServices />} />
        <Route path="/Hire-IOS-Developer" element={<HireIOSDev/>}/>
        <Route path="/Food-Delivery-App-Development" element={ <FoodDelivery/> }/>
        <Route path="/popup" element={<PopUp/>} />
        <Route path="/*" element={<Error404/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
