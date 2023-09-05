import React from 'react'
import './footer.css'
import { Hankook, Bfgoorich, Continental, Firestone, Goodyear, Pirelli, Toyotires, Uniroyal, Yokohama } from '../../assets'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
                <img src={Hankook} />
                <img src={Goodyear} />
                <img src={Pirelli} />
                <img src={Toyotires}/>
                <img src={Yokohama}/>
                <img src={Continental}/>
                <img src={Bfgoorich} />
                <img src={Firestone} />
                <img src={Uniroyal} />
        </div>
        
    </footer>
  )
}

export default Footer
