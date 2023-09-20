import React from 'react'
import './honda-layout.css'
import Wheels from '../../../assets/Honda/wheels.jpg'
import { Footer, HondaNavbar } from '../../../components'

const HondaLayout = ({children}) => {
  return (
    <div className='layout-container'>
      <img src={Wheels} alt='layout' className='img-class' />
      
            {children}
        
    </div>
  )
}

export default HondaLayout
