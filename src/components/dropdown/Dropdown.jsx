import React, { useState } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import './dropdown.css'

const Dropdown = () => {
    const [number, setNumber] = useState(2)
    const [isOpen, setIsOpen] = useState(false)

    const toggledown = () => {
        setIsOpen(!isOpen)
        console.log('open')
    }

    const handleSelect = (num) => {
        setNumber(num);
        setIsOpen(false)
    }
  return (
    <div className='dropdown-container'>
      <div className='dropdown-field'>
        <p>{number}</p>
        <span><MdOutlineKeyboardArrowDown size={24} onClick={toggledown}/></span>
      </div>
      {isOpen && (
        <div className='dropdown-items'>
            {Array.from({ length: 10 }, (_, index) => (
                <div
                    key={index}
                    className="option"
                    onClick={() => handleSelect(index)}
                >
                    {index}
                </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
