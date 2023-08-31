import React from 'react'
import './honda2.css'
import HondaLogo from '../../../assets/honda-group.png'

import {PiShoppingCartSimple} from 'react-icons/pi'

const Honda2 = () => {
  return (
    <nav className='nav'>
        <div className='honda2-nav-container'>
            <div className='logo-container'>
                <img src={HondaLogo} alt="honda-logo"/>

            </div>
            <ul>
                <li id='active'>Home</li>
                <li>Tires</li>
                <li>Wheels</li>
                <li>Accessories</li>
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

export default Honda2
