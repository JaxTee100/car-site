import React from 'react'
import './honda.css'
import HondaLogo from '../../../assets/honda-group.png'
import {NavLink} from 'react-router-dom'

import {PiShoppingCartSimple} from 'react-icons/pi'

const Honda = () => {
  return (
    <nav className='nav'>
        <div className='honda-nav-container'>
            <div className='logo-container'>
                <img src={HondaLogo} alt="honda-logo"/>
                <p>Northern Honda</p>

            </div>
            <ul>
                <li><NavLink to='/honda-home' className='link'>Home</NavLink></li>
                <li><NavLink to='/honda-tires' className='link'>Tires</NavLink></li>
                <li><NavLink to='/honda-wheels' className='link'>Wheels</NavLink></li>
                <li><NavLink to='/honda-accessories' className='link'>Accessories</NavLink></li>
                <li><NavLink to='/honda-packages' className='link'>Packages</NavLink></li>
                <li><NavLink to='/honda-contact' className='link'>Contact Us</NavLink></li>
            </ul>
            <div className='btn-container'>
                <button className='honda-button'>Sign In</button>
                <div className='shopping-cart-container'>
                    <PiShoppingCartSimple size={18} className='shopping-cart'/>
                    <div>03</div>

                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default Honda
