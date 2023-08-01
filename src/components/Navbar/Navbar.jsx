import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div>
          <Link to="/">
            <h1 className='navbar__title'>mapple</h1>
          </Link>
        </div>
        <ul className='navbar__list'>
          <li><NavLink className={'navbar__item'} to="/categoria/3">Buzos</NavLink></li>
          <li><NavLink className={'navbar__item'} to="/categoria/2">Camisas</NavLink></li>
          <li><NavLink className={'navbar__item'} to="/categoria/1">Chombas</NavLink></li>
        </ul>
        <div>
          <NavLink className={'navbar__cart'} to="/cart"><CartWidget></CartWidget></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar