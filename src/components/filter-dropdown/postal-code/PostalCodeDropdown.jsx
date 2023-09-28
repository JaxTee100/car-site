import React, {useState} from 'react'
import './postal-code-dropdown.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'

const PostalCodeDropdown = () => {
    const [selectedCode, setSelectedCode] = useState('15400'); // Default year
    const [showCodes, setShowCodes] = useState(false);


    // const showAllCodes = () =>{
    //     setShowCodes(!showCodes)
    // }
    

    // const handleCodesClick = (code) => {
    //     setSelectedCode(code);
    //     setShowCodes(false)
    // };

  return (
    <div className='code-dropdown-container'>
        <div className='code-icon'>
            <HiOutlineLocationMarker />
        </div>
        
        <p>{selectedCode}</p>
        
        
        
        
        
       
      
    </div>
  );
}

export default PostalCodeDropdown
