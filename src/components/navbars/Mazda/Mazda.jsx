import React from 'react'
import './mazda.css'
import MazdaLogo from '../../../assets/mazda.png'
import {PiShoppingCartSimple} from 'react-icons/pi'

const Mazda = () => {
  return (
    <nav className='nav'>
        <div className='mazda-nav-container'>
            <div className='logo-container'>
                <img src={MazdaLogo} alt="hyundai-logo"/>
            </div>
            <ul>
                <li id='active'>Home</li>
                <li>Tires</li>
                <li>Wheels</li>
                <li>Accessories</li>
                <li>Packages</li>
                <li>Contact Us</li>
            </ul>
            <div className='btn-container'>
                <button>Sign In</button>
                <div>
                    <PiShoppingCartSimple className='shopping-cart'/>
                    <button>03</button>

                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Mazda
