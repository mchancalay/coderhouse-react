import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contador from './components/Contador/Contador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Mateflix from './components/Mateflix/Mateflix'
import Contact from './components/Contact/Contact'
import ItemDetailCointainer from './components/ItemDetailCointainer/ItemDetailCointainer'
import { mensajeConTitulo } from './patrons/hoc'
import Mensaje from './components/Mensaje/Mensaje'
import Item from './components/Item/Item'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  /*const NuevoComponente = mensajeConTitulo(Mensaje)*/

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
      {/*<NuevoComponente></NuevoComponente>*/}
    </>
  )
} 

export default App