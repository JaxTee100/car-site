import React, {useState} from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import './year-dropdown.css'

const YearDropDown = () => {
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
    <div className='year-dropdown-container'>
        <div className='year-icon'>
            <BsCalendarDate />
        </div>
        
        <p>{selectedYear}</p>
        <div className='year-dropdown-icon'>
            {
                !showYears ?
                <MdOutlineKeyboardArrowRight size={20} onClick={showAllYears}/>
                : <MdOutlineKeyboardArrowDown onClick={showAllYears}/>

            }
           
        </div>
        <div className='year-dropdown-items'>
            {
                showYears &&
                <div className="year-dropdown">
                    {years.map((year) => (
                    <div
                        key={year}
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

export default YearDropDown
