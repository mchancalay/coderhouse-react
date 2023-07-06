import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailCointainer from './components/ItemDetailCointainer/ItemDetailCointainer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailCointainer />} />
        </Routes> 
      </BrowserRouter>

      {/*<Mateflix />*/}
      {/*<Contador stock={10} inicial={1} />*/}
      {/*<Contact/>*/}
    </>
  )
} 

export default App