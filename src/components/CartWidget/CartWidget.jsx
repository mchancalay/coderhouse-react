import React from 'react'

const CartWidget = () => {
    const imgUrl = '../../../src/assets/icons/carrito.png';
  return (
    <div className='carrito'>
        <div className='carrito__circulo'><span className='carrito__cantidad'>0</span></div>
        <img className='carrito__icon' src={imgUrl} alt="carrito icon" />
    </div>
  )
}

export default CartWidget