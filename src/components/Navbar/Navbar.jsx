import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Athenas Imp.</h1>
        <ul className='navbar__list'>
            <li>Hombre</li>
            <li>Mujer</li>
        </ul>
        <CartWidget cantidad={1}></CartWidget>
    </nav>
  )
}

export default Navbar