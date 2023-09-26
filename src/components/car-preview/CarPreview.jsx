import React from 'react'
import './car-preview.css'
import Car from '../../assets/Honda/car-preview.png'

const CarPreview = () => {
  return (
    <div className='preview-container'>
      <div className='preview-header'>
        <h2>CR-V Hybrid Touring</h2>
        <p>You can customize the color of the car & select a wheel to preview</p>
      </div>
      <div className='preview'>
        <div className='preview-image'>
            <img src={Car} alt='volswagen'/>
        </div>
        <div className='preview-colors'>
            <div className='colors'>
                <div className='circle' id='circle1'></div>
                <div className='circle' id='circle2'></div>
                <div className='circle' id='circle3'></div>
                <div className='circle' id='circle4'></div>
                <div className='circle' id='circle5'></div>
                <div className='circle' id='circle6'></div>
            </div>
        </div>
        
      </div>
      <p>
        Vehicle may not appear exactly as shown
      </p>
    </div>
  )
}

export default CarPreview
