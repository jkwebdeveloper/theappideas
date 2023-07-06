import Lottie from 'lottie-react'
import React from 'react'
import whatsappanimation from '../assets/images/139413-whatsappp-icone-verde.json'

const Whatsapp = () => {
  return (
    <div className="fix_whatsapp_btn">
      <a
        href="https://api.whatsapp.com/send?phone=918866564279"
        target="_blank"
      >
        <Lottie
          animationData={whatsappanimation}
          loop={true}
          style={{ height: '80px' }}
        />
      </a>
    </div>
  )
}

export default Whatsapp
