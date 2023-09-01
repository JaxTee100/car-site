import React, { useState } from 'react'
import './search.css'
import {BsCalendarDate} from 'react-icons/bs'
import {AiOutlineRight, AiOutlineCar, AiOutlineInfoCircle} from 'react-icons/ai'
import {LuSettings2} from 'react-icons/lu'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {BiMap} from 'react-icons/bi'

const Search = () => {
  const [vehicle, setVehicle] = useState(true)
  const [tires, setTires] = useState(false)
  const showVehicle = () =>{
    setVehicle(true)
    setTires(false)
  }
  const showTire = () =>{
    setVehicle(false)
    setTires(true)
  }
  return (
    <div className='search-container'>
      <div className='toggle'>
        <button className={`vehicle-btn ${vehicle ? 'blue-btn': 'white-btn'}`} onClick={showVehicle}>Search by Vehicle</button>
        <button className={`tire-btn ${tires ? 'blue-btn': 'white-btn'}`} onClick={showTire}>Search by Tire Size</button>
      </div>
      {
        vehicle && 
        <div className='vehicle'>
        <div className='vehicle-details'>

          <div className='year common-style'>
            <div id='year-icon' className='common-icon-style'><BsCalendarDate id='icon1' /></div>
            <p>Select Year</p>
            <div className='arrow-icon'><AiOutlineRight className='arrow-icons'/></div>
          </div>
          <div className='maker common-style'>
            <div id='maker-icon' className='common-icon-style'><LuSettings2 id='icon3'/></div>
            <p>Select Maker</p>
            <div className='arrow-icon'><AiOutlineRight className='arrow-icons'/></div>
          </div>
          <div className='model common-style'>
            <div id='model-icon' className='common-icon-style'><AiOutlineCar id='icon5'/></div>
            <p>Select Model</p>
            <div className='arrow-icon'><AiOutlineRight className='arrow-icons'/></div>
          </div>
          <div className='product common-style'>
            <div id='product-icon' className='common-icon-style'><PiPokerChipDuotone id='icon7'/></div>
            <p>Select Product Type</p>
            <div className='arrow-icon'><AiOutlineRight className='arrow-icons'/></div>
          </div>
          <div className='zipcode common-style'>
            <div id='zip-icon' className='common-icon-style'><BiMap id='icon9'/></div>
            <p>Enter Zip Code</p>
          </div>
        </div>
        <button>View Results</button>
      </div>
      }
      {
        tires && 
        <div className='tire'>
            
            <div className='tire-size'>
              <div className='common-icon-style'><PiPokerChipDuotone id='icon11'/></div>
              <p>Enter Tire Size</p>
              <div className='arrow-icon' id='location'><AiOutlineInfoCircle id='icon12'/></div>
            </div>
            <div className='postal-code'>
              <div className='common-icon-style'><BiMap id='icon13'/></div>
              <p>Enter Postal Code</p>
            </div>
            <button>View Results</button>
          
          
        </div>
      }
      
    </div>
  )
}

export default Search
