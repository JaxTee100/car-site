import React from 'react'
import './search.css'
import {BsCalendarDate} from 'react-icons/bs'
import {AiOutlineRight, AiOutlineCar} from 'react-icons/ai'
import {LuSettings2} from 'react-icons/lu'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {BiMap} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='search-container'>
      <div className='toggle'>
        <button>Search by Vehicle</button>
        <button>Search by Size</button>
      </div>
      <div className='type'>
        <div>
          <div className='year'>
            <div><BsCalendarDate /></div>
            <p>Select Year</p>
            <div><AiOutlineRight /></div>
          </div>
          <div className='maker'>
            <div><LuSettings2 /></div>
            <p>Select Maker</p>
            <div><AiOutlineRight /></div>
          </div>
          <div className='model'>
            <div><AiOutlineCar /></div>
            <p>Select Model</p>
            <div><AiOutlineRight /></div>
          </div>
          <div className='product'>
            <div><PiPokerChipDuotone /></div>
            <p>Select Product Type</p>
            <div><AiOutlineRight /></div>
          </div>
          <div className='zipcode'>
            <div><BiMap /></div>
            <p>Enter Zip Code</p>
          </div>
        </div>
        <button>View Results</button>
      </div>
    </div>
  )
}

export default Search
