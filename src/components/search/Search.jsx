import React, { useState } from 'react'
import './search.css'
import {BsCalendarDate} from 'react-icons/bs'
import {AiOutlineRight, AiOutlineDown, AiOutlineCar, AiOutlineInfoCircle} from 'react-icons/ai'
import {LuSettings2} from 'react-icons/lu'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {BiMap} from 'react-icons/bi'

const Search = () => {
  //toggle states
  const [vehicle, setVehicle] = useState(true)
  const [tires, setTires] = useState(false);

  //dropdown states
  const [dropDown, setDropDown]  = useState(false)



  //functions for toggle buttons
  const showVehicle = () =>{
    setVehicle(true)
    setTires(false)
  }
  const showTire = () =>{
    setVehicle(false)
    setTires(true)
  }

  //functions for dropdown
  const dropdown = () =>{
    setDropDown(!dropDown)
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
            <div className='year'>
              <BsCalendarDate size={18}/>
              <input type='text' placeholder='Select Year'/>
              {
                dropDown ? <AiOutlineDown size={14} onClick={dropdown} /> : <AiOutlineRight size={14} onClick={dropdown}/>
              }
              
            </div>
            <div className='year'>
              <LuSettings2 size={18}/>
              <input type='text' placeholder='Select Maker'/>
              {
                dropDown ? <AiOutlineDown size={14} onClick={dropdown} /> : <AiOutlineRight size={14} onClick={dropdown}/>
              }
              
            </div>
            <div className='year'>
              <AiOutlineCar size={18}/>
              <input type='text' placeholder='Select Model'/>
              {
                dropDown ? <AiOutlineDown size={14} onClick={dropdown} /> : <AiOutlineRight size={14} onClick={dropdown}/>
              }
              
            </div>
            <div className='year'>
              <PiPokerChipDuotone size={18}/>
              <input type='text' placeholder='Select Product Type'/>
              {
                dropDown ? <AiOutlineDown size={14} onClick={dropdown} /> : <AiOutlineRight size={14} onClick={dropdown}/>
              }
              
            </div>
            <div className='year'>
              <BiMap size={18}/>
              <input type='text' placeholder='Enter Zip Code'/>
              
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
