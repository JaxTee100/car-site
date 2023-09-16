import React from 'react'
import './footer.css'
import { Hankook, Bfgoorich, Continental, Firestone, Goodyear, Pirelli, Toyotires, Uniroyal, Yokohama } from '../../assets'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
                <img src={Hankook} id='logo1'/>
                <img src={Goodyear} id='logo2'/>
                <img src={Pirelli} id='logo3'/>
                <img src={Toyotires} id='logo4'/>
                <img src={Yokohama} id='logo5'/>
                <img src={Continental} id='logo6'/>
                <img src={Bfgoorich} id='logo7'/>
                <img src={Firestone} id='logo8'/>
                <img src={Uniroyal} id='logo9'/>
        </div>
        
    </footer>
  )
}

export default Footer
