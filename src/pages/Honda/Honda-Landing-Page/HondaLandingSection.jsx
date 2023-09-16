import React from 'react'
import './honda-landing-section.css'
import { TiresPicture } from '../../../assets'
import { Footer, HondaNavbar, SearchBar } from '../../../components'

const HondaLandingSection = () => {
  return (
    <div className='landing-container'>
      <div className='navbar-container'>
        <HondaNavbar />
      </div>
        <div className='body-div'>
            <img src={TiresPicture} />
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
