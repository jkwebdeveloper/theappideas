import React, { useState, useEffect } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    console.log(goToTop)
  }
  return <>{showTopBtn && <BsFillArrowUpSquareFill onClick={goToTop} />}</>
}

export default ScrollToTop
