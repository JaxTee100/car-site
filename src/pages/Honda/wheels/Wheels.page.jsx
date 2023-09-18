import React from 'react'
import './wheels.page.css'
import Logo from '../../../assets/Honda/honda-logo.png'
import { Footer, HondaNavbar, SearchBar} from '../../../components'
import { WheelResults } from '../../../containers'

const Wheels = () => {
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
        <SearchBar />
      </div>
      <div className='search-results'>
        <div className='search-image'>

        </div>
        <div className='wheels-card'>

        </div>
      </div>
      <div>
        <WheelResults />
      </div>
      <Footer />
    </div>
  )
}

export default Wheels
