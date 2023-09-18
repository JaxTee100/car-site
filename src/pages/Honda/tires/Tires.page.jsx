import React from 'react'
import './tires.page.css'
import { Footer, HondaNavbar, SearchBar } from '../../../components'
import Logo from '../../../assets/Honda/honda-logo.png'

const Tires = () => {
  return (
    <div className='tire-container'>
      <HondaNavbar />
      <div className='tire-header'>
        <div className='title'>
          <div className='logo'>
            <img src={Logo} />
            <p>Honda Tire Source</p>
          </div>
          <div className='heading'>
            <h1>LOWEST PRICE</h1>
            <p>Guarantee</p>
          </div>
        </div>
        <div className='tire-img'>

        </div>
      </div>
      <div className='search-container'>
        <SearchBar />
      </div>
      <Footer />
    </div>
  )
}

export default Tires
