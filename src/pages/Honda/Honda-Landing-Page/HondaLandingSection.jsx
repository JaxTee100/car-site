import React from 'react'
import './honda-landing-section.css'
import { TiresPicture } from '../../../assets'
import { SearchBar } from '../../../components'

const HondaLandingSection = () => {
  return (
    <div className='landing-container'>
        <div className='body-div'>
            <img src={TiresPicture} />
        </div>
        <div className='search-div'>
            <SearchBar />
        </div>
    </div>
  )
}

export default HondaLandingSection
