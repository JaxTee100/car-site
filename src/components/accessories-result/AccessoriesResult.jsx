import React from 'react'
import './accessories-result.css'
import {BsCart2} from 'react-icons/bs'

const AccessoriesResult = ({imageName}) => {
  return (
    <div className='accessories-result-container'>
      <div className='accesories-header'>
        <div className='accessories-image'>
            <img src={imageName } alt='steerwheel'/>
         </div>
        <div className='accessories-details'>
            <h2>Engine Block Heater</h2>
            <span>Installation:  <strong>Yes</strong></span>
            <p>Price: <strong>$475.00</strong></p>
        </div>
      </div>
      <button>
        <BsCart2 size={20} className='cart-icon'/>
        <p>Add to Quote</p>
      </button>
    </div>
  )
}

export default AccessoriesResult
