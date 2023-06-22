import React, { useEffect, useState } from 'react'

const CartWidget = ({cantidad}) => {

  const [color, setColor] = useState("#d80e0e");

  useEffect(() => {
    if(cantidad > 0){
      setColor("#07bc0c");
    } else {
      setColor("#d80e0e");
    }
  },[cantidad])

  const regularCantidad = (cantidad) => {
    if(cantidad < 99){
      return cantidad
    } else {
      return "+99"
    }
  }

  const imgUrl = '../../../src/assets/icons/carrito.png';

  return (
    <div className='carrito'>
      <div className='carrito__circulo' style={{backgroundColor: color}}><span className='carrito__cantidad'>{regularCantidad(cantidad)}</span></div>
      <img className='carrito__icon' src={imgUrl} alt="carrito icon" />
    </div>
  )
}

export default CartWidget