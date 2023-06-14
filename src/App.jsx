import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contador from './components/Contador/Contador'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Contador stock={10} inicial={1}></Contador>
    </>
  )
} 

export default App