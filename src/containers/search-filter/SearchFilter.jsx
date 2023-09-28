import React from 'react'
import './search-filter.css'
import {BsCalendarDate} from 'react-icons/bs'
import { BrandDropdown, ItemsDropdown, ModelDropdown, PostalDropdown, Toggle, YearDropdown } from '../../components'

const SearchFilter = () => {
  return (
    <div className='search-filter-container'>

        {/* toggle button */}
      <div className='filter-toggle'>
        <Toggle />
      </div>

        {/* filters */}
      <div className='filter-inputs'>
        <div className='year-filter'>
          <YearDropdown />
        </div>
        <div className='model-filter'>
          <ModelDropdown />
        </div>
        <div className='brand-filter'>
          <BrandDropdown />
        </div>
        
        <div className='items-filter'>
          <ItemsDropdown />
        </div>
        <div className='postal-filter'>
          <PostalDropdown />
        </div>
        

      </div>

      {/* button */}
      <button className='result-btn'>
        View Results
      </button>
    </div>
  )
}

export default SearchFilter
