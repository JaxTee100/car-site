import React, {useState} from 'react'
import './brand-dropdown.css'
import {LuSettings2} from 'react-icons/lu'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'

const BrandDropdown = () => {
    const [selectedBrand, setSelectedBrand] = useState('Honda'); // Default year
    const [showBrands, setShowBrands] = useState(false);


    const showAllBrands = () =>{
        setShowBrands(!showBrands)
    }

    const brands = ["Honda", "Acura", "Hyundai", "Mazda" ];

    const handleBrandClick = (year) => {
        setSelectedBrand(year);
        setShowBrands(false)
    };

  return (
    <div className='brand-dropdown-container'>
        <div className='brand-icon'>
            <LuSettings2 />
        </div>
        
        <p>{selectedBrand}</p>
        <div className='brand-dropdown-icon'>
            {
                !showBrands ?
                <MdOutlineKeyboardArrowRight size={20} onClick={showAllBrands}/>
                : <MdOutlineKeyboardArrowDown size={20} onClick={showAllBrands}/>

            }
           
        </div>
        <div className='brand-dropdown-items'>
            {
                showBrands &&
                <div className="brand-dropdown">
                    {brands.map((brand) => (
                    <div
                        key={brand}
                        onClick={() => handleBrandClick(brand)}
                    >
                        {brand}
                    </div>
                    ))}
                </div>
            }
        </div>
        
        
        
        
       
      
    </div>
  );
}

export default BrandDropdown
