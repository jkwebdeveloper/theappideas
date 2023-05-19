import React from "react";
// import Header from "./components/Header/Header";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
import HireLaravelDev from "./pages/Hire Us/Hire Web Dev/HireLaravelDev";
import HireWordPressDev from "./pages/Hire Us/Hire Web Dev/HireWordPressDev";
import HireNodeDev from "./pages/Hire Us/Hire Web Dev/HireNodeDev";
import HireCodeIgniter from "./pages/Hire Us/Hire Web Dev/HireCodeIgniter";
import HirePHPDev from "./pages/Hire Us/Hire Web Dev/HirePHPDev";
import HirePythonDev from "./pages/Hire Us/Hire Web Dev/HirePythonDev";
import HireReactJsDev from "./pages/Hire Us/Hire Web Dev/HireReactJsDev";
import HireAngular from "./pages/Hire Us/Hire Web Dev/HireAngular";
import CourierPickup from "./pages/Solutions/DeliveryApp/CourierPickup";
import GroceryApp from "./pages/Solutions/DeliveryApp/GroceryApp";
import TaxiBooking from "./pages/Solutions/OnDemandApp/TaxiBooking";
import DoctorHiring from "./pages/Solutions/OnDemandApp/DoctorHiring";
import SecurityApp from "./pages/Solutions/OnDemandApp/SecurityApp";
import SalonApp from "./pages/Solutions/PopularSolution/SalonApp";
import DriverTrackingApp from "./pages/Solutions/PopularSolution/DriverTrackingApp";
import ElearningApp from "./pages/Solutions/PopularSolution/ElearningApp";
import DatingApp from "./pages/Solutions/PopularSolution/DatingApp";
import EcommerceApp from "./pages/Solutions/PopularSolution/EcommerceApp";
import HireShopify from "./pages/Hire Us/Hire ECommerce/HireShopify";
import HireMagento from "./pages/Hire Us/Hire ECommerce/HireMagento";
import SEO from "./pages/Services/Digital Maketing/SEO";
import SocialMedia from "./pages/Services/Digital Maketing/SocialMedia";
import ASO from "./pages/Services/Digital Maketing/ASO";
import GuestBlogging from "./pages/Services/Digital Maketing/GuestBlogging";
import ShopifyDev from "./pages/Services/ECommerceWeb/ShopifyDev";
import MagentoDev from "./pages/Services/ECommerceWeb/MagentoDev";
import Joomla from "./pages/Services/ECommerceWeb/Joomla";
import DrupalDev from "./pages/Services/ECommerceWeb/DrupalDev";
import MobileGameDev from "./pages/Services/Game Developer/MobileGameDev";
import TwoDGameDev from "./pages/Services/Game Developer/TwoDGameDev";
import UnityGameDev from "./pages/Services/Game Developer/UnityGameDev";
import VirtualGameDev from "./pages/Services/Game Developer/VirtualGameDev";
import HTMLGameDev from "./pages/Services/Game Developer/HTMLGameDev";
import COCOSGameDev from "./pages/Services/Game Developer/COCOSGameDev";
import WordPressDeveloper from "./pages/Services/Web Development/WordPressDeveloper";
import PHPDev from "./pages/Services/Web Development/PHPDev";
import Angular from "./pages/Services/Web Development/Angular";
import WebFlowDev from "./pages/Services/Web Development/WebFlowDev";
import AspNet from "./pages/Services/Software Development/AspNet";
import DotNetDev from "./pages/Services/Software Development/DotNetDev";
import GraphicsDesign from "./pages/Services/Designing Services/GraphicsDesign";
import MobileAppDesign from "./pages/Services/Designing Services/MobileAppDesign";
import LifeTAI from "./pages/Company/LifeTAI";
import Careers from "./pages/Company/Careers";
import Testimonial from "./pages/Company/Testimonial";
import OurTeam from "./pages/Company/OurTeam";
import OurProcess from "./pages/Company/OurProcess";
import Solutions from "./components/Solutions";
import HireUs from "./components/HireUs";

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
        <Route path="/Life-at-Tai" element={<LifeTAI />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Our-Team" element={<OurTeam />} />
        <Route path="/Our-Process" element={<OurProcess />} />

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
        <Route path="/seo" element={<SEO />} />
        <Route path="/Social-Media-Marketing" element={<SocialMedia />} />
        <Route path="/ASO-company" element={<ASO />} />
        <Route path="/Guest-Blogging" element={<GuestBlogging />} />
        <Route path="/Shopify-Development" element={<ShopifyDev />} />
        <Route path="/Magento-Development" element={<MagentoDev />} />
        <Route path="/Joomla-Development" element={<Joomla />} />
        <Route path="/Drupal-Development" element={<DrupalDev />} />
        <Route path="/Mobile-Game-Development" element={<MobileGameDev />} />
        <Route path="/2D-3D-Game-Development" element={<TwoDGameDev />} />
        <Route path="/Unity-Game-Development" element={<UnityGameDev />} />
        <Route
          path="/Virtual-Reality-Game-Development"
          element={<VirtualGameDev />}
        />
        <Route path="/HTML5-Games-Development" element={<HTMLGameDev />} />
        <Route path="/COCOS2D-Game-Development" element={<COCOSGameDev />} />
        <Route path="/WordPress-Development" element={<WordPressDeveloper />} />
        <Route path="/PHP-Development" element={<PHPDev />} />
        <Route path="/Angular-Development" element={<Angular />} />
        <Route path="/Webflow-Development" element={<WebFlowDev />} />
        <Route path="/Asp.Net-Development" element={<AspNet />} />
        <Route path="/DotNetNuke-Development" element={<DotNetDev />} />
        <Route path="/Graphics-Design" element={<GraphicsDesign />} />
        <Route path="/Mobile-App-Design" element={<MobileAppDesign />} />

        {/* Hire Us Link */}
        <Route path="/hire-us" element={<HireUs />} />
        <Route path="/Hire-IOS-Developer" element={<HireIOSDev />} />
        <Route path="/hire-android-developer" element={<HireAndroidDev />} />
        <Route
          path="/hire-react-native-developer"
          element={<HireReactNativeDev />}
        />
        <Route path="/hire-flutter-developer" element={<HireFlutterDev />} />
        <Route path="/Hire-Laravel-Developer" element={<HireLaravelDev />} />
        <Route
          path="/Hire-WordPress-Developer"
          element={<HireWordPressDev />}
        />
        <Route path="/Hire-nodejs-developer" element={<HireNodeDev />} />
        <Route
          path="/hire-CodeIgniter-developer"
          element={<HireCodeIgniter />}
        />
        <Route path="/hire-php-developer" element={<HirePHPDev />} />
        <Route path="/Hire-python-developer" element={<HirePythonDev />} />
        <Route path="/hire-reactjs-developer" element={<HireReactJsDev />} />
        <Route path="/hire-HireAngular-developer" element={<HireAngular />} />
        <Route path="/Hire-Shopify-Development" element={<HireShopify />} />
        <Route path="/Hire-Magento-Development" element={<HireMagento />} />

        {/* Solution Link */}
        <Route path="/solutions" element={<Solutions />} />
        <Route
          path="/Food-Delivery-App-Development"
          element={<FoodDelivery />}
        />
        <Route
          path="/Courier-Pickup-Management-Solution"
          element={<CourierPickup />}
        />
        <Route path="/Taxi-Booking-App-Development" element={<TaxiBooking />} />
        <Route path="/grocery-app-developer" element={<GroceryApp />} />
        <Route path="/Doctor-Hiring-App-Solution" element={<DoctorHiring />} />
        <Route path="/Security-App-Solution" element={<SecurityApp />} />
        <Route path="/Salon-Service-App" element={<SalonApp />} />
        <Route path="/E-learning-App-Development" element={<ElearningApp />} />
        <Route path="/Dating-App-Development" element={<DatingApp />} />
        <Route path="/eCommerce-App-Development" element={<EcommerceApp />} />
        <Route
          path="/Driver-Tracking-App-Development"
          element={<DriverTrackingApp />}
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
