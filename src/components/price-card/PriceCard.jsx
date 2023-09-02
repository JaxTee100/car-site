import React, { useState } from 'react'
import './price-card.css'

const PriceCard = () => {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const numbers = Array.from({ length: 11 }, (_, index) => index);

    const handleNumberChange = (event) => {
        const newNumber = parseInt(event.target.value);
        setSelectedNumber(newNumber);
    };
  return (
    <div className='price-card-container'>
      <div className='price'>
        <h1>WHEEL ASSY, AL 20X</h1>
        <p>#89085-235/65R17-104/H/SL</p>
        <div className='values'>
            <div className='price-value'>
                <p>Price: <span>$256.59</span> </p>
            </div>
            <div className='quantity'>
                <p>Quantity: </p>
                <select value={selectedNumber} onChange={handleNumberChange}>
                    {numbers.map((number) => (
                    <option key={number} value={number}>
                        <p>{number}</p>
                     </option>
                    ))}
                </select>
            </div>
            
            
        </div>
        <div className='product-total'>
            <p>Total:</p> <span>$1026.36</span>
        </div>
      </div>

      <div className='quote'>
        <h1>Your Personalized Quote</h1>
        <div>
            <p>Reference #4212494</p>
            <p>-Tue Mar 21 2023 - 10:24:07 AM</p>
        </div>
        
      </div>
      <div className='subtotal'>
        <p>Subtotal:</p>
        <span>$2,828.88</span>
      </div>
      <div className='tax'>
        <p>Tax(13%)</p>
        <span>$367.75</span>
      </div>
      <div className='total'>
        <p>Total:</p>
        <span>$3,196.63</span>
      </div>
      <div className='btns'>
        <button>Contact Seller</button>
        <button>Add to Quote</button>
      </div>
    </div>
  )
}

export default PriceCard
