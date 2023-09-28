import React, { useState } from 'react'
import './toggle.css'

const Toggle = () => {
    const [vehicle, setVehicle] = useState(true);
    const [tires, setTires] = useState(false);

    const showVehicle = () =>{
        setVehicle(true)
        setTires(false)
      }
      const showTire = () =>{
        setVehicle(false)
        setTires(true)
      }





  return (
    <div className='toggle-container'>
      <button className={`vehicle-filter ${vehicle ? 'blue-btn': 'white-btn'}`} onClick={showVehicle}>
            Vehicle
        </button>
        <button className={`tire-size-filter ${tires ? 'blue-btn': 'white-btn'}`} onClick={showTire}>
            Tire Size
        </button>
    </div>
  )
}

export default Toggle
