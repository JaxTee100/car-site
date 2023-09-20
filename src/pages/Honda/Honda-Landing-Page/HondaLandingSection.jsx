import React from 'react'
import './honda-landing-section.css'
import { Footer, HondaNavbar, LandingImage, SearchBar } from '../../../components'
import BackgroundImage from '../../../assets/Honda/wheels.jpg'

const HondaLandingSection = () => {
  return (
    <div className='landing-container'>
      <div className='navbar-container'>
        <HondaNavbar />
      </div>
        <div className='body-div'>
            <LandingImage />
        </div>
        <div className='search-div'>
            <SearchBar />
        </div>
        <div className='foot-container'>
          <Footer />
        </div>
        
    </div>
  )
}

export default HondaLandingSection
