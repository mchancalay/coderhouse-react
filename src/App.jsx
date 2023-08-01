import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailCointainer from './components/ItemDetailCointainer/ItemDetailCointainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import Formulario from './components/Formulario/Formulario'

const App = () => {

  return ( 
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailCointainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes> 
        </CarritoProvider>
        <Formulario />
      </BrowserRouter>

      {/*<Mateflix />*/}
      {/*<Contact/>*/}
    </>
  )
} 

export default App