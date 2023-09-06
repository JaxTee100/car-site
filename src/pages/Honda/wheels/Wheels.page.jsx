import React from 'react'
import './wheels.page.css'
import Logo from '../../../assets/Honda/honda-logo.png'
import { CarItem, SearchBar, WheelCard } from '../../../components'

const Wheels = () => {
  return (
    <div className='wheels-container'>
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
        <SearchBar />
      </div>
      <div className='search-results'>
        <div className='search-image'>

        </div>
        <div className='wheels-card'>

        </div>
      </div>
      <div>
        <WheelCard />
      </div>
    </div>
  )
}

export default Wheels
