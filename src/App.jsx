import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contador from './components/Contador/Contador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar />
      <Contador stock={10} inicial={1} />
      <ItemListContainer greeting="Mis productos" />
    </>
  )
} 

export default App