import React, { useState } from 'react'
import './car-item.css'
import Dropdown from '../dropdown/Dropdown'
import Tire from '../../assets/tire.png'
import Tirelink from'../../assets/tire-link.png'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md';
import {PiArrowSquareOutLight} from 'react-icons/pi'

const CarItem = ({name, logo}) => {

  const[showItems, setShowItems] = useState(false)
  const containerStyle = {
    height: showItems ? '470px' : '270px',
    overflow: 'hidden', // Hide content if it overflows
    transition: 'height 0.9s ease'
  };

  const handleClick =() =>{
    setShowItems(!showItems)
  }
  return (
    <div className='car-item-container' style={containerStyle}>
      <div className='title-logo'>
        <div>
            <h1>{name}</h1>
            <p>#89085 - 235/65R17 - 104/H/SL   Price:  <span>$256.59</span></p>
        </div>
        <img src={logo}/>
      </div>
      <div className='tire-position'>
        <div className='front'>
          <p>Front Tire:</p>
          <Dropdown />
        </div>
        <div className='back'>
          <p>Back Tire:</p>
          <Dropdown />
        </div>
        <img src={Tire} className='tire-img'/>
      </div>
      <div className='values'>
        <p>Total: <span>$974.40</span></p>
        <p>Available Stock: <span>08</span></p>
        
      </div>
      <div className='footer'>
        <div>
          <img src={Tirelink} />
          <p>20+ Tires - For 5 Location</p>
          
        </div>
        {
          !showItems ? 
          <MdOutlineKeyboardArrowDown onClick={handleClick} size={36}/> 
          : <MdOutlineKeyboardArrowUp onClick={handleClick} size={36}/> 
        }
        
        


      </div>
      {
        showItems && 
        <div className='location-dropdowns'>
          <div>
            <p>Touchette: <strong>9 Tires</strong>  <PiArrowSquareOutLight /></p>
            <p>5 mins ago</p>
          </div>
          <div>
            <p>Cambridge: <strong>8 Tires</strong> <PiArrowSquareOutLight /></p>
            <p>5 mins ago</p>
          </div>
          <div>
            <p>Mississauga: <strong>8 Tires</strong> <PiArrowSquareOutLight /></p>
            <p>2 mins ago</p>
          </div>
          <div>
            <p>Concord: <strong>8 Tires</strong> <PiArrowSquareOutLight /></p>
            <p>14 mins ago</p>
          </div>
          <div>
            <p>Stax inc: <strong>7 Tires</strong> <PiArrowSquareOutLight /></p>
            <p>7 mins ago</p>
          </div>
        </div>
      }
      
        
      
    </div>
  )
}

export default CarItem
