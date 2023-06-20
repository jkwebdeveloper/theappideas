import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import MobileAppDevelopment from './pages/MobileAppDevelopment/MobileAppDevelopment'
import WebDev from './pages/Services/Web Development/WebDevelopment'
import PortFolio from './pages/PortFolio'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import DigitalMarketing from './pages/Services/Digital Maketing/DigitalMarketing'
import ECommerceWeb from './pages/Services/ECommerceWeb/ECommerceWeb'
import SoftwareDev from './pages/Services/Software Development/SoftwareDev'
import Designing from './pages/Services/Designing Services/Designing'
import StartupServices from './pages/StartupServices'
import HireIOSDev from './pages/Hire Us/Hire Mobile App Dev/HireIOSDev'
import FoodDelivery from './pages/Solutions/DeliveryApp/FoodDelivery'
import MLMWebsiteAndApp from './pages/Solutions/MLMWebsiteAndApp'
import Error404 from './pages/Error404'
import AndroidAppDevelopment from './pages/MobileAppDevelopment/AndroidAppDevelopment'
import IphoneAppDevelopment from './pages/MobileAppDevelopment/IphoneAppDevelopment'
import IpadAppDevelopment from './pages/MobileAppDevelopment/IpadAppDevelopment'
import ReactNativeDevelopment from './pages/MobileAppDevelopment/ReactNativeDevelopment'
import IOTAppDevelopment from './pages/MobileAppDevelopment/IOTAppDevelopment'
import HireAndroidDev from './pages/Hire Us/Hire Mobile App Dev/HireAndroidDev'
import HireReactNativeDev from './pages/Hire Us/Hire Mobile App Dev/HireReactNativeDev'
import HireFlutterDev from './pages/Hire Us/Hire Mobile App Dev/HireFlutterDev'
import HireLaravelDev from './pages/Hire Us/Hire Web Dev/HireLaravelDev'
import HireWordPressDev from './pages/Hire Us/Hire Web Dev/HireWordPressDev'
import HireNodeDev from './pages/Hire Us/Hire Web Dev/HireNodeDev'
import HireCodeIgniter from './pages/Hire Us/Hire Web Dev/HireCodeIgniter'
import HirePHPDev from './pages/Hire Us/Hire Web Dev/HirePHPDev'
import HirePythonDev from './pages/Hire Us/Hire Web Dev/HirePythonDev'
import HireReactJsDev from './pages/Hire Us/Hire Web Dev/HireReactJsDev'
import HireAngular from './pages/Hire Us/Hire Web Dev/HireAngular'
import CourierPickup from './pages/Solutions/DeliveryApp/CourierPickup'
import GroceryApp from './pages/Solutions/DeliveryApp/GroceryApp'
import TaxiBooking from './pages/Solutions/OnDemandApp/TaxiBooking'
import DoctorHiring from './pages/Solutions/OnDemandApp/DoctorHiring'
import SecurityApp from './pages/Solutions/OnDemandApp/SecurityApp'
import SalonApp from './pages/Solutions/PopularSolution/SalonApp'
import DriverTrackingApp from './pages/Solutions/PopularSolution/DriverTrackingApp'
import ElearningApp from './pages/Solutions/PopularSolution/ElearningApp'
import DatingApp from './pages/Solutions/PopularSolution/DatingApp'
import EcommerceApp from './pages/Solutions/PopularSolution/EcommerceApp'
import HireShopify from './pages/Hire Us/Hire ECommerce/HireShopify'
import HireMagento from './pages/Hire Us/Hire ECommerce/HireMagento'
import SEO from './pages/Services/Digital Maketing/SEO'
import SocialMedia from './pages/Services/Digital Maketing/SocialMedia'
import ASO from './pages/Services/Digital Maketing/ASO'
import ShopifyDev from './pages/Services/ECommerceWeb/ShopifyDev'
import MagentoDev from './pages/Services/ECommerceWeb/MagentoDev'
import Joomla from './pages/Services/ECommerceWeb/Joomla'
import DrupalDev from './pages/Services/ECommerceWeb/DrupalDev'
import WordPressDeveloper from './pages/Services/Web Development/WordPressDeveloper'
import PHPDev from './pages/Services/Web Development/PHPDev'
import Angular from './pages/Services/Web Development/Angular'
import WebFlowDev from './pages/Services/Web Development/WebFlowDev'
import AspNet from './pages/Services/Software Development/AspNet'
import DotNetDev from './pages/Services/Software Development/DotNetDev'
import GraphicsDesign from './pages/Services/Designing Services/GraphicsDesign'
import MobileAppDesign from './pages/Services/Designing Services/MobileAppDesign'
import LifeTAI from './pages/Company/LifeTAI'
import Careers from './pages/Company/Careers'
import Testimonial from './pages/Company/Testimonial'
import OurTeam from './pages/Company/OurTeam'
import OurProcess from './pages/Company/OurProcess'
import Solutions from './pages/Solutions/Solutions'
import HireUs from './pages/Hire Us/HireUs'
import LawyerWeb from './pages/LawyerWeb'
import MobileAppToronto from './pages/Sitemap/LocationsWiseServices/MobileAppToronto'
import MobileAppNewyork from './pages/Sitemap/LocationsWiseServices/MobileAppNewyork'
import MobileAppBarcelona from './pages/Sitemap/LocationsWiseServices/MobileAppBarcelona'
import SiteMap from './pages/Sitemap/SiteMap'
import ABoutUs from './pages/Company/ABoutUs'
import GetAQuoteModal from './components/GetAQuoteModal'
import MobileAppSydney from './pages/Sitemap/LocationsWiseServices/MobileAppSydney'
import MobileAppAdelaide from './pages/Sitemap/LocationsWiseServices/MobileAppAdelaide'
import MobileAppBrisbane from './pages/Sitemap/LocationsWiseServices/MobileAppBrisbane'
import MobileAppBristol from './pages/Sitemap/LocationsWiseServices/MobileAppBristol'
import MobileAppLiverpool from './pages/Sitemap/LocationsWiseServices/MobileAppLiverpool'
import MobileAppManchester from './pages/Sitemap/LocationsWiseServices/MobileAppManchester'
import MobileAppMelbourne from './pages/Sitemap/LocationsWiseServices/MobileAppMelbourne'
import MobileAppLondon from './pages/Sitemap/LocationsWiseServices/MobileAppLondon'
import CareerApply from './pages/CareerApply'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <BrowserRouter>
      {/* get a quote modal */}
      {openModal && <GetAQuoteModal setOpenModal={setOpenModal} />}

      {/* <Header /> */}
      <Header setOpenModal={setOpenModal} openModal={openModal} />
      <Routes>
        {/* Home page Link */}
        <Route path="/" element={<Home />} />

        {/* Company Link */}
        <Route path="/about-us" element={<ABoutUs />} />
        <Route path="/life-at-tai" element={<LifeTAI />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-application" element={<CareerApply />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-process" element={<OurProcess />} />

        {/* Services Link */}
        <Route
          path="/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/digital-Marketing-Agency"
          element={<DigitalMarketing />}
        />
        <Route path="/web-development" element={<WebDev />} />
        <Route
          path="/e-commerce-website-Development"
          element={<ECommerceWeb />}
        />

        <Route path="/software-Development" element={<SoftwareDev />} />
        <Route path="/designing-Services" element={<Designing />} />
        <Route path="/startup-Services" element={<StartupServices />} />
        <Route
          path="/android-App-Development"
          element={<AndroidAppDevelopment />}
        />
        <Route
          path="/iPhone-App-Development"
          element={<IphoneAppDevelopment />}
        />
        <Route path="/ipad-app-development" element={<IpadAppDevelopment />} />
        <Route
          path="/react-Native-Development"
          element={<ReactNativeDevelopment />}
        />
        <Route path="/iot-app-development" element={<IOTAppDevelopment />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/social-media-marketing" element={<SocialMedia />} />
        <Route path="/aso" element={<ASO />} />
        <Route path="/shopify-development" element={<ShopifyDev />} />
        <Route path="/magento-development" element={<MagentoDev />} />
        <Route path="/joomla-development" element={<Joomla />} />
        <Route path="/drupal-development" element={<DrupalDev />} />
        <Route path="/wordpress-development" element={<WordPressDeveloper />} />
        <Route path="/php-development" element={<PHPDev />} />
        <Route path="/angular-development" element={<Angular />} />
        <Route path="/webflow-development" element={<WebFlowDev />} />
        <Route path="/asp-net-development" element={<AspNet />} />
        <Route path="/dotNetNuke-development" element={<DotNetDev />} />
        <Route path="/graphics-design" element={<GraphicsDesign />} />
        <Route path="/mobile-app-design" element={<MobileAppDesign />} />

        {/* Hire Us Link */}
        <Route path="/hire-us" element={<HireUs />} />
        <Route path="/hire-ios-developer" element={<HireIOSDev />} />
        <Route path="/hire-android-developer" element={<HireAndroidDev />} />
        <Route
          path="/hire-react-native-developer"
          element={<HireReactNativeDev />}
        />
        <Route path="/hire-flutter-developer" element={<HireFlutterDev />} />
        <Route path="/hire-laravel-developer" element={<HireLaravelDev />} />
        <Route
          path="/hire-wordpress-developer"
          element={<HireWordPressDev />}
        />
        <Route path="/hire-nodejs-developer" element={<HireNodeDev />} />
        <Route
          path="/hire-codeIgniter-developer"
          element={<HireCodeIgniter />}
        />
        <Route path="/hire-php-developer" element={<HirePHPDev />} />
        <Route path="/hire-python-developer" element={<HirePythonDev />} />
        <Route path="/hire-reactjs-developer" element={<HireReactJsDev />} />
        <Route path="/hire-angular-developer" element={<HireAngular />} />
        <Route path="/hire-shopify-development" element={<HireShopify />} />
        <Route path="/hire-magento-development" element={<HireMagento />} />

        {/* Solution Link */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/mlm-website" element={<MLMWebsiteAndApp />} />
        <Route
          path="/food-delivery-app-development"
          element={<FoodDelivery />}
        />
        <Route
          path="/courier-pickup-management-solution"
          element={<CourierPickup />}
        />
        <Route path="/taxi-booking-app-development" element={<TaxiBooking />} />
        <Route path="/grocery-app-developer" element={<GroceryApp />} />
        <Route path="/doctor-hiring-app-solution" element={<DoctorHiring />} />
        <Route path="/security-app-solution" element={<SecurityApp />} />
        <Route path="/salon-service-app" element={<SalonApp />} />
        <Route path="/e-learning-app-development" element={<ElearningApp />} />
        <Route path="/dating-app-development" element={<DatingApp />} />
        <Route path="/e-commerce-app-development" element={<EcommerceApp />} />
        <Route
          path="/driver-tracking-app-development"
          element={<DriverTrackingApp />}
        />
        {/* PortFolio Link */}
        <Route path="/portfolio" element={<PortFolio />} />
        {/* Contact us Link */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Blog Link */}
        <Route path="/blog" element={<Blog />} />

        <Route path="/*" element={<Error404 />} />
        <Route path="/lawyer-website-solution" element={<LawyerWeb />} />

        {/* Sitemap Link */}
        <Route path="/sitemap" element={<SiteMap />} />
        <Route
          path="/mobile-app-development-toronto"
          element={<MobileAppToronto />}
        />
        <Route
          path="/mobile-app-development-new-york"
          element={<MobileAppNewyork />}
        />
        <Route
          path="/mobile-app-development-barcelona"
          element={<MobileAppBarcelona />}
        />
        <Route
          path="/mobile-app-development-sydney"
          element={<MobileAppSydney />}
        />
        <Route
          path="/mobile-app-development-adelaide"
          element={<MobileAppAdelaide />}
        />
        <Route
          path="/mobile-app-development-brisbane"
          element={<MobileAppBrisbane />}
        />
        <Route
          path="/mobile-app-development-bristol"
          element={<MobileAppBristol />}
        />
        <Route
          path="/mobile-app-development-liverpool"
          element={<MobileAppLiverpool />}
        />
        <Route
          path="/mobile-app-development-manchester"
          element={<MobileAppManchester />}
        />
        <Route
          path="/mobile-app-development-melbourne"
          element={<MobileAppMelbourne />}
        />
        <Route
          path="/mobile-app-development-london"
          element={<MobileAppLondon />}
        />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  )
}

export default App
