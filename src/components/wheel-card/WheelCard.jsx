import React from 'react'
import './wheel-card.css'
import Dropdown from '../dropdown/Dropdown'
import {AiOutlineInfoCircle, AiOutlineShoppingCart} from 'react-icons/ai'

const WheelCard = () => {
  return (
    <div className='wheel-card-container'>
      <div className='top'>
        <div className='wheel-img'>

        </div>
        <div className='desc'>
            <h2>08W19-T3L-300</h2>
            <div className='size'>
                <p>Part #: <strong>08W19-T3L-300</strong></p>
                <p>Diameter: <strong>17</strong></p>
            </div>
            <div className='quantity'>
                <p>Price: <strong>$194.07</strong></p>
                <p className='drop'>Quantity: <Dropdown /></p>
            </div>
            <p>Total: <strong>$776.28</strong></p>
        </div>
      </div>
      <div className='footer-items'>
        <div className='view-details'>
            <AiOutlineInfoCircle />
            <p>View Details</p>
        </div>
        <p>|</p>
        <div className='quote'>
            <AiOutlineShoppingCart />
            <p>Add to quote</p>
        </div>
      </div>
    </div>
  )
}

export default WheelCard
