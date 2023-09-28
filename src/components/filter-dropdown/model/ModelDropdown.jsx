import React, {useState} from 'react'
import {AiOutlineCar} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import './model-dropdown.css'

const ModelDropdown = () => {
    const [selectedModel, setSelectedModel] = useState('CR-V Hybrid'); // Default year
    const [showModels, setShowModels] = useState(false);


    const showAllModels = () =>{
        setShowModels(!showModels)
    }

    const models = ['CR-V Hybrid' ];

    const handleModelClick = (model) => {
        setSelectedModel(model);
        setShowModels(false)
    };

  return (
    <div className='model-dropdown-container'>
        <div className='model-icon'>
            <AiOutlineCar />
        </div>
        
        <p>{selectedModel}</p>
        <div className='model-dropdown-icon'>
            {
                !showModels ?
                <MdOutlineKeyboardArrowRight size={20} onClick={showAllModels}/>
                : <MdOutlineKeyboardArrowDown size={20} onClick={showAllModels}/>

            }
           
        </div>
        <div className='model-dropdown-items'>
            {
                showModels &&
                <div className="model-dropdown">
                    {models.map((model) => (
                    <div
                        key={model}
                        onClick={() => handleModelClick(model)}
                    >
                        {model}
                    </div>
                    ))}
                </div>
            }
        </div>
        
        
        
        
       
      
    </div>
  );
}

export default ModelDropdown
