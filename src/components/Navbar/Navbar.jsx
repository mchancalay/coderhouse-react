import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to={"/"} className='navbar__logo'><h1>Mapple</h1></Link>
        <ul className='navbar__list'>
          <li><NavLink className={'navbar__item'} to="/categoria/1">AirPods</NavLink></li>
          <li><NavLink className={'navbar__item'} to="/categoria/2">Cargadores</NavLink></li>
          <li><NavLink className={'navbar__item'} to="/categoria/3">Combos</NavLink></li>
        </ul>
        <div className='navbar__cart'>
          <NavLink to="/cart"><CartWidget></CartWidget></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar