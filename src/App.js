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
import AndroidAppDev from "./pages/MobileAppDev/AndroidAppDev";
import IphoneAppDev from "./pages/MobileAppDev/IphoneAppDev";
import IpadAppDev from "./pages/MobileAppDev/IpadAppDev";
import ReactNativeDev from "./pages/MobileAppDev/ReactNativeDev";
import IBeaconAppDev from "./pages/MobileAppDev/IBeaconAppDev";
import IOTAppDev from "./pages/MobileAppDev/IOTAppDev";
import AppleWatch from "./pages/MobileAppDev/AppleWatch";
import HireAndroidDev from "./pages/Hire Us/Hire Mobile App Dev/HireAndroidDev";
import HireReactNativeDev from "./pages/Hire Us/Hire Mobile App Dev/HireReactNativeDev";
import HireFlutterDev from "./pages/Hire Us/Hire Mobile App Dev/HireFlutterDev";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Headerr />
      <Routes>
        {/* Home page Link */}
        <Route path="/" element={<Home />} />

        {/* Company Link */}
        <Route path="/Aboutus" element={<AboutUs />} />

        {/* Services Link */}
        <Route path="/mobile-app-development" element={<MobileAppDev />} />
        <Route
          path="/Digital-Marketing-Agency"
          element={<DigitalMarketing />}
        />
        <Route path="/web-development" element={<WebDev />} />
        <Route
          path="/E-commerce-website-Development"
          element={<ECommerceWeb />}
        />
        <Route path="/Game-Development" element={<GameDev />} />
        <Route path="/Software-Development" element={<SoftwareDev />} />
        <Route path="/Designing-Services" element={<Designing />} />
        <Route path="/Startup-Services" element={<StartupServices />} />
        <Route path="/Android-App-Development" element={<AndroidAppDev />} />
        <Route path="/IPhone-App-Development" element={<IphoneAppDev />} />
        <Route path="/IPadAppDevelopment" element={<IpadAppDev />} />
        <Route path="/React-Native-Development" element={<ReactNativeDev />} />
        <Route path="/iBeacon-App-Development" element={<IBeaconAppDev />} />
        <Route path="/IOT-App-Development" element={<IOTAppDev />} />
        <Route path="/watch-app-development" element={<AppleWatch />} />

        {/* Hire Us Link */}
        <Route path="/Hire-IOS-Developer" element={<HireIOSDev />} />
        <Route path="/hire-android-developer" element={<HireAndroidDev />} />
        <Route
          path="/hire-react-native-developer"
          element={<HireReactNativeDev />}
        />
        <Route path="/hire-flutter-developer" element={<HireFlutterDev />} />

        {/* Solution Link */}
        <Route
          path="/Food-Delivery-App-Development"
          element={<FoodDelivery />}
        />
        {/* PortFolio Link */}
        <Route path="/portfolio" element={<PortFolio />} />
        {/* Contact us Link */}
        <Route path="/contactUs" element={<ContactUs />} />
        {/* Blog Link */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/popup" element={<PopUp />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
