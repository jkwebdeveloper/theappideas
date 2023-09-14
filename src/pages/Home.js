import React, { useEffect, useState } from 'react'
import Services from '../components/Home/Services/Services'
import TestiMonial from '../components/Testimonial/TestiMonial'
import Blog from '../components/Home/Blog/Blog'
import About from '../components/Home/About us/About'
import ContactUs from '../components/ContactUs'
import Work from '../components/Workdone/Work'
import Banner from '../components/Home/Banner/Banner'
import { Helmet } from 'react-helmet'
import axios from 'axios'


const Home = ({ setOpenModal }) => {
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(false)

  const handleGetBanners = () => {
    setLoading(true)
    axios
      ("https://the-app-ideas.onrender.com/api/banner", {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'GET'
      })
      .then((res) => {
        setBanners(res.data.bannerData)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      });
  };

  useEffect(() => {
   handleGetBanners()
  }, [])
  

  return (
    <>
      <Helmet title="Best Web & Mobile App Development Company" />
      <Banner loading={loading} banners={banners} setOpenModal={setOpenModal} />
      <About />
      <Services />
      <Work />
      <TestiMonial />
      <Blog />
      <ContactUs question="Would you like to execute any project?" />
    </>
  )
}

export default Home
