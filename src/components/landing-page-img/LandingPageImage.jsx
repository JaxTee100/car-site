import React from 'react'
import './landing-page-image.css'
import TiresPic  from '../../assets/Honda/tires.png'

const LandingPageImage = () => {
  return (
    <div className='landing-image-container'>
      <img src={TiresPic} alt='tires'/>
    </div>
  )
}

export default LandingPageImage
