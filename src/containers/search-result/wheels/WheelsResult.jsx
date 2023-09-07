import React from 'react'
import { WheelCard } from '../../../components'
import './wheels-result.css'

const WheelsResult = () => {
  return (
    <div className='wheels-card-container'>
        <h2>Select a wheel to preview</h2>
        <div className='cards-container'>
            <WheelCard />
            <WheelCard />
            <WheelCard />
            <WheelCard />
            <WheelCard />
            <WheelCard />
            <WheelCard />
            <WheelCard />
            <WheelCard />
        </div>
      

    </div>
  )
}

export default WheelsResult
