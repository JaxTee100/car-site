import React from 'react'
import './dealer-view.css'
import Brand1 from '../../assets/brand1.png'
import Brand2 from '../../assets/brand2.png'
import Brand3 from '../../assets/brand3.png'
import { CarItem } from '../../components'

const DealerView = () => {
  return (
    <div className='dealer-view-container'>
      <CarItem name={'Tiger Paw Touring'} logo={Brand3}/>
      <CarItem name={'Geolandar CV GO58'} logo={Brand2}/>
      <CarItem name={'Defender 2'} logo={Brand1}/>
      
    </div>
  )
}

export default DealerView
