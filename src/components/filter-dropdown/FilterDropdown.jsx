import React, { useState } from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import './filter-dropdown.css'

const FilterDropdown = () => {
    const [selectedYear, setSelectedYear] = useState('2023'); // Default year
    const [showYears, setShowYears] = useState(false);


    const showAllYears = () =>{
        setShowYears(!showYears)
    }

  const years = [];
  for (let year = 2010; year <= 2023; year++) {
    years.push(year.toString());
  }

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setShowYears(false)
  };

  return (
    <div className='filter-dropdown-container'>
        <div className='year-icon'>
            <BsCalendarDate />
        </div>
        
        <p>{selectedYear}</p>
        <div className='dropdown-icon'>
            {
                !showYears ?
                <MdOutlineKeyboardArrowRight size={20} onClick={showAllYears}/>
                : <MdOutlineKeyboardArrowDown onClick={showAllYears}/>

            }
           
        </div>
        <div className='dropdown-items'>
            {
                showYears &&
                <div className="year-dropdown">
                    {years.map((year) => (
                    <div
                        key={year}
                        className={`year-item ${selectedYear === year ? 'selected' : ''}`}
                        onClick={() => handleYearClick(year)}
                    >
                        {year}
                    </div>
                    ))}
                </div>
            }
        </div>
        
        
        
        
       
      
    </div>
  );
}

export default FilterDropdown
