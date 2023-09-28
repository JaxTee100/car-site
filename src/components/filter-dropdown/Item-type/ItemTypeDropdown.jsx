import React, {useState} from 'react'
import './item-type-dropdown.css'
import {PiPokerChipDuotone} from 'react-icons/pi'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown} from 'react-icons/md'

const ItemTypeDropdown = () => {
    const [selectedItem, setSelectedItem] = useState('Accessories'); // Default year
    const [showItems, setShowItems] = useState(false);


    const showAllItems = () =>{
        setShowItems(!showItems)
    }

    const items = ['Accessories', 'Tires', 'Wheels', 'Packages'  ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowItems(false)
    };

  return (
    <div className='item-dropdown-container'>
        <div className='item-icon'>
            <PiPokerChipDuotone size={18}/>
        </div>
        
        <p>{selectedItem}</p>
        <div className='item-dropdown-icon'>
            {
                !showItems ?
                <MdOutlineKeyboardArrowRight size={20} onClick={showAllItems}/>
                : <MdOutlineKeyboardArrowDown size={20} onClick={showAllItems}/>

            }
           
        </div>
        <div className='item-dropdown-items'>
            {
                showItems &&
                <div className="item-dropdown">
                    {items.map((item) => (
                    <div
                        key={item}
                        onClick={() => handleItemClick(item)}
                    >
                        {item}
                    </div>
                    ))}
                </div>
            }
        </div>
        
        
        
        
       
      
    </div>
  );
}

export default ItemTypeDropdown
