import React from 'react'
import './accessories.page.css'
import { AccessoriesResult, Footer, HondaNavbar } from '../../../components'
import AccessoriesContainer from '../../../containers/search-result/accessories/AccessoriesContainer'
import Search from '../../../components/search/Search'
import { SearchFilter } from '../../../containers'

const Accesories = () => {
  return (
    <div className='accessories-container'>
      <div className='accessories-nav'>
        <HondaNavbar />
      </div>
      <div className='accessories-search'>
        <SearchFilter />
      </div>
      
      <div className='accessories-items'>
        <AccessoriesContainer />
      </div>
      <div className='accessories-footer'>
        <Footer />
      </div>
      
    </div>
  )
}

export default Accesories
