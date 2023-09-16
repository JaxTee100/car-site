import React, { useState } from 'react'
import './honda.css'
import HondaLogo from '../../../assets/honda-group.png'
import {NavLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import {PiShoppingCartSimple} from 'react-icons/pi'

const Honda = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const [showMenuButton, setShowMenuButton] = useState(false)

    const dropdown = () => {
        setShowDropdown(!showDropdown)
        console.log('clicked!!')
    }

    const showMenu = () => {
        setShowMenuButton(!showMenuButton)
        console.log('error-check')
    }
  return (
    <nav className='nav'>
        <div className='honda-nav-container'>
            
            <div className='logo-container'>
                <div className='menu-btn'>
                    <FaBars size={24} onClick={showMenu}/>
                    {showMenuButton &&
                        <div className='menu-container'>
                            <p><NavLink to='/honda-home' className='link'>Home</NavLink></p>
                            <p><NavLink to='/honda-wheels' className='link'>Wheels</NavLink></p>
                            <p><NavLink to='/honda-accessories' className='link'>Accessories</NavLink></p>
                            <p><NavLink to='/honda-packages' className='link'>Packages</NavLink></p>
                            <p><NavLink to='/honda-contact' className='link'>Contact Us</NavLink></p>
                        </div>
                    }
                </div>
                <img src={HondaLogo} alt="honda-logo"/>
                <p id='north'>Northern Honda</p>

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
                <button className='honda-button' onClick={dropdown}>Sign In</button>
                <div className='shopping-cart-container'>
                    <PiShoppingCartSimple size={18} className='shopping-cart'/>
                    <div>03</div>

                </div>
            </div>
            {
                showDropdown && 
                <div className='drop-down'>
                    <p>Leads</p>
                    <p>Quotes</p>
                    <p>CMS</p>
                    <p>Logout</p>
                    <p>Francais</p>
                </div>
            }
            
        </div>
    </nav>
    
  )
}

export default Honda
