import React from 'react'
import  { Routes, Route} from 'react-router-dom'
import { AccessoriesPage, ContactPage, HondaPage, PackagesPage, TiresPage, WheelsPage } from '../pages'


const HondaRoutes = () => {
  return (
      <Routes>
        <Route exact path='/honda-home' element={<HondaPage />} />
        <Route  path='/honda-tires' element={<TiresPage />} />
        <Route  path='/honda-wheels' element={<WheelsPage />} />
        <Route  path='/honda-accessories' element={<AccessoriesPage />} />
        <Route  path='/honda-packages' element={<PackagesPage />} />
        <Route  path='/honda-contact' element={<ContactPage />} />


      </Routes>
    
  )
}

export default HondaRoutes
