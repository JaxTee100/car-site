import React, { useState } from 'react'
import './wheels.page.css'
import Logo from '../../../assets/Honda/honda-logo.png'
import {  CarPreview, Footer, HondaNavbar, SearchBar} from '../../../components'
import { WheelResults } from '../../../containers'

const Wheels = () => {
  const [showResult, setShowResult] = useState(false)

  const showResults = () => {
    setShowResult(!showResult)
  }
  
  return (
    <div className='wheels-container'>
      <HondaNavbar />
      <div className='wheels-header'>
        <div className='title'>
          <div className='logo'>
            <img src={Logo} alt='logo'/>
            <p>Honda Tire Source</p>
          </div>
          <div className='heading'>
            <h1>LOWEST PRICE</h1>
            <p>Guarantee</p>
          </div>
        </div>
        <div className='wheels-img'>

        </div>
      </div>
      <div className='search-container'>
        <SearchBar showResults={showResults}/>
      </div>
      {showResult && 
      <div className='results'>
        <div className='search-results'>
          <div className='search-image'>

          </div>
          <div className='car-preview'>
            <CarPreview />
          </div>
          
          
        </div>
        <div className='wheels-cards'>
          <WheelResults />
        </div>
      </div>

  }
      
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Wheels
