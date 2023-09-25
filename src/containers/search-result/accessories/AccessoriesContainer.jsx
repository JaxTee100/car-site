import React from 'react'
import './accessories-container.css'
import { Acc1, Acc2, Acc3, Acc4, Acc5, Acc6, Acc7, Acc8, Acc9, Acc10, Acc11, Acc12, Acc13, Acc14, Acc15} from '../../../assets'
import {PiFunnelSimpleBold} from 'react-icons/pi'
import { AccessoriesResult } from '../../../components'

const AccessoriesContainer = () => {
  return (
    <div className='accessories-results-container'>
      <div className='accessories-header'>
        <div className='text'>
          <h2>CR-V Hybrid Touring</h2>
          <p>Here are some accessories for your car</p>
        </div>
        <div className='filter'>
          <PiFunnelSimpleBold/>
          <p>Filter</p>
        </div>
      </div>
      <div className='result-cards'>
        <AccessoriesResult imageName={Acc1} />
        <AccessoriesResult imageName={Acc2} />
        <AccessoriesResult imageName={Acc3} />
        <AccessoriesResult imageName={Acc4} />
        <AccessoriesResult imageName={Acc5} />
        <AccessoriesResult imageName={Acc6} />
        <AccessoriesResult imageName={Acc7} />
        <AccessoriesResult imageName={Acc8} />
        <AccessoriesResult imageName={Acc9} />
        <AccessoriesResult imageName={Acc10} />
        <AccessoriesResult imageName={Acc11} />
        <AccessoriesResult imageName={Acc12} />
        <AccessoriesResult imageName={Acc13} />
        <AccessoriesResult imageName={Acc14} />
        <AccessoriesResult imageName={Acc15} />
      </div>
    </div>
  )
}

export default AccessoriesContainer
